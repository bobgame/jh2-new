var preloadImageDoneNum = 0;
var preFetchImageDoneNumPer = 0;
var preFetchImageList = [];
function loadImage() {
  allPreImg.forEach(function (item) {
    var img = new Image();
    img.addEventListener("load", preFetchImageLoadHandler);
    img.src = item;
  });
}
function preFetchImageLoadHandler(e) {
  // console.log(preFetchImageDoneNum, allPreImg.length);
  preFetchImageList.push(this.cloneNode().src); //复制当前图片元素
  preloadImageDoneNum++;
  var tempPre =
    Math.floor((preloadImageDoneNum * 1000) / (allPreImg.length - 6)) / 10;
  if (tempPre >= 92 && tempPre < 95) {
    tempPre = 95;
  } else if (tempPre >= 95) {
    tempPre = 100;
  }
  preFetchImageDoneNumPer = tempPre;
  var jh2WebLoadingTP = document.getElementById("jh2-web-loading-text-percent")
  if (jh2WebLoadingTP) jh2WebLoadingTP.innerText = preFetchImageDoneNumPer + '';
  var jh2WebLoadingTH = document.getElementById("jh2-web-loading-highlight")
  if (jh2WebLoadingTH) jh2WebLoadingTH.style.width = preFetchImageDoneNumPer + "%";
}

loadImage();