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
    describe('HistoricTaskInstanceReportResultDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.HistoricTaskInstanceReportResultDto();
      });

      it('should create an instance of HistoricTaskInstanceReportResultDto', function() {
        // TODO: update the code to test HistoricTaskInstanceReportResultDto
        expect(instance).to.be.a(CamundaRestApi.HistoricTaskInstanceReportResultDto);
      });

      it('should have the property taskName (base name: "taskName")', function() {
        // TODO: update the code to test the property taskName
        expect(instance).to.have.property('taskName');
        // expect(instance.taskName).to.be(expectedValueLiteral);
      });

      it('should have the property count (base name: "count")', function() {
        // TODO: update the code to test the property count
        expect(instance).to.have.property('count');
        // expect(instance.count).to.be(expectedValueLiteral);
      });

      it('should have the property processDefinitionKey (base name: "processDefinitionKey")', function() {
        // TODO: update the code to test the property processDefinitionKey
        expect(instance).to.have.property('processDefinitionKey');
        // expect(instance.processDefinitionKey).to.be(expectedValueLiteral);
      });

      it('should have the property processDefinitionId (base name: "processDefinitionId")', function() {
        // TODO: update the code to test the property processDefinitionId
        expect(instance).to.have.property('processDefinitionId');
        // expect(instance.processDefinitionId).to.be(expectedValueLiteral);
      });

      it('should have the property processDefinitionName (base name: "processDefinitionName")', function() {
        // TODO: update the code to test the property processDefinitionName
        expect(instance).to.have.property('processDefinitionName');
        // expect(instance.processDefinitionName).to.be(expectedValueLiteral);
      });

      it('should have the property period (base name: "period")', function() {
        // TODO: update the code to test the property period
        expect(instance).to.have.property('period');
        // expect(instance.period).to.be(expectedValueLiteral);
      });

      it('should have the property periodUnit (base name: "periodUnit")', function() {
        // TODO: update the code to test the property periodUnit
        expect(instance).to.have.property('periodUnit');
        // expect(instance.periodUnit).to.be(expectedValueLiteral);
      });

      it('should have the property minimum (base name: "minimum")', function() {
        // TODO: update the code to test the property minimum
        expect(instance).to.have.property('minimum');
        // expect(instance.minimum).to.be(expectedValueLiteral);
      });

      it('should have the property maximum (base name: "maximum")', function() {
        // TODO: update the code to test the property maximum
        expect(instance).to.have.property('maximum');
        // expect(instance.maximum).to.be(expectedValueLiteral);
      });

      it('should have the property average (base name: "average")', function() {
        // TODO: update the code to test the property average
        expect(instance).to.have.property('average');
        // expect(instance.average).to.be(expectedValueLiteral);
      });

    });
  });

}));
