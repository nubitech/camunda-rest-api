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
    describe('RestartProcessInstanceDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.RestartProcessInstanceDto();
      });

      it('should create an instance of RestartProcessInstanceDto', function() {
        // TODO: update the code to test RestartProcessInstanceDto
        expect(instance).to.be.a(CamundaRestApi.RestartProcessInstanceDto);
      });

      it('should have the property processInstanceIds (base name: "processInstanceIds")', function() {
        // TODO: update the code to test the property processInstanceIds
        expect(instance).to.have.property('processInstanceIds');
        // expect(instance.processInstanceIds).to.be(expectedValueLiteral);
      });

      it('should have the property historicProcessInstanceQuery (base name: "historicProcessInstanceQuery")', function() {
        // TODO: update the code to test the property historicProcessInstanceQuery
        expect(instance).to.have.property('historicProcessInstanceQuery');
        // expect(instance.historicProcessInstanceQuery).to.be(expectedValueLiteral);
      });

      it('should have the property skipCustomListeners (base name: "skipCustomListeners")', function() {
        // TODO: update the code to test the property skipCustomListeners
        expect(instance).to.have.property('skipCustomListeners');
        // expect(instance.skipCustomListeners).to.be(expectedValueLiteral);
      });

      it('should have the property skipIoMappings (base name: "skipIoMappings")', function() {
        // TODO: update the code to test the property skipIoMappings
        expect(instance).to.have.property('skipIoMappings');
        // expect(instance.skipIoMappings).to.be(expectedValueLiteral);
      });

      it('should have the property initialVariables (base name: "initialVariables")', function() {
        // TODO: update the code to test the property initialVariables
        expect(instance).to.have.property('initialVariables');
        // expect(instance.initialVariables).to.be(expectedValueLiteral);
      });

      it('should have the property withoutBusinessKey (base name: "withoutBusinessKey")', function() {
        // TODO: update the code to test the property withoutBusinessKey
        expect(instance).to.have.property('withoutBusinessKey');
        // expect(instance.withoutBusinessKey).to.be(expectedValueLiteral);
      });

      it('should have the property instructions (base name: "instructions")', function() {
        // TODO: update the code to test the property instructions
        expect(instance).to.have.property('instructions');
        // expect(instance.instructions).to.be(expectedValueLiteral);
      });

    });
  });

}));
