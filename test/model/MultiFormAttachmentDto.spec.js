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
    describe('MultiFormAttachmentDto', function() {
      beforeEach(function() {
        instance = new CamundaRestApi.MultiFormAttachmentDto();
      });

      it('should create an instance of MultiFormAttachmentDto', function() {
        // TODO: update the code to test MultiFormAttachmentDto
        expect(instance).to.be.a(CamundaRestApi.MultiFormAttachmentDto);
      });

      it('should have the property attachmentName (base name: "attachment-name")', function() {
        // TODO: update the code to test the property attachmentName
        expect(instance).to.have.property('attachmentName');
        // expect(instance.attachmentName).to.be(expectedValueLiteral);
      });

      it('should have the property attachmentDescription (base name: "attachment-description")', function() {
        // TODO: update the code to test the property attachmentDescription
        expect(instance).to.have.property('attachmentDescription');
        // expect(instance.attachmentDescription).to.be(expectedValueLiteral);
      });

      it('should have the property attachmentType (base name: "attachment-type")', function() {
        // TODO: update the code to test the property attachmentType
        expect(instance).to.have.property('attachmentType');
        // expect(instance.attachmentType).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property content (base name: "content")', function() {
        // TODO: update the code to test the property content
        expect(instance).to.have.property('content');
        // expect(instance.content).to.be(expectedValueLiteral);
      });

    });
  });

}));
