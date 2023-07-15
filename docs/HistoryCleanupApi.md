# CamundaRestApi.HistoryCleanupApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cleanupAsync**](HistoryCleanupApi.md#cleanupAsync) | **POST** /history/cleanup | Clean up history (POST)
[**findCleanupJob**](HistoryCleanupApi.md#findCleanupJob) | **GET** /history/cleanup/job | Find clean up history job (GET)
[**findCleanupJobs**](HistoryCleanupApi.md#findCleanupJobs) | **GET** /history/cleanup/jobs | Find clean up history jobs (GET)
[**getHistoryCleanupConfiguration**](HistoryCleanupApi.md#getHistoryCleanupConfiguration) | **GET** /history/cleanup/configuration | Get History Cleanup Configuration

<a name="cleanupAsync"></a>
# **cleanupAsync**
> JobDto cleanupAsync(opts)

Clean up history (POST)

Schedules asynchronous history cleanup (See [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup)).  **Note:** This endpoint will return at most a single history cleanup job. Since version &#x60;7.9.0&#x60; it is possible to configure multiple [parallel history cleanup jobs](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#parallel-execution). Use [&#x60;GET /history/cleanup/jobs&#x60;](https://docs.camunda.org/manual/develop/reference/rest/history/history-cleanup/get-history-cleanup-jobs) to find all the available history cleanup jobs.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoryCleanupApi();
let opts = { 
  'immediatelyDue': true // Boolean | When true the job will be scheduled for nearest future. When `false`, the job will be scheduled for next batch window start time. Default is `true`.
};
apiInstance.cleanupAsync(opts, (error, data, response) => {
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
 **immediatelyDue** | **Boolean**| When true the job will be scheduled for nearest future. When &#x60;false&#x60;, the job will be scheduled for next batch window start time. Default is &#x60;true&#x60;. | [optional] 

### Return type

[**JobDto**](JobDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findCleanupJob"></a>
# **findCleanupJob**
> JobDto findCleanupJob()

Find clean up history job (GET)

**Deprecated!** Use &#x60;GET /history/cleanup/jobs&#x60; instead.  Finds history cleanup job (See [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup)).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoryCleanupApi();
apiInstance.findCleanupJob((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**JobDto**](JobDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findCleanupJobs"></a>
# **findCleanupJobs**
> [JobDto] findCleanupJobs()

Find clean up history jobs (GET)

Finds history cleanup jobs (See [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup)).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoryCleanupApi();
apiInstance.findCleanupJobs((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[JobDto]**](JobDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoryCleanupConfiguration"></a>
# **getHistoryCleanupConfiguration**
> HistoryCleanupConfigurationDto getHistoryCleanupConfiguration()

Get History Cleanup Configuration

Retrieves history cleanup batch window configuration (See [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup)).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoryCleanupApi();
apiInstance.getHistoryCleanupConfiguration((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HistoryCleanupConfigurationDto**](HistoryCleanupConfigurationDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

