var myDiv=document.querySelector('div');//.class_name
console.log(myDiv.id);//get
var myDiv2=document.getElementsByClassName("test2");
console.log('before addition',myDiv2.id);
myDiv2.id='div2';
console.log('after addition',myDiv2.id);

var myImage=document.querySelector('img');
myImage.src="https://via.placeholder.com/150/f00";
console.log(myImage.alt);
/*__________________________Part 2_______________________________*/ 
myImage.setAttribute('src','https://via.placeholder.com/150/f00');
console.log(myImage.getAttribute('src'));
if(myImage.hasAttribute('alt'))
{
    console.log("yes...exist alt");
}
else{ console.log("No...not exist alt");}
myImage.removeAttribute('alt');
/*___________________________Part 3_______________________________________ */
var myDiv3 =document.getElementById('div3');
console.log(myDiv3.classList);
console.log(myDiv3.classList.contains('class1'));
console.log(myDiv3.classList.item(0));//as index
//**_________________________Part 4_____________________________________________ */
myDiv3.classList.add('class5','class6');
myDiv3.classList.remove('class1','class2');
document.write('<hr>',myDiv3.classList);

function hide_element(){
    var myelement=document.getElementById('img_hidden');
    myelement.classList.toggle('hidden');
}