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
import {PatchVariablesDto} from '../model/PatchVariablesDto';
import {VariableValueDto} from '../model/VariableValueDto';

/**
* TaskLocalVariable service.
* @module api/TaskLocalVariableApi
* @version 7.20.0
*/
export class TaskLocalVariableApi {

    /**
    * Constructs a new TaskLocalVariableApi. 
    * @alias module:api/TaskLocalVariableApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deleteTaskLocalVariable operation.
     * @callback moduleapi/TaskLocalVariableApi~deleteTaskLocalVariableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Local Task Variable
     * Removes a local variable from a task by id.
     * @param {String} id The id of the task to delete the variable from.
     * @param {String} varName The name of the variable to be removed.
     * @param {module:api/TaskLocalVariableApi~deleteTaskLocalVariableCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteTaskLocalVariable(id, varName, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteTaskLocalVariable");
      }
      // verify the required parameter 'varName' is set
      if (varName === undefined || varName === null) {
        throw new Error("Missing the required parameter 'varName' when calling deleteTaskLocalVariable");
      }

      let pathParams = {
        'id': id,'varName': varName
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
        '/task/{id}/localVariables/{varName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTaskLocalVariable operation.
     * @callback moduleapi/TaskLocalVariableApi~getTaskLocalVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariableValueDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Local Task Variable
     * Retrieves a variable from the context of a given task by id.
     * @param {String} id The id of the task to retrieve the variable from.
     * @param {String} varName The name of the variable to get
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deserializeValue Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. (default to <.>)
     * @param {module:api/TaskLocalVariableApi~getTaskLocalVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTaskLocalVariable(id, varName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTaskLocalVariable");
      }
      // verify the required parameter 'varName' is set
      if (varName === undefined || varName === null) {
        throw new Error("Missing the required parameter 'varName' when calling getTaskLocalVariable");
      }

      let pathParams = {
        'id': id,'varName': varName
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
      let returnType = VariableValueDto;

      return this.apiClient.callApi(
        '/task/{id}/localVariables/{varName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTaskLocalVariableBinary operation.
     * @callback moduleapi/TaskLocalVariableApi~getTaskLocalVariableBinaryCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Local Task Variable (Binary)
     * Retrieves a binary variable from the context of a given task by id. Applicable for byte array and file variables.
     * @param {String} id The id of the task to retrieve the variable for.
     * @param {String} varName The name of the variable to retrieve.
     * @param {module:api/TaskLocalVariableApi~getTaskLocalVariableBinaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTaskLocalVariableBinary(id, varName, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTaskLocalVariableBinary");
      }
      // verify the required parameter 'varName' is set
      if (varName === undefined || varName === null) {
        throw new Error("Missing the required parameter 'varName' when calling getTaskLocalVariableBinary");
      }

      let pathParams = {
        'id': id,'varName': varName
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
        '/task/{id}/localVariables/{varName}/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTaskLocalVariables operation.
     * @callback moduleapi/TaskLocalVariableApi~getTaskLocalVariablesCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, module:model/{'String': VariableValueDto}>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Local Task Variables
     * Retrieves all variables of a given task by id.
     * @param {String} id The id of the task to retrieve the variables from.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deserializeValues Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. (default to <.>)
     * @param {module:api/TaskLocalVariableApi~getTaskLocalVariablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTaskLocalVariables(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTaskLocalVariables");
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
      let returnType = {'String': VariableValueDto};

      return this.apiClient.callApi(
        '/task/{id}/localVariables', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the modifyTaskLocalVariables operation.
     * @callback moduleapi/TaskLocalVariableApi~modifyTaskLocalVariablesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update/Delete Local Task Variables
     * Updates or deletes the variables in the context of a task. Updates precede deletions. So, if a variable is updated AND deleted, the deletion overrides the update.
     * @param {String} id The id of the task to set variables for.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchVariablesDto} opts.body 
     * @param {module:api/TaskLocalVariableApi~modifyTaskLocalVariablesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    modifyTaskLocalVariables(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling modifyTaskLocalVariables");
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
        '/task/{id}/localVariables', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the putTaskLocalVariable operation.
     * @callback moduleapi/TaskLocalVariableApi~putTaskLocalVariableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Local Task Variable
     * Sets a variable in the context of a given task.
     * @param {String} id The id of the task to set the variable for.
     * @param {String} varName The name of the variable to set.
     * @param {Object} opts Optional parameters
     * @param {module:model/VariableValueDto} opts.body 
     * @param {module:api/TaskLocalVariableApi~putTaskLocalVariableCallback} callback The callback function, accepting three arguments: error, data, response
     */
    putTaskLocalVariable(id, varName, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putTaskLocalVariable");
      }
      // verify the required parameter 'varName' is set
      if (varName === undefined || varName === null) {
        throw new Error("Missing the required parameter 'varName' when calling putTaskLocalVariable");
      }

      let pathParams = {
        'id': id,'varName': varName
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
        '/task/{id}/localVariables/{varName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the setBinaryTaskLocalVariable operation.
     * @callback moduleapi/TaskLocalVariableApi~setBinaryTaskLocalVariableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Local Task Variable (Binary)
     * Sets the serialized value for a binary variable or the binary value for a file variable.
     * @param {String} id The id of the task to retrieve the variable for.
     * @param {String} varName The name of the variable to retrieve.
     * @param {Object} opts Optional parameters
     * @param {Blob} opts.data 
     * @param {module:model/String} opts.valueType 
     * @param {module:api/TaskLocalVariableApi~setBinaryTaskLocalVariableCallback} callback The callback function, accepting three arguments: error, data, response
     */
    setBinaryTaskLocalVariable(id, varName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setBinaryTaskLocalVariable");
      }
      // verify the required parameter 'varName' is set
      if (varName === undefined || varName === null) {
        throw new Error("Missing the required parameter 'varName' when calling setBinaryTaskLocalVariable");
      }

      let pathParams = {
        'id': id,'varName': varName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'data': opts['data'],'valueType': opts['valueType']
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/task/{id}/localVariables/{varName}/data', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}