/*
JS权威指南Dom操作
 */
window.onload = function(){
    {
        {
            //document links forms images操作,可以直接通过id或者name获取
            var imgs = document.images;
            var a = document.links;
            var forms = document.forms;
            console.log(imgs,a,forms,forms.namedItem('form1'))
        }
        {
            //getElementsByClassName 可以用多个class，顺序无关，返回包含class的对象
            let classList1and2 = document.getElementsByClassName('class2 class1')
            console.log(classList1and2)

        }
        {
            //遍历文档 parentNode,childNodes,firstChild,lastChild,nextSibling,previoursSibling
            var imgs = document.images;
            var a = document.links;
            var forms = document.forms;
            console.log(a[1].firstChild,a[1].childNodes)
        }

    }
}
