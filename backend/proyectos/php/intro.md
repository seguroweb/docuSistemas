---
sidebar_position: 1
---

# Documentación Onboarding
Introducción para comenzar a trabajar con el servicio de bicicleterías SeguroBici, pasos para manipular archivos y base de datos de manera práctica con Siteground y FileZilla.
## _Acceso a la base de datos_
## ![Build Status](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAEWUlEQVRIidWWb0wbZRzHf9e7FvoHCm1hWxl0mwgHZiCJgCm4BBAyYZnTqC9MjL6QlE0lbsxki4m8WDYzIxEmJKgBJdNgwjbebCwZsCzZCtvAwYB2FBiDUiiUUijQll7v7ucLzEJYaS06E3+vLvd8n8/nfs/d5XkIRITnWYLnSv8vBFRI6eW1+bnVxy7GAQBSkSJWtk8eHvvvCAZn2+9N/7zCWEgiDIHn0ccjg4CRIk2m+sMMdclWE4mgL3nRY71kOO5h7UKBlEOG4VfiZNkJ8kyFOH56echgvyISyHSZl7fZgXlp4JKxTEzFUAKxl3NmqXWvxL0poiTroyRBDdiad8kPBCAEEsy7JlqMOqlwp49zxUrT3ko9IyLFGwNO7xzLu1JjCrcpaDF8JqF2MNxKqurt1xOPPRu4P92olr2aqMzajkA/+SuHPgLYxOiD6/Rhk2nBbqdpWqlUAkCrsfKF6PyiF8sD0CHAf9BrbaCIsDAyqjj5pMPhoGk6haZzc3NVKlXZ0aM88iIqXEiGB6YDAKC/GrP31HQXVHfnTyz2Pf3Mkmlaq9WuX+/fn46I10zfXOw/5pfwtPx3YFkeEBBCERmhiXq5trYOAOrr64cfPdLr9ROTkxkZGYODDysqThYnfeHxLbQMnQq5g1ZDZU13YftoHSKKpdKs7OxNgcKiIgAwT0zNrAyfv53eN30ttA4Yzo3AqaR7OBY9LleZTrcpcL2tDQCqqqt2yZLlYYm3Js8j8n5R/gUiSgqApIByLjkBQC6XbwqQJNnQ0FBTXQ0AiYoCBDTM3QxBoBRrANC5ZlUoowDgjwcPns1oc3IAwDxhiZbECQjh+OLdEAQJ8gxEHFnoBAKKS0rOnT1rsVg2ZaxWKwC43G4eWR59825TCAJNdLqQlC17zdZVU+2FOgCIj49vamoyT02trq46HI6Ojo78vDwA2KvZO7nUq91d7mHtflH+vyJEHJrt/K7rwA897yLizU7/61taqkNkq/TaJ46+n3rf98vZUoCILYOnqrvzfntYjoi2ufmPS0s30k+cqEDEi/1lw7Y7baaqNtO3IQsQ8feBiiq99see92yu8fU7448nRkxjPIuIeNnw5RXDVwy79vXtlDH7fb+E4BtO/0zbvelGN2uLlaSnxhxUyeJ55Kedxi5LDa04cog+3Tzw+YLH9Gn2db/TgwsAoH2sdtDWTArCON7Lo49Dd6wks2Df8YSotBujF/ptvxxJrk1SabcvcDPORc/MKrPAISumInZEJEqEcgBoNVaOL91IVhw+RJ/eau6WgkXPzFXTmRhJUtrON9SR9MYhhvMYbbfumL/38Svxka+989K5AA+35Yaz5Jm1uu46vU9Mjqs8MhGiBKkwBoF3es1rrIMAkkNPtvqT3D0fBO4+0BKN2Lu6pxoda8Mk8ddWjMADII9MsuJwjuajoIeiIIL18viWrSujy2tzLO8VUVKFeHecPIUAIij67wr+Yf3/D79/AqttCLcZije5AAAAAElFTkSuQmCC) SiteGround
- **Paso 1:** Ingresar a la cuenta para desarrolladores de Siteground en [sitio web de Siteground](https://tools.siteground.com). 
Usuario:
```sh
desarrollo@seguroweb.com.ar
```
Contraseña:
```sh
rg>1@+__8g2v
```
- **Paso 2:** Dentro del panel de control de Siteground, buscar en Herramientas "**Gestionar MySQL**" y seleccionar la opción "**phpMyAdmin**" para acceder a la BD.
- **Paso 3:** En phpMyAdmin seleccionar la base de datos "**gyssrl_novedades ()**" en la barra lateral izquierda, de esta BD contiene toda la información relacionada las bicicleterías y usuarios.
- **Paso 4:** Dentro de la base de datos, podés ejecutar consultas SQL para acceder y manipular los datos de los clientes según sea necesario.
## _Alteración del sistema de bicicleterías_
## ![Build Status](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAk1BMVEW/AAAAAADWXV3TVVXFHx/////rxsa6AADfjIy4AAC2AADrvLzaf3+0AAD78/OyAADALy+wAADPZWXRf3+tAADenJz46ur35eXrz8+uDAylAAC7PT3KZWXNdXW1LS2iAADhq6vQiYmbAACqKiqeAACoGRm7T0+xNjbFcXGYAADkvr7XoaHfsLCTAADHenqPAACaExMNKJQsAAABF0lEQVR4Ab3NVWLEMAwEUGmZecPM2PT+p6uspF6Xue9HjmbsgICIr49/gh/FsjBSjF8pTKaKmVKYw5yN1cJiLsFyvmQLtTBaSrBarthaXNwMJisJtqst202nu+0rALd74UAPrPcvIeD+KJyocD6+RIXjRbhSYaepdA4QLj1j+tysD4aCOX1hMxSsi0VsccUZnKfkavWgHy6t3GHlaTIngJZPAtrZPuM89AcIyFOnZcSnWOaykCRJSksjETg/JxICj0z8NSG5yN1EAVESRVFIa4dmvqNDEQn0yaCMyrKsaB+XJefatQjr2dQoe1AKTVVVNCiXmscClq10pxTqfoWA7U1nhPR8pRtNcd/eCt17ELoP/FIBEd8cD4dDTbBv20qLAAAAAElFTkSuQmCC) FileZilla
Necesitamos de un cliente FTP para subir, descargar o modificar los archivos. Para esto debemos [descargar FileZilla](https://filezilla-project.org/download.php?type=client), una vez instalado establecemos la conexión:
- **Paso 1:** Una vez ingresado a la aplicación en la esquina superior izquierda debemos acceder a _**Site Manager**_ y tocar _**NewSite**_.
- **Paso 2:** En la pestaña General, debemos ingresar los datos necesarios para conectar:
Host:
```sh
c7655.sgvps.net
```
Port:
```sh
21
```
Usuario:
```sh
master@segurobici.com.ar
```
Contraseña:
```sh
4#c6cw#q1~{
```
- **Paso 3:** Luego de conectar exitosamente, en el apartado _**Remote Site**_ la carpeta correspondiente al servicio de bicicletería está en la carpeta raíz como:
```sh
bicicleterias.segurobici.com.ar
```
- **Paso 4:** Con click derecho en el elemento, se puede descargar el contenido de la carpeta, finalmente los archivos para modificar se encontrarán en la carpeta:
```sh
public_html
```
- **Paso 5:** Después de realizar las modificaciones, realizar pruebas exhaustivas para verificar que el sistema funcione correctamente y que los cambios se hayan aplicado correctamente, luego seleccionando "bicicleterias.segurobici.com.ar" es posible subir los archivos modificados desde tu _Local site_ con click derecho, tener en cuenta que esto reemplazará el archivo existente.