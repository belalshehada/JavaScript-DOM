var myDiv =document.getElementById("div1");//1
console.log(myDiv.nodeName);//text&node
console.log(myDiv.childNodes[0].nodeName);
console.log(myDiv.children[0].tagName);
console.log(myDiv.firstChild.nodeValue);
console.log(myDiv.children[0].nodeType);
/**_____________________Part 2__________________________________ */
var newDiv =document.getElementById('newDiv1');//2
var mycopy=myDiv.cloneNode(true);
newDiv.appendChild(mycopy);
//console.log(newDiv); 
/**____________________Part 3____________________________________________- */
console.log(myDiv.parentElement);
console.log(myDiv.firstChild.parentNode);
console.log(myDiv.childNodes[1].nextSibling);
console.log(myDiv.children[1].nextElementSibling);

console.log(myDiv.childNodes[1].previousSibling);
console.log(myDiv.children[1].previousElementSibling);
/**____________________Part 4______________________________________________________ */
window.onload=function()
{
    'use srtict'
    document.getElementById('input1').focus();
}
var button1=document.getElementById('button1');
button1.onclick=function()
{
    'use srtict'
    document.getElementById('input1').blur();
}
