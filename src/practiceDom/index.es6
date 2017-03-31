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
            console.log(a[1].firstChild,a[1].childNodes,document.querySelectorAll('a'))
        }
        // {
        //     //property和attribute的区别
        //     //HTML标签中定义的属性和值会保存该DOM对象的attributes属性里面；property是规范的DOM对象属性
        //     let checkbox = document.querySelectorAll('#checkbox');
        //     console.log(checkbox)//可以看到该dom对象里面有attributes属性，该属性里面包含了有自定义的sth以及所有在dom上申明的属性
        //     console.log(checkbox[0].attributes)
        //     console.log(checkbox[0].attributes.sth,checkbox[0].sth)//由于sth不是规范属性，所以在dom对象上没有，而在attributes上有
        //     console.log(checkbox[0].attributes.checked,checkbox[0].checked)//由于checked是规范属性但没有在dom上申明，所以在attribute上没有，而在dom对象里有
        //
        //     //改变propery
        //     //添加propery属性可以在dom对象里面获取，但在html不显示
        //     checkbox[0].addPropery = 1
        //     console.log(checkbox,checkbox[0],checkbox[0].addPropery)
        //     ///添加propery属性无法再attribute里面获取
        //     console.log(checkbox[0].attributes.addPropery,checkbox[0].getAttribute('addPropery'))
        //
        //     //修改Dom上面已经有的propery,能够影响attributes
        //     checkbox[0].id = 'changeCheckbox';
        //     console.log(checkbox[0],checkbox[0].id,checkbox[0].attributes.id)
        //
        //     //修改dom上面没有的propery
        //     // checkbox[0].checked = true;
        //     console.log(checkbox[0].attributes.checked)
        //     //修改非固有propery,不能影响attributes
        //     checkbox[0].sth = 'whathappen';
        //     console.log(checkbox[0],checkbox[0].sth,checkbox[0].attributes.sth)
        //
        //     //改变attribute
        //
        //     //添加非固有属性，property不被影响
        //     checkbox[0].setAttribute('addAttribute','add')
        //     console.log(checkbox[0].addAttribute,checkbox[0].attributes.addAttribute,checkbox[0].getAttribute('addAttribute'))
        //
        //     //改变固有属性,propery会影响
        //     var checkbox = document.querySelector('#changeCheckbox');
        //     // checkbox.setAttribute('checked',false);
        //     // Specifying the CHECKED attribute with an arbitrary value has the same effect as specifying it with no value.
        //     // For example, all of the following declarations have the same effect: checked, checked="true", checked="false", checked="on", checked="checked".
        //     // Although Boolean attributes may be used with no value in HTML, for XHTML compatibility, always use the CHECKED attribute in the following format: checked="checked".
        //     checkbox.removeAttribute('checked')
        //     //对于checked而言，设置attribute的checked,不管值为false,true,还是字符串任何类型，都将把property中的checked设置为true。如果想通过设置attribute来删除选中，只能当dom中有这个元素的时候移除attribute中checked属性(removeAttribute),否则就在attribute上面设置
        //     checkbox.checked = true;
        //     // console.log(checkbox.checked,checkbox.getAttribute('checked'))//checked的property的修改无法影响attribute
        //     //
        //     // checkbox.removeAttribute('checked')//删除该属性 可以将checked的property设置为false
        //     checkbox.removeAttribute('checked')//由于html中已经没有该属性，所以删除了也无法影响dom对象中的该属性
        // }
        {
            //property和attribute的区别
            //HTML标签中定义的属性和值会保存该DOM对象的attributes属性里面；property是规范的DOM对象属性

            /*
            特殊的checked  修改property中的checked，不会影响attribute中的属性，selected也有同样问题
             */
            //当checkebox在html设置checked为任意值，DOM对象property里面的checked都为true
            let checkbox1 = document.querySelector('#checkbox1');
            console.log(checkbox1.checked,checkbox1.getAttribute('checked'))
            //html中有该checked属性的时候，只能通过删除该属性来对DOM对象property中的该属性设置为false(前提是html必须有该属性，则attributes中才有checked。最终才能生效。反之不能)
            checkbox1.removeAttribute('checked')
            console.log(checkbox1.checked,checkbox1.getAttribute('checked'))

            //id,name,(attribute的class对应property中的ClassName)等设置property或者attribute 两者都是相互关联的
            let text = document.querySelector('#text');
            text.name = 'test';
            console.log(text.getAttribute('name'))

            //value 只能从attribute传入property
            text.value = 'test';
            console.log(text.value,text.getAttribute('value'))
            text.setAttribute('value','test222');
            console.log(text.dataset.test)

        }
    }
}
