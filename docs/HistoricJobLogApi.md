# CamundaRestApi.HistoricJobLogApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricJobLog**](HistoricJobLogApi.md#getHistoricJobLog) | **GET** /history/job-log/{id} | Get Job Log
[**getHistoricJobLogs**](HistoricJobLogApi.md#getHistoricJobLogs) | **GET** /history/job-log | Get Job Logs
[**getHistoricJobLogsCount**](HistoricJobLogApi.md#getHistoricJobLogsCount) | **GET** /history/job-log/count | Get Job Log Count
[**getStacktraceHistoricJobLog**](HistoricJobLogApi.md#getStacktraceHistoricJobLog) | **GET** /history/job-log/{id}/stacktrace | Get Job Log Exception Stacktrace
[**queryHistoricJobLogs**](HistoricJobLogApi.md#queryHistoricJobLogs) | **POST** /history/job-log | Get Job Logs (POST)
[**queryHistoricJobLogsCount**](HistoricJobLogApi.md#queryHistoricJobLogsCount) | **POST** /history/job-log/count | Get Job Log Count (POST)

<a name="getHistoricJobLog"></a>
# **getHistoricJobLog**
> HistoricJobLogDto getHistoricJobLog(id)

Get Job Log

Retrieves a historic job log by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricJobLogApi();
let id = "id_example"; // String | The id of the log entry.

apiInstance.getHistoricJobLog(id, (error, data, response) => {
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
 **id** | **String**| The id of the log entry. | 

### Return type

[**HistoricJobLogDto**](HistoricJobLogDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricJobLogs"></a>
# **getHistoricJobLogs**
> [HistoricJobLogDto] getHistoricJobLogs(opts)

Get Job Logs

Queries for historic job logs that fulfill the given parameters. The size of the result set can be retrieved by using the [Get Job Log Count](https://docs.camunda.org/manual/develop/reference/rest/history/job-log/get-job-log-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricJobLogApi();
let opts = { 
  'logId': "logId_example", // String | Filter by historic job log id.
  'jobId': "jobId_example", // String | Filter by job id.
  'jobExceptionMessage': "jobExceptionMessage_example", // String | Filter by job exception message.
  'jobDefinitionId': "jobDefinitionId_example", // String | Filter by job definition id.
  'jobDefinitionType': "jobDefinitionType_example", // String | Filter by job definition type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/the-job-executor/#job-creation) for more information about job definition types.
  'jobDefinitionConfiguration': "jobDefinitionConfiguration_example", // String | Filter by job definition configuration.
  'activityIdIn': "activityIdIn_example", // String | Only include historic job logs which belong to one of the passed activity ids.
  'failedActivityIdIn': "failedActivityIdIn_example", // String | Only include historic job logs which belong to failures of one of the passed activity ids.
  'executionIdIn': "executionIdIn_example", // String | Only include historic job logs which belong to one of the passed execution ids.
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by process definition id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by process definition key.
  'deploymentId': "deploymentId_example", // String | Filter by deployment id.
  'tenantIdIn': "tenantIdIn_example", // String | Only include historic job log entries which belong to one of the passed and comma- separated tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic job log entries that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'hostname': "hostname_example", // String | Filter by hostname.
  'jobPriorityLowerThanOrEquals': 789, // Number | Only include logs for which the associated job had a priority lower than or equal to the given value. Value must be a valid `long` value.
  'jobPriorityHigherThanOrEquals': 789, // Number | Only include logs for which the associated job had a priority higher than or equal to the given value. Value must be a valid `long` value.
  'creationLog': true, // Boolean | Only include creation logs. Value may only be `true`, as `false` is the default behavior.
  'failureLog': true, // Boolean | Only include failure logs. Value may only be `true`, as `false` is the default behavior.
  'successLog': true, // Boolean | Only include success logs. Value may only be `true`, as `false` is the default behavior.
  'deletionLog': true, // Boolean | Only include deletion logs. Value may only be `true`, as `false` is the default behavior.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getHistoricJobLogs(opts, (error, data, response) => {
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
 **logId** | **String**| Filter by historic job log id. | [optional] 
 **jobId** | **String**| Filter by job id. | [optional] 
 **jobExceptionMessage** | **String**| Filter by job exception message. | [optional] 
 **jobDefinitionId** | **String**| Filter by job definition id. | [optional] 
 **jobDefinitionType** | **String**| Filter by job definition type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/the-job-executor/#job-creation) for more information about job definition types. | [optional] 
 **jobDefinitionConfiguration** | **String**| Filter by job definition configuration. | [optional] 
 **activityIdIn** | **String**| Only include historic job logs which belong to one of the passed activity ids. | [optional] 
 **failedActivityIdIn** | **String**| Only include historic job logs which belong to failures of one of the passed activity ids. | [optional] 
 **executionIdIn** | **String**| Only include historic job logs which belong to one of the passed execution ids. | [optional] 
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **processDefinitionId** | **String**| Filter by process definition id. | [optional] 
 **processDefinitionKey** | **String**| Filter by process definition key. | [optional] 
 **deploymentId** | **String**| Filter by deployment id. | [optional] 
 **tenantIdIn** | **String**| Only include historic job log entries which belong to one of the passed and comma- separated tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic job log entries that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **hostname** | **String**| Filter by hostname. | [optional] 
 **jobPriorityLowerThanOrEquals** | **Number**| Only include logs for which the associated job had a priority lower than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **jobPriorityHigherThanOrEquals** | **Number**| Only include logs for which the associated job had a priority higher than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **creationLog** | **Boolean**| Only include creation logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **failureLog** | **Boolean**| Only include failure logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **successLog** | **Boolean**| Only include success logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **deletionLog** | **Boolean**| Only include deletion logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[HistoricJobLogDto]**](HistoricJobLogDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricJobLogsCount"></a>
# **getHistoricJobLogsCount**
> CountResultDto getHistoricJobLogsCount(opts)

Get Job Log Count

Queries for the number of historic job logs that fulfill the given parameters. Takes the same parameters as the [Get Job Logs](https://docs.camunda.org/manual/develop/reference/rest/history/job-log/get-job-log-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricJobLogApi();
let opts = { 
  'logId': "logId_example", // String | Filter by historic job log id.
  'jobId': "jobId_example", // String | Filter by job id.
  'jobExceptionMessage': "jobExceptionMessage_example", // String | Filter by job exception message.
  'jobDefinitionId': "jobDefinitionId_example", // String | Filter by job definition id.
  'jobDefinitionType': "jobDefinitionType_example", // String | Filter by job definition type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/the-job-executor/#job-creation) for more information about job definition types.
  'jobDefinitionConfiguration': "jobDefinitionConfiguration_example", // String | Filter by job definition configuration.
  'activityIdIn': "activityIdIn_example", // String | Only include historic job logs which belong to one of the passed activity ids.
  'failedActivityIdIn': "failedActivityIdIn_example", // String | Only include historic job logs which belong to failures of one of the passed activity ids.
  'executionIdIn': "executionIdIn_example", // String | Only include historic job logs which belong to one of the passed execution ids.
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by process definition id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by process definition key.
  'deploymentId': "deploymentId_example", // String | Filter by deployment id.
  'tenantIdIn': "tenantIdIn_example", // String | Only include historic job log entries which belong to one of the passed and comma- separated tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic job log entries that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'hostname': "hostname_example", // String | Filter by hostname.
  'jobPriorityLowerThanOrEquals': 789, // Number | Only include logs for which the associated job had a priority lower than or equal to the given value. Value must be a valid `long` value.
  'jobPriorityHigherThanOrEquals': 789, // Number | Only include logs for which the associated job had a priority higher than or equal to the given value. Value must be a valid `long` value.
  'creationLog': true, // Boolean | Only include creation logs. Value may only be `true`, as `false` is the default behavior.
  'failureLog': true, // Boolean | Only include failure logs. Value may only be `true`, as `false` is the default behavior.
  'successLog': true, // Boolean | Only include success logs. Value may only be `true`, as `false` is the default behavior.
  'deletionLog': true // Boolean | Only include deletion logs. Value may only be `true`, as `false` is the default behavior.
};
apiInstance.getHistoricJobLogsCount(opts, (error, data, response) => {
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
 **logId** | **String**| Filter by historic job log id. | [optional] 
 **jobId** | **String**| Filter by job id. | [optional] 
 **jobExceptionMessage** | **String**| Filter by job exception message. | [optional] 
 **jobDefinitionId** | **String**| Filter by job definition id. | [optional] 
 **jobDefinitionType** | **String**| Filter by job definition type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/the-job-executor/#job-creation) for more information about job definition types. | [optional] 
 **jobDefinitionConfiguration** | **String**| Filter by job definition configuration. | [optional] 
 **activityIdIn** | **String**| Only include historic job logs which belong to one of the passed activity ids. | [optional] 
 **failedActivityIdIn** | **String**| Only include historic job logs which belong to failures of one of the passed activity ids. | [optional] 
 **executionIdIn** | **String**| Only include historic job logs which belong to one of the passed execution ids. | [optional] 
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **processDefinitionId** | **String**| Filter by process definition id. | [optional] 
 **processDefinitionKey** | **String**| Filter by process definition key. | [optional] 
 **deploymentId** | **String**| Filter by deployment id. | [optional] 
 **tenantIdIn** | **String**| Only include historic job log entries which belong to one of the passed and comma- separated tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic job log entries that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **hostname** | **String**| Filter by hostname. | [optional] 
 **jobPriorityLowerThanOrEquals** | **Number**| Only include logs for which the associated job had a priority lower than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **jobPriorityHigherThanOrEquals** | **Number**| Only include logs for which the associated job had a priority higher than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **creationLog** | **Boolean**| Only include creation logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **failureLog** | **Boolean**| Only include failure logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **successLog** | **Boolean**| Only include success logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **deletionLog** | **Boolean**| Only include deletion logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStacktraceHistoricJobLog"></a>
# **getStacktraceHistoricJobLog**
> Object getStacktraceHistoricJobLog(id)

Get Job Log Exception Stacktrace

Retrieves the corresponding exception stacktrace to the passed historic job log by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricJobLogApi();
let id = "id_example"; // String | The id of the historic job log to get the exception stacktrace for.

apiInstance.getStacktraceHistoricJobLog(id, (error, data, response) => {
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
 **id** | **String**| The id of the historic job log to get the exception stacktrace for. | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="queryHistoricJobLogs"></a>
# **queryHistoricJobLogs**
> [HistoricJobLogDto] queryHistoricJobLogs(opts)

Get Job Logs (POST)

Queries for historic job logs that fulfill the given parameters. This method is slightly more powerful than the [Get Job Logs](https://docs.camunda.org/manual/develop/reference/rest/history/job-log/get-job-log-query/) method because it allows filtering by historic job logs values of the different types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricJobLogApi();
let opts = { 
  'body': new CamundaRestApi.HistoricJobLogQueryDto(), // HistoricJobLogQueryDto | 
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.queryHistoricJobLogs(opts, (error, data, response) => {
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
 **body** | [**HistoricJobLogQueryDto**](HistoricJobLogQueryDto.md)|  | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[HistoricJobLogDto]**](HistoricJobLogDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryHistoricJobLogsCount"></a>
# **queryHistoricJobLogsCount**
> CountResultDto queryHistoricJobLogsCount(opts)

Get Job Log Count (POST)

Queries for the number of historic job logs that fulfill the given parameters. This method takes the same message body as the [Get Job Logs (POST)](https://docs.camunda.org/manual/develop/reference/rest/history/job-log/post-job-log-query/) method and therefore it is slightly more powerful than the [Get Job Log Count](https://docs.camunda.org/manual/develop/reference/rest/history/job-log/get-job-log-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricJobLogApi();
let opts = { 
  'body': new CamundaRestApi.HistoricJobLogQueryDto() // HistoricJobLogQueryDto | 
};
apiInstance.queryHistoricJobLogsCount(opts, (error, data, response) => {
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
 **body** | [**HistoricJobLogQueryDto**](HistoricJobLogQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

