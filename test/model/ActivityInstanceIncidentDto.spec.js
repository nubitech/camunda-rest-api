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
    describe('ActivityInstanceIncidentDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.ActivityInstanceIncidentDto();
      });

      it('should create an instance of ActivityInstanceIncidentDto', function() {
        // TODO: update the code to test ActivityInstanceIncidentDto
        expect(instance).to.be.a(CamundaRestApi.ActivityInstanceIncidentDto);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property activityId (base name: "activityId")', function() {
        // TODO: update the code to test the property activityId
        expect(instance).to.have.property('activityId');
        // expect(instance.activityId).to.be(expectedValueLiteral);
      });

    });
  });

}));
