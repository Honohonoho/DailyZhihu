var scale = 1 / window.devicePixelRatio
var width = document.documentElement.clientWidth / window.devicePixelRatio//获取设备屏幕宽度
// var scale = width / 320; //缩放比例，基准为320px
var css = 
`html{
  font-size: ${width / 10 * window.devicePixelRatio}px;
}`
document.write(
  `<meta name="viewport" 
  content="initial-scale=${scale}, 
  maximum-scale=${scale}, 
  minimum-scale=${scale}, 
  user-scalable=no">`
)
document.write(`<style>${css}</style>`)