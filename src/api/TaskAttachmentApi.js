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
import {AttachmentDto} from '../model/AttachmentDto';
import {AuthorizationExceptionDto} from '../model/AuthorizationExceptionDto';
import {ExceptionDto} from '../model/ExceptionDto';

/**
* TaskAttachment service.
* @module api/TaskAttachmentApi
* @version 7.20.0
*/
export class TaskAttachmentApi {

    /**
    * Constructs a new TaskAttachmentApi. 
    * @alias module:api/TaskAttachmentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addAttachment operation.
     * @callback moduleapi/TaskAttachmentApi~addAttachmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttachmentDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create
     * Creates an attachment for a task.
     * @param {String} id The id of the task to add the attachment to.
     * @param {Object} opts Optional parameters
     * @param {String} opts.attachmentName 
     * @param {String} opts.attachmentDescription 
     * @param {String} opts.attachmentType 
     * @param {String} opts.url 
     * @param {Blob} opts.content 
     * @param {module:api/TaskAttachmentApi~addAttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addAttachment(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addAttachment");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'attachment-name': opts['attachmentName'],'attachment-description': opts['attachmentDescription'],'attachment-type': opts['attachmentType'],'url': opts['url'],'content': opts['content']
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = AttachmentDto;

      return this.apiClient.callApi(
        '/task/{id}/attachment/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteAttachment operation.
     * @callback moduleapi/TaskAttachmentApi~deleteAttachmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete
     * Removes an attachment from a task by id.
     * @param {String} id The id of the task.
     * @param {String} attachmentId The id of the attachment to be removed.
     * @param {module:api/TaskAttachmentApi~deleteAttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteAttachment(id, attachmentId, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteAttachment");
      }
      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling deleteAttachment");
      }

      let pathParams = {
        'id': id,'attachmentId': attachmentId
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
        '/task/{id}/attachment/{attachmentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAttachment operation.
     * @callback moduleapi/TaskAttachmentApi~getAttachmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttachmentDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get
     * Retrieves a task attachment by task id and attachment id.
     * @param {String} id The id of the task.
     * @param {String} attachmentId The id of the attachment to be retrieved.
     * @param {module:api/TaskAttachmentApi~getAttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAttachment(id, attachmentId, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAttachment");
      }
      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling getAttachment");
      }

      let pathParams = {
        'id': id,'attachmentId': attachmentId
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
      let returnType = AttachmentDto;

      return this.apiClient.callApi(
        '/task/{id}/attachment/{attachmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAttachmentData operation.
     * @callback moduleapi/TaskAttachmentApi~getAttachmentDataCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get (Binary)
     * Retrieves the binary content of a task attachment by task id and attachment id.
     * @param {String} id The id of the task.
     * @param {String} attachmentId The id of the attachment to be retrieved.
     * @param {module:api/TaskAttachmentApi~getAttachmentDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAttachmentData(id, attachmentId, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAttachmentData");
      }
      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling getAttachmentData");
      }

      let pathParams = {
        'id': id,'attachmentId': attachmentId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/octet-stream', 'text/plain', 'application/json'];
      let returnType = 'Blob';

      return this.apiClient.callApi(
        '/task/{id}/attachment/{attachmentId}/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAttachments operation.
     * @callback moduleapi/TaskAttachmentApi~getAttachmentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AttachmentDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get List
     * Gets the attachments for a task.
     * @param {String} id The id of the task to retrieve the attachments for.
     * @param {module:api/TaskAttachmentApi~getAttachmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAttachments(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAttachments");
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
      let returnType = [AttachmentDto];

      return this.apiClient.callApi(
        '/task/{id}/attachment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}