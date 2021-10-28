# Certified Tech Dev - Proyecto Integrador

# DB - Digital Booking

**DB** es una aplicación web desarrollada por el Grupo 1

## Integrantes

- Karin Stricker
- Laura Nieto
- Mariel Romeo
- Martina Terraza
- Nestor Villalobos
- Tatiana Rincón

## Instalación

Puedes instalarlo clonando el repositorio

`$ git clone url`

# Documentación

Esta aplicación es para un Booking de Hoteles.  La misma cuenta con la capa del Frontend, Backend, una Base de Datos, la infraestructura y los tests pertinentes.
Se tomó como base las historias de usuario, y el prototipo diseñado en Figma.

Para definir la puntuación de complejidad de las historias de usuario y avocarnos a cada tarea, se utilizó la herramienta PlanITpoker. Se tomó como base para la puntuación 1 la creación de la estructura de un footer con texto y color de fondo. Se utilizó como puntuación máxima el número 20. Una vez definidas todas las puntuaciones, se asignaron responsables para cada tarea.

## Frontend

Se crea la estructura del Frontend con Create-React-App, y por el momento se utiliza react-router-3 para los enrutamientos.

- **Templates**

**1. Header:** Se desarrolló un header sobre el extremo superior de la pantalla, que ocupa el 100% del ancho, de posición fija. Éste es visible en todas las pantallas de la aplicación. 
  En el lado izquierdo está contenido el logotipo y lema de la empresa que, al hacer click, dirige a la home del sitio. 
  Del lado derecho se encuentran los botones para crear una cuenta e iniciar sesión. En el caso de estar logueado, estos botones se reemplazan por el Avatar con las iniciales, el nombre del usuario, y una cruz para cerrar sesión.
  Para la versión Mobile, los botones de la derecha son reemplazados por el menú hamburguesa. Al hacer click sobre el mismo, se despliega un menú con las opciones correspondientes según si el usuario está logueado o no, y una leyenda con la funcionalidad de cerrar sesión. Dicho menú ocupa un poco menos del ancho de la pantalla y genera una opacidad a lo que queda por detrás.

**2.  Template Login:**  En el template para Login, se incluye un formulario para completar correo electrónico y contraseña, un botón para iniciar sesión y otra opción para registrarse.
  Por el momento, para poder ingresar correctamente, se validan las credenciales con un objeto. Los datos correctos para el ingreso son:
email:"grupo1@digital.com",
password: "1234567"
  Si los datos son correctos, se redirige la página hacia la Home y aparece el saludo al usuario en el header. Si los datos son incorrectos, aparece el error de que las credenciales son inválidas.

**3. Template Crear Cuenta:** Se creó un formulario con los siguientes inputs:
* Nombre: Se valida que no contenga números ni caracteres especiales mediante una RegEx.
* Apellido: Se valida que no contenga números ni caracteres especiales mediante una RegEx.
* Email: Se valida que tenga el formato correcto y que el campo no se encuentre vacío.
* Contraseña: Se valida que tenga más de 6 caracteres.
* Repetir contraseña: Se valida que sea igual al campo anterior y que el campo no quede vacío.
Si algo de esto no se cumple, aparece la leyenda con el error que se genera.

Además se incluye el botón para efectuar el registro, y otra opción para realizar el login.

**4. Buscador:** Se incluye un bloque buscador que se visualiza debajo del header en la sección Home.  
  En este bloque hay un desplegable para seleccionar la ciudad de destino (visualizándose "ciudad, país"), y otro input con un calendario para seleccionar el día de Check-in y el día del Check-Out.  Para el calendario se utilizó el componente "Date Range Picker" de la librería Material UI (https://mui.com/components/date-range-picker/) ya que la misma ofrece varias opciones convenientes para nuestro propósito, y posee un manejo versátil para la configuración del calendario y visualización.  Es posible así visualizar dos meses consecutivos, seleccionar con dos clicks las fechas deseadas, y hacer click en el botón "Aplicar".  Para la versión mobile, se visualiza únicamente el mes actual por una cuestión de espacio, pero sigue conservando la misma funcionalidad.

**5. Bloque Categorías:** Se creó debajo del bloque buscador, para la página Home, un bloque con 4 cards que permiten seleccionar el tipo de alojamiento deseado, con una imagen de portada representativa, y donde figura la cantidad de alojamientos disponibles para esa categoría. 

**6. Bloque Listado de Recomendaciones:** Se creó un bloque debajo del bloque de categorías, en la página Home, con 8 cards que contienen distintas recomendaciones (dos por categoría). En cada card se representa la imagen del lugar, la categoría, el nombre del lugar, la ciudad y una descripción del mismo.  Por el momento, esta información se obtiene de un archivo json que contiene todos estos datos.
  Además se le agregó a la card un ícono para guardarlo en favoritos, una puntuación con estrellas, una puntuación numérica, una cualitativa, íconos que representan los servicios que dispone el lugar de alojamiento, y un texto que luego linkeará con un mapa para poder visualizar la localización.
  En la zona inferior de la card, se agregó un botón que invita a la acción para conocer más detalles sobre ese alojamiento.

**7. Footer:** Se desarrolló un footer al 100% del ancho de la pantalla visible en todas las páginas de la aplicación. 
  Del lado izquierdo se incluye el copyright y el año.
  Del lado derecho se incluyen los íconos de redes sociales; éstos se omiten en la versión mobile.


## Backend

  Se crea la estructura del Backend en Java, utilizando el framework Spring.  El proyecto se estructuró con los paquetes model, repository, service y controller.  
  La estructura del Backend se conecta a la base de Datos MySQL para realizar las operaciones CRUD.  Para este fin se utiliza Spring Data JPA.
  Se creó una tabla "categorías" en la base de datos, y se mapean los atributos de la tabla con una clase del modelo (Id, Título, Descripción y Url de la imagen).

  El Controller contiene los métodos necesarios para:

* Agregar una categoría nueva.
* Listar todas las categorías.
* Editar una categoría en particular por su id
* Eliminar una categoría por su id

  La documentación de la API se encuentra en la siguiente página (para poder visualizarla, es necesario correr la aplicación en el puerto 8080):

http://localhost:8080/swagger-ui.html


## Infraestructura

Se crea un diagrama de red especificando los recursos que usaremos para construir nuestra infraestructura, la misma se montará en la nube de AWS, por lo que también haremos uso de varios de los servicios que brinda la plataforma. Para comenzar se creará una VPC que dispondrá de 2 ZA lo cual nos brinda redundancia en caso de imprevistos, dentro de cada una crearemos dos subredes, una pública que contará con una instancia EC2 con el frontend que será visible a los usuarios y será quien reciba las peticiones HTTP, por su parte en la subred privada levantaremos otra instancia de EC2 con la aplicación del backend y la conexión a la base de datos. Para acceder a las instancias de EC2 crearemos grupos de seguridad para cada una y además contaremos con un balanceador de carga de aplicaciones (lo cual nos permite que las peticiones HTTP que reciba nuestra aplicación se distribuyan equitativamente para no saturar nuestra infraestructura), así mismo incluimos un ASG o grupo de autoescalado que en caso de ser necesario, permita a las instancias de EC2 escalar horizontal o verticalmente de forma autómatica de acuerdo a los triggers que le configuraremos.
Por último, para monitorear, establecer alarmas y recibir notificaciones en caso de inconsistencias haremos uso de los servicios de Cloudwatch, Lambda functions y SNS. 


## Test Cases

Las pruebas se encuentran dentro de la carpeta Testing.


