# CamundaRestApi.ProcessInstanceApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**correlateMessageAsyncOperation**](ProcessInstanceApi.md#correlateMessageAsyncOperation) | **POST** /process-instance/message-async | Correlate Message Async (POST)
[**deleteAsyncHistoricQueryBased**](ProcessInstanceApi.md#deleteAsyncHistoricQueryBased) | **POST** /process-instance/delete-historic-query-based | Delete Async Historic Query Based (POST)
[**deleteProcessInstance**](ProcessInstanceApi.md#deleteProcessInstance) | **DELETE** /process-instance/{id} | Delete
[**deleteProcessInstanceVariable**](ProcessInstanceApi.md#deleteProcessInstanceVariable) | **DELETE** /process-instance/{id}/variables/{varName} | Delete Process Variable
[**deleteProcessInstancesAsyncOperation**](ProcessInstanceApi.md#deleteProcessInstancesAsyncOperation) | **POST** /process-instance/delete | Delete Async (POST)
[**getActivityInstanceTree**](ProcessInstanceApi.md#getActivityInstanceTree) | **GET** /process-instance/{id}/activity-instances | Get Activity Instance
[**getProcessInstance**](ProcessInstanceApi.md#getProcessInstance) | **GET** /process-instance/{id} | Get Process Instance
[**getProcessInstanceComments**](ProcessInstanceApi.md#getProcessInstanceComments) | **GET** /process-instance/{id}/comment | Get Process Instance Comments
[**getProcessInstanceVariable**](ProcessInstanceApi.md#getProcessInstanceVariable) | **GET** /process-instance/{id}/variables/{varName} | Get Process Variable
[**getProcessInstanceVariableBinary**](ProcessInstanceApi.md#getProcessInstanceVariableBinary) | **GET** /process-instance/{id}/variables/{varName}/data | Get Process Variable (Binary)
[**getProcessInstanceVariables**](ProcessInstanceApi.md#getProcessInstanceVariables) | **GET** /process-instance/{id}/variables | Get Process Variables
[**getProcessInstances**](ProcessInstanceApi.md#getProcessInstances) | **GET** /process-instance | Get List
[**getProcessInstancesCount**](ProcessInstanceApi.md#getProcessInstancesCount) | **GET** /process-instance/count | Get List Count
[**modifyProcessInstance**](ProcessInstanceApi.md#modifyProcessInstance) | **POST** /process-instance/{id}/modification | Modify Process Instance Execution State
[**modifyProcessInstanceAsyncOperation**](ProcessInstanceApi.md#modifyProcessInstanceAsyncOperation) | **POST** /process-instance/{id}/modification-async | Modify Process Instance Execution State Async
[**modifyProcessInstanceVariables**](ProcessInstanceApi.md#modifyProcessInstanceVariables) | **POST** /process-instance/{id}/variables | Update/Delete Process Variables
[**queryProcessInstances**](ProcessInstanceApi.md#queryProcessInstances) | **POST** /process-instance | Get List (POST)
[**queryProcessInstancesCount**](ProcessInstanceApi.md#queryProcessInstancesCount) | **POST** /process-instance/count | Get List Count (POST)
[**setProcessInstanceVariable**](ProcessInstanceApi.md#setProcessInstanceVariable) | **PUT** /process-instance/{id}/variables/{varName} | Update Process Variable
[**setProcessInstanceVariableBinary**](ProcessInstanceApi.md#setProcessInstanceVariableBinary) | **POST** /process-instance/{id}/variables/{varName}/data | Update Process Variable (Binary)
[**setRetriesByProcess**](ProcessInstanceApi.md#setRetriesByProcess) | **POST** /process-instance/job-retries | Set Job Retries Async (POST)
[**setRetriesByProcessHistoricQueryBased**](ProcessInstanceApi.md#setRetriesByProcessHistoricQueryBased) | **POST** /process-instance/job-retries-historic-query-based | Set Job Retries Async Historic Query Based (POST)
[**setVariablesAsyncOperation**](ProcessInstanceApi.md#setVariablesAsyncOperation) | **POST** /process-instance/variables-async | Set Variables Async (POST)
[**updateSuspensionState**](ProcessInstanceApi.md#updateSuspensionState) | **PUT** /process-instance/suspended | Activate/Suspend In Group
[**updateSuspensionStateAsyncOperation**](ProcessInstanceApi.md#updateSuspensionStateAsyncOperation) | **POST** /process-instance/suspended-async | Activate/Suspend In Batch
[**updateSuspensionStateById**](ProcessInstanceApi.md#updateSuspensionStateById) | **PUT** /process-instance/{id}/suspended | Activate/Suspend Process Instance By Id

<a name="correlateMessageAsyncOperation"></a>
# **correlateMessageAsyncOperation**
> BatchDto correlateMessageAsyncOperation(opts)

Correlate Message Async (POST)

Correlates a message asynchronously to executions that are waiting for this message.  Messages will not be correlated to process definition-level start message events to start process instances.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let opts = { 
  'body': new CamundaRestApi.CorrelationMessageAsyncDto() // CorrelationMessageAsyncDto | 
};
apiInstance.correlateMessageAsyncOperation(opts, (error, data, response) => {
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
 **body** | [**CorrelationMessageAsyncDto**](CorrelationMessageAsyncDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAsyncHistoricQueryBased"></a>
# **deleteAsyncHistoricQueryBased**
> BatchDto deleteAsyncHistoricQueryBased(opts)

Delete Async Historic Query Based (POST)

Deletes a set of process instances asynchronously (batch) based on a historic process instance query.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let opts = { 
  'body': new CamundaRestApi.DeleteProcessInstancesDto() // DeleteProcessInstancesDto | **Unallowed property**: `processInstanceQuery`
};
apiInstance.deleteAsyncHistoricQueryBased(opts, (error, data, response) => {
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
 **body** | [**DeleteProcessInstancesDto**](DeleteProcessInstancesDto.md)| **Unallowed property**: &#x60;processInstanceQuery&#x60; | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProcessInstance"></a>
# **deleteProcessInstance**
> deleteProcessInstance(id, opts)

Delete

Deletes a running process instance by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to be deleted.
let opts = { 
  'skipCustomListeners': false, // Boolean | If set to true, the custom listeners will be skipped.
  'skipIoMappings': false, // Boolean | If set to true, the input/output mappings will be skipped.
  'skipSubprocesses': false, // Boolean | If set to true, subprocesses related to deleted processes will be skipped.
  'failIfNotExists': true // Boolean | If set to false, the request will still be successful if the process id is not found.
};
apiInstance.deleteProcessInstance(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the process instance to be deleted. | 
 **skipCustomListeners** | **Boolean**| If set to true, the custom listeners will be skipped. | [optional] [default to false]
 **skipIoMappings** | **Boolean**| If set to true, the input/output mappings will be skipped. | [optional] [default to false]
 **skipSubprocesses** | **Boolean**| If set to true, subprocesses related to deleted processes will be skipped. | [optional] [default to false]
 **failIfNotExists** | **Boolean**| If set to false, the request will still be successful if the process id is not found. | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProcessInstanceVariable"></a>
# **deleteProcessInstanceVariable**
> deleteProcessInstanceVariable(id, varName)

Delete Process Variable

Deletes a variable of a process instance by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to delete the variable from.
let varName = "varName_example"; // String | The name of the variable to delete.

apiInstance.deleteProcessInstanceVariable(id, varName, (error, data, response) => {
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
 **id** | **String**| The id of the process instance to delete the variable from. | 
 **varName** | **String**| The name of the variable to delete. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteProcessInstancesAsyncOperation"></a>
# **deleteProcessInstancesAsyncOperation**
> BatchDto deleteProcessInstancesAsyncOperation(opts)

Delete Async (POST)

Deletes multiple process instances asynchronously (batch).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let opts = { 
  'body': new CamundaRestApi.DeleteProcessInstancesDto() // DeleteProcessInstancesDto | **Unallowed property**: `historicProcessInstanceQuery`
};
apiInstance.deleteProcessInstancesAsyncOperation(opts, (error, data, response) => {
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
 **body** | [**DeleteProcessInstancesDto**](DeleteProcessInstancesDto.md)| **Unallowed property**: &#x60;historicProcessInstanceQuery&#x60; | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getActivityInstanceTree"></a>
# **getActivityInstanceTree**
> ActivityInstanceDto getActivityInstanceTree(id)

Get Activity Instance

Retrieves an Activity Instance (Tree) for a given process instance by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance for which the activity instance should be retrieved.

apiInstance.getActivityInstanceTree(id, (error, data, response) => {
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
 **id** | **String**| The id of the process instance for which the activity instance should be retrieved. | 

### Return type

[**ActivityInstanceDto**](ActivityInstanceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProcessInstance"></a>
# **getProcessInstance**
> ProcessInstanceDto getProcessInstance(id)

Get Process Instance

Retrieves a process instance by id, according to the &#x60;ProcessInstance&#x60; interface in the engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to be retrieved.

apiInstance.getProcessInstance(id, (error, data, response) => {
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
 **id** | **String**| The id of the process instance to be retrieved. | 

### Return type

[**ProcessInstanceDto**](ProcessInstanceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProcessInstanceComments"></a>
# **getProcessInstanceComments**
> [CommentDto] getProcessInstanceComments(id)

Get Process Instance Comments

Gets the comments for a process instance by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to retrieve the comments for.

apiInstance.getProcessInstanceComments(id, (error, data, response) => {
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
 **id** | **String**| The id of the process instance to retrieve the comments for. | 

### Return type

[**[CommentDto]**](CommentDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProcessInstanceVariable"></a>
# **getProcessInstanceVariable**
> VariableValueDto getProcessInstanceVariable(id, varName, opts)

Get Process Variable

Retrieves a variable of a given process instance by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to retrieve the variable for.
let varName = "varName_example"; // String | The name of the variable to retrieve.
let opts = { 
  'deserializeValue': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getProcessInstanceVariable(id, varName, opts, (error, data, response) => {
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
 **id** | **String**| The id of the process instance to retrieve the variable for. | 
 **varName** | **String**| The name of the variable to retrieve. | 
 **deserializeValue** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] [default to true]

### Return type

[**VariableValueDto**](VariableValueDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProcessInstanceVariableBinary"></a>
# **getProcessInstanceVariableBinary**
> &#x27;Blob&#x27; getProcessInstanceVariableBinary(id, varName)

Get Process Variable (Binary)

Retrieves the content of a Process Variable by the Process Instance id and the Process Variable name. Applicable for byte array or file Process Variables.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to retrieve the variable for.
let varName = "varName_example"; // String | The name of the variable to retrieve.

apiInstance.getProcessInstanceVariableBinary(id, varName, (error, data, response) => {
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
 **id** | **String**| The id of the process instance to retrieve the variable for. | 
 **varName** | **String**| The name of the variable to retrieve. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, text/plain, application/json

<a name="getProcessInstanceVariables"></a>
# **getProcessInstanceVariables**
> {&#x27;String&#x27;: VariableValueDto} getProcessInstanceVariables(id, opts)

Get Process Variables

Retrieves all variables of a given process instance by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to retrieve the variables from.
let opts = { 
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getProcessInstanceVariables(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the process instance to retrieve the variables from. | 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] [default to true]

### Return type

[**{&#x27;String&#x27;: VariableValueDto}**](VariableValueDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProcessInstances"></a>
# **getProcessInstances**
> [ProcessInstanceDto] getProcessInstances(opts)

Get List

Queries for process instances that fulfill given parameters. Parameters may be static as well as dynamic runtime properties of process instances. The size of the result set can be retrieved by using the Get Instance Count method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let opts = { 
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'processInstanceIds': "processInstanceIds_example", // String | Filter by a comma-separated list of process instance ids.
  'businessKey': "businessKey_example", // String | Filter by process instance business key.
  'businessKeyLike': "businessKeyLike_example", // String | Filter by process instance business key that the parameter is a substring of.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by case instance id.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the deployment the id belongs to.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by the key of the process definition the instances run on.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Filter by a comma-separated list of process definition keys. A process instance must have one of the given process definition keys.
  'processDefinitionKeyNotIn': "processDefinitionKeyNotIn_example", // String | Exclude instances by a comma-separated list of process definition keys. A process instance must not have one of the given process definition keys.
  'deploymentId': "deploymentId_example", // String | Filter by the deployment the id belongs to.
  'superProcessInstance': "superProcessInstance_example", // String | Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.
  'subProcessInstance': "subProcessInstance_example", // String | Restrict query to all process instances that have the given process instance as a sub process instance. Takes a process instance id.
  'superCaseInstance': "superCaseInstance_example", // String | Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
  'subCaseInstance': "subCaseInstance_example", // String | Restrict query to all process instances that have the given case instance as a sub case instance. Takes a case instance id.
  'active': false, // Boolean | Only include active process instances. Value may only be true, as false is the default behavior.
  'suspended': false, // Boolean | Only include suspended process instances. Value may only be true, as false is the default behavior.
  'withIncident': false, // Boolean | Filter by presence of incidents. Selects only process instances that have an incident.
  'incidentId': "incidentId_example", // String | Filter by the incident id.
  'incidentType': "incidentType_example", // String | Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'incidentMessage': "incidentMessage_example", // String | Filter by the incident message. Exact match.
  'incidentMessageLike': "incidentMessageLike_example", // String | Filter by the incident message that the parameter is a substring of.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A process instance must have one of the given tenant ids.
  'withoutTenantId': false, // Boolean | Only include process instances which belong to no tenant.
  'processDefinitionWithoutTenantId': false, // Boolean | Only include process instances which process definition has no tenant id.
  'activityIdIn': "activityIdIn_example", // String | Filter by a comma-separated list of activity ids. A process instance must currently wait in a leaf activity with one of the given activity ids.
  'rootProcessInstances': false, // Boolean | Restrict the query to all process instances that are top level process instances.
  'leafProcessInstances': false, // Boolean | Restrict the query to all process instances that are leaf instances. (i.e. don't have any sub instances).
  'variables': "variables_example", // String | Only include process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
  'variableNamesIgnoreCase': false, // Boolean | Match all variable names in this query case-insensitively. If set to true variableName and variablename are treated as equal.
  'variableValuesIgnoreCase': false // Boolean | Match all variable values in this query case-insensitively. If set to true variableValue and variablevalue are treated as equal.
};
apiInstance.getProcessInstances(opts, (error, data, response) => {
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
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 
 **processInstanceIds** | **String**| Filter by a comma-separated list of process instance ids. | [optional] 
 **businessKey** | **String**| Filter by process instance business key. | [optional] 
 **businessKeyLike** | **String**| Filter by process instance business key that the parameter is a substring of. | [optional] 
 **caseInstanceId** | **String**| Filter by case instance id. | [optional] 
 **processDefinitionId** | **String**| Filter by the deployment the id belongs to. | [optional] 
 **processDefinitionKey** | **String**| Filter by the key of the process definition the instances run on. | [optional] 
 **processDefinitionKeyIn** | **String**| Filter by a comma-separated list of process definition keys. A process instance must have one of the given process definition keys. | [optional] 
 **processDefinitionKeyNotIn** | **String**| Exclude instances by a comma-separated list of process definition keys. A process instance must not have one of the given process definition keys. | [optional] 
 **deploymentId** | **String**| Filter by the deployment the id belongs to. | [optional] 
 **superProcessInstance** | **String**| Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id. | [optional] 
 **subProcessInstance** | **String**| Restrict query to all process instances that have the given process instance as a sub process instance. Takes a process instance id. | [optional] 
 **superCaseInstance** | **String**| Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id. | [optional] 
 **subCaseInstance** | **String**| Restrict query to all process instances that have the given case instance as a sub case instance. Takes a case instance id. | [optional] 
 **active** | **Boolean**| Only include active process instances. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **suspended** | **Boolean**| Only include suspended process instances. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **withIncident** | **Boolean**| Filter by presence of incidents. Selects only process instances that have an incident. | [optional] [default to false]
 **incidentId** | **String**| Filter by the incident id. | [optional] 
 **incidentType** | **String**| Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **incidentMessage** | **String**| Filter by the incident message. Exact match. | [optional] 
 **incidentMessageLike** | **String**| Filter by the incident message that the parameter is a substring of. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A process instance must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include process instances which belong to no tenant. | [optional] [default to false]
 **processDefinitionWithoutTenantId** | **Boolean**| Only include process instances which process definition has no tenant id. | [optional] [default to false]
 **activityIdIn** | **String**| Filter by a comma-separated list of activity ids. A process instance must currently wait in a leaf activity with one of the given activity ids. | [optional] 
 **rootProcessInstances** | **Boolean**| Restrict the query to all process instances that are top level process instances. | [optional] [default to false]
 **leafProcessInstances** | **Boolean**| Restrict the query to all process instances that are leaf instances. (i.e. don&#x27;t have any sub instances). | [optional] [default to false]
 **variables** | **String**| Only include process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note**: Values are always treated as String objects on server side.  Valid &#x60;operator&#x60; values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match all variable names in this query case-insensitively. If set to true variableName and variablename are treated as equal. | [optional] [default to false]
 **variableValuesIgnoreCase** | **Boolean**| Match all variable values in this query case-insensitively. If set to true variableValue and variablevalue are treated as equal. | [optional] [default to false]

### Return type

[**[ProcessInstanceDto]**](ProcessInstanceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProcessInstancesCount"></a>
# **getProcessInstancesCount**
> CountResultDto getProcessInstancesCount(opts)

Get List Count

Queries for the number of process instances that fulfill given parameters.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let opts = { 
  'processInstanceIds': "processInstanceIds_example", // String | Filter by a comma-separated list of process instance ids.
  'businessKey': "businessKey_example", // String | Filter by process instance business key.
  'businessKeyLike': "businessKeyLike_example", // String | Filter by process instance business key that the parameter is a substring of.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by case instance id.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the deployment the id belongs to.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by the key of the process definition the instances run on.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Filter by a comma-separated list of process definition keys. A process instance must have one of the given process definition keys.
  'processDefinitionKeyNotIn': "processDefinitionKeyNotIn_example", // String | Exclude instances by a comma-separated list of process definition keys. A process instance must not have one of the given process definition keys.
  'deploymentId': "deploymentId_example", // String | Filter by the deployment the id belongs to.
  'superProcessInstance': "superProcessInstance_example", // String | Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.
  'subProcessInstance': "subProcessInstance_example", // String | Restrict query to all process instances that have the given process instance as a sub process instance. Takes a process instance id.
  'superCaseInstance': "superCaseInstance_example", // String | Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
  'subCaseInstance': "subCaseInstance_example", // String | Restrict query to all process instances that have the given case instance as a sub case instance. Takes a case instance id.
  'active': false, // Boolean | Only include active process instances. Value may only be true, as false is the default behavior.
  'suspended': false, // Boolean | Only include suspended process instances. Value may only be true, as false is the default behavior.
  'withIncident': false, // Boolean | Filter by presence of incidents. Selects only process instances that have an incident.
  'incidentId': "incidentId_example", // String | Filter by the incident id.
  'incidentType': "incidentType_example", // String | Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'incidentMessage': "incidentMessage_example", // String | Filter by the incident message. Exact match.
  'incidentMessageLike': "incidentMessageLike_example", // String | Filter by the incident message that the parameter is a substring of.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A process instance must have one of the given tenant ids.
  'withoutTenantId': false, // Boolean | Only include process instances which belong to no tenant.
  'processDefinitionWithoutTenantId': false, // Boolean | Only include process instances which process definition has no tenant id.
  'activityIdIn': "activityIdIn_example", // String | Filter by a comma-separated list of activity ids. A process instance must currently wait in a leaf activity with one of the given activity ids.
  'rootProcessInstances': false, // Boolean | Restrict the query to all process instances that are top level process instances.
  'leafProcessInstances': false, // Boolean | Restrict the query to all process instances that are leaf instances. (i.e. don't have any sub instances).
  'variables': "variables_example", // String | Only include process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
  'variableNamesIgnoreCase': false, // Boolean | Match all variable names in this query case-insensitively. If set to true variableName and variablename are treated as equal.
  'variableValuesIgnoreCase': false // Boolean | Match all variable values in this query case-insensitively. If set to true variableValue and variablevalue are treated as equal.
};
apiInstance.getProcessInstancesCount(opts, (error, data, response) => {
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
 **processInstanceIds** | **String**| Filter by a comma-separated list of process instance ids. | [optional] 
 **businessKey** | **String**| Filter by process instance business key. | [optional] 
 **businessKeyLike** | **String**| Filter by process instance business key that the parameter is a substring of. | [optional] 
 **caseInstanceId** | **String**| Filter by case instance id. | [optional] 
 **processDefinitionId** | **String**| Filter by the deployment the id belongs to. | [optional] 
 **processDefinitionKey** | **String**| Filter by the key of the process definition the instances run on. | [optional] 
 **processDefinitionKeyIn** | **String**| Filter by a comma-separated list of process definition keys. A process instance must have one of the given process definition keys. | [optional] 
 **processDefinitionKeyNotIn** | **String**| Exclude instances by a comma-separated list of process definition keys. A process instance must not have one of the given process definition keys. | [optional] 
 **deploymentId** | **String**| Filter by the deployment the id belongs to. | [optional] 
 **superProcessInstance** | **String**| Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id. | [optional] 
 **subProcessInstance** | **String**| Restrict query to all process instances that have the given process instance as a sub process instance. Takes a process instance id. | [optional] 
 **superCaseInstance** | **String**| Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id. | [optional] 
 **subCaseInstance** | **String**| Restrict query to all process instances that have the given case instance as a sub case instance. Takes a case instance id. | [optional] 
 **active** | **Boolean**| Only include active process instances. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **suspended** | **Boolean**| Only include suspended process instances. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **withIncident** | **Boolean**| Filter by presence of incidents. Selects only process instances that have an incident. | [optional] [default to false]
 **incidentId** | **String**| Filter by the incident id. | [optional] 
 **incidentType** | **String**| Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **incidentMessage** | **String**| Filter by the incident message. Exact match. | [optional] 
 **incidentMessageLike** | **String**| Filter by the incident message that the parameter is a substring of. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A process instance must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include process instances which belong to no tenant. | [optional] [default to false]
 **processDefinitionWithoutTenantId** | **Boolean**| Only include process instances which process definition has no tenant id. | [optional] [default to false]
 **activityIdIn** | **String**| Filter by a comma-separated list of activity ids. A process instance must currently wait in a leaf activity with one of the given activity ids. | [optional] 
 **rootProcessInstances** | **Boolean**| Restrict the query to all process instances that are top level process instances. | [optional] [default to false]
 **leafProcessInstances** | **Boolean**| Restrict the query to all process instances that are leaf instances. (i.e. don&#x27;t have any sub instances). | [optional] [default to false]
 **variables** | **String**| Only include process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note**: Values are always treated as String objects on server side.  Valid &#x60;operator&#x60; values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match all variable names in this query case-insensitively. If set to true variableName and variablename are treated as equal. | [optional] [default to false]
 **variableValuesIgnoreCase** | **Boolean**| Match all variable values in this query case-insensitively. If set to true variableValue and variablevalue are treated as equal. | [optional] [default to false]

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyProcessInstance"></a>
# **modifyProcessInstance**
> modifyProcessInstance(id, opts)

Modify Process Instance Execution State

Submits a list of modification instructions to change a process instance&#x27;s execution state. A modification instruction is one of the following:  * Starting execution before an activity * Starting execution after an activity on its single outgoing sequence flow * Starting execution on a specific sequence flow * Canceling an activity instance, transition instance, or all instances (activity or transition) for an activity  Instructions are executed immediately and in the order they are provided in this request&#x27;s body. Variables can be provided with every starting instruction.  The exact semantics of modification can be read about in the [User guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/process-instance-modification/).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to modify.
let opts = { 
  'body': new CamundaRestApi.ProcessInstanceModificationDto() // ProcessInstanceModificationDto | 
};
apiInstance.modifyProcessInstance(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the process instance to modify. | 
 **body** | [**ProcessInstanceModificationDto**](ProcessInstanceModificationDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyProcessInstanceAsyncOperation"></a>
# **modifyProcessInstanceAsyncOperation**
> BatchDto modifyProcessInstanceAsyncOperation(id, opts)

Modify Process Instance Execution State Async

Submits a list of modification instructions to change a process instance&#x27;s execution state async. A modification instruction is one of the following:  * Starting execution before an activity * Starting execution after an activity on its single outgoing sequence flow * Starting execution on a specific sequence flow * Cancelling an activity instance, transition instance, or all instances (activity or transition) for an activity  Instructions are executed asynchronous and in the order they are provided in this request&#x27;s body. Variables can be provided with every starting instruction.  The exact semantics of modification can be read about in the [User guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/process-instance-modification/).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to modify.
let opts = { 
  'body': new CamundaRestApi.ProcessInstanceModificationDto() // ProcessInstanceModificationDto | 
};
apiInstance.modifyProcessInstanceAsyncOperation(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the process instance to modify. | 
 **body** | [**ProcessInstanceModificationDto**](ProcessInstanceModificationDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyProcessInstanceVariables"></a>
# **modifyProcessInstanceVariables**
> modifyProcessInstanceVariables(id, opts)

Update/Delete Process Variables

Updates or deletes the variables of a process instance by id. Updates precede deletions. So, if a variable is updated AND deleted, the deletion overrides the update.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to set variables for.
let opts = { 
  'body': new CamundaRestApi.PatchVariablesDto() // PatchVariablesDto | 
};
apiInstance.modifyProcessInstanceVariables(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the process instance to set variables for. | 
 **body** | [**PatchVariablesDto**](PatchVariablesDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryProcessInstances"></a>
# **queryProcessInstances**
> [ProcessInstanceDto] queryProcessInstances(opts)

Get List (POST)

Queries for process instances that fulfill given parameters through a JSON object. This method is slightly more powerful than the Get Instances method because it allows filtering by multiple process variables of types &#x60;string&#x60;, &#x60;number&#x60; or &#x60;boolean&#x60;.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let opts = { 
  'body': new CamundaRestApi.ProcessInstanceQueryDto(), // ProcessInstanceQueryDto | 
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.queryProcessInstances(opts, (error, data, response) => {
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
 **body** | [**ProcessInstanceQueryDto**](ProcessInstanceQueryDto.md)|  | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[ProcessInstanceDto]**](ProcessInstanceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryProcessInstancesCount"></a>
# **queryProcessInstancesCount**
> CountResultDto queryProcessInstancesCount(opts)

Get List Count (POST)

Queries for the number of process instances that fulfill the given parameters. This method takes the same message body as the Get Instances (POST) method and therefore it is slightly more powerful than the Get Instance Count method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let opts = { 
  'body': new CamundaRestApi.ProcessInstanceQueryDto() // ProcessInstanceQueryDto | 
};
apiInstance.queryProcessInstancesCount(opts, (error, data, response) => {
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
 **body** | [**ProcessInstanceQueryDto**](ProcessInstanceQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setProcessInstanceVariable"></a>
# **setProcessInstanceVariable**
> setProcessInstanceVariable(id, varName, opts)

Update Process Variable

Sets a variable of a given process instance by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to set the variable for.
let varName = "varName_example"; // String | The name of the variable to set.
let opts = { 
  'body': new CamundaRestApi.VariableValueDto() // VariableValueDto | 
};
apiInstance.setProcessInstanceVariable(id, varName, opts, (error, data, response) => {
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
 **id** | **String**| The id of the process instance to set the variable for. | 
 **varName** | **String**| The name of the variable to set. | 
 **body** | [**VariableValueDto**](VariableValueDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setProcessInstanceVariableBinary"></a>
# **setProcessInstanceVariableBinary**
> setProcessInstanceVariableBinary(id, varName, opts)

Update Process Variable (Binary)

Sets the serialized value for a binary variable or the binary value for a file variable.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to retrieve the variable for.
let varName = "varName_example"; // String | The name of the variable to retrieve.
let opts = { 
  'data': "data_example", // Blob | 
  'valueType': "valueType_example" // String | 
};
apiInstance.setProcessInstanceVariableBinary(id, varName, opts, (error, data, response) => {
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
 **id** | **String**| The id of the process instance to retrieve the variable for. | 
 **varName** | **String**| The name of the variable to retrieve. | 
 **data** | **Blob**|  | [optional] 
 **valueType** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="setRetriesByProcess"></a>
# **setRetriesByProcess**
> BatchDto setRetriesByProcess(opts)

Set Job Retries Async (POST)

Create a batch to set retries of jobs associated with given processes asynchronously.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let opts = { 
  'body': new CamundaRestApi.SetJobRetriesByProcessDto() // SetJobRetriesByProcessDto | Please note that if both processInstances and processInstanceQuery are provided,
then the resulting execution will be performed on the union of these sets.
**Unallowed property**: `historicProcessInstanceQuery`
};
apiInstance.setRetriesByProcess(opts, (error, data, response) => {
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
 **body** | [**SetJobRetriesByProcessDto**](SetJobRetriesByProcessDto.md)| Please note that if both processInstances and processInstanceQuery are provided,
then the resulting execution will be performed on the union of these sets.
**Unallowed property**: &#x60;historicProcessInstanceQuery&#x60; | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setRetriesByProcessHistoricQueryBased"></a>
# **setRetriesByProcessHistoricQueryBased**
> BatchDto setRetriesByProcessHistoricQueryBased(opts)

Set Job Retries Async Historic Query Based (POST)

Create a batch to set retries of jobs asynchronously based on a historic process instance query.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let opts = { 
  'body': new CamundaRestApi.SetJobRetriesByProcessDto() // SetJobRetriesByProcessDto | Please note that if both processInstances and historicProcessInstanceQuery are provided,
then the resulting execution will be performed on the union of these sets.
**Unallowed property**: `processInstanceQuery`
};
apiInstance.setRetriesByProcessHistoricQueryBased(opts, (error, data, response) => {
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
 **body** | [**SetJobRetriesByProcessDto**](SetJobRetriesByProcessDto.md)| Please note that if both processInstances and historicProcessInstanceQuery are provided,
then the resulting execution will be performed on the union of these sets.
**Unallowed property**: &#x60;processInstanceQuery&#x60; | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setVariablesAsyncOperation"></a>
# **setVariablesAsyncOperation**
> BatchDto setVariablesAsyncOperation(opts)

Set Variables Async (POST)

Update or create runtime process variables in the root scope of process instances.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let opts = { 
  'body': new CamundaRestApi.SetVariablesAsyncDto() // SetVariablesAsyncDto | 
};
apiInstance.setVariablesAsyncOperation(opts, (error, data, response) => {
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
 **body** | [**SetVariablesAsyncDto**](SetVariablesAsyncDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSuspensionState"></a>
# **updateSuspensionState**
> updateSuspensionState(opts)

Activate/Suspend In Group

Activates or suspends process instances by providing certain criteria:  # Activate/Suspend Process Instance By Process Definition Id * &#x60;suspend&#x60; * &#x60;processDefinitionId&#x60;  # Activate/Suspend Process Instance By Process Definition Key  * &#x60;suspend&#x60; * &#x60;processDefinitionKey&#x60; * &#x60;processDefinitionTenantId&#x60; * &#x60;processDefinitionWithoutTenantId&#x60;  # Activate/Suspend Process Instance In Group * &#x60;suspend&#x60; * &#x60;processInstanceIds&#x60; * &#x60;processInstanceQuery&#x60; * &#x60;historicProcessInstanceQuery&#x60;

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let opts = { 
  'body': new CamundaRestApi.ProcessInstanceSuspensionStateDto() // ProcessInstanceSuspensionStateDto | 
};
apiInstance.updateSuspensionState(opts, (error, data, response) => {
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
 **body** | [**ProcessInstanceSuspensionStateDto**](ProcessInstanceSuspensionStateDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSuspensionStateAsyncOperation"></a>
# **updateSuspensionStateAsyncOperation**
> BatchDto updateSuspensionStateAsyncOperation(opts)

Activate/Suspend In Batch

Activates or suspends process instances asynchronously with a list of process instance ids, a process instance query, and/or a historical process instance query.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let opts = { 
  'body': new CamundaRestApi.ProcessInstanceSuspensionStateAsyncDto() // ProcessInstanceSuspensionStateAsyncDto | 
};
apiInstance.updateSuspensionStateAsyncOperation(opts, (error, data, response) => {
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
 **body** | [**ProcessInstanceSuspensionStateAsyncDto**](ProcessInstanceSuspensionStateAsyncDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSuspensionStateById"></a>
# **updateSuspensionStateById**
> updateSuspensionStateById(id, opts)

Activate/Suspend Process Instance By Id

Activates or suspends a given process instance by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to activate or suspend.
let opts = { 
  'body': new CamundaRestApi.SuspensionStateDto() // SuspensionStateDto | 
};
apiInstance.updateSuspensionStateById(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the process instance to activate or suspend. | 
 **body** | [**SuspensionStateDto**](SuspensionStateDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

