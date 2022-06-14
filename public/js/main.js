import {products} from './products.js'
console.log(products)

//header change color regarding scroll position
let navbar = document.querySelector('nav')
let navlinks = document.querySelectorAll('.nav-link')
let logo = document.querySelector('.logo')

window.addEventListener('scroll',() => {
    const scrolled = window.scrollY
    if (scrolled > 700){
        navbar.style.backgroundColor = 'black'
        navbar.style.color = 'white'
        logo.setAttribute('src', 'public/img/white-logo.png')
        navlinks.forEach(element => {
            element.classList.add('navbar-links-white')
        });
    }
    else{
        navbar.style.backgroundColor = '#f5ebdf'
        navbar.style.color = 'black'
        logo.setAttribute('src', 'public/img/logo.png')
        navlinks.forEach(element => {
            element.classList.remove('navbar-links-white')
        });
    }
})


//carroussel home
let section1 = document.getElementById("section1")
let imgcarroussel = ["public/img/collect/one-page-img-04.jpg", "public/img/collect/one-page-slider-01.jpg", "public/img/collect/one-page-img-04.jpg", "public/img/collect/one-page-slider-01.jpg"]
let buttoncarroussel = document.getElementsByClassName('button-carroussel')

for (let index = 0; index < buttoncarroussel.length; index++) {
    buttoncarroussel[index].addEventListener("click", () => {
        console.log(imgcarroussel[index])
        let img = imgcarroussel[index]
        section1.style.backgroundImage = "url(" + img + ")"
    })
}

//section7 product gallery
let section7 = document.getElementById("section7")
let products = document.getElementsByclassName("products")[0]

for (let i = 0; i < 4; i++) {
    let div = document.createElement("div")
    div.classList.add("row")
}

//darkmode


//modal bootstrap

//carrousel testimonial

//decount products