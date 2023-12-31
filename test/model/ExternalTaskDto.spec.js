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
    describe('ExternalTaskDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.ExternalTaskDto();
      });

      it('should create an instance of ExternalTaskDto', function() {
        // TODO: update the code to test ExternalTaskDto
        expect(instance).to.be.a(CamundaRestApi.ExternalTaskDto);
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

      it('should have the property errorMessage (base name: "errorMessage")', function() {
        // TODO: update the code to test the property errorMessage
        expect(instance).to.have.property('errorMessage');
        // expect(instance.errorMessage).to.be(expectedValueLiteral);
      });

      it('should have the property executionId (base name: "executionId")', function() {
        // TODO: update the code to test the property executionId
        expect(instance).to.have.property('executionId');
        // expect(instance.executionId).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property lockExpirationTime (base name: "lockExpirationTime")', function() {
        // TODO: update the code to test the property lockExpirationTime
        expect(instance).to.have.property('lockExpirationTime');
        // expect(instance.lockExpirationTime).to.be(expectedValueLiteral);
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

      it('should have the property processDefinitionVersionTag (base name: "processDefinitionVersionTag")', function() {
        // TODO: update the code to test the property processDefinitionVersionTag
        expect(instance).to.have.property('processDefinitionVersionTag');
        // expect(instance.processDefinitionVersionTag).to.be(expectedValueLiteral);
      });

      it('should have the property processInstanceId (base name: "processInstanceId")', function() {
        // TODO: update the code to test the property processInstanceId
        expect(instance).to.have.property('processInstanceId');
        // expect(instance.processInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property tenantId (base name: "tenantId")', function() {
        // TODO: update the code to test the property tenantId
        expect(instance).to.have.property('tenantId');
        // expect(instance.tenantId).to.be(expectedValueLiteral);
      });

      it('should have the property retries (base name: "retries")', function() {
        // TODO: update the code to test the property retries
        expect(instance).to.have.property('retries');
        // expect(instance.retries).to.be(expectedValueLiteral);
      });

      it('should have the property suspended (base name: "suspended")', function() {
        // TODO: update the code to test the property suspended
        expect(instance).to.have.property('suspended');
        // expect(instance.suspended).to.be(expectedValueLiteral);
      });

      it('should have the property workerId (base name: "workerId")', function() {
        // TODO: update the code to test the property workerId
        expect(instance).to.have.property('workerId');
        // expect(instance.workerId).to.be(expectedValueLiteral);
      });

      it('should have the property topicName (base name: "topicName")', function() {
        // TODO: update the code to test the property topicName
        expect(instance).to.have.property('topicName');
        // expect(instance.topicName).to.be(expectedValueLiteral);
      });

      it('should have the property priority (base name: "priority")', function() {
        // TODO: update the code to test the property priority
        expect(instance).to.have.property('priority');
        // expect(instance.priority).to.be(expectedValueLiteral);
      });

      it('should have the property businessKey (base name: "businessKey")', function() {
        // TODO: update the code to test the property businessKey
        expect(instance).to.have.property('businessKey');
        // expect(instance.businessKey).to.be(expectedValueLiteral);
      });

    });
  });

}));
