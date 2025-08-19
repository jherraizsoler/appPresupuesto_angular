# 📊 Sistema de Presupuestos - Angular

Aplicación desarrollada en **Angular 18** que permite gestionar y calcular presupuestos de manera sencilla e intuitiva.  
Incluye integración con **Bootstrap 5** y **Bootstrap Icons** para un diseño moderno y responsivo.

---

## 🚀 Características principales
- Creación y gestión de presupuestos.
- Interfaz responsiva gracias a **Bootstrap 5**.
- Navegación dinámica con **Angular Router**.
- Uso de **Reactive Forms** y **Template Driven Forms**.
- Componentes modulares y reutilizables.
- Optimización de rendimiento con **RxJS**.

---

## 🛠️ Tecnologías utilizadas
- [Angular 18](https://angular.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [RxJS](https://rxjs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Configuración y Uso

### 1. Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) y [Angular CLI](https://angular.io/cli).

### 2. Instalación
Clona el repositorio y navega al directorio del proyecto:

```bash
git clone https://github.com/tu-usuario/app-presupuesto.git
cd app-presupuesto
```
Instala las dependencias del proyecto:
```bash
npm install
```

### 3. Servir la aplicación
Ejecuta el siguiente comando para iniciar el servidor de desarrollo.
La aplicación estará disponible en http://localhost:4200/.

``` bash
npm start
```

### 4. Construir para producción

Para generar un build de producción, usa el comando:

```bash
npm run build
```

Los archivos de construcción se guardarán en el directorio dist/.

### 5. Ejecutar pruebas

Para ejecutar las pruebas unitarias:

```bash
npm test
```

## 📂 Estructura básica del proyecto

```plaintext
src/
 ├── app/
 │   ├── cabecero/
 │   │   ├── cabecero.component.css
 │   │   ├── cabecero.component.html
 │   │   └── cabecero.component.ts
 │   │
 │   ├── egreso/
 │   │   ├── egreso.component.css
 │   │   ├── egreso.component.html
 │   │   ├── egreso.component.ts
 │   │   ├── egreso.model.ts
 │   │   └── egreso.service.ts
 │   │
 │   ├── formulario/
 │   │   ├── formulario.component.css
 │   │   ├── formulario.component.html
 │   │   └── formulario.component.ts
 │   │
 │   ├── ingreso/
 │   │   ├── ingreso.component.css
 │   │   ├── ingreso.component.html
 │   │   ├── ingreso.component.ts
 │   │   ├── ingreso.model.ts
 │   │   └── ingreso.service.ts
 │   │
 │   ├── app.component.css
 │   ├── app.component.html
 │   ├── app.component.ts
 │   ├── app.config.ts
 │   └── app.routes.ts
 │
 ├── index.html
 ├── main.ts
 └── styles.css
```

## Estructura básica del proyecto

Desarrollado por @jherraizsoler



## 📜 Licencia

Todos los derechos reservados © @jherraizsoler
