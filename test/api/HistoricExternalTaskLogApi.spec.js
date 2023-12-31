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
    instance = new CamundaRestApi.HistoricExternalTaskLogApi();
  });

  describe('(package)', function() {
    describe('HistoricExternalTaskLogApi', function() {
      describe('getErrorDetailsHistoricExternalTaskLog', function() {
        it('should call getErrorDetailsHistoricExternalTaskLog successfully', function(done) {
          // TODO: uncomment, update parameter values for getErrorDetailsHistoricExternalTaskLog call and complete the assertions
          /*

          instance.getErrorDetailsHistoricExternalTaskLog(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getHistoricExternalTaskLog', function() {
        it('should call getHistoricExternalTaskLog successfully', function(done) {
          // TODO: uncomment, update parameter values for getHistoricExternalTaskLog call and complete the assertions
          /*

          instance.getHistoricExternalTaskLog(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.HistoricExternalTaskLogDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getHistoricExternalTaskLogs', function() {
        it('should call getHistoricExternalTaskLogs successfully', function(done) {
          // TODO: uncomment, update parameter values for getHistoricExternalTaskLogs call and complete the assertions
          /*
          var opts = {};

          instance.getHistoricExternalTaskLogs(opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.HistoricExternalTaskLogDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getHistoricExternalTaskLogsCount', function() {
        it('should call getHistoricExternalTaskLogsCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getHistoricExternalTaskLogsCount call and complete the assertions
          /*
          var opts = {};

          instance.getHistoricExternalTaskLogsCount(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.CountResultDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('queryHistoricExternalTaskLogs', function() {
        it('should call queryHistoricExternalTaskLogs successfully', function(done) {
          // TODO: uncomment, update parameter values for queryHistoricExternalTaskLogs call and complete the assertions
          /*
          var opts = {};

          instance.queryHistoricExternalTaskLogs(opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.HistoricExternalTaskLogDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('queryHistoricExternalTaskLogsCount', function() {
        it('should call queryHistoricExternalTaskLogsCount successfully', function(done) {
          // TODO: uncomment, update parameter values for queryHistoricExternalTaskLogsCount call and complete the assertions
          /*
          var opts = {};

          instance.queryHistoricExternalTaskLogsCount(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.CountResultDto);

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
