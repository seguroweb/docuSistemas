---
sidebar_position: 1
---

# Procesamiento de interfaz Sancor
En el caso de Sancor, la empresa no proporciona una API directa, sino que recibimos archivos de interfaz en formato **XML** y **Excel**. Los archivos **XML** contienen principalmente información sobre los asegurados y la póliza, mientras que los archivos Excel incluyen datos sobre primas, premios, códigos de referencia, entre otros.

## Procesamiento
El procesamiento se puede describir en cuatro pasos principales:

* Obtención de la información de los archivos de interfaz: En esta etapa, se extrae la información de los archivos **XML** y **Excel** proporcionados por Sancor.

* Unión de la información de los archivos **XML** y **Excel**: Se combina la información obtenida de ambos tipos de archivos para tener una visión completa de la situación.

* Adaptación mediante el adaptador: La información recopilada se moldea utilizando un adaptador para que pueda ser ingresada correctamente en la base de datos.

* Ingreso en la base de datos: En este último paso, la información adaptada se inserta en la base de datos para que esté disponible para su consumo, especialmente por el FrontEnd cuando sea necesario.

Este proceso garantiza que toda la información relevante de los archivos de interfaz de Sancor esté disponible y accesible para su uso posterior.


## Ruta de Procesamiento
Para iniciar el procesamiento, actualmente se utiliza Postman accediendo a la ruta local.

* RUTA: http://localhost:3001/operationSancor.

 Esta ruta está configurada en el código para extraer información de los archivos **XML** y **Excel** ubicados en una carpeta específica.