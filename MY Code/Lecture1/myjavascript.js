var myP=document.createElement('p');
//var content=document.createTextNode("Hello >>Wellcom");
myP.appendChild(document.createTextNode("Hello >>Wellcom"));
document.body.appendChild(myP);
/*___________________part2________________________*/
var m1=document.getElementById('div1');
m1.innerHTML="Hi Bro 1";
var m2=document.getElementsByClassName('test1');
if(m2.length==1){
console.log('is length = 1');
}
var m3=document.getElementsByTagName('div');
console.log(m3.length);
var m4=document.querySelectorAll('div.test2');
m4[0].innerHTML="Hi Bro 2";
/*------------------------part3 -------------------------- */
var result=document.getElementById("result");
result.innerHTML=document.title;
result.innerHTML=document.images[1].src;
result.innerHTML=document.forms.length;
result.innerHTML=document.links.length;
result.innerText=document.body.innerHTML;
if(document.body.innerHTML.indexOf("password")){
document.write("exist password in body");

}
/*__________________________part4 ________________________________ */
var s1=document.getElementById("div4");
//s1.innerHTML="<p>hello</p>";
//s1.outerHTML="<p>hello </p>";
s1.textContent="<p>hello</p>";