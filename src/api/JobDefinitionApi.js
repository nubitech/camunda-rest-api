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
import {JobDefinitionDto} from '../model/JobDefinitionDto';
import {JobDefinitionPriorityDto} from '../model/JobDefinitionPriorityDto';
import {JobDefinitionQueryDto} from '../model/JobDefinitionQueryDto';
import {JobDefinitionSuspensionStateDto} from '../model/JobDefinitionSuspensionStateDto';
import {JobDefinitionsSuspensionStateDto} from '../model/JobDefinitionsSuspensionStateDto';
import {RetriesDto} from '../model/RetriesDto';

/**
* JobDefinition service.
* @module api/JobDefinitionApi
* @version 7.20.0
*/
export class JobDefinitionApi {

    /**
    * Constructs a new JobDefinitionApi. 
    * @alias module:api/JobDefinitionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getJobDefinition operation.
     * @callback moduleapi/JobDefinitionApi~getJobDefinitionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobDefinitionDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Job Definition
     * Retrieves a job definition by id, according to the &#x60;JobDefinition&#x60; interface in the engine.
     * @param {String} id The id of the job definition to be retrieved.
     * @param {module:api/JobDefinitionApi~getJobDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getJobDefinition(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getJobDefinition");
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
      let returnType = JobDefinitionDto;

      return this.apiClient.callApi(
        '/job-definition/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getJobDefinitions operation.
     * @callback moduleapi/JobDefinitionApi~getJobDefinitionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/JobDefinitionDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Job Definitions
     * Queries for job definitions that fulfill given parameters. The size of the result set can be retrieved by using the [Get Job Definition Count](https://docs.camunda.org/manual/develop/reference/rest/job-definition/get-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.jobDefinitionId Filter by job definition id.
     * @param {String} opts.activityIdIn Only include job definitions which belong to one of the passed and comma-separated activity ids.
     * @param {String} opts.processDefinitionId Only include job definitions which exist for the given process definition id.
     * @param {String} opts.processDefinitionKey Only include job definitions which exist for the given process definition key.
     * @param {String} opts.jobType Only include job definitions which exist for the given job type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/the-job-executor/#job-creation) for more information about job types.
     * @param {String} opts.jobConfiguration Only include job definitions which exist for the given job configuration. For example: for timer jobs it is the timer configuration.
     * @param {Boolean} opts.active Only include active job definitions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.suspended Only include suspended job definitions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.withOverridingJobPriority Only include job definitions that have an overriding job priority defined. The only effective value is &#x60;true&#x60;. If set to &#x60;false&#x60;, this filter is not applied.
     * @param {String} opts.tenantIdIn Only include job definitions which belong to one of the passed and comma-separated tenant ids.
     * @param {Boolean} opts.withoutTenantId Only include job definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.includeJobDefinitionsWithoutTenantId Include job definitions which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {module:model/String} opts.sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {module:model/String} opts.sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {module:api/JobDefinitionApi~getJobDefinitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getJobDefinitions(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'jobDefinitionId': opts['jobDefinitionId'],'activityIdIn': opts['activityIdIn'],'processDefinitionId': opts['processDefinitionId'],'processDefinitionKey': opts['processDefinitionKey'],'jobType': opts['jobType'],'jobConfiguration': opts['jobConfiguration'],'active': opts['active'],'suspended': opts['suspended'],'withOverridingJobPriority': opts['withOverridingJobPriority'],'tenantIdIn': opts['tenantIdIn'],'withoutTenantId': opts['withoutTenantId'],'includeJobDefinitionsWithoutTenantId': opts['includeJobDefinitionsWithoutTenantId'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'firstResult': opts['firstResult'],'maxResults': opts['maxResults']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [JobDefinitionDto];

      return this.apiClient.callApi(
        '/job-definition', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getJobDefinitionsCount operation.
     * @callback moduleapi/JobDefinitionApi~getJobDefinitionsCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Job Definition Count
     * Queries for the number of job definitions that fulfill given parameters. Takes the same parameters as the [Get Job Definitions](https://docs.camunda.org/manual/develop/reference/rest/job-definition/get-query/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.jobDefinitionId Filter by job definition id.
     * @param {String} opts.activityIdIn Only include job definitions which belong to one of the passed and comma-separated activity ids.
     * @param {String} opts.processDefinitionId Only include job definitions which exist for the given process definition id.
     * @param {String} opts.processDefinitionKey Only include job definitions which exist for the given process definition key.
     * @param {String} opts.jobType Only include job definitions which exist for the given job type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/the-job-executor/#job-creation) for more information about job types.
     * @param {String} opts.jobConfiguration Only include job definitions which exist for the given job configuration. For example: for timer jobs it is the timer configuration.
     * @param {Boolean} opts.active Only include active job definitions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.suspended Only include suspended job definitions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.withOverridingJobPriority Only include job definitions that have an overriding job priority defined. The only effective value is &#x60;true&#x60;. If set to &#x60;false&#x60;, this filter is not applied.
     * @param {String} opts.tenantIdIn Only include job definitions which belong to one of the passed and comma-separated tenant ids.
     * @param {Boolean} opts.withoutTenantId Only include job definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.includeJobDefinitionsWithoutTenantId Include job definitions which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {module:api/JobDefinitionApi~getJobDefinitionsCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getJobDefinitionsCount(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'jobDefinitionId': opts['jobDefinitionId'],'activityIdIn': opts['activityIdIn'],'processDefinitionId': opts['processDefinitionId'],'processDefinitionKey': opts['processDefinitionKey'],'jobType': opts['jobType'],'jobConfiguration': opts['jobConfiguration'],'active': opts['active'],'suspended': opts['suspended'],'withOverridingJobPriority': opts['withOverridingJobPriority'],'tenantIdIn': opts['tenantIdIn'],'withoutTenantId': opts['withoutTenantId'],'includeJobDefinitionsWithoutTenantId': opts['includeJobDefinitionsWithoutTenantId']
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
        '/job-definition/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the queryJobDefinitions operation.
     * @callback moduleapi/JobDefinitionApi~queryJobDefinitionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/JobDefinitionDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Job Definitions (POST)
     * Queries for job definitions that fulfill given parameters. This method is slightly more powerful than the [Get Job Definitions](https://docs.camunda.org/manual/develop/reference/rest/job-definition/get-query/) method because it allows filtering by multiple job definitions of types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;.
     * @param {Object} opts Optional parameters
     * @param {module:model/JobDefinitionQueryDto} opts.body 
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {module:api/JobDefinitionApi~queryJobDefinitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    queryJobDefinitions(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        'firstResult': opts['firstResult'],'maxResults': opts['maxResults']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [JobDefinitionDto];

      return this.apiClient.callApi(
        '/job-definition', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the queryJobDefinitionsCount operation.
     * @callback moduleapi/JobDefinitionApi~queryJobDefinitionsCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Job Definition Count (POST)
     * Queries for the number of job definitions that fulfill given parameters. This method takes the same message body as the [Get Job Definitions (POST)](https://docs.camunda.org/manual/develop/reference/rest/job-definition/post-query/) method and therefore it is slightly more powerful than the [Get Job Definition Count](https://docs.camunda.org/manual/develop/reference/rest/job-definition/get-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {module:model/JobDefinitionQueryDto} opts.body 
     * @param {module:api/JobDefinitionApi~queryJobDefinitionsCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    queryJobDefinitionsCount(opts, callback) {
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
        '/job-definition/count', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the setJobPriorityJobDefinition operation.
     * @callback moduleapi/JobDefinitionApi~setJobPriorityJobDefinitionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set Job Definition Priority by Id
     * Sets an overriding execution priority for jobs with the given definition id. Optionally, the priorities of all the definitions&#x27; existing jobs are updated accordingly. The priority can be reset by setting it to &#x60;null&#x60;, meaning that a new job&#x27;s priority will not be determined based on its definition&#x27;s priority any longer. See the [user guide on job prioritization](https://docs.camunda.org/manual/develop/user-guide/process-engine/the-job-executor/#set-job-definition-priorities-via-managementservice-api) for details.
     * @param {String} id The id of the job definition to be updated.
     * @param {Object} opts Optional parameters
     * @param {module:model/JobDefinitionPriorityDto} opts.body 
     * @param {module:api/JobDefinitionApi~setJobPriorityJobDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    setJobPriorityJobDefinition(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setJobPriorityJobDefinition");
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
        '/job-definition/{id}/jobPriority', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the setJobRetriesJobDefinition operation.
     * @callback moduleapi/JobDefinitionApi~setJobRetriesJobDefinitionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set Job Retries By Job Definition Id
     * Sets the number of retries of all **failed** jobs associated with the given job definition id.
     * @param {String} id The id of the job definition to be updated.
     * @param {Object} opts Optional parameters
     * @param {module:model/RetriesDto} opts.body 
     * @param {module:api/JobDefinitionApi~setJobRetriesJobDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    setJobRetriesJobDefinition(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setJobRetriesJobDefinition");
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
        '/job-definition/{id}/retries', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateSuspensionStateJobDefinition operation.
     * @callback moduleapi/JobDefinitionApi~updateSuspensionStateJobDefinitionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate/Suspend Job Definition By Id
     * Activates or suspends a given job definition by id.
     * @param {String} id The id of the job definition to activate or suspend.
     * @param {Object} opts Optional parameters
     * @param {module:model/JobDefinitionSuspensionStateDto} opts.body 
     * @param {module:api/JobDefinitionApi~updateSuspensionStateJobDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateSuspensionStateJobDefinition(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateSuspensionStateJobDefinition");
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
        '/job-definition/{id}/suspended', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateSuspensionStateJobDefinitions operation.
     * @callback moduleapi/JobDefinitionApi~updateSuspensionStateJobDefinitionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate/Suspend Job Definitions
     * Activates or suspends job definitions with the given process definition id or process definition key.
     * @param {Object} opts Optional parameters
     * @param {module:model/JobDefinitionsSuspensionStateDto} opts.body 
     * @param {module:api/JobDefinitionApi~updateSuspensionStateJobDefinitionsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateSuspensionStateJobDefinitions(opts, callback) {
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
      let returnType = null;

      return this.apiClient.callApi(
        '/job-definition/suspended', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}