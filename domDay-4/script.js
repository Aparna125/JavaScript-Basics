// dom using id--access element by id and store it in variable
var head2=document.getElementById('head2');
// manipulating its style-->aligning it to the center
head2.style.textAlign='center';
head2.style.color='green';
// to change the content 
// textContent change only content
// innerTextchange the style also
head2.textContent='APARNA';
head2.innerText='Its back!';

var div1=document.getElementById('div1');
div1.innerHTML=`<p>I am a paragraph</p>`;

var div2=document.getElementById('div2');
div2.innerHTML=`<img src=https://hips.hearstapps.com/hmg-prod/images/dahlia-1508785047.jpg?crop=1.00xw:0.669xh;0,0.0136xh>`

var list=document.getElementsByClassName('lichild');
console.log(list);
list[0].textContent='Pinapple';
list[1].style.color='green';

// by tag name
var par=document.getElementsByTagName('p');
par[1].style.color='Orange';
par[2].style.color='pink';

// query selector
var query1=document.querySelector('input[type=date]');
query1.style.backgroundColor='grey';

// we can use id and class name also inside querySelector
var query2=document.querySelector('#input1');
query2.style.color='green';


