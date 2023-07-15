# CamundaRestApi.ExternalTaskApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeExternalTaskResource**](ExternalTaskApi.md#completeExternalTaskResource) | **POST** /external-task/{id}/complete | Complete
[**extendLock**](ExternalTaskApi.md#extendLock) | **POST** /external-task/{id}/extendLock | Extend Lock
[**fetchAndLock**](ExternalTaskApi.md#fetchAndLock) | **POST** /external-task/fetchAndLock | Fetch and Lock
[**getExternalTask**](ExternalTaskApi.md#getExternalTask) | **GET** /external-task/{id} | Get
[**getExternalTaskErrorDetails**](ExternalTaskApi.md#getExternalTaskErrorDetails) | **GET** /external-task/{id}/errorDetails | Get Error Details
[**getExternalTasks**](ExternalTaskApi.md#getExternalTasks) | **GET** /external-task | Get List
[**getExternalTasksCount**](ExternalTaskApi.md#getExternalTasksCount) | **GET** /external-task/count | Get List Count
[**getTopicNames**](ExternalTaskApi.md#getTopicNames) | **GET** /external-task/topic-names | Get External Task Topic Names
[**handleExternalTaskBpmnError**](ExternalTaskApi.md#handleExternalTaskBpmnError) | **POST** /external-task/{id}/bpmnError | Handle BPMN Error
[**handleFailure**](ExternalTaskApi.md#handleFailure) | **POST** /external-task/{id}/failure | Handle Failure
[**lock**](ExternalTaskApi.md#lock) | **POST** /external-task/{id}/lock | 
[**queryExternalTasks**](ExternalTaskApi.md#queryExternalTasks) | **POST** /external-task | Get List (POST)
[**queryExternalTasksCount**](ExternalTaskApi.md#queryExternalTasksCount) | **POST** /external-task/count | Get List Count (POST)
[**setExternalTaskResourcePriority**](ExternalTaskApi.md#setExternalTaskResourcePriority) | **PUT** /external-task/{id}/priority | Set Priority
[**setExternalTaskResourceRetries**](ExternalTaskApi.md#setExternalTaskResourceRetries) | **PUT** /external-task/{id}/retries | Set Retries
[**setExternalTaskRetries**](ExternalTaskApi.md#setExternalTaskRetries) | **PUT** /external-task/retries | Set Retries Sync
[**setExternalTaskRetriesAsyncOperation**](ExternalTaskApi.md#setExternalTaskRetriesAsyncOperation) | **POST** /external-task/retries-async | Set Retries Async
[**unlock**](ExternalTaskApi.md#unlock) | **POST** /external-task/{id}/unlock | Unlock

<a name="completeExternalTaskResource"></a>
# **completeExternalTaskResource**
> completeExternalTaskResource(id, opts)

Complete

Completes an external task by id and updates process variables.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let id = "id_example"; // String | The id of the task to complete.
let opts = { 
  'body': new CamundaRestApi.CompleteExternalTaskDto() // CompleteExternalTaskDto | 
};
apiInstance.completeExternalTaskResource(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to complete. | 
 **body** | [**CompleteExternalTaskDto**](CompleteExternalTaskDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="extendLock"></a>
# **extendLock**
> extendLock(id, opts)

Extend Lock

Extends the timeout of the lock by a given amount of time.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task.
let opts = { 
  'body': new CamundaRestApi.ExtendLockOnExternalTaskDto() // ExtendLockOnExternalTaskDto | 
};
apiInstance.extendLock(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the external task. | 
 **body** | [**ExtendLockOnExternalTaskDto**](ExtendLockOnExternalTaskDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fetchAndLock"></a>
# **fetchAndLock**
> [LockedExternalTaskDto] fetchAndLock(opts)

Fetch and Lock

Fetches and locks a specific number of external tasks for execution by a worker. Query can be restricted to specific task topics and for each task topic an individual lock time can be provided.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let opts = { 
  'body': new CamundaRestApi.FetchExternalTasksDto() // FetchExternalTasksDto | 
};
apiInstance.fetchAndLock(opts, (error, data, response) => {
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
 **body** | [**FetchExternalTasksDto**](FetchExternalTasksDto.md)|  | [optional] 

### Return type

[**[LockedExternalTaskDto]**](LockedExternalTaskDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getExternalTask"></a>
# **getExternalTask**
> ExternalTaskDto getExternalTask(id)

Get

Retrieves an external task by id, corresponding to the &#x60;ExternalTask&#x60; interface in the engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task to be retrieved.

apiInstance.getExternalTask(id, (error, data, response) => {
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
 **id** | **String**| The id of the external task to be retrieved. | 

### Return type

[**ExternalTaskDto**](ExternalTaskDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalTaskErrorDetails"></a>
# **getExternalTaskErrorDetails**
> &#x27;String&#x27; getExternalTaskErrorDetails(id)

Get Error Details

Retrieves the error details in the context of a running external task by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task for which the error details should be retrieved.

apiInstance.getExternalTaskErrorDetails(id, (error, data, response) => {
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
 **id** | **String**| The id of the external task for which the error details should be retrieved. | 

### Return type

**&#x27;String&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="getExternalTasks"></a>
# **getExternalTasks**
> [ExternalTaskDto] getExternalTasks(opts)

Get List

Queries for the external tasks that fulfill given parameters. Parameters may be static as well as dynamic runtime properties of executions. The size of the result set can be retrieved by using the [Get External Task Count](https://docs.camunda.org/manual/develop/reference/rest/external-task/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let opts = { 
  'externalTaskId': "externalTaskId_example", // String | Filter by an external task's id.
  'externalTaskIdIn': "externalTaskIdIn_example", // String | Filter by the comma-separated list of external task ids.
  'topicName': "topicName_example", // String | Filter by an external task topic.
  'workerId': "workerId_example", // String | Filter by the id of the worker that the task was most recently locked by.
  'locked': true, // Boolean | Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be `true`, as `false` matches any external task.
  'notLocked': true, // Boolean | Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be `true`, as `false` matches any external task.
  'withRetriesLeft': true, // Boolean | Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be `true`, as `false` matches any external task.
  'noRetriesLeft': true, // Boolean | Only include external tasks that have 0 retries. Value may only be `true`, as `false` matches any external task.
  'lockExpirationAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to external tasks that have a lock that expires after a given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'lockExpirationBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to external tasks that have a lock that expires before a given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'activityId': "activityId_example", // String | Filter by the id of the activity that an external task is created for.
  'activityIdIn': "activityIdIn_example", // String | Filter by the comma-separated list of ids of the activities that an external task is created for.
  'executionId': "executionId_example", // String | Filter by the id of the execution that an external task belongs to.
  'processInstanceId': "processInstanceId_example", // String | Filter by the id of the process instance that an external task belongs to.
  'processInstanceIdIn': "processInstanceIdIn_example", // String | Filter by a comma-separated list of process instance ids that an external task may belong to.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the id of the process definition that an external task belongs to.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. An external task must have one of the given tenant ids.
  'active': true, // Boolean | Only include active tasks. Value may only be `true`, as `false` matches any external task.
  'suspended': true, // Boolean | Only include suspended tasks. Value may only be `true`, as `false` matches any external task.
  'priorityHigherThanOrEquals': 789, // Number | Only include jobs with a priority higher than or equal to the given value. Value must be a valid `long` value.
  'priorityLowerThanOrEquals': 789, // Number | Only include jobs with a priority lower than or equal to the given value. Value must be a valid `long` value.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getExternalTasks(opts, (error, data, response) => {
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
 **externalTaskId** | **String**| Filter by an external task&#x27;s id. | [optional] 
 **externalTaskIdIn** | **String**| Filter by the comma-separated list of external task ids. | [optional] 
 **topicName** | **String**| Filter by an external task topic. | [optional] 
 **workerId** | **String**| Filter by the id of the worker that the task was most recently locked by. | [optional] 
 **locked** | **Boolean**| Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **notLocked** | **Boolean**| Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **withRetriesLeft** | **Boolean**| Only include external tasks that have a positive (&amp;gt; 0) number of retries (or &#x60;null&#x60;). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **noRetriesLeft** | **Boolean**| Only include external tasks that have 0 retries. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **lockExpirationAfter** | **Date**| Restrict to external tasks that have a lock that expires after a given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **lockExpirationBefore** | **Date**| Restrict to external tasks that have a lock that expires before a given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **activityId** | **String**| Filter by the id of the activity that an external task is created for. | [optional] 
 **activityIdIn** | **String**| Filter by the comma-separated list of ids of the activities that an external task is created for. | [optional] 
 **executionId** | **String**| Filter by the id of the execution that an external task belongs to. | [optional] 
 **processInstanceId** | **String**| Filter by the id of the process instance that an external task belongs to. | [optional] 
 **processInstanceIdIn** | **String**| Filter by a comma-separated list of process instance ids that an external task may belong to. | [optional] 
 **processDefinitionId** | **String**| Filter by the id of the process definition that an external task belongs to. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. An external task must have one of the given tenant ids. | [optional] 
 **active** | **Boolean**| Only include active tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **suspended** | **Boolean**| Only include suspended tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **priorityHigherThanOrEquals** | **Number**| Only include jobs with a priority higher than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **priorityLowerThanOrEquals** | **Number**| Only include jobs with a priority lower than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[ExternalTaskDto]**](ExternalTaskDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalTasksCount"></a>
# **getExternalTasksCount**
> CountResultDto getExternalTasksCount(opts)

Get List Count

Queries for the number of external tasks that fulfill given parameters. Takes the same parameters as the [Get External Tasks](https://docs.camunda.org/manual/develop/reference/rest/external-task/get-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let opts = { 
  'externalTaskId': "externalTaskId_example", // String | Filter by an external task's id.
  'externalTaskIdIn': "externalTaskIdIn_example", // String | Filter by the comma-separated list of external task ids.
  'topicName': "topicName_example", // String | Filter by an external task topic.
  'workerId': "workerId_example", // String | Filter by the id of the worker that the task was most recently locked by.
  'locked': true, // Boolean | Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be `true`, as `false` matches any external task.
  'notLocked': true, // Boolean | Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be `true`, as `false` matches any external task.
  'withRetriesLeft': true, // Boolean | Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be `true`, as `false` matches any external task.
  'noRetriesLeft': true, // Boolean | Only include external tasks that have 0 retries. Value may only be `true`, as `false` matches any external task.
  'lockExpirationAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to external tasks that have a lock that expires after a given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'lockExpirationBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to external tasks that have a lock that expires before a given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'activityId': "activityId_example", // String | Filter by the id of the activity that an external task is created for.
  'activityIdIn': "activityIdIn_example", // String | Filter by the comma-separated list of ids of the activities that an external task is created for.
  'executionId': "executionId_example", // String | Filter by the id of the execution that an external task belongs to.
  'processInstanceId': "processInstanceId_example", // String | Filter by the id of the process instance that an external task belongs to.
  'processInstanceIdIn': "processInstanceIdIn_example", // String | Filter by a comma-separated list of process instance ids that an external task may belong to.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the id of the process definition that an external task belongs to.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. An external task must have one of the given tenant ids.
  'active': true, // Boolean | Only include active tasks. Value may only be `true`, as `false` matches any external task.
  'suspended': true, // Boolean | Only include suspended tasks. Value may only be `true`, as `false` matches any external task.
  'priorityHigherThanOrEquals': 789, // Number | Only include jobs with a priority higher than or equal to the given value. Value must be a valid `long` value.
  'priorityLowerThanOrEquals': 789 // Number | Only include jobs with a priority lower than or equal to the given value. Value must be a valid `long` value.
};
apiInstance.getExternalTasksCount(opts, (error, data, response) => {
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
 **externalTaskId** | **String**| Filter by an external task&#x27;s id. | [optional] 
 **externalTaskIdIn** | **String**| Filter by the comma-separated list of external task ids. | [optional] 
 **topicName** | **String**| Filter by an external task topic. | [optional] 
 **workerId** | **String**| Filter by the id of the worker that the task was most recently locked by. | [optional] 
 **locked** | **Boolean**| Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **notLocked** | **Boolean**| Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **withRetriesLeft** | **Boolean**| Only include external tasks that have a positive (&amp;gt; 0) number of retries (or &#x60;null&#x60;). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **noRetriesLeft** | **Boolean**| Only include external tasks that have 0 retries. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **lockExpirationAfter** | **Date**| Restrict to external tasks that have a lock that expires after a given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **lockExpirationBefore** | **Date**| Restrict to external tasks that have a lock that expires before a given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **activityId** | **String**| Filter by the id of the activity that an external task is created for. | [optional] 
 **activityIdIn** | **String**| Filter by the comma-separated list of ids of the activities that an external task is created for. | [optional] 
 **executionId** | **String**| Filter by the id of the execution that an external task belongs to. | [optional] 
 **processInstanceId** | **String**| Filter by the id of the process instance that an external task belongs to. | [optional] 
 **processInstanceIdIn** | **String**| Filter by a comma-separated list of process instance ids that an external task may belong to. | [optional] 
 **processDefinitionId** | **String**| Filter by the id of the process definition that an external task belongs to. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. An external task must have one of the given tenant ids. | [optional] 
 **active** | **Boolean**| Only include active tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **suspended** | **Boolean**| Only include suspended tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **priorityHigherThanOrEquals** | **Number**| Only include jobs with a priority higher than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **priorityLowerThanOrEquals** | **Number**| Only include jobs with a priority lower than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTopicNames"></a>
# **getTopicNames**
> [&#x27;String&#x27;] getTopicNames(opts)

Get External Task Topic Names

Queries for distinct topic names of external tasks that fulfill given parameters. Query can be restricted to only tasks with retries left, tasks that are locked, or tasks that are unlocked. The parameters withLockedTasks and withUnlockedTasks are exclusive. Setting them both to true will return an empty list. Providing no parameters will return a list of all distinct topic names with external tasks.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let opts = { 
  'withLockedTasks': true, // Boolean | Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be `true`, as `false` matches any external task.
  'withUnlockedTasks': true, // Boolean | Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be `true`, as `false` matches any external task.
  'withRetriesLeft': true // Boolean | Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be `true`, as `false` matches any external task.
};
apiInstance.getTopicNames(opts, (error, data, response) => {
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
 **withLockedTasks** | **Boolean**| Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **withUnlockedTasks** | **Boolean**| Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **withRetriesLeft** | **Boolean**| Only include external tasks that have a positive (&amp;gt; 0) number of retries (or &#x60;null&#x60;). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 

### Return type

**[&#x27;String&#x27;]**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="handleExternalTaskBpmnError"></a>
# **handleExternalTaskBpmnError**
> handleExternalTaskBpmnError(id, opts)

Handle BPMN Error

Reports a business error in the context of a running external task by id. The error code must be specified to identify the BPMN error handler.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task in which context a BPMN error is reported.
let opts = { 
  'body': new CamundaRestApi.ExternalTaskBpmnError() // ExternalTaskBpmnError | 
};
apiInstance.handleExternalTaskBpmnError(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the external task in which context a BPMN error is reported. | 
 **body** | [**ExternalTaskBpmnError**](ExternalTaskBpmnError.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="handleFailure"></a>
# **handleFailure**
> handleFailure(id, opts)

Handle Failure

Reports a failure to execute an external task by id. A number of retries and a timeout until the task can be retried can be specified. If retries are set to 0, an incident for this task is created.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task to report a failure for.
let opts = { 
  'body': new CamundaRestApi.ExternalTaskFailureDto() // ExternalTaskFailureDto | 
};
apiInstance.handleFailure(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the external task to report a failure for. | 
 **body** | [**ExternalTaskFailureDto**](ExternalTaskFailureDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lock"></a>
# **lock**
> lock(id, opts)



Lock an external task by a given id for a specified worker and amount of time.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task.
let opts = { 
  'body': new CamundaRestApi.LockExternalTaskDto() // LockExternalTaskDto | 
};
apiInstance.lock(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the external task. | 
 **body** | [**LockExternalTaskDto**](LockExternalTaskDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryExternalTasks"></a>
# **queryExternalTasks**
> [ExternalTaskDto] queryExternalTasks(opts)

Get List (POST)

Queries for external tasks that fulfill given parameters in the form of a JSON object.  This method is slightly more powerful than the [Get External Tasks](https://docs.camunda.org/manual/develop/reference/rest/external-task/get-query/) method because it allows to specify a hierarchical result sorting.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let opts = { 
  'body': new CamundaRestApi.ExternalTaskQueryDto(), // ExternalTaskQueryDto | 
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.queryExternalTasks(opts, (error, data, response) => {
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
 **body** | [**ExternalTaskQueryDto**](ExternalTaskQueryDto.md)|  | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[ExternalTaskDto]**](ExternalTaskDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryExternalTasksCount"></a>
# **queryExternalTasksCount**
> CountResultDto queryExternalTasksCount(opts)

Get List Count (POST)

Queries for the number of external tasks that fulfill given parameters. This method takes the same message body as the [Get External Tasks (POST)](https://docs.camunda.org/manual/develop/reference/rest/external-task/post-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let opts = { 
  'body': new CamundaRestApi.ExternalTaskQueryDto() // ExternalTaskQueryDto | 
};
apiInstance.queryExternalTasksCount(opts, (error, data, response) => {
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
 **body** | [**ExternalTaskQueryDto**](ExternalTaskQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setExternalTaskResourcePriority"></a>
# **setExternalTaskResourcePriority**
> setExternalTaskResourcePriority(id, opts)

Set Priority

Sets the priority of an existing external task by id. The default value of a priority is 0.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task to set the priority for.
let opts = { 
  'body': new CamundaRestApi.PriorityDto() // PriorityDto | 
};
apiInstance.setExternalTaskResourcePriority(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the external task to set the priority for. | 
 **body** | [**PriorityDto**](PriorityDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setExternalTaskResourceRetries"></a>
# **setExternalTaskResourceRetries**
> setExternalTaskResourceRetries(id, opts)

Set Retries

Sets the number of retries left to execute an external task by id. If retries are set to 0, an  incident is created.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task to set the number of retries for.
let opts = { 
  'body': new CamundaRestApi.RetriesDto() // RetriesDto | 
};
apiInstance.setExternalTaskResourceRetries(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the external task to set the number of retries for. | 
 **body** | [**RetriesDto**](RetriesDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setExternalTaskRetries"></a>
# **setExternalTaskRetries**
> setExternalTaskRetries(opts)

Set Retries Sync

Sets the number of retries left to execute external tasks by id synchronously. If retries are set to 0,  an incident is created.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let opts = { 
  'body': new CamundaRestApi.SetRetriesForExternalTasksDto() // SetRetriesForExternalTasksDto | 
};
apiInstance.setExternalTaskRetries(opts, (error, data, response) => {
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
 **body** | [**SetRetriesForExternalTasksDto**](SetRetriesForExternalTasksDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setExternalTaskRetriesAsyncOperation"></a>
# **setExternalTaskRetriesAsyncOperation**
> BatchDto setExternalTaskRetriesAsyncOperation(opts)

Set Retries Async

Sets the number of retries left to execute external tasks by id asynchronously. If retries are set to 0, an incident is created.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let opts = { 
  'body': new CamundaRestApi.SetRetriesForExternalTasksDto() // SetRetriesForExternalTasksDto | 
};
apiInstance.setExternalTaskRetriesAsyncOperation(opts, (error, data, response) => {
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
 **body** | [**SetRetriesForExternalTasksDto**](SetRetriesForExternalTasksDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unlock"></a>
# **unlock**
> unlock(id)

Unlock

Unlocks an external task by id. Clears the task&#x27;s lock expiration time and worker id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task to unlock.

apiInstance.unlock(id, (error, data, response) => {
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
 **id** | **String**| The id of the external task to unlock. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

