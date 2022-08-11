class Comentarios {
    constructor(nombre, comentario, correo, img) {
        (this.nombre = nombre),
            (this.comentario = comentario),
            (this.correo = correo),
            (this.image = img);
    }
}

let comentariosAbstraidos = [
    new Comentarios(
        "Linus Torvalds",
        "El olor a café de calidad ya te hace entrar, tiene mesas adentro y una terraza acogedora, ideal si vas de charla con amigos o solo con tu laptop . Muy buena atención.",
        "linus@gmail.com",
        "../assets/img/personas/persona.jpg"
    ),
    new Comentarios(
        "Jose Luis",
        "El lugar es acogedor y el café de lo mejor que puedes encontrar.",
        "Jose@gmail.com",
        "../assets/img/personas/persona-1.jpg"
    ),
    new Comentarios(
        "Maria Gomez",
        "Este es un verdadero lugar para tomar un gran cafe.",
        "Maria@gmail.com",
        "../assets/img/personas/persona-2.jpg"
    ),
    new Comentarios(
        "Mario Gonzalez",
        "Excelente la comida, porciones grandes y muy buenas.",
        "Mario@gmail.com",
        "../assets/img/personas/persona-3.jpg"
    ),
    new Comentarios(
        "Carlos Rivera",
        "Fui a tomar un cafe y comer algunas cositas. El lugar está bueno, pero demoran demasiado.",
        "Carlos@gmail.com",
        "../assets/img/personas/persona-4.jpg"
    ),
    new Comentarios(
        "Fernando Ruiz",
        "Excelente ambiente, atención y bebidas. Un lugar mágico para apreciadores de café. Además de apreciar distintos tipos de café, se puede conocer más acerca de las variaciones. Recomendo.",
        "Fernando@gmail.com",
        "../assets/img/personas/persona-5.jpg"
    ),
];

carga = (index) => {
    let { nombre, comentario, image } = comentariosAbstraidos[index];
    article = document.createElement("article");
    article.className = "col-12 col-md-4 col-lg-3 bg m-4 resenas";
    div = document.createElement("div");
    div.className = "d-flex justify-content-center pt-4";
    img = document.createElement("img");
    img.setAttribute("src", "../assets/img/quote-img.png");
    article.appendChild(div).appendChild(img);

    div = document.createElement("div");
    div.className = "d-flex justify-content-center mt-4 text-card";
    span = document.createElement("span");
    span.className = "text-center span-text";
    span.setAttribute("id", `${index}`);
    text = document.createTextNode(comentario);
    comentarios
        .appendChild(article)
        .appendChild(div)
        .appendChild(span)
        .appendChild(text);

    div = document.createElement("div");
    div.className = "d-flex justify-content-center mt-4";
    img = document.createElement("img");
    img.setAttribute("src", image);
    img.className = "border-100 imagen-resena";
    comentarios.appendChild(article).appendChild(div).appendChild(img);

    div = document.createElement("div");
    div.className = "d-flex justify-content-center fs-2 text-center";
    span = document.createElement("span");
    span.className = "color fs-1";
    text = nombre;
    comentarios
        .appendChild(article)
        .appendChild(div)
        .appendChild(span).textContent = text;

    agregarSpanText(index);
    verMenos(index);
};

AgregarNuevoComentario = () => {
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    texto = document.getElementById("texto").value;
    img = "../assets/img/personas/persona.jpg";

    if (nombre != "" && texto != "" && correo.includes("@")) {
        comentariosAbstraidos.push(new Comentarios(nombre, texto, correo, img));
        localStorage.setItem(
            "comentarios",
            JSON.stringify(comentariosAbstraidos)
        );
        Swal.fire({
            title: "su comentario ha sido publicado con exito",
            confirmButtonText: "OK",
            icon: "success",
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                carga(comentariosAbstraidos.length - 1);
                localStorage.formulario = "";
                window.location.reload();
            }
        });
    } else {
        Swal.fire({
            title: "Ingrese correctamente los campos del formulario",
            confirmButtonText: "OK",
            icon: "error",
            allowOutsideClick: false,
        });
    }
};

CargarTodosLosComentarios = () => {
    for (let index = 0; index < comentariosAbstraidos.length; index++) {
        carga(index);
    }
};

agregarSpanText = (index) => {
    span = document.getElementById(index);
    span.setAttribute("onmouseover", `verMas(${index})`);
    span.setAttribute("onmouseout", `verMenos(${index})`);
};

verMas = (id) => {
    texto = document.getElementById(id).textContent =
        comentariosAbstraidos[id].comentario;
};

verMenos = (id) => {
    let recorte = comentariosAbstraidos[id].comentario.substring(0, 64);
    if (comentariosAbstraidos[id].comentario.length > 65) {
        recorte = recorte + "...";

        span = document.getElementById(id);
        span.textContent = recorte;

        p = document.createElement("p");
        p.className = "leerMas";
        p.textContent = "▼";

        span.appendChild(p);
    } else {
        comentario = comentariosAbstraidos[id].comentario;
        document.getElementById(id).textContent = comentario;
    }
};

if (localStorage.comentarios) {
    comentariosAbstraidos = [];
    coment = JSON.parse(localStorage.getItem("comentarios"));
    for (let index = 0; index < coment.length; index++) {
        comentariosAbstraidos[index] = new Comentarios(
            coment[index].nombre,
            coment[index].comentario,
            coment[index].correo,
            coment[index].image
        );
    }
}

localStorage.length == 0 &&
    localStorage.setItem("comentarios", JSON.stringify(comentariosAbstraidos));

localStorageFormulario = () => {
    setTimeout(() => {
        formulario = [];

        nombre = document.getElementById("nombre").value;
        correo = document.getElementById("correo").value;
        texto = document.getElementById("texto").value;

        formulario = [...formulario, nombre, correo, texto];

        localStorage.setItem("formulario", JSON.stringify(formulario));
    }, 10);
};

cargarFormularioComentario = () => {
    if (localStorage.formulario) {
        formulario = JSON.parse(localStorage.getItem("formulario"));

        document.getElementById("nombre").value = formulario[0];
        document.getElementById("correo").value = formulario[1];
        document.getElementById("texto").value = formulario[2];
    }
};

CargarTodosLosComentarios();

cargarFormularioComentario();
