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

**Fuentes de Datos**
<!doctype html>
<html data-lt-installed="true">
<head>
	<title></title>
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

Para generar la cartografía del Porcentaje de Cambio de la Llegada de Turistas Internacionales por Continentes en el Primer Trimestre del
Año 2020, se parte de un archivo shapefile de los continentes, a este fueron agregadas tres columnas con los datos correspondientes al 
porcentaje de cambio de la llegada de turistas en los meses de enero, febrero y marzo de 2020 tomados del informe de 
