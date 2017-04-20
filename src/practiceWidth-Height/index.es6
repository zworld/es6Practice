/*
 页面元素坐标和偏移（clientX/pageX/screenX/layerX/offsetWidth/scrollWidth/clientWidth等）相关整理
 */
var el = document.querySelector('#div2');
el.addEventListener('click',function (e) {
    var content = `鼠标相对于视口大小：clientX：${e.clientX},clientY: ${e.clientY}`
    content += `\n鼠标相对于屏幕大小：screenX：${e.screenX},screenY: ${e.screenY}`;
    content += `\n\n元素的偏移量（offsetLeft/offsetTop),相对于relative的父元素，如果没有则是body,和滚动条无关! offsetLeft：${this.offsetLeft},offsetTop: ${this.offsetTop}`;
    content += `\n\n  元素的客户区的大小就是指元素内容及其内边距所占空间的大小（滚动条占用的空间不计算在内）（clientWidth=width+padding（left、right）/clientHeight=height+padding（top、bottom）)，clientWidth：${this.clientWidth},clientHeight: ${this.clientHeight}`;
    content += `\n\n  元素的大小就是指元素内容,内边距，border距所占空间的大小（offsetWidth=width+padding（left、right）+border/offsetHeight=height+padding（top、bottom）)+border，offsetWidth：${this.offsetWidth},offsetHeight: ${this.offsetHeight}`;
    content += `\n\n  滚动条滚动距离 (scrollLeft,scrollTop)  scrollLeft：${this.scrollLeft},scrollTop: ${this.scrollTop}`;
    content += `\n\n  包含滚动部分的所有内容宽高 (scrollWidth,scrollHeight)  scrollWidth：${this.scrollWidth},scrollHeight: ${this.scrollHeight}`;
    var x = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    content += `\n\n  window.pageXOffset/window.pageYOffset相当于window.scrollX/window.scrollY，返回的是整个文档document在水平和竖直方向滚动了的距离  window.pageXOffset：${x},window.pageYOffset: ${y}`;
    content += `\n\n  window.innerHeight,window.innerWidth文档的视口宽高  window.innerWidth：${window.innerWidth},window.innerWidth: ${window.innerHeight}`;
    content += `\n\n  window.outerHeight,window.outerWidth浏览器可视宽高，包含书签那些  window.outerWidth: ${window.outerWidth}，window.outerHeight：${window.outerHeight}`;
    var bcr = this.getBoundingClientRect();
    content += `\n\n  getBoundingClientRect用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置  left元素左边离页面左边距的距离:${bcr.left},right元素右边离页面左边距的距离:${bcr.right},top元素上边离页面上边距的距离:${bcr.top},bottom元素下边离页面上边距的距离:${bcr.bottom},width等价于offsetWidth:${bcr.width},width等价于offsetHeight:${bcr.height }`
    var a  = {test:1}
    console.log(this.getBoundingClientRect())

    this.innerText = content
})