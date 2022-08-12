let productos = [];
let precioTotal = 0;
let main = document.getElementById("main");

class Producto {
    constructor(nombre, precio, cantidad, categoria, imagen) {
        (this.nombre = nombre),
            (this.precio = precio),
            (this.cantidad = cantidad),
            (this.categoria = categoria),
            (this.imagen = imagen);
    }

    Agregar() {
        this.cantidad = this.cantidad + 1;
    }

    Quitar() {
        if (this.cantidad >= 1) {
            this.cantidad = this.cantidad - 1;
        }
    }
}

CargarLocalStorage = () => {
    if (localStorage.productos) {
        listaProductos = JSON.parse(localStorage.getItem("productos"));
        for (const iterator of listaProductos) {
            if (document.getElementById(iterator.nombre)) {
                document.getElementById(iterator.nombre).value =
                    iterator.cantidad;
            }
        }
    }
};

Total = () => {
    for (const producto of productos) {
        tdProducto = document.getElementById(`td-${producto.nombre}`);
        trProducto = document.getElementById(`tr-${producto.nombre}`);
        if (tdProducto) {
            if (producto.cantidad > 0) {
                tdProducto.innerHTML = producto.cantidad;
            } else {
                trProducto.remove();
            }
        } else {
            if (producto.cantidad != 0) {
                tr = document.createElement("tr");
                tr.setAttribute("id", `tr-${producto.nombre}`);
                td = document.createElement("td");
                nombre = document.createTextNode(`${producto.nombre}`);
                tabla.appendChild(tr).appendChild(td).appendChild(nombre);

                td = document.createElement("td");
                td.setAttribute("id", `td-${producto.nombre}`);
                td.className = "text-center";
                cantidad = document.createTextNode(`${producto.cantidad}`);
                tabla.appendChild(tr).appendChild(td).appendChild(cantidad);

                td = document.createElement("td");
                td.setAttribute("id", `td-${producto.nombre}`);
                td.className = "text-center";
                precioUnitario = document.createTextNode(`${producto.precio}`);
                tabla
                    .appendChild(tr)
                    .appendChild(td)
                    .appendChild(precioUnitario);
            }
        }
    }

    let total = document.getElementById("total");
    precioTotal = 0;
    for (const iterator of productos) {
        precioTotal = precioTotal + iterator.precio * iterator.cantidad;
    }
    total.innerHTML = precioTotal;
};

Sumar = (nombre) => {
    let posicion;
    input = document.getElementById(nombre);

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre == nombre) {
            posicion = [i];
        }
    }

    productos[posicion].Agregar();
    input.value = `${productos[posicion].cantidad}`;

    localStorage.setItem("productos", JSON.stringify(productos));
};

Restar = (nombre) => {
    let posicion;
    input = document.getElementById(nombre);

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre == nombre) {
            posicion = [i];
        }
    }

    if (productos[posicion].cantidad > 0) {
        productos[posicion].Quitar();
        input.value = `${productos[posicion].cantidad}`;
    }

    localStorage.setItem("productos", JSON.stringify(productos));
};

RealizarPedido = () => {
    total = Number(document.getElementById("total").innerHTML);
    if (total > 0) {
        Swal.fire({
            title: "Su pedido esta en proceso",
            confirmButtonText: "OK",
            icon: "success",
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("productos");
                window.location.reload();
            }
        });
    } else {
        Swal.fire({
            title: "Usted no posee productos en su carrito",
            icon: "warning",
            allowOutsideClick: false,
        });
        localStorage.removeItem("productos");
    }
};

CargarHtmlRepeticion = (iterator, categoria) => {
    article = document.createElement("article");
    article.className = "menu col-12 col-md-4 col-lg-3 bg bg-img m-4";
    divPadre = document.createElement("div");
    categoria.appendChild(article).appendChild(divPadre);

    div = document.createElement("div");
    div.className = "d-flex justify-content-center";
    img = document.createElement("img");
    img.setAttribute("src", iterator.imagen);
    img.className = "img-menu w-100 h-100";
    divPadre.appendChild(div).appendChild(img);

    div = document.createElement("div");
    div.className = "d-flex flex-column align-items-center";
    p = document.createElement("p");
    p.className = "menu-text-title";
    p.textContent = iterator.nombre;
    divPadre.appendChild(div).appendChild(p);

    divHijo = document.createElement("div");
    divHijo.className = "agregar-quitar-menu";

    buttonRestar = document.createElement("button");
    buttonRestar.className = "btn-agregar-quitar btn-quitar";
    buttonRestar.setAttribute("onclick", `Restar("${iterator.nombre}")`);
    buttonRestar.textContent = "-";
    divPadre.appendChild(divHijo).appendChild(buttonRestar);

    input = document.createElement("input");
    input.className = "input-number";
    input.setAttribute("disabled", "»disabled»");
    input.setAttribute("value", "0");
    input.setAttribute("type", "number");
    input.setAttribute("id", iterator.nombre);
    divHijo.appendChild(input);

    buttonSumar = document.createElement("button");
    buttonSumar.className = "btn-agregar-quitar";
    buttonSumar.setAttribute("onclick", `Sumar("${iterator.nombre}")`);
    buttonSumar.textContent = "+";
    divHijo.appendChild(buttonSumar);

    p = document.createElement("p");
    p.className = "menu-text-title";
    p.textContent = "$" + iterator.precio;
    divPadre.appendChild(p);
};

CargarHtmlCategoria = (nombreCategoria, idCategoria) => {
    section = document.createElement("section");
    h2 = document.createElement("h2");
    h2.className = "d-flex justify-content-center mt-4 color sub-menu";
    h2.textContent = nombreCategoria;

    divCategoria = document.createElement("div");
    divCategoria.className =
        "container-fluid d-flex flex-wrap justify-content-center";
    divCategoria.setAttribute("id", idCategoria);

    main.appendChild(h2);
    main.appendChild(divCategoria);
};

CargarHtml = () => {
    let arrayBebidasCalientes;
    let arrayBebidasFrias;
    let arraySalados;
    let arrayPostres;

    if (localStorage.producto) {
        arrayBebidasCalientes = localStorage.productos.filter(
            (producto) => producto.categoria === "Bebidas Calientes"
        );
        arrayBebidasFrias = localStorage.productos.filter(
            (producto) => producto.categoria === "Bebidas Frias"
        );
        arraySalados = localStorage.productos.filter(
            (producto) => producto.categoria === "Salados"
        );
        arrayPostres = localStorage.productos.filter(
            (producto) => producto.categoria === "Postres"
        );
    } else {
        arrayBebidasCalientes = productos.filter(
            (producto) => producto.categoria === "Bebidas Calientes"
        );
        arrayBebidasFrias = productos.filter(
            (producto) => producto.categoria === "Bebidas Frias"
        );
        arraySalados = productos.filter(
            (producto) => producto.categoria === "Salados"
        );
        arrayPostres = productos.filter(
            (producto) => producto.categoria === "Postres"
        );
    }

    if (arrayBebidasCalientes) {
        CargarHtmlCategoria("Bebidas Calientes", "Bebidas_Calientes");

        let bebidasCalientes = document.getElementById("Bebidas_Calientes");

        hr = document.createElement("hr");
        main.appendChild(hr);

        for (const iterator of arrayBebidasCalientes) {
            CargarHtmlRepeticion(iterator, bebidasCalientes);
        }
    }

    if (arrayBebidasFrias) {
        CargarHtmlCategoria("Bebidas Frias", "Bebidas_Frias");

        let bebidasFrias = document.getElementById("Bebidas_Frias");

        hr = document.createElement("hr");
        main.appendChild(hr);

        for (const iterator of arrayBebidasFrias) {
            CargarHtmlRepeticion(iterator, bebidasFrias);
        }
    }

    if (arraySalados) {
        CargarHtmlCategoria("Salados", "Salados");

        let salados = document.getElementById("Salados");

        hr = document.createElement("hr");
        main.appendChild(hr);

        for (const iterator of arraySalados) {
            CargarHtmlRepeticion(iterator, salados);
        }
    }

    if (arrayPostres) {
        CargarHtmlCategoria("Postres", "Postres");

        let postres = document.getElementById("Postres");

        for (const iterator of arrayPostres) {
            CargarHtmlRepeticion(iterator, postres);
        }
    }
};

if (localStorage.productos && productos != []) {
    productosLista = JSON.parse(localStorage.getItem("productos"));

    for (datos of productosLista) {
        productos.push(
            new Producto(
                datos.nombre,
                datos.precio,
                datos.cantidad,
                datos.categoria,
                datos.imagen
            )
        );
    }

    CargarHtml();
    CargarLocalStorage();
} else {
    // En caso de que la api no este funcionando descomentar fetch local y comentar el de la api

    // ---------------------- FETCH LOCAL
    // fetch("../assets/js/api.json")
    //     .then((respuesta) => respuesta.json())
    //     .then((datosJson) => {
    //         for (const datos of datosJson) {
    //             productos.push(
    //                 new Producto(
    //                     datos.nombre,
    //                     datos.precio,
    //                     datos.cantidad,
    //                     datos.categoria,
    //                     datos.imagen
    //                 )
    //             );
    //         }
    //         CargarHtml();
    //         CargarLocalStorage();
    //     })
    //     .catch((e) => {
    //         console.error("ocurrio un error en la peticion a la api");
    //     });
    // ---------------------- FIN FETCH LOCAL

    // ------------------ FETCH API
    const datos = fetch(
        "https://coffee-api-c08bc-default-rtdb.firebaseio.com/productos.json"
    )
        .then((respuesta) => respuesta.json())
        .then((datosJson) => {
            for (const datos of datosJson) {
                productos.push(
                    new Producto(
                        datos.nombre,
                        datos.precio,
                        datos.cantidad,
                        datos.categoria,
                        datos.imagen
                    )
                );
            }
            CargarHtml();
            CargarLocalStorage();
        })
        .catch((e) => {
            console.log(e);
            console.error("problemas con api");
            CargarHtmlCategoria(
                "En este momento el menu se encuentra fuera de servicio",
                "Error"
            );
        });
    // ------------------ FIN FETCH API
}
