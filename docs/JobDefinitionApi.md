# CamundaRestApi.JobDefinitionApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJobDefinition**](JobDefinitionApi.md#getJobDefinition) | **GET** /job-definition/{id} | Get Job Definition
[**getJobDefinitions**](JobDefinitionApi.md#getJobDefinitions) | **GET** /job-definition | Get Job Definitions
[**getJobDefinitionsCount**](JobDefinitionApi.md#getJobDefinitionsCount) | **GET** /job-definition/count | Get Job Definition Count
[**queryJobDefinitions**](JobDefinitionApi.md#queryJobDefinitions) | **POST** /job-definition | Get Job Definitions (POST)
[**queryJobDefinitionsCount**](JobDefinitionApi.md#queryJobDefinitionsCount) | **POST** /job-definition/count | Get Job Definition Count (POST)
[**setJobPriorityJobDefinition**](JobDefinitionApi.md#setJobPriorityJobDefinition) | **PUT** /job-definition/{id}/jobPriority | Set Job Definition Priority by Id
[**setJobRetriesJobDefinition**](JobDefinitionApi.md#setJobRetriesJobDefinition) | **PUT** /job-definition/{id}/retries | Set Job Retries By Job Definition Id
[**updateSuspensionStateJobDefinition**](JobDefinitionApi.md#updateSuspensionStateJobDefinition) | **PUT** /job-definition/{id}/suspended | Activate/Suspend Job Definition By Id
[**updateSuspensionStateJobDefinitions**](JobDefinitionApi.md#updateSuspensionStateJobDefinitions) | **PUT** /job-definition/suspended | Activate/Suspend Job Definitions

<a name="getJobDefinition"></a>
# **getJobDefinition**
> JobDefinitionDto getJobDefinition(id)

Get Job Definition

Retrieves a job definition by id, according to the &#x60;JobDefinition&#x60; interface in the engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobDefinitionApi();
let id = "id_example"; // String | The id of the job definition to be retrieved.

apiInstance.getJobDefinition(id, (error, data, response) => {
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
 **id** | **String**| The id of the job definition to be retrieved. | 

### Return type

[**JobDefinitionDto**](JobDefinitionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobDefinitions"></a>
# **getJobDefinitions**
> [JobDefinitionDto] getJobDefinitions(opts)

Get Job Definitions

Queries for job definitions that fulfill given parameters. The size of the result set can be retrieved by using the [Get Job Definition Count](https://docs.camunda.org/manual/develop/reference/rest/job-definition/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobDefinitionApi();
let opts = { 
  'jobDefinitionId': "jobDefinitionId_example", // String | Filter by job definition id.
  'activityIdIn': "activityIdIn_example", // String | Only include job definitions which belong to one of the passed and comma-separated activity ids.
  'processDefinitionId': "processDefinitionId_example", // String | Only include job definitions which exist for the given process definition id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Only include job definitions which exist for the given process definition key.
  'jobType': "jobType_example", // String | Only include job definitions which exist for the given job type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/the-job-executor/#job-creation) for more information about job types.
  'jobConfiguration': "jobConfiguration_example", // String | Only include job definitions which exist for the given job configuration. For example: for timer jobs it is the timer configuration.
  'active': true, // Boolean | Only include active job definitions. Value may only be `true`, as `false` is the default behavior.
  'suspended': true, // Boolean | Only include suspended job definitions. Value may only be `true`, as `false` is the default behavior.
  'withOverridingJobPriority': true, // Boolean | Only include job definitions that have an overriding job priority defined. The only effective value is `true`. If set to `false`, this filter is not applied.
  'tenantIdIn': "tenantIdIn_example", // String | Only include job definitions which belong to one of the passed and comma-separated tenant ids.
  'withoutTenantId': true, // Boolean | Only include job definitions which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'includeJobDefinitionsWithoutTenantId': true, // Boolean | Include job definitions which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getJobDefinitions(opts, (error, data, response) => {
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
 **jobDefinitionId** | **String**| Filter by job definition id. | [optional] 
 **activityIdIn** | **String**| Only include job definitions which belong to one of the passed and comma-separated activity ids. | [optional] 
 **processDefinitionId** | **String**| Only include job definitions which exist for the given process definition id. | [optional] 
 **processDefinitionKey** | **String**| Only include job definitions which exist for the given process definition key. | [optional] 
 **jobType** | **String**| Only include job definitions which exist for the given job type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/the-job-executor/#job-creation) for more information about job types. | [optional] 
 **jobConfiguration** | **String**| Only include job definitions which exist for the given job configuration. For example: for timer jobs it is the timer configuration. | [optional] 
 **active** | **Boolean**| Only include active job definitions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **suspended** | **Boolean**| Only include suspended job definitions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **withOverridingJobPriority** | **Boolean**| Only include job definitions that have an overriding job priority defined. The only effective value is &#x60;true&#x60;. If set to &#x60;false&#x60;, this filter is not applied. | [optional] 
 **tenantIdIn** | **String**| Only include job definitions which belong to one of the passed and comma-separated tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include job definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **includeJobDefinitionsWithoutTenantId** | **Boolean**| Include job definitions which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[JobDefinitionDto]**](JobDefinitionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobDefinitionsCount"></a>
# **getJobDefinitionsCount**
> CountResultDto getJobDefinitionsCount(opts)

Get Job Definition Count

Queries for the number of job definitions that fulfill given parameters. Takes the same parameters as the [Get Job Definitions](https://docs.camunda.org/manual/develop/reference/rest/job-definition/get-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobDefinitionApi();
let opts = { 
  'jobDefinitionId': "jobDefinitionId_example", // String | Filter by job definition id.
  'activityIdIn': "activityIdIn_example", // String | Only include job definitions which belong to one of the passed and comma-separated activity ids.
  'processDefinitionId': "processDefinitionId_example", // String | Only include job definitions which exist for the given process definition id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Only include job definitions which exist for the given process definition key.
  'jobType': "jobType_example", // String | Only include job definitions which exist for the given job type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/the-job-executor/#job-creation) for more information about job types.
  'jobConfiguration': "jobConfiguration_example", // String | Only include job definitions which exist for the given job configuration. For example: for timer jobs it is the timer configuration.
  'active': true, // Boolean | Only include active job definitions. Value may only be `true`, as `false` is the default behavior.
  'suspended': true, // Boolean | Only include suspended job definitions. Value may only be `true`, as `false` is the default behavior.
  'withOverridingJobPriority': true, // Boolean | Only include job definitions that have an overriding job priority defined. The only effective value is `true`. If set to `false`, this filter is not applied.
  'tenantIdIn': "tenantIdIn_example", // String | Only include job definitions which belong to one of the passed and comma-separated tenant ids.
  'withoutTenantId': true, // Boolean | Only include job definitions which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'includeJobDefinitionsWithoutTenantId': true // Boolean | Include job definitions which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
};
apiInstance.getJobDefinitionsCount(opts, (error, data, response) => {
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
 **jobDefinitionId** | **String**| Filter by job definition id. | [optional] 
 **activityIdIn** | **String**| Only include job definitions which belong to one of the passed and comma-separated activity ids. | [optional] 
 **processDefinitionId** | **String**| Only include job definitions which exist for the given process definition id. | [optional] 
 **processDefinitionKey** | **String**| Only include job definitions which exist for the given process definition key. | [optional] 
 **jobType** | **String**| Only include job definitions which exist for the given job type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/the-job-executor/#job-creation) for more information about job types. | [optional] 
 **jobConfiguration** | **String**| Only include job definitions which exist for the given job configuration. For example: for timer jobs it is the timer configuration. | [optional] 
 **active** | **Boolean**| Only include active job definitions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **suspended** | **Boolean**| Only include suspended job definitions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **withOverridingJobPriority** | **Boolean**| Only include job definitions that have an overriding job priority defined. The only effective value is &#x60;true&#x60;. If set to &#x60;false&#x60;, this filter is not applied. | [optional] 
 **tenantIdIn** | **String**| Only include job definitions which belong to one of the passed and comma-separated tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include job definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **includeJobDefinitionsWithoutTenantId** | **Boolean**| Include job definitions which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queryJobDefinitions"></a>
# **queryJobDefinitions**
> [JobDefinitionDto] queryJobDefinitions(opts)

Get Job Definitions (POST)

Queries for job definitions that fulfill given parameters. This method is slightly more powerful than the [Get Job Definitions](https://docs.camunda.org/manual/develop/reference/rest/job-definition/get-query/) method because it allows filtering by multiple job definitions of types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobDefinitionApi();
let opts = { 
  'body': new CamundaRestApi.JobDefinitionQueryDto(), // JobDefinitionQueryDto | 
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.queryJobDefinitions(opts, (error, data, response) => {
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
 **body** | [**JobDefinitionQueryDto**](JobDefinitionQueryDto.md)|  | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[JobDefinitionDto]**](JobDefinitionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryJobDefinitionsCount"></a>
# **queryJobDefinitionsCount**
> CountResultDto queryJobDefinitionsCount(opts)

Get Job Definition Count (POST)

Queries for the number of job definitions that fulfill given parameters. This method takes the same message body as the [Get Job Definitions (POST)](https://docs.camunda.org/manual/develop/reference/rest/job-definition/post-query/) method and therefore it is slightly more powerful than the [Get Job Definition Count](https://docs.camunda.org/manual/develop/reference/rest/job-definition/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobDefinitionApi();
let opts = { 
  'body': new CamundaRestApi.JobDefinitionQueryDto() // JobDefinitionQueryDto | 
};
apiInstance.queryJobDefinitionsCount(opts, (error, data, response) => {
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
 **body** | [**JobDefinitionQueryDto**](JobDefinitionQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setJobPriorityJobDefinition"></a>
# **setJobPriorityJobDefinition**
> setJobPriorityJobDefinition(id, opts)

Set Job Definition Priority by Id

Sets an overriding execution priority for jobs with the given definition id. Optionally, the priorities of all the definitions&#x27; existing jobs are updated accordingly. The priority can be reset by setting it to &#x60;null&#x60;, meaning that a new job&#x27;s priority will not be determined based on its definition&#x27;s priority any longer. See the [user guide on job prioritization](https://docs.camunda.org/manual/develop/user-guide/process-engine/the-job-executor/#set-job-definition-priorities-via-managementservice-api) for details.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobDefinitionApi();
let id = "id_example"; // String | The id of the job definition to be updated.
let opts = { 
  'body': new CamundaRestApi.JobDefinitionPriorityDto() // JobDefinitionPriorityDto | 
};
apiInstance.setJobPriorityJobDefinition(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the job definition to be updated. | 
 **body** | [**JobDefinitionPriorityDto**](JobDefinitionPriorityDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setJobRetriesJobDefinition"></a>
# **setJobRetriesJobDefinition**
> setJobRetriesJobDefinition(id, opts)

Set Job Retries By Job Definition Id

Sets the number of retries of all **failed** jobs associated with the given job definition id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobDefinitionApi();
let id = "id_example"; // String | The id of the job definition to be updated.
let opts = { 
  'body': new CamundaRestApi.RetriesDto() // RetriesDto | 
};
apiInstance.setJobRetriesJobDefinition(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the job definition to be updated. | 
 **body** | [**RetriesDto**](RetriesDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSuspensionStateJobDefinition"></a>
# **updateSuspensionStateJobDefinition**
> updateSuspensionStateJobDefinition(id, opts)

Activate/Suspend Job Definition By Id

Activates or suspends a given job definition by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobDefinitionApi();
let id = "id_example"; // String | The id of the job definition to activate or suspend.
let opts = { 
  'body': new CamundaRestApi.JobDefinitionSuspensionStateDto() // JobDefinitionSuspensionStateDto | 
};
apiInstance.updateSuspensionStateJobDefinition(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the job definition to activate or suspend. | 
 **body** | [**JobDefinitionSuspensionStateDto**](JobDefinitionSuspensionStateDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSuspensionStateJobDefinitions"></a>
# **updateSuspensionStateJobDefinitions**
> updateSuspensionStateJobDefinitions(opts)

Activate/Suspend Job Definitions

Activates or suspends job definitions with the given process definition id or process definition key.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.JobDefinitionApi();
let opts = { 
  'body': new CamundaRestApi.JobDefinitionsSuspensionStateDto() // JobDefinitionsSuspensionStateDto | 
};
apiInstance.updateSuspensionStateJobDefinitions(opts, (error, data, response) => {
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
 **body** | [**JobDefinitionsSuspensionStateDto**](JobDefinitionsSuspensionStateDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

