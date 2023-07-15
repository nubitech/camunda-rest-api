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
    describe('CorrelationMessageAsyncDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.CorrelationMessageAsyncDto();
      });

      it('should create an instance of CorrelationMessageAsyncDto', function() {
        // TODO: update the code to test CorrelationMessageAsyncDto
        expect(instance).to.be.a(CamundaRestApi.CorrelationMessageAsyncDto);
      });

      it('should have the property messageName (base name: "messageName")', function() {
        // TODO: update the code to test the property messageName
        expect(instance).to.have.property('messageName');
        // expect(instance.messageName).to.be(expectedValueLiteral);
      });

      it('should have the property processInstanceIds (base name: "processInstanceIds")', function() {
        // TODO: update the code to test the property processInstanceIds
        expect(instance).to.have.property('processInstanceIds');
        // expect(instance.processInstanceIds).to.be(expectedValueLiteral);
      });

      it('should have the property processInstanceQuery (base name: "processInstanceQuery")', function() {
        // TODO: update the code to test the property processInstanceQuery
        expect(instance).to.have.property('processInstanceQuery');
        // expect(instance.processInstanceQuery).to.be(expectedValueLiteral);
      });

      it('should have the property historicProcessInstanceQuery (base name: "historicProcessInstanceQuery")', function() {
        // TODO: update the code to test the property historicProcessInstanceQuery
        expect(instance).to.have.property('historicProcessInstanceQuery');
        // expect(instance.historicProcessInstanceQuery).to.be(expectedValueLiteral);
      });

      it('should have the property variables (base name: "variables")', function() {
        // TODO: update the code to test the property variables
        expect(instance).to.have.property('variables');
        // expect(instance.variables).to.be(expectedValueLiteral);
      });

    });
  });

}));
