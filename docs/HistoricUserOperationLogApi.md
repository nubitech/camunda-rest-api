# CamundaRestApi.HistoricUserOperationLogApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearAnnotationUserOperationLog**](HistoricUserOperationLogApi.md#clearAnnotationUserOperationLog) | **PUT** /history/user-operation/{operationId}/clear-annotation | Clear Annotation of an User Operation Log (Historic)
[**queryUserOperationCount**](HistoricUserOperationLogApi.md#queryUserOperationCount) | **GET** /history/user-operation/count | Get User Operation Log Count
[**queryUserOperationEntries**](HistoricUserOperationLogApi.md#queryUserOperationEntries) | **GET** /history/user-operation | Get User Operation Log (Historic)
[**setAnnotationUserOperationLog**](HistoricUserOperationLogApi.md#setAnnotationUserOperationLog) | **PUT** /history/user-operation/{operationId}/set-annotation | Set Annotation to an User Operation Log (Historic)

<a name="clearAnnotationUserOperationLog"></a>
# **clearAnnotationUserOperationLog**
> clearAnnotationUserOperationLog(operationId)

Clear Annotation of an User Operation Log (Historic)

Clear the annotation which was previously set for auditing reasons.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricUserOperationLogApi();
let operationId = "operationId_example"; // String | The operation id of the operation log to be updated.

apiInstance.clearAnnotationUserOperationLog(operationId, (error, data, response) => {
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
 **operationId** | **String**| The operation id of the operation log to be updated. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queryUserOperationCount"></a>
# **queryUserOperationCount**
> CountResultDto queryUserOperationCount(opts)

Get User Operation Log Count

Queries for the number of user operation log entries that fulfill the given parameters. Takes the same parameters as the [Get User Operation Log (Historic)](https://docs.camunda.org/manual/develop/reference/rest/history/user-operation-log/get-user-operation-log-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricUserOperationLogApi();
let opts = { 
  'deploymentId': "deploymentId_example", // String | Filter by deployment id.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by process definition id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by process definition key.
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'executionId': "executionId_example", // String | Filter by execution id.
  'caseDefinitionId': "caseDefinitionId_example", // String | Filter by case definition id.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by case instance id.
  'caseExecutionId': "caseExecutionId_example", // String | Filter by case execution id.
  'taskId': "taskId_example", // String | Only include operations on this task.
  'externalTaskId': "externalTaskId_example", // String | Only include operations on this external task.
  'batchId': "batchId_example", // String | Only include operations on this batch.
  'jobId': "jobId_example", // String | Filter by job id.
  'jobDefinitionId': "jobDefinitionId_example", // String | Filter by job definition id.
  'userId': "userId_example", // String | Only include operations of this user.
  'operationId': "operationId_example", // String | Filter by the id of the operation. This allows fetching of multiple entries which are part of a composite operation.
  'operationType': "operationType_example", // String | Filter by the type of the operation like `Claim` or `Delegate`. See the [Javadoc](https://docs.camunda.org/manual/develop/reference/javadoc/?org/camunda/bpm/engine/history/UserOperationLogEntry.html) for a list of available operation types.
  'entityType': "entityType_example", // String | Filter by the type of the entity that was affected by this operation, possible values are `Task`, `Attachment` or `IdentityLink`.
  'entityTypeIn': "entityTypeIn_example", // String | Filter by a comma-separated list of types of the entities that was affected by this operation, possible values are `Task`, `Attachment` or `IdentityLink`.
  'category': "category_example", // String | Filter by the category that this operation is associated with, possible values are `TaskWorker`, `Admin` or `Operator`.
  'categoryIn': "categoryIn_example", // String | Filter by a comma-separated list of categories that this operation is associated with, possible values are `TaskWorker`, `Admin` or `Operator`.
  'property': "property_example", // String | Only include operations that changed this property, e.g., `owner` or `assignee`.
  'afterTimestamp': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to entries that were created after the given timestamp. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the timestamp must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
  'beforeTimestamp': new Date("2013-10-20T19:20:30+01:00") // Date | Restrict to entries that were created before the given timestamp. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the timestamp must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
};
apiInstance.queryUserOperationCount(opts, (error, data, response) => {
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
 **deploymentId** | **String**| Filter by deployment id. | [optional] 
 **processDefinitionId** | **String**| Filter by process definition id. | [optional] 
 **processDefinitionKey** | **String**| Filter by process definition key. | [optional] 
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **executionId** | **String**| Filter by execution id. | [optional] 
 **caseDefinitionId** | **String**| Filter by case definition id. | [optional] 
 **caseInstanceId** | **String**| Filter by case instance id. | [optional] 
 **caseExecutionId** | **String**| Filter by case execution id. | [optional] 
 **taskId** | **String**| Only include operations on this task. | [optional] 
 **externalTaskId** | **String**| Only include operations on this external task. | [optional] 
 **batchId** | **String**| Only include operations on this batch. | [optional] 
 **jobId** | **String**| Filter by job id. | [optional] 
 **jobDefinitionId** | **String**| Filter by job definition id. | [optional] 
 **userId** | **String**| Only include operations of this user. | [optional] 
 **operationId** | **String**| Filter by the id of the operation. This allows fetching of multiple entries which are part of a composite operation. | [optional] 
 **operationType** | **String**| Filter by the type of the operation like &#x60;Claim&#x60; or &#x60;Delegate&#x60;. See the [Javadoc](https://docs.camunda.org/manual/develop/reference/javadoc/?org/camunda/bpm/engine/history/UserOperationLogEntry.html) for a list of available operation types. | [optional] 
 **entityType** | **String**| Filter by the type of the entity that was affected by this operation, possible values are &#x60;Task&#x60;, &#x60;Attachment&#x60; or &#x60;IdentityLink&#x60;. | [optional] 
 **entityTypeIn** | **String**| Filter by a comma-separated list of types of the entities that was affected by this operation, possible values are &#x60;Task&#x60;, &#x60;Attachment&#x60; or &#x60;IdentityLink&#x60;. | [optional] 
 **category** | **String**| Filter by the category that this operation is associated with, possible values are &#x60;TaskWorker&#x60;, &#x60;Admin&#x60; or &#x60;Operator&#x60;. | [optional] 
 **categoryIn** | **String**| Filter by a comma-separated list of categories that this operation is associated with, possible values are &#x60;TaskWorker&#x60;, &#x60;Admin&#x60; or &#x60;Operator&#x60;. | [optional] 
 **property** | **String**| Only include operations that changed this property, e.g., &#x60;owner&#x60; or &#x60;assignee&#x60;. | [optional] 
 **afterTimestamp** | **Date**| Restrict to entries that were created after the given timestamp. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the timestamp must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **beforeTimestamp** | **Date**| Restrict to entries that were created before the given timestamp. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the timestamp must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queryUserOperationEntries"></a>
# **queryUserOperationEntries**
> [UserOperationLogEntryDto] queryUserOperationEntries(opts)

Get User Operation Log (Historic)

Queries for user operation log entries that fulfill the given parameters. The size of the result set can be retrieved by using the [Get User Operation Log Count](https://docs.camunda.org/manual/develop/reference/rest/history/user-operation-log/get-user-operation-log-query-count/) method.  Note that the properties of operation log entries are interpreted as restrictions on the entities they apply to. That means, if a single process instance is updated, the field &#x60;processInstanceId&#x60; is populated. If a single operation updates all process instances of the same process definition, the field &#x60;processInstanceId&#x60; is &#x60;null&#x60; (a &#x60;null&#x60; restriction is viewed as a wildcard, i.e., matches a process instance with any id) and the field &#x60;processDefinitionId&#x60; is populated. This way, which entities were changed by a user operation can easily be reconstructed.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricUserOperationLogApi();
let opts = { 
  'deploymentId': "deploymentId_example", // String | Filter by deployment id.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by process definition id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by process definition key.
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'executionId': "executionId_example", // String | Filter by execution id.
  'caseDefinitionId': "caseDefinitionId_example", // String | Filter by case definition id.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by case instance id.
  'caseExecutionId': "caseExecutionId_example", // String | Filter by case execution id.
  'taskId': "taskId_example", // String | Only include operations on this task.
  'externalTaskId': "externalTaskId_example", // String | Only include operations on this external task.
  'batchId': "batchId_example", // String | Only include operations on this batch.
  'jobId': "jobId_example", // String | Filter by job id.
  'jobDefinitionId': "jobDefinitionId_example", // String | Filter by job definition id.
  'userId': "userId_example", // String | Only include operations of this user.
  'operationId': "operationId_example", // String | Filter by the id of the operation. This allows fetching of multiple entries which are part of a composite operation.
  'operationType': "operationType_example", // String | Filter by the type of the operation like `Claim` or `Delegate`. See the [Javadoc](https://docs.camunda.org/manual/develop/reference/javadoc/?org/camunda/bpm/engine/history/UserOperationLogEntry.html) for a list of available operation types.
  'entityType': "entityType_example", // String | Filter by the type of the entity that was affected by this operation, possible values are `Task`, `Attachment` or `IdentityLink`.
  'entityTypeIn': "entityTypeIn_example", // String | Filter by a comma-separated list of types of the entities that was affected by this operation, possible values are `Task`, `Attachment` or `IdentityLink`.
  'category': "category_example", // String | Filter by the category that this operation is associated with, possible values are `TaskWorker`, `Admin` or `Operator`.
  'categoryIn': "categoryIn_example", // String | Filter by a comma-separated list of categories that this operation is associated with, possible values are `TaskWorker`, `Admin` or `Operator`.
  'property': "property_example", // String | Only include operations that changed this property, e.g., `owner` or `assignee`.
  'afterTimestamp': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to entries that were created after the given timestamp. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the timestamp must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
  'beforeTimestamp': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to entries that were created before the given timestamp. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the timestamp must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.queryUserOperationEntries(opts, (error, data, response) => {
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
 **deploymentId** | **String**| Filter by deployment id. | [optional] 
 **processDefinitionId** | **String**| Filter by process definition id. | [optional] 
 **processDefinitionKey** | **String**| Filter by process definition key. | [optional] 
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **executionId** | **String**| Filter by execution id. | [optional] 
 **caseDefinitionId** | **String**| Filter by case definition id. | [optional] 
 **caseInstanceId** | **String**| Filter by case instance id. | [optional] 
 **caseExecutionId** | **String**| Filter by case execution id. | [optional] 
 **taskId** | **String**| Only include operations on this task. | [optional] 
 **externalTaskId** | **String**| Only include operations on this external task. | [optional] 
 **batchId** | **String**| Only include operations on this batch. | [optional] 
 **jobId** | **String**| Filter by job id. | [optional] 
 **jobDefinitionId** | **String**| Filter by job definition id. | [optional] 
 **userId** | **String**| Only include operations of this user. | [optional] 
 **operationId** | **String**| Filter by the id of the operation. This allows fetching of multiple entries which are part of a composite operation. | [optional] 
 **operationType** | **String**| Filter by the type of the operation like &#x60;Claim&#x60; or &#x60;Delegate&#x60;. See the [Javadoc](https://docs.camunda.org/manual/develop/reference/javadoc/?org/camunda/bpm/engine/history/UserOperationLogEntry.html) for a list of available operation types. | [optional] 
 **entityType** | **String**| Filter by the type of the entity that was affected by this operation, possible values are &#x60;Task&#x60;, &#x60;Attachment&#x60; or &#x60;IdentityLink&#x60;. | [optional] 
 **entityTypeIn** | **String**| Filter by a comma-separated list of types of the entities that was affected by this operation, possible values are &#x60;Task&#x60;, &#x60;Attachment&#x60; or &#x60;IdentityLink&#x60;. | [optional] 
 **category** | **String**| Filter by the category that this operation is associated with, possible values are &#x60;TaskWorker&#x60;, &#x60;Admin&#x60; or &#x60;Operator&#x60;. | [optional] 
 **categoryIn** | **String**| Filter by a comma-separated list of categories that this operation is associated with, possible values are &#x60;TaskWorker&#x60;, &#x60;Admin&#x60; or &#x60;Operator&#x60;. | [optional] 
 **property** | **String**| Only include operations that changed this property, e.g., &#x60;owner&#x60; or &#x60;assignee&#x60;. | [optional] 
 **afterTimestamp** | **Date**| Restrict to entries that were created after the given timestamp. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the timestamp must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **beforeTimestamp** | **Date**| Restrict to entries that were created before the given timestamp. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the timestamp must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[UserOperationLogEntryDto]**](UserOperationLogEntryDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setAnnotationUserOperationLog"></a>
# **setAnnotationUserOperationLog**
> setAnnotationUserOperationLog(operationId, opts)

Set Annotation to an User Operation Log (Historic)

Set an annotation for auditing reasons.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricUserOperationLogApi();
let operationId = "operationId_example"; // String | The operation id of the operation log to be updated.
let opts = { 
  'body': new CamundaRestApi.AnnotationDto() // AnnotationDto | 
};
apiInstance.setAnnotationUserOperationLog(operationId, opts, (error, data, response) => {
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
 **operationId** | **String**| The operation id of the operation log to be updated. | 
 **body** | [**AnnotationDto**](AnnotationDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

