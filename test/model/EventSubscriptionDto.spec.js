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
    describe('EventSubscriptionDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.EventSubscriptionDto();
      });

      it('should create an instance of EventSubscriptionDto', function() {
        // TODO: update the code to test EventSubscriptionDto
        expect(instance).to.be.a(CamundaRestApi.EventSubscriptionDto);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property eventType (base name: "eventType")', function() {
        // TODO: update the code to test the property eventType
        expect(instance).to.have.property('eventType');
        // expect(instance.eventType).to.be(expectedValueLiteral);
      });

      it('should have the property eventName (base name: "eventName")', function() {
        // TODO: update the code to test the property eventName
        expect(instance).to.have.property('eventName');
        // expect(instance.eventName).to.be(expectedValueLiteral);
      });

      it('should have the property executionId (base name: "executionId")', function() {
        // TODO: update the code to test the property executionId
        expect(instance).to.have.property('executionId');
        // expect(instance.executionId).to.be(expectedValueLiteral);
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

      it('should have the property createdDate (base name: "createdDate")', function() {
        // TODO: update the code to test the property createdDate
        expect(instance).to.have.property('createdDate');
        // expect(instance.createdDate).to.be(expectedValueLiteral);
      });

      it('should have the property tenantId (base name: "tenantId")', function() {
        // TODO: update the code to test the property tenantId
        expect(instance).to.have.property('tenantId');
        // expect(instance.tenantId).to.be(expectedValueLiteral);
      });

    });
  });

}));