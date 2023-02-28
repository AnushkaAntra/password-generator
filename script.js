class password{
    constructor(){
    }
    weak_pass(length){
        const weak = "abcdefghijklmnopqrstuvwxyz1234567890"
        let weaklength = weak.length
        let password1=""
        let counter1 = 0
        while(counter1 < length){
            password1 += weak.charAt(Math.random()*weaklength)
            counter1++
        }
        return password1
    }
    strong_pass(length){
        const strong = "ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
        let stronglength = strong.length
        let password2=""
        let counter2 = 0
        while(counter2 < length){
            password2 += strong.charAt(Math.random()*stronglength)
            counter2++
        }
        return password2
    }
    veryStrong_pass(length){
        const veryStrong = "@$_*#.ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
        let veryStronglength = veryStrong.length
        let password3=""
        let counter3 = 0
        while(counter3 < length){
            password3 += veryStrong.charAt(Math.random()*veryStronglength)
            counter3++
        }
        return password3
    }
}
function random(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function copy_text(){
    let text = input
    text.select()
    text.setSelectionRange(0,99999)
    navigator.clipboard.writeText(text.value)
}
let input = document.getElementById("input")
let r1 = document.getElementById("weak")
let r2 = document.getElementById("strong")
let r3 = document.getElementById("very_strong")
let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", function(){
    let a = new password()
    let b = a.strong_pass(random(8,30))
    let c = a.veryStrong_pass(random(8,30))
    let d = a.weak_pass(random(8,30))
    setTimeout(()=>{
        if(r2.checked){
            input.setAttribute("value",`${b}`)
        }
        else if(r3.checked){
            input.setAttribute("value",`${c}`)
        }
        else{
            input.setAttribute("value",`${d}`)
        }
    },1000)
})
let btn1 = document.getElementById("button-addon")
btn1.addEventListener("click",function(){
    if(input.value != " "){
        copy_text()
    }
    else{
      alert("The text field is empty")
    }
})
