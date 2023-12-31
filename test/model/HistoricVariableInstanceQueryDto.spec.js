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
    describe('HistoricVariableInstanceQueryDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.HistoricVariableInstanceQueryDto();
      });

      it('should create an instance of HistoricVariableInstanceQueryDto', function() {
        // TODO: update the code to test HistoricVariableInstanceQueryDto
        expect(instance).to.be.a(CamundaRestApi.HistoricVariableInstanceQueryDto);
      });

      it('should have the property variableName (base name: "variableName")', function() {
        // TODO: update the code to test the property variableName
        expect(instance).to.have.property('variableName');
        // expect(instance.variableName).to.be(expectedValueLiteral);
      });

      it('should have the property variableNameLike (base name: "variableNameLike")', function() {
        // TODO: update the code to test the property variableNameLike
        expect(instance).to.have.property('variableNameLike');
        // expect(instance.variableNameLike).to.be(expectedValueLiteral);
      });

      it('should have the property variableValue (base name: "variableValue")', function() {
        // TODO: update the code to test the property variableValue
        expect(instance).to.have.property('variableValue');
        // expect(instance.variableValue).to.be(expectedValueLiteral);
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

      it('should have the property variableTypeIn (base name: "variableTypeIn")', function() {
        // TODO: update the code to test the property variableTypeIn
        expect(instance).to.have.property('variableTypeIn');
        // expect(instance.variableTypeIn).to.be(expectedValueLiteral);
      });

      it('should have the property includeDeleted (base name: "includeDeleted")', function() {
        // TODO: update the code to test the property includeDeleted
        expect(instance).to.have.property('includeDeleted');
        // expect(instance.includeDeleted).to.be(expectedValueLiteral);
      });

      it('should have the property processInstanceId (base name: "processInstanceId")', function() {
        // TODO: update the code to test the property processInstanceId
        expect(instance).to.have.property('processInstanceId');
        // expect(instance.processInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property processInstanceIdIn (base name: "processInstanceIdIn")', function() {
        // TODO: update the code to test the property processInstanceIdIn
        expect(instance).to.have.property('processInstanceIdIn');
        // expect(instance.processInstanceIdIn).to.be(expectedValueLiteral);
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

      it('should have the property executionIdIn (base name: "executionIdIn")', function() {
        // TODO: update the code to test the property executionIdIn
        expect(instance).to.have.property('executionIdIn');
        // expect(instance.executionIdIn).to.be(expectedValueLiteral);
      });

      it('should have the property caseInstanceId (base name: "caseInstanceId")', function() {
        // TODO: update the code to test the property caseInstanceId
        expect(instance).to.have.property('caseInstanceId');
        // expect(instance.caseInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property caseExecutionIdIn (base name: "caseExecutionIdIn")', function() {
        // TODO: update the code to test the property caseExecutionIdIn
        expect(instance).to.have.property('caseExecutionIdIn');
        // expect(instance.caseExecutionIdIn).to.be(expectedValueLiteral);
      });

      it('should have the property caseActivityIdIn (base name: "caseActivityIdIn")', function() {
        // TODO: update the code to test the property caseActivityIdIn
        expect(instance).to.have.property('caseActivityIdIn');
        // expect(instance.caseActivityIdIn).to.be(expectedValueLiteral);
      });

      it('should have the property taskIdIn (base name: "taskIdIn")', function() {
        // TODO: update the code to test the property taskIdIn
        expect(instance).to.have.property('taskIdIn');
        // expect(instance.taskIdIn).to.be(expectedValueLiteral);
      });

      it('should have the property activityInstanceIdIn (base name: "activityInstanceIdIn")', function() {
        // TODO: update the code to test the property activityInstanceIdIn
        expect(instance).to.have.property('activityInstanceIdIn');
        // expect(instance.activityInstanceIdIn).to.be(expectedValueLiteral);
      });

      it('should have the property tenantIdIn (base name: "tenantIdIn")', function() {
        // TODO: update the code to test the property tenantIdIn
        expect(instance).to.have.property('tenantIdIn');
        // expect(instance.tenantIdIn).to.be(expectedValueLiteral);
      });

      it('should have the property withoutTenantId (base name: "withoutTenantId")', function() {
        // TODO: update the code to test the property withoutTenantId
        expect(instance).to.have.property('withoutTenantId');
        // expect(instance.withoutTenantId).to.be(expectedValueLiteral);
      });

      it('should have the property variableNameIn (base name: "variableNameIn")', function() {
        // TODO: update the code to test the property variableNameIn
        expect(instance).to.have.property('variableNameIn');
        // expect(instance.variableNameIn).to.be(expectedValueLiteral);
      });

      it('should have the property sorting (base name: "sorting")', function() {
        // TODO: update the code to test the property sorting
        expect(instance).to.have.property('sorting');
        // expect(instance.sorting).to.be(expectedValueLiteral);
      });

    });
  });

}));
