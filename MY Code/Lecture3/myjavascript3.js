var myDiv =document.getElementById('div1');
console.log(myDiv.children);
console.log(myDiv.children[0]);
console.log(myDiv.firstElementChild);
console.log(myDiv.childElementCount);

console.log(myDiv.childNodes);
console.log(myDiv.childNodes.length);
console.log(myDiv.childNodes[0]);
console.log(myDiv.firstChild);
/**-----------------------Part 2----------------------------------- */
myDiv.removeChild(myDiv.lastChild);
console.log(myDiv.childNodes.length);
/**-----------------------Part 3----------------------------------------- */
var newDiv =document.getElementById('newDiv');
var newEle =document.createElement('a');
var firstEle =document.createElement('hr');
var newText =document.createTextNode('Facebook');
newEle.appendChild(newText);//add chid with value
newDiv.appendChild(newEle);//add child with parent
/**________________________________________________________________________ */
newEle.setAttribute('href','www.facebook.com');

newDiv.insertBefore(firstEle,newDiv.children[0]);//addition