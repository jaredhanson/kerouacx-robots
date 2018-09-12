exports = module.exports = function() {
  var kerouac = require('kerouac');
  
  
  var site = kerouac();
  site.page('/robots.txt', require('kerouac-robotstxt')({ mounted: true }));
  return site;
};

exports['@implements'] = [
  'http://i.kerouacjs.org/Site',
  'http://schemas.modulate.io/js/www/robots/WWWSite'
];
exports['@require'] = [];
