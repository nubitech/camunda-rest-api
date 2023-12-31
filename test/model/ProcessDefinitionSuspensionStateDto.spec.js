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
    describe('ProcessDefinitionSuspensionStateDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.ProcessDefinitionSuspensionStateDto();
      });

      it('should create an instance of ProcessDefinitionSuspensionStateDto', function() {
        // TODO: update the code to test ProcessDefinitionSuspensionStateDto
        expect(instance).to.be.a(CamundaRestApi.ProcessDefinitionSuspensionStateDto);
      });

      it('should have the property suspended (base name: "suspended")', function() {
        // TODO: update the code to test the property suspended
        expect(instance).to.have.property('suspended');
        // expect(instance.suspended).to.be(expectedValueLiteral);
      });

      it('should have the property processDefinitionId (base name: "processDefinitionId")', function() {
        // TODO: update the code to test the property processDefinitionId
        expect(instance).to.have.property('processDefinitionId');
        // expect(instance.processDefinitionId).to.be(expectedValueLiteral);
      });

      it('should have the property processDefinitionKey (base name: "processDefinitionKey")', function() {
        // TODO: update the code to test the property processDefinitionKey
        expect(instance).to.have.property('processDefinitionKey');
        // expect(instance.processDefinitionKey).to.be(expectedValueLiteral);
      });

      it('should have the property includeProcessInstances (base name: "includeProcessInstances")', function() {
        // TODO: update the code to test the property includeProcessInstances
        expect(instance).to.have.property('includeProcessInstances');
        // expect(instance.includeProcessInstances).to.be(expectedValueLiteral);
      });

      it('should have the property executionDate (base name: "executionDate")', function() {
        // TODO: update the code to test the property executionDate
        expect(instance).to.have.property('executionDate');
        // expect(instance.executionDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
