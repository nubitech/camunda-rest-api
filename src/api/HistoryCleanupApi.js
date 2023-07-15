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
import {ExceptionDto} from '../model/ExceptionDto';
import {HistoryCleanupConfigurationDto} from '../model/HistoryCleanupConfigurationDto';
import {JobDto} from '../model/JobDto';

/**
* HistoryCleanup service.
* @module api/HistoryCleanupApi
* @version 7.20.0
*/
export class HistoryCleanupApi {

    /**
    * Constructs a new HistoryCleanupApi. 
    * @alias module:api/HistoryCleanupApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the cleanupAsync operation.
     * @callback moduleapi/HistoryCleanupApi~cleanupAsyncCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clean up history (POST)
     * Schedules asynchronous history cleanup (See [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup)).  **Note:** This endpoint will return at most a single history cleanup job. Since version &#x60;7.9.0&#x60; it is possible to configure multiple [parallel history cleanup jobs](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#parallel-execution). Use [&#x60;GET /history/cleanup/jobs&#x60;](https://docs.camunda.org/manual/develop/reference/rest/history/history-cleanup/get-history-cleanup-jobs) to find all the available history cleanup jobs.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.immediatelyDue When true the job will be scheduled for nearest future. When &#x60;false&#x60;, the job will be scheduled for next batch window start time. Default is &#x60;true&#x60;.
     * @param {module:api/HistoryCleanupApi~cleanupAsyncCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    cleanupAsync(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'immediatelyDue': opts['immediatelyDue']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = JobDto;

      return this.apiClient.callApi(
        '/history/cleanup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the findCleanupJob operation.
     * @callback moduleapi/HistoryCleanupApi~findCleanupJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find clean up history job (GET)
     * **Deprecated!** Use &#x60;GET /history/cleanup/jobs&#x60; instead.  Finds history cleanup job (See [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup)).
     * @param {module:api/HistoryCleanupApi~findCleanupJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    findCleanupJob(callback) {
      
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
      let returnType = JobDto;

      return this.apiClient.callApi(
        '/history/cleanup/job', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the findCleanupJobs operation.
     * @callback moduleapi/HistoryCleanupApi~findCleanupJobsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/JobDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find clean up history jobs (GET)
     * Finds history cleanup jobs (See [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup)).
     * @param {module:api/HistoryCleanupApi~findCleanupJobsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    findCleanupJobs(callback) {
      
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
      let returnType = [JobDto];

      return this.apiClient.callApi(
        '/history/cleanup/jobs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getHistoryCleanupConfiguration operation.
     * @callback moduleapi/HistoryCleanupApi~getHistoryCleanupConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoryCleanupConfigurationDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get History Cleanup Configuration
     * Retrieves history cleanup batch window configuration (See [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup)).
     * @param {module:api/HistoryCleanupApi~getHistoryCleanupConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getHistoryCleanupConfiguration(callback) {
      
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
      let returnType = HistoryCleanupConfigurationDto;

      return this.apiClient.callApi(
        '/history/cleanup/configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}