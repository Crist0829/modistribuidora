//--------------------- header nav --------------------------------//
let resButton = document.getElementById("nav-button")
let resIcon = document.getElementById("nav-icon")
let resContent = document.getElementById("nav-content")
let resContainer = document.getElementById("header-container")

let press = true
resButton.addEventListener('click', () => {

    if(press){
        resButton.setAttribute('class', "btn btn-secondary")
        resButton.innerHTML = `<span class ="fas fa-window-close f-6"> </span>`
        resContainer.style.height = "30rem"
        resContent.style.display = "flex"
        press = false
    }else{
        resButton.setAttribute('class', "btn btn-primary")
        resButton.innerHTML = `<span class ="fas fa-align-justify f-6"> </span>`
        resContainer.style.height = "7rem"
        resContent.style.display = "none"
        press = true
    }
})