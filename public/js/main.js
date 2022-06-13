
//carroussel home
let section1 = document.getElementById("section1")
let imgcarroussel = ["../img/collect/one-page-img-04.jpg", "../img/collect/one-page-slider-01.jpg", "../img/collect/one-page-slider-01.jpg", "../img/collect/one-page-slider-01.jpg"]
let buttoncarroussel = document.getElementsByClassName('button-carroussel')

for (let index = 0; index < buttoncarroussel.length; index++) {
    buttoncarroussel[index].addEventListener("click", () => {
        console.log(imgcarroussel[index])
        section1.style.backgroundImage = url(imgcarroussel[index])
    })
}


//darkmode


//modal bootstrap

//carrousel testimonial

//decount products