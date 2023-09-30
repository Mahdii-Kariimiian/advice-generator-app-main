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
    
    const slipData = data["slip"]
    adId.innerText = slipData["id"]
    adviceContent.innerText = '"' + slipData["advice"] + '"'
    adviceContent.classList.add("pop-up")
}

// for Advice to show when the site opens
getAdvice(url)

svgSec.addEventListener('click' , ()=> {
    let rand = Math.floor(Math.random() * 150)
    url = `https://api.adviceslip.com/advice/${rand}`
    getAdvice(url)
    adviceContent.classList.remove("pop-up")
})

