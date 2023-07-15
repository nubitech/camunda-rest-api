# CamundaRestApi.ExecutionApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIncident**](ExecutionApi.md#createIncident) | **POST** /execution/{id}/create-incident | Create Incident
[**deleteLocalExecutionVariable**](ExecutionApi.md#deleteLocalExecutionVariable) | **DELETE** /execution/{id}/localVariables/{varName} | Delete Local Execution Variable
[**getExecution**](ExecutionApi.md#getExecution) | **GET** /execution/{id} | Get Execution
[**getExecutions**](ExecutionApi.md#getExecutions) | **GET** /execution | Get Executions
[**getExecutionsCount**](ExecutionApi.md#getExecutionsCount) | **GET** /execution/count | Get Execution Count
[**getLocalExecutionVariable**](ExecutionApi.md#getLocalExecutionVariable) | **GET** /execution/{id}/localVariables/{varName} | Get Local Execution Variable
[**getLocalExecutionVariableBinary**](ExecutionApi.md#getLocalExecutionVariableBinary) | **GET** /execution/{id}/localVariables/{varName}/data | Get Local Execution Variable (Binary)
[**getLocalExecutionVariables**](ExecutionApi.md#getLocalExecutionVariables) | **GET** /execution/{id}/localVariables | Get Local Execution Variables
[**getMessageEventSubscription**](ExecutionApi.md#getMessageEventSubscription) | **GET** /execution/{id}/messageSubscriptions/{messageName} | Get Message Event Subscription
[**modifyLocalExecutionVariables**](ExecutionApi.md#modifyLocalExecutionVariables) | **POST** /execution/{id}/localVariables | Update/Delete Local Execution Variables
[**putLocalExecutionVariable**](ExecutionApi.md#putLocalExecutionVariable) | **PUT** /execution/{id}/localVariables/{varName} | Put Local Execution Variable
[**queryExecutions**](ExecutionApi.md#queryExecutions) | **POST** /execution | Get Executions (POST)
[**queryExecutionsCount**](ExecutionApi.md#queryExecutionsCount) | **POST** /execution/count | Get Execution Count (POST)
[**setLocalExecutionVariableBinary**](ExecutionApi.md#setLocalExecutionVariableBinary) | **POST** /execution/{id}/localVariables/{varName}/data | Post Local Execution Variable (Binary)
[**signalExecution**](ExecutionApi.md#signalExecution) | **POST** /execution/{id}/signal | Trigger Execution
[**triggerEvent**](ExecutionApi.md#triggerEvent) | **POST** /execution/{id}/messageSubscriptions/{messageName}/trigger | Trigger Message Event Subscription

<a name="createIncident"></a>
# **createIncident**
> IncidentDto createIncident(id, opts)

Create Incident

Creates a custom incident with given properties.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let id = "id_example"; // String | The id of the execution to create a new incident for.
let opts = { 
  'body': new CamundaRestApi.CreateIncidentDto() // CreateIncidentDto | 
};
apiInstance.createIncident(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the execution to create a new incident for. | 
 **body** | [**CreateIncidentDto**](CreateIncidentDto.md)|  | [optional] 

### Return type

[**IncidentDto**](IncidentDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLocalExecutionVariable"></a>
# **deleteLocalExecutionVariable**
> deleteLocalExecutionVariable(id, varName)

Delete Local Execution Variable

Deletes a variable in the context of a given execution by id. Deletion does not propagate upwards in the execution hierarchy.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let id = "id_example"; // String | The id of the execution to delete the variable from.
let varName = "varName_example"; // String | The name of the variable to delete.

apiInstance.deleteLocalExecutionVariable(id, varName, (error, data, response) => {
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
 **id** | **String**| The id of the execution to delete the variable from. | 
 **varName** | **String**| The name of the variable to delete. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExecution"></a>
# **getExecution**
> ExecutionDto getExecution(id)

Get Execution

Retrieves an execution by id, according to the &#x60;Execution&#x60; interface in the engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let id = "id_example"; // String | The id of the execution to be retrieved.

apiInstance.getExecution(id, (error, data, response) => {
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
 **id** | **String**| The id of the execution to be retrieved. | 

### Return type

[**ExecutionDto**](ExecutionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExecutions"></a>
# **getExecutions**
> [ExecutionDto] getExecutions(opts)

Get Executions

Queries for the executions that fulfill given parameters. Parameters may be static as well as dynamic runtime properties of executions. The size of the result set can be retrieved by using the [Get Execution Count](https://docs.camunda.org/manual/develop/reference/rest/execution/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let opts = { 
  'businessKey': "businessKey_example", // String | Filter by the business key of the process instances the executions belong to.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the process definition the executions run on.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by the key of the process definition the executions run on.
  'processInstanceId': "processInstanceId_example", // String | Filter by the id of the process instance the execution belongs to.
  'activityId': "activityId_example", // String | Filter by the id of the activity the execution currently executes.
  'signalEventSubscriptionName': "signalEventSubscriptionName_example", // String | Select only those executions that expect a signal of the given name.
  'messageEventSubscriptionName': "messageEventSubscriptionName_example", // String | Select only those executions that expect a message of the given name.
  'active': true, // Boolean | Only include active executions. Value may only be `true`, as `false` is the default behavior.
  'suspended': true, // Boolean | Only include suspended executions. Value may only be `true`, as `false` is the default behavior.
  'incidentId': "incidentId_example", // String | Filter by the incident id.
  'incidentType': "incidentType_example", // String | Filter by the incident type. See the [User Guide](/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'incidentMessage': "incidentMessage_example", // String | Filter by the incident message. Exact match.
  'incidentMessageLike': "incidentMessageLike_example", // String | Filter by the incident message that the parameter is a substring of.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. An execution must have one of the given tenant ids.
  'variables': "variables_example", // String | Only include executions that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value. **Note:** Values are always treated as `String` objects on server side.  Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
  'processVariables': "processVariables_example", // String | Only include executions that belong to a process instance with variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value. **Note:** Values are always treated as `String` objects on server side.  Valid operator values are: `eq` - equal to; `neq` - not equal to. `key` and `value` may not contain underscore or comma characters.
  'variableNamesIgnoreCase': true, // Boolean | Match all variable names provided in `variables` and `processVariables` case- insensitively. If set to `true` **variableName** and **variablename** are treated as equal.
  'variableValuesIgnoreCase': true, // Boolean | Match all variable values provided in `variables` and `processVariables` case- insensitively. If set to `true` **variableValue** and **variablevalue** are treated as equal.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getExecutions(opts, (error, data, response) => {
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
 **businessKey** | **String**| Filter by the business key of the process instances the executions belong to. | [optional] 
 **processDefinitionId** | **String**| Filter by the process definition the executions run on. | [optional] 
 **processDefinitionKey** | **String**| Filter by the key of the process definition the executions run on. | [optional] 
 **processInstanceId** | **String**| Filter by the id of the process instance the execution belongs to. | [optional] 
 **activityId** | **String**| Filter by the id of the activity the execution currently executes. | [optional] 
 **signalEventSubscriptionName** | **String**| Select only those executions that expect a signal of the given name. | [optional] 
 **messageEventSubscriptionName** | **String**| Select only those executions that expect a message of the given name. | [optional] 
 **active** | **Boolean**| Only include active executions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **suspended** | **Boolean**| Only include suspended executions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **incidentId** | **String**| Filter by the incident id. | [optional] 
 **incidentType** | **String**| Filter by the incident type. See the [User Guide](/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **incidentMessage** | **String**| Filter by the incident message. Exact match. | [optional] 
 **incidentMessageLike** | **String**| Filter by the incident message that the parameter is a substring of. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. An execution must have one of the given tenant ids. | [optional] 
 **variables** | **String**| Only include executions that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value. **Note:** Values are always treated as &#x60;String&#x60; objects on server side.  Valid operator values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **processVariables** | **String**| Only include executions that belong to a process instance with variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value. **Note:** Values are always treated as &#x60;String&#x60; objects on server side.  Valid operator values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match all variable names provided in &#x60;variables&#x60; and &#x60;processVariables&#x60; case- insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal. | [optional] 
 **variableValuesIgnoreCase** | **Boolean**| Match all variable values provided in &#x60;variables&#x60; and &#x60;processVariables&#x60; case- insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[ExecutionDto]**](ExecutionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExecutionsCount"></a>
# **getExecutionsCount**
> CountResultDto getExecutionsCount(opts)

Get Execution Count

Queries for the number of executions that fulfill given parameters. Takes the same parameters as the [Get Executions](https://docs.camunda.org/manual/develop/reference/rest/execution/get-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let opts = { 
  'businessKey': "businessKey_example", // String | Filter by the business key of the process instances the executions belong to.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the process definition the executions run on.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by the key of the process definition the executions run on.
  'processInstanceId': "processInstanceId_example", // String | Filter by the id of the process instance the execution belongs to.
  'activityId': "activityId_example", // String | Filter by the id of the activity the execution currently executes.
  'signalEventSubscriptionName': "signalEventSubscriptionName_example", // String | Select only those executions that expect a signal of the given name.
  'messageEventSubscriptionName': "messageEventSubscriptionName_example", // String | Select only those executions that expect a message of the given name.
  'active': true, // Boolean | Only include active executions. Value may only be `true`, as `false` is the default behavior.
  'suspended': true, // Boolean | Only include suspended executions. Value may only be `true`, as `false` is the default behavior.
  'incidentId': "incidentId_example", // String | Filter by the incident id.
  'incidentType': "incidentType_example", // String | Filter by the incident type. See the [User Guide](/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'incidentMessage': "incidentMessage_example", // String | Filter by the incident message. Exact match.
  'incidentMessageLike': "incidentMessageLike_example", // String | Filter by the incident message that the parameter is a substring of.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. An execution must have one of the given tenant ids.
  'variables': "variables_example", // String | Only include executions that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value. **Note:** Values are always treated as `String` objects on server side.  Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
  'processVariables': "processVariables_example", // String | Only include executions that belong to a process instance with variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value. **Note:** Values are always treated as `String` objects on server side.  Valid operator values are: `eq` - equal to; `neq` - not equal to. `key` and `value` may not contain underscore or comma characters.
  'variableNamesIgnoreCase': true, // Boolean | Match all variable names provided in `variables` and `processVariables` case- insensitively. If set to `true` **variableName** and **variablename** are treated as equal.
  'variableValuesIgnoreCase': true // Boolean | Match all variable values provided in `variables` and `processVariables` case- insensitively. If set to `true` **variableValue** and **variablevalue** are treated as equal.
};
apiInstance.getExecutionsCount(opts, (error, data, response) => {
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
 **businessKey** | **String**| Filter by the business key of the process instances the executions belong to. | [optional] 
 **processDefinitionId** | **String**| Filter by the process definition the executions run on. | [optional] 
 **processDefinitionKey** | **String**| Filter by the key of the process definition the executions run on. | [optional] 
 **processInstanceId** | **String**| Filter by the id of the process instance the execution belongs to. | [optional] 
 **activityId** | **String**| Filter by the id of the activity the execution currently executes. | [optional] 
 **signalEventSubscriptionName** | **String**| Select only those executions that expect a signal of the given name. | [optional] 
 **messageEventSubscriptionName** | **String**| Select only those executions that expect a message of the given name. | [optional] 
 **active** | **Boolean**| Only include active executions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **suspended** | **Boolean**| Only include suspended executions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **incidentId** | **String**| Filter by the incident id. | [optional] 
 **incidentType** | **String**| Filter by the incident type. See the [User Guide](/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **incidentMessage** | **String**| Filter by the incident message. Exact match. | [optional] 
 **incidentMessageLike** | **String**| Filter by the incident message that the parameter is a substring of. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. An execution must have one of the given tenant ids. | [optional] 
 **variables** | **String**| Only include executions that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value. **Note:** Values are always treated as &#x60;String&#x60; objects on server side.  Valid operator values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **processVariables** | **String**| Only include executions that belong to a process instance with variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value. **Note:** Values are always treated as &#x60;String&#x60; objects on server side.  Valid operator values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match all variable names provided in &#x60;variables&#x60; and &#x60;processVariables&#x60; case- insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal. | [optional] 
 **variableValuesIgnoreCase** | **Boolean**| Match all variable values provided in &#x60;variables&#x60; and &#x60;processVariables&#x60; case- insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocalExecutionVariable"></a>
# **getLocalExecutionVariable**
> VariableValueDto getLocalExecutionVariable(id, varName, opts)

Get Local Execution Variable

Retrieves a variable from the context of a given execution by id. Does not traverse the parent execution hierarchy.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let id = "id_example"; // String | The id of the execution to retrieve the variable from.
let varName = "varName_example"; // String | The name of the variable to get.
let opts = { 
  'deserializeValue': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath. If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getLocalExecutionVariable(id, varName, opts, (error, data, response) => {
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
 **id** | **String**| The id of the execution to retrieve the variable from. | 
 **varName** | **String**| The name of the variable to get. | 
 **deserializeValue** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath. If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] 

### Return type

[**VariableValueDto**](VariableValueDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocalExecutionVariableBinary"></a>
# **getLocalExecutionVariableBinary**
> &#x27;Blob&#x27; getLocalExecutionVariableBinary(id, varName)

Get Local Execution Variable (Binary)

Retrieves a binary variable from the context of a given execution by id. Does not traverse the parent execution hierarchy. Applicable for byte array and file variables.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let id = "id_example"; // String | The id of the execution to retrieve the variable from.
let varName = "varName_example"; // String | The name of the variable to get.

apiInstance.getLocalExecutionVariableBinary(id, varName, (error, data, response) => {
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
 **id** | **String**| The id of the execution to retrieve the variable from. | 
 **varName** | **String**| The name of the variable to get. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, text/plain, application/json

<a name="getLocalExecutionVariables"></a>
# **getLocalExecutionVariables**
> {&#x27;String&#x27;: VariableValueDto} getLocalExecutionVariables(id, opts)

Get Local Execution Variables

Retrieves all variables of a given execution by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let id = "id_example"; // String | The id of the execution to retrieve the variables from.
let opts = { 
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getLocalExecutionVariables(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the execution to retrieve the variables from. | 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] 

### Return type

[**{&#x27;String&#x27;: VariableValueDto}**](VariableValueDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMessageEventSubscription"></a>
# **getMessageEventSubscription**
> EventSubscriptionDto getMessageEventSubscription(id, messageName)

Get Message Event Subscription

Retrieves a message event subscription for a given execution by id and a message name.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let id = "id_example"; // String | The id of the execution that holds the subscription.
let messageName = "messageName_example"; // String | The name of the message that the subscription corresponds to.

apiInstance.getMessageEventSubscription(id, messageName, (error, data, response) => {
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
 **id** | **String**| The id of the execution that holds the subscription. | 
 **messageName** | **String**| The name of the message that the subscription corresponds to. | 

### Return type

[**EventSubscriptionDto**](EventSubscriptionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyLocalExecutionVariables"></a>
# **modifyLocalExecutionVariables**
> modifyLocalExecutionVariables(id, opts)

Update/Delete Local Execution Variables

Updates or deletes the variables in the context of an execution by id. The updates do not propagate upwards in the execution hierarchy. Updates precede deletions. So, if a variable is updated AND deleted, the deletion overrides the update.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let id = "id_example"; // String | The id of the execution to set variables for.
let opts = { 
  'body': new CamundaRestApi.PatchVariablesDto() // PatchVariablesDto | 
};
apiInstance.modifyLocalExecutionVariables(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the execution to set variables for. | 
 **body** | [**PatchVariablesDto**](PatchVariablesDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putLocalExecutionVariable"></a>
# **putLocalExecutionVariable**
> putLocalExecutionVariable(id, varName, opts)

Put Local Execution Variable

Sets a variable in the context of a given execution by id. Update does not propagate upwards in the execution hierarchy.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let id = "id_example"; // String | The id of the execution to set the variable for.
let varName = "varName_example"; // String | The name of the variable to set.
let opts = { 
  'body': new CamundaRestApi.VariableValueDto() // VariableValueDto | 
};
apiInstance.putLocalExecutionVariable(id, varName, opts, (error, data, response) => {
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
 **id** | **String**| The id of the execution to set the variable for. | 
 **varName** | **String**| The name of the variable to set. | 
 **body** | [**VariableValueDto**](VariableValueDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryExecutions"></a>
# **queryExecutions**
> [ExecutionDto] queryExecutions(opts)

Get Executions (POST)

Queries for executions that fulfill given parameters through a JSON object. This method is slightly more powerful than the [Get Executions](https://docs.camunda.org/manual/develop/reference/rest/execution/get-query/) method because it allows to filter by multiple instance and execution variables of types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let opts = { 
  'body': new CamundaRestApi.ExecutionQueryDto(), // ExecutionQueryDto | 
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.queryExecutions(opts, (error, data, response) => {
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
 **body** | [**ExecutionQueryDto**](ExecutionQueryDto.md)|  | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[ExecutionDto]**](ExecutionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryExecutionsCount"></a>
# **queryExecutionsCount**
> CountResultDto queryExecutionsCount(opts)

Get Execution Count (POST)

Queries for the number of executions that fulfill given parameters. This method takes the same message body as the [Get Executions POST](https://docs.camunda.org/manual/develop/reference/rest/execution/post-query/) method and therefore it is slightly more powerful than the [Get Execution Count](https://docs.camunda.org/manual/develop/reference/rest/execution/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let opts = { 
  'body': new CamundaRestApi.ExecutionQueryDto() // ExecutionQueryDto | 
};
apiInstance.queryExecutionsCount(opts, (error, data, response) => {
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
 **body** | [**ExecutionQueryDto**](ExecutionQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setLocalExecutionVariableBinary"></a>
# **setLocalExecutionVariableBinary**
> setLocalExecutionVariableBinary(id, varName, opts)

Post Local Execution Variable (Binary)

Sets the serialized value for a binary variable or the binary value for a file variable in the context of a given execution by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let id = "id_example"; // String | The id of the execution to set the variable for.
let varName = "varName_example"; // String | The name of the variable to set.
let opts = { 
  'data': "data_example", // Blob | 
  'valueType': "valueType_example" // String | 
};
apiInstance.setLocalExecutionVariableBinary(id, varName, opts, (error, data, response) => {
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
 **id** | **String**| The id of the execution to set the variable for. | 
 **varName** | **String**| The name of the variable to set. | 
 **data** | **Blob**|  | [optional] 
 **valueType** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="signalExecution"></a>
# **signalExecution**
> signalExecution(id, opts)

Trigger Execution

Signals an execution by id. Can for example be used to explicitly skip user tasks or signal asynchronous continuations.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let id = "id_example"; // String | The id of the execution to signal.
let opts = { 
  'body': new CamundaRestApi.ExecutionTriggerDto() // ExecutionTriggerDto | 
};
apiInstance.signalExecution(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the execution to signal. | 
 **body** | [**ExecutionTriggerDto**](ExecutionTriggerDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="triggerEvent"></a>
# **triggerEvent**
> triggerEvent(id, messageName, opts)

Trigger Message Event Subscription

Delivers a message to a specific execution by id, to trigger an existing message event subscription. Inject process variables as the message&#x27;s payload.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ExecutionApi();
let id = "id_example"; // String | The id of the execution to submit the message to.
let messageName = "messageName_example"; // String | The name of the message that the addressed subscription corresponds to.
let opts = { 
  'body': new CamundaRestApi.ExecutionTriggerDto() // ExecutionTriggerDto | 
};
apiInstance.triggerEvent(id, messageName, opts, (error, data, response) => {
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
 **id** | **String**| The id of the execution to submit the message to. | 
 **messageName** | **String**| The name of the message that the addressed subscription corresponds to. | 
 **body** | [**ExecutionTriggerDto**](ExecutionTriggerDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

