const bar = document.getElementById("bar")
const close = document.getElementById("close")
const nav = document.getElementById("navbar")
let shop = document.getElementById("shop")
console.log(products)

let generateShop = () => {
    return (shop.innerHTML = 
       `<h1>help!!!</h1>
       `
        )
}

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")
        console.log("clicked")
    })
}
if (close) {
    bar.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}