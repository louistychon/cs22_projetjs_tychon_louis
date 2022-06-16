import {
    productstable
} from './products.js'

import {
    testimonialstable
} from './testimonials.js'

//header change color regarding scroll position
let navbar = document.querySelector('nav')
let navlinks = document.querySelectorAll('.nav-link')
let logo = document.querySelector('.logo')
let burgermenu = document.querySelector('.fa-bars')

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    if (scrolled > 700) {
        navbar.style.backgroundColor = 'black'
        navbar.style.color = 'white'
        logo.setAttribute('src', 'public/img/white-logo.png')
        burgermenu.style.color = 'white'
        navlinks.forEach(element => {
            element.classList.add('navbar-links-white')
        });
    } else {
        navbar.style.backgroundColor = '#f5ebdf'
        navbar.style.color = 'black'
        burgermenu.style.color = 'black'
        logo.setAttribute('src', 'public/img/logo.png')
        navlinks.forEach(element => {
            element.classList.remove('navbar-links-white')
        });
    }
})


//carroussel section 1
let section1 = document.getElementById("section1")
let imgcarroussel = ["public/img/collect/one-page-img-04.jpg", "public/img/collect/one-page-slider-01.jpg", "public/img/collect/one-page-img-04.jpg", "public/img/collect/one-page-slider-01.jpg"]
let buttoncarroussel = document.getElementsByClassName('button-carroussel')


for (let index = 0; index < buttoncarroussel.length; index++) {
    buttoncarroussel[index].addEventListener("click", () => {
        let img = imgcarroussel[index]
        section1.style.backgroundImage = "url(" + img + ")"
    })
    setTimeout(() =>{ 
         let img2 = imgcarroussel[2]
        section1.style.backgroundImage = "url(" + img2 + ")"
    }, 2000)
}


//section7 product gallery
let productsi = document.getElementsByClassName("products")[0]
let imagesproducts = document.getElementsByClassName('imgproduct')

let moon = document.getElementsByTagName("i")[1]
//row1 - the row-cols-5 in the bootstrap defines the wrap
for (let i = 0; i < 10; i++) {
    //creation of elements
    let div = document.createElement("div")
    let div3 = document.createElement('div')
    let div4 = document.createElement('div')
    let iconheart = document.createElement("i")
    let iconleft = document.createElement("i")
    let iconright = document.createElement("i")
    let heartnav = document.getElementsByTagName("i")[4]
    let basketnav = document.getElementsByTagName("i")[5]
    //position and custom font-awesome classes 
    iconleft.classList.add("fa-solid", "fa-layer-group")
    iconright.classList.add("fa-solid", "fa-eye")
    iconright.style.color = "white"
    iconheart.classList.add("fa-solid", "fa-heart")
    div.style.position = "relative"
    iconheart.style.position = "absolute"
    iconleft.style.position = "absolute"
    iconleft.style.color = "white"
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
    name.classList.add("darkmode")
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
    
    div3.classList.add("div-icon1")
    div4.classList.add("div-icon2")
    //append child
    productsi.appendChild(div)
    divprices.appendChild(oldprice)
    divprices.appendChild(newprice)
    div.appendChild(img)
    div.appendChild(name)
    div.appendChild(divprices)
    div.appendChild(iconheart)
    //green square promotionnal
    
    let promotiongreen = document.createElement('div')
    if(productstable[i].discount){
        let oldpricewithoutdollar = productstable[i].oldprice.replace(/\$/g, '')
        let newpricewithoutdollar = productstable[i].newprice.replace(/\$/g, '')
        let discountproduct = +(oldpricewithoutdollar) / +(newpricewithoutdollar) - 1
        promotiongreen.innerHTML += "-" + Math.round(discountproduct * 100)+ "%"
        div.appendChild(promotiongreen)
        promotiongreen.style.height = "20px"
        promotiongreen.style.width = "50px"
        promotiongreen.style.color = "white"
        promotiongreen.style.position = "absolute"
        promotiongreen.style.maxWidth = "100%"
        promotiongreen.classList.add("promotiongreen")
        promotiongreen.style.backgroundColor = "green"}
    //icon left and right positioning

    iconleft.style.top = "45%"
    iconright.style.top = "45%"
    promotiongreen.style.visibility = "visible"
    //onhover image changes and the icons appears
    imagesproducts[i].addEventListener("mouseover", () => {
        imagesproducts[i].setAttribute('src', productstable[i].image2)
        iconheart.style.visibility = "visible"
        iconleft.style.visibility = "visible"
        iconright.style.visibility = "visible"
        div3.style.visibility = "visible"
        div4.style.visibility = "visible"
        iconheart.style.right = "10%"
        iconheart.style.top = "5%"
        div3.appendChild(iconleft)
        div4.appendChild(iconright)
        div.appendChild(div3)
        div.appendChild(div4)
        setTimeout(() => {
            imagesproducts[i].setAttribute('src', productstable[i].image)
            iconheart.style.visibility = "hidden"
            iconleft.style.visibility = "hidden"
            iconright.style.visibility = "hidden"
            div3.style.visibility = "hidden"
            div4.style.visibility = "hidden"
        }, 2000)
    })
    //increase number of likes in the nav
    iconheart.addEventListener('click', () => {
        iconheart.style.color = "red"
        if (iconheart.style.color == "red") {
            heartnav.innerHTML = +heartnav.innerHTML + 1
        }
    })
    //increase number of products in basket
    iconleft.addEventListener('click', () => {
        iconleft.style.color = "grey"
        if (iconheart.style.color == "grey") {
            basketnav.innerHTML = +basketnav.innerHTML + 1
        } else {
            basketnav.innerHTML = +basketnav.innerHTML + 1
        }
    })
    //iconeye onclick event
    iconright.addEventListener('click', () => {
        img.style.transform = "scale(1.5)";
        img.style.transition = "transform 0.25s ease";
        iconleft.style.visibility = "hidden"
        iconright.style.visibility = "hidden"
        iconheart.style.visibility = "hidden"
        promotiongreen.style.visibility = "hidden"
        div3.style.visibility = "hidden"
        div4.style.visibility = "hidden"
        setTimeout(() => {
            img.style.transform = "scale(1)";
            img.style.transition = "transform 0.25s ease";
            iconleft.style.visibility = "visible"
            iconright.style.visibility = "visible"
            iconheart.style.visibility = "visible"
            promotiongreen.style.visibility = "visible"
            div3.style.visibility = "visible"
            div4.style.visibility = "visible"
        }, 2000)
    })

}

//carrousel testimonial

let containerCarroussel = document.getElementsByClassName("carroussel-testimonials")[0]

let tablecolumns = [];
let rowcontentelement = document.createElement("div")
rowcontentelement.classList.add("row")
let rightarrow = document.createElement('i')
rightarrow.classList.add('fa-solid', 'fa-arrow-right')
let leftarrow = document.createElement('i')
leftarrow.classList.add('fa-solid', 'fa-arrow-left')
let col1 = document.createElement('div')
col1.classList.add('col-1')
let col12 = document.createElement('div')
col12.classList.add('col-1')
col1.appendChild(leftarrow)
col12.appendChild(rightarrow)

rowcontentelement.appendChild(col1)

for (let i = 0; i < 6; i++) {
    let desc = document.createElement('p')
    let title = document.createElement('p')
    let column = document.createElement('div')
    column.classList.add('element-carroussel', "col")
    let whitebackground = document.createElement('div')
    let divavatar = document.createElement('div')
    divavatar.classList.add('avatar')
    let row2 = document.createElement('div')
    row2.classList.add('row')
    let col4 = document.createElement('div')
    col4.classList.add('4', "text-center", "mt-2")
    let imgavatar = document.createElement('img')
    imgavatar.setAttribute('src', testimonialstable[i].image)
    imgavatar.classList.add('rounded-circle', "img-fluid", "w-50")
    whitebackground.style.backgroundColor = "white"
    whitebackground.classList.add('whitebg')
    let pname = document.createElement('p')
    let pjob = document.createElement('p')
    pname.innerHTML = testimonialstable[i].name
    pjob.innerHTML = testimonialstable[i].job
    column.appendChild(whitebackground)
    tablecolumns.push(column)
    title.innerHTML = testimonialstable[i].title
    desc.innerHTML = testimonialstable[i].desc
    whitebackground.appendChild(title)
    whitebackground.appendChild(desc)
    column.appendChild(divavatar)
    divavatar.appendChild(row2)
    let columnavatar = document.createElement('div')
    let columnavatar2 = document.createElement('div')
    columnavatar.classList.add("col-4")
    columnavatar2.classList.add("col-8")
    row2.appendChild(columnavatar)
    columnavatar.appendChild(imgavatar)
    columnavatar2.appendChild(pname)
    columnavatar2.appendChild(pjob)
    row2.appendChild(columnavatar2)
    pname.style.fontWeight = "bold"
    rowcontentelement.appendChild(column)
    containerCarroussel.appendChild(rowcontentelement)
}

rowcontentelement.style.margin = "auto"

let columns = document.getElementsByClassName('element-carroussel')

columns[0].style.display = ""
columns[1].style.display = ""
columns[2].style.display = ""
columns[3].style.display = "none"
columns[4].style.display = "none"
columns[5].style.display = "none"

leftarrow.addEventListener('click', () => {
    if (columns[0].style.display == "") {
        columns[0].style.display = "none"
        columns[1].style.display = "none"
        columns[2].style.display = "none"
        columns[3].style.display = ""
        columns[4].style.display = ""
        columns[5].style.display = ""
    } else {
        columns[0].style.display = ""
        columns[1].style.display = ""
        columns[2].style.display = ""
        columns[3].style.display = "none"
        columns[4].style.display = "none"
        columns[5].style.display = "none"
    }
})
rightarrow.addEventListener('click', () => {
    if (columns[0].style.display == "") {
        columns[0].style.display = "none"
        columns[1].style.display = "none"
        columns[2].style.display = "none"
        columns[3].style.display = ""
        columns[4].style.display = ""
        columns[5].style.display = ""
    } else {
        columns[0].style.display = ""
        columns[1].style.display = ""
        columns[2].style.display = ""
        columns[3].style.display = "none"
        columns[4].style.display = "none"
        columns[5].style.display = "none"
    }
})
rowcontentelement.appendChild(col12)



//darkmode
let para = document.getElementsByClassName("darkmode")
let whitebg = document.getElementsByClassName("whitebg")
let card = document.getElementsByClassName("card")
let cardfooter = document.getElementsByClassName("card-footer")
let photography = document.getElementsByClassName("photography")
let textmuted = document.getElementsByClassName("text-muted")
console.log(whitebg)
moon.addEventListener('click', () => {
    if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "black"
        for (let i = 0; i < card.length; i++) {
            card[i].style.backgroundColor = "black"
            cardfooter[i].style.backgroundColor = "black"
            photography[i].style.border = "1px solid white"
        }
        for (let index = 0; index < para.length; index++) {
            para[index].style.color = "white"
        }
    } else {
        document.body.style.backgroundColor = "white"
        for (let i = 0; i < card.length; i++) {
            card[i].style.backgroundColor = "white"
            cardfooter[i].style.backgroundColor = "white"
            photography[i].style.border = "1px solid black"
        }
        for (let index = 0; index < para.length; index++) {
            para[index].style.color = "black"
        }
    }
})


//scrollup

let scrollup = document.querySelector('.scrollup')
scrollup.style.visibility = "hidden"
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    if (scrolled > window.innerHeight - (0.5 * window.innerHeight)) {
        scrollup.style.visibility = "visible"
    }else{
        scrollup.style.visibility = "hidden"
    }
})



//decount products