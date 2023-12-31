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
    describe('HistoricExternalTaskLogQueryDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.HistoricExternalTaskLogQueryDto();
      });

      it('should create an instance of HistoricExternalTaskLogQueryDto', function() {
        // TODO: update the code to test HistoricExternalTaskLogQueryDto
        expect(instance).to.be.a(CamundaRestApi.HistoricExternalTaskLogQueryDto);
      });

      it('should have the property logId (base name: "logId")', function() {
        // TODO: update the code to test the property logId
        expect(instance).to.have.property('logId');
        // expect(instance.logId).to.be(expectedValueLiteral);
      });

      it('should have the property externalTaskId (base name: "externalTaskId")', function() {
        // TODO: update the code to test the property externalTaskId
        expect(instance).to.have.property('externalTaskId');
        // expect(instance.externalTaskId).to.be(expectedValueLiteral);
      });

      it('should have the property topicName (base name: "topicName")', function() {
        // TODO: update the code to test the property topicName
        expect(instance).to.have.property('topicName');
        // expect(instance.topicName).to.be(expectedValueLiteral);
      });

      it('should have the property workerId (base name: "workerId")', function() {
        // TODO: update the code to test the property workerId
        expect(instance).to.have.property('workerId');
        // expect(instance.workerId).to.be(expectedValueLiteral);
      });

      it('should have the property errorMessage (base name: "errorMessage")', function() {
        // TODO: update the code to test the property errorMessage
        expect(instance).to.have.property('errorMessage');
        // expect(instance.errorMessage).to.be(expectedValueLiteral);
      });

      it('should have the property activityIdIn (base name: "activityIdIn")', function() {
        // TODO: update the code to test the property activityIdIn
        expect(instance).to.have.property('activityIdIn');
        // expect(instance.activityIdIn).to.be(expectedValueLiteral);
      });

      it('should have the property activityInstanceIdIn (base name: "activityInstanceIdIn")', function() {
        // TODO: update the code to test the property activityInstanceIdIn
        expect(instance).to.have.property('activityInstanceIdIn');
        // expect(instance.activityInstanceIdIn).to.be(expectedValueLiteral);
      });

      it('should have the property executionIdIn (base name: "executionIdIn")', function() {
        // TODO: update the code to test the property executionIdIn
        expect(instance).to.have.property('executionIdIn');
        // expect(instance.executionIdIn).to.be(expectedValueLiteral);
      });

      it('should have the property processInstanceId (base name: "processInstanceId")', function() {
        // TODO: update the code to test the property processInstanceId
        expect(instance).to.have.property('processInstanceId');
        // expect(instance.processInstanceId).to.be(expectedValueLiteral);
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

      it('should have the property priorityLowerThanOrEquals (base name: "priorityLowerThanOrEquals")', function() {
        // TODO: update the code to test the property priorityLowerThanOrEquals
        expect(instance).to.have.property('priorityLowerThanOrEquals');
        // expect(instance.priorityLowerThanOrEquals).to.be(expectedValueLiteral);
      });

      it('should have the property priorityHigherThanOrEquals (base name: "priorityHigherThanOrEquals")', function() {
        // TODO: update the code to test the property priorityHigherThanOrEquals
        expect(instance).to.have.property('priorityHigherThanOrEquals');
        // expect(instance.priorityHigherThanOrEquals).to.be(expectedValueLiteral);
      });

      it('should have the property creationLog (base name: "creationLog")', function() {
        // TODO: update the code to test the property creationLog
        expect(instance).to.have.property('creationLog');
        // expect(instance.creationLog).to.be(expectedValueLiteral);
      });

      it('should have the property failureLog (base name: "failureLog")', function() {
        // TODO: update the code to test the property failureLog
        expect(instance).to.have.property('failureLog');
        // expect(instance.failureLog).to.be(expectedValueLiteral);
      });

      it('should have the property successLog (base name: "successLog")', function() {
        // TODO: update the code to test the property successLog
        expect(instance).to.have.property('successLog');
        // expect(instance.successLog).to.be(expectedValueLiteral);
      });

      it('should have the property deletionLog (base name: "deletionLog")', function() {
        // TODO: update the code to test the property deletionLog
        expect(instance).to.have.property('deletionLog');
        // expect(instance.deletionLog).to.be(expectedValueLiteral);
      });

      it('should have the property sorting (base name: "sorting")', function() {
        // TODO: update the code to test the property sorting
        expect(instance).to.have.property('sorting');
        // expect(instance.sorting).to.be(expectedValueLiteral);
      });

    });
  });

}));
