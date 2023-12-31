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
    describe('PatchVariablesDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.PatchVariablesDto();
      });

      it('should create an instance of PatchVariablesDto', function() {
        // TODO: update the code to test PatchVariablesDto
        expect(instance).to.be.a(CamundaRestApi.PatchVariablesDto);
      });

      it('should have the property modifications (base name: "modifications")', function() {
        // TODO: update the code to test the property modifications
        expect(instance).to.have.property('modifications');
        // expect(instance.modifications).to.be(expectedValueLiteral);
      });

      it('should have the property deletions (base name: "deletions")', function() {
        // TODO: update the code to test the property deletions
        expect(instance).to.have.property('deletions');
        // expect(instance.deletions).to.be(expectedValueLiteral);
      });

    });
  });

}));
