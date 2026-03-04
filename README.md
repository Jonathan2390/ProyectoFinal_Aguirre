## E-commerce React + Firebase

E-commerce de una tienda de calzado deportivo, se encuentran clasificados en tres categorías, Baloncesto, Fútbol, LifeStyle. Dentro de cada categoría se puede visualizar unas tarjetas con la imagen de cada artículo, precio y la opción de "Ver detalle". Estos datos se obtienen de Firebase.

Al dar clic sobre "Ver detalle" se observa la imagen de producto, el precio y un contador para elegir el número de piezas que se pueden comprar, este número está limitado a la cantidad en stock, es decir, si únicamente queda un par en stock solo se muestra el 1 para agregar al carrito; si el stock es 0, se muestra "Producto agotado" (Baloncesto/Jordan 7 - para ver el ejemplo).

Al agregar los artículos al carrito, se va incrementado el número por cada artículo.

Al dar clic sobre el carrito, se observan los productos que han sido agregados, mostrando lo siguiente:

- Nombre del artículo
- Cantidad
- Precio por unidad
- Subtotal
- Opción de eliminar del carrito

Posteriormente, se observa:

- Total de la compra
- Vaciar carrito, que elimina todos los artículos
- Finalizar compra

Al dar clic sobre finalizar compra, se abren los campos de nombre, teléfono y correo electrónico y un botón para "Confirmar compra", mismo que al precionarlo, genera en pantalla "Gracias por tu compra" "Tu código de orden es:" (numero de orden), los datos de la compra se almacenan en firebase en la colección orders, incluyendo los datos del cliente, la fecha y hora de la compra, así como los datos de los artículos comprados.

## Repositorio Github
https://github.com/Jonathan2390/ProyectoFinal_Aguirre.git

## Sitio en Vercel

https://proyectofinalaguirre.vercel.app/category/lifestyle

## Tecnologías
- React
- React Router
- Context API
- Firebase Firestore
- Vite

## Funcionalidades
- Catálogo dinámico desde Firestore
- Detalle de productos
- Carrito con Context
- Checkout con generación de orden
- SPA sin recarga de página

## Instalación
npm install
npm run dev
