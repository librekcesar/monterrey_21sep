var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cuadricula_monterrey_21sep_1 = new ol.format.GeoJSON();
var features_cuadricula_monterrey_21sep_1 = format_cuadricula_monterrey_21sep_1.readFeatures(json_cuadricula_monterrey_21sep_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuadricula_monterrey_21sep_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuadricula_monterrey_21sep_1.addFeatures(features_cuadricula_monterrey_21sep_1);
var lyr_cuadricula_monterrey_21sep_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cuadricula_monterrey_21sep_1, 
                style: style_cuadricula_monterrey_21sep_1,
                interactive: true,
    title: 'cuadricula_monterrey_21sep<br />\
    <img src="styles/legend/cuadricula_monterrey_21sep_1_0.png" /> 0 - 3<br />\
    <img src="styles/legend/cuadricula_monterrey_21sep_1_1.png" /> 3 - 10<br />\
    <img src="styles/legend/cuadricula_monterrey_21sep_1_2.png" /> 10 - 15<br />\
    <img src="styles/legend/cuadricula_monterrey_21sep_1_3.png" /> 15 - 20<br />\
    <img src="styles/legend/cuadricula_monterrey_21sep_1_4.png" /> 20 - 25<br />\
    <img src="styles/legend/cuadricula_monterrey_21sep_1_5.png" /> 25 - 30<br />\
    <img src="styles/legend/cuadricula_monterrey_21sep_1_6.png" /> 30 - 35<br />\
    <img src="styles/legend/cuadricula_monterrey_21sep_1_7.png" /> 35 - 40<br />\
    <img src="styles/legend/cuadricula_monterrey_21sep_1_8.png" /> 40 - 45<br />\
    <img src="styles/legend/cuadricula_monterrey_21sep_1_9.png" /> 45 - 50<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_cuadricula_monterrey_21sep_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cuadricula_monterrey_21sep_1];
lyr_cuadricula_monterrey_21sep_1.set('fieldAliases', {'id': 'id', 'NUMPOINTS': 'NUMPOINTS', });
lyr_cuadricula_monterrey_21sep_1.set('fieldImages', {'id': 'Range', 'NUMPOINTS': 'TextEdit', });
lyr_cuadricula_monterrey_21sep_1.set('fieldLabels', {'id': 'header label', 'NUMPOINTS': 'header label', });
lyr_cuadricula_monterrey_21sep_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});