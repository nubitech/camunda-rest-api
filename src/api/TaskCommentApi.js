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
import {AuthorizationExceptionDto} from '../model/AuthorizationExceptionDto';
import {CommentDto} from '../model/CommentDto';
import {ExceptionDto} from '../model/ExceptionDto';

/**
* TaskComment service.
* @module api/TaskCommentApi
* @version 7.20.0
*/
export class TaskCommentApi {

    /**
    * Constructs a new TaskCommentApi. 
    * @alias module:api/TaskCommentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createComment operation.
     * @callback moduleapi/TaskCommentApi~createCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommentDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create
     * Creates a comment for a task by id.
     * @param {String} id The id of the task to add the comment to.
     * @param {Object} opts Optional parameters
     * @param {module:model/CommentDto} opts.body **Note:** Only the &#x60;message&#x60; and &#x60;processInstanceId&#x60; properties will be used. Every other property passed to this endpoint will be ignored.
     * @param {module:api/TaskCommentApi~createCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createComment(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createComment");
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
      let returnType = CommentDto;

      return this.apiClient.callApi(
        '/task/{id}/comment/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getComment operation.
     * @callback moduleapi/TaskCommentApi~getCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommentDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get
     * Retrieves a task comment by task id and comment id.
     * @param {String} id The id of the task.
     * @param {String} commentId The id of the comment to be retrieved.
     * @param {module:api/TaskCommentApi~getCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getComment(id, commentId, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getComment");
      }
      // verify the required parameter 'commentId' is set
      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling getComment");
      }

      let pathParams = {
        'id': id,'commentId': commentId
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
      let returnType = CommentDto;

      return this.apiClient.callApi(
        '/task/{id}/comment/{commentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getComments operation.
     * @callback moduleapi/TaskCommentApi~getCommentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CommentDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get List
     * Gets the comments for a task by id.
     * @param {String} id The id of the task to retrieve the comments for.
     * @param {module:api/TaskCommentApi~getCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getComments(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getComments");
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
      let returnType = [CommentDto];

      return this.apiClient.callApi(
        '/task/{id}/comment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}