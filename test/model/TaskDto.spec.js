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
    describe('TaskDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.TaskDto();
      });

      it('should create an instance of TaskDto', function() {
        // TODO: update the code to test TaskDto
        expect(instance).to.be.a(CamundaRestApi.TaskDto);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property assignee (base name: "assignee")', function() {
        // TODO: update the code to test the property assignee
        expect(instance).to.have.property('assignee');
        // expect(instance.assignee).to.be(expectedValueLiteral);
      });

      it('should have the property owner (base name: "owner")', function() {
        // TODO: update the code to test the property owner
        expect(instance).to.have.property('owner');
        // expect(instance.owner).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property lastUpdated (base name: "lastUpdated")', function() {
        // TODO: update the code to test the property lastUpdated
        expect(instance).to.have.property('lastUpdated');
        // expect(instance.lastUpdated).to.be(expectedValueLiteral);
      });

      it('should have the property due (base name: "due")', function() {
        // TODO: update the code to test the property due
        expect(instance).to.have.property('due');
        // expect(instance.due).to.be(expectedValueLiteral);
      });

      it('should have the property followUp (base name: "followUp")', function() {
        // TODO: update the code to test the property followUp
        expect(instance).to.have.property('followUp');
        // expect(instance.followUp).to.be(expectedValueLiteral);
      });

      it('should have the property delegationState (base name: "delegationState")', function() {
        // TODO: update the code to test the property delegationState
        expect(instance).to.have.property('delegationState');
        // expect(instance.delegationState).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property executionId (base name: "executionId")', function() {
        // TODO: update the code to test the property executionId
        expect(instance).to.have.property('executionId');
        // expect(instance.executionId).to.be(expectedValueLiteral);
      });

      it('should have the property parentTaskId (base name: "parentTaskId")', function() {
        // TODO: update the code to test the property parentTaskId
        expect(instance).to.have.property('parentTaskId');
        // expect(instance.parentTaskId).to.be(expectedValueLiteral);
      });

      it('should have the property priority (base name: "priority")', function() {
        // TODO: update the code to test the property priority
        expect(instance).to.have.property('priority');
        // expect(instance.priority).to.be(expectedValueLiteral);
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

      it('should have the property caseExecutionId (base name: "caseExecutionId")', function() {
        // TODO: update the code to test the property caseExecutionId
        expect(instance).to.have.property('caseExecutionId');
        // expect(instance.caseExecutionId).to.be(expectedValueLiteral);
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

      it('should have the property taskDefinitionKey (base name: "taskDefinitionKey")', function() {
        // TODO: update the code to test the property taskDefinitionKey
        expect(instance).to.have.property('taskDefinitionKey');
        // expect(instance.taskDefinitionKey).to.be(expectedValueLiteral);
      });

      it('should have the property suspended (base name: "suspended")', function() {
        // TODO: update the code to test the property suspended
        expect(instance).to.have.property('suspended');
        // expect(instance.suspended).to.be(expectedValueLiteral);
      });

      it('should have the property formKey (base name: "formKey")', function() {
        // TODO: update the code to test the property formKey
        expect(instance).to.have.property('formKey');
        // expect(instance.formKey).to.be(expectedValueLiteral);
      });

      it('should have the property camundaFormRef (base name: "camundaFormRef")', function() {
        // TODO: update the code to test the property camundaFormRef
        expect(instance).to.have.property('camundaFormRef');
        // expect(instance.camundaFormRef).to.be(expectedValueLiteral);
      });

      it('should have the property tenantId (base name: "tenantId")', function() {
        // TODO: update the code to test the property tenantId
        expect(instance).to.have.property('tenantId');
        // expect(instance.tenantId).to.be(expectedValueLiteral);
      });

    });
  });

}));
