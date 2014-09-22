

var StreamChart = {

  draw: function(element, layers, cfg) {
    var n = 20, // number of layers
        m = 200, // number of samples per layer
        stack = d3.layout.stack().offset("wiggle"),
        stackedLayers = stack(layers);

    var width = 700,
        height = 300;

    var x = d3.scale.linear()
        .domain([0, m - 1])
        .range([0, width]);

    var y = d3.scale.linear()
        .domain([0, d3.max(stackedLayers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); })])
        .range([height, 0]);

    var color = d3.scale.category10();

    var area = d3.svg.area()
        .x(function(d) { return x(d.x); })
        .y0(function(d) { return y(d.y0); })
        .y1(function(d) { return y(d.y0 + d.y); });

    var svg = d3.select(element)

    svg.selectAll("path")
        .data(stackedLayers)
      .enter().append("path")
        .attr("d", area)
        .style("fill", function() { return color(Math.random()); });
  }
};
