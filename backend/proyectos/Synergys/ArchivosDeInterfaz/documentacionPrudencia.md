---
sidebar_position: 1
---
# Procesamiento de Interfaz Prudencia

En la actualidad, el procesamiento de los archivos de interfaz de Prudencia sigue este procedimiento detallado. Sin embargo, es importante destacar que en un futuro próximo, existe la posibilidad de que este proceso sea sustituido por la información proporcionada a través de la API de **Prudencia**. 

## Archivo de interfaz Procesamiento

Este **endpoint** automatiza el procesamiento del archivo, permitiendo que una vez cargado, se realice el ingreso de todas las pólizas en nuestra base de datos de manera eficiente y sin complicaciones adicionales.

El proceso es sencillo: primero, cargas el archivo y luego accionas el **endpoint** para iniciar el procesamiento.

 Utilizamos un método **POST** en la ruta **/operationPrudencia**.

