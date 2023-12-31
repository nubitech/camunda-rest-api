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
    describe('HistoricDetailDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.HistoricDetailDto();
      });

      it('should create an instance of HistoricDetailDto', function() {
        // TODO: update the code to test HistoricDetailDto
        expect(instance).to.be.a(CamundaRestApi.HistoricDetailDto);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
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

      it('should have the property processInstanceId (base name: "processInstanceId")', function() {
        // TODO: update the code to test the property processInstanceId
        expect(instance).to.have.property('processInstanceId');
        // expect(instance.processInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property activityInstanceId (base name: "activityInstanceId")', function() {
        // TODO: update the code to test the property activityInstanceId
        expect(instance).to.have.property('activityInstanceId');
        // expect(instance.activityInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property executionId (base name: "executionId")', function() {
        // TODO: update the code to test the property executionId
        expect(instance).to.have.property('executionId');
        // expect(instance.executionId).to.be(expectedValueLiteral);
      });

      it('should have the property caseDefinitionKey (base name: "caseDefinitionKey")', function() {
        // TODO: update the code to test the property caseDefinitionKey
        expect(instance).to.have.property('caseDefinitionKey');
        // expect(instance.caseDefinitionKey).to.be(expectedValueLiteral);
      });

      it('should have the property caseDefinitionId (base name: "caseDefinitionId")', function() {
        // TODO: update the code to test the property caseDefinitionId
        expect(instance).to.have.property('caseDefinitionId');
        // expect(instance.caseDefinitionId).to.be(expectedValueLiteral);
      });

      it('should have the property caseInstanceId (base name: "caseInstanceId")', function() {
        // TODO: update the code to test the property caseInstanceId
        expect(instance).to.have.property('caseInstanceId');
        // expect(instance.caseInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property caseExecutionId (base name: "caseExecutionId")', function() {
        // TODO: update the code to test the property caseExecutionId
        expect(instance).to.have.property('caseExecutionId');
        // expect(instance.caseExecutionId).to.be(expectedValueLiteral);
      });

      it('should have the property taskId (base name: "taskId")', function() {
        // TODO: update the code to test the property taskId
        expect(instance).to.have.property('taskId');
        // expect(instance.taskId).to.be(expectedValueLiteral);
      });

      it('should have the property tenantId (base name: "tenantId")', function() {
        // TODO: update the code to test the property tenantId
        expect(instance).to.have.property('tenantId');
        // expect(instance.tenantId).to.be(expectedValueLiteral);
      });

      it('should have the property userOperationId (base name: "userOperationId")', function() {
        // TODO: update the code to test the property userOperationId
        expect(instance).to.have.property('userOperationId');
        // expect(instance.userOperationId).to.be(expectedValueLiteral);
      });

      it('should have the property time (base name: "time")', function() {
        // TODO: update the code to test the property time
        expect(instance).to.have.property('time');
        // expect(instance.time).to.be(expectedValueLiteral);
      });

      it('should have the property removalTime (base name: "removalTime")', function() {
        // TODO: update the code to test the property removalTime
        expect(instance).to.have.property('removalTime');
        // expect(instance.removalTime).to.be(expectedValueLiteral);
      });

      it('should have the property rootProcessInstanceId (base name: "rootProcessInstanceId")', function() {
        // TODO: update the code to test the property rootProcessInstanceId
        expect(instance).to.have.property('rootProcessInstanceId');
        // expect(instance.rootProcessInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property fieldId (base name: "fieldId")', function() {
        // TODO: update the code to test the property fieldId
        expect(instance).to.have.property('fieldId');
        // expect(instance.fieldId).to.be(expectedValueLiteral);
      });

      it('should have the property fieldValue (base name: "fieldValue")', function() {
        // TODO: update the code to test the property fieldValue
        expect(instance).to.have.property('fieldValue');
        // expect(instance.fieldValue).to.be(expectedValueLiteral);
      });

      it('should have the property variableName (base name: "variableName")', function() {
        // TODO: update the code to test the property variableName
        expect(instance).to.have.property('variableName');
        // expect(instance.variableName).to.be(expectedValueLiteral);
      });

      it('should have the property variableInstanceId (base name: "variableInstanceId")', function() {
        // TODO: update the code to test the property variableInstanceId
        expect(instance).to.have.property('variableInstanceId');
        // expect(instance.variableInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property variableType (base name: "variableType")', function() {
        // TODO: update the code to test the property variableType
        expect(instance).to.have.property('variableType');
        // expect(instance.variableType).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

      it('should have the property valueInfo (base name: "valueInfo")', function() {
        // TODO: update the code to test the property valueInfo
        expect(instance).to.have.property('valueInfo');
        // expect(instance.valueInfo).to.be(expectedValueLiteral);
      });

      it('should have the property initial (base name: "initial")', function() {
        // TODO: update the code to test the property initial
        expect(instance).to.have.property('initial');
        // expect(instance.initial).to.be(expectedValueLiteral);
      });

      it('should have the property revision (base name: "revision")', function() {
        // TODO: update the code to test the property revision
        expect(instance).to.have.property('revision');
        // expect(instance.revision).to.be(expectedValueLiteral);
      });

      it('should have the property errorMessage (base name: "errorMessage")', function() {
        // TODO: update the code to test the property errorMessage
        expect(instance).to.have.property('errorMessage');
        // expect(instance.errorMessage).to.be(expectedValueLiteral);
      });

    });
  });

}));
