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
    describe('CleanableHistoricDecisionInstanceReportResultDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.CleanableHistoricDecisionInstanceReportResultDto();
      });

      it('should create an instance of CleanableHistoricDecisionInstanceReportResultDto', function() {
        // TODO: update the code to test CleanableHistoricDecisionInstanceReportResultDto
        expect(instance).to.be.a(CamundaRestApi.CleanableHistoricDecisionInstanceReportResultDto);
      });

      it('should have the property decisionDefinitionId (base name: "decisionDefinitionId")', function() {
        // TODO: update the code to test the property decisionDefinitionId
        expect(instance).to.have.property('decisionDefinitionId');
        // expect(instance.decisionDefinitionId).to.be(expectedValueLiteral);
      });

      it('should have the property decisionDefinitionKey (base name: "decisionDefinitionKey")', function() {
        // TODO: update the code to test the property decisionDefinitionKey
        expect(instance).to.have.property('decisionDefinitionKey');
        // expect(instance.decisionDefinitionKey).to.be(expectedValueLiteral);
      });

      it('should have the property decisionDefinitionName (base name: "decisionDefinitionName")', function() {
        // TODO: update the code to test the property decisionDefinitionName
        expect(instance).to.have.property('decisionDefinitionName');
        // expect(instance.decisionDefinitionName).to.be(expectedValueLiteral);
      });

      it('should have the property decisionDefinitionVersion (base name: "decisionDefinitionVersion")', function() {
        // TODO: update the code to test the property decisionDefinitionVersion
        expect(instance).to.have.property('decisionDefinitionVersion');
        // expect(instance.decisionDefinitionVersion).to.be(expectedValueLiteral);
      });

      it('should have the property historyTimeToLive (base name: "historyTimeToLive")', function() {
        // TODO: update the code to test the property historyTimeToLive
        expect(instance).to.have.property('historyTimeToLive');
        // expect(instance.historyTimeToLive).to.be(expectedValueLiteral);
      });

      it('should have the property finishedDecisionInstanceCount (base name: "finishedDecisionInstanceCount")', function() {
        // TODO: update the code to test the property finishedDecisionInstanceCount
        expect(instance).to.have.property('finishedDecisionInstanceCount');
        // expect(instance.finishedDecisionInstanceCount).to.be(expectedValueLiteral);
      });

      it('should have the property cleanableDecisionInstanceCount (base name: "cleanableDecisionInstanceCount")', function() {
        // TODO: update the code to test the property cleanableDecisionInstanceCount
        expect(instance).to.have.property('cleanableDecisionInstanceCount');
        // expect(instance.cleanableDecisionInstanceCount).to.be(expectedValueLiteral);
      });

      it('should have the property tenantId (base name: "tenantId")', function() {
        // TODO: update the code to test the property tenantId
        expect(instance).to.have.property('tenantId');
        // expect(instance.tenantId).to.be(expectedValueLiteral);
      });

    });
  });

}));