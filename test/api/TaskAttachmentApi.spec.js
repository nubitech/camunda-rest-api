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

  beforeEach(function() {
    instance = new CamundaRestApi.TaskAttachmentApi();
  });

  describe('(package)', function() {
    describe('TaskAttachmentApi', function() {
      describe('addAttachment', function() {
        it('should call addAttachment successfully', function(done) {
          // TODO: uncomment, update parameter values for addAttachment call and complete the assertions
          /*
          var opts = {};

          instance.addAttachment(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.AttachmentDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteAttachment', function() {
        it('should call deleteAttachment successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteAttachment call
          /*

          instance.deleteAttachment(id, attachmentId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAttachment', function() {
        it('should call getAttachment successfully', function(done) {
          // TODO: uncomment, update parameter values for getAttachment call and complete the assertions
          /*

          instance.getAttachment(id, attachmentId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.AttachmentDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAttachmentData', function() {
        it('should call getAttachmentData successfully', function(done) {
          // TODO: uncomment, update parameter values for getAttachmentData call and complete the assertions
          /*

          instance.getAttachmentData(id, attachmentId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Blob);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAttachments', function() {
        it('should call getAttachments successfully', function(done) {
          // TODO: uncomment, update parameter values for getAttachments call and complete the assertions
          /*

          instance.getAttachments(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(CamundaRestApi.AttachmentDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
