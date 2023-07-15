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
    describe('SetJobRetriesByProcessDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.SetJobRetriesByProcessDto();
      });

      it('should create an instance of SetJobRetriesByProcessDto', function() {
        // TODO: update the code to test SetJobRetriesByProcessDto
        expect(instance).to.be.a(CamundaRestApi.SetJobRetriesByProcessDto);
      });

      it('should have the property retries (base name: "retries")', function() {
        // TODO: update the code to test the property retries
        expect(instance).to.have.property('retries');
        // expect(instance.retries).to.be(expectedValueLiteral);
      });

    });
  });

}));
