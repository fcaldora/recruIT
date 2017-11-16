
		var data = { a: 3, b: 7, c: 10, d: 4, e: 5 };

var height = 100;
var width = 100;
var radius = 50;

var chart = d3.select('svg.chart')
    .attr('width', width)
    .attr('height', height)
    .append('g');

var scale = d3.scale.linear()
  .domain([0, 10])
  .range([0, radius]);

var props = 0;
for(var p in data) {
  props++;
}

var radians = 2 * Math.PI / props;
var radiansAcc = 0 - 0.5 * Math.PI;

var startCoords = [];
var endCoords = [];

for(var p in data) {
  debugger;
  var x = radius * Math.cos(radiansAcc);
  var y = radius * Math.sin(radiansAcc);
  
  chart.append('line')
    .attr('class', 'axis')
    .attr('x1', radius)
    .attr('y1', radius)
    .attr('x2', radius)
    .attr('y2', radius)
    .transition()
    .ease('linear')
    .duration(500)
    .attr('x2', radius + x)
    .attr('y2', radius + y);
  
  startCoords.push(radius.toString() + ',' + radius.toString());
  
  x = radius + scale(data[p]) * Math.cos(radiansAcc);
  y = radius + scale(data[p]) * Math.sin(radiansAcc);
  
  endCoords.push(x.toString() + ',' + y.toString());
  
  radiansAcc += radians;
}

chart.append('path')
  .attr('class', 'star')
  .attr('d', buildPathCoords(startCoords))
  .transition()
  .ease('linear')
  .delay(500)
  .duration(1000)
  .attr('d', buildPathCoords(endCoords));

function buildPathCoords(coords) {
  var coordStr = '';
  for(var i = 0; i < coords.length; i++) {
    if(i === 0) {
      coordStr += 'M';
    } else {
      coordStr += 'L';
    }
    
    coordStr += coords[i] + ' ';
    
    if(i === coords.length - 1) {
      coordStr += 'Z';
    }
  }
  return coordStr;
}
