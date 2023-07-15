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
    instance = new CamundaRestApi.HistoricDecisionInstanceApi();
  });

  describe('(package)', function() {
    describe('HistoricDecisionInstanceApi', function() {
      describe('deleteAsync', function() {
        it('should call deleteAsync successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteAsync call and complete the assertions
          /*
          var opts = {};

          instance.deleteAsync(opts, function(error, data, response) {
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
      describe('getHistoricDecisionInstance', function() {
        it('should call getHistoricDecisionInstance successfully', function(done) {
          // TODO: uncomment, update parameter values for getHistoricDecisionInstance call and complete the assertions
          /*
          var opts = {};

          instance.getHistoricDecisionInstance(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.HistoricDecisionInstanceDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getHistoricDecisionInstances', function() {
        it('should call getHistoricDecisionInstances successfully', function(done) {
          // TODO: uncomment, update parameter values for getHistoricDecisionInstances call and complete the assertions
          /*
          var opts = {};

          instance.getHistoricDecisionInstances(opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.HistoricDecisionInstanceDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getHistoricDecisionInstancesCount', function() {
        it('should call getHistoricDecisionInstancesCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getHistoricDecisionInstancesCount call and complete the assertions
          /*
          var opts = {};

          instance.getHistoricDecisionInstancesCount(opts, function(error, data, response) {
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
      describe('setRemovalTimeAsyncHistoricDecisionInstance', function() {
        it('should call setRemovalTimeAsyncHistoricDecisionInstance successfully', function(done) {
          // TODO: uncomment, update parameter values for setRemovalTimeAsyncHistoricDecisionInstance call and complete the assertions
          /*
          var opts = {};

          instance.setRemovalTimeAsyncHistoricDecisionInstance(opts, function(error, data, response) {
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
    });
  });

}));
