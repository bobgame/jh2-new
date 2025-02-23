import os

from base_tool import (
    copy_specific_items,
    delete_contents_inside_directory,
    process_directory_comment,
    process_folder_remove_non_prod,
    run_npm_command,
)

# 示例用法
delete_contents_inside_directory("../../jianghu2/src")

# 示例用法
source_dir = "../jh2-new-app/"
destination_dir = "../../jianghu2"
items_to_copy = [
    ".vscode",
    "src",
    # "node_modules",
    "tools",
    ".browserslistrc",
    ".editorconfig",
    ".eslintrc.json",
    ".gitignore",
    ".prettierrc.js",
    "angular.json",
    "custom-webpack.config.js",
    "package.json",
    "tsconfig.app.json",
    "tsconfig.json",
]
copy_specific_items(source_dir, destination_dir, items_to_copy)

os.remove("../../jianghu2/tools/node-pack-maze.js")

# 指定要遍历的文件夹路径
folder_path = "../../jianghu2/src"

process_directory_comment(folder_path)

target_folder = "../../jianghu2/src"  # 将这里替换为你的目标文件夹路径
process_folder_remove_non_prod(target_folder)


# 示例用法
target_directory = "../../jianghu2"
command_to_run = "run lint"
run_npm_command(target_directory, command_to_run)
