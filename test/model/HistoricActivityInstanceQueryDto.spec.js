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
    describe('HistoricActivityInstanceQueryDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.HistoricActivityInstanceQueryDto();
      });

      it('should create an instance of HistoricActivityInstanceQueryDto', function() {
        // TODO: update the code to test HistoricActivityInstanceQueryDto
        expect(instance).to.be.a(CamundaRestApi.HistoricActivityInstanceQueryDto);
      });

      it('should have the property activityInstanceId (base name: "activityInstanceId")', function() {
        // TODO: update the code to test the property activityInstanceId
        expect(instance).to.have.property('activityInstanceId');
        // expect(instance.activityInstanceId).to.be(expectedValueLiteral);
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

      it('should have the property executionId (base name: "executionId")', function() {
        // TODO: update the code to test the property executionId
        expect(instance).to.have.property('executionId');
        // expect(instance.executionId).to.be(expectedValueLiteral);
      });

      it('should have the property activityId (base name: "activityId")', function() {
        // TODO: update the code to test the property activityId
        expect(instance).to.have.property('activityId');
        // expect(instance.activityId).to.be(expectedValueLiteral);
      });

      it('should have the property activityName (base name: "activityName")', function() {
        // TODO: update the code to test the property activityName
        expect(instance).to.have.property('activityName');
        // expect(instance.activityName).to.be(expectedValueLiteral);
      });

      it('should have the property activityType (base name: "activityType")', function() {
        // TODO: update the code to test the property activityType
        expect(instance).to.have.property('activityType');
        // expect(instance.activityType).to.be(expectedValueLiteral);
      });

      it('should have the property taskAssignee (base name: "taskAssignee")', function() {
        // TODO: update the code to test the property taskAssignee
        expect(instance).to.have.property('taskAssignee');
        // expect(instance.taskAssignee).to.be(expectedValueLiteral);
      });

      it('should have the property finished (base name: "finished")', function() {
        // TODO: update the code to test the property finished
        expect(instance).to.have.property('finished');
        // expect(instance.finished).to.be(expectedValueLiteral);
      });

      it('should have the property unfinished (base name: "unfinished")', function() {
        // TODO: update the code to test the property unfinished
        expect(instance).to.have.property('unfinished');
        // expect(instance.unfinished).to.be(expectedValueLiteral);
      });

      it('should have the property canceled (base name: "canceled")', function() {
        // TODO: update the code to test the property canceled
        expect(instance).to.have.property('canceled');
        // expect(instance.canceled).to.be(expectedValueLiteral);
      });

      it('should have the property completeScope (base name: "completeScope")', function() {
        // TODO: update the code to test the property completeScope
        expect(instance).to.have.property('completeScope');
        // expect(instance.completeScope).to.be(expectedValueLiteral);
      });

      it('should have the property startedBefore (base name: "startedBefore")', function() {
        // TODO: update the code to test the property startedBefore
        expect(instance).to.have.property('startedBefore');
        // expect(instance.startedBefore).to.be(expectedValueLiteral);
      });

      it('should have the property startedAfter (base name: "startedAfter")', function() {
        // TODO: update the code to test the property startedAfter
        expect(instance).to.have.property('startedAfter');
        // expect(instance.startedAfter).to.be(expectedValueLiteral);
      });

      it('should have the property finishedBefore (base name: "finishedBefore")', function() {
        // TODO: update the code to test the property finishedBefore
        expect(instance).to.have.property('finishedBefore');
        // expect(instance.finishedBefore).to.be(expectedValueLiteral);
      });

      it('should have the property finishedAfter (base name: "finishedAfter")', function() {
        // TODO: update the code to test the property finishedAfter
        expect(instance).to.have.property('finishedAfter');
        // expect(instance.finishedAfter).to.be(expectedValueLiteral);
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

      it('should have the property sorting (base name: "sorting")', function() {
        // TODO: update the code to test the property sorting
        expect(instance).to.have.property('sorting');
        // expect(instance.sorting).to.be(expectedValueLiteral);
      });

    });
  });

}));
