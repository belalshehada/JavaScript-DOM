var butt1=document.getElementById('button1');
function ExcuteClick(){
    document.getElementById('button1').click();
}
//setTimeout(function(){ alert("Hello"); }, 5000);

var myDiv =document.getElementById('div1');
var myP =document.getElementById('intro');
console.log(myDiv.contains(myP));


var str ="hi arab >>how are you!!";
document.write(str.includes('hi'));

/**___________________________Part 2__________________________________________ */
console.log('client',myDiv.clientHeight);//just padding no any thing
console.log(myDiv.clientWidth);

console.log('scroll',myDiv.scrollHeight);//padding + scroll
console.log(myDiv.scrollWidth);

console.log('offset',myDiv.offsetHeight);//padding+scroll+border without margin
console.log(myDiv.offsetWidth);

console.log('scroll',myDiv.scrollTop);//space  for scroll
console.log(myDiv.scrollLeft);
document.body.scrollTop='200px';
document.body.scrollLeft='200px';


console.log('client',myDiv.clientTop);
console.log(myDiv.clientLeft);
/*---------------------------Part 3-------------------------------------------------- */
var Mydiv2 =document.getElementById('div2');
Mydiv2.style.backgroundColor='#EEE';
Mydiv2.style.padding='20px';
Mydiv2.style.fontFamily='Arial';
Mydiv2.style.color='#f00';
myDiv.style.margin='30px';



