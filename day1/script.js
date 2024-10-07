/*const para=document.createElement('a')
const h1=document.createElement('h1')
para.textContent=' <h2><a href="https://www.youtube.com/">xfjhxdgjrj</a></h2>'
para.setAttribute('href','https://www.youtube.com')
para.setAttribute('target','_blank')

document.body.appendChild(para)
console.log(window)
window.localStorage.setItem('name','hari sudhan')
console.log(window.localStorage.getItem('name'))

let bod=document.getElementById('bod')
let closebutton=document.getElementById('close');
let disappear=()=>{
    console.log(bod)
    bod.style.display='block'
}
closebutton.addEventListener('click',disappear)

let closebutton=document.getElementById('close');
let bod=document.getElementById('bod')
console.log(closebutton)
let para=document.createElement('p')
let disappear=()=>{
    let strr=event.target.value
    console.log(strr.length)
    
    para.innerText=`${strr.length}`
    document.body.appendChild(para)
    bod.style.display='block'
}
closebutton.addEventListener('input',disappear)*/

function repeat(a,b){
    console.log(a);
    return b(a);
}
function prin(c){
    console.log(c)
}

repeat('hello',prin)