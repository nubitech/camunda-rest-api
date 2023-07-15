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
    instance = new CamundaRestApi.HistoricDetailApi();
  });

  describe('(package)', function() {
    describe('HistoricDetailApi', function() {
      describe('getHistoricDetails', function() {
        it('should call getHistoricDetails successfully', function(done) {
          // TODO: uncomment, update parameter values for getHistoricDetails call and complete the assertions
          /*
          var opts = {};

          instance.getHistoricDetails(opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.HistoricDetailDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getHistoricDetailsCount', function() {
        it('should call getHistoricDetailsCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getHistoricDetailsCount call and complete the assertions
          /*
          var opts = {};

          instance.getHistoricDetailsCount(opts, function(error, data, response) {
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
      describe('historicDetail', function() {
        it('should call historicDetail successfully', function(done) {
          // TODO: uncomment, update parameter values for historicDetail call and complete the assertions
          /*
          var opts = {};

          instance.historicDetail(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.HistoricDetailDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('historicDetailBinary', function() {
        it('should call historicDetailBinary successfully', function(done) {
          // TODO: uncomment, update parameter values for historicDetailBinary call and complete the assertions
          /*

          instance.historicDetailBinary(id, function(error, data, response) {
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
      describe('queryHistoricDetails', function() {
        it('should call queryHistoricDetails successfully', function(done) {
          // TODO: uncomment, update parameter values for queryHistoricDetails call and complete the assertions
          /*
          var opts = {};

          instance.queryHistoricDetails(opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.HistoricDetailDto);
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