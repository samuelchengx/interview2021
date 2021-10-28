define(function(require) {
  var Spinning = null
  setTimeout(()=>{
    Spinning = require('./spinning');
    var s = new Spinning('#container');
    s.render();
  }, 10000)
});

