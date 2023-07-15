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
    describe('ExecutionQueryDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.ExecutionQueryDto();
      });

      it('should create an instance of ExecutionQueryDto', function() {
        // TODO: update the code to test ExecutionQueryDto
        expect(instance).to.be.a(CamundaRestApi.ExecutionQueryDto);
      });

      it('should have the property businessKey (base name: "businessKey")', function() {
        // TODO: update the code to test the property businessKey
        expect(instance).to.have.property('businessKey');
        // expect(instance.businessKey).to.be(expectedValueLiteral);
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

      it('should have the property activityId (base name: "activityId")', function() {
        // TODO: update the code to test the property activityId
        expect(instance).to.have.property('activityId');
        // expect(instance.activityId).to.be(expectedValueLiteral);
      });

      it('should have the property signalEventSubscriptionName (base name: "signalEventSubscriptionName")', function() {
        // TODO: update the code to test the property signalEventSubscriptionName
        expect(instance).to.have.property('signalEventSubscriptionName');
        // expect(instance.signalEventSubscriptionName).to.be(expectedValueLiteral);
      });

      it('should have the property messageEventSubscriptionName (base name: "messageEventSubscriptionName")', function() {
        // TODO: update the code to test the property messageEventSubscriptionName
        expect(instance).to.have.property('messageEventSubscriptionName');
        // expect(instance.messageEventSubscriptionName).to.be(expectedValueLiteral);
      });

      it('should have the property active (base name: "active")', function() {
        // TODO: update the code to test the property active
        expect(instance).to.have.property('active');
        // expect(instance.active).to.be(expectedValueLiteral);
      });

      it('should have the property suspended (base name: "suspended")', function() {
        // TODO: update the code to test the property suspended
        expect(instance).to.have.property('suspended');
        // expect(instance.suspended).to.be(expectedValueLiteral);
      });

      it('should have the property incidentId (base name: "incidentId")', function() {
        // TODO: update the code to test the property incidentId
        expect(instance).to.have.property('incidentId');
        // expect(instance.incidentId).to.be(expectedValueLiteral);
      });

      it('should have the property incidentType (base name: "incidentType")', function() {
        // TODO: update the code to test the property incidentType
        expect(instance).to.have.property('incidentType');
        // expect(instance.incidentType).to.be(expectedValueLiteral);
      });

      it('should have the property incidentMessage (base name: "incidentMessage")', function() {
        // TODO: update the code to test the property incidentMessage
        expect(instance).to.have.property('incidentMessage');
        // expect(instance.incidentMessage).to.be(expectedValueLiteral);
      });

      it('should have the property incidentMessageLike (base name: "incidentMessageLike")', function() {
        // TODO: update the code to test the property incidentMessageLike
        expect(instance).to.have.property('incidentMessageLike');
        // expect(instance.incidentMessageLike).to.be(expectedValueLiteral);
      });

      it('should have the property tenantIdIn (base name: "tenantIdIn")', function() {
        // TODO: update the code to test the property tenantIdIn
        expect(instance).to.have.property('tenantIdIn');
        // expect(instance.tenantIdIn).to.be(expectedValueLiteral);
      });

      it('should have the property variables (base name: "variables")', function() {
        // TODO: update the code to test the property variables
        expect(instance).to.have.property('variables');
        // expect(instance.variables).to.be(expectedValueLiteral);
      });

      it('should have the property processVariables (base name: "processVariables")', function() {
        // TODO: update the code to test the property processVariables
        expect(instance).to.have.property('processVariables');
        // expect(instance.processVariables).to.be(expectedValueLiteral);
      });

      it('should have the property variableNamesIgnoreCase (base name: "variableNamesIgnoreCase")', function() {
        // TODO: update the code to test the property variableNamesIgnoreCase
        expect(instance).to.have.property('variableNamesIgnoreCase');
        // expect(instance.variableNamesIgnoreCase).to.be(expectedValueLiteral);
      });

      it('should have the property variableValuesIgnoreCase (base name: "variableValuesIgnoreCase")', function() {
        // TODO: update the code to test the property variableValuesIgnoreCase
        expect(instance).to.have.property('variableValuesIgnoreCase');
        // expect(instance.variableValuesIgnoreCase).to.be(expectedValueLiteral);
      });

      it('should have the property sorting (base name: "sorting")', function() {
        // TODO: update the code to test the property sorting
        expect(instance).to.have.property('sorting');
        // expect(instance.sorting).to.be(expectedValueLiteral);
      });

    });
  });

}));