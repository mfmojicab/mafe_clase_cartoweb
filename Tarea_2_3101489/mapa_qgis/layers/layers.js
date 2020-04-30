var wms_layers = [];

var format_depto_0 = new ol.format.GeoJSON();
var features_depto_0 = format_depto_0.readFeatures(json_depto_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_depto_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_depto_0.addFeatures(features_depto_0);
var lyr_depto_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_depto_0, 
                style: style_depto_0,
                interactive: true,
                title: '<img src="styles/legend/depto_0.png" /> depto'
            });
var format_PUNTOS_CLIP_1 = new ol.format.GeoJSON();
var features_PUNTOS_CLIP_1 = format_PUNTOS_CLIP_1.readFeatures(json_PUNTOS_CLIP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTOS_CLIP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOS_CLIP_1.addFeatures(features_PUNTOS_CLIP_1);
var lyr_PUNTOS_CLIP_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PUNTOS_CLIP_1, 
                style: style_PUNTOS_CLIP_1,
                interactive: true,
                title: '<img src="styles/legend/PUNTOS_CLIP_1.png" /> PUNTOS_CLIP'
            });
var lyr_spline_full_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "spline_full",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/spline_full_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8295255.610058, 407103.114840, -8238764.620001, 536678.022231]
                            })
                        });
var format_mf_isoyetas_din_3 = new ol.format.GeoJSON();
var features_mf_isoyetas_din_3 = format_mf_isoyetas_din_3.readFeatures(json_mf_isoyetas_din_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mf_isoyetas_din_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mf_isoyetas_din_3.addFeatures(features_mf_isoyetas_din_3);
var lyr_mf_isoyetas_din_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mf_isoyetas_din_3, 
                style: style_mf_isoyetas_din_3,
                interactive: true,
                title: '<img src="styles/legend/mf_isoyetas_din_3.png" /> mf_isoyetas_din'
            });

lyr_depto_0.setVisible(true);lyr_PUNTOS_CLIP_1.setVisible(true);lyr_spline_full_2.setVisible(true);lyr_mf_isoyetas_din_3.setVisible(true);
var layersList = [lyr_depto_0,lyr_PUNTOS_CLIP_1,lyr_spline_full_2,lyr_mf_isoyetas_din_3];
lyr_depto_0.set('fieldAliases', {'DPTO': 'DPTO', 'NOMBRE_DPT': 'NOMBRE_DPT', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', });
lyr_PUNTOS_CLIP_1.set('fieldAliases', {'ESTACIÓN': 'ESTACIÓN', 'CÓDIGO': 'CÓDIGO', 'X': 'X', 'Y': 'Y', 'MUNICIPIO': 'MUNICIPIO', 'CUENCA': 'CUENCA', 'AÑO': 'AÑO', 'ENERO': 'ENERO', });
lyr_mf_isoyetas_din_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Contour': 'Contour', 'Shape_Leng': 'Shape_Leng', });
lyr_depto_0.set('fieldImages', {'DPTO': 'TextEdit', 'NOMBRE_DPT': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_PUNTOS_CLIP_1.set('fieldImages', {'ESTACIÓN': 'TextEdit', 'CÓDIGO': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CUENCA': 'TextEdit', 'AÑO': 'TextEdit', 'ENERO': 'TextEdit', });
lyr_mf_isoyetas_din_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Contour': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_depto_0.set('fieldLabels', {'DPTO': 'no label', 'NOMBRE_DPT': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', });
lyr_PUNTOS_CLIP_1.set('fieldLabels', {'ESTACIÓN': 'no label', 'CÓDIGO': 'no label', 'X': 'no label', 'Y': 'no label', 'MUNICIPIO': 'no label', 'CUENCA': 'no label', 'AÑO': 'no label', 'ENERO': 'no label', });
lyr_mf_isoyetas_din_3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Contour': 'inline label', 'Shape_Leng': 'no label', });
lyr_mf_isoyetas_din_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});