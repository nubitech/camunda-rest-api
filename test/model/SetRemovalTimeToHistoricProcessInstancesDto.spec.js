/*
 * Camunda Platform REST API
 * OpenApi Spec for Camunda Platform REST API.
 *
 * OpenAPI spec version: 7.20.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CamundaRestApi);
  }
}(this, function(expect, CamundaRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SetRemovalTimeToHistoricProcessInstancesDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.SetRemovalTimeToHistoricProcessInstancesDto();
      });

      it('should create an instance of SetRemovalTimeToHistoricProcessInstancesDto', function() {
        // TODO: update the code to test SetRemovalTimeToHistoricProcessInstancesDto
        expect(instance).to.be.a(CamundaRestApi.SetRemovalTimeToHistoricProcessInstancesDto);
      });

      it('should have the property absoluteRemovalTime (base name: "absoluteRemovalTime")', function() {
        // TODO: update the code to test the property absoluteRemovalTime
        expect(instance).to.have.property('absoluteRemovalTime');
        // expect(instance.absoluteRemovalTime).to.be(expectedValueLiteral);
      });

      it('should have the property clearedRemovalTime (base name: "clearedRemovalTime")', function() {
        // TODO: update the code to test the property clearedRemovalTime
        expect(instance).to.have.property('clearedRemovalTime');
        // expect(instance.clearedRemovalTime).to.be(expectedValueLiteral);
      });

      it('should have the property calculatedRemovalTime (base name: "calculatedRemovalTime")', function() {
        // TODO: update the code to test the property calculatedRemovalTime
        expect(instance).to.have.property('calculatedRemovalTime');
        // expect(instance.calculatedRemovalTime).to.be(expectedValueLiteral);
      });

    });
  });

}));
