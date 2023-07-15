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
import {HistoricExternalTaskLogDto} from '../model/HistoricExternalTaskLogDto';
import {HistoricExternalTaskLogQueryDto} from '../model/HistoricExternalTaskLogQueryDto';

/**
* HistoricExternalTaskLog service.
* @module api/HistoricExternalTaskLogApi
* @version 7.20.0
*/
export class HistoricExternalTaskLogApi {

    /**
    * Constructs a new HistoricExternalTaskLogApi. 
    * @alias module:api/HistoricExternalTaskLogApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getErrorDetailsHistoricExternalTaskLog operation.
     * @callback moduleapi/HistoricExternalTaskLogApi~getErrorDetailsHistoricExternalTaskLogCallback
     * @param {String} error Error message, if any.
     * @param {Object{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get External Task Log Error Details
     * Retrieves the corresponding error details of the passed historic external task log by id.
     * @param {String} id The id of the historic external task log to get the error details for.
     * @param {module:api/HistoricExternalTaskLogApi~getErrorDetailsHistoricExternalTaskLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getErrorDetailsHistoricExternalTaskLog(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getErrorDetailsHistoricExternalTaskLog");
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
      let accepts = ['text/plain', 'application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/history/external-task-log/{id}/error-details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getHistoricExternalTaskLog operation.
     * @callback moduleapi/HistoricExternalTaskLogApi~getHistoricExternalTaskLogCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoricExternalTaskLogDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get External Task Log
     * Retrieves a historic external task log by id.
     * @param {String} id The id of the log entry.
     * @param {module:api/HistoricExternalTaskLogApi~getHistoricExternalTaskLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getHistoricExternalTaskLog(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getHistoricExternalTaskLog");
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
      let returnType = HistoricExternalTaskLogDto;

      return this.apiClient.callApi(
        '/history/external-task-log/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getHistoricExternalTaskLogs operation.
     * @callback moduleapi/HistoricExternalTaskLogApi~getHistoricExternalTaskLogsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HistoricExternalTaskLogDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get External Task Logs
     * Queries for historic external task logs that fulfill the given parameters. The size of the result set can be retrieved by using the [Get External Task Log Count](https://docs.camunda.org/manual/develop/reference/rest/history/external-task-log/get-external-task-log-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.logId Filter by historic external task log id.
     * @param {String} opts.externalTaskId Filter by external task id.
     * @param {String} opts.topicName Filter by an external task topic.
     * @param {String} opts.workerId Filter by the id of the worker that the task was most recently locked by.
     * @param {String} opts.errorMessage Filter by external task exception message.
     * @param {String} opts.activityIdIn Only include historic external task logs which belong to one of the passed activity ids.
     * @param {String} opts.activityInstanceIdIn Only include historic external task logs which belong to one of the passed activity instance ids.
     * @param {String} opts.executionIdIn Only include historic external task logs which belong to one of the passed execution ids.
     * @param {String} opts.processInstanceId Filter by process instance id.
     * @param {String} opts.processDefinitionId Filter by process definition id.
     * @param {String} opts.processDefinitionKey Filter by process definition key.
     * @param {String} opts.tenantIdIn Only include historic external task log entries which belong to one of the passed and comma-separated tenant ids.
     * @param {Boolean} opts.withoutTenantId Only include historic external task log entries that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Number} opts.priorityLowerThanOrEquals Only include logs for which the associated external task had a priority lower than or equal to the given value. Value must be a valid &#x60;long&#x60; value.
     * @param {Number} opts.priorityHigherThanOrEquals Only include logs for which the associated external task had a priority higher than or equal to the given value. Value must be a valid &#x60;long&#x60; value.
     * @param {Boolean} opts.creationLog Only include creation logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.failureLog Only include failure logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.successLog Only include success logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.deletionLog Only include deletion logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {module:model/String} opts.sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {module:model/String} opts.sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {module:api/HistoricExternalTaskLogApi~getHistoricExternalTaskLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getHistoricExternalTaskLogs(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'logId': opts['logId'],'externalTaskId': opts['externalTaskId'],'topicName': opts['topicName'],'workerId': opts['workerId'],'errorMessage': opts['errorMessage'],'activityIdIn': opts['activityIdIn'],'activityInstanceIdIn': opts['activityInstanceIdIn'],'executionIdIn': opts['executionIdIn'],'processInstanceId': opts['processInstanceId'],'processDefinitionId': opts['processDefinitionId'],'processDefinitionKey': opts['processDefinitionKey'],'tenantIdIn': opts['tenantIdIn'],'withoutTenantId': opts['withoutTenantId'],'priorityLowerThanOrEquals': opts['priorityLowerThanOrEquals'],'priorityHigherThanOrEquals': opts['priorityHigherThanOrEquals'],'creationLog': opts['creationLog'],'failureLog': opts['failureLog'],'successLog': opts['successLog'],'deletionLog': opts['deletionLog'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'firstResult': opts['firstResult'],'maxResults': opts['maxResults']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [HistoricExternalTaskLogDto];

      return this.apiClient.callApi(
        '/history/external-task-log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getHistoricExternalTaskLogsCount operation.
     * @callback moduleapi/HistoricExternalTaskLogApi~getHistoricExternalTaskLogsCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get External Task Log Count
     * Queries for the number of historic external task logs that fulfill the given parameters. Takes the same parameters as the [Get External Task Logs](https://docs.camunda.org/manual/develop/reference/rest/history/external-task-log/get-external-task-log-query/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.logId Filter by historic external task log id.
     * @param {String} opts.externalTaskId Filter by external task id.
     * @param {String} opts.topicName Filter by an external task topic.
     * @param {String} opts.workerId Filter by the id of the worker that the task was most recently locked by.
     * @param {String} opts.errorMessage Filter by external task exception message.
     * @param {String} opts.activityIdIn Only include historic external task logs which belong to one of the passed activity ids.
     * @param {String} opts.activityInstanceIdIn Only include historic external task logs which belong to one of the passed activity instance ids.
     * @param {String} opts.executionIdIn Only include historic external task logs which belong to one of the passed execution ids.
     * @param {String} opts.processInstanceId Filter by process instance id.
     * @param {String} opts.processDefinitionId Filter by process definition id.
     * @param {String} opts.processDefinitionKey Filter by process definition key.
     * @param {String} opts.tenantIdIn Only include historic external task log entries which belong to one of the passed and comma-separated tenant ids.
     * @param {Boolean} opts.withoutTenantId Only include historic external task log entries that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Number} opts.priorityLowerThanOrEquals Only include logs for which the associated external task had a priority lower than or equal to the given value. Value must be a valid &#x60;long&#x60; value.
     * @param {Number} opts.priorityHigherThanOrEquals Only include logs for which the associated external task had a priority higher than or equal to the given value. Value must be a valid &#x60;long&#x60; value.
     * @param {Boolean} opts.creationLog Only include creation logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.failureLog Only include failure logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.successLog Only include success logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.deletionLog Only include deletion logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {module:api/HistoricExternalTaskLogApi~getHistoricExternalTaskLogsCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getHistoricExternalTaskLogsCount(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'logId': opts['logId'],'externalTaskId': opts['externalTaskId'],'topicName': opts['topicName'],'workerId': opts['workerId'],'errorMessage': opts['errorMessage'],'activityIdIn': opts['activityIdIn'],'activityInstanceIdIn': opts['activityInstanceIdIn'],'executionIdIn': opts['executionIdIn'],'processInstanceId': opts['processInstanceId'],'processDefinitionId': opts['processDefinitionId'],'processDefinitionKey': opts['processDefinitionKey'],'tenantIdIn': opts['tenantIdIn'],'withoutTenantId': opts['withoutTenantId'],'priorityLowerThanOrEquals': opts['priorityLowerThanOrEquals'],'priorityHigherThanOrEquals': opts['priorityHigherThanOrEquals'],'creationLog': opts['creationLog'],'failureLog': opts['failureLog'],'successLog': opts['successLog'],'deletionLog': opts['deletionLog']
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
        '/history/external-task-log/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the queryHistoricExternalTaskLogs operation.
     * @callback moduleapi/HistoricExternalTaskLogApi~queryHistoricExternalTaskLogsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HistoricExternalTaskLogDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get External Task Logs (POST)
     * Queries for historic external task logs that fulfill the given parameters. This method is slightly more powerful than the [Get External Task Logs](https://docs.camunda.org/manual/develop/reference/rest/history/external-task-log/get-external-task-log-query/) method because it allows filtering by historic external task logs values of the different types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;.
     * @param {Object} opts Optional parameters
     * @param {module:model/HistoricExternalTaskLogQueryDto} opts.body 
     * @param {module:api/HistoricExternalTaskLogApi~queryHistoricExternalTaskLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    queryHistoricExternalTaskLogs(opts, callback) {
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
      let accepts = ['application/json'];
      let returnType = [HistoricExternalTaskLogDto];

      return this.apiClient.callApi(
        '/history/external-task-log', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the queryHistoricExternalTaskLogsCount operation.
     * @callback moduleapi/HistoricExternalTaskLogApi~queryHistoricExternalTaskLogsCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get External Task Log Count (POST)
     * Queries for the number of historic external task logs that fulfill the given parameters. This method takes the same message body as the [Get External Task Logs (POST)](https://docs.camunda.org/manual/develop/reference/rest/history/external-task-log/post-external-task-log-query/) method and therefore it is slightly more powerful than the [Get External Task Log Count](https://docs.camunda.org/manual/develop/reference/rest/history/external-task-log/get-external-task-log-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {module:model/HistoricExternalTaskLogQueryDto} opts.body 
     * @param {module:api/HistoricExternalTaskLogApi~queryHistoricExternalTaskLogsCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    queryHistoricExternalTaskLogsCount(opts, callback) {
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
      let accepts = ['application/json'];
      let returnType = CountResultDto;

      return this.apiClient.callApi(
        '/history/external-task-log/count', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}