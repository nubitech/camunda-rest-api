# CamundaRestApi.JobApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteJob**](JobApi.md#deleteJob) | **DELETE** /job/{id} | Delete Job
[**executeJob**](JobApi.md#executeJob) | **POST** /job/{id}/execute | Execute Job
[**getJob**](JobApi.md#getJob) | **GET** /job/{id} | Get Job
[**getJobs**](JobApi.md#getJobs) | **GET** /job | Get Jobs
[**getJobsCount**](JobApi.md#getJobsCount) | **GET** /job/count | Get Job Count
[**getStacktrace**](JobApi.md#getStacktrace) | **GET** /job/{id}/stacktrace | Get Exception Stacktrace
[**queryJobs**](JobApi.md#queryJobs) | **POST** /job | Get Jobs (POST)
[**queryJobsCount**](JobApi.md#queryJobsCount) | **POST** /job/count | Get Job Count (POST)
[**recalculateDuedate**](JobApi.md#recalculateDuedate) | **POST** /job/{id}/duedate/recalculate | Recalculate Job Due Date
[**setJobDuedate**](JobApi.md#setJobDuedate) | **PUT** /job/{id}/duedate | Set Job Due Date
[**setJobPriority**](JobApi.md#setJobPriority) | **PUT** /job/{id}/priority | Set Job Priority
[**setJobRetries**](JobApi.md#setJobRetries) | **PUT** /job/{id}/retries | Set Job Retries
[**setJobRetriesAsyncOperation**](JobApi.md#setJobRetriesAsyncOperation) | **POST** /job/retries | Set Job Retries Async (POST)
[**updateJobSuspensionState**](JobApi.md#updateJobSuspensionState) | **PUT** /job/{id}/suspended | Activate/Suspend Job By Id
[**updateSuspensionStateBy**](JobApi.md#updateSuspensionStateBy) | **PUT** /job/suspended | Activate/Suspend Jobs

<a name="deleteJob"></a>
# **deleteJob**
> deleteJob(id)

Delete Job

Deletes a job by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let id = "id_example"; // String | The id of the job to be deleted.

apiInstance.deleteJob(id, (error, data, response) => {
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
 **id** | **String**| The id of the job to be deleted. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="executeJob"></a>
# **executeJob**
> executeJob(id)

Execute Job

Executes a job by id. **Note:** The execution of the job happens synchronously in the same thread.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let id = "id_example"; // String | The id of the job to be executed.

apiInstance.executeJob(id, (error, data, response) => {
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
 **id** | **String**| The id of the job to be executed. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJob"></a>
# **getJob**
> JobDto getJob(id)

Get Job

Retrieves a job by id, according to the &#x60;Job&#x60; interface in the engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let id = "id_example"; // String | The id of the job to be retrieved.

apiInstance.getJob(id, (error, data, response) => {
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
 **id** | **String**| The id of the job to be retrieved. | 

### Return type

[**JobDto**](JobDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobs"></a>
# **getJobs**
> [JobDto] getJobs(opts)

Get Jobs

Queries for jobs that fulfill given parameters. The size of the result set can be retrieved by using the [Get Job Count](https://docs.camunda.org/manual/develop/reference/rest/job/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let opts = { 
  'jobId': "jobId_example", // String | Filter by job id.
  'jobIds': "jobIds_example", // String | Filter by a comma-separated list of job ids.
  'jobDefinitionId': "jobDefinitionId_example", // String | Only select jobs which exist for the given job definition.
  'processInstanceId': "processInstanceId_example", // String | Only select jobs which exist for the given process instance.
  'processInstanceIds': "processInstanceIds_example", // String | Only select jobs which exist for the given comma-separated list of process instance ids.
  'executionId': "executionId_example", // String | Only select jobs which exist for the given execution.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the id of the process definition the jobs run on.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by the key of the process definition the jobs run on.
  'activityId': "activityId_example", // String | Only select jobs which exist for an activity with the given id.
  'withRetriesLeft': true, // Boolean | Only select jobs which have retries left. Value may only be `true`, as `false` is the default behavior.
  'executable': true, // Boolean | Only select jobs which are executable, i.e., retries > 0 and due date is `null` or due date is in the past. Value may only be `true`, as `false` is the default behavior.
  'timers': true, // Boolean | Only select jobs that are timers. Cannot be used together with `messages`. Value may only be `true`, as `false` is the default behavior.
  'messages': true, // Boolean | Only select jobs that are messages. Cannot be used together with `timers`. Value may only be `true`, as `false` is the default behavior.
  'dueDates': "dueDates_example", // String | Only select jobs where the due date is lower or higher than the given date. Due date expressions are comma-separated and are structured as follows:  A valid condition value has the form `operator_value`. `operator` is the comparison operator to be used and `value` the date value as string.  Valid operator values are: `gt` - greater than; `lt` - lower than. `value` may not contain underscore or comma characters.
  'createTimes': "createTimes_example", // String | Only select jobs created before or after the given date.  Create time expressions are comma-separated and are structured as follows:  A valid condition value has the form `operator_value`. `operator` is the comparison operator to be used and `value` the date value as string.  Valid operator values are: `gt` - greater than; `lt` - lower than. `value` may not contain underscore or comma characters.
  'withException': true, // Boolean | Only select jobs that failed due to an exception. Value may only be `true`, as `false` is the default behavior.
  'exceptionMessage': "exceptionMessage_example", // String | Only select jobs that failed due to an exception with the given message.
  'failedActivityId': "failedActivityId_example", // String | Only select jobs that failed due to an exception at an activity with the given id.
  'noRetriesLeft': true, // Boolean | Only select jobs which have no retries left. Value may only be `true`, as `false` is the default behavior.
  'active': true, // Boolean | Only include active jobs. Value may only be `true`, as `false` is the default behavior.
  'suspended': true, // Boolean | Only include suspended jobs. Value may only be `true`, as `false` is the default behavior.
  'priorityLowerThanOrEquals': 789, // Number | Only include jobs with a priority lower than or equal to the given value. Value must be a valid `long` value.
  'priorityHigherThanOrEquals': 789, // Number | Only include jobs with a priority higher than or equal to the given value. Value must be a valid `long` value.
  'tenantIdIn': "tenantIdIn_example", // String | Only include jobs which belong to one of the passed comma-separated tenant ids.
  'withoutTenantId': true, // Boolean | Only include jobs which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'includeJobsWithoutTenantId': true, // Boolean | Include jobs which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getJobs(opts, (error, data, response) => {
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
 **jobId** | **String**| Filter by job id. | [optional] 
 **jobIds** | **String**| Filter by a comma-separated list of job ids. | [optional] 
 **jobDefinitionId** | **String**| Only select jobs which exist for the given job definition. | [optional] 
 **processInstanceId** | **String**| Only select jobs which exist for the given process instance. | [optional] 
 **processInstanceIds** | **String**| Only select jobs which exist for the given comma-separated list of process instance ids. | [optional] 
 **executionId** | **String**| Only select jobs which exist for the given execution. | [optional] 
 **processDefinitionId** | **String**| Filter by the id of the process definition the jobs run on. | [optional] 
 **processDefinitionKey** | **String**| Filter by the key of the process definition the jobs run on. | [optional] 
 **activityId** | **String**| Only select jobs which exist for an activity with the given id. | [optional] 
 **withRetriesLeft** | **Boolean**| Only select jobs which have retries left. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **executable** | **Boolean**| Only select jobs which are executable, i.e., retries &gt; 0 and due date is &#x60;null&#x60; or due date is in the past. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **timers** | **Boolean**| Only select jobs that are timers. Cannot be used together with &#x60;messages&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **messages** | **Boolean**| Only select jobs that are messages. Cannot be used together with &#x60;timers&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **dueDates** | **String**| Only select jobs where the due date is lower or higher than the given date. Due date expressions are comma-separated and are structured as follows:  A valid condition value has the form &#x60;operator_value&#x60;. &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the date value as string.  Valid operator values are: &#x60;gt&#x60; - greater than; &#x60;lt&#x60; - lower than. &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **createTimes** | **String**| Only select jobs created before or after the given date.  Create time expressions are comma-separated and are structured as follows:  A valid condition value has the form &#x60;operator_value&#x60;. &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the date value as string.  Valid operator values are: &#x60;gt&#x60; - greater than; &#x60;lt&#x60; - lower than. &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **withException** | **Boolean**| Only select jobs that failed due to an exception. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **exceptionMessage** | **String**| Only select jobs that failed due to an exception with the given message. | [optional] 
 **failedActivityId** | **String**| Only select jobs that failed due to an exception at an activity with the given id. | [optional] 
 **noRetriesLeft** | **Boolean**| Only select jobs which have no retries left. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **active** | **Boolean**| Only include active jobs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **suspended** | **Boolean**| Only include suspended jobs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **priorityLowerThanOrEquals** | **Number**| Only include jobs with a priority lower than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **priorityHigherThanOrEquals** | **Number**| Only include jobs with a priority higher than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **tenantIdIn** | **String**| Only include jobs which belong to one of the passed comma-separated tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include jobs which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **includeJobsWithoutTenantId** | **Boolean**| Include jobs which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[JobDto]**](JobDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobsCount"></a>
# **getJobsCount**
> CountResultDto getJobsCount(opts)

Get Job Count

Queries for the number of jobs that fulfill given parameters. Takes the same parameters as the [Get Jobs](https://docs.camunda.org/manual/develop/reference/rest/job/get-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let opts = { 
  'jobId': "jobId_example", // String | Filter by job id.
  'jobIds': "jobIds_example", // String | Filter by a comma-separated list of job ids.
  'jobDefinitionId': "jobDefinitionId_example", // String | Only select jobs which exist for the given job definition.
  'processInstanceId': "processInstanceId_example", // String | Only select jobs which exist for the given process instance.
  'processInstanceIds': "processInstanceIds_example", // String | Only select jobs which exist for the given comma-separated list of process instance ids.
  'executionId': "executionId_example", // String | Only select jobs which exist for the given execution.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the id of the process definition the jobs run on.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by the key of the process definition the jobs run on.
  'activityId': "activityId_example", // String | Only select jobs which exist for an activity with the given id.
  'withRetriesLeft': true, // Boolean | Only select jobs which have retries left. Value may only be `true`, as `false` is the default behavior.
  'executable': true, // Boolean | Only select jobs which are executable, i.e., retries > 0 and due date is `null` or due date is in the past. Value may only be `true`, as `false` is the default behavior.
  'timers': true, // Boolean | Only select jobs that are timers. Cannot be used together with `messages`. Value may only be `true`, as `false` is the default behavior.
  'messages': true, // Boolean | Only select jobs that are messages. Cannot be used together with `timers`. Value may only be `true`, as `false` is the default behavior.
  'dueDates': "dueDates_example", // String | Only select jobs where the due date is lower or higher than the given date. Due date expressions are comma-separated and are structured as follows:  A valid condition value has the form `operator_value`. `operator` is the comparison operator to be used and `value` the date value as string.  Valid operator values are: `gt` - greater than; `lt` - lower than. `value` may not contain underscore or comma characters.
  'createTimes': "createTimes_example", // String | Only select jobs created before or after the given date.  Create time expressions are comma-separated and are structured as follows:  A valid condition value has the form `operator_value`. `operator` is the comparison operator to be used and `value` the date value as string.  Valid operator values are: `gt` - greater than; `lt` - lower than. `value` may not contain underscore or comma characters.
  'withException': true, // Boolean | Only select jobs that failed due to an exception. Value may only be `true`, as `false` is the default behavior.
  'exceptionMessage': "exceptionMessage_example", // String | Only select jobs that failed due to an exception with the given message.
  'failedActivityId': "failedActivityId_example", // String | Only select jobs that failed due to an exception at an activity with the given id.
  'noRetriesLeft': true, // Boolean | Only select jobs which have no retries left. Value may only be `true`, as `false` is the default behavior.
  'active': true, // Boolean | Only include active jobs. Value may only be `true`, as `false` is the default behavior.
  'suspended': true, // Boolean | Only include suspended jobs. Value may only be `true`, as `false` is the default behavior.
  'priorityLowerThanOrEquals': 789, // Number | Only include jobs with a priority lower than or equal to the given value. Value must be a valid `long` value.
  'priorityHigherThanOrEquals': 789, // Number | Only include jobs with a priority higher than or equal to the given value. Value must be a valid `long` value.
  'tenantIdIn': "tenantIdIn_example", // String | Only include jobs which belong to one of the passed comma-separated tenant ids.
  'withoutTenantId': true, // Boolean | Only include jobs which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'includeJobsWithoutTenantId': true // Boolean | Include jobs which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
};
apiInstance.getJobsCount(opts, (error, data, response) => {
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
 **jobId** | **String**| Filter by job id. | [optional] 
 **jobIds** | **String**| Filter by a comma-separated list of job ids. | [optional] 
 **jobDefinitionId** | **String**| Only select jobs which exist for the given job definition. | [optional] 
 **processInstanceId** | **String**| Only select jobs which exist for the given process instance. | [optional] 
 **processInstanceIds** | **String**| Only select jobs which exist for the given comma-separated list of process instance ids. | [optional] 
 **executionId** | **String**| Only select jobs which exist for the given execution. | [optional] 
 **processDefinitionId** | **String**| Filter by the id of the process definition the jobs run on. | [optional] 
 **processDefinitionKey** | **String**| Filter by the key of the process definition the jobs run on. | [optional] 
 **activityId** | **String**| Only select jobs which exist for an activity with the given id. | [optional] 
 **withRetriesLeft** | **Boolean**| Only select jobs which have retries left. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **executable** | **Boolean**| Only select jobs which are executable, i.e., retries &gt; 0 and due date is &#x60;null&#x60; or due date is in the past. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **timers** | **Boolean**| Only select jobs that are timers. Cannot be used together with &#x60;messages&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **messages** | **Boolean**| Only select jobs that are messages. Cannot be used together with &#x60;timers&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **dueDates** | **String**| Only select jobs where the due date is lower or higher than the given date. Due date expressions are comma-separated and are structured as follows:  A valid condition value has the form &#x60;operator_value&#x60;. &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the date value as string.  Valid operator values are: &#x60;gt&#x60; - greater than; &#x60;lt&#x60; - lower than. &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **createTimes** | **String**| Only select jobs created before or after the given date.  Create time expressions are comma-separated and are structured as follows:  A valid condition value has the form &#x60;operator_value&#x60;. &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the date value as string.  Valid operator values are: &#x60;gt&#x60; - greater than; &#x60;lt&#x60; - lower than. &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **withException** | **Boolean**| Only select jobs that failed due to an exception. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **exceptionMessage** | **String**| Only select jobs that failed due to an exception with the given message. | [optional] 
 **failedActivityId** | **String**| Only select jobs that failed due to an exception at an activity with the given id. | [optional] 
 **noRetriesLeft** | **Boolean**| Only select jobs which have no retries left. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **active** | **Boolean**| Only include active jobs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **suspended** | **Boolean**| Only include suspended jobs. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **priorityLowerThanOrEquals** | **Number**| Only include jobs with a priority lower than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **priorityHigherThanOrEquals** | **Number**| Only include jobs with a priority higher than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **tenantIdIn** | **String**| Only include jobs which belong to one of the passed comma-separated tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include jobs which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **includeJobsWithoutTenantId** | **Boolean**| Include jobs which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStacktrace"></a>
# **getStacktrace**
> Object getStacktrace(id)

Get Exception Stacktrace

Retrieves the exception stacktrace corresponding to the passed job id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let id = "id_example"; // String | The id of the job to get the exception stacktrace for.

apiInstance.getStacktrace(id, (error, data, response) => {
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
 **id** | **String**| The id of the job to get the exception stacktrace for. | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="queryJobs"></a>
# **queryJobs**
> [JobDto] queryJobs(opts)

Get Jobs (POST)

Queries for jobs that fulfill given parameters. This method is slightly more powerful than the [Get Jobs](https://docs.camunda.org/manual/develop/reference/rest/job/get-query/) method because it allows filtering by multiple jobs of types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let opts = { 
  'body': new CamundaRestApi.JobQueryDto(), // JobQueryDto | 
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.queryJobs(opts, (error, data, response) => {
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
 **body** | [**JobQueryDto**](JobQueryDto.md)|  | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[JobDto]**](JobDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryJobsCount"></a>
# **queryJobsCount**
> CountResultDto queryJobsCount(opts)

Get Job Count (POST)

Queries for jobs that fulfill given parameters. This method takes the same message body as the [Get Jobs POST](https://docs.camunda.org/manual/develop/reference/rest/job/post- query/) method and therefore it is slightly more powerful than the [Get Job Count](https://docs.camunda.org/manual/develop/reference/rest/job/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let opts = { 
  'body': new CamundaRestApi.JobQueryDto() // JobQueryDto | 
};
apiInstance.queryJobsCount(opts, (error, data, response) => {
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
 **body** | [**JobQueryDto**](JobQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="recalculateDuedate"></a>
# **recalculateDuedate**
> recalculateDuedate(id, opts)

Recalculate Job Due Date

Recalculates the due date of a job by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let id = "id_example"; // String | The id of the job to be updated.
let opts = { 
  'creationDateBased': true // Boolean | Recalculate the due date based on the creation date of the job or the current date. Value may only be `false`, as `true` is the default behavior. 
};
apiInstance.recalculateDuedate(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the job to be updated. | 
 **creationDateBased** | **Boolean**| Recalculate the due date based on the creation date of the job or the current date. Value may only be &#x60;false&#x60;, as &#x60;true&#x60; is the default behavior.  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setJobDuedate"></a>
# **setJobDuedate**
> setJobDuedate(id, opts)

Set Job Due Date

Updates the due date of a job by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let id = "id_example"; // String | The id of the job to be updated.
let opts = { 
  'body': new CamundaRestApi.JobDuedateDto() // JobDuedateDto | 
};
apiInstance.setJobDuedate(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the job to be updated. | 
 **body** | [**JobDuedateDto**](JobDuedateDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setJobPriority"></a>
# **setJobPriority**
> setJobPriority(id, opts)

Set Job Priority

Sets the execution priority of a job by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let id = "id_example"; // String | The id of the job to be updated.
let opts = { 
  'body': new CamundaRestApi.PriorityDto() // PriorityDto | 
};
apiInstance.setJobPriority(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the job to be updated. | 
 **body** | [**PriorityDto**](PriorityDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setJobRetries"></a>
# **setJobRetries**
> setJobRetries(id, opts)

Set Job Retries

Sets the retries of the job to the given number of retries by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let id = "id_example"; // String | The id of the job to be updated.
let opts = { 
  'body': new CamundaRestApi.JobRetriesDto() // JobRetriesDto | 
};
apiInstance.setJobRetries(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the job to be updated. | 
 **body** | [**JobRetriesDto**](JobRetriesDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setJobRetriesAsyncOperation"></a>
# **setJobRetriesAsyncOperation**
> BatchDto setJobRetriesAsyncOperation(opts)

Set Job Retries Async (POST)

Create a batch to set retries of jobs asynchronously.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let opts = { 
  'body': new CamundaRestApi.SetJobRetriesDto() // SetJobRetriesDto | 
};
apiInstance.setJobRetriesAsyncOperation(opts, (error, data, response) => {
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
 **body** | [**SetJobRetriesDto**](SetJobRetriesDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateJobSuspensionState"></a>
# **updateJobSuspensionState**
> updateJobSuspensionState(id, opts)

Activate/Suspend Job By Id

Activates or suspends a given job by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let id = "id_example"; // String | The id of the job to activate or suspend.
let opts = { 
  'body': new CamundaRestApi.SuspensionStateDto() // SuspensionStateDto | 
};
apiInstance.updateJobSuspensionState(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the job to activate or suspend. | 
 **body** | [**SuspensionStateDto**](SuspensionStateDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateSuspensionStateBy"></a>
# **updateSuspensionStateBy**
> updateSuspensionStateBy(opts)

Activate/Suspend Jobs

Activates or suspends jobs matching the given criterion. This can only be on of: * &#x60;jobDefinitionId&#x60; * &#x60;processDefinitionId&#x60; * &#x60;processInstanceId&#x60; * &#x60;processDefinitionKey&#x60;

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobApi();
let opts = { 
  'body': new CamundaRestApi.JobSuspensionStateDto() // JobSuspensionStateDto | 
};
apiInstance.updateSuspensionStateBy(opts, (error, data, response) => {
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
 **body** | [**JobSuspensionStateDto**](JobSuspensionStateDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

