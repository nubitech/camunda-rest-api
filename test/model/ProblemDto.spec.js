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
    describe('ProblemDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.ProblemDto();
      });

      it('should create an instance of ProblemDto', function() {
        // TODO: update the code to test ProblemDto
        expect(instance).to.be.a(CamundaRestApi.ProblemDto);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property line (base name: "line")', function() {
        // TODO: update the code to test the property line
        expect(instance).to.have.property('line');
        // expect(instance.line).to.be(expectedValueLiteral);
      });

      it('should have the property column (base name: "column")', function() {
        // TODO: update the code to test the property column
        expect(instance).to.have.property('column');
        // expect(instance.column).to.be(expectedValueLiteral);
      });

      it('should have the property mainElementId (base name: "mainElementId")', function() {
        // TODO: update the code to test the property mainElementId
        expect(instance).to.have.property('mainElementId');
        // expect(instance.mainElementId).to.be(expectedValueLiteral);
      });

      it('should have the property elementIds (base name: "elementIds")', function() {
        // TODO: update the code to test the property elementIds
        expect(instance).to.have.property('elementIds');
        // expect(instance.elementIds).to.be(expectedValueLiteral);
      });

    });
  });

}));