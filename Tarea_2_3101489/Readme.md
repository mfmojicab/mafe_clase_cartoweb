
<head>
	
</head>
<body data-gramm="false"><lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 1333px !important; height: 876.156px !important; transform: none !important; transform-origin: 666.5px 438.078px !important; margin-top: 24px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="629" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="648"></canvas></lt-div></lt-highlighter>
<p><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:22px;"><big>Tarea 2 - Publicaci&oacute;n de mapas bajo est&aacute;ndares OGC utilizando base de datos espacial y servidor de mapas</big></span></span></p>

<h2><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:20px;"><strong>1. Definici&oacute;n del problema</strong></span></span></h2>

<h2><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:18px;">Precipitaci&oacute;n Mensual en Bogot&aacute; Durante el Fen&oacute;meno &nbsp;&ldquo;La Ni&ntilde;a&rdquo;</span></span></h2>

<p style="text-align: justify;"><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">En los a&ntilde;os 2010 y 2011 se present&oacute; en Colombia uno de los fen&oacute;menos ENSO en su fase &ldquo;La Ni&ntilde;a&rdquo;, este fen&oacute;meno afect&oacute; de manera importante diferentes zonas del pa&iacute;s. Durante su desarroll&oacute; se evidenci&oacute; un aumento en los niveles de precipitaci&oacute;n y una disminuci&oacute;n en los niveles de temperatura en las regiones Andina, Pac&iacute;fica y Caribe.</span></span></p>

<p style="text-align: justify;"><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">Para comprender el comportamiento de los niveles de precipitaci&oacute;n mensual de este fen&oacute;meno y su impacto en la ciudad de Bogot&aacute; este estudio busca mapear las cifras de precipitaci&oacute;n obtenidas de las estaciones hidrol&oacute;gicas de la CAR durante el mes de enero del a&ntilde;o 2011.</span></span></p>

<h2><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:20px;"><strong>2. Fuente de Insumos</strong></span></span></h2>

<table border="1" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width:294px;">
			<p><span style="font-family:tahoma,geneva,sans-serif;"><strong>INSUMO</strong></span></p>
			</td>
			<td style="width:294px;">
			<p><span style="font-family:tahoma,geneva,sans-serif;"><strong>FUENTE</strong></span></p>
			</td>
		</tr>
		<tr>
			<td style="width:294px;">
			<p><span style="font-family:tahoma,geneva,sans-serif;">Datos de volumen de precipitaciones mensuales obtenido en la red de estaciones hidrol&oacute;gicas de la Corporaci&oacute;n Aut&oacute;noma Regional de Cundinamarca - CAR.</span></p>
			</td>
			<td style="width:294px;">
			<p><span style="font-family:tahoma,geneva,sans-serif;"><a href="https://www.datos.gov.co/Ambiente-y-Desarrollo-Sostenible/Precipitaciones-Totales-Mensuales/mb4n-6m2g">https://www.datos.gov.co/Ambiente-y-Desarrollo-Sostenible/Precipitaciones-Totales-Mensuales/mb4n-6m2g</a></span></p>
			</td>
		</tr>
		<tr>
			<td style="width:294px;">
			<p><span style="font-family:tahoma,geneva,sans-serif;">L&iacute;mites administrativos de los departamentos de la Rep&uacute;blica de Colombia en formato Shapefile.</span></p>
			</td>
			<td style="width:294px;">
			<p><span style="font-family:tahoma,geneva,sans-serif;"><a href="https://sites.google.com/site/seriescol/shapes">https://sites.google.com/site/seriescol/shapes</a></span></p>
			</td>
		</tr>
	</tbody>
</table>

<p><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:20px;"><strong>3. Procesamiento de los datos</strong></span></span></p>

<hr />
<p><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">El procesamiento de la informaci&oacute;n comienza con la tabulaci&oacute;n de los datos de precipitaci&oacute;n que se obtuvieron filtrando aquellos que corresponden al mes de enero del a&ntilde;o 2011, generando as&iacute; un archivo en Excel con una tabla que contiene las coordenadas de las estaciones meteorol&oacute;gicas ubicadas en la ciudad de Bogot&aacute; y Cundinamarca junto con los niveles de precipitaci&oacute;n en mililitros registradas en cada una.</span></span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://ibb.co/37wsw10" /><a href="https://ibb.co/37wsw10" target="_self"><img alt="" src="https://ibb.co/37wsw10" /></a><br />
<img alt="" src="https://i.ibb.co/drScSBQ/Figura-1.png" style="height: 500px; width: 889px;" /></span></p>

<p align="center" style="margin-left:18.0pt;"><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">Figura 1. Tabulaci&oacute;n de la informaci&oacute;n para su posterior espacializaci&oacute;n.</span><br />
<span style="font-size:16px;">Fuente: Propia</span></span></p>

<p style="text-align: justify;"><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">A continuaci&oacute;n, se espacializan los puntos correspondientes a la ubicaci&oacute;n de cada estaci&oacute;n meteorol&oacute;gica y se adiciona la capa de Departamentos de Colombia para que sea utilizada como referencia, as&iacute; mismo, se extrae de este una capa que corresponde &uacute;nicamente a Bogot&aacute;.</span></span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/d7XjGRN/Figura-2.png" style="width: 500px; height: 281px;" /></span></p>

<p align="center" style="margin-left:18.0pt;"><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">Figura 2. Espacializaci&oacute;n de puntos desde un archivo Excel.</span><br />
<span style="font-size:16px;">Fuente: Propia</span></span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/wg8Q7g8/Figura-3.png" style="width: 600px; height: 337px;" /></span></p>

<p align="center" style="margin-left:18.0pt;"><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">Figura 3. Capa de Departamentos de Colombia, capa de Bogot&aacute; y capa de estaciones hidrol&oacute;gicas<br />
Fuente: Propia</span></span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">Posteriormente, con el fin de representar gr&aacute;ficamente el comportamiento de los niveles de precipitaci&oacute;n en la ciudad se realiza una interpolaci&oacute;n de la capa de puntos que contiene las cifras mensuales en mil&iacute;metros registradas en cada estaci&oacute;n para enero del 2011.</span></span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/M8Q2WB9/Figura-4.png" style="width: 600px; height: 337px;" /></span></p>

<p align="center" style="margin-left:18.0pt;"><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">Figura 4. Modelo de procesamiento para generaci&oacute;n de raster de interpolaci&oacute;n y para ajustar el resultado al pol&iacute;gono de Bogot&aacute;.<br />
Fuente: Propia</span></span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/4NmLynF/Figura-5.png" style="width: 600px; height: 337px;" /></span></p>

<p align="center" style="margin-left:18.0pt;"><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">Figura 5. Raster de interpolaci&oacute;n.<br />
Fuente: Propia</span></span></p>

<p>&nbsp;</p>

<p><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">Finalmente, haciendo uso de la herramienta de contorno se generan isol&iacute;neas a partir de la superficie del raster. Esta capa busca representar el comportamiento general de la precipitaci&oacute;n en Bogot&aacute; durante el mes de enero de 2011.</span></span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/ZYC6vCx/Figura-6.png" style="width: 600px; height: 337px;" /></span></p>

<p align="center" style="margin-left:18.0pt;"><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">Figura 6. Modelo utilizado para generar las isoyetas de los niveles de precipitaci&oacute;n y ajustar el resultado al pol&iacute;gono de Bogota.<br />
Fuente: Propia</span></span></p>

<p style="margin-left: 18pt; text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/92nh2c8/Figura-7.png" style="width: 500px; height: 281px;" /></span></p>

<p align="center" style="margin-left:18.0pt;"><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">Figura 7. Visualizaci&oacute;n de las capas utilizadas y el resultado del geoprocesamiento.<br />
Fuente: Propia</span></span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">Para subir estos archivos al Servidor PostGIS se cargan las capas en Qgis desktop, all&iacute; se selecciona la opci&oacute;n de PostGIS en el navegador, click derecho y se selecciona <em>conexi&oacute;n</em> <em>nueva. </em>All&iacute; se configuran los datos del servidor en el que se subir&aacute;n las capas. Una vez conectados al servidor se cargan en QGis las capas previamente procesadas y se arrastran hacia la base de datos de la clase, de esta manera se importan a la base de datos. Posteriormente se procede a publicar las capas en el Geoserver.</span></span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/bPmscm2/Figura-8.png" style="width: 600px; height: 337px;" /></span></p>

<p align="center" style="margin-left:18.0pt;"><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:16px;">Figura 8.Conexi&oacute;n nueva PostGIS en QGIS.<br />
Fuente: propia</span></span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:20px;"><strong>4. Simbolog&iacute;a SLD</strong></span></span></p>

<hr />
<p><span style="font-family:tahoma,geneva,sans-serif;">La generaci&oacute;n de simbolog&iacute;a SLD se realiz&oacute; desde QGis y se asign&oacute; a la capa de departamentos de Colombia. Despu&eacute;s de definir el estilo para la capa en QGis, se guarda como un archivo SLD desde la pesta&ntilde;a Propiedades de Simbolog&iacute;a. Posteriormente desde el Geoserver se importa el archivo en la creaci&oacute;n de un nuevo estilo SLD.<br />
<br />
Al tratarse de una capa base que se usar&aacute; como referencia se asigna una tonalidad gris oscura a los bordes del pol&iacute;gono y a las etiquetas de los nombres de los departamentos.</span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/V3QVgHG/Figura-9.png" style="width: 500px; height: 281px;" /></span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;">Figura 9. Exportaci&oacute;n de estilo en QGis<br />
Fuente: Propia</span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/fqcsrp1/Figura-10.png" style="width: 500px; height: 281px;" /></span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;">Figura 10. Carga de archivo SLD en el Geoerver para creaci&oacute;n de nuevo estilo.<br />
Fuente: Propia</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">El c&oacute;digo utlizado fue:</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&lt;StyledLayerDescriptor xmlns=&quot;http://www.opengis.net/sld&quot; xsi:schemaLocation=&quot;http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd&quot; xmlns:ogc=&quot;http://www.opengis.net/ogc&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; xmlns:se=&quot;http://www.opengis.net/se&quot; version=&quot;1.1.0&quot;&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp; &lt;NamedLayer&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp; &lt;se:Name&gt;mf_departamentos_col&lt;/se:Name&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp; &lt;UserStyle&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:Name&gt;mf_departamentos_col&lt;/se:Name&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:FeatureTypeStyle&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:Rule&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:Name&gt;Single symbol&lt;/se:Name&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:PolygonSymbolizer&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:Stroke&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:SvgParameter name=&quot;stroke&quot;&gt;#333030&lt;/se:SvgParameter&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:SvgParameter name=&quot;stroke-width&quot;&gt;0.5&lt;/se:SvgParameter&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:SvgParameter name=&quot;stroke-linejoin&quot;&gt;bevel&lt;/se:SvgParameter&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/se:Stroke&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/se:PolygonSymbolizer&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/se:Rule&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:Rule&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:TextSymbolizer&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&lt;se:Label&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;ogc:PropertyName&gt;nombre_dpt&lt;/ogc:PropertyName&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/se:Label&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:Font&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:SvgParameter name=&quot;font-family&quot;&gt;MS Shell Dlg 2&lt;/se:SvgParameter&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:SvgParameter name=&quot;font-size&quot;&gt;10&lt;/se:SvgParameter&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/se:Font&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:LabelPlacement&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:PointPlacement&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:AnchorPoint&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:AnchorPointX&gt;0&lt;/se:AnchorPointX&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:AnchorPointY&gt;0.5&lt;/se:AnchorPointY&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/se:AnchorPoint&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/se:PointPlacement&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/se:LabelPlacement&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:Fill&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:SvgParameter name=&quot;fill&quot;&gt;#423f3f&lt;/se:SvgParameter&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/se:Fill&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;se:VendorOption name=&quot;maxDisplacement&quot;&gt;1&lt;/se:VendorOption&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/se:TextSymbolizer&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/se:Rule&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/se:FeatureTypeStyle&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp; &lt;/UserStyle&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp; &lt;/NamedLayer&gt;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&lt;/StyledLayerDescriptor&gt;</span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/XWs5yRg/Figura-11.png" style="width: 199px; height: 64px;" /></span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;">Figura 11. Previsualizaci&oacute;n de la leyenda simbolog&iacute;a SLD<br />
Fuente: Propia</span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/Wp0MsYJ/Figura-12.png" style="width: 600px; height: 337px;" /></span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;">Figura 12. Previsualizaci&oacute;n de la capa con el estilo SLD asignado.<br />
Fuente: Propia</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;"><strong>5. Capa Simbolog&iacute;a CSS</strong></span><br />
&nbsp;</p>

<p style="text-align: justify;"><span style="font-family:tahoma,geneva,sans-serif;">La generaci&oacute;n de Simbolog&iacute;a CSS se realiz&oacute; desde el Geoserver, en la opci&oacute;n estilos, y fue asignada a la capa de Puntos que representan las Estaciones Meteorol&oacute;gicas en Bogot&aacute;. Se asign&oacute; un Tri&aacute;ngulo de color azul como s&iacute;mbolo de cada estaci&oacute;n ya que este color es com&uacute;nmente asociado a la precipitaci&oacute;n.</span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/KDsvN8B/Figura-13.png" style="width: 360px; height: 121px;" /></span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;">Figura 13. Creaci&oacute;n estilos en el Geoserver<br />
Fuente: Propia</span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/ZmjvVmp/Figura-14.png" style="width: 600px; height: 337px;" /></span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;">Figura 14. Creaci&oacute;n de Simbolog&iacute;a CSS desde el Geoserver.<br />
Fuente: Propia.</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">El C&oacute;digo utilizado es:</span><br />
&nbsp;</p>

<p><span style="font-family:tahoma,geneva,sans-serif;">* {</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp; mark: symbol(triangle);</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp; mark-size: 10px;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp; :mark {</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp; fill: blue;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp; stroke: black;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp; stroke-width: 1px;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp; }</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;}</span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/DW5nRMF/Figura-15.png" style="width: 202px; height: 61px;" /></span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;">Figura 15. Previsualizaci&oacute;n de la leyenda<br />
Fuente: Propia</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;"><strong>6. Simbolog&iacute;a YSLD</strong></span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">La generaci&oacute;n de la simbolog&iacute;a YSLD se realiz&oacute; desde el Geoserver, en la opci&oacute;n estilos. Esta simbolog&iacute;a fue asignada a la capa de isoyetas de precipitaci&oacute;n, se selecciona una tonalidad azul para debido a la tem&aacute;tica del mapa.</span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/zQKFYhC/Figura-16.png" style="width: 600px; height: 337px;" /></span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;">Figura 15. Creaci&oacute;n de simbolog&iacute;a YSLD en Geoserver.<br />
Fuente: Propia</span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/MN3WjnP/Figura-17.png" style="width: 600px; height: 337px;" /></span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;">Figura 16. Previsualizaci&oacute;n de la capa y la leyenda con la simbolog&iacute;a YSLD asignada<br />
Fuente: Propia</span></p>

<p align="center">&nbsp;</p>

<p><span style="font-family:tahoma,geneva,sans-serif;">El c&oacute;digo utilizado en la Simbolog&iacute;a YLSD fue:</span></p>

<p>&nbsp;</p>

<p><span style="font-family:tahoma,geneva,sans-serif;">title: &#39;isoyetas precipitacion&#39;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">feature-styles:</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">- name: name</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp; rules:</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp; - symbolizers:</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp; - line:</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; stroke-color: &#39;#0474c4&#39;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; stroke-width: 1</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp; - text:</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label: ${contour}</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; fill-color: &#39;#000000&#39;</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; placement: line</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; offset: 0</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x-followLine: true</span></p>

<hr />
<p><span style="font-family:tahoma,geneva,sans-serif;"><strong>7.&nbsp; Creaci&oacute;n de Grupo de Capas en el Geoserver</strong></span><br />
&nbsp;</p>

<p style="text-align: justify;"><span style="font-family:tahoma,geneva,sans-serif;">La creaci&oacute;n del grupo de capas en el Geoserver se realiza a trav&eacute;s de la opci&oacute;n Grupos de Capas que se encuentra en el panel de navegaci&oacute;n al lado izquierdo de la pantalla. All&iacute;, en la parte superior se selecciona la opci&oacute;n Nuevo Grupo de capas y se proveen los par&aacute;metros de configuraci&oacute;n para el grupo.</span></p>

<p style="text-align: justify;"><span style="font-family:tahoma,geneva,sans-serif;">Para visualizar el grupo de capas completo se selecciona la opci&oacute;n Visualizaci&oacute;n de Capas en el panel de navegaci&oacute;n y all&iacute; se busca por el grupo de capas creado. La visualizaci&oacute;n del grupo de genera el siguiente resultado:</span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/g7v15J7/Figura-18.png" style="width: 600px; height: 337px;" /></span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;">Figura 17. Visualizaci&oacute;n del grupo de capas creado en el Geoserver.<br />
Fuente: Propia</span></p>

<hr />
<p><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:20px;"><strong>8. Conclusiones</strong></span></span></p>

https://www.loom.com/share/34fc442d524a48f3b82084d5af9b8347

<p>&nbsp;</p>

<hr />
<p><span style="font-family:tahoma,geneva,sans-serif;"><span style="font-size:20px;"><strong>9. Opcional: Creaci&oacute;n de un mapa base desde Mapbox</strong></span></span></p>

<p style="text-align: justify;"><span style="font-family:tahoma,geneva,sans-serif;">Inicialmente, desde el tablero del usuario se selecciona la opci&oacute;n empezar a editar en Mapbox Studio, all&iacute; seleccionamos la opci&oacute;n de nuevo estilo y la p&aacute;gina nos muestra los diferentes estilos disponibles en este caso se selecciona el estilo Streets.</span></p>

<p style="text-align: justify;"><span style="font-family:tahoma,geneva,sans-serif;">Una vez seleccionado el estilo se da clic en la opci&oacute;n Personalizar Estilo, all&iacute; ser&aacute; posible modificar todos los componentes y las capas del mapa. Para este caso se decidi&oacute; apagar la mayor&iacute;a de los componentes a excepci&oacute;n de los l&iacute;mites administrativos, de relieve y los componentes de agua y tierra. A estos componentes se les dio una tonalidad oscura y a los l&iacute;mites administrativos se les dio una tonalidad clara con el fin demarcar el &aacute;rea de trabajo que se est&aacute; utilizando en este estudio, as&iacute; mismo se busc&oacute; que los ponentes de relieve fueran visibles para darle al mapa una base apropiada para la tem&aacute;tica.</span></p>

<p style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><img alt="" src="https://i.ibb.co/ykTGcMk/Figura-19.png" style="width: 600px; height: 337px;" /></span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;">Figura 18. Personalizaci&oacute;n de mapa base en MapBox.<br />
Fuente: Propia</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">Despu&eacute;s de finalizar el proceso de personalizaci&oacute;n en Mapbox se procede a realizar la conexi&oacute;n desde QGIS con un servicio WMS, para esto desde el administrador de fuentes de datos se selecciona la opci&oacute;n WMS. All&iacute; en la opci&oacute;n Nuevo se podr&aacute; establecer la configuraci&oacute;n adecuada para realizar la conexi&oacute;n y a&ntilde;adir el mapa base personalizado desde MapBox.</span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;">Figura 19. Mapa base en QGIS junto con todas las otras capas trabajadas.<br />
Fuente: Propia</span></p>
</body>
</html>

URL: URL: https://api.mapbox.com/styles/v1/mfmojicab/ck9li6kcs10nz1ipiuqbajrl3.html?fresh=true&title=view&access_token=pk.eyJ1IjoibWZtb2ppY2FiIiwiYSI6ImNrOWxoeGo0ZDBzeDQzZHBwMjJtZHR3d3kifQ.fpOpnYumRSKnrPIYWXg4eA
<!doctype html>
<html data-lt-installed="true">
<head>

</head>
<lt-highlighter contenteditable="false" style="display: none;"><lt-div class="lt-highlighter__wrapper" spellcheck="false" style="overflow: visible !important; width: 682px !important; height: 1170px !important; transform: none !important; transform-origin: 341px 585px !important; margin-top: 32px !important; margin-left: 8px !important;"><canvas class="lt-highlighter__canvas" height="1035" style="display: none; margin-top: 0px !important; margin-left: 0px !important;" width="452"></canvas></lt-div></lt-highlighter>
<body data-gramm="false">
<h1>&nbsp;</h1>

<p style="background-repeat: no-repeat; border: 1px dotted gray; padding-top: 8px; background-image: url(&quot;https://www.qhmit.com/html/online-html-editor/ckeditor/ckeditor_4.4.1_full/plugins/showblocks/images/block_p.png&quot;); background-position: left top; padding-left: 8px; text-align: center;">&nbsp;</p>

<p style="background-repeat: no-repeat; border: 1px dotted gray; padding-top: 8px; background-image: url(&quot;https://www.qhmit.com/html/online-html-editor/ckeditor/ckeditor_4.4.1_full/plugins/showblocks/images/block_p.png&quot;); background-position: left top; padding-left: 8px; text-align: center;"><img alt="" src="https://i.ibb.co/7VV4KWP/Figura-20.png" style="width: 500px; height: 281px;" /></p>

<p align="center" style="background-repeat: no-repeat; border: 1px dotted gray; padding-top: 8px; background-image: url(&quot;https://www.qhmit.com/html/online-html-editor/ckeditor/ckeditor_4.4.1_full/plugins/showblocks/images/block_p.png&quot;); background-position: left top; padding-left: 8px;"><span style="font-family: tahoma, geneva, sans-serif;">Figura 19. Mapa base en QGIS junto con todas las otras capas trabajadas.<br />
Fuente: Propia</span></p>

<p style="background-repeat: no-repeat; border: 1px dotted gray; padding-top: 8px; background-image: url(&quot;https://www.qhmit.com/html/online-html-editor/ckeditor/ckeditor_4.4.1_full/plugins/showblocks/images/block_p.png&quot;); background-position: left top; padding-left: 8px;">&nbsp;</p>

<p style="background-repeat: no-repeat; border: 1px dotted gray; padding-top: 8px; background-image: url(&quot;https://www.qhmit.com/html/online-html-editor/ckeditor/ckeditor_4.4.1_full/plugins/showblocks/images/block_p.png&quot;); background-position: left top; padding-left: 8px;"><span style="font-size: 20px;"><span style="font-family: tahoma, geneva, sans-serif;"><strong>10. Opcional</strong></span></span></p>

<p style="text-align: justify;"><span style="font-family:tahoma,geneva,sans-serif;">Para la publicaci&oacute;n en la web de un mapa generado en QGIS&nbsp;se hace uso de la herramienta QGIS2web, una vez instalado el plugin ser&aacute; posible acceder a la herramienta desde la pesta&ntilde;a web. All&iacute; seleccionamos el nuevo plugin y la opci&oacute;n de crear nuevo mapa. Posteriormente se abrir&aacute; una ventana en donde se configura los par&aacute;metros para la publicaci&oacute;n del mapa.</span></p>

<p style="background-repeat: no-repeat; border: 1px dotted gray; padding-top: 8px; background-image: url(&quot;https://www.qhmit.com/html/online-html-editor/ckeditor/ckeditor_4.4.1_full/plugins/showblocks/images/block_p.png&quot;); background-position: left top; padding-left: 8px; text-align: center;"><img alt="" src="https://i.ibb.co/BqtgNxS/ultima.png" style="width: 600px; height: 337px;" /></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;">Figura 20. QGIS2Web, exportaci&oacute;n de mapa.</span></p>

<p align="center"><span style="font-family:tahoma,geneva,sans-serif;">Fuente: Propia</span></p>

<p><span style="font-family:tahoma,geneva,sans-serif;">Link:&nbsp;<a href="https://mfmojicab.github.io/mafe_clase_cartoweb/Tarea_2_3101489/mapa_qgis/index.html">https://mfmojicab.github.io/mafe_clase_cartoweb/Tarea_2_3101489/mapa_qgis/index.html</a></span></p>

<p style="background-repeat: no-repeat; border: 1px dotted gray; padding-top: 8px; background-image: url(&quot;https://www.qhmit.com/html/online-html-editor/ckeditor/ckeditor_4.4.1_full/plugins/showblocks/images/block_p.png&quot;); background-position: left top; padding-left: 8px;">&nbsp;</p>
</body>
</html>
