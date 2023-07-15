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
    instance = new CamundaRestApi.GroupApi();
  });

  describe('(package)', function() {
    describe('GroupApi', function() {
      describe('availableGroupInstanceOperations', function() {
        it('should call availableGroupInstanceOperations successfully', function(done) {
          // TODO: uncomment, update parameter values for availableGroupInstanceOperations call and complete the assertions
          /*

          instance.availableGroupInstanceOperations(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ResourceOptionsDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('availableGroupMembersOperations', function() {
        it('should call availableGroupMembersOperations successfully', function(done) {
          // TODO: uncomment, update parameter values for availableGroupMembersOperations call and complete the assertions
          /*

          instance.availableGroupMembersOperations(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ResourceOptionsDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('availableGroupOperations', function() {
        it('should call availableGroupOperations successfully', function(done) {
          // TODO: uncomment availableGroupOperations call and complete the assertions
          /*

          instance.availableGroupOperations(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.ResourceOptionsDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createGroup', function() {
        it('should call createGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for createGroup call
          /*
          var opts = {};

          instance.createGroup(opts, function(error, data, response) {
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
      describe('createGroupMember', function() {
        it('should call createGroupMember successfully', function(done) {
          // TODO: uncomment, update parameter values for createGroupMember call
          /*

          instance.createGroupMember(id, userId, function(error, data, response) {
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
      describe('deleteGroup', function() {
        it('should call deleteGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteGroup call
          /*

          instance.deleteGroup(id, function(error, data, response) {
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
      describe('deleteGroupMember', function() {
        it('should call deleteGroupMember successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteGroupMember call
          /*

          instance.deleteGroupMember(id, userId, function(error, data, response) {
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
      describe('getGroup', function() {
        it('should call getGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for getGroup call and complete the assertions
          /*

          instance.getGroup(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CamundaRestApi.GroupDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getGroupCount', function() {
        it('should call getGroupCount successfully', function(done) {
          // TODO: uncomment, update parameter values for getGroupCount call and complete the assertions
          /*
          var opts = {};

          instance.getGroupCount(opts, function(error, data, response) {
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
      describe('getQueryGroups', function() {
        it('should call getQueryGroups successfully', function(done) {
          // TODO: uncomment, update parameter values for getQueryGroups call and complete the assertions
          /*
          var opts = {};

          instance.getQueryGroups(opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.GroupDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postQueryGroups', function() {
        it('should call postQueryGroups successfully', function(done) {
          // TODO: uncomment, update parameter values for postQueryGroups call and complete the assertions
          /*
          var opts = {};

          instance.postQueryGroups(opts, function(error, data, response) {
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
              expect(data).to.be.a(CamundaRestApi.GroupDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('queryGroupCount', function() {
        it('should call queryGroupCount successfully', function(done) {
          // TODO: uncomment, update parameter values for queryGroupCount call and complete the assertions
          /*
          var opts = {};

          instance.queryGroupCount(opts, function(error, data, response) {
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
      describe('updateGroup', function() {
        it('should call updateGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for updateGroup call
          /*
          var opts = {};

          instance.updateGroup(id, opts, function(error, data, response) {
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