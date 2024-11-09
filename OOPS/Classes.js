class Product {
    #name;
    #price;
    category;
    description;
    rating;

    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        this.#name = productName;
        this.#price = productPrice;
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }

    setPrice(p) {
        if (p > 0) {
            this.#price = p;
        }
        else {
            console.log("Invalid price")
        }
    }

    addToCart() {
        console.log("Product added to the cart")
    }

    removeFromCart() {
        console.log("Product removes from the cart")
    }

    displayProduct() {
        console.log(this.#name)
        console.log(this.#price)
    }

    buyProduct() {
        console.log("Product bought")
    }
}

let iphone = new Product("Samsung", 125000, "Smart phone", "Something", 4.3)
iphone.setPrice(50000)
iphone.displayProduct()
// console.log(iphone)
