class Products {
    constructor(name, oldprice, newprice, image, image2, discount, count) {
        this.name = name
        this.oldprice = oldprice
        this.newprice = newprice
        this.image = image
        this.image2 = image2
        this.discount = discount
        this.count = count
    }
}

let product1 = new Products("Textured Sweater", "", "$50.00", "../public/img/fashion/fashion-recent-products-01-1-1.jpg", "../public/img/fashion/fashion-recent-products-01-a-1-1.jpg", false, false)
let product2 = new Products("Traveller Shirt", "", "$510.00", "../public/img/fashion/fashion-recent-products-02-1-1.jpg", "../public/img/fashion/fashion-recent-products-02-a-1-1-1.jpg", false, false)
let product3 = new Products("Crowneck Sweatshirt", "", "$20.00 - $50.00", "../public/img/fashion/fashion-recent-products-01-b.jpg", "../public/img/fashion/fashion-recent-products-03-a-1-1.jpg", false, false)
let product4 = new Products("Skinny Trousers", "$200.00", "$160.00", "../public/img/fashion/fashion-recent-products-04.jpg", "../public/img/fashion/fashion-recent-products-04-a-1.jpg", true, true)
let product5 = new Products("High Neck Sweater", "$40.00", "$35.00", "../public/img/fashion/fashion-recent-products-05-1.jpg", "../public/img/fashion/fashion-recent-products-05-a-1.jpg", true, false)
let product6 = new Products("Sleeve Sweater", "$140.00", "$120.00", "../public/img/fashion/fashion-recent-products-06-1.jpg", "../public/img/fashion/fashion-recent-products-06-a-1.jpg", true, false)
let product7 = new Products("Pocket Sweatshirt", "", "$410.00", "../public/img/fashion/fashion-recent-products-07-1.jpg", "../public/img/fashion/fashion-recent-products-07-a-1.jpg", false, false)
let product8 = new Products("Top With pleated", "", "$20.00 - $50.00", "../public/img/fashion/fashion-recent-products-08-1.jpg", "../public/img/fashion/fashion-recent-products-08-a.jpg", false, false)
let product9 = new Products("Cotton Sweater", "$180.00", "$155.00", "../public/img/fashion/fashion-recent-products-01-d.jpg", "../public/img/fashion/fashion-recent-products-09-a-1-1.jpg", true, false)
let product10 = new Products("Texture plain Regular", "$85.00", "$70.00", "../public/img/fashion/fashion-recent-products-10-1.jpg", "../public/img/fashion/fashion-recent-products-10-a-1.jpg", true, false)

let productstable = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10]

export {
    productstable
}