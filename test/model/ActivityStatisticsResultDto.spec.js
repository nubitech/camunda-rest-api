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
    describe('ActivityStatisticsResultDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.ActivityStatisticsResultDto();
      });

      it('should create an instance of ActivityStatisticsResultDto', function() {
        // TODO: update the code to test ActivityStatisticsResultDto
        expect(instance).to.be.a(CamundaRestApi.ActivityStatisticsResultDto);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property instances (base name: "instances")', function() {
        // TODO: update the code to test the property instances
        expect(instance).to.have.property('instances');
        // expect(instance.instances).to.be(expectedValueLiteral);
      });

      it('should have the property failedJobs (base name: "failedJobs")', function() {
        // TODO: update the code to test the property failedJobs
        expect(instance).to.have.property('failedJobs');
        // expect(instance.failedJobs).to.be(expectedValueLiteral);
      });

      it('should have the property incidents (base name: "incidents")', function() {
        // TODO: update the code to test the property incidents
        expect(instance).to.have.property('incidents');
        // expect(instance.incidents).to.be(expectedValueLiteral);
      });

    });
  });

}));
