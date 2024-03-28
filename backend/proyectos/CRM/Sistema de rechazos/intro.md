---
sidebar_position: 1
---

# Documentacion Sistema de Rechazos

El Sistema de Rechazos es una herramienta diseñada para gestionar el ingreso de pólizas y notificar a los usuarios a través de correo electrónico en caso de que su pago no pueda ser procesado correctamente. Este documento proporciona una descripción detallada de cada paso del proceso.

## Funcionamiento General

El sistema permite el ingreso de pólizas y los importes asociados (opcional) por parte de los usuarios y se envía una serie de notificaciones por correo electrónico al usuario correspondiente.

### Estados de Rechazo  

- **Resuelto Positivo:** El pago ha sido corregido y procesado correctamente.
- **Resuelto Negativo:** No se responde a las notificaciones y el rechazo es derivado a calidad.
- **Pendiente:** El rechazo está disponible para una notificación manual o automática al correo asociado.
- **Notificado:** El usuario ha sido notificado sobre el rechazo de su pago.

## Proceso de Rechazo

### 1. Ingreso de Póliza

- El usuario ingresa las pólizas, incluyendo opcionalmente el importe adeudado.
- Se valida la información proporcionada por el usuario.


### 2. Notificación por Correo Electrónico

- Se envía un correo electrónico al usuario notificando el rechazo del pago.
- El correo contiene información sobre la compañia, la poliza, los datos del asegurado y opcionalmente el importe.

### 3. Resolución del Rechazo

- El usuario puede actualizar el estado del rechazo según la respuesta o no del asegurado a:
"resuelto positivo" o "resuelto negativo".

## Interacciones Adicionales

Además de los pasos descritos anteriormente, el sistema permite a los usuarios realizar consultas sobre el estado de los rechazos, las veces que se notificó al asegurado y detalles de la póliza.

# Envío Manual de Correos Electrónicos

EL sistema permite notificar manualmente a los asegurados mediante las opciones "administrar" y luego "notificar pendientes". Se detalla más adelante.

# Envío Automático de Correos Electrónicos

El Sistema de Rechazos de Pólizas cuenta con una función de envío automático de correos electrónicos diseñada para recordar a los asegurados sobre pagos pendientes y fomentar la resolución oportuna de los mismos. Este proceso automatizado envía correos electrónicos a intervalos específicos después de que un rechazo haya sido ingresado al sistema y permanezca en estado pendiente.

## Intervalos de Envío

El sistema envía correos electrónicos automáticamente en tres intervalos diferentes:

### 1. A Medianoche (0 días)

El sistema envía un correo electrónico a medianoche si un rechazo permanece en estado pendiente al final del día de su ingreso. El estado del rechazo para a Notificado.

### 2. A los 7 Días del Ingreso

Si un rechazo continúa en estado Notificado después de una semana de su ingreso, el sistema envía otro correo electrónico recordatorio al usuario. .

### 3. A los 14 Días del Ingreso

Si un rechazo aún no se ha resuelto después de dos semanas, el sistema envía un tercer y último correo electrónico recordatorio al asegurado.

## Proceso de Envío Automático

1. **Verificación de Rechazos Pendientes:** El sistema revisa regularmente la lista de rechazos para identificar aquellos que permanecen en estado pendiente o nitificado.

2. **Determinación de Intervalos:** Para cada rechazo notificado, el sistema calcula los intervalos de tiempo transcurridos desde su ingreso y las veces notificado.

3. **Generación de Correos Electrónicos:** Basándose en los intervalos calculados, el sistema genera automáticamente los correos electrónicos de recordatorio correspondientes.

4. **Envío de Correos Electrónicos:** Los correos electrónicos generados son enviados automáticamente a los correos electrónicos asociados con los rechazos.

# Carga de Nuevos Rechazos

El Sistema de Rechazos ofrece dos métodos para cargar nuevos rechazos: mediante la carga de un archivo CSV para cargas masivas y mediante un formulario para cargar hasta 5 rechazos en una misma solicitud. Estos métodos permiten una fácil incorporación de nuevos rechazos al sistema, ya sea en grandes volúmenes o de manera individual.

## Carga mediante Archivo CSV

El sistema admite la carga masiva de nuevos rechazos a través de la carga de un archivo CSV. Este método es ideal para usuarios que necesitan ingresar múltiples rechazos de manera eficiente.

### Proceso de Carga

1. **Preparación del Archivo CSV:** El usuario sube un archivo CSV que contenga los datos de los rechazos a cargar. Los datos son el número de póliza y el importe adeudado, este último opcional.

2. **Carga del Archivo:** El usuario selecciona la opción de carga mediante archivo CSV e indica la ubicación del archivo en su sistema.

3. **Validación de Datos:** El sistema verifica la integridad de los datos proporcionados en el archivo CSV y realiza las validaciones necesarias.

4. **Incorporación de Rechazos:** Una vez validados, los nuevos rechazos se incorporan al sistema y se registran en la base de datos.

## Carga mediante Formulario

Además de la carga masiva, el sistema permite la carga individual de hasta 5 rechazos en una misma solicitud a través de un formulario en la interfaz de usuario.

### Proceso de Carga

1. **Acceso al Formulario:** El usuario accede al formulario de carga de rechazos desde la interfaz de usuario.

2. **Ingreso de Datos:** Para cada rechazo, el usuario ingresa el número de póliza y el importe adeudado. El importe puede ser opcional y si es 0, no se notifica en el correo electrónico.

3. **Validación de Datos:** El sistema valida los datos ingresados en el formulario y muestra cualquier error o advertencia relevante al usuario.

4. **Envío de Solicitud:** Una vez completado, el usuario envía la solicitud de carga de rechazos.

5. **Incorporación de Rechazos:** Los rechazos ingresados se incorporan al sistema y se registran en la base de datos.

## Ventajas de la Funcionalidad

- **Flexibilidad:** Los usuarios pueden elegir entre cargar rechazos de manera masiva a través de un archivo CSV o de manera individual mediante un formulario, según sus necesidades.
  
- **Eficiencia:** La carga masiva a través de archivo CSV permite ingresar grandes volúmenes de rechazos de manera rápida y eficiente.
  
- **Simplicidad:** El formulario de carga individual simplifica el proceso para usuarios que necesitan ingresar un pequeño número de rechazos de manera puntual.


# Actualización de Estado de Pólizas

Además de permitir el ingreso y notificación de pólizas rechazadas, el Sistema de Rechazos facilita la actualización de estados tanto de forma masiva como individual. Esta funcionalidad proporciona flexibilidad para gestionar múltiples pólizas simultáneamente o modificar estados de forma específica según las necesidades del usuario.

## Actualización Masiva mediante Archivo CSV

El sistema ofrece la posibilidad de actualizar el estado de múltiples pólizas simultáneamente mediante la carga de un archivo CSV. Este archivo debe contener una lista de pólizas también se debe seleccionar la compañía y el nuevo estado al que se desea actualizar.

### Proceso de Actualización

1. **Preparación del Archivo CSV:** El usuario carga un archivo CSV con las pólizas, debe elegir la compañia a la que corresponden las mismas y el nuevo estado a actualizar.

2. **Carga del Archivo:** El usuario accede a la función de actualización masiva y carga el archivo CSV en el sistema.

3. **Validación de Datos:** El sistema verifica la integridad de los datos proporcionados en el archivo CSV.

4. **Actualización de Estados:** Se actualizan los estados de las pólizas según la información enviada.

5. **Registro de Cambios:** Se genera un registro de las actualizaciones realizadas, incluyendo detalles sobre las pólizas modificadas y los nuevos estados asignados (a realizar).

## Actualización Individual mediante Formulario

Además de la actualización masiva, el sistema permite modificar el estado de pólizas de forma individual a través de un formulario en la interfaz de usuario.

### Proceso de Actualización

1. **Selección de Póliza:** El usuario selecciona el rechazo a actualizar, mediante la opción "detalles" en el listado de la vista principal.

2. **Modificación del Estado:** Se proporciona un formulario con opciones para seleccionar el nuevo estado de la póliza.

3. **Confirmación de Cambios:** El usuario confirma los cambios y envía el formulario.

4. **Actualización:** El estado de la póliza se actualiza instantáneamente en la base de datos del sistema.

5. **Confirmación:** Se muestra una confirmación de la acción realizada


# Envío a Calidad y Operaciones

Cuando un rechazo se actualiza al estado "resuelto negativo", el Sistema inicia un proceso denominado "envío a calidad". Este proceso implica la transferencia de datos relevantes a otra base de datos llamada "Operaciones", donde se lleva a cabo la gestión adicional de los rechazos. Los datos enviados incluyen información crucial sobre el rechazo y el cliente asociado.

## Proceso de Envío a Calidad

1. **Actualización del Estado:** Cuando un rechazo se marca como "resuelto negativo", se activa el proceso de envío a calidad.

2. **Selección de Datos Relevantes:** El sistema identifica y selecciona los datos necesarios para la gestión del rechazo en Operaciones. Estos datos incluyen:

    - Correo electrónico (`mail`)
    - Nombre (`nombre`)
    - Producto (`producto`)
    - Teléfono (`telefono`)
    - DNI (`dni`)
    - Número de póliza (`poliza`)
    - ID de la compañía (`id_compania`)
    - ID del vendedor (`id_vendedor = 350`)
    - Estado (`estado = 35`)
    - Canal (`canal = 145`)

3. **Transferencia de Datos:** Los datos seleccionados se transfieren automáticamente a la otra base de datos.




# Filtrado de Rechazos

El Sistema de Rechazos de Pólizas ofrece capacidades de filtrado que permiten a los usuarios buscar y visualizar rechazos específicos según diferentes criterios. Estos criterios incluyen la fecha de registro, el número de póliza, la compañía asociada y el estado del rechazo.

## Criterios de Filtrado

### 1. Por Fecha

Los usuarios pueden filtrar los rechazos por fecha para visualizar aquellos que ocurrieron dentro de un rango de tiempo específico. Este filtro ayuda a identificar tendencias y analizar el comportamiento de los rechazos en diferentes períodos.

### 2. Por Póliza

El filtro por número de póliza permite a los usuarios buscar rechazos asociados a una póliza particular. Esto es útil para revisar el historial de rechazos de una póliza específica y realizar un seguimiento de su estado a lo largo del tiempo.

### 3. Por Compañía

Los usuarios pueden filtrar los rechazos por compañía aseguradora para visualizar aquellos asociados a un proveedor de seguros específico.

### 4. Por Estado

El filtro por estado permite a los usuarios buscar rechazos según su estado actual, como "pendiente", "resuelto positivo" o "resuelto negativo". Esto ayuda a priorizar la atención en los rechazos que aún no han sido resueltos o requieren acciones adicionales.

## Proceso de Filtrado

1. **Selección de Criterios:** El usuario elige uno o varios criterios de filtrado entre las opciones disponibles.

2. **Aplicación del Filtro:** Una vez seleccionados los criterios y parámetros, el usuario aplica el filtro para visualizar los rechazos que cumplen con los criterios especificados.

3. **Visualización de Resultados:** El sistema muestra un listado de rechazos que coinciden con los criterios de filtrado seleccionados, lo que permite al usuario revisar y analizar la información relevante.

# Eliminación y Notificación Manual de Rechazos

El Sistema de Rechazos de Pólizas ofrece la funcionalidad de eliminar o notificar manualmente los rechazos con estado "pendiente" a través del botón "Administrar". Esta característica brinda a los usuarios la capacidad de gestionar los rechazos de manera activa según sea necesario.

## Eliminación de Rechazos Pendientes

Cuando un rechazo permanece en estado "pendiente" y no se espera una resolución futura, los usuarios pueden optar por eliminarlo del sistema. Esto ayuda a mantener la base de datos limpia y organizada, eliminando rechazos que ya no requieren atención.

### Proceso de Eliminación

1. **Acceder al Menú "Administrar":** El usuario hace clic en el botón "Administrar" asociado al rechazo seleccionado.

2. **Selección de Rechazos:** El sistema identifica todos los rechazos pendientes.


3. **Seleccionar Opción de Eliminación:** En el menú de administración, el usuario elige la opción de "Eliminar pendientes".

4. **Confirmar Eliminación:** Se solicita al usuario que confirme la eliminación de los rechazos.

5. **Eliminación Exitosa:** Una vez confirmada, el sistema elimina todos los rechazos pendientes de la base de datos.

## Notificación Manual de Rechazos Pendientes

En algunos casos, los usuarios pueden optar por notificar manualmente a los clientes sobre rechazos pendientes, sin esperar primera notificación automática del sistema.

### Proceso de Notificación Manual

1. **Acceder al Menú "Administrar":** El usuario hace clic en el botón "Administrar" asociado al rechazo seleccionado.

2. **Seleccionar Opción de Notificación:** En el menú de administración, el usuario elige la opción de "Notificar Pendientes".

5. **Confirmar Notificación:** Se confirma la acción.

6. **Notificación Exitosa:** El sistema envía la notificación por correo electrónico a todos los clientes asociados a los rechazos pendientes.

## Ventajas de la Funcionalidad

- **Flexibilidad:** Los usuarios tienen control total sobre la gestión de los rechazos pendientes, pudiendo eliminarlos o notificar manualmente según sea necesario.
  


# Visualización de Resultados Filtrados

El Sistema de Rechazos de Pólizas proporciona una interfaz de usuario intuitiva para visualizar los resultados filtrados en una tabla paginada. Esta tabla presenta información clave sobre los rechazos que cumplen con los criterios de filtrado establecidos por el usuario.

## Columnas de la Tabla

La tabla de resultados filtrados consta de las siguientes columnas:

1. **ID:** Identificador único asignado a cada rechazo en el sistema.
2. **Nombre:** Nombre del cliente asociado al rechazo.
3. **Estado:** Estado actual del rechazo, como "pendiente", "resuelto positivo" o "resuelto negativo".
4. **Veces Notificado:** Número de veces que se ha notificado al cliente sobre el rechazo.
5. **Póliza:** Número de póliza asociado al rechazo.
6. **Compañía:** Nombre de la compañía aseguradora relacionada con el rechazo.
7. **Acciones:** Columna que contiene la opción "detalles" para realizar acciones específicas sobre cada rechazo, como ver detalles, actualizar estados, etc.

## Paginación de Resultados

Para mejorar la navegación y la experiencia del usuario, los resultados filtrados se presentan en una tabla paginada. Esto significa que solo se muestran un máximo de 15 rechazos por página, lo que facilita la visualización y evita la sobrecarga de información en la interfaz de usuario.

### Navegación entre Páginas

- **Páginas Numeradas:** Los usuarios pueden navegar entre las diferentes páginas de resultados utilizando los números de página en la parte inferior de la tabla.
- **Botones de Anterior y Siguiente:** Además, se proporcionan botones para retroceder a la página anterior o avanzar a la siguiente página, según sea necesario.

## Beneficios de la Tabla Paginada

- **Organización:** La paginación de resultados ayuda a organizar la información de manera clara y concisa, facilitando la búsqueda y la navegación.
- **Optimización del Rendimiento:** Al limitar el número de resultados por página, se mejora el rendimiento del sistema al cargar y procesar grandes conjuntos de datos.
- **Experiencia del Usuario:** La visualización paginada proporciona una experiencia de usuario más fluida y receptiva al interactuar con los resultados filtrados.


# Visualización de Detalles y Actualización Individual

El Sistema de Rechazos de Pólizas ofrece la funcionalidad de visualización detallada y actualización individual de rechazos a través de un modal accesible desde la tabla de resultados. Cuando los usuarios hacen clic en el enlace "Detalles" en la columna de acciones de la tabla, se abre un modal que permite explorar los detalles del rechazo y realizar actualizaciones según sea necesario.

## Acceso a los Detalles

1. **Tabla de Resultados:** Los rechazos se muestran en una tabla de resultados que incluye varias columnas, como número de póliza, estado, fecha de ingreso, etc.

2. **Enlace "Detalles":** En la columna de acciones de la tabla, cada fila contiene un enlace denominado "Detalles". Al hacer clic en este enlace, se abre un modal que muestra información detallada sobre el rechazo asociado a esa fila.

## Contenido del Modal de Detalles (a actualizar)

El modal de detalles proporciona una vista ampliada de la información relacionada con el rechazo seleccionado. Este incluye, pero no se limita a:

- **Número de Póliza:** El número único que identifica la póliza asociada al rechazo.
- **Estado:** El estado actual del rechazo, como "pendiente", "resuelto positivo" o "resuelto negativo".
- **Fecha de Ingreso:** La fecha en la que se ingresó el rechazo en el sistema.
- **Motivo del Rechazo:** Una descripción detallada del motivo por el cual se rechazó la transacción asociada a la póliza.
- **Datos del Cliente:** Información del cliente afectado, como nombre, correo electrónico, teléfono, etc.
- **Datos de la Póliza:** Información adicional sobre la póliza, como compañía aseguradora, tipo de producto, etc.

## Funcionalidades del Modal

El modal de detalles no solo permite a los usuarios ver la información del rechazo, sino que también ofrece funcionalidades adicionales:

- **Actualización Individual:** Los usuarios pueden realizar actualizaciones individuales en el estado del rechazo directamente desde el modal. Esto incluye cambiar el estado de "pendiente" a "resuelto positivo" o "resuelto negativo", según corresponda.
- **Borrado (a revisar):** Los usuarios pueden eliminar el rechazo.
- **Notificar (a revisar):** Los usuarios pueden notificar el rechazo si se encuentra en estado pendiente.

## Ventajas de la Funcionalidad

- **Acceso Rápido:** La capacidad de ver detalles y realizar actualizaciones directamente desde la tabla de resultados agiliza el proceso de gestión de rechazos.
- **Mayor Eficiencia:** Los usuarios pueden tomar decisiones informadas y tomar medidas rápidas en función de la información proporcionada en el modal de detalles.
- **Mejora de la Experiencia del Usuario:** La experiencia del usuario se mejora al proporcionar una interfaz intuitiva y eficiente para la gestión de rechazos individuales.

# Descarga de Resultados Filtrados en Formato CSV

El Sistema de Rechazos de Pólizas ofrece la capacidad de descargar los resultados filtrados en un archivo CSV. Esta funcionalidad permite a los usuarios exportar los datos de los rechazos que cumplen con los criterios de búsqueda establecidos, lo que facilita el análisis adicional o la integración con otros sistemas.

## Campos del Archivo CSV

El archivo CSV generado contiene la siguiente información para cada rechazo:

1. **Nombre:** Nombre del cliente asociado al rechazo.
2. **Póliza:** Número de póliza asociado al rechazo.
3. **Estado:** Estado actual del rechazo, como "pendiente", "resuelto positivo" o "resuelto negativo".
4. **Sección:** Sección o categoría relevante para el rechazo, si está disponible.
5. **Importe:** Importe adeudado asociado al rechazo.
6. **Correo Electrónico (Mail):** Dirección de correo electrónico del cliente afectado.
7. **Compañía:** Nombre de la compañía aseguradora relacionada con el rechazo.
8. **Fecha de Ingreso:** Fecha en la que se ingresó el rechazo en el sistema.
9. **Teléfono:** Número de teléfono del cliente afectado.

## Proceso de Descarga (a corregir cantidad de rechazos posibles de descargar)

1. **Filtrar Resultados:** El usuario filtra los rechazos según los criterios deseados utilizando las opciones de filtrado proporcionadas por el sistema.

2. **Seleccionar Opción de Descarga:** Una vez que se muestran los resultados filtrados en la tabla, el usuario busca y selecciona la opción para descargar los resultados en formato CSV (al final de la tabla).

3. **Generación del Archivo CSV:** El sistema genera automáticamente un archivo CSV que contiene los datos de los rechazos filtrados según los campos especificados.

4. **Descarga del Archivo:** El usuario descarga el archivo CSV generado y puede guardarlo localmente en su PC.




