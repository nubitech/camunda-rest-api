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
    instance = new CamundaRestApi.TaskVariableApi();
  });

  describe('(package)', function() {
    describe('TaskVariableApi', function() {
      describe('deleteTaskVariable', function() {
        it('should call deleteTaskVariable successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteTaskVariable call
          /*

          instance.deleteTaskVariable(id, varName, function(error, data, response) {
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
      describe('getTaskVariable', function() {
        it('should call getTaskVariable successfully', function(done) {
          // TODO: uncomment, update parameter values for getTaskVariable call and complete the assertions
          /*
          var opts = {};

          instance.getTaskVariable(id, varName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.VariableValueDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTaskVariableBinary', function() {
        it('should call getTaskVariableBinary successfully', function(done) {
          // TODO: uncomment, update parameter values for getTaskVariableBinary call and complete the assertions
          /*

          instance.getTaskVariableBinary(id, varName, function(error, data, response) {
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
      describe('getTaskVariables', function() {
        it('should call getTaskVariables successfully', function(done) {
          // TODO: uncomment, update parameter values for getTaskVariables call and complete the assertions
          /*
          var opts = {};

          instance.getTaskVariables(id, opts, function(error, data, response) {
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
      describe('modifyTaskVariables', function() {
        it('should call modifyTaskVariables successfully', function(done) {
          // TODO: uncomment, update parameter values for modifyTaskVariables call
          /*
          var opts = {};

          instance.modifyTaskVariables(id, opts, function(error, data, response) {
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
      describe('putTaskVariable', function() {
        it('should call putTaskVariable successfully', function(done) {
          // TODO: uncomment, update parameter values for putTaskVariable call
          /*
          var opts = {};

          instance.putTaskVariable(id, varName, opts, function(error, data, response) {
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
      describe('setBinaryTaskVariable', function() {
        it('should call setBinaryTaskVariable successfully', function(done) {
          // TODO: uncomment, update parameter values for setBinaryTaskVariable call
          /*
          var opts = {};

          instance.setBinaryTaskVariable(id, varName, opts, function(error, data, response) {
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