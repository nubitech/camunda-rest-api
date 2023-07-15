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
    describe('JobDefinitionPriorityDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.JobDefinitionPriorityDto();
      });

      it('should create an instance of JobDefinitionPriorityDto', function() {
        // TODO: update the code to test JobDefinitionPriorityDto
        expect(instance).to.be.a(CamundaRestApi.JobDefinitionPriorityDto);
      });

      it('should have the property priority (base name: "priority")', function() {
        // TODO: update the code to test the property priority
        expect(instance).to.have.property('priority');
        // expect(instance.priority).to.be(expectedValueLiteral);
      });

      it('should have the property includeJobs (base name: "includeJobs")', function() {
        // TODO: update the code to test the property includeJobs
        expect(instance).to.have.property('includeJobs');
        // expect(instance.includeJobs).to.be(expectedValueLiteral);
      });

    });
  });

}));