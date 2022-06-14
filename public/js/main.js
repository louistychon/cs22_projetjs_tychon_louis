import {
    productstable
} from './products.js'
console.log(productstable)

//header change color regarding scroll position
let navbar = document.querySelector('nav')
let navlinks = document.querySelectorAll('.nav-link')
let logo = document.querySelector('.logo')

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    if (scrolled > 700) {
        navbar.style.backgroundColor = 'black'
        navbar.style.color = 'white'
        logo.setAttribute('src', 'public/img/white-logo.png')
        navlinks.forEach(element => {
            element.classList.add('navbar-links-white')
        });
    } else {
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
let productsi = document.getElementsByClassName("products")[0]

//row1 - the row-cols-5 in the bootstrap defines the wrap
for (let i = 0; i < 10; i++) {
    let div = document.createElement("div")
    div.classList.add("col")
    let img = document.createElement('img')
    img.setAttribute('src', productstable[i].image)
    img.classList.add("imgproduct")
    let name = document.createElement('p')
    name.innerHTML = productstable[i].name
    name.style.fontWeight = "bold"
    let oldprice = document.createElement('p')
    let divprices = document.createElement('div')
    oldprice.innerHTML = productstable[i].oldprice
    oldprice.style.textDecoration = "line-through"
    oldprice.style.color = "rgb(177, 171, 171)"
    oldprice.style.padding = "10px"
    let newprice = document.createElement('p')
    newprice.innerHTML = productstable[i].newprice
    newprice.style.color = "rgb(177, 171, 171)"
    newprice.style.padding = "10px"
    divprices.appendChild(oldprice)
    divprices.appendChild(newprice)
    divprices.style.display = "flex"
    divprices.style.justifyContent = "center"
    div.appendChild(img)
    div.appendChild(name)
    div.appendChild(divprices)
    productsi.appendChild(div)
}

//onhover image changes and the icons appears

let imagesproducts = document.getElementsByClassName('imgproduct')

for (let i = 0; i < imagesproducts.length; i++) {
    imagesproducts[i].addEventListener("mouseover", () => {
        imagesproducts[i].setAttribute('src',  productstable[i].image2)
        setTimeout(() =>{
            imagesproducts[i].setAttribute('src',  productstable[i].image)
        },2000)
    })
}


//darkmode

//carrousel testimonial

//decount products