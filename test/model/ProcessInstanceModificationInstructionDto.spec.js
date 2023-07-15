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
    describe('ProcessInstanceModificationInstructionDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.ProcessInstanceModificationInstructionDto();
      });

      it('should create an instance of ProcessInstanceModificationInstructionDto', function() {
        // TODO: update the code to test ProcessInstanceModificationInstructionDto
        expect(instance).to.be.a(CamundaRestApi.ProcessInstanceModificationInstructionDto);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property variables (base name: "variables")', function() {
        // TODO: update the code to test the property variables
        expect(instance).to.have.property('variables');
        // expect(instance.variables).to.be(expectedValueLiteral);
      });

      it('should have the property activityId (base name: "activityId")', function() {
        // TODO: update the code to test the property activityId
        expect(instance).to.have.property('activityId');
        // expect(instance.activityId).to.be(expectedValueLiteral);
      });

      it('should have the property transitionId (base name: "transitionId")', function() {
        // TODO: update the code to test the property transitionId
        expect(instance).to.have.property('transitionId');
        // expect(instance.transitionId).to.be(expectedValueLiteral);
      });

      it('should have the property activityInstanceId (base name: "activityInstanceId")', function() {
        // TODO: update the code to test the property activityInstanceId
        expect(instance).to.have.property('activityInstanceId');
        // expect(instance.activityInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property transitionInstanceId (base name: "transitionInstanceId")', function() {
        // TODO: update the code to test the property transitionInstanceId
        expect(instance).to.have.property('transitionInstanceId');
        // expect(instance.transitionInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property ancestorActivityInstanceId (base name: "ancestorActivityInstanceId")', function() {
        // TODO: update the code to test the property ancestorActivityInstanceId
        expect(instance).to.have.property('ancestorActivityInstanceId');
        // expect(instance.ancestorActivityInstanceId).to.be(expectedValueLiteral);
      });

      it('should have the property cancelCurrentActiveActivityInstances (base name: "cancelCurrentActiveActivityInstances")', function() {
        // TODO: update the code to test the property cancelCurrentActiveActivityInstances
        expect(instance).to.have.property('cancelCurrentActiveActivityInstances');
        // expect(instance.cancelCurrentActiveActivityInstances).to.be(expectedValueLiteral);
      });

    });
  });

}));