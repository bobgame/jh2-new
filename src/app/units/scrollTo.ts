export const scrollToItem = (element: any, num: number, time?: number) => {
  if (!time) {
    element.scrollTop = num
    return num
  }
  const spacingTime = 20 // 设置循环的间隔时间  值越小消耗性能越高
  let spacingInex = time / spacingTime // 计算循环的次数
  let nowTop = document.body.scrollTop + element.scrollTop // 获取当前滚动条位置
  const everTop = (num - nowTop) / spacingInex // 计算每次滑动的距离
  const scrollTimer = setInterval(() => {
    if (spacingInex > 0) {
      spacingInex--
      scrollToItem(element, (nowTop += everTop))
    } else {
      clearInterval(scrollTimer) // 清除计时器
    }
  }, spacingTime)
}
