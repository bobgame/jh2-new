import os
import re
import shutil


def run_npm_command(directory, command):
    try:
        # 检查目录是否存在
        if not os.path.isdir(directory):
            print(f"指定的目录 '{directory}' 不存在。")
            return

        # 切换到指定目录
        os.chdir(directory)

        # 使用 os.popen 执行 npm 命令并获取输出
        cmd = f"npm {command}"
        output = os.popen(cmd).read()
        print(output)
    except Exception as e:
        print(f"发生错误：{e}")


def delete_contents_inside_directory(directory_path):
    for root, dirs, files in os.walk(directory_path, topdown=False):
        for file in files:
            file_path = os.path.join(root, file)
            os.remove(file_path)
        for dir in dirs:
            dir_path = os.path.join(root, dir)
            if not dir_path.startswith(directory_path):
                continue
            shutil.rmtree(dir_path)


def copy_specific_items(source_directory, destination_directory, items_to_copy):
    for item_name in items_to_copy:
        source_path = os.path.join(source_directory, item_name)
        destination_path = os.path.join(destination_directory, item_name)
        if os.path.isdir(source_path):
            if os.path.exists(destination_path):
                shutil.rmtree(destination_path)
            shutil.copytree(source_path, destination_path)
        else:
            if os.path.exists(destination_path):
                os.remove(destination_path)
            shutil.copy2(source_path, destination_path)


def remove_ts_comments(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()
    # 先去除可能包含 URL 和 API 的行
    lines = content.split("\n")
    new_lines = []
    for line in lines:
        if not re.search(r"(https:|http:|api:|socket:)", line) and "//" in line:
            line = line.split("//")[0]
        new_lines.append(line)
    content = "\n".join(new_lines)
    # 删除 TypeScript 多行注释
    content = re.sub(r"/\*[\s\S]*?\*/", "", content)
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(content)


def remove_html_comments(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()
    # 删除 HTML 注释
    content = re.sub(r"<!--[\s\S]*?-->", "", content)
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(content)


def remove_scss_comments(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()
    # 先去除可能包含 URL 和 API 的行
    lines = content.split("\n")
    new_lines = []
    for line in lines:
        if not re.search(r"(https:|http:|api:|socket:)", line) and "//" in line:
            line = line.split("//")[0]
        new_lines.append(line)
    content = "\n".join(new_lines)
    # 删除 SCSS 多行注释
    content = re.sub(r"/\*[\s\S]*?\*/", "", content)
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(content)


def process_directory_comment(directory_path):
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            file_path = os.path.join(root, file)
            if file.endswith(".ts"):
                remove_ts_comments(file_path)
            elif file.endswith(".html"):
                remove_html_comments(file_path)
            elif file.endswith(".scss"):
                remove_scss_comments(file_path)


def remove_console_logs(file_path):
    try:
        lines = []
        with open(file_path, "r", encoding="utf-8") as file:
            for line in file:
                # 检查是否包含 console.log()
                if "console.log(" not in line:
                    lines.append(line)
                else:
                    # 尝试更精确地处理包含多行字符串的情况
                    parts = line.split("console.log(")
                    for i, part in enumerate(parts):
                        if i == 0:
                            lines.append(part)
                        else:
                            end_index = part.find(");")
                            if end_index != -1:
                                remaining = part[end_index + 2 :]
                                lines.append(remaining)
        with open(file_path, "w", encoding="utf-8") as file:
            file.writelines(lines)
    except Exception as e:
        print(f"处理文件 {file_path} 时出现错误：{e}")


def remove_production_check(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()
        lines = content.split("\n")
        new_lines = []
        in_production_check = False
        nesting_level = 0
        for line in lines:
            if "if (!environment.production)" in line:
                in_production_check = True
                nesting_level = 1
            elif in_production_check:
                for char in line:
                    if char == "{":
                        nesting_level += 1
                    elif char == "}":
                        nesting_level -= 1
                        if nesting_level == 0:
                            in_production_check = False
                if not in_production_check:
                    continue
            else:
                new_lines.append(line)
        new_content = "\n".join(new_lines)
        with open(file_path, "w", encoding="utf-8") as file:
            file.write(new_content)
    except Exception as e:
        print(f"处理文件 {file_path} 时出现错误：{e}")


def process_multiple_empty_lines(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            lines = file.readlines()
        new_lines = []
        consecutive_empty_lines = 0
        for line in lines:
            if line.strip() == "":
                consecutive_empty_lines += 1
                if consecutive_empty_lines == 1:
                    new_lines.append(line)
            else:
                consecutive_empty_lines = 0
                new_lines.append(line)
        new_content = "".join(new_lines)
        with open(file_path, "w", encoding="utf-8") as file:
            file.write(new_content)
    except Exception as e:
        print(f"处理文件 {file_path} 时出现错误：{e}")


def process_folder_remove_non_prod(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith(".ts"):
                file_path = os.path.join(root, file)
                remove_console_logs(file_path)
                remove_production_check(file_path)
                process_multiple_empty_lines(file_path)
