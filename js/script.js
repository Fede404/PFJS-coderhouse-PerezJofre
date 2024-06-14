// PRODUCT OBJECTS
class producto {
	constructor(id, nombre, tipo, variedad, precio, anio) {
		this.id = id;
		this.nombre = nombre;
		this.tipo = tipo;
		this.variedad = variedad;
		this.precio = precio;
		this.anio = anio;
	}
}

const prod1 = new producto(
	1,
	"trivento reserve",
	"tinto",
	"cabernet sauvignon",
	5714,
	2021
);
const prod2 = new producto(
	2,
	"casillero del diablo",
	"tinto",
	"cabernet sauvignon",
	6094,
	2021
);
const prod3 = new producto(
	3,
	"altos las hormigas",
	"tinto",
	"malbec",
	6460,
	2021
);
const prod4 = new producto(
	4,
	"tinto negro uco valley",
	"tinto",
	"malbec",
	8245,
	2022
);
const prod5 = new producto(5, "lo red", "tinto", "blend", 8515, 2016, 30);
const prod6 = new producto(
	6,
	"bira rosso d uco",
	"tinto",
	"blend",
	13600,
	2022
);
const prod7 = new producto(
	7,
	"trivento golden reserve",
	"blanco",
	"chardonnay",
	12618,
	2019
);
const prod8 = new producto(
	8,
	"zuccardi q",
	"blanco",
	"chardonnay",
	17422,
	2021
);
const prod9 = new producto(
	9,
	"cono sur reserva especial",
	"blanco",
	"sauvignon blanc",
	15565,
	2021
);
const prod10 = new producto(
	10,
	"zuccardi poligonos tupungato",
	"blanco",
	"sauvignon blanc",
	22182,
	2023
);
const prod11 = new producto(
	11,
	"trivento white",
	"blanco",
	"malbec",
	5714,
	2022
);
const prod12 = new producto(
	12,
	"angelica zapata",
	"blanco",
	"chardonnay",
	25257,
	2020
);
const prod13 = new producto(
	13,
	"flora by zaha",
	"rose",
	"pinot noir",
	15130,
	2022
);
const prod14 = new producto(14, "martir", "rose", "malbec", 22525, 2012, 20);
const prod15 = new producto(
	15,
	"saint felicien",
	"rose",
	"blend",
	266507,
	2023
);
const prod16 = new producto(16, "nacha", "rose", "pinot noir", 32725, 2022, 25);
const prod17 = new producto(
	17,
	"bira rosa di rosso",
	"rose",
	"blend",
	13600,
	2023
);
const prod18 = new producto(
	18,
	"trivento reserve",
	"rose",
	"blend",
	5714,
	2019
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

//NAV
const searchModal = document.getElementById("search-container");
const cartModal = document.getElementById("cart-container");
const searchBtn = document.getElementById("search-btn");
const cartBtn = document.getElementById("cart-btn");
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("click", () => {
	Toastify({
		text: "Puedes buscar o filtrar por nombres, tipos(tinto, blanco o rose) y uvas",
		duration: 3000,
		offset: {
			x: 0,
			y: 45,
		},
		style: {
			color: "#fffaf4",
			background: "#6a0000",
		},
		close: true,
	}).showToast();
});

const swapModalS = function () {
	searchModal.style.display = "block";
	cartModal.style.display = "none";
};
const swapModalC = function () {
	cartModal.style.display = "block";
	searchModal.style.display = "none";
};

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
		const productoEncontrado = document.createElement("div");
		productoEncontrado.classList.add("found-prod-container");
		const parrafo = document.createElement("p");
		parrafo.classList.add("prod-p")
		parrafo.textContent = e.nombre.toUpperCase();
		productoEncontrado.appendChild(parrafo);
		const anchor = document.createElement("a");
		anchor.href = "#card" + e.id;
		anchor.classList.add("no-style-anchor");
		const btnRedirigir = document.createElement("button");
		btnRedirigir.innerText = ">";
		btnRedirigir.classList.add("redirect-btn");
		anchor.appendChild(btnRedirigir);
		productoEncontrado.appendChild(anchor);
		divBusqueda.appendChild(productoEncontrado);
	});
	const btnCerrar = document.createElement("button");
	btnCerrar.innerText = "X";
	btnCerrar.classList.add("close-btn");
	divBusqueda.appendChild(btnCerrar);
	btnCerrar.addEventListener("click", () => {
		divBusqueda.style.display = "none";
	});
	swapModalS();
}

function sinResultados() {
	divBusqueda.style.display = "none";
	Swal.fire({
		title: "Producto no encontrado",
		text: "Evite dejar el campo vacío.",
		icon: "error",
		confirmButtonText: "Aceptar",
		confirmButtonColor: "#6a0000",
		iconColor: "#6a0000",
	});
}

//CART

cartBtn.addEventListener("click", () => {
	cartModal.style.display === "none"
		? swapModalC()
		: (cartModal.style.display = "none");
});

const closeCartBtn = document.getElementById("closeCart-btn");
let listaCarrito = document.getElementById("lista-carrito");
const btnsAnadir = document.querySelectorAll(".add-btn");
const imputsCantidad = document.querySelectorAll(".quant-imput");
const totalCarrito = document.getElementById("total");
let spanTotal = document.getElementById("total");
let total = 0;

closeCartBtn.addEventListener("click", () => {
	cartModal.style.display = "none";
})

btnsAnadir.forEach(function (boton) {
	boton.addEventListener("click", function () {
		let producto = boton.closest(".card");
		let nombre = producto.querySelector(".card-title").textContent.trim();
		let precioTexto = producto
			.querySelector(".card-price")
			.textContent.trim();
		let precio = parseFloat(
			precioTexto.split("|")[1].trim().replace("$", "")
		);
		let cantidad = parseInt(producto.querySelector(".quant-imput").value);
		let stock = parseInt(producto.dataset.stock);
		let cantidadValida = cantidad <= stock ? true : false;
		if (!cantidadValida) {
			sinStock();
			return;
		}
		let totalProducto = precio * cantidad;
		sumarAlCarrito(nombre, cantidad, totalProducto);
	});
});

function sumarAlCarrito(nombre, cantidad, totalProducto) {
	let nuevoLi = document.createElement("li");
	nuevoLi.classList.add("cart-prod-li")
	nuevoLi.textContent = `${nombre} (${cantidad}) | $${totalProducto.toFixed(
		2
	)}`;
	listaCarrito.appendChild(nuevoLi);
	total += totalProducto;
	spanTotal.textContent = total.toFixed(2);
	let carritoLocal = JSON.parse(localStorage.getItem("localCart")) || [];
	let datosProducto = {
		nombre: nombre,
		cantidad: cantidad,
		totalProducto: totalProducto,
	};
	carritoLocal.push(datosProducto);
	localStorage.setItem("localCart", JSON.stringify(carritoLocal));
	Swal.fire({
		title: "Éxito",
		text: "Producto/s agregado/s al carrito correctamente.",
		icon: "success",
		confirmButtonText: "Aceptar",
		confirmButtonColor: "#6a0000",
		iconColor: "#6a0000",
	});
}

function sinStock() {
	Swal.fire({
		title: "Sin stock",
		text: "La cantidad indicada supera nuestro stock disponible.",
		icon: "error",
		confirmButtonText: "Aceptar",
		confirmButtonColor: "#6a0000",
		iconColor: "#6a0000",
	});
}

const clearCartBtn = document.getElementById("clearCartBtn");
clearCartBtn.addEventListener("click", () => {
	listaCarrito.innerHTML = "";
	spanTotal.innerHTML = "0";
});

const confirmBtn = document.getElementById("confirm-btn")
confirmBtn.addEventListener("click", async () => {
	const { value: email } = await Swal.fire({
		icon: "info",
		title: "Ingrese su e-mail para enviarle los detalles de su pedido.",
		input: "email",
		inputPlaceholder: "Ingrese su e-mail",
		confirmButtonText: "Aceptar",
		confirmButtonColor: "#6a0000",
		iconColor: "#6a0000",
	});
	if (email) {
		Swal.fire({
			title: "Éxito",
			text: "Pedido procesado correctamente, recibirá por e-mail los detalles",
			icon: "success",
			confirmButtonText: "Aceptar",
			confirmButtonColor: "#6a0000",
			iconColor: "#6a0000",
		});
	}
})
