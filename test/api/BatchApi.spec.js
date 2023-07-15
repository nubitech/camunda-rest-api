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
    instance = new CamundaRestApi.BatchApi();
  });

  describe('(package)', function() {
    describe('BatchApi', function() {
      describe('deleteBatch', function() {
        it('should call deleteBatch successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteBatch call
          /*
          var opts = {};

          instance.deleteBatch(id, opts, function(error, data, response) {
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
      describe('getBatch', function() {
        it('should call getBatch successfully', function(done) {
          // TODO: uncomment, update parameter values for getBatch call and complete the assertions
          /*

          instance.getBatch(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.BatchDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBatchStatistics', function() {
        it('should call getBatchStatistics successfully', function(done) {
          // TODO: uncomment, update parameter values for getBatchStatistics call and complete the assertions
          /*
          var opts = {};

          instance.getBatchStatistics(opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.BatchStatisticsDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBatchStatisticsCount', function() {
        it('should call getBatchStatisticsCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getBatchStatisticsCount call and complete the assertions
          /*
          var opts = {};

          instance.getBatchStatisticsCount(opts, function(error, data, response) {
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
      describe('getBatches', function() {
        it('should call getBatches successfully', function(done) {
          // TODO: uncomment, update parameter values for getBatches call and complete the assertions
          /*
          var opts = {};

          instance.getBatches(opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.BatchDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBatchesCount', function() {
        it('should call getBatchesCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getBatchesCount call and complete the assertions
          /*
          var opts = {};

          instance.getBatchesCount(opts, function(error, data, response) {
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
      describe('updateBatchSuspensionState', function() {
        it('should call updateBatchSuspensionState successfully', function(done) {
          // TODO: uncomment, update parameter values for updateBatchSuspensionState call
          /*
          var opts = {};

          instance.updateBatchSuspensionState(id, opts, function(error, data, response) {
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
    });
  });

}));
