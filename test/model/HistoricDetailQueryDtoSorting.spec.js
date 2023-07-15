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
    describe('HistoricDetailQueryDtoSorting', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.HistoricDetailQueryDtoSorting();
      });

      it('should create an instance of HistoricDetailQueryDtoSorting', function() {
        // TODO: update the code to test HistoricDetailQueryDtoSorting
        expect(instance).to.be.a(CamundaRestApi.HistoricDetailQueryDtoSorting);
      });

      it('should have the property sortBy (base name: "sortBy")', function() {
        // TODO: update the code to test the property sortBy
        expect(instance).to.have.property('sortBy');
        // expect(instance.sortBy).to.be(expectedValueLiteral);
      });

      it('should have the property sortOrder (base name: "sortOrder")', function() {
        // TODO: update the code to test the property sortOrder
        expect(instance).to.have.property('sortOrder');
        // expect(instance.sortOrder).to.be(expectedValueLiteral);
      });

    });
  });

}));
