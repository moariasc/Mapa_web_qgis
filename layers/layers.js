var wms_layers = [];

var format_sectores_0 = new ol.format.GeoJSON();
var features_sectores_0 = format_sectores_0.readFeatures(json_sectores_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sectores_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sectores_0.addFeatures(features_sectores_0);
var lyr_sectores_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sectores_0, 
                style: style_sectores_0,
                interactive: true,
                title: '<img src="styles/legend/sectores_0.png" /> sectores'
            });
var format_Manzanas_1 = new ol.format.GeoJSON();
var features_Manzanas_1 = format_Manzanas_1.readFeatures(json_Manzanas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_1.addFeatures(features_Manzanas_1);
var lyr_Manzanas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzanas_1, 
                style: style_Manzanas_1,
                interactive: true,
    title: 'Manzanas<br />\
    <img src="styles/legend/Manzanas_1_0.png" /> SECTOR 1<br />\
    <img src="styles/legend/Manzanas_1_1.png" /> SECTOR 18<br />\
    <img src="styles/legend/Manzanas_1_2.png" /> SECTOR 2<br />\
    <img src="styles/legend/Manzanas_1_3.png" /> SECTOR 3<br />\
    <img src="styles/legend/Manzanas_1_4.png" /> SECTOR 4<br />\
    <img src="styles/legend/Manzanas_1_5.png" /> SECTOR 7<br />\
    <img src="styles/legend/Manzanas_1_6.png" /> SECTOR 8<br />'
        });

lyr_sectores_0.setVisible(true);lyr_Manzanas_1.setVisible(true);
var layersList = [lyr_sectores_0,lyr_Manzanas_1];
lyr_sectores_0.set('fieldAliases', {'cod_sec': 'cod_sec', 'AREA': 'AREA', 'numero': 'numero', 'Perimeter': 'Perimeter', 'Imagen': 'Imagen', });
lyr_Manzanas_1.set('fieldAliases', {'cod_sec': 'cod_sec', 'cod_mz': 'cod_mz', });
lyr_sectores_0.set('fieldImages', {'cod_sec': 'TextEdit', 'AREA': 'TextEdit', 'numero': 'TextEdit', 'Perimeter': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_Manzanas_1.set('fieldImages', {'cod_sec': 'Hidden', 'cod_mz': 'Hidden', });
lyr_sectores_0.set('fieldLabels', {'cod_sec': 'header label', 'AREA': 'inline label', 'numero': 'header label', 'Perimeter': 'no label', 'Imagen': 'no label', });
lyr_Manzanas_1.set('fieldLabels', {});
lyr_Manzanas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});