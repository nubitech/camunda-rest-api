# CamundaRestApi.MetricsApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTaskMetrics**](MetricsApi.md#deleteTaskMetrics) | **DELETE** /metrics/task-worker | Delete Task Worker Metrics
[**getMetrics**](MetricsApi.md#getMetrics) | **GET** /metrics/{metrics-name}/sum | Get Sum
[**interval**](MetricsApi.md#interval) | **GET** /metrics | Get Metrics in Interval

<a name="deleteTaskMetrics"></a>
# **deleteTaskMetrics**
> deleteTaskMetrics(opts)

Delete Task Worker Metrics

Deletes all task worker metrics prior to the given date or all if no date is provided.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.MetricsApi();
let opts = { 
  '_date': new Date("2013-10-20T19:20:30+01:00") // Date | The date prior to which all task worker metrics should be deleted.
};
apiInstance.deleteTaskMetrics(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **Date**| The date prior to which all task worker metrics should be deleted. | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMetrics"></a>
# **getMetrics**
> MetricsResultDto getMetrics(metricsName, opts)

Get Sum

Retrieves the &#x60;sum&#x60; (count) for a given metric.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.MetricsApi();
let metricsName = "metricsName_example"; // String | The name of the metric.
let opts = { 
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | The start date (inclusive).
  'endDate': new Date("2013-10-20T19:20:30+01:00") // Date | The end date (exclusive).
};
apiInstance.getMetrics(metricsName, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metricsName** | **String**| The name of the metric. | 
 **startDate** | **Date**| The start date (inclusive). | [optional] 
 **endDate** | **Date**| The end date (exclusive). | [optional] 

### Return type

[**MetricsResultDto**](MetricsResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="interval"></a>
# **interval**
> [MetricsIntervalResultDto] interval(opts)

Get Metrics in Interval

Retrieves a list of metrics, aggregated for a given interval.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.MetricsApi();
let opts = { 
  'name': "name_example", // String | The name of the metric.
  'reporter': "reporter_example", // String | The name of the reporter (host), on which the metrics was logged. This will have value provided by the [hostname configuration property](https://docs.camunda.org/manual/develop/reference/deployment-descriptors/tags/process-engine/#hostname).
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | The start date (inclusive).
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | The end date (exclusive).
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'interval': "900", // String | The interval for which the metrics should be aggregated. Time unit is seconds. Default: The interval is set to 15 minutes (900 seconds).
  'aggregateByReporter': "aggregateByReporter_example" // String | Aggregate metrics by reporter.
};
apiInstance.interval(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the metric. | [optional] 
 **reporter** | **String**| The name of the reporter (host), on which the metrics was logged. This will have value provided by the [hostname configuration property](https://docs.camunda.org/manual/develop/reference/deployment-descriptors/tags/process-engine/#hostname). | [optional] 
 **startDate** | **Date**| The start date (inclusive). | [optional] 
 **endDate** | **Date**| The end date (exclusive). | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 
 **interval** | **String**| The interval for which the metrics should be aggregated. Time unit is seconds. Default: The interval is set to 15 minutes (900 seconds). | [optional] [default to 900]
 **aggregateByReporter** | **String**| Aggregate metrics by reporter. | [optional] 

### Return type

[**[MetricsIntervalResultDto]**](MetricsIntervalResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

