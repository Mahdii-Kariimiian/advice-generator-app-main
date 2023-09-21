let url = "https://api.adviceslip.com/advice"
const adviceContent = document.querySelector(".advice-content")
const adId = document.querySelector(".ad-id")
const svgSec = document.querySelector(".svg-sec")

async function getAdvice (advice) {
    const response = await fetch(advice)
    const data = await response.json()
    useAdvice(data)
}

function useAdvice (data) {
    console.log(data)
    const slipData = data["slip"]
    console.log(slipData["id"])
    console.log(slipData["advice"])
    adId.innerText = slipData["id"]
    adviceContent.innerText = '"' + slipData["advice"] + '"'
}


svgSec.addEventListener('click' , ()=> {
    getAdvice(url)
    const rand = Math.floor(Math.random() * 150)
    url = `https://api.adviceslip.com/advice/${rand}`
    console.log(url)
})

