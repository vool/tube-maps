var container = d3.select("#tube-map");
var width = 1600;
var height = 1000;

var map = d3
    .tubeMap()
    .width(width)
    .height(height)
    .margin({
        top: 20,
        right: 20,
        bottom: 40,
        left: 20,
    });

d3.json("/assets/data/fenit_pubs.json").then(function (data) {
    container.datum(data).call(map);

    var svg = container.select("svg");
    zoom = d3.zoom().scaleExtent([0, 5]).on("zoom", zoomed);

    var zoomContainer = svg.call(zoom);
    var initialScale = 0.45;
    var initialTranslate = [-300, -100];

    zoom.scaleTo(zoomContainer, initialScale);
    zoom.translateTo(
        zoomContainer,
        initialTranslate[0],
        initialTranslate[1]
    );

    function zoomed(event) {
        svg.select("g").attr("transform", event.transform.toString());
    }
});