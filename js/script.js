// MOSTRAR/OCULTAR DIVS SEARCH & CART
const searchModal = document.querySelector("#search-container")
const cartModal = document.querySelector("#cart-container")
const searchBtn = document.querySelector("#search-btn")
const cartBtn = document.querySelector("#cart-btn")
searchBtn.addEventListener("click", () => {
    searchModal.style.display === "none" ? searchModalSwap() : searchModal.style.display = "none"
})
cartBtn.addEventListener("click", () => {
    cartModal.style.display === "none" ? cartModalSwap() : cartModal.style.display = "none"
})

let searchModalSwap = function() {
    searchModal.style.display = "block"
    cartModal.style.display = "none"
}
let cartModalSwap = function() {
    cartModal.style.display = "block"
    searchModal.style.display = "none"
}

// CONSTRUCTORES
class producto {
    constructor (id, nombre, tipo, variedad, precio, anio, stock) {
        this.id = id
        this.nombre = nombre
        this.tipo = tipo
        this.variedad = variedad
        this.precio = precio
        this.anio = anio
        this.stock = stock
    }
}

class productoAlCarrito {
    constructor (nombre, precio, unidades) {
        this.nombre = nombre
        this.precio = precio
        this.unidades = unidades
    }
}

const prod1 = new producto(1, "trivento reserve", "tinto", "cabernet sauvignon", 5714, 2021, 20)
const prod2 = new producto(2, "casillero del diablo", "tinto", "cabernet sauvignon", 6094, 2021, 30)
const prod3 = new producto(3, "altos las hormigas", "tinto", "malbec", 6460, 2021, 15)
const prod4 = new producto(4, "tinto negro uco valley", "tinto", "malbec", 8245, 2022, 25)
const prod5 = new producto(5, "lo red", "tinto", "blend", 8515, 2016, 30)
const prod6 = new producto(6, "bira rosso d uco", "tinto", "blend", 13600, 2022, 25)
const prod7 = new producto(7, "trivento golden reserve", "blanco", "chardonnay", 12618, 2019, 10)
const prod8 = new producto(8, "zuccardi q", "blanco", "chardonnay", 17422, 2021, 30)
const prod9 = new producto(9, "cono sur reserva especial", "blanco", "sauvignon blanc", 15565, 2021, 15)
const prod10 = new producto(10, "zuccardi poligonos tupungato", "blanco", "sauvignon blanc", 22182, 2023, 30)
const prod11 = new producto(11, "trivento white", "blanco", "malbec", 5714, 2022, 25)
const prod12 = new producto(12, "angelica zapata", "blanco", "chardonnay", 25257, 2020, 10)
const prod13 = new producto(13, "flora by zaha", "rose", "pinot noir", 15130, 2022, 30)
const prod14 = new producto(14, "martir", "rose", "malbec", 22525, 2012, 20)
const prod15 = new producto(15, "saint felicien", "rose", "malbec", 266507, 2023, 15)
const prod16 = new producto(16,"nacha", "rose", "pinot noir", 32725, 2022, 25)
const prod17 = new producto(17, "bira rosa di rosso", "rose", "blend", 13600, 2023, 20)
const prod18 = new producto(18, "trivento reserve", "rose", "blend", 5714, 2019, 30)

