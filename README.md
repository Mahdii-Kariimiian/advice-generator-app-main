Advice Generator App

 Junior challenge at frontendmentors.io 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I used](#what-i-learned)
- [Author](#author)

## Overview
This App shows a piece of advice every time the button is clicked

### Screenshot
![Screenshot Advice generator app](https://github.com/Mahdii-Kariimiian/advice-generator-app-main/assets/134393975/bc1a7bfa-8647-4045-8f10-05905bf393a7)

### Links
-Netlify: [https://guileless-kelpie-06e23e.netlify.app/](https://subtle-mooncake-56826b.netlify.app/)

## My process
I used "https://api.adviceslip.com/" API to get new advice. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- API

### What I used

Here is a glimps of what I used to built this mini project.
````
HTML
<picture>
      <source srcset="/images/pattern-divider-desktop.svg" media="(min-width:500px)">
      <img src="/images/pattern-divider-mobile.svg" alt="divider">
</picture>

CSS
.pop-up {
    animation: pop-up .5s 1;
}

@keyframes pop-up {
    0% { transform: scale(0); }
  100% { transform: scale(1); }
}

JavaScript
async function getAdvice (advice) {
    const response = await fetch(advice)
    const data = await response.json()
    useAdvice(data)
}

````
## Author
Mahdi Karimian
- linkedin (www.linkedin.com/in/mahdi-karimian-116643273
- Frontend Mentor – @Mahdii-Kariimiian (https://www.frontendmentor.io/profile/Mahdii-Kariimiian)


