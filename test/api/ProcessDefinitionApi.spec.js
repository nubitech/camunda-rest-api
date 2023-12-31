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
    instance = new CamundaRestApi.ProcessDefinitionApi();
  });

  describe('(package)', function() {
    describe('ProcessDefinitionApi', function() {
      describe('deleteProcessDefinition', function() {
        it('should call deleteProcessDefinition successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteProcessDefinition call
          /*
          var opts = {};

          instance.deleteProcessDefinition(id, opts, function(error, data, response) {
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
      describe('deleteProcessDefinitionsByKey', function() {
        it('should call deleteProcessDefinitionsByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteProcessDefinitionsByKey call
          /*
          var opts = {};

          instance.deleteProcessDefinitionsByKey(key, opts, function(error, data, response) {
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
      describe('deleteProcessDefinitionsByKeyAndTenantId', function() {
        it('should call deleteProcessDefinitionsByKeyAndTenantId successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteProcessDefinitionsByKeyAndTenantId call
          /*
          var opts = {};

          instance.deleteProcessDefinitionsByKeyAndTenantId(key, tenantId, opts, function(error, data, response) {
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
      describe('getActivityStatistics', function() {
        it('should call getActivityStatistics successfully', function(done) {
          // TODO: uncomment, update parameter values for getActivityStatistics call and complete the assertions
          /*
          var opts = {};

          instance.getActivityStatistics(id, opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.ActivityStatisticsResultDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getActivityStatisticsByProcessDefinitionKey', function() {
        it('should call getActivityStatisticsByProcessDefinitionKey successfully', function(done) {
          // TODO: uncomment, update parameter values for getActivityStatisticsByProcessDefinitionKey call and complete the assertions
          /*
          var opts = {};

          instance.getActivityStatisticsByProcessDefinitionKey(key, opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.ActivityStatisticsResultDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getActivityStatisticsByProcessDefinitionKeyAndTenantId', function() {
        it('should call getActivityStatisticsByProcessDefinitionKeyAndTenantId successfully', function(done) {
          // TODO: uncomment, update parameter values for getActivityStatisticsByProcessDefinitionKeyAndTenantId call and complete the assertions
          /*
          var opts = {};

          instance.getActivityStatisticsByProcessDefinitionKeyAndTenantId(key, tenantId, opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.ActivityStatisticsResultDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getDeployedStartForm', function() {
        it('should call getDeployedStartForm successfully', function(done) {
          // TODO: uncomment, update parameter values for getDeployedStartForm call and complete the assertions
          /*

          instance.getDeployedStartForm(id, function(error, data, response) {
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
      describe('getDeployedStartFormByKey', function() {
        it('should call getDeployedStartFormByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for getDeployedStartFormByKey call and complete the assertions
          /*

          instance.getDeployedStartFormByKey(key, function(error, data, response) {
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
      describe('getDeployedStartFormByKeyAndTenantId', function() {
        it('should call getDeployedStartFormByKeyAndTenantId successfully', function(done) {
          // TODO: uncomment, update parameter values for getDeployedStartFormByKeyAndTenantId call and complete the assertions
          /*

          instance.getDeployedStartFormByKeyAndTenantId(key, tenantId, function(error, data, response) {
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
      describe('getLatestProcessDefinitionByTenantId', function() {
        it('should call getLatestProcessDefinitionByTenantId successfully', function(done) {
          // TODO: uncomment, update parameter values for getLatestProcessDefinitionByTenantId call and complete the assertions
          /*

          instance.getLatestProcessDefinitionByTenantId(key, tenantId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ProcessDefinitionDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProcessDefinition', function() {
        it('should call getProcessDefinition successfully', function(done) {
          // TODO: uncomment, update parameter values for getProcessDefinition call and complete the assertions
          /*

          instance.getProcessDefinition(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ProcessDefinitionDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProcessDefinitionBpmn20Xml', function() {
        it('should call getProcessDefinitionBpmn20Xml successfully', function(done) {
          // TODO: uncomment, update parameter values for getProcessDefinitionBpmn20Xml call and complete the assertions
          /*

          instance.getProcessDefinitionBpmn20Xml(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ProcessDefinitionDiagramDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProcessDefinitionBpmn20XmlByKey', function() {
        it('should call getProcessDefinitionBpmn20XmlByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for getProcessDefinitionBpmn20XmlByKey call and complete the assertions
          /*

          instance.getProcessDefinitionBpmn20XmlByKey(key, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ProcessDefinitionDiagramDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProcessDefinitionBpmn20XmlByKeyAndTenantId', function() {
        it('should call getProcessDefinitionBpmn20XmlByKeyAndTenantId successfully', function(done) {
          // TODO: uncomment, update parameter values for getProcessDefinitionBpmn20XmlByKeyAndTenantId call and complete the assertions
          /*

          instance.getProcessDefinitionBpmn20XmlByKeyAndTenantId(key, tenantId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ProcessDefinitionDiagramDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProcessDefinitionByKey', function() {
        it('should call getProcessDefinitionByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for getProcessDefinitionByKey call and complete the assertions
          /*

          instance.getProcessDefinitionByKey(key, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ProcessDefinitionDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProcessDefinitionDiagram', function() {
        it('should call getProcessDefinitionDiagram successfully', function(done) {
          // TODO: uncomment, update parameter values for getProcessDefinitionDiagram call and complete the assertions
          /*

          instance.getProcessDefinitionDiagram(id, function(error, data, response) {
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
      describe('getProcessDefinitionDiagramByKey', function() {
        it('should call getProcessDefinitionDiagramByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for getProcessDefinitionDiagramByKey call and complete the assertions
          /*

          instance.getProcessDefinitionDiagramByKey(key, function(error, data, response) {
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
      describe('getProcessDefinitionDiagramByKeyAndTenantId', function() {
        it('should call getProcessDefinitionDiagramByKeyAndTenantId successfully', function(done) {
          // TODO: uncomment, update parameter values for getProcessDefinitionDiagramByKeyAndTenantId call and complete the assertions
          /*

          instance.getProcessDefinitionDiagramByKeyAndTenantId(key, tenantId, function(error, data, response) {
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
      describe('getProcessDefinitionStatistics', function() {
        it('should call getProcessDefinitionStatistics successfully', function(done) {
          // TODO: uncomment, update parameter values for getProcessDefinitionStatistics call and complete the assertions
          /*
          var opts = {};

          instance.getProcessDefinitionStatistics(opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.ProcessDefinitionStatisticsResultDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProcessDefinitions', function() {
        it('should call getProcessDefinitions successfully', function(done) {
          // TODO: uncomment, update parameter values for getProcessDefinitions call and complete the assertions
          /*
          var opts = {};

          instance.getProcessDefinitions(opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.ProcessDefinitionDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProcessDefinitionsCount', function() {
        it('should call getProcessDefinitionsCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getProcessDefinitionsCount call and complete the assertions
          /*
          var opts = {};

          instance.getProcessDefinitionsCount(opts, function(error, data, response) {
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
      describe('getRenderedStartForm', function() {
        it('should call getRenderedStartForm successfully', function(done) {
          // TODO: uncomment, update parameter values for getRenderedStartForm call and complete the assertions
          /*

          instance.getRenderedStartForm(id, function(error, data, response) {
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
      describe('getRenderedStartFormByKey', function() {
        it('should call getRenderedStartFormByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for getRenderedStartFormByKey call and complete the assertions
          /*

          instance.getRenderedStartFormByKey(key, function(error, data, response) {
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
      describe('getRenderedStartFormByKeyAndTenantId', function() {
        it('should call getRenderedStartFormByKeyAndTenantId successfully', function(done) {
          // TODO: uncomment, update parameter values for getRenderedStartFormByKeyAndTenantId call and complete the assertions
          /*

          instance.getRenderedStartFormByKeyAndTenantId(key, tenantId, function(error, data, response) {
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
      describe('getStartForm', function() {
        it('should call getStartForm successfully', function(done) {
          // TODO: uncomment, update parameter values for getStartForm call and complete the assertions
          /*

          instance.getStartForm(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.FormDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getStartFormByKey', function() {
        it('should call getStartFormByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for getStartFormByKey call and complete the assertions
          /*

          instance.getStartFormByKey(key, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.FormDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getStartFormByKeyAndTenantId', function() {
        it('should call getStartFormByKeyAndTenantId successfully', function(done) {
          // TODO: uncomment, update parameter values for getStartFormByKeyAndTenantId call and complete the assertions
          /*

          instance.getStartFormByKeyAndTenantId(key, tenantId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.FormDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getStartFormVariables', function() {
        it('should call getStartFormVariables successfully', function(done) {
          // TODO: uncomment, update parameter values for getStartFormVariables call and complete the assertions
          /*
          var opts = {};

          instance.getStartFormVariables(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Object);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(CamundaRestApi.VariableValueDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getStartFormVariablesByKey', function() {
        it('should call getStartFormVariablesByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for getStartFormVariablesByKey call and complete the assertions
          /*
          var opts = {};

          instance.getStartFormVariablesByKey(key, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Object);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(CamundaRestApi.VariableValueDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getStartFormVariablesByKeyAndTenantId', function() {
        it('should call getStartFormVariablesByKeyAndTenantId successfully', function(done) {
          // TODO: uncomment, update parameter values for getStartFormVariablesByKeyAndTenantId call and complete the assertions
          /*
          var opts = {};

          instance.getStartFormVariablesByKeyAndTenantId(key, tenantId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Object);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(CamundaRestApi.VariableValueDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getStaticCalledProcessDefinitions', function() {
        it('should call getStaticCalledProcessDefinitions successfully', function(done) {
          // TODO: uncomment, update parameter values for getStaticCalledProcessDefinitions call and complete the assertions
          /*

          instance.getStaticCalledProcessDefinitions(id, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.CalledProcessDefinitionDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('restartProcessInstance', function() {
        it('should call restartProcessInstance successfully', function(done) {
          // TODO: uncomment, update parameter values for restartProcessInstance call
          /*
          var opts = {};

          instance.restartProcessInstance(id, opts, function(error, data, response) {
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
      describe('restartProcessInstanceAsyncOperation', function() {
        it('should call restartProcessInstanceAsyncOperation successfully', function(done) {
          // TODO: uncomment, update parameter values for restartProcessInstanceAsyncOperation call and complete the assertions
          /*
          var opts = {};

          instance.restartProcessInstanceAsyncOperation(id, opts, function(error, data, response) {
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
      describe('startProcessInstance', function() {
        it('should call startProcessInstance successfully', function(done) {
          // TODO: uncomment, update parameter values for startProcessInstance call and complete the assertions
          /*
          var opts = {};

          instance.startProcessInstance(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ProcessInstanceWithVariablesDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('startProcessInstanceByKey', function() {
        it('should call startProcessInstanceByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for startProcessInstanceByKey call and complete the assertions
          /*
          var opts = {};

          instance.startProcessInstanceByKey(key, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ProcessInstanceWithVariablesDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('startProcessInstanceByKeyAndTenantId', function() {
        it('should call startProcessInstanceByKeyAndTenantId successfully', function(done) {
          // TODO: uncomment, update parameter values for startProcessInstanceByKeyAndTenantId call and complete the assertions
          /*
          var opts = {};

          instance.startProcessInstanceByKeyAndTenantId(key, tenantId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ProcessInstanceWithVariablesDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('submitForm', function() {
        it('should call submitForm successfully', function(done) {
          // TODO: uncomment, update parameter values for submitForm call and complete the assertions
          /*
          var opts = {};

          instance.submitForm(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ProcessInstanceDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('submitFormByKey', function() {
        it('should call submitFormByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for submitFormByKey call and complete the assertions
          /*
          var opts = {};

          instance.submitFormByKey(key, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ProcessInstanceDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('submitFormByKeyAndTenantId', function() {
        it('should call submitFormByKeyAndTenantId successfully', function(done) {
          // TODO: uncomment, update parameter values for submitFormByKeyAndTenantId call and complete the assertions
          /*
          var opts = {};

          instance.submitFormByKeyAndTenantId(key, tenantId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ProcessInstanceDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateHistoryTimeToLiveByProcessDefinitionId', function() {
        it('should call updateHistoryTimeToLiveByProcessDefinitionId successfully', function(done) {
          // TODO: uncomment, update parameter values for updateHistoryTimeToLiveByProcessDefinitionId call
          /*
          var opts = {};

          instance.updateHistoryTimeToLiveByProcessDefinitionId(id, opts, function(error, data, response) {
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
      describe('updateHistoryTimeToLiveByProcessDefinitionKey', function() {
        it('should call updateHistoryTimeToLiveByProcessDefinitionKey successfully', function(done) {
          // TODO: uncomment, update parameter values for updateHistoryTimeToLiveByProcessDefinitionKey call
          /*
          var opts = {};

          instance.updateHistoryTimeToLiveByProcessDefinitionKey(key, opts, function(error, data, response) {
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
      describe('updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId', function() {
        it('should call updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId successfully', function(done) {
          // TODO: uncomment, update parameter values for updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId call
          /*
          var opts = {};

          instance.updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId(key, tenantId, opts, function(error, data, response) {
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
      describe('updateProcessDefinitionSuspensionState', function() {
        it('should call updateProcessDefinitionSuspensionState successfully', function(done) {
          // TODO: uncomment, update parameter values for updateProcessDefinitionSuspensionState call
          /*
          var opts = {};

          instance.updateProcessDefinitionSuspensionState(opts, function(error, data, response) {
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
      describe('updateProcessDefinitionSuspensionStateById', function() {
        it('should call updateProcessDefinitionSuspensionStateById successfully', function(done) {
          // TODO: uncomment, update parameter values for updateProcessDefinitionSuspensionStateById call
          /*
          var opts = {};

          instance.updateProcessDefinitionSuspensionStateById(id, opts, function(error, data, response) {
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
      describe('updateProcessDefinitionSuspensionStateByKey', function() {
        it('should call updateProcessDefinitionSuspensionStateByKey successfully', function(done) {
          // TODO: uncomment, update parameter values for updateProcessDefinitionSuspensionStateByKey call
          /*
          var opts = {};

          instance.updateProcessDefinitionSuspensionStateByKey(key, opts, function(error, data, response) {
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
      describe('updateProcessDefinitionSuspensionStateByKeyAndTenantId', function() {
        it('should call updateProcessDefinitionSuspensionStateByKeyAndTenantId successfully', function(done) {
          // TODO: uncomment, update parameter values for updateProcessDefinitionSuspensionStateByKeyAndTenantId call
          /*
          var opts = {};

          instance.updateProcessDefinitionSuspensionStateByKeyAndTenantId(key, tenantId, opts, function(error, data, response) {
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
