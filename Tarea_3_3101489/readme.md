# Publicación de mapas utilizando servicios en la nube
## Impacto de la pandemia por Covid-19 en el sector Turismo

**1. definición del problema**

La crisis sanitaria actual a causa del virus Covid-19 ha tenido un grave impacto en la economía mundial debido a que las medidas
sanitarias tomadas en la basta mayoría de naciones con el fin de mitigar la propagación del virus, el confinamiento y el distanciamiento
social, no permiten que gran parte de las actividades económicas puedan seguir desarrollándose con normalidad. Ha sido evidente que 
el sistema económico actual no podrá mantenerse estable si los efectos de la pandemia se alargan indefinidamente. 

Entre los sectores de la economía más afectados se encuentra el turismo, este sector se encuentra paralizado casi en su totalidad pues
una de las principales medidas de contención del virus ha sido el cierre de fronteras y aeropuertos afectando directamente el acceso a
cualquier destino y con pocas alternativas para sostenerse ya que esta es una actividad que implica el desplazamiento físico
obligatoriamente.

El presente trabajo busca representar la importancia del turismo en la economía mundial y demostrar el cambio que este ha tenido en los últimos meses a nivel mundial, así mismo, se busca representar el flujo de turistas que atraia un país como Colombia. 

**Mockup**

<html data-lt-installed="true">
<head>
</head>
<lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 1350px !important; height: 299px !important; transform: none !important; transform-origin: 675px 149.5px !important; zoom: 1 !important; margin-top: 16px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="0" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="0"></canvas></lt-div></lt-highlighter>
<body data-gramm="false">
<p style="text-align: center;"><img alt="" src="https://i.ibb.co/FwWm3gh/Mockup.jpg" style="width: 400px; height: 295px;" /></p>
</body>
</html>


**Fuentes de Datos**

<html data-lt-installed="true">
<head>
	
</head>
<lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 1350px !important; height: 494px !important; transform: none !important; transform-origin: 675px 247px !important; zoom: 1 !important; margin-top: 8px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="457" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="937"></canvas></lt-div></lt-highlighter>
<body data-gramm="false">
<table align="center" border="1" cellpadding="1" cellspacing="1" style="width:500px;">
	<thead>
		<tr>
			<th scope="col">INSUMO</th>
			<th scope="col">FUENTE</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><span lang="ES-MX" style="font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif;">Archivo shapefile de continentes</span></td>
			<td>ArcGis, Continent &nbsp;Shapefile<br />
			<a href="https://www.arcgis.com/home/item.html?id=5cf4f2%0b23c4a642eb9aa7ae1216a04372">https://www.arcgis.com/home/item.html?id=5cf4f2<br />
			23c4a642eb9aa7ae1216a04372</a></td>
		</tr>
		<tr>
			<td><span lang="ES-MX" style="font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif;">Datos de cambio de porcentajes de llegada de turistas en el primer&nbsp;</span>trimestre de 2020 por continentes.</td>
			<td>
			<p>UNWTO World Tourism Barometer May 2020, Special focus on the Impact of COVID-19 (Summary).</p>
			<br />
			URL: <a href="https://webunwto.s3.eu-west-1.amazonaws.com/s3fs-public/2020-05/Barometer%20-%20May%202020%20-%20Short.pdf">https://webunwto.s3.eu-west-1.amazonaws.com/s3fs-public/2020-05/Barometer%20-%20May%202020%20-%20Short.pdf</a></td>
		</tr>
		<tr>
			<td><span lang="ES-MX" style="font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif;">Archivo shapefile de divisi&oacute;n pol&iacute;tico-administrativa de Colombia.</span></td>
			<td>
			<p>IGAC, datos abiertos Cartograf&iacute;a y Geograf&iacute;a</p>
                        <p>URL:<a href="https://geoportal.igac.gov.co/contenido/datos-abiertos-cartografia-y-geografia">https://geoportal.igac.gov.co/contenido/datos-abiertos-cartografia-y-geografia</a></p>
			</td>
		</tr>
		<tr>
			<td>Datos del total de turistas en las principales 24 ciudades de Colombia.</td>
			<td>Direcci&oacute;n de metodolog&iacute;a y producci&oacute;n estad&iacute;stica: encuesta de gasto interno en turismo, informe anual 2019.<br />
			<br />
			URL: <a href="https://www.dane.gov.co/files/investigaciones/boletines/encuesta%0b_gastos_turismo_Int_EGIT/informe_anual_EGIT_19.pdf">https://www.dane.gov.co/files/investigaciones/boletines/encuesta<br />
			_gastos_turismo_Int_EGIT/informe_anual_EGIT_19.pdf</a></td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>
</body>
</html>



**2. Procesamiento de los datos**

Para generar la cartografía del Porcentaje de Cambio de la Llegada de Turistas Internacionales por Continentes en el Primer Trimestre del Año 2020, se parte de un archivo shapefile de continentes, a este fueron agregadas tres columnas con los datos correspondientes al porcentaje de cambio de la llegada de turistas en los meses de enero, febrero y marzo de 2020 tomados del informe Barometro de Turismo Mundial de la Organización Mundial del Turismo.

Este procedimiento fue realizado con el Software ArcGIS, se carga el shapefile en un documento nuevo de ArcMap y se despliega la tabla de atributos de la capa de continentes, se agregan 3 nuevos campos de tipo Double; posteriormente se selecciona la herramienta Editor, con esta herramienta se habilita la edición de la tabla de atributos de la capa cargada y se diligencian las nuevas columnas con los datos correspondientes a cada continente.  

<html data-lt-installed="true">
<head>

</head>
<body data-gramm="false"><lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 1350px !important; height: 494px !important; transform: none !important; transform-origin: 675px 247px !important; zoom: 1 !important; margin-top: 8px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="457" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="937"></canvas></lt-div></lt-highlighter>
<p>&nbsp;</p>

<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<img alt="" src="https://i.ibb.co/f1WBNWW/Captura-1.png" style="width: 600px; height: 333px;" /></p>

<p>&nbsp;</p>
</body>
</html>

**3. CARTO**

Para publicar y visualizar los datos de la Capa de Continentes en CARTO, después de iniciar sesión se selecciona la pestaña  Data, desde allí es posible cargar el shapefile modificado en el punto anterior como un archivo ZIP, una vez cargados los archivos la pagina nos muestra la tabla de atributos del shapefile y se selecciona la opción Create Map. Consecutivamente se despliega el editor de mapas de Carto en donde se puede personalizar la simbología y las variables a representar.

<html data-lt-installed="true">
<head>
</head>
<body data-gramm="false"><lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 1350px !important; height: 494px !important; transform: none !important; transform-origin: 675px 247px !important; zoom: 1 !important; margin-top: 8px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="457" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="937"></canvas></lt-div></lt-highlighter>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img alt="" src="https://i.ibb.co/8sHmqBm/Captura-2.png" style="width: 600px; height: 208px;" /></p>

<p style="text-align: center;">Carga de Capas en CARTO</p>

<p style="text-align: center;">&nbsp;</p>

<p style="text-align: center;">&nbsp;</p>

<p>&nbsp;</p>
</body>
</html>

<html data-lt-installed="true">
<head>
	<title></title>
</head>
<body data-gramm="false"><lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 1350px !important; height: 317px !important; transform: none !important; transform-origin: 675px 158.5px !important; zoom: 1 !important; margin-top: 16px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="0" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="0"></canvas></lt-div></lt-highlighter>
<p style="text-align: center;"><img alt="" src="https://i.ibb.co/drh97LB/Captura-6.png" style="width: 600px; height: 313px;" /></p>
</body>
</html>

Para este caso se agregan 3 widgets al tablero cada uno corresponde al cambio porcentual de la llegada de turistas por continente en Enero, Febrero y Marzo. Es posible observar que para el mes de enero los valores de CPLT (cambio porcentual de llegada de turistas) son positivo, es decir hubo un aumento en el flujo de turistas en todos los continentes, a excepción de las Américas que no tuvo ningún cambio. Para el mes de febrero se puede evidenciar que el aumento se mantiene y los porcentajes son positivos, a excepción del continente asiático en donde el COVID-19 ya presentaba tasas de contagio muy altas y las medidas de contención estaban ya en curso. Finalmente, en el mes de marzo se evidencia que los porcentajes de cambio de llegada de turistas alcanzan valores de -64 en Asia y oscilan entre -40 y -60 para el resto de continentes, demostrando que turismo estaba sufrió un impacto negativo en todo el mundo debido al cierre de fronteras. 

<html>
<head>
</head>
<body>
<p style="text-align: center;"><img alt="" src="https://i.ibb.co/Sr7KfJW/Captura-5.png" style="width: 600px; height: 309px;" /></p>
</body>
</html>




URL: https://mafe-mojica4.carto.com/builder/f699b8f5-be73-48a9-8085-781ed170328c/embed

**4. GeoNode**

Para la publicación a través de Geonode, inicialmente se debe crear una cuenta de usuario, una vez la cuenta ha sido creada será posible empezar a cargar las capas desde la pestaña Datos > Capas > Subir Capas. Después de dar clic en esta opción se despliega una interfaz que permite arrastrar los archivos a una ventana o cargarlos con el explorador de archivos. 

<html data-lt-installed="true">
<head>
</head>
<lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 1350px !important; height: 227px !important; transform: none !important; transform-origin: 675px 113.5px !important; zoom: 1 !important; margin-top: 16px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="0" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="0"></canvas></lt-div></lt-highlighter>
<body data-gramm="false">
<p style="text-align: center;"><img alt="" src="https://i.ibb.co/xfsvHtQ/Captura-7.png" style="width: 600px; height: 223px;" /></p>
</body>
</html>

Cuando se han cargado las capas se muestra la opción Visualizar Capa, al hacer clic será posible visualizar la capa y sus metadatos. Para editar los metadatos se da clic en la opción Editing Tools > Metadata > Wizard. Esto nos permitirá modificar o especificar la información de la capa con mayor detalle. 

<html data-lt-installed="true">
<head>
</head>
<lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 1350px !important; height: 179px !important; transform: none !important; transform-origin: 675px 89.5px !important; zoom: 1 !important; margin-top: 16px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="0" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="0"></canvas></lt-div></lt-highlighter>
<body data-gramm="false">
<p style="text-align: center;"><img alt="" src="https://i.ibb.co/Q8Vg2qq/Captura-8.png" style="width: 600px; height: 175px;" /></p>
</body>
</html>

<html data-lt-installed="true">
<head>
</head>
<lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 1350px !important; height: 276px !important; transform: none !important; transform-origin: 675px 138px !important; zoom: 1 !important; margin-top: 16px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="0" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="0"></canvas></lt-div></lt-highlighter>
<body data-gramm="false">
<p style="text-align: center;"><img alt="" src="https://i.ibb.co/jVCGBFX/Captura-3.png" style="width: 600px; height: 272px;" /></p>
</body>
</html>

Una vez se han asignado los metadatos de la capa se selecciona la opción de Crear un Mapa, una vez damos clic allí se despliega el visor de Geonode que permite modificar la apariencia del mapa. Allí se carga un nuevo estilo para la capa desde un archivo SLD generado en QGIS y se seleccionan los widgets que mejor reflejan la información del mapa. 

<html data-lt-installed="true">
<head>
</head>
<lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 1350px !important; height: 149px !important; transform: none !important; transform-origin: 675px 74.5px !important; zoom: 1 !important; margin-top: 21.4375px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="0" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="0"></canvas></lt-div></lt-highlighter>
<body data-gramm="false">
<h1 style="text-align: center;"><img alt="" src="https://i.ibb.co/gWZpygb/Captura-9.png" style="width: 300px; height: 141px;" /></h1>
</body>
</html>

Se selecciona la opción Configuración de la capa.

<html data-lt-installed="true">
<head>
</head>
<lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 1350px !important; height: 218px !important; transform: none !important; transform-origin: 675px 109px !important; zoom: 1 !important; margin-top: 16px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="0" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="0"></canvas></lt-div></lt-highlighter>
<body data-gramm="false">
<p style="text-align: center;"><img alt="" src="https://i.ibb.co/Nnf1VFC/Captura-10.png" style="width: 400px; height: 214px;" /></p>
</body>
</html>

Allí, en el símbolo del gotero se le puede asignar el estilo deseado a la capa. En este caso creamos un nuevo estilo desde un archivo generado en QGIS.

<html data-lt-installed="true">
<head>
</head>
<body data-gramm="false"><lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 1350px !important; height: 277px !important; transform: none !important; transform-origin: 675px 138.5px !important; zoom: 1 !important; margin-top: 16px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="0" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="0"></canvas></lt-div></lt-highlighter>
<p style="text-align: center;"><img alt="" src="https://i.ibb.co/DMdMXc6/Captura-11.png" style="width: 300px; height: 273px;" /></p>
</body>
</html>

<html data-lt-installed="true">
<head>
</head>
<lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 1350px !important; height: 174px !important; transform: none !important; transform-origin: 675px 87px !important; zoom: 1 !important; margin-top: 16px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="0" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="0"></canvas></lt-div></lt-highlighter>
<body data-gramm="false">
<p style="text-align: center;"><img alt="" src="https://i.ibb.co/ykJdbxR/Captura-12.png" style="width: 300px; height: 170px;" /></p>
</body>
</html>

<html>
<head>
	<title></title>
</head>
<body>
<p><img alt="" src="https://i.ibb.co/L9LjDKd/Captura-13.png" style="width: 300px; height: 157px;" /></p>
</body>
</html>

Finalmente se agregan los widgets que complementen mejor la información del mapa, para este caso utilizamos un gráfico que muestra la cantidad de turistas por ciudad de forma resumida y un contador de ciudades.

<html data-lt-installed="true">
<head>
</head>
<lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 1350px !important; height: 143px !important; transform: none !important; transform-origin: 675px 71.5px !important; zoom: 1 !important; margin-top: 16px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="0" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="0"></canvas></lt-div></lt-highlighter>
<body data-gramm="false">
<p><img alt="" src="https://i.ibb.co/GQ7TTVC/Captura-14.png" style="width: 400px; height: 139px;" /></p>
</body>
</html>

Al terminar de personalizar el mapa en el menu desplegable de la parte superior dereche damos Clic en Guardar. Así el mapa queda guardado en el servidor. 

URL: http://34.83.176.208/maps/41

**5. Slide**

URL: https://slides.com/mfmojicab/deck

**6. Loom**

URL: https://www.loom.com/share/dfcc923448f640279288f54421106f9b (AUDIO Y CAMARA NO SIRVEN)
URL: https://www.youtube.com/watch?v=SBnL2C40cBE&feature=youtu.be (YOUTUBE)
