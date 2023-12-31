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
    describe('MigrationExecutionDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.MigrationExecutionDto();
      });

      it('should create an instance of MigrationExecutionDto', function() {
        // TODO: update the code to test MigrationExecutionDto
        expect(instance).to.be.a(CamundaRestApi.MigrationExecutionDto);
      });

      it('should have the property migrationPlan (base name: "migrationPlan")', function() {
        // TODO: update the code to test the property migrationPlan
        expect(instance).to.have.property('migrationPlan');
        // expect(instance.migrationPlan).to.be(expectedValueLiteral);
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

    });
  });

}));
