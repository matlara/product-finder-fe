
# Product Finder

Esto proyecto es el frontend de un ecommerce de ejemplo.

Líder quiere realizar una nueva campaña a través del sitio, pero esta ocasión quiere que sea especial y que sea una sorpresa para sus clientes.

La campaña consiste en que cada vez que un cliente busque con un palíndromo, todos los productos encontrados tendrán un 50% de descuento, esta búsqueda aplica para identificadores (Id de Producto), marcas y descripciones de productos. Lamentablemente, el sitio actual no soporta esta funcionalidad y los equipos involucrados están muy ocupados arreglando bugs creando nuevas funcionalidades. Por esta razón, Líder se ha comunicado con usted para que lo ayude a desarrollar una nueva plataforma que cumpla con los siguientes requerimientos:

Se necesita una Aplicación Web que contenga un buscador y una sección de resultados para listar los productos encontrados desde una base de datos en mongo (https://github.com/walmartdigital/products-db). En caso de que la búsqueda sea un palíndromo se deberá retornar los productos con el descuento (50%) ya aplicado al precio.
El equipo de negocio ha definido que cuando sea una búsqueda sobre los identificadores de productos se deberá retornar el resultado exacto, es decir, un producto. Mientras que para la marca y para la descripción de productos, basta con que la búsqueda sea de más de 3 caracteres y que estos estén incluidos en los campos ya mencionados (marca y descripción).

## Tecnologias

angular ~8.2.14
nvm v12.0.0

## Instalación

```bash
npm install
```

## Correr el servicio

Antes de correr este proyecto es necesario tener en consideracion lo siquiente:

* Conseguir el proyecto "product-finder-bff" (https://gitlab.com/MatLara/product-finder-bff) clonarlo, instalarlo con "npm install" e iniciarlo utilizando "npm run start"

* CORS (allow-cors-access-control):
Ademas es necesario agregar la extension de CORS en el navegador (en este caso Chrome) para poder comunicarse con el proyecto "product-finder-bff" que se puede encontrar en; https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=es

* La app estara corriendo en http://localhost:4200

```bash
npm run start
```

## Ejecutar las pruebas

```bash
npm run test
```
