# Amigo Secreto

El proyecto **Amigo Secreto** es una aplicación interactiva que permite agregar nombres de amigos, generar una lista de participantes y realizar un sorteo aleatorio para asignar un amigo secreto. Este proyecto está diseñado para fortalecer habilidades en lógica de programación y manipulación del DOM utilizando JavaScript.

---

## Funcionalidades

### Agregar nombres a la lista

Los usuarios pueden ingresar nombres en un campo de texto y agregarlos a la lista de participantes.

**Validaciones al agregar un nombre:**

-   El campo no puede estar vacío.
-   El nombre debe tener al menos 3 caracteres.
-   No se permiten números en el nombre.
-   Los nombres no pueden repetirse.

### Mostrar lista de participantes

-   Los nombres ingresados se muestran dinámicamente en una lista ordenada.

### Sortear un nombre

-   Una vez que hay al menos 2 participantes en la lista, el usuario puede realizar el sorteo.
-   Se selecciona un participante aleatoriamente y se muestra el resultado en pantalla.
-   Si hay menos de 2 participantes, se muestra un mensaje de error indicando que no es posible realizar el sorteo.

### Manejo de errores

-   Los mensajes de error son claros y se muestran cerca del área correspondiente (campo de texto o botones).
-   Los errores se ocultan automáticamente al realizar acciones válidas.

---

## Tecnologías utilizadas

-   **HTML**: Estructura del proyecto.
-   **CSS**: Diseño básico de la interfaz.
-   **JavaScript**: Lógica del proyecto y manipulación del DOM.

---

## Cómo utilizar el proyecto

Clona este repositorio en tu máquina local:

git clone https://github.com/tu-usuario/amigo-secreto.git

Abre el archivo index.html en tu navegador web favorito.

Interactúa con la aplicación:

Ingresa nombres en el campo de texto y presiona el botón "Añadir".

Una vez que hayas agregado al menos 2 nombres, presiona el botón "Sortear" para obtener el amigo secreto.

### Pantalla principal

🌟 **Vista inicial de la aplicación**  
![Pantalla principal](<assets/capturasDemo/Amigo Secreto - Google Chrome 26_01_2025 14_46_08.png>)

---

### Agregar nombres

📝 **Interfaz para añadir participantes**  
![Agregar nombres](<assets/capturasDemo/Amigo Secreto - Google Chrome 26_01_2025 14_46_24.png>)

---

### Realizar el sorteo

🎉 **Proceso de sorteo aleatorio**  
![Realizar el sorteo](<assets/capturasDemo/Amigo Secreto - Google Chrome 26_01_2025 14_46_47.png>)

## Demo en video

[Descargar el video](https://github.com/lau-ruspil/challenge-amigo-secreto/raw/main/assets/capturasDemo/Amigo%20Secreto%20-%20Google%20Chrome%202025-01-26%2014-48-17.mp4)
