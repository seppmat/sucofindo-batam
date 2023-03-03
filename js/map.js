var chart = am4core.create("chartdiv", am4maps.MapChart);

chart.geodata = am4geodata_worldLow;

chart.projection = new am4maps.projections.Miller();

var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

polygonSeries.useGeodata = true;

var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#012970");

var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#012970");

polygonSeries.include = ["ID"];

if (chart.logo) {
    chart.logo.disabled = true;
}

