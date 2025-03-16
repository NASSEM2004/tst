// contat 
let a = document.getElementById('a')
let b = document.getElementById('b')
let c = document.getElementById('c')

// a للروابط  contat
let newAcoont = document.getElementById('newAcoont')
let newPassword = document.getElementById('newPassword')
// b
let account = document.getElementById('account')
// c
let newAcoont2 = document.getElementById('newAcoont2')

newAcoont.onclick = function(){
    a.classList.add('none')
    b.classList.remove('none')
}
account.onclick = function(){
a.classList.remove("none")
b.classList.add('none')
}
newPassword.onclick = function(){
    a.classList.add('none')
    c.classList.remove('none')
}
newAcoont2.onclick = function(){
    c.classList.add('none')
    b.classList.remove('none')
}




// console.log(a)