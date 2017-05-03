var Konva = require('./dist/konva-dev');
var fs = require('fs');

var layer = new Konva.Layer();
var rect = new Konva.Rect({
  x: 10, y: 20,
  height: 40,
  width: 30,
  fill: 'blue'
});

layer.add(rect);
// var stage = new Konva.Stage({
//   height: 300,
//   width: 300
// });

// console.log(layer.getCanvas()._canvas.toDataURL);
// stage.add(layer);
//
//
// var canvas = stage.toCanvas({
//   width: 200,
//   height: 200
// });
var canvas = layer.toCanvas({
  height: 200,
  width: 200
});

canvas.toBuffer(function(e, b){
  fs.writeFileSync('image.png', b);
});
// canvas.width = 300
// canvas.height = 300
// layer.draw();
// var bf = canvas.toBuffer();
// console.log(bf);
// fs.writeFile('image.png', bf)
// stage.add(layer);

// console.log(stage.toDataURL());
