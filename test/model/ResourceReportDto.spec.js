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
    describe('ResourceReportDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.ResourceReportDto();
      });

      it('should create an instance of ResourceReportDto', function() {
        // TODO: update the code to test ResourceReportDto
        expect(instance).to.be.a(CamundaRestApi.ResourceReportDto);
      });

      it('should have the property errors (base name: "errors")', function() {
        // TODO: update the code to test the property errors
        expect(instance).to.have.property('errors');
        // expect(instance.errors).to.be(expectedValueLiteral);
      });

      it('should have the property warnings (base name: "warnings")', function() {
        // TODO: update the code to test the property warnings
        expect(instance).to.have.property('warnings');
        // expect(instance.warnings).to.be(expectedValueLiteral);
      });

    });
  });

}));
