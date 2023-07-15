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
import {DecisionRequirementsDefinitionDto} from '../model/DecisionRequirementsDefinitionDto';
import {DecisionRequirementsDefinitionXmlDto} from '../model/DecisionRequirementsDefinitionXmlDto';
import {ExceptionDto} from '../model/ExceptionDto';

/**
* DecisionRequirementsDefinition service.
* @module api/DecisionRequirementsDefinitionApi
* @version 7.20.0
*/
export class DecisionRequirementsDefinitionApi {

    /**
    * Constructs a new DecisionRequirementsDefinitionApi. 
    * @alias module:api/DecisionRequirementsDefinitionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getDecisionRequirementsDefinitionById operation.
     * @callback moduleapi/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DecisionRequirementsDefinitionDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Decision Requirements Definition by ID
     * Retrieves a decision requirements definition according to the &#x60;DecisionRequirementsDefinition&#x60; interface in the engine.
     * @param {String} id The id of the decision requirements definition to be retrieved.
     * @param {module:api/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDecisionRequirementsDefinitionById(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDecisionRequirementsDefinitionById");
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
      let returnType = DecisionRequirementsDefinitionDto;

      return this.apiClient.callApi(
        '/decision-requirements-definition/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDecisionRequirementsDefinitionByKey operation.
     * @callback moduleapi/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionByKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DecisionRequirementsDefinitionDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Decision Requirements Definition by Key
     * Retrieves a decision requirements definition according to the &#x60;DecisionRequirementsDefinition&#x60; interface in the engine.  Returns the latest version of the decision requirements definition  which belongs to no tenant.
     * @param {String} key The key of the decision requirements definition (the latest version thereof) to be retrieved.
     * @param {module:api/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDecisionRequirementsDefinitionByKey(key, callback) {
      
      let postBody = null;
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getDecisionRequirementsDefinitionByKey");
      }

      let pathParams = {
        'key': key
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
      let returnType = DecisionRequirementsDefinitionDto;

      return this.apiClient.callApi(
        '/decision-requirements-definition/key/{key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDecisionRequirementsDefinitionByKeyAndTenantId operation.
     * @callback moduleapi/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionByKeyAndTenantIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DecisionRequirementsDefinitionDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Decision Requirements Definition by Key and Tenant ID
     * Retrieves a decision requirements definition according to the &#x60;DecisionRequirementsDefinition&#x60; interface in the engine. Returns the latest version of the decision requirements definition  for a tenant.
     * @param {String} key The key of the decision requirements definition (the latest version thereof) to be retrieved.
     * @param {String} tenantId The id of the tenant to which the decision requirements definition belongs to.
     * @param {module:api/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionByKeyAndTenantIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDecisionRequirementsDefinitionByKeyAndTenantId(key, tenantId, callback) {
      
      let postBody = null;
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getDecisionRequirementsDefinitionByKeyAndTenantId");
      }
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling getDecisionRequirementsDefinitionByKeyAndTenantId");
      }

      let pathParams = {
        'key': key,'tenant-id': tenantId
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
      let returnType = DecisionRequirementsDefinitionDto;

      return this.apiClient.callApi(
        '/decision-requirements-definition/key/{key}/tenant-id/{tenant-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDecisionRequirementsDefinitionDiagramById operation.
     * @callback moduleapi/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionDiagramByIdCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Decision Requirements Diagram by ID
     * Retrieves the diagram of a decision requirements definition.
     * @param {String} id The id of the decision requirements definition.
     * @param {module:api/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionDiagramByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDecisionRequirementsDefinitionDiagramById(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDecisionRequirementsDefinitionDiagramById");
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
      let accepts = ['image/_*', 'application/octet-stream', 'application/json'];
      let returnType = 'Blob';

      return this.apiClient.callApi(
        '/decision-requirements-definition/{id}/diagram', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDecisionRequirementsDefinitionDiagramByKey operation.
     * @callback moduleapi/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionDiagramByKeyCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Decision Requirements Diagram by Key
     * Retrieves the diagram of a decision requirements definition. Returns the diagram for the latest version of the decision requirements  definition which belongs to no tenant.
     * @param {String} key The key of the decision requirements definition (the latest version thereof) to be retrieved.
     * @param {module:api/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionDiagramByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDecisionRequirementsDefinitionDiagramByKey(key, callback) {
      
      let postBody = null;
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getDecisionRequirementsDefinitionDiagramByKey");
      }

      let pathParams = {
        'key': key
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['image/_*', 'application/octet-stream', 'application/json'];
      let returnType = 'Blob';

      return this.apiClient.callApi(
        '/decision-requirements-definition/key/{key}/diagram', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDecisionRequirementsDefinitionDiagramByKeyAndTenantId operation.
     * @callback moduleapi/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionDiagramByKeyAndTenantIdCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Decision Requirements Diagram by Key and Tenant ID
     * Retrieves the diagram of a decision requirements definition. Returns the diagram of the latest version of the decision requirements  definition for a tenant.
     * @param {String} key The key of the decision requirements definition (the latest version thereof) to be retrieved.
     * @param {String} tenantId The id of the tenant to which the decision requirements definition belongs to.
     * @param {module:api/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionDiagramByKeyAndTenantIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDecisionRequirementsDefinitionDiagramByKeyAndTenantId(key, tenantId, callback) {
      
      let postBody = null;
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getDecisionRequirementsDefinitionDiagramByKeyAndTenantId");
      }
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling getDecisionRequirementsDefinitionDiagramByKeyAndTenantId");
      }

      let pathParams = {
        'key': key,'tenant-id': tenantId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['image/_*', 'application/octet-stream', 'application/json'];
      let returnType = 'Blob';

      return this.apiClient.callApi(
        '/decision-requirements-definition/key/{key}/tenant-id/{tenant-id}/diagram', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDecisionRequirementsDefinitionDmnXmlById operation.
     * @callback moduleapi/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionDmnXmlByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DecisionRequirementsDefinitionXmlDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get DMN XML by ID
     * Retrieves the DMN XML of a decision requirements definition.
     * @param {String} id The id of the decision requirements definition.
     * @param {module:api/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionDmnXmlByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDecisionRequirementsDefinitionDmnXmlById(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDecisionRequirementsDefinitionDmnXmlById");
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
      let returnType = DecisionRequirementsDefinitionXmlDto;

      return this.apiClient.callApi(
        '/decision-requirements-definition/{id}/xml', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDecisionRequirementsDefinitionDmnXmlByKey operation.
     * @callback moduleapi/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionDmnXmlByKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DecisionRequirementsDefinitionXmlDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get DMN XML by Key
     * Retrieves the DMN XML of a decision requirements definition. Returns the XML for the latest version of the decision requirements  definition which belongs to no tenant.
     * @param {String} key The key of the decision requirements definition (the latest version thereof) to be retrieved.
     * @param {module:api/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionDmnXmlByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDecisionRequirementsDefinitionDmnXmlByKey(key, callback) {
      
      let postBody = null;
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getDecisionRequirementsDefinitionDmnXmlByKey");
      }

      let pathParams = {
        'key': key
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
      let returnType = DecisionRequirementsDefinitionXmlDto;

      return this.apiClient.callApi(
        '/decision-requirements-definition/key/{key}/xml', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDecisionRequirementsDefinitionDmnXmlByKeyAndTenantId operation.
     * @callback moduleapi/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionDmnXmlByKeyAndTenantIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DecisionRequirementsDefinitionXmlDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get DMN XML by Key and Tenant ID
     * Retrieves the DMN XML of a decision requirements definition. Returns the XML of the latest version of the decision requirements  definition for a tenant.
     * @param {String} key The key of the decision requirements definition (the latest version thereof) to be retrieved.
     * @param {String} tenantId The id of the tenant to which the decision requirements definition belongs to.
     * @param {module:api/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionDmnXmlByKeyAndTenantIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDecisionRequirementsDefinitionDmnXmlByKeyAndTenantId(key, tenantId, callback) {
      
      let postBody = null;
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getDecisionRequirementsDefinitionDmnXmlByKeyAndTenantId");
      }
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling getDecisionRequirementsDefinitionDmnXmlByKeyAndTenantId");
      }

      let pathParams = {
        'key': key,'tenant-id': tenantId
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
      let returnType = DecisionRequirementsDefinitionXmlDto;

      return this.apiClient.callApi(
        '/decision-requirements-definition/key/{key}/tenant-id/{tenant-id}/xml', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDecisionRequirementsDefinitions operation.
     * @callback moduleapi/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DecisionRequirementsDefinitionDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Decision Requirements Definitions
     * Queries for decision requirements definitions that fulfill given parameters. Parameters may be the properties of decision requirements definitions, such as the name, key or version.  The size of the result set can be retrieved by using the [Get Decision Requirements Definition Count](https://docs.camunda.org/manual/develop/reference/rest/decision-requirements-definition/get-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.decisionRequirementsDefinitionId Filter by decision requirements definition id.
     * @param {String} opts.decisionRequirementsDefinitionIdIn Filter by decision requirements definition ids.
     * @param {String} opts.name Filter by decision requirements definition name.
     * @param {String} opts.nameLike Filter by decision requirements definition names that the parameter is a substring of.
     * @param {String} opts.deploymentId Filter by the id of the deployment a decision requirement definition belongs to.
     * @param {String} opts.key Filter by decision requirements definition key, i.e., the id in the DMN 1.3 XML. Exact match.
     * @param {String} opts.keyLike Filter by decision requirements definition keys that the parameter is a substring of.
     * @param {String} opts.category Filter by decision requirements definition category. Exact match.
     * @param {String} opts.categoryLike Filter by decision requirements definition categories that the parameter is a substring of.
     * @param {Number} opts.version Filter by decision requirements definition version.
     * @param {Boolean} opts.latestVersion Only include those decision requirements definitions that are latest versions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {String} opts.resourceName Filter by the name of the decision requirements definition resource. Exact match.
     * @param {String} opts.resourceNameLike Filter by names of those decision requirements definition resources that the parameter is a substring of.
     * @param {String} opts.tenantIdIn Filter by a comma-separated list of tenant ids. A decision requirements definition must have one of the given tenant ids.
     * @param {Boolean} opts.withoutTenantId Only include decision requirements definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.includeDecisionRequirementsDefinitionsWithoutTenantId Include decision requirements definitions which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {module:model/String} opts.sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {module:model/String} opts.sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {module:api/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDecisionRequirementsDefinitions(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'decisionRequirementsDefinitionId': opts['decisionRequirementsDefinitionId'],'decisionRequirementsDefinitionIdIn': opts['decisionRequirementsDefinitionIdIn'],'name': opts['name'],'nameLike': opts['nameLike'],'deploymentId': opts['deploymentId'],'key': opts['key'],'keyLike': opts['keyLike'],'category': opts['category'],'categoryLike': opts['categoryLike'],'version': opts['version'],'latestVersion': opts['latestVersion'],'resourceName': opts['resourceName'],'resourceNameLike': opts['resourceNameLike'],'tenantIdIn': opts['tenantIdIn'],'withoutTenantId': opts['withoutTenantId'],'includeDecisionRequirementsDefinitionsWithoutTenantId': opts['includeDecisionRequirementsDefinitionsWithoutTenantId'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'firstResult': opts['firstResult'],'maxResults': opts['maxResults']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DecisionRequirementsDefinitionDto];

      return this.apiClient.callApi(
        '/decision-requirements-definition', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDecisionRequirementsDefinitionsCount operation.
     * @callback moduleapi/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionsCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Decision Requirements Definition Count
     * Requests the number of decision requirements definitions that fulfill the query criteria. Takes the same filtering parameters as the [Get Decision Requirements Definitions](https://docs.camunda.org/manual/develop/reference/rest/decision-requirements-definition/get-query/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.decisionRequirementsDefinitionId Filter by decision requirements definition id.
     * @param {String} opts.decisionRequirementsDefinitionIdIn Filter by decision requirements definition ids.
     * @param {String} opts.name Filter by decision requirements definition name.
     * @param {String} opts.nameLike Filter by decision requirements definition names that the parameter is a substring of.
     * @param {String} opts.deploymentId Filter by the id of the deployment a decision requirement definition belongs to.
     * @param {String} opts.key Filter by decision requirements definition key, i.e., the id in the DMN 1.3 XML. Exact match.
     * @param {String} opts.keyLike Filter by decision requirements definition keys that the parameter is a substring of.
     * @param {String} opts.category Filter by decision requirements definition category. Exact match.
     * @param {String} opts.categoryLike Filter by decision requirements definition categories that the parameter is a substring of.
     * @param {Number} opts.version Filter by decision requirements definition version.
     * @param {Boolean} opts.latestVersion Only include those decision requirements definitions that are latest versions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {String} opts.resourceName Filter by the name of the decision requirements definition resource. Exact match.
     * @param {String} opts.resourceNameLike Filter by names of those decision requirements definition resources that the parameter is a substring of.
     * @param {String} opts.tenantIdIn Filter by a comma-separated list of tenant ids. A decision requirements definition must have one of the given tenant ids.
     * @param {Boolean} opts.withoutTenantId Only include decision requirements definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.includeDecisionRequirementsDefinitionsWithoutTenantId Include decision requirements definitions which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {module:api/DecisionRequirementsDefinitionApi~getDecisionRequirementsDefinitionsCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDecisionRequirementsDefinitionsCount(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'decisionRequirementsDefinitionId': opts['decisionRequirementsDefinitionId'],'decisionRequirementsDefinitionIdIn': opts['decisionRequirementsDefinitionIdIn'],'name': opts['name'],'nameLike': opts['nameLike'],'deploymentId': opts['deploymentId'],'key': opts['key'],'keyLike': opts['keyLike'],'category': opts['category'],'categoryLike': opts['categoryLike'],'version': opts['version'],'latestVersion': opts['latestVersion'],'resourceName': opts['resourceName'],'resourceNameLike': opts['resourceNameLike'],'tenantIdIn': opts['tenantIdIn'],'withoutTenantId': opts['withoutTenantId'],'includeDecisionRequirementsDefinitionsWithoutTenantId': opts['includeDecisionRequirementsDefinitionsWithoutTenantId']
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
        '/decision-requirements-definition/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}