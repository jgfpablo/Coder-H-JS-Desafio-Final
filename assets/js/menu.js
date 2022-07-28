let precioTotal = 0;
class Producto {
    constructor(nombre, precio, cantidad) {
        (this.nombre = nombre),
            (this.precio = precio),
            (this.cantidad = cantidad);
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

let productos = [
    new Producto("Macchiato Bombom", 240, 0),
    new Producto("Cappuccino Moka", 240, 0),
    new Producto("Cappuccino", 220, 0),
    new Producto("Cappuccino Tentación", 250, 0),
    new Producto("Cappuccino Bombóm", 230, 0),
    new Producto("Macchiato", 220, 0),
    new Producto("Té de Frambuesa", 150, 0),
    new Producto("Té de Limon", 120, 0),
    new Producto("Té de Naranja", 140, 0),
    new Producto("Tostado Napolitano", 200, 0),
    new Producto("Tostado Mixto", 250, 0),
    new Producto("Tostado 4 Quesos", 230, 0),
    new Producto("Flan", 170, 0),
    new Producto("Pay de Queso", 250, 0),
];

CargarLocalStorage = () => {
    if (localStorage.productos) {
        listaProductos = JSON.parse(localStorage.getItem("productos"));
        for (const iterator of listaProductos) {
            document.getElementById(iterator.nombre).value = iterator.cantidad;
            productos.push(
                new Producto(
                    iterator.nombre,
                    iterator.precio,
                    iterator.cantidad
                )
            );
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
                cantidad = document.createTextNode(`${producto.cantidad}`);
                tabla.appendChild(tr).appendChild(td).appendChild(cantidad);
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
                localStorage.clear();
                window.location.reload();
            }
        });
    } else {
        Swal.fire({
            title: "Usted no posee productos en su carrito",
            icon: "warning",
            allowOutsideClick: false,
        });
    }
};

CargarLocalStorage();
