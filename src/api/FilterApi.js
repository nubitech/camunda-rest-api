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
import {CreateFilterDto} from '../model/CreateFilterDto';
import {ExceptionDto} from '../model/ExceptionDto';
import {FilterDto} from '../model/FilterDto';
import {ResourceOptionsDto} from '../model/ResourceOptionsDto';

/**
* Filter service.
* @module api/FilterApi
* @version 7.20.0
*/
export class FilterApi {

    /**
    * Constructs a new FilterApi. 
    * @alias module:api/FilterApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createFilter operation.
     * @callback moduleapi/FilterApi~createFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FilterDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Filter
     * Creates a new filter.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateFilterDto} opts.body 
     * @param {module:api/FilterApi~createFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createFilter(opts, callback) {
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
      let returnType = FilterDto;

      return this.apiClient.callApi(
        '/filter/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteFilter operation.
     * @callback moduleapi/FilterApi~deleteFilterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Filter
     * Deletes a filter by id.
     * @param {String} id The id of the filter to be deleted.
     * @param {module:api/FilterApi~deleteFilterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteFilter(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteFilter");
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
        '/filter/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the executeFilterCount operation.
     * @callback moduleapi/FilterApi~executeFilterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute Filter Count
     * Executes the saved query of the filter by id and returns the count.
     * @param {String} id The id of the filter to execute.
     * @param {module:api/FilterApi~executeFilterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    executeFilterCount(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling executeFilterCount");
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
      let returnType = CountResultDto;

      return this.apiClient.callApi(
        '/filter/{id}/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the executeFilterList operation.
     * @callback moduleapi/FilterApi~executeFilterListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute Filter List
     * Executes the saved query of the filter by id and returns the result list.
     * @param {String} id The id of the filter to execute.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {module:api/FilterApi~executeFilterListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    executeFilterList(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling executeFilterList");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'firstResult': opts['firstResult'],'maxResults': opts['maxResults']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Object];

      return this.apiClient.callApi(
        '/filter/{id}/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the executeFilterSingleResult operation.
     * @callback moduleapi/FilterApi~executeFilterSingleResultCallback
     * @param {String} error Error message, if any.
     * @param {Object{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute Filter Single Result
     * Executes the saved query of the filter by id and returns the single result.
     * @param {String} id The id of the filter to execute.
     * @param {module:api/FilterApi~executeFilterSingleResultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    executeFilterSingleResult(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling executeFilterSingleResult");
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
      let returnType = Object;

      return this.apiClient.callApi(
        '/filter/{id}/singleResult', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the filterResourceOptions operation.
     * @callback moduleapi/FilterApi~filterResourceOptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceOptionsDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Filter Resource Options
     * The OPTIONS request allows you to check for the set of available operations  that the currently authenticated user can perform on the &#x60;/filter&#x60; resource. Whether the user can perform an operation or not may depend on various factors, including the users authorizations to interact with this resource and the internal configuration of the process engine.
     * @param {module:api/FilterApi~filterResourceOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    filterResourceOptions(callback) {
      
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
        '/filter', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the filterResourceOptionsSingle operation.
     * @callback moduleapi/FilterApi~filterResourceOptionsSingleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceOptionsDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Filter Resource Options
     * The OPTIONS request allows you to check for the set of available operations  that the currently authenticated user can perform on the &#x60;/filter&#x60; resource. Whether the user can perform an operation or not may depend on various factors, including the users authorizations to interact with this resource and the internal configuration of the process engine.
     * @param {String} id The id of the filter to be checked.
     * @param {module:api/FilterApi~filterResourceOptionsSingleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    filterResourceOptionsSingle(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling filterResourceOptionsSingle");
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
        '/filter/{id}', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getFilterCount operation.
     * @callback moduleapi/FilterApi~getFilterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Filter Count
     * Retrieves the number of filters that fulfill a provided query. Corresponds to the size of the result set when using the  [Get Filters](https://docs.camunda.org/manual/develop/reference/rest/filter/get-query/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterId Filter by the id of the filter.
     * @param {String} opts.resourceType Filter by the resource type of the filter, e.g., &#x60;Task&#x60;.
     * @param {String} opts.name Filter by the name of the filter.
     * @param {String} opts.nameLike Filter by the name that the parameter is a substring of.
     * @param {String} opts.owner Filter by the user id of the owner of the filter.
     * @param {module:api/FilterApi~getFilterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getFilterCount(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'filterId': opts['filterId'],'resourceType': opts['resourceType'],'name': opts['name'],'nameLike': opts['nameLike'],'owner': opts['owner']
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
        '/filter/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getFilterList operation.
     * @callback moduleapi/FilterApi~getFilterListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FilterDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Filters
     * Queries for a list of filters using a list of parameters. The size of the result set can be retrieved by using the [Get Filter Count](https://docs.camunda.org/manual/develop/reference/rest/filter/get-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterId Filter by the id of the filter.
     * @param {String} opts.resourceType Filter by the resource type of the filter, e.g., &#x60;Task&#x60;.
     * @param {String} opts.name Filter by the name of the filter.
     * @param {String} opts.nameLike Filter by the name that the parameter is a substring of.
     * @param {String} opts.owner Filter by the user id of the owner of the filter.
     * @param {Boolean} opts.itemCount If set to &#x60;true&#x60;, each filter result will contain an &#x60;itemCount&#x60; property with the number of items matched by the filter itself.
     * @param {module:model/String} opts.sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {module:model/String} opts.sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {module:api/FilterApi~getFilterListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getFilterList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'filterId': opts['filterId'],'resourceType': opts['resourceType'],'name': opts['name'],'nameLike': opts['nameLike'],'owner': opts['owner'],'itemCount': opts['itemCount'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'firstResult': opts['firstResult'],'maxResults': opts['maxResults']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [FilterDto];

      return this.apiClient.callApi(
        '/filter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getSingleFilter operation.
     * @callback moduleapi/FilterApi~getSingleFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FilterDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Single Filter
     * Retrieves a single filter by id, according to the &#x60;Filter&#x60; interface in the engine.
     * @param {String} id The id of the filter to be retrieved.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.itemCount If set to &#x60;true&#x60;, each filter result will contain an &#x60;itemCount&#x60; property with the number of items matched by the filter itself.
     * @param {module:api/FilterApi~getSingleFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getSingleFilter(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSingleFilter");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'itemCount': opts['itemCount']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FilterDto;

      return this.apiClient.callApi(
        '/filter/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postExecuteFilterCount operation.
     * @callback moduleapi/FilterApi~postExecuteFilterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute Filter Count (POST)
     * Executes the saved query of the filter by id and returns the count. This method is slightly more powerful then the [Get Execute Filter Count](https://docs.camunda.org/manual/develop/reference/rest/filter/get-execute-count/)  method because it allows to extend the saved query of the filter.
     * @param {String} id The id of the filter to execute.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body A JSON object which corresponds to the type of the saved query of the filter, i.e., if the resource type of the filter is Task the body should form a valid task query corresponding to the Task resource.
     * @param {module:api/FilterApi~postExecuteFilterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    postExecuteFilterCount(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postExecuteFilterCount");
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
      let returnType = CountResultDto;

      return this.apiClient.callApi(
        '/filter/{id}/count', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postExecuteFilterList operation.
     * @callback moduleapi/FilterApi~postExecuteFilterListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute Filter List (POST)
     * Executes the saved query of the filter by id and returns the result list. This method is slightly more powerful then the  [Get Execute FilterList](https://docs.camunda.org/manual/develop/reference/rest/filter/get-execute-list/) method because it allows to extend the saved query of the filter.
     * @param {String} id The id of the filter to execute.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body A JSON object which corresponds to the type of the saved query of the filter, i.e., if the resource type of the filter is Task the body should form a valid task query corresponding to the Task resource.
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {module:api/FilterApi~postExecuteFilterListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    postExecuteFilterList(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postExecuteFilterList");
      }

      let pathParams = {
        'id': id
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
      let returnType = [Object];

      return this.apiClient.callApi(
        '/filter/{id}/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postExecuteFilterSingleResult operation.
     * @callback moduleapi/FilterApi~postExecuteFilterSingleResultCallback
     * @param {String} error Error message, if any.
     * @param {Object{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute Filter Single Result (POST)
     * Executes the saved query of the filter by id and returns the single result. This method is slightly more powerful then the [Get Execute Filter Single Result](https://docs.camunda.org/manual/develop/reference/rest/filter/get-execute-single-result/) method because it allows to extend the saved query of the filter.
     * @param {String} id The id of the filter to execute.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body A JSON object which corresponds to the type of the saved query of the filter, i.e., if the resource type of the filter is Task the body should form a valid task query corresponding to the Task resource.
     * @param {module:api/FilterApi~postExecuteFilterSingleResultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    postExecuteFilterSingleResult(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postExecuteFilterSingleResult");
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
      let returnType = Object;

      return this.apiClient.callApi(
        '/filter/{id}/singleResult', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateFilter operation.
     * @callback moduleapi/FilterApi~updateFilterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Filter
     * Updates an existing filter.
     * @param {String} id The id of the filter to be updated.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateFilterDto} opts.body 
     * @param {module:api/FilterApi~updateFilterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateFilter(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateFilter");
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
        '/filter/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}