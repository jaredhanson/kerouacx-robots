/* global describe, it */

var expect = require('chai').expect;


describe('@kerouac/robots', function() {
  
  describe('package.json', function() {
    var json = require('../package.json');
    
    it('should have assembly metadata', function() {
      expect(json.assembly.namespace).to.equal('org.kerouacjs/robots');
      
      expect(json.assembly.components).to.have.length(1);
      expect(json.assembly.components).to.include('site');
    });
  });
  
  it('should throw if required', function() {
    expect(function() {
      var pkg = require('..');
    }).to.throw(Error).with.property('code', 'MODULE_NOT_FOUND');
  });
  
});
