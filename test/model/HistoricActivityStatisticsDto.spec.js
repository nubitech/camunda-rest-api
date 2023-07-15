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
    describe('HistoricActivityStatisticsDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.HistoricActivityStatisticsDto();
      });

      it('should create an instance of HistoricActivityStatisticsDto', function() {
        // TODO: update the code to test HistoricActivityStatisticsDto
        expect(instance).to.be.a(CamundaRestApi.HistoricActivityStatisticsDto);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property instances (base name: "instances")', function() {
        // TODO: update the code to test the property instances
        expect(instance).to.have.property('instances');
        // expect(instance.instances).to.be(expectedValueLiteral);
      });

      it('should have the property canceled (base name: "canceled")', function() {
        // TODO: update the code to test the property canceled
        expect(instance).to.have.property('canceled');
        // expect(instance.canceled).to.be(expectedValueLiteral);
      });

      it('should have the property finished (base name: "finished")', function() {
        // TODO: update the code to test the property finished
        expect(instance).to.have.property('finished');
        // expect(instance.finished).to.be(expectedValueLiteral);
      });

      it('should have the property completeScope (base name: "completeScope")', function() {
        // TODO: update the code to test the property completeScope
        expect(instance).to.have.property('completeScope');
        // expect(instance.completeScope).to.be(expectedValueLiteral);
      });

      it('should have the property openIncidents (base name: "openIncidents")', function() {
        // TODO: update the code to test the property openIncidents
        expect(instance).to.have.property('openIncidents');
        // expect(instance.openIncidents).to.be(expectedValueLiteral);
      });

      it('should have the property resolvedIncidents (base name: "resolvedIncidents")', function() {
        // TODO: update the code to test the property resolvedIncidents
        expect(instance).to.have.property('resolvedIncidents');
        // expect(instance.resolvedIncidents).to.be(expectedValueLiteral);
      });

      it('should have the property deletedIncidents (base name: "deletedIncidents")', function() {
        // TODO: update the code to test the property deletedIncidents
        expect(instance).to.have.property('deletedIncidents');
        // expect(instance.deletedIncidents).to.be(expectedValueLiteral);
      });

    });
  });

}));
