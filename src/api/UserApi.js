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
import {ApiClient} from "../ApiClient";
import {CountResultDto} from '../model/CountResultDto';
import {ExceptionDto} from '../model/ExceptionDto';
import {ResourceOptionsDto} from '../model/ResourceOptionsDto';
import {UserCredentialsDto} from '../model/UserCredentialsDto';
import {UserDto} from '../model/UserDto';
import {UserProfileDto} from '../model/UserProfileDto';

/**
* User service.
* @module api/UserApi
* @version 7.20.0
*/
export class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the availableOperations operation.
     * @callback moduleapi/UserApi~availableOperationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceOptionsDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Options
     * The &#x60;/user&#x60; resource supports two custom &#x60;OPTIONS&#x60; requests, one for the resource as such and one for individual user instances. The &#x60;OPTIONS&#x60; request allows checking for the set of available operations that the currently authenticated user can perform on the /user resource. If the user can perform an operation or not may depend on various things, including the user&#x27;s authorizations to interact with this resource and the internal configuration of the process engine. &#x60;OPTIONS /user&#x60; returns available interactions on the resource.
     * @param {module:api/UserApi~availableOperationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    availableOperations(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResourceOptionsDto;

      return this.apiClient.callApi(
        '/user', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the availableUserOperations operation.
     * @callback moduleapi/UserApi~availableUserOperationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceOptionsDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Options
     * The &#x60;/user&#x60; resource supports two custom &#x60;OPTIONS&#x60; requests, one for the resource as such and one for individual user instances. The &#x60;OPTIONS&#x60; request allows checking for the set of available operations that the currently authenticated user can perform on the /user resource. If the user can perform an operation or not may depend on various things, including the user&#x27;s authorizations to interact with this resource and the internal configuration of the process engine. &#x60;OPTIONS /user/{id}&#x60; returns available interactions on a resource instance.
     * @param {String} id The id of the user to be deleted.
     * @param {module:api/UserApi~availableUserOperationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    availableUserOperations(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling availableUserOperations");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResourceOptionsDto;

      return this.apiClient.callApi(
        '/user/{id}', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createUser operation.
     * @callback moduleapi/UserApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create
     * Create a new user.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserDto} opts.body 
     * @param {module:api/UserApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createUser(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/user/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback moduleapi/UserApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete
     * Deletes a user by id.
     * @param {String} id The id of the user to be deleted.
     * @param {module:api/UserApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteUser(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUser");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/user/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getUserCount operation.
     * @callback moduleapi/UserApi~getUserCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get List Count
     * Queries for the number of deployments that fulfill given parameters. Takes the same parameters as the [Get Users](https://docs.camunda.org/manual/develop/reference/rest/user/get-query/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.id Filter by user id
     * @param {String} opts.idIn Filter by a comma-separated list of user ids.
     * @param {String} opts.firstName Filter by the first name of the user. Exact match.
     * @param {String} opts.firstNameLike Filter by the first name that the parameter is a substring of.
     * @param {String} opts.lastName Filter by the last name of the user. Exact match.
     * @param {String} opts.lastNameLike Filter by the last name that the parameter is a substring of.
     * @param {String} opts.email Filter by the email of the user. Exact match.
     * @param {String} opts.emailLike Filter by the email that the parameter is a substring of.
     * @param {String} opts.memberOfGroup Filter for users which are members of the given group.
     * @param {String} opts.memberOfTenant Filter for users which are members of the given tenant.
     * @param {String} opts.potentialStarter Only select Users that are potential starter for the given process definition.
     * @param {module:api/UserApi~getUserCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getUserCount(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'id': opts['id'],'idIn': opts['idIn'],'firstName': opts['firstName'],'firstNameLike': opts['firstNameLike'],'lastName': opts['lastName'],'lastNameLike': opts['lastNameLike'],'email': opts['email'],'emailLike': opts['emailLike'],'memberOfGroup': opts['memberOfGroup'],'memberOfTenant': opts['memberOfTenant'],'potentialStarter': opts['potentialStarter']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CountResultDto;

      return this.apiClient.callApi(
        '/user/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getUserProfile operation.
     * @callback moduleapi/UserApi~getUserProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserProfileDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Profile
     * Retrieves a user&#x27;s profile.
     * @param {String} id The id of the user to retrieve.
     * @param {module:api/UserApi~getUserProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getUserProfile(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUserProfile");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserProfileDto;

      return this.apiClient.callApi(
        '/user/{id}/profile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback moduleapi/UserApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserProfileDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get List
     * Query for a list of users using a list of parameters. The size of the result set can be retrieved by using the Get User Count method. [Get User Count](https://docs.camunda.org/manual/develop/reference/rest/user/get-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.id Filter by user id
     * @param {String} opts.idIn Filter by a comma-separated list of user ids.
     * @param {String} opts.firstName Filter by the first name of the user. Exact match.
     * @param {String} opts.firstNameLike Filter by the first name that the parameter is a substring of.
     * @param {String} opts.lastName Filter by the last name of the user. Exact match.
     * @param {String} opts.lastNameLike Filter by the last name that the parameter is a substring of.
     * @param {String} opts.email Filter by the email of the user. Exact match.
     * @param {String} opts.emailLike Filter by the email that the parameter is a substring of.
     * @param {String} opts.memberOfGroup Filter for users which are members of the given group.
     * @param {String} opts.memberOfTenant Filter for users which are members of the given tenant.
     * @param {String} opts.potentialStarter Only select Users that are potential starter for the given process definition.
     * @param {module:model/String} opts.sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {module:model/String} opts.sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {module:api/UserApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getUsers(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'id': opts['id'],'idIn': opts['idIn'],'firstName': opts['firstName'],'firstNameLike': opts['firstNameLike'],'lastName': opts['lastName'],'lastNameLike': opts['lastNameLike'],'email': opts['email'],'emailLike': opts['emailLike'],'memberOfGroup': opts['memberOfGroup'],'memberOfTenant': opts['memberOfTenant'],'potentialStarter': opts['potentialStarter'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'firstResult': opts['firstResult'],'maxResults': opts['maxResults']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [UserProfileDto];

      return this.apiClient.callApi(
        '/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the unlockUser operation.
     * @callback moduleapi/UserApi~unlockUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlock User
     * Unlocks a user by id.
     * @param {String} id The id of the user to be unlocked.
     * @param {module:api/UserApi~unlockUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    unlockUser(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling unlockUser");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/user/{id}/unlock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateCredentials operation.
     * @callback moduleapi/UserApi~updateCredentialsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Credentials
     * Updates a user&#x27;s credentials (password)
     * @param {String} id The id of the user to be updated.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserCredentialsDto} opts.body 
     * @param {module:api/UserApi~updateCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateCredentials(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCredentials");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/user/{id}/credentials', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateProfile operation.
     * @callback moduleapi/UserApi~updateProfileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User Profile
     * Updates the profile information of an already existing user.
     * @param {String} id The id of the user.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserProfileDto} opts.body 
     * @param {module:api/UserApi~updateProfileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateProfile(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateProfile");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/user/{id}/profile', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}