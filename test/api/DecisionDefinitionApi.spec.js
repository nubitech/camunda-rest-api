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
    instance = new CamundaRestApi.DecisionDefinitionApi();
  });

  describe('(package)', function() {
    describe('DecisionDefinitionApi', function() {
      describe('evaluateDecisionById', function() {
        it('should call evaluateDecisionById successfully', function(done) {
          // TODO: uncomment, update parameter values for evaluateDecisionById call and complete the assertions
          /*
          var opts = {};

          instance.evaluateDecisionById(id, opts, function(error, data, response) {
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
              expect(data).to.be.a(Object);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('evaluateDecisionByKey', function() {
        it('should call evaluateDecisionByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for evaluateDecisionByKey call and complete the assertions
          /*
          var opts = {};

          instance.evaluateDecisionByKey(key, opts, function(error, data, response) {
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
              expect(data).to.be.a(Object);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('evaluateDecisionByKeyAndTenant', function() {
        it('should call evaluateDecisionByKeyAndTenant successfully', function(done) {
          // TODO: uncomment, update parameter values for evaluateDecisionByKeyAndTenant call and complete the assertions
          /*
          var opts = {};

          instance.evaluateDecisionByKeyAndTenant(key, tenantId, opts, function(error, data, response) {
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
              expect(data).to.be.a(Object);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getDecisionDefinitionById', function() {
        it('should call getDecisionDefinitionById successfully', function(done) {
          // TODO: uncomment, update parameter values for getDecisionDefinitionById call and complete the assertions
          /*

          instance.getDecisionDefinitionById(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.DecisionDefinitionDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getDecisionDefinitionByKey', function() {
        it('should call getDecisionDefinitionByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for getDecisionDefinitionByKey call and complete the assertions
          /*

          instance.getDecisionDefinitionByKey(key, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.DecisionDefinitionDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getDecisionDefinitionByKeyAndTenantId', function() {
        it('should call getDecisionDefinitionByKeyAndTenantId successfully', function(done) {
          // TODO: uncomment, update parameter values for getDecisionDefinitionByKeyAndTenantId call and complete the assertions
          /*

          instance.getDecisionDefinitionByKeyAndTenantId(key, tenantId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.DecisionDefinitionDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getDecisionDefinitionDiagram', function() {
        it('should call getDecisionDefinitionDiagram successfully', function(done) {
          // TODO: uncomment, update parameter values for getDecisionDefinitionDiagram call and complete the assertions
          /*

          instance.getDecisionDefinitionDiagram(id, function(error, data, response) {
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
      describe('getDecisionDefinitionDiagramByKey', function() {
        it('should call getDecisionDefinitionDiagramByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for getDecisionDefinitionDiagramByKey call and complete the assertions
          /*

          instance.getDecisionDefinitionDiagramByKey(key, function(error, data, response) {
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
      describe('getDecisionDefinitionDiagramByKeyAndTenant', function() {
        it('should call getDecisionDefinitionDiagramByKeyAndTenant successfully', function(done) {
          // TODO: uncomment, update parameter values for getDecisionDefinitionDiagramByKeyAndTenant call and complete the assertions
          /*

          instance.getDecisionDefinitionDiagramByKeyAndTenant(key, tenantId, function(error, data, response) {
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
      describe('getDecisionDefinitionDmnXmlById', function() {
        it('should call getDecisionDefinitionDmnXmlById successfully', function(done) {
          // TODO: uncomment, update parameter values for getDecisionDefinitionDmnXmlById call and complete the assertions
          /*

          instance.getDecisionDefinitionDmnXmlById(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.DecisionDefinitionDiagramDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getDecisionDefinitionDmnXmlByKey', function() {
        it('should call getDecisionDefinitionDmnXmlByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for getDecisionDefinitionDmnXmlByKey call and complete the assertions
          /*

          instance.getDecisionDefinitionDmnXmlByKey(key, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.DecisionDefinitionDiagramDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getDecisionDefinitionDmnXmlByKeyAndTenant', function() {
        it('should call getDecisionDefinitionDmnXmlByKeyAndTenant successfully', function(done) {
          // TODO: uncomment, update parameter values for getDecisionDefinitionDmnXmlByKeyAndTenant call and complete the assertions
          /*

          instance.getDecisionDefinitionDmnXmlByKeyAndTenant(key, tenantId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.DecisionDefinitionDiagramDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getDecisionDefinitions', function() {
        it('should call getDecisionDefinitions successfully', function(done) {
          // TODO: uncomment, update parameter values for getDecisionDefinitions call and complete the assertions
          /*
          var opts = {};

          instance.getDecisionDefinitions(opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.DecisionDefinitionDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getDecisionDefinitionsCount', function() {
        it('should call getDecisionDefinitionsCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getDecisionDefinitionsCount call and complete the assertions
          /*
          var opts = {};

          instance.getDecisionDefinitionsCount(opts, function(error, data, response) {
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
      describe('updateHistoryTimeToLiveByDecisionDefinitionId', function() {
        it('should call updateHistoryTimeToLiveByDecisionDefinitionId successfully', function(done) {
          // TODO: uncomment, update parameter values for updateHistoryTimeToLiveByDecisionDefinitionId call
          /*
          var opts = {};

          instance.updateHistoryTimeToLiveByDecisionDefinitionId(id, opts, function(error, data, response) {
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
      describe('updateHistoryTimeToLiveByDecisionDefinitionKey', function() {
        it('should call updateHistoryTimeToLiveByDecisionDefinitionKey successfully', function(done) {
          // TODO: uncomment, update parameter values for updateHistoryTimeToLiveByDecisionDefinitionKey call
          /*
          var opts = {};

          instance.updateHistoryTimeToLiveByDecisionDefinitionKey(key, opts, function(error, data, response) {
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
      describe('updateHistoryTimeToLiveByDecisionDefinitionKeyAndTenant', function() {
        it('should call updateHistoryTimeToLiveByDecisionDefinitionKeyAndTenant successfully', function(done) {
          // TODO: uncomment, update parameter values for updateHistoryTimeToLiveByDecisionDefinitionKeyAndTenant call
          /*
          var opts = {};

          instance.updateHistoryTimeToLiveByDecisionDefinitionKeyAndTenant(key, tenantId, opts, function(error, data, response) {
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
