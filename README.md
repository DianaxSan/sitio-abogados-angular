# Desarrollo de Sitio Web para Despacho de Abogados

Este proyecto fue realizado de forma sencilla, con fines educativos para iniciarse en el uso de Angular. No se utilizan servicios externos ni bases de datos. Toda la información, incluyendo imágenes y descripciones de los servicios legales, está gestionada de forma estática.

Las imágenes también están alojadas en la carpeta del proyecto y se muestran directamente desde allí. Este enfoque busca enfocarse en el aprendizaje de la estructura de componentes, plantillas, uso de directivas y estilos en Angular.

El objetivo principal es presentar un sitio web básico para un despacho de abogados, destacando sus servicios de manera clara y accesible. Este sitio incluye un menú de navegación con las siguientes secciones: Inicio, Nosotros, Asesoría Legal, Litigios y Defensa, Contratos y Negociaciones, y Contacto. 


## 🎯 Análisis de las Necesidades

El sitio web tiene como propósito presentar de manera profesional los servicios legales ofrecidos por el despacho, específicamente:

- Asesoría Legal
- Litigios y Defensa
- Contratos y Negociaciones

Los usuarios pueden explorar los detalles de cada servicio mediante tarjetas interactivas, facilitando la navegación y comprensión.

## 🧩 Estructura del Sitio Web

El sitio está compuesto por las siguientes secciones:

### I. Inicio
Página principal con una imagen representativa del despacho y una breve presentación institucional.

### II. Servicios
Contiene tres subsecciones:
- **Asesoría Legal**: Tarjetas interactivas que describen los servicios de asesoría legal.
- **Litigios y Defensa**: Detalles sobre los servicios de representación legal.
- **Contratos y Negociaciones**: Información sobre redacción y revisión de contratos.

### III. Nosotros
Presenta la misión, visión y valores del despacho, así como al equipo de profesionales.

### IV. Contacto
Incluye un formulario de contacto funcional y un mapa con la ubicación del despacho.

## 🛠 Herramientas Utilizadas

### Diseño
- **Canva**: Para la creación del logo e imágenes decorativas.

### Programación
- **Angular**: Framework principal del frontend.
- **HTML5 & CSS3**: Estructura y estilos personalizados.
- **Bootstrap**: Diseño responsivo.
- **Font Awesome**: Íconos y elementos gráficos.
- **Visual Studio Code**: Editor de código fuente.


## ▶️ Cómo ejecutar este proyecto

### Clona el repositorio:
```bash
git clone [Ruta-Https](Ej. https://github.com/TU_USUARIO/TU_REPO.git)

cd proyectoef
```

### Instala las dependencias del proyecto:
Al clonar este proyecto, la carpeta node_modules no viene incluida (está excluida mediante .gitignore porque contiene cientos de archivos). Para instalar las dependencias necesarias, ejecuta:

```bash
npm install
```

Esto leerá el archivo package.json y descargará automáticamente todas las librerías necesarias.

### Ejecuta el servidor de desarrollo:
```bash
ng serve
```

Luego abre tu navegador en: http://localhost:4200
