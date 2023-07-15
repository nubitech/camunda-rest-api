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
import {VariableInstanceDto} from '../model/VariableInstanceDto';
import {VariableInstanceQueryDto} from '../model/VariableInstanceQueryDto';

/**
* VariableInstance service.
* @module api/VariableInstanceApi
* @version 7.20.0
*/
export class VariableInstanceApi {

    /**
    * Constructs a new VariableInstanceApi. 
    * @alias module:api/VariableInstanceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getVariableInstance operation.
     * @callback moduleapi/VariableInstanceApi~getVariableInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariableInstanceDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Variable Instance
     * Retrieves a variable by id.
     * @param {String} id The id of the variable instance.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deserializeValue Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:**  While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine.
     * @param {module:api/VariableInstanceApi~getVariableInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getVariableInstance(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getVariableInstance");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'deserializeValue': opts['deserializeValue']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VariableInstanceDto;

      return this.apiClient.callApi(
        '/variable-instance/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getVariableInstanceBinary operation.
     * @callback moduleapi/VariableInstanceApi~getVariableInstanceBinaryCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Variable Instance (Binary)
     * Retrieves the content of a variable by id. Applicable for byte array and file variables.
     * @param {String} id The id of the variable instance.
     * @param {module:api/VariableInstanceApi~getVariableInstanceBinaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getVariableInstanceBinary(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getVariableInstanceBinary");
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
        '/variable-instance/{id}/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getVariableInstances operation.
     * @callback moduleapi/VariableInstanceApi~getVariableInstancesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/VariableInstanceDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Variable Instances
     * Query for variable instances that fulfill given parameters. Parameters may be the properties of variable instances, such as the name or type. The size of the result set can be retrieved by using the [Get Variable Instance Count](https://docs.camunda.org/manual/develop/reference/rest/variable-instance/get-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.variableName Filter by variable instance name.
     * @param {String} opts.variableNameLike Filter by the variable instance name. The parameter can include the wildcard &#x60;%&#x60; to express like-strategy such as: starts with (&#x60;%&#x60;name), ends with (name&#x60;%&#x60;) or contains (&#x60;%&#x60;name&#x60;%&#x60;).
     * @param {String} opts.processInstanceIdIn Only include variable instances which belong to one of the passed and comma-separated process instance ids.
     * @param {String} opts.executionIdIn Only include variable instances which belong to one of the passed and comma-separated execution ids.
     * @param {String} opts.caseInstanceIdIn Only include variable instances which belong to one of the passed and comma-separated case instance ids.
     * @param {String} opts.caseExecutionIdIn Only include variable instances which belong to one of the passed and comma-separated case execution ids.
     * @param {String} opts.taskIdIn Only include variable instances which belong to one of the passed and comma-separated task ids.
     * @param {String} opts.batchIdIn Only include variable instances which belong to one of the passed and comma-separated batch ids.
     * @param {String} opts.activityInstanceIdIn Only include variable instances which belong to one of the passed and comma-separated activity instance ids.
     * @param {String} opts.tenantIdIn Only include variable instances which belong to one of the passed and comma-separated tenant ids.
     * @param {String} opts.variableValues Only include variable instances that have the certain values. Value filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note:** Values are always treated as &#x60;String&#x60; objects on server side.  Valid operator values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters.
     * @param {Boolean} opts.variableNamesIgnoreCase Match all variable names provided in &#x60;variableValues&#x60; case-insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal.
     * @param {Boolean} opts.variableValuesIgnoreCase Match all variable values provided in &#x60;variableValues&#x60; case-insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal.
     * @param {String} opts.variableScopeIdIn Only include variable instances which belong to one of passed scope ids.
     * @param {module:model/String} opts.sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {module:model/String} opts.sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {Boolean} opts.deserializeValues Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine.
     * @param {module:api/VariableInstanceApi~getVariableInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getVariableInstances(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'variableName': opts['variableName'],'variableNameLike': opts['variableNameLike'],'processInstanceIdIn': opts['processInstanceIdIn'],'executionIdIn': opts['executionIdIn'],'caseInstanceIdIn': opts['caseInstanceIdIn'],'caseExecutionIdIn': opts['caseExecutionIdIn'],'taskIdIn': opts['taskIdIn'],'batchIdIn': opts['batchIdIn'],'activityInstanceIdIn': opts['activityInstanceIdIn'],'tenantIdIn': opts['tenantIdIn'],'variableValues': opts['variableValues'],'variableNamesIgnoreCase': opts['variableNamesIgnoreCase'],'variableValuesIgnoreCase': opts['variableValuesIgnoreCase'],'variableScopeIdIn': opts['variableScopeIdIn'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'firstResult': opts['firstResult'],'maxResults': opts['maxResults'],'deserializeValues': opts['deserializeValues']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [VariableInstanceDto];

      return this.apiClient.callApi(
        '/variable-instance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getVariableInstancesCount operation.
     * @callback moduleapi/VariableInstanceApi~getVariableInstancesCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Variable Instance Count
     * Query for the number of variable instances that fulfill given parameters. Takes the same parameters as the [Get Variable Instances](https://docs.camunda.org/manual/develop/reference/rest/variable-instance/get-query/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.variableName Filter by variable instance name.
     * @param {String} opts.variableNameLike Filter by the variable instance name. The parameter can include the wildcard &#x60;%&#x60; to express like-strategy such as: starts with (&#x60;%&#x60;name), ends with (name&#x60;%&#x60;) or contains (&#x60;%&#x60;name&#x60;%&#x60;).
     * @param {String} opts.processInstanceIdIn Only include variable instances which belong to one of the passed and comma-separated process instance ids.
     * @param {String} opts.executionIdIn Only include variable instances which belong to one of the passed and comma-separated execution ids.
     * @param {String} opts.caseInstanceIdIn Only include variable instances which belong to one of the passed and comma-separated case instance ids.
     * @param {String} opts.caseExecutionIdIn Only include variable instances which belong to one of the passed and comma-separated case execution ids.
     * @param {String} opts.taskIdIn Only include variable instances which belong to one of the passed and comma-separated task ids.
     * @param {String} opts.batchIdIn Only include variable instances which belong to one of the passed and comma-separated batch ids.
     * @param {String} opts.activityInstanceIdIn Only include variable instances which belong to one of the passed and comma-separated activity instance ids.
     * @param {String} opts.tenantIdIn Only include variable instances which belong to one of the passed and comma-separated tenant ids.
     * @param {String} opts.variableValues Only include variable instances that have the certain values. Value filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note:** Values are always treated as &#x60;String&#x60; objects on server side.  Valid operator values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters.
     * @param {Boolean} opts.variableNamesIgnoreCase Match all variable names provided in &#x60;variableValues&#x60; case-insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal.
     * @param {Boolean} opts.variableValuesIgnoreCase Match all variable values provided in &#x60;variableValues&#x60; case-insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal.
     * @param {String} opts.variableScopeIdIn Only include variable instances which belong to one of passed scope ids.
     * @param {module:model/String} opts.sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {module:model/String} opts.sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {module:api/VariableInstanceApi~getVariableInstancesCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getVariableInstancesCount(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'variableName': opts['variableName'],'variableNameLike': opts['variableNameLike'],'processInstanceIdIn': opts['processInstanceIdIn'],'executionIdIn': opts['executionIdIn'],'caseInstanceIdIn': opts['caseInstanceIdIn'],'caseExecutionIdIn': opts['caseExecutionIdIn'],'taskIdIn': opts['taskIdIn'],'batchIdIn': opts['batchIdIn'],'activityInstanceIdIn': opts['activityInstanceIdIn'],'tenantIdIn': opts['tenantIdIn'],'variableValues': opts['variableValues'],'variableNamesIgnoreCase': opts['variableNamesIgnoreCase'],'variableValuesIgnoreCase': opts['variableValuesIgnoreCase'],'variableScopeIdIn': opts['variableScopeIdIn'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder']
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
        '/variable-instance/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the queryVariableInstances operation.
     * @callback moduleapi/VariableInstanceApi~queryVariableInstancesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/VariableInstanceDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Variable Instances (POST)
     * Query for variable instances that fulfill given parameters through a JSON object. This method is slightly more powerful than the [Get Variable Instances](https://docs.camunda.org/manual/develop/reference/rest/variable- instance/get-query/) method because it allows filtering by multiple variable instances of types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;.
     * @param {Object} opts Optional parameters
     * @param {module:model/VariableInstanceQueryDto} opts.body 
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {Boolean} opts.deserializeValues Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine.
     * @param {module:api/VariableInstanceApi~queryVariableInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    queryVariableInstances(opts, callback) {
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
      let returnType = [VariableInstanceDto];

      return this.apiClient.callApi(
        '/variable-instance', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the queryVariableInstancesCount operation.
     * @callback moduleapi/VariableInstanceApi~queryVariableInstancesCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Variable Instance Count (POST)
     * Query for the number of variable instances that fulfill given parameters. This method takes the same message body as the [Get Variable Instances POST](https://docs.camunda.org/manual/develop/reference/rest/variable- instance/post-query/) method and therefore it is slightly more powerful than the [Get Variable Instance Count](https://docs.camunda.org/manual/develop/reference/rest/variable-instance/get-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {module:model/VariableInstanceQueryDto} opts.body 
     * @param {module:api/VariableInstanceApi~queryVariableInstancesCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    queryVariableInstancesCount(opts, callback) {
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
        '/variable-instance/count', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}