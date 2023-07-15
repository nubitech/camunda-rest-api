# CamundaRestApi.HistoricExternalTaskLogApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getErrorDetailsHistoricExternalTaskLog**](HistoricExternalTaskLogApi.md#getErrorDetailsHistoricExternalTaskLog) | **GET** /history/external-task-log/{id}/error-details | Get External Task Log Error Details
[**getHistoricExternalTaskLog**](HistoricExternalTaskLogApi.md#getHistoricExternalTaskLog) | **GET** /history/external-task-log/{id} | Get External Task Log
[**getHistoricExternalTaskLogs**](HistoricExternalTaskLogApi.md#getHistoricExternalTaskLogs) | **GET** /history/external-task-log | Get External Task Logs
[**getHistoricExternalTaskLogsCount**](HistoricExternalTaskLogApi.md#getHistoricExternalTaskLogsCount) | **GET** /history/external-task-log/count | Get External Task Log Count
[**queryHistoricExternalTaskLogs**](HistoricExternalTaskLogApi.md#queryHistoricExternalTaskLogs) | **POST** /history/external-task-log | Get External Task Logs (POST)
[**queryHistoricExternalTaskLogsCount**](HistoricExternalTaskLogApi.md#queryHistoricExternalTaskLogsCount) | **POST** /history/external-task-log/count | Get External Task Log Count (POST)

<a name="getErrorDetailsHistoricExternalTaskLog"></a>
# **getErrorDetailsHistoricExternalTaskLog**
> Object getErrorDetailsHistoricExternalTaskLog(id)

Get External Task Log Error Details

Retrieves the corresponding error details of the passed historic external task log by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricExternalTaskLogApi();
let id = "id_example"; // String | The id of the historic external task log to get the error details for.

apiInstance.getErrorDetailsHistoricExternalTaskLog(id, (error, data, response) => {
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
 **id** | **String**| The id of the historic external task log to get the error details for. | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="getHistoricExternalTaskLog"></a>
# **getHistoricExternalTaskLog**
> HistoricExternalTaskLogDto getHistoricExternalTaskLog(id)

Get External Task Log

Retrieves a historic external task log by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricExternalTaskLogApi();
let id = "id_example"; // String | The id of the log entry.

apiInstance.getHistoricExternalTaskLog(id, (error, data, response) => {
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

[**HistoricExternalTaskLogDto**](HistoricExternalTaskLogDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricExternalTaskLogs"></a>
# **getHistoricExternalTaskLogs**
> [HistoricExternalTaskLogDto] getHistoricExternalTaskLogs(opts)

Get External Task Logs

Queries for historic external task logs that fulfill the given parameters. The size of the result set can be retrieved by using the [Get External Task Log Count](https://docs.camunda.org/manual/develop/reference/rest/history/external-task-log/get-external-task-log-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricExternalTaskLogApi();
let opts = { 
  'logId': "logId_example", // String | Filter by historic external task log id.
  'externalTaskId': "externalTaskId_example", // String | Filter by external task id.
  'topicName': "topicName_example", // String | Filter by an external task topic.
  'workerId': "workerId_example", // String | Filter by the id of the worker that the task was most recently locked by.
  'errorMessage': "errorMessage_example", // String | Filter by external task exception message.
  'activityIdIn': "activityIdIn_example", // String | Only include historic external task logs which belong to one of the passed activity ids.
  'activityInstanceIdIn': "activityInstanceIdIn_example", // String | Only include historic external task logs which belong to one of the passed activity instance ids.
  'executionIdIn': "executionIdIn_example", // String | Only include historic external task logs which belong to one of the passed execution ids.
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by process definition id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by process definition key.
  'tenantIdIn': "tenantIdIn_example", // String | Only include historic external task log entries which belong to one of the passed and comma-separated tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic external task log entries that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'priorityLowerThanOrEquals': 789, // Number | Only include logs for which the associated external task had a priority lower than or equal to the given value. Value must be a valid `long` value.
  'priorityHigherThanOrEquals': 789, // Number | Only include logs for which the associated external task had a priority higher than or equal to the given value. Value must be a valid `long` value.
  'creationLog': true, // Boolean | Only include creation logs. Value may only be `true`, as `false` is the default behavior.
  'failureLog': true, // Boolean | Only include failure logs. Value may only be `true`, as `false` is the default behavior.
  'successLog': true, // Boolean | Only include success logs. Value may only be `true`, as `false` is the default behavior.
  'deletionLog': true, // Boolean | Only include deletion logs. Value may only be `true`, as `false` is the default behavior.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getHistoricExternalTaskLogs(opts, (error, data, response) => {
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
 **logId** | **String**| Filter by historic external task log id. | [optional] 
 **externalTaskId** | **String**| Filter by external task id. | [optional] 
 **topicName** | **String**| Filter by an external task topic. | [optional] 
 **workerId** | **String**| Filter by the id of the worker that the task was most recently locked by. | [optional] 
 **errorMessage** | **String**| Filter by external task exception message. | [optional] 
 **activityIdIn** | **String**| Only include historic external task logs which belong to one of the passed activity ids. | [optional] 
 **activityInstanceIdIn** | **String**| Only include historic external task logs which belong to one of the passed activity instance ids. | [optional] 
 **executionIdIn** | **String**| Only include historic external task logs which belong to one of the passed execution ids. | [optional] 
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **processDefinitionId** | **String**| Filter by process definition id. | [optional] 
 **processDefinitionKey** | **String**| Filter by process definition key. | [optional] 
 **tenantIdIn** | **String**| Only include historic external task log entries which belong to one of the passed and comma-separated tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic external task log entries that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **priorityLowerThanOrEquals** | **Number**| Only include logs for which the associated external task had a priority lower than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **priorityHigherThanOrEquals** | **Number**| Only include logs for which the associated external task had a priority higher than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **creationLog** | **Boolean**| Only include creation logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **failureLog** | **Boolean**| Only include failure logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **successLog** | **Boolean**| Only include success logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **deletionLog** | **Boolean**| Only include deletion logs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[HistoricExternalTaskLogDto]**](HistoricExternalTaskLogDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricExternalTaskLogsCount"></a>
# **getHistoricExternalTaskLogsCount**
> CountResultDto getHistoricExternalTaskLogsCount(opts)

Get External Task Log Count

Queries for the number of historic external task logs that fulfill the given parameters. Takes the same parameters as the [Get External Task Logs](https://docs.camunda.org/manual/develop/reference/rest/history/external-task-log/get-external-task-log-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricExternalTaskLogApi();
let opts = { 
  'logId': "logId_example", // String | Filter by historic external task log id.
  'externalTaskId': "externalTaskId_example", // String | Filter by external task id.
  'topicName': "topicName_example", // String | Filter by an external task topic.
  'workerId': "workerId_example", // String | Filter by the id of the worker that the task was most recently locked by.
  'errorMessage': "errorMessage_example", // String | Filter by external task exception message.
  'activityIdIn': "activityIdIn_example", // String | Only include historic external task logs which belong to one of the passed activity ids.
  'activityInstanceIdIn': "activityInstanceIdIn_example", // String | Only include historic external task logs which belong to one of the passed activity instance ids.
  'executionIdIn': "executionIdIn_example", // String | Only include historic external task logs which belong to one of the passed execution ids.
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by process definition id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by process definition key.
  'tenantIdIn': "tenantIdIn_example", // String | Only include historic external task log entries which belong to one of the passed and comma-separated tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic external task log entries that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'priorityLowerThanOrEquals': 789, // Number | Only include logs for which the associated external task had a priority lower than or equal to the given value. Value must be a valid `long` value.
  'priorityHigherThanOrEquals': 789, // Number | Only include logs for which the associated external task had a priority higher than or equal to the given value. Value must be a valid `long` value.
  'creationLog': true, // Boolean | Only include creation logs. Value may only be `true`, as `false` is the default behavior.
  'failureLog': true, // Boolean | Only include failure logs. Value may only be `true`, as `false` is the default behavior.
  'successLog': true, // Boolean | Only include success logs. Value may only be `true`, as `false` is the default behavior.
  'deletionLog': true // Boolean | Only include deletion logs. Value may only be `true`, as `false` is the default behavior.
};
apiInstance.getHistoricExternalTaskLogsCount(opts, (error, data, response) => {
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
 **logId** | **String**| Filter by historic external task log id. | [optional] 
 **externalTaskId** | **String**| Filter by external task id. | [optional] 
 **topicName** | **String**| Filter by an external task topic. | [optional] 
 **workerId** | **String**| Filter by the id of the worker that the task was most recently locked by. | [optional] 
 **errorMessage** | **String**| Filter by external task exception message. | [optional] 
 **activityIdIn** | **String**| Only include historic external task logs which belong to one of the passed activity ids. | [optional] 
 **activityInstanceIdIn** | **String**| Only include historic external task logs which belong to one of the passed activity instance ids. | [optional] 
 **executionIdIn** | **String**| Only include historic external task logs which belong to one of the passed execution ids. | [optional] 
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **processDefinitionId** | **String**| Filter by process definition id. | [optional] 
 **processDefinitionKey** | **String**| Filter by process definition key. | [optional] 
 **tenantIdIn** | **String**| Only include historic external task log entries which belong to one of the passed and comma-separated tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic external task log entries that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **priorityLowerThanOrEquals** | **Number**| Only include logs for which the associated external task had a priority lower than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **priorityHigherThanOrEquals** | **Number**| Only include logs for which the associated external task had a priority higher than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
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

<a name="queryHistoricExternalTaskLogs"></a>
# **queryHistoricExternalTaskLogs**
> [HistoricExternalTaskLogDto] queryHistoricExternalTaskLogs(opts)

Get External Task Logs (POST)

Queries for historic external task logs that fulfill the given parameters. This method is slightly more powerful than the [Get External Task Logs](https://docs.camunda.org/manual/develop/reference/rest/history/external-task-log/get-external-task-log-query/) method because it allows filtering by historic external task logs values of the different types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricExternalTaskLogApi();
let opts = { 
  'body': new CamundaRestApi.HistoricExternalTaskLogQueryDto() // HistoricExternalTaskLogQueryDto | 
};
apiInstance.queryHistoricExternalTaskLogs(opts, (error, data, response) => {
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
 **body** | [**HistoricExternalTaskLogQueryDto**](HistoricExternalTaskLogQueryDto.md)|  | [optional] 

### Return type

[**[HistoricExternalTaskLogDto]**](HistoricExternalTaskLogDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryHistoricExternalTaskLogsCount"></a>
# **queryHistoricExternalTaskLogsCount**
> CountResultDto queryHistoricExternalTaskLogsCount(opts)

Get External Task Log Count (POST)

Queries for the number of historic external task logs that fulfill the given parameters. This method takes the same message body as the [Get External Task Logs (POST)](https://docs.camunda.org/manual/develop/reference/rest/history/external-task-log/post-external-task-log-query/) method and therefore it is slightly more powerful than the [Get External Task Log Count](https://docs.camunda.org/manual/develop/reference/rest/history/external-task-log/get-external-task-log-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricExternalTaskLogApi();
let opts = { 
  'body': new CamundaRestApi.HistoricExternalTaskLogQueryDto() // HistoricExternalTaskLogQueryDto | 
};
apiInstance.queryHistoricExternalTaskLogsCount(opts, (error, data, response) => {
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
 **body** | [**HistoricExternalTaskLogQueryDto**](HistoricExternalTaskLogQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

