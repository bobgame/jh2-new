/**
 * fileDisplay(url, callback)
 * @param url: 你即将读取的文件夹路径
 * @param callback: 回调函数
 */

// node fs模块
const fs = require("fs");
const { type } = require("os");
// node path模块
const path = require("path");
// 收集所有的文件路径
const arr = [];
let timer = null;
const fileDisplay = (url, cb) => {
  const filePath = path.resolve(url);
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, (err, files) => {
    if (err) return console.error("Error:(spec)", err);
    files.forEach((filename) => {
      //获取当前文件的绝对路径
      const filedir = path.join(filePath, filename);
      // fs.stat(path)执行后，会将stats类的实例返回给其回调函数。
      fs.stat(filedir, (eror, stats) => {
        if (eror) return console.error("Error:(spec)", err);
        // 是否是文件
        const isFile = stats.isFile();
        // 是否是文件夹
        const isDir = stats.isDirectory();
        if (isFile) {
          // 这块我自己处理了多余的绝对路径，第一个 replace 是替换掉那个路径，第二个是所有满足\\的直接替换掉
          arr.push(filedir.replace(__dirname, "").replace(/\\/gim, "/"));
          // 最后打印的就是完整的文件路径了
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => cb && cb(arr), 200);
        }
        // 如果是文件夹
        if (isDir) fileDisplay(filedir, cb);
      });
    });
  });
};
// 测试代码
fileDisplay(process.cwd() + "/src/assets/images", (arr) => {
  // console.log("process.cwd()", process.cwd());
  const prePath = process.cwd().replace(/\\/g, "/") + "/src";
  // console.log("prePath", prePath);
  const preArr = arr.filter((item) =>
  (
    !item.includes(".gitkeep") &&
    !item.includes("avatar") &&
    !item.includes("images/hua") &&
    (item.includes(".png") ||
      item.includes(".svg") ||
      item.includes(".jpg") ||
      item.includes(".jpeg") ||
      item.includes(".gif") ||
      item.includes(".bmp") ||
      item.includes(".webp"))
  )
  ).map((item) => item.replace(new RegExp(prePath, "g"), ""));
  const lazyArr = arr.filter((item) =>
  (
    !item.includes(".gitkeep") &&
    item.includes("avatar") &&
    item.includes("images/hua") &&
    (item.includes(".png") ||
      item.includes(".svg") ||
      item.includes(".jpg") ||
      item.includes(".jpeg") ||
      item.includes(".gif") ||
      item.includes(".bmp") ||
      item.includes(".webp"))
  )
  ).map((item) => item.replace(new RegExp(prePath, "g"), ""));
  // console.log(arr, "--");
  // console.log(newArr, "-=");
  var allPreImage =
    "var allPreImg = " +
    JSON.stringify(preArr.sort(), null, 2).replace(/"/g, "'") +
    "\n";
  var allLazyImage = `export const allLazyImg: string[] = ${JSON.stringify(
    lazyArr.sort(),
    null,
    2
  ).replace(/"/g, "'")}`;
  fs.writeFileSync("src/pre/pre-img-src.js", allPreImage);
  console.log("Write src/pre/pre-img-src.js success!");

  fs.writeFileSync("src/pre/lazy-img-src.ts", allLazyImage);
  console.log("Write src/pre/lazy-img-src.ts success!");
});
// commonjs规范
// module.exports = fileDisplay;
// es6 规范
// export default fileDisplay
