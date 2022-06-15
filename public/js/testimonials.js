class Testimonials {
    constructor(title, desc, image, name, job) {
        this.title = title;
        this.desc = desc;
        this.image = image;
        this.name = name;
        this.job = job;
    }
}

let testimonial1 = new Testimonials('WE LOVE DIGITAL AGENCIES', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod iusto odit labore dolorum corporis amet, nisi consequatur id dolorem.", "../public/img/testimonials/image-2.png", "Alexander Harvard", "Director")
let testimonial2 = new Testimonials('WE LOVE FROM LAYOUT', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod iusto odit labore dolorum corporis amet, nisi consequatur id dolorem.", "../public/img/testimonials/image-2.png", "Shoko Mukigura", "Designer")
let testimonial3 = new Testimonials('I LOVE CREATIVE DESIGN', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod iusto odit labore dolorum corporis amet, nisi consequatur id dolorem.", "../public/img/testimonials/image-2.png", "Mattie Stepanek", "Manager")
let testimonial4 = new Testimonials('HELLO WORLD', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod iusto odit labore dolorum corporis amet, nisi consequatur id dolorem.", "../public/img/testimonials/image-2.png", "Johny Depp", "Actor")
let testimonial5 = new Testimonials('MASSIVE TALENT', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod iusto odit labore dolorum corporis amet, nisi consequatur id dolorem.", "../public/img/testimonials/image-2.png", "Rita Mitsouko", "Singer")
let testimonial6 = new Testimonials('MUCH LOVE', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod iusto odit labore dolorum corporis amet, nisi consequatur id dolorem.", "../public/img/testimonials/image-2.png", "El diablo", "Product design")

let testimonialstable = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6]

export {testimonialstable}