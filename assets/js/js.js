let seleccionesDeUsuario = [];
let agregar = "Si";
let precioTotal = 0;

class Productos {
    constructor(nombre, precio, cantidad) {
        (this.nombre = nombre),
            (this.precioUnitario = precio),
            (this.cantidad = cantidad);
    }

    agregar(cantidad) {
        this.cantidad += cantidad;
    }
}

const seleccionProducto = (tiposProductos) => {
    if (tiposProductos == 1) {
        let Seleccion = prompt(
            `seleccione una Bebida Caliente
                \n 1-Macchiato Bombóm
                \n 2-Capuccino Moka
                \n 3-Cappuccino
                \n 4-Cappuccino Tentación
                \n Ingrese un numero para continuar`
        );

        switch (Seleccion) {
            case "1":
                cantidad = parseInt(
                    prompt(
                        "ingrese la cantidad de productos del mismo tipo que desea"
                    )
                );

                producto = seleccionesDeUsuario.filter(
                    (item) => item.nombre == "Macchiato Bombóm"
                );

                if (producto.length != 0) {
                    producto[0].agregar(cantidad);
                } else {
                    seleccionesDeUsuario.push(
                        new Productos("Macchiato Bombóm", 255, cantidad)
                    );
                }

                break;

            case "2":
                cantidad = parseInt(
                    prompt(
                        "ingrese la cantidad de productos del mismo tipo que desea"
                    )
                );

                producto = seleccionesDeUsuario.filter(
                    (item) => item.nombre == "Capuccino Moka"
                );

                if (producto.length != 0) {
                    producto[0].agregar(cantidad);
                } else {
                    seleccionesDeUsuario.push(
                        new Productos("Capuccino Moka", 255, cantidad)
                    );
                }
                break;
            case "3":
                cantidad = parseInt(
                    prompt(
                        "ingrese la cantidad de productos del mismo tipo que desea"
                    )
                );

                producto = seleccionesDeUsuario.filter(
                    (item) => item.nombre == "Cappuccino"
                );

                if (producto.length != 0) {
                    producto[0].agregar(cantidad);
                } else {
                    seleccionesDeUsuario.push(
                        new Productos("Cappuccino", 255, cantidad)
                    );
                }
                break;
            case "4":
                cantidad = parseInt(
                    prompt(
                        "ingrese la cantidad de productos del mismo tipo que desea"
                    )
                );

                producto = seleccionesDeUsuario.filter(
                    (item) => item.nombre == "Cappuccino Tentación"
                );

                if (producto.length != 0) {
                    producto[0].agregar(cantidad);
                } else {
                    seleccionesDeUsuario.push(
                        new Productos("Cappuccino Tentación", 255, cantidad)
                    );
                }
                break;
        }
    } else if (tiposProductos == 2) {
        let Seleccion = prompt(
            `seleccione una Bebida Fria
                \n 1-Té de Frambuesa
                \n 2-Té de Limon
                \n 3-Té de Naranja
                \n Ingrese un numero para continuar`
        );

        switch (Seleccion) {
            case "1":
                cantidad = parseInt(
                    prompt(
                        "ingrese la cantidad de productos del mismo tipo que desea"
                    )
                );

                producto = seleccionesDeUsuario.filter(
                    (item) => item.nombre == "Té de Frambuesa"
                );

                if (producto.length != 0) {
                    producto[0].agregar(cantidad);
                } else {
                    seleccionesDeUsuario.push(
                        new Productos("Té de Frambuesa", 255, cantidad)
                    );
                }
                break;
            case "2":
                cantidad = parseInt(
                    prompt(
                        "ingrese la cantidad de productos del mismo tipo que desea"
                    )
                );

                producto = seleccionesDeUsuario.filter(
                    (item) => item.nombre == "Té de Limon"
                );

                if (producto.length != 0) {
                    producto[0].agregar(cantidad);
                } else {
                    seleccionesDeUsuario.push(
                        new Productos("Té de Limon", 255, cantidad)
                    );
                }
                break;
            case "3":
                cantidad = parseInt(
                    prompt(
                        "ingrese la cantidad de productos del mismo tipo que desea"
                    )
                );

                producto = seleccionesDeUsuario.filter(
                    (item) => item.nombre == "Té de Naranja"
                );

                if (producto.length != 0) {
                    producto[0].agregar(cantidad);
                } else {
                    seleccionesDeUsuario.push(
                        new Productos("Té de Naranja", 255, cantidad)
                    );
                }
                break;
        }
    } else if (tiposProductos == 3) {
        let Seleccion = prompt(
            `seleccione un Salados
                \n 1-Tostado 4 Quesos
                \n 2-Tostado Mixto
                \n 3-Tostado Napolitano
                \n Ingrese un numero para continuar`
        );

        switch (Seleccion) {
            case "1":
                cantidad = parseInt(
                    prompt(
                        "ingrese la cantidad de productos del mismo tipo que desea"
                    )
                );

                producto = seleccionesDeUsuario.filter(
                    (item) => item.nombre == "Tostado 4 Quesos"
                );

                if (producto.length != 0) {
                    producto[0].agregar(cantidad);
                } else {
                    seleccionesDeUsuario.push(
                        new Productos("Tostado 4 Quesos", 255, cantidad)
                    );
                }
                break;
            case "2":
                cantidad = parseInt(
                    prompt(
                        "ingrese la cantidad de productos del mismo tipo que desea"
                    )
                );

                producto = seleccionesDeUsuario.filter(
                    (item) => item.nombre == "Tostado Mixto"
                );

                if (producto.length != 0) {
                    producto[0].agregar(cantidad);
                } else {
                    seleccionesDeUsuario.push(
                        new Productos("Tostado Mixto", 255, cantidad)
                    );
                }
                break;
            case "3":
                cantidad = parseInt(
                    prompt(
                        "ingrese la cantidad de productos del mismo tipo que desea"
                    )
                );

                producto = seleccionesDeUsuario.filter(
                    (item) => item.nombre == "Tostado Napolitano"
                );

                if (producto.length != 0) {
                    producto[0].agregar(cantidad);
                } else {
                    seleccionesDeUsuario.push(
                        new Productos("Tostado Napolitano", 255, cantidad)
                    );
                }
                break;
        }
    } else if (tiposProductos == 4) {
        let Seleccion = prompt(
            `seleccione un Postres
                \n 1-Flan
                \n 2-Pay de Queso
                \n Ingrese un numero para continuar`
        );

        switch (Seleccion) {
            case "1":
                cantidad = parseInt(
                    prompt(
                        "ingrese la cantidad de productos del mismo tipo que desea"
                    )
                );

                producto = seleccionesDeUsuario.filter(
                    (item) => item.nombre == "Flan"
                );

                if (producto.length != 0) {
                    producto[0].agregar(cantidad);
                } else {
                    seleccionesDeUsuario.push(
                        new Productos("Flan", 255, cantidad)
                    );
                }
                break;
            case "2":
                cantidad = parseInt(
                    prompt(
                        "ingrese la cantidad de productos del mismo tipo que desea"
                    )
                );

                producto = seleccionesDeUsuario.filter(
                    (item) => item.nombre == "Pay de Queso"
                );

                if (producto.length != 0) {
                    producto[0].agregar(cantidad);
                } else {
                    seleccionesDeUsuario.push(
                        new Productos("Pay de Queso", 255, cantidad)
                    );
                }
                break;
        }
    } else if (tiposProductos == 5) {
        EliminarProducto();
    } else {
        alert("Porfavor Ingrese un numero de menu valido");
    }
};

const repetirSeleccion = () => {
    agregar = "";
    console.table(seleccionesDeUsuario);
    do {
        agregar = prompt(
            "si desea agregar algo a su menu escriba Si en caso contrario escriba No"
        );
    } while (
        agregar != "Si" &&
        agregar != "si" &&
        agregar != "SI" &&
        agregar != "No" &&
        agregar != "no" &&
        agregar != "NO"
    );
};

const EliminarProducto = () => {
    let msg = "elige el producto a eliminar o reducir su cantidad";
    let retirar = -1;

    num = 1;
    for (let index = 0; index < seleccionesDeUsuario.length; index++) {
        msg +=
            "\n" +
            num +
            "- " +
            seleccionesDeUsuario[index].nombre +
            " actualmente su menu posee  " +
            seleccionesDeUsuario[index].cantidad +
            " unidades de este producto.";
        num++;
    }
    let numeroEliminar = prompt(msg);

    while (
        retirar < 0 ||
        retirar > seleccionesDeUsuario[numeroEliminar - 1].cantidad
    ) {
        retirar = prompt(
            " Ingrese la cantidad que desea retirar del producto: " +
                seleccionesDeUsuario[numeroEliminar - 1].nombre +
                " su cantidad actual es de: " +
                seleccionesDeUsuario[numeroEliminar - 1].cantidad
        );
    }
    seleccionesDeUsuario[numeroEliminar - 1].cantidad -= retirar;
};

while (agregar == "Si" || agregar == "si" || agregar == "SI") {
    let tiposMenu = prompt(
        `seleccione uno de nuestro menu de  productos
        \n 1-Bebidas Calientes
        \n 2-Bebidas Frias
        \n 3-Salados
        \n 4-Postres
        \n 5-Eliminar Producto del menu
        \n Ingrese un numero para continuar`
    );
    seleccionProducto(tiposMenu);
    repetirSeleccion();
}
if (agregar == "No" || agregar == "no" || agregar == "NO") {
    console.log("\n");
    console.log("Su Pedido es :");
    console.table(seleccionesDeUsuario);

    for (const iterator of seleccionesDeUsuario) {
        precioTotal += iterator.precioUnitario * iterator.cantidad;
    }

    console.log("El total de su compra es : " + precioTotal);
}

// let tabla = document.getElementById("tabla");

// for (const iterator of seleccionesDeUsuario) {
//     const tr = document.createElement("tr");
//     const td1 = document.createElement("td");
//     const td2 = document.createElement("td");
//     const td3 = document.createElement("td");

//     contador = 1;

//     id = document.createTextNode(contador);
//     nombre = document.createTextNode(iterator.nombre);
//     cantidad = document.createTextNode(iterator.cantidad);

//     contador++;

//     tabla.appendChild(tr).appendChild(td1).appendChild(id);

//     tabla.appendChild(tr).appendChild(td2).appendChild(nombre);

//     tabla.appendChild(tr).appendChild(td3).appendChild(cantidad);
// }

let tabla = document.getElementById("tabla");
let totalCompra = document.getElementById("total");

for (const iterator of seleccionesDeUsuario) {
    const tr = document.createElement("tr");

    contador = 1;

    id = document.createTextNode(contador);
    nombre = document.createTextNode(iterator.nombre);
    cantidad = document.createTextNode(iterator.cantidad);

    td = document.createElement("td");
    tabla.appendChild(tr).appendChild(td).appendChild(id);
    td = document.createElement("td");
    tabla.appendChild(tr).appendChild(td).appendChild(nombre);
    td = document.createElement("td");
    tabla.appendChild(tr).appendChild(td).appendChild(cantidad);
    contador++;
}

totalCompra.innerHTML = precioTotal;
