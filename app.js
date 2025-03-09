// Botón para añadir amigo
const buttonAniadir = document.querySelector(".button-add");

// Botón para sortear nombres
const buttonSorteo = document.querySelector(".button-draw");

// Campo de texto
const input = document.getElementById("amigo");

// Contenedor lista de amigos
const contenedorNombreAmigos = document.getElementById("listaAmigos");

// Contenedor resultado
const contenedorResultado = document.getElementById("resultado");

// Inicializamos el arreglo vacío para almacenar los nombres
const arrayNombres = [];

// Escuchador de evento al botón de añadir
buttonAniadir.addEventListener("click", () => {
	// Validamos que el input no esté vacío y cumpla con las reglas
	if (input.value.trim() === "") {
		mostrarError(contenedorNombreAmigos, "Este campo es obligatorio");
	} else if (input.value.length < 3) {
		// Validamos que el nombre al menos contenga 3 caracteres
		mostrarError(
			contenedorNombreAmigos,
			"El nombre debe contener al menos 3 caracteres"
		);
	} else if (/\d/.test(input.value.trim())) {
		// Validamos que el nombre no contenga numeros
		mostrarError(
			contenedorNombreAmigos,
			"El nombre no puede contener números"
		);
	} else if (arrayNombres.includes(input.value)) {
		// Validamos que el nombre no se repita en la lista
		mostrarError(
			contenedorNombreAmigos,
			`El nombre ${input.value} ya está incluido en la lista`
		);
	} else {
		// Si todo está bien, ocultamos el error y agregamos el nombre al arreglo
		ocultarError(contenedorNombreAmigos);
		arrayNombres.push(input.value);
		input.value = ""; // Limpiamos el input
		mostrarNombres(); // llamaos a la funcion mostrar nombres
	}
});

// Escuchador de evento al botón de sorteo
buttonSorteo.addEventListener("click", () => {
	// Si el arreglo de nombre contiene menos de 2 nombres
	if (arrayNombres.length < 2) {
		// Mostramos error
		mostrarError(
			contenedorNombreAmigos,
			"Agrega al menos 2 amigos para realizar el sorteo"
		);
	} else {
		// De lo contrario ocultamos el error y sorteamos el nombre
		ocultarError(contenedorNombreAmigos);
		sortearNombre();
	}
});

// Función para mostrar los nombres en la lista
function mostrarNombres() {
	let contenidoHTML = ""; // Inicializamos el contenido vacío
	arrayNombres.forEach((nombre) => {
		contenidoHTML += `<li>${nombre}</li>`;
	});
	contenedorNombreAmigos.innerHTML = contenidoHTML; // Actualizamos el contenido
}

// Función para realizar el sorteo
function sortearNombre() {
	// Creamos un numero random
	const indiceRandom = Math.floor(Math.random() * arrayNombres.length);
	// Creamos una constante que va a almacenar el amigo secreto
	const amigoSeleccionado = arrayNombres[indiceRandom]; // Pasamos por parametro el indice random que originamos

	// Inyectamos el elemento li para mostrarlo dentro del contenedor
	contenedorResultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
}

// Función para mostrar errores
function mostrarError(ul, mensaje) {
	const spanError = ul.previousElementSibling; // Accedemos al span anterior
	if (spanError) {
		spanError.textContent = mensaje; // Mostramos el mensaje
		spanError.style.display = "block"; // Lo hacemos visible
	}
}

// Función para ocultar errores
function ocultarError(ul) {
	const spanError = ul.previousElementSibling; // Accedemos al span anterior
	if (spanError) {
		spanError.textContent = ""; // Vaciamos el contenido
		spanError.style.display = "none"; // Lo ocultamos
	}
}
