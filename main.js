let accordion = document.querySelectorAll(".accordion")
let plusIcon = document.querySelectorAll(".plus-icon")
let minusIcon = document.querySelectorAll(".minus-icon")
let contentBtm = document.querySelectorAll(".content-bottom")

accordion.forEach((btn, i)=> {
    btn.addEventListener("click", ()=>{
        contentBtm[i].classList.toggle("active")
        plusIcon[i].classList.toggle("active")
        minusIcon[i].classList.toggle("active")
    })
})