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
import {MetricsIntervalResultDto} from '../model/MetricsIntervalResultDto';
import {MetricsResultDto} from '../model/MetricsResultDto';

/**
* Metrics service.
* @module api/MetricsApi
* @version 7.20.0
*/
export class MetricsApi {

    /**
    * Constructs a new MetricsApi. 
    * @alias module:api/MetricsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deleteTaskMetrics operation.
     * @callback moduleapi/MetricsApi~deleteTaskMetricsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Task Worker Metrics
     * Deletes all task worker metrics prior to the given date or all if no date is provided.
     * @param {Object} opts Optional parameters
     * @param {Date} opts._date The date prior to which all task worker metrics should be deleted.
     * @param {module:api/MetricsApi~deleteTaskMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteTaskMetrics(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'date': opts['_date']
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
        '/metrics/task-worker', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getMetrics operation.
     * @callback moduleapi/MetricsApi~getMetricsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricsResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Sum
     * Retrieves the &#x60;sum&#x60; (count) for a given metric.
     * @param {module:model/String} metricsName The name of the metric.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate The start date (inclusive).
     * @param {Date} opts.endDate The end date (exclusive).
     * @param {module:api/MetricsApi~getMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getMetrics(metricsName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'metricsName' is set
      if (metricsName === undefined || metricsName === null) {
        throw new Error("Missing the required parameter 'metricsName' when calling getMetrics");
      }

      let pathParams = {
        'metrics-name': metricsName
      };
      let queryParams = {
        'startDate': opts['startDate'],'endDate': opts['endDate']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetricsResultDto;

      return this.apiClient.callApi(
        '/metrics/{metrics-name}/sum', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the interval operation.
     * @callback moduleapi/MetricsApi~intervalCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MetricsIntervalResultDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Metrics in Interval
     * Retrieves a list of metrics, aggregated for a given interval.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.name The name of the metric.
     * @param {String} opts.reporter The name of the reporter (host), on which the metrics was logged. This will have value provided by the [hostname configuration property](https://docs.camunda.org/manual/develop/reference/deployment-descriptors/tags/process-engine/#hostname).
     * @param {Date} opts.startDate The start date (inclusive).
     * @param {Date} opts.endDate The end date (exclusive).
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {String} opts.interval The interval for which the metrics should be aggregated. Time unit is seconds. Default: The interval is set to 15 minutes (900 seconds). (default to <.>)
     * @param {String} opts.aggregateByReporter Aggregate metrics by reporter.
     * @param {module:api/MetricsApi~intervalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    interval(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'name': opts['name'],'reporter': opts['reporter'],'startDate': opts['startDate'],'endDate': opts['endDate'],'firstResult': opts['firstResult'],'maxResults': opts['maxResults'],'interval': opts['interval'],'aggregateByReporter': opts['aggregateByReporter']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [MetricsIntervalResultDto];

      return this.apiClient.callApi(
        '/metrics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}