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
    if(scrolled > 700) {
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
let imagesproducts = document.getElementsByClassName('imgproduct')

//row1 - the row-cols-5 in the bootstrap defines the wrap
for (let i = 0; i < 10; i++) {
    //creation of elements
    let div = document.createElement("div")
    let div3 = document.createElement('div')
    let div4 = document.createElement('div')
    let iconheart = document.createElement("i")
    let iconleft = document.createElement("i")
    let iconright = document.createElement("i")

    let heartnav = document.getElementsByTagName("i")[2]
    //position and custom font-awesome classes 
    iconleft.classList.add("fa-solid", "fa-layer-group")
    iconright.classList.add("fa-solid", "fa-eye")
    iconheart.classList.add("fa-solid", "fa-heart")
    div.style.position = "relative"
    iconheart.style.position = "absolute"
    iconleft.style.position = "absolute"
    iconright.style.position = "absolute"
    //visibility
    iconheart.style.visibility = "hidden"
    iconleft.style.visibility = "hidden"
    iconright.style.visibility = "hidden"
    //col for bootstrap and assign content into it
    div.classList.add("col")
    let img = document.createElement('img')
    img.setAttribute('src', productstable[i].image)
    img.classList.add("imgproduct")
    let name = document.createElement('p')
    name.innerHTML = productstable[i].name
    name.style.fontWeight = "bold"
    let oldprice = document.createElement('p')
    //div that contains the prices for display flex
    let divprices = document.createElement('div')
    oldprice.innerHTML = productstable[i].oldprice
    oldprice.style.textDecoration = "line-through"
    oldprice.style.color = "rgb(177, 171, 171)"
    oldprice.style.padding = "10px"
    let newprice = document.createElement('p')
    newprice.innerHTML = productstable[i].newprice
    newprice.style.color = "rgb(177, 171, 171)"
    newprice.style.padding = "10px"
    divprices.style.display = "flex"
    divprices.style.justifyContent = "center"
    div3.style.backgroundColor = "white"
    div3.style.opacity = "0.9"
    div3.style.height ="50px"
    div3.style.width = "50%"
    div4.style.backgroundColor = "white"
    div4.style.height ="50px"
    div4.style.width = "50%"
    div3.style.position = "absolute"
    div4.style.position = "absolute"
    div4.style.right = "0"
    div4.style.bottom = "25%"
    div3.style.left = "0"
    div3.style.bottom = "25%"
    //append child
    productsi.appendChild(div)
    divprices.appendChild(oldprice)
    divprices.appendChild(newprice)
    div.appendChild(img)
    div.appendChild(name)
    div.appendChild(divprices)
    div.appendChild(iconheart)
   
    //icon left and right positioning

    iconleft.style.top = "45%"
    iconright.style.top = "45%"

    //onhover image changes and the icons appears
    imagesproducts[i].addEventListener("mouseover", () => {
        imagesproducts[i].setAttribute('src',  productstable[i].image2)
        iconheart.style.visibility = "visible"
        iconleft.style.visibility = "visible"
        iconright.style.visibility = "visible"
        iconheart.style.right ="10%"
        iconheart.style.top ="5%"
        div3.appendChild(iconleft)
        div4.appendChild(iconright)
        div.appendChild(div3)
        div.appendChild(div4)
        setTimeout(() =>{
            imagesproducts[i].setAttribute('src',  productstable[i].image)
            iconheart.style.visibility = "hidden"
            iconleft.style.visibility = "hidden"
            iconright.style.visibility = "hidden"
            div3.removeChild(iconleft)
            div4.removeChild(iconright)
            div.removeChild(div3)
            div.removeChild(div4)
        },2000)
        let numbernav = 0
        heartnav.innerHTML = numbernav
        iconheart.addEventListener('click', () =>{
            numbernav += 1
        })
    })
}

//carrousel testimonial

//darkmode




//decount products