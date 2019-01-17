exports = module.exports = function() {
  var kerouac = require('kerouac');
  
  
  var site = kerouac();
  site.page('/robots.txt', require('kerouac-robotstxt')({ mounted: true }));
  return site;
};

exports['@implements'] = 'http://i.kerouacjs.org/Site';
exports['@require'] = [];
