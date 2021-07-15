console.log(document.lastModified);//info
console.log(document.inputEncoding);
console.log(document.documentURI);
/**-_____________________________________________- */
var myDiv=document.createElement('div');
var myText=document.createTextNode('Hello every one *_*');
myDiv.appendChild(myText);
document.body.appendChild(myDiv);

var addAttributes=document.createAttribute('class');
addAttributes.value='div1';
myDiv.setAttributeNode(addAttributes);
/**________________________Part 2_________________________ */
var myButton =document.getElementById('button1');
myButton.onclick=function(){

   myDiv.textContent='this is methode for onclick';
}

window.onload=function(){

    //alert('accept for cookies??')
}

window.onscroll=function(){

   // alert('The Scroll is tall')
}

window.onresize=function(){

    //alert('The window size is changed');
}
/**-------------------------Part 3------------------------------------------------------------ */
var myinput=document.getElementById('input1');
var myform=document.getElementById('main');

myinput.onfocus=function(){
//alert('this is foucs in input');
}

myinput.onblur=function(){
    myDiv.textContent='No foucs in input';
    }

     myform.onsubmit=function(evt){
        evt.preventDefault();
        }  

        /**____________________Part 4_____________________________________________________________ */
        var myButton3=document.getElementById('button3');
        myButton3.onclick=function(){

            //alert('one click');
        }
        myButton3.ondblclick=function(){

            alert('double click');
        }
        myButton3.oncontextmenu=function(){

            alert('Right click');
        }
        myButton3.onmouseenter==function(){

            alert('Hover click');
        }
        myButton3.onmouseleave=function(){

            alert('leave click');
        }
 
        /**______________________Part 5____________________________________________________________________________ */
        var checkbox1=document.getElementById('checkbox');
        var myDiv3=document.getElementById('div3');
        checkbox1.onkeyup=function()
        {
           myDiv3.textContent=checkbox1.value;

        }
        checkbox1.onkeypress=function(){

            //myDiv3.textContent=checkbox1.value;

        }
        checkbox1.onkeydown=function(){

          // myDiv3.textContent=this.value;

 
        }

        


      
