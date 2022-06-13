
//header change color regarding scroll position

//carroussel home
let section1 = document.getElementById("section1")
let imgcarroussel = ["public/img/collect/one-page-img-04.jpg", "public/img/collect/one-page-slider-01.jpg", "public/img/collect/one-page-img-04.jpg", "public/img/collect/one-page-slider-01.jpg"]
let buttoncarroussel = document.getElementsByClassName('button-carroussel')

for (let index = 0; index < buttoncarroussel.length; index++) {
    buttoncarroussel[index].addEventListener("click", () => {
        console.log(imgcarroussel[index])
        let img = imgcarroussel[index]
        section1.style.backgroundImage = "url("+img+")"
    })
}


//darkmode


//modal bootstrap

//carrousel testimonial

//decount products