console.log('hello world')
let container = document.getElementsByClassName(`container`)[0]
let header = document.getElementById(`header`)
let opacity = (e)=>{
    e.style.opacity = 1
    e.style.padding = `20px`
}
opacity(header)

// getting the name from url

let ourl = window.location.href
let ourl1 = ourl.split(`?`)[1]
let name0 = ourl1.split(`=`)[1]
document.getElementById(`name`).innerText = name0

// sending

send.onclick = ()=>{
    let input = document.getElementById(`input`)
    let send = document.getElementById(`send`)
    let senderName = input.value
    console.log(senderName)
    let url = `${ourl.split(`?`)[0]}?name=${senderName}`
    window.open(`https://api.whatsapp.com/send?text=${senderName} ne aapke liye kuch bheja hai! ${url}`)
}
// geting remaining time in ramadan


let dest = new Date(`april 2, 2022 19:00:00`).getTime()
let timeE = document.getElementById(`time`)
let dayE = document.getElementById(`day`)
let hourE = document.getElementById(`hours`)
let minE = document.getElementById(`minutes`)
let secE = document.getElementById(`seconds`)

setInterval(() => {
    
    let currTime = new Date().getTime()
    let diff = dest - currTime
    
    let days = Math.floor( diff / (1000*60*60*24)) 
    let hours = Math.floor( (diff % (1000*60*60*24)) / (1000*60*60))
    let minutes = Math.floor(( diff % (1000*60*60)) / (60*1000) )
    let seconds = Math.floor(( diff % (1000*60)) / 1000)
    
    
    timeE.innerText = `${days} : ${hours} : ${minutes} : ${seconds}`
    dayE.innerText = `${days}`
    hourE.innerText = `${hours}`
    minE.innerText = `${minutes}`
    secE.innerText = `${seconds}`


    console.log(days,hours,minutes,seconds)
    
    
}, 1000);


