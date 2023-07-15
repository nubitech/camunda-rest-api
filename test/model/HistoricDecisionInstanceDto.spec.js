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
    describe('HistoricDecisionInstanceDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.HistoricDecisionInstanceDto();
      });

      it('should create an instance of HistoricDecisionInstanceDto', function() {
        // TODO: update the code to test HistoricDecisionInstanceDto
        expect(instance).to.be.a(CamundaRestApi.HistoricDecisionInstanceDto);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
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

      it('should have the property evaluationTime (base name: "evaluationTime")', function() {
        // TODO: update the code to test the property evaluationTime
        expect(instance).to.have.property('evaluationTime');
        // expect(instance.evaluationTime).to.be(expectedValueLiteral);
      });

      it('should have the property removalTime (base name: "removalTime")', function() {
        // TODO: update the code to test the property removalTime
        expect(instance).to.have.property('removalTime');
        // expect(instance.removalTime).to.be(expectedValueLiteral);
      });

      it('should have the property processDefinitionId (base name: "processDefinitionId")', function() {
        // TODO: update the code to test the property processDefinitionId
        expect(instance).to.have.property('processDefinitionId');
        // expect(instance.processDefinitionId).to.be(expectedValueLiteral);
      });

      it('should have the property processDefinitionKey (base name: "processDefinitionKey")', function() {
        // TODO: update the code to test the property processDefinitionKey
        expect(instance).to.have.property('processDefinitionKey');
        // expect(instance.processDefinitionKey).to.be(expectedValueLiteral);
      });

      it('should have the property processInstanceId (base name: "processInstanceId")', function() {
        // TODO: update the code to test the property processInstanceId
        expect(instance).to.have.property('processInstanceId');
        // expect(instance.processInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property caseDefinitionId (base name: "caseDefinitionId")', function() {
        // TODO: update the code to test the property caseDefinitionId
        expect(instance).to.have.property('caseDefinitionId');
        // expect(instance.caseDefinitionId).to.be(expectedValueLiteral);
      });

      it('should have the property caseDefinitionKey (base name: "caseDefinitionKey")', function() {
        // TODO: update the code to test the property caseDefinitionKey
        expect(instance).to.have.property('caseDefinitionKey');
        // expect(instance.caseDefinitionKey).to.be(expectedValueLiteral);
      });

      it('should have the property caseInstanceId (base name: "caseInstanceId")', function() {
        // TODO: update the code to test the property caseInstanceId
        expect(instance).to.have.property('caseInstanceId');
        // expect(instance.caseInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property activityId (base name: "activityId")', function() {
        // TODO: update the code to test the property activityId
        expect(instance).to.have.property('activityId');
        // expect(instance.activityId).to.be(expectedValueLiteral);
      });

      it('should have the property activityInstanceId (base name: "activityInstanceId")', function() {
        // TODO: update the code to test the property activityInstanceId
        expect(instance).to.have.property('activityInstanceId');
        // expect(instance.activityInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property tenantId (base name: "tenantId")', function() {
        // TODO: update the code to test the property tenantId
        expect(instance).to.have.property('tenantId');
        // expect(instance.tenantId).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "userId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property inputs (base name: "inputs")', function() {
        // TODO: update the code to test the property inputs
        expect(instance).to.have.property('inputs');
        // expect(instance.inputs).to.be(expectedValueLiteral);
      });

      it('should have the property ouputs (base name: "ouputs")', function() {
        // TODO: update the code to test the property ouputs
        expect(instance).to.have.property('ouputs');
        // expect(instance.ouputs).to.be(expectedValueLiteral);
      });

      it('should have the property collectResultValue (base name: "collectResultValue")', function() {
        // TODO: update the code to test the property collectResultValue
        expect(instance).to.have.property('collectResultValue');
        // expect(instance.collectResultValue).to.be(expectedValueLiteral);
      });

      it('should have the property rootDecisionInstanceId (base name: "rootDecisionInstanceId")', function() {
        // TODO: update the code to test the property rootDecisionInstanceId
        expect(instance).to.have.property('rootDecisionInstanceId');
        // expect(instance.rootDecisionInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property rootProcessInstanceId (base name: "rootProcessInstanceId")', function() {
        // TODO: update the code to test the property rootProcessInstanceId
        expect(instance).to.have.property('rootProcessInstanceId');
        // expect(instance.rootProcessInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property decisionRequirementsDefinitionId (base name: "decisionRequirementsDefinitionId")', function() {
        // TODO: update the code to test the property decisionRequirementsDefinitionId
        expect(instance).to.have.property('decisionRequirementsDefinitionId');
        // expect(instance.decisionRequirementsDefinitionId).to.be(expectedValueLiteral);
      });

      it('should have the property decisionRequirementsDefinitionKey (base name: "decisionRequirementsDefinitionKey")', function() {
        // TODO: update the code to test the property decisionRequirementsDefinitionKey
        expect(instance).to.have.property('decisionRequirementsDefinitionKey');
        // expect(instance.decisionRequirementsDefinitionKey).to.be(expectedValueLiteral);
      });

    });
  });

}));