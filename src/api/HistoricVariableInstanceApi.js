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
import {HistoricVariableInstanceDto} from '../model/HistoricVariableInstanceDto';
import {HistoricVariableInstanceQueryDto} from '../model/HistoricVariableInstanceQueryDto';

/**
* HistoricVariableInstance service.
* @module api/HistoricVariableInstanceApi
* @version 7.20.0
*/
export class HistoricVariableInstanceApi {

    /**
    * Constructs a new HistoricVariableInstanceApi. 
    * @alias module:api/HistoricVariableInstanceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deleteHistoricVariableInstance operation.
     * @callback moduleapi/HistoricVariableInstanceApi~deleteHistoricVariableInstanceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Variable Instance
     * Deletes a historic variable instance by id.
     * @param {String} id The id of the variable instance.
     * @param {module:api/HistoricVariableInstanceApi~deleteHistoricVariableInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteHistoricVariableInstance(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteHistoricVariableInstance");
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
        '/history/variable-instance/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getHistoricVariableInstance operation.
     * @callback moduleapi/HistoricVariableInstanceApi~getHistoricVariableInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoricVariableInstanceDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Variable Instance
     * Retrieves a historic variable by id.
     * @param {String} id The id of the variable instance.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deserializeValues Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine.
     * @param {module:api/HistoricVariableInstanceApi~getHistoricVariableInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getHistoricVariableInstance(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getHistoricVariableInstance");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'deserializeValues': opts['deserializeValues']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HistoricVariableInstanceDto;

      return this.apiClient.callApi(
        '/history/variable-instance/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getHistoricVariableInstanceBinary operation.
     * @callback moduleapi/HistoricVariableInstanceApi~getHistoricVariableInstanceBinaryCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Variable Instance (Binary)
     * Retrieves the content of a historic variable by id. Applicable for variables that are serialized as binary data.
     * @param {String} id The id of the variable instance.
     * @param {module:api/HistoricVariableInstanceApi~getHistoricVariableInstanceBinaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getHistoricVariableInstanceBinary(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getHistoricVariableInstanceBinary");
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
      let accepts = ['application/octet-stream', '*/*', 'application/json'];
      let returnType = 'Blob';

      return this.apiClient.callApi(
        '/history/variable-instance/{id}/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getHistoricVariableInstances operation.
     * @callback moduleapi/HistoricVariableInstanceApi~getHistoricVariableInstancesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HistoricVariableInstanceDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Variable Instances
     * Queries for historic variable instances that fulfill the given parameters. The size of the result set can be retrieved by using the [Get Variable Instance Count](https://docs.camunda.org/manual/develop/reference/rest/history/variable-instance/get-variable-instance-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.variableName Filter by variable name.
     * @param {String} opts.variableNameLike Restrict to variables with a name like the parameter.
     * @param {Object} opts.variableValue Filter by variable value. Is treated as a &#x60;String&#x60; object on server side.
     * @param {Boolean} opts.variableNamesIgnoreCase Match the variable name provided in &#x60;variableName&#x60; and &#x60;variableNameLike&#x60; case- insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal.
     * @param {Boolean} opts.variableValuesIgnoreCase Match the variable value provided in &#x60;variableValue&#x60; case-insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal.
     * @param {String} opts.variableTypeIn Only include historic variable instances which belong to one of the passed and comma- separated variable types. A list of all supported variable types can be found [here](https://docs.camunda.org/manual/develop/user-guide/process-engine/variables/#supported-variable-values). **Note:** All non-primitive variables are associated with the type &#x27;serializable&#x27;.
     * @param {Boolean} opts.includeDeleted Include variables that has already been deleted during the execution.
     * @param {String} opts.processInstanceId Filter by the process instance the variable belongs to.
     * @param {String} opts.processInstanceIdIn Only include historic variable instances which belong to one of the passed and comma-separated process instance ids.
     * @param {String} opts.processDefinitionId Filter by the process definition the variable belongs to.
     * @param {String} opts.processDefinitionKey Filter by a key of the process definition the variable belongs to.
     * @param {String} opts.executionIdIn Only include historic variable instances which belong to one of the passed and and comma-separated execution ids.
     * @param {String} opts.caseInstanceId Filter by the case instance the variable belongs to.
     * @param {String} opts.caseExecutionIdIn Only include historic variable instances which belong to one of the passed and and comma-separated case execution ids.
     * @param {String} opts.caseActivityIdIn Only include historic variable instances which belong to one of the passed and and comma-separated case activity ids.
     * @param {String} opts.taskIdIn Only include historic variable instances which belong to one of the passed and and comma-separated task ids.
     * @param {String} opts.activityInstanceIdIn Only include historic variable instances which belong to one of the passed and and comma-separated activity instance ids.
     * @param {String} opts.tenantIdIn Only include historic variable instances which belong to one of the passed and comma- separated tenant ids.
     * @param {Boolean} opts.withoutTenantId Only include historic variable instances that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {String} opts.variableNameIn Only include historic variable instances which belong to one of the passed and comma-separated variable names.
     * @param {module:model/String} opts.sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {module:model/String} opts.sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {Boolean} opts.deserializeValues Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine.
     * @param {module:api/HistoricVariableInstanceApi~getHistoricVariableInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getHistoricVariableInstances(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'variableName': opts['variableName'],'variableNameLike': opts['variableNameLike'],'variableValue': opts['variableValue'],'variableNamesIgnoreCase': opts['variableNamesIgnoreCase'],'variableValuesIgnoreCase': opts['variableValuesIgnoreCase'],'variableTypeIn': opts['variableTypeIn'],'includeDeleted': opts['includeDeleted'],'processInstanceId': opts['processInstanceId'],'processInstanceIdIn': opts['processInstanceIdIn'],'processDefinitionId': opts['processDefinitionId'],'processDefinitionKey': opts['processDefinitionKey'],'executionIdIn': opts['executionIdIn'],'caseInstanceId': opts['caseInstanceId'],'caseExecutionIdIn': opts['caseExecutionIdIn'],'caseActivityIdIn': opts['caseActivityIdIn'],'taskIdIn': opts['taskIdIn'],'activityInstanceIdIn': opts['activityInstanceIdIn'],'tenantIdIn': opts['tenantIdIn'],'withoutTenantId': opts['withoutTenantId'],'variableNameIn': opts['variableNameIn'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'firstResult': opts['firstResult'],'maxResults': opts['maxResults'],'deserializeValues': opts['deserializeValues']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [HistoricVariableInstanceDto];

      return this.apiClient.callApi(
        '/history/variable-instance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getHistoricVariableInstancesCount operation.
     * @callback moduleapi/HistoricVariableInstanceApi~getHistoricVariableInstancesCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Variable Instance Count
     * Queries for the number of historic variable instances that fulfill the given parameters. Takes the same parameters as the [Get Variable Instances](https://docs.camunda.org/manual/develop/reference/rest/history/variable-instance/get-variable-instance-query/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.variableName Filter by variable name.
     * @param {String} opts.variableNameLike Restrict to variables with a name like the parameter.
     * @param {Object} opts.variableValue Filter by variable value. Is treated as a &#x60;String&#x60; object on server side.
     * @param {Boolean} opts.variableNamesIgnoreCase Match the variable name provided in &#x60;variableName&#x60; and &#x60;variableNameLike&#x60; case- insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal.
     * @param {Boolean} opts.variableValuesIgnoreCase Match the variable value provided in &#x60;variableValue&#x60; case-insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal.
     * @param {String} opts.variableTypeIn Only include historic variable instances which belong to one of the passed and comma- separated variable types. A list of all supported variable types can be found [here](https://docs.camunda.org/manual/develop/user-guide/process-engine/variables/#supported-variable-values). **Note:** All non-primitive variables are associated with the type &#x27;serializable&#x27;.
     * @param {Boolean} opts.includeDeleted Include variables that has already been deleted during the execution.
     * @param {String} opts.processInstanceId Filter by the process instance the variable belongs to.
     * @param {String} opts.processInstanceIdIn Only include historic variable instances which belong to one of the passed and comma-separated process instance ids.
     * @param {String} opts.processDefinitionId Filter by the process definition the variable belongs to.
     * @param {String} opts.processDefinitionKey Filter by a key of the process definition the variable belongs to.
     * @param {String} opts.executionIdIn Only include historic variable instances which belong to one of the passed and and comma-separated execution ids.
     * @param {String} opts.caseInstanceId Filter by the case instance the variable belongs to.
     * @param {String} opts.caseExecutionIdIn Only include historic variable instances which belong to one of the passed and and comma-separated case execution ids.
     * @param {String} opts.caseActivityIdIn Only include historic variable instances which belong to one of the passed and and comma-separated case activity ids.
     * @param {String} opts.taskIdIn Only include historic variable instances which belong to one of the passed and and comma-separated task ids.
     * @param {String} opts.activityInstanceIdIn Only include historic variable instances which belong to one of the passed and and comma-separated activity instance ids.
     * @param {String} opts.tenantIdIn Only include historic variable instances which belong to one of the passed and comma- separated tenant ids.
     * @param {Boolean} opts.withoutTenantId Only include historic variable instances that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {String} opts.variableNameIn Only include historic variable instances which belong to one of the passed and comma-separated variable names.
     * @param {module:api/HistoricVariableInstanceApi~getHistoricVariableInstancesCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getHistoricVariableInstancesCount(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'variableName': opts['variableName'],'variableNameLike': opts['variableNameLike'],'variableValue': opts['variableValue'],'variableNamesIgnoreCase': opts['variableNamesIgnoreCase'],'variableValuesIgnoreCase': opts['variableValuesIgnoreCase'],'variableTypeIn': opts['variableTypeIn'],'includeDeleted': opts['includeDeleted'],'processInstanceId': opts['processInstanceId'],'processInstanceIdIn': opts['processInstanceIdIn'],'processDefinitionId': opts['processDefinitionId'],'processDefinitionKey': opts['processDefinitionKey'],'executionIdIn': opts['executionIdIn'],'caseInstanceId': opts['caseInstanceId'],'caseExecutionIdIn': opts['caseExecutionIdIn'],'caseActivityIdIn': opts['caseActivityIdIn'],'taskIdIn': opts['taskIdIn'],'activityInstanceIdIn': opts['activityInstanceIdIn'],'tenantIdIn': opts['tenantIdIn'],'withoutTenantId': opts['withoutTenantId'],'variableNameIn': opts['variableNameIn']
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
        '/history/variable-instance/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the queryHistoricVariableInstances operation.
     * @callback moduleapi/HistoricVariableInstanceApi~queryHistoricVariableInstancesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HistoricVariableInstanceDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Variable Instances (POST)
     * Queries for historic variable instances that fulfill the given parameters. This method is slightly more powerful than the [Get Variable Instances](https://docs.camunda.org/manual/develop/reference/rest/history/variable-instance/get-variable-instance-query/) method because it allows filtering by variable values of the different types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;.
     * @param {Object} opts Optional parameters
     * @param {module:model/HistoricVariableInstanceQueryDto} opts.body 
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {Boolean} opts.deserializeValues Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine.
     * @param {module:api/HistoricVariableInstanceApi~queryHistoricVariableInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    queryHistoricVariableInstances(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        'firstResult': opts['firstResult'],'maxResults': opts['maxResults'],'deserializeValues': opts['deserializeValues']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [HistoricVariableInstanceDto];

      return this.apiClient.callApi(
        '/history/variable-instance', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the queryHistoricVariableInstancesCount operation.
     * @callback moduleapi/HistoricVariableInstanceApi~queryHistoricVariableInstancesCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Variable Instance Count (POST)
     * Queries for historic variable instances that fulfill the given parameters. This method takes the same message body as the [Get Variable Instances (POST)](https://docs.camunda.org/manual/develop/reference/rest/history/variable-instance/post-variable-instance-query/) method and therefore it is more powerful regarding variable values than the [Get Variable Instance Count](https://docs.camunda.org/manual/develop/reference/rest/history/variable-instance/get-variable-instance-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {module:model/HistoricVariableInstanceQueryDto} opts.body 
     * @param {module:api/HistoricVariableInstanceApi~queryHistoricVariableInstancesCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    queryHistoricVariableInstancesCount(opts, callback) {
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
        '/history/variable-instance/count', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}