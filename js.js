

document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        {
            imagen: '1.png',
            loUltimo: 'Materiales sostenibles',
            nombre: 'Nike Air Max TW',
            descripcion: 'Zapatillas - Hombre',
            colores: '3 colores',
            precio: '103,99 €',
            precio1: 103.99
        },
        {
            imagen: '2.png',
            loUltimo: 'Lo último',
            nombre: 'Nike Air Max Plus 3',
            descripcion: 'Zapatillas - Hombre',
            colores: '3 colores',
            precio: '132,99 € €',
            precio1: 132.99
        },
        {
            imagen: '3.png',
            loUltimo: 'Lo último',
            nombre: 'Nike Air Force 1 Jewel',
            descripcion: 'Zapatillas - Hombre',
            colores: '3 colores',
            precio: '90,99 €',
            precio1: 90.99
        },
        {
            imagen: '4.png',
            loUltimo: 'Lo último',
            nombre: 'Nike P-6000 Premium',
            descripcion: 'Zapatillas - Hombre',
            colores: '3 colores',
            precio: '119,99 €',
            precio1: 119.99
        },
        {
            imagen: '5.png',
            loUltimo: 'Lo último',
            nombre: 'Nike React Vision',
            descripcion: 'Zapatillas - Hombre',
            colores: '3 colores',
            precio: '139,99 €',
            precio1: 139.99
        },
        {
            imagen: '6.png',
            loUltimo: 'Lo último',
            nombre: 'Nike Air Max Plus Drift',
            descripcion: 'Zapatillas - Hombre',
            colores: '3 colores',
            precio: '129,99 €',
            precio1: 129.99
        },
        {
            imagen: '7.png',
            loUltimo: 'Lo último',
            nombre: 'Nike Air Max Solo',
            descripcion: 'Zapatillas - Hombre',
            colores: '3 colores',
            precio: '65,99 €',
            precio1: 65.99
        },
        {
            imagen: '8.png',
            loUltimo: 'Lo último',
            nombre: 'Nike Shox TL',
            descripcion: 'Zapatillas',
            colores: '3 colores',
            precio: '169,99 €',
            precio1: 169.99
        },
        {
            imagen: '9.png',
            loUltimo: 'Producto para Members',
            nombre: 'Nike Dunk Low',
            descripcion: 'Zapatillas - Hombre',
            colores: '3 colores',
            precio: '90,99 €',
            precio1: 90.99
        },
        {
            imagen: '10.png',
            loUltimo: 'Materiales sostenibles',
            nombre: 'Nike Dunk Low',
            descripcion: 'Zapatillas - Hombre',
            colores: '3 colores',
            precio: '90,99 €',
            precio1: 90.99
        },
        {
            imagen: '11.png',
            loUltimo: 'Lo último',
            nombre: 'Nike Dunk Low',
            descripcion: 'Zapatillas - Hombre',
            colores: '3 colores',
            precio: '90,99 €',
            precio1: 90.99
        },
        {
            imagen: '12.png',
            loUltimo: 'Materiales sostenibles',
            nombre: 'Nike Juniper Trail 3',
            descripcion: 'Zapatillas de trail running - Hombre',
            colores: '3 colores',
            precio: '89,99 €',
            precio1: 89.99
        },
        
    ];
   
    const contenedor = document.getElementById('producto-grid');

    productos.forEach((producto, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto1';

        productoDiv.innerHTML =  `
            <a href="part2_2.html" class="foto1" style="background-image: url(${producto.imagen});" data-index="${index}"></a>
            <div class="descripcion1">
                <h1 id="L">${producto.loUltimo}</h1>
                <h1 id="N">${producto.nombre}</h1>
                <h1 id="Z">${producto.descripcion}</h1>
                <h1 id="C">${producto.colores}</h1>
                <h1 id="e">${producto.precio}</h1>
            </div>
        ` ;

        productoDiv.querySelector('a').addEventListener('click', function () {
            localStorage.setItem('productoSeleccionado', JSON.stringify(productos[index]));
        });

        contenedor.appendChild(productoDiv);
    });
});

document.addEventListener('scroll', function() {
    const parte4cabeza2secc2 = document.querySelector('.parte4cabeza2secc2');
    const secc1 = document.querySelector('.parte4cabeza2secc1');
    const umbralPx = 200; 
    const scrollTop = window.scrollY || window.pageYOffset;


    if (scrollTop > umbralPx) {
        parte4cabeza2secc2.scrollTop = scrollTop - umbralPx;
    }

  
    if (scrollTop > parte4cabeza2secc2.offsetTop) {
        secc1.classList.add('scrolling');
    } else {
        secc1.classList.remove('scrolling');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const producto = JSON.parse(localStorage.getItem('productoSeleccionado'));
    
    for (let i = 0; i < 7; i++) { 
        if (producto) {
            const imagenProducto = document.createElement('img');
            imagenProducto.src = producto.imagen;
            imagenProducto.alt = producto.nombre;
    
            const contenedor = document.querySelector('.parte4parte2_1');
            
            contenedor.appendChild(imagenProducto);
    
         
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const producto = JSON.parse(localStorage.getItem('productoSeleccionado'));

    if (producto) {
        const contenedor = document.querySelector('.parte4parte2_2');

      
        const cuadroImagen = document.createElement('div');
        cuadroImagen.classList.add('cuadro-imagen');

    
        const imagenProducto = document.createElement('img');
        imagenProducto.src = producto.imagen;
        imagenProducto.alt = producto.nombre;
        imagenProducto.classList.add('imagen-producto');

        cuadroImagen.appendChild(imagenProducto);
        contenedor.appendChild(cuadroImagen);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const producto = JSON.parse(localStorage.getItem('productoSeleccionado'));

    if (producto) {
        const contenedorNombreDescripcion = document.querySelector('.parte4parte2_3_1');
        const contenedorImagen = document.querySelector('.parte4parte2_3_2');


        contenedorNombreDescripcion.innerHTML = `
        <h1>${producto.nombre}</h1>
        <h2>${producto.descripcion}</h2>
        <h3>${producto.precio}</h3>
    `;

  

        contenedorImagen.innerHTML =  `<img src="${producto.imagen}" alt="${producto.nombre}"> `;
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const tallas = ['EU 35.5', 'EU 36', 'EU 36.5', 'EU 37', 'EU 37.5', 'EU 38', 'EU 38.5', 'EU 39', 'EU 39.5', 'EU 40']; 
    const contenedorTallas = document.querySelector('.parte4parte2_3_4');

    tallas.forEach(talla => {
        const boton = document.createElement('button');
        boton.textContent = talla;
        contenedorTallas.appendChild(boton);
    });

    const buttons = document.querySelectorAll('.parte4parte2_3_4 button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    const addToCartButton = document.getElementById('add-to-cart');
    addToCartButton.addEventListener('click', () => {
        const producto = JSON.parse(localStorage.getItem('productoSeleccionado'));

        if (producto) {
            const tallaSeleccionada = document.querySelector('.parte4parte2_3_4 button.selected');
            const talla = tallaSeleccionada ? tallaSeleccionada.textContent : null;

            const productoCarrito = {
                imagen: producto.imagen,
                loUltimo: producto.loUltimo,
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                colores: producto.colores,
                precio: producto.precio,
                precio1: producto.precio1,
                talla: talla,
                num: 1
            };

            // Obtener el carrito desde localStorage
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const productoExistente = carrito.find(p => p.nombre === productoCarrito.nombre && p.talla === productoCarrito.talla);

            if (productoExistente) {
                // Si el producto ya existe, solo incrementar la cantidad
                productoExistente.num += 1;
            } else {
                // Si no existe, añadir el nuevo producto al carrito
                carrito.push(productoCarrito);
            }

            // Actualizar el carrito en localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));

            // Renderizar el carrito
            renderCarrito();
        }
    });
});

function renderCarrito() {
    const contenedor = document.getElementById('contenedor-productos');
    const totalElemento = document.querySelector('.pago6_2'); // Elemento para mostrar el total
    const totalElemento2 = document.querySelector('.pago3_2'); 
    // Obtener el carrito desde localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Limpiar el contenedor antes de agregar nuevos productos
    contenedor.innerHTML = '';

    let total = 0; // Variable para almacenar el total

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío</p>";
        totalElemento.textContent = '0 €';
        totalElemento2.textContent = '0 €'; // Mostrar total cuando el carrito está vacío
    } else {
        carrito.forEach((producto, index) => {
            // Crear el contenedor del producto
            const productoDiv = document.createElement('div');
            productoDiv.className = 'contenedor_parte4';

            // Añadir el contenido al contenedor del producto
            productoDiv.innerHTML = `
                <div class="contenedor_parte4_1">
                    <div class="contenedor_parte4_1_1" style="background-image: url('${producto.imagen}');"></div>
                    <div class="contenedor_parte4_1_2">
                        <h1>${producto.nombre}</h1>
                        <h2>${producto.descripcion}</h2>
                        <h2>${producto.colores}</h2>
                        <h2>${producto.talla ? producto.talla : 'No seleccionada'}</h2>
                        <h3>Opciones de regalo</h3>
                    </div>
                    <div class="contenedor_parte4_1_3">
                        <h1>${producto.precio}</h1>
                    </div>
                </div>
                <div class="contenedor_parte4_2">
                    <div class="sumas">
                        <button class="sumas1" data-index="${index}"></button>
                        <div class="sumas2">${producto.num}</div>
                        <button class="sumas3" data-index="${index}"></button>
                    </div>
                    <h1>Recogida gratuita</h1>
                    <h2>Buscar una tienda</h2>
                </div>
            `;

            // Agregar el contenedor del producto al contenedor principal
            contenedor.appendChild(productoDiv);

            // Calcular el total
            total += producto.precio1 * producto.num;
        });

        // Mostrar el total
        totalElemento.textContent = `${total.toFixed(2)} €`; // Asegúrate de mostrar el total con 2 decimales
        totalElemento2.textContent = `${total.toFixed(2)} €`;
        // Agregar eventos de eliminación a los botones
        document.querySelectorAll('.sumas1').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                restarProducto(index);
            });
        });

        // Agregar eventos de incremento a los botones
        document.querySelectorAll('.sumas3').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                incrementarProducto(index);
            });
        });
    }
}

function restarProducto(index) {
    // Obtener el carrito desde localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito[index]) {
        // Restar 1 a la cantidad del producto
        carrito[index].num -= 1;

        // Si la cantidad llega a 0, eliminar el producto del carrito
        if (carrito[index].num <= 0) {
            carrito.splice(index, 1);
        }

        // Actualizar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Volver a renderizar el carrito
        renderCarrito();
    }
}

function incrementarProducto(index) {
    // Obtener el carrito desde localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito[index]) {
        // Incrementar 1 a la cantidad del producto
        carrito[index].num += 1;

        // Actualizar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
     
        
        // Volver a renderizar el carrito
        renderCarrito();
    }
}

// Renderizar el carrito inicialmente
renderCarrito();