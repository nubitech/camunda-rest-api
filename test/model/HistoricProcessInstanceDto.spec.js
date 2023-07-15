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
    describe('HistoricProcessInstanceDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.HistoricProcessInstanceDto();
      });

      it('should create an instance of HistoricProcessInstanceDto', function() {
        // TODO: update the code to test HistoricProcessInstanceDto
        expect(instance).to.be.a(CamundaRestApi.HistoricProcessInstanceDto);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property rootProcessInstanceId (base name: "rootProcessInstanceId")', function() {
        // TODO: update the code to test the property rootProcessInstanceId
        expect(instance).to.have.property('rootProcessInstanceId');
        // expect(instance.rootProcessInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property superProcessInstanceId (base name: "superProcessInstanceId")', function() {
        // TODO: update the code to test the property superProcessInstanceId
        expect(instance).to.have.property('superProcessInstanceId');
        // expect(instance.superProcessInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property superCaseInstanceId (base name: "superCaseInstanceId")', function() {
        // TODO: update the code to test the property superCaseInstanceId
        expect(instance).to.have.property('superCaseInstanceId');
        // expect(instance.superCaseInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property caseInstanceId (base name: "caseInstanceId")', function() {
        // TODO: update the code to test the property caseInstanceId
        expect(instance).to.have.property('caseInstanceId');
        // expect(instance.caseInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property processDefinitionName (base name: "processDefinitionName")', function() {
        // TODO: update the code to test the property processDefinitionName
        expect(instance).to.have.property('processDefinitionName');
        // expect(instance.processDefinitionName).to.be(expectedValueLiteral);
      });

      it('should have the property processDefinitionKey (base name: "processDefinitionKey")', function() {
        // TODO: update the code to test the property processDefinitionKey
        expect(instance).to.have.property('processDefinitionKey');
        // expect(instance.processDefinitionKey).to.be(expectedValueLiteral);
      });

      it('should have the property processDefinitionVersion (base name: "processDefinitionVersion")', function() {
        // TODO: update the code to test the property processDefinitionVersion
        expect(instance).to.have.property('processDefinitionVersion');
        // expect(instance.processDefinitionVersion).to.be(expectedValueLiteral);
      });

      it('should have the property processDefinitionId (base name: "processDefinitionId")', function() {
        // TODO: update the code to test the property processDefinitionId
        expect(instance).to.have.property('processDefinitionId');
        // expect(instance.processDefinitionId).to.be(expectedValueLiteral);
      });

      it('should have the property businessKey (base name: "businessKey")', function() {
        // TODO: update the code to test the property businessKey
        expect(instance).to.have.property('businessKey');
        // expect(instance.businessKey).to.be(expectedValueLiteral);
      });

      it('should have the property startTime (base name: "startTime")', function() {
        // TODO: update the code to test the property startTime
        expect(instance).to.have.property('startTime');
        // expect(instance.startTime).to.be(expectedValueLiteral);
      });

      it('should have the property endTime (base name: "endTime")', function() {
        // TODO: update the code to test the property endTime
        expect(instance).to.have.property('endTime');
        // expect(instance.endTime).to.be(expectedValueLiteral);
      });

      it('should have the property removalTime (base name: "removalTime")', function() {
        // TODO: update the code to test the property removalTime
        expect(instance).to.have.property('removalTime');
        // expect(instance.removalTime).to.be(expectedValueLiteral);
      });

      it('should have the property durationInMillis (base name: "durationInMillis")', function() {
        // TODO: update the code to test the property durationInMillis
        expect(instance).to.have.property('durationInMillis');
        // expect(instance.durationInMillis).to.be(expectedValueLiteral);
      });

      it('should have the property startUserId (base name: "startUserId")', function() {
        // TODO: update the code to test the property startUserId
        expect(instance).to.have.property('startUserId');
        // expect(instance.startUserId).to.be(expectedValueLiteral);
      });

      it('should have the property startActivityId (base name: "startActivityId")', function() {
        // TODO: update the code to test the property startActivityId
        expect(instance).to.have.property('startActivityId');
        // expect(instance.startActivityId).to.be(expectedValueLiteral);
      });

      it('should have the property deleteReason (base name: "deleteReason")', function() {
        // TODO: update the code to test the property deleteReason
        expect(instance).to.have.property('deleteReason');
        // expect(instance.deleteReason).to.be(expectedValueLiteral);
      });

      it('should have the property tenantId (base name: "tenantId")', function() {
        // TODO: update the code to test the property tenantId
        expect(instance).to.have.property('tenantId');
        // expect(instance.tenantId).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

    });
  });

}));
