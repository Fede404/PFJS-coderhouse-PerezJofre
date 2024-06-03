class producto {
	constructor(id, nombre, tipo, variedad, precio, anio, stock) {
		this.id = id;
		this.nombre = nombre;
		this.tipo = tipo;
		this.variedad = variedad;
		this.precio = precio;
		this.anio = anio;
		this.stock = stock;
	}
}

const prod1 = new producto(
	1,
	"trivento reserve",
	"tinto",
	"cabernet sauvignon",
	5714,
	2021,
	20
);
const prod2 = new producto(
	2,
	"casillero del diablo",
	"tinto",
	"cabernet sauvignon",
	6094,
	2021,
	30
);
const prod3 = new producto(
	3,
	"altos las hormigas",
	"tinto",
	"malbec",
	6460,
	2021,
	15
);
const prod4 = new producto(
	4,
	"tinto negro uco valley",
	"tinto",
	"malbec",
	8245,
	2022,
	25
);
const prod5 = new producto(5, "lo red", "tinto", "blend", 8515, 2016, 30);
const prod6 = new producto(
	6,
	"bira rosso d uco",
	"tinto",
	"blend",
	13600,
	2022,
	25
);
const prod7 = new producto(
	7,
	"trivento golden reserve",
	"blanco",
	"chardonnay",
	12618,
	2019,
	10
);
const prod8 = new producto(
	8,
	"zuccardi q",
	"blanco",
	"chardonnay",
	17422,
	2021,
	30
);
const prod9 = new producto(
	9,
	"cono sur reserva especial",
	"blanco",
	"sauvignon blanc",
	15565,
	2021,
	15
);
const prod10 = new producto(
	10,
	"zuccardi poligonos tupungato",
	"blanco",
	"sauvignon blanc",
	22182,
	2023,
	30
);
const prod11 = new producto(
	11,
	"trivento white",
	"blanco",
	"malbec",
	5714,
	2022,
	25
);
const prod12 = new producto(
	12,
	"angelica zapata",
	"blanco",
	"chardonnay",
	25257,
	2020,
	10
);
const prod13 = new producto(
	13,
	"flora by zaha",
	"rose",
	"pinot noir",
	15130,
	2022,
	30
);
const prod14 = new producto(14, "martir", "rose", "malbec", 22525, 2012, 20);
const prod15 = new producto(
	15,
	"saint felicien",
	"rose",
	"malbec",
	266507,
	2023,
	15
);
const prod16 = new producto(16, "nacha", "rose", "pinot noir", 32725, 2022, 25);
const prod17 = new producto(
	17,
	"bira rosa di rosso",
	"rose",
	"blend",
	13600,
	2023,
	20
);
const prod18 = new producto(
	18,
	"trivento reserve",
	"rose",
	"blend",
	5714,
	2019,
	30
);

function cargarProductos(
	prod1,
	prod2,
	prod3,
	prod4,
	prod5,
	prod6,
	prod7,
	prod8,
	prod9,
	prod10,
	prod11,
	prod12,
	prod13,
	prod14,
	prod15,
	prod16,
	prod17,
	prod18
) {
	const arrayDeProductos = [];
	arrayDeProductos.push(prod1);
	arrayDeProductos.push(prod2);
	arrayDeProductos.push(prod3);
	arrayDeProductos.push(prod4);
	arrayDeProductos.push(prod5);
	arrayDeProductos.push(prod6);
	arrayDeProductos.push(prod7);
	arrayDeProductos.push(prod8);
	arrayDeProductos.push(prod9);
	arrayDeProductos.push(prod10);
	arrayDeProductos.push(prod11);
	arrayDeProductos.push(prod12);
	arrayDeProductos.push(prod13);
	arrayDeProductos.push(prod14);
	arrayDeProductos.push(prod15);
	arrayDeProductos.push(prod16);
	arrayDeProductos.push(prod17);
	arrayDeProductos.push(prod18);
	return arrayDeProductos;
}
const listaDeProductos = cargarProductos(
	prod1,
	prod2,
	prod3,
	prod4,
	prod5,
	prod6,
	prod7,
	prod8,
	prod9,
	prod10,
	prod11,
	prod12,
	prod13,
	prod14,
	prod15,
	prod16,
	prod17,
	prod18
);

class productoAlCarrito {
	constructor(nombre, precio, unidades) {
		this.nombre = nombre;
		this.precio = precio;
		this.unidades = unidades;
	}
}

//NAV INPUTS & MODALS
const searchModal = document.getElementById("search-container");
const cartModal = document.getElementById("cart-container");
const searchBtn = document.getElementById("search-btn");
const cartBtn = document.getElementById("cart-btn");
const searchInput = document.getElementById("search-input");
// TRIGGER INFO MODAL//SWAP MODALS
const searchModalSwap = function () {
	searchModal.style.display = "block";
	cartModal.style.display = "none";
};
const cartModalSwap = function () {
	cartModal.style.display = "block";
	searchModal.style.display = "none";
};

//CART

cartBtn.addEventListener("click", () => {
	cartModal.style.display === "none"
		? cartModalSwap()
		: (cartModal.style.display = "none");
});

//SEARCH

searchBtn.addEventListener("click", () => {
	divBusqueda.innerHTML = "";
	buscarProducto();
});

let arrayFiltrado = [];
function buscarProducto() {
	const valorBuscado = searchInput.value.toLowerCase();
	arrayFiltrado = listaDeProductos.filter(
		(e) =>
			e.nombre === valorBuscado.toLowerCase() ||
			e.tipo === valorBuscado.toLowerCase() ||
			e.variedad === valorBuscado.toLowerCase()
	);
	arrayFiltrado.length > 0 ? crearYAnadir() : sinResultados();
}

const divBusqueda = document.getElementById("search-container");
function crearYAnadir() {
	arrayFiltrado.forEach((e) => {
		const foundProdDiv = document.createElement("div");
		foundProdDiv.classList.add("found-prod-container");
		const parrafo = document.createElement("p");
		parrafo.textContent = e.nombre.toUpperCase();
		foundProdDiv.appendChild(parrafo);
		const anchor = document.createElement("a");
        anchor.href = "#card" + e.id
        anchor.classList.add("no-style-anchor")
        const redirectBtn = document.createElement("button");
        redirectBtn.innerText = "Ver"
        redirectBtn.classList.add("redirect-btn")
        anchor.appendChild(redirectBtn)
        foundProdDiv.appendChild(anchor)
        divBusqueda.appendChild(foundProdDiv)
	});
    const closeBtn = document.createElement("button")
    closeBtn.innerText = "X"
    closeBtn.classList.add("close-btn")
    divBusqueda.appendChild(closeBtn)
    closeBtn.addEventListener ("click", () => {
        divBusqueda.style.display = "none"
    })
    searchModalSwap();
}

function sinResultados() {
    divBusqueda.style.display = "none"
	Swal.fire({
		title: "Producto no encontrado",
		text: "Evite dejar el campo vacío. Puedes buscar por nombre, tipo o variedad.",
		icon: "error",
		confirmButtonText: "Aceptar",
		confirmButtonColor: "#6a0000",
		iconColor: "#6a0000",
	});
}
