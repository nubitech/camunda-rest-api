# CamundaRestApi.HistoricVariableInstanceApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteHistoricVariableInstance**](HistoricVariableInstanceApi.md#deleteHistoricVariableInstance) | **DELETE** /history/variable-instance/{id} | Delete Variable Instance
[**getHistoricVariableInstance**](HistoricVariableInstanceApi.md#getHistoricVariableInstance) | **GET** /history/variable-instance/{id} | Get Variable Instance
[**getHistoricVariableInstanceBinary**](HistoricVariableInstanceApi.md#getHistoricVariableInstanceBinary) | **GET** /history/variable-instance/{id}/data | Get Variable Instance (Binary)
[**getHistoricVariableInstances**](HistoricVariableInstanceApi.md#getHistoricVariableInstances) | **GET** /history/variable-instance | Get Variable Instances
[**getHistoricVariableInstancesCount**](HistoricVariableInstanceApi.md#getHistoricVariableInstancesCount) | **GET** /history/variable-instance/count | Get Variable Instance Count
[**queryHistoricVariableInstances**](HistoricVariableInstanceApi.md#queryHistoricVariableInstances) | **POST** /history/variable-instance | Get Variable Instances (POST)
[**queryHistoricVariableInstancesCount**](HistoricVariableInstanceApi.md#queryHistoricVariableInstancesCount) | **POST** /history/variable-instance/count | Get Variable Instance Count (POST)

<a name="deleteHistoricVariableInstance"></a>
# **deleteHistoricVariableInstance**
> deleteHistoricVariableInstance(id)

Delete Variable Instance

Deletes a historic variable instance by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricVariableInstanceApi();
let id = "id_example"; // String | The id of the variable instance.

apiInstance.deleteHistoricVariableInstance(id, (error, data, response) => {
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
 **id** | **String**| The id of the variable instance. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricVariableInstance"></a>
# **getHistoricVariableInstance**
> HistoricVariableInstanceDto getHistoricVariableInstance(id, opts)

Get Variable Instance

Retrieves a historic variable by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricVariableInstanceApi();
let id = "id_example"; // String | The id of the variable instance.
let opts = { 
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getHistoricVariableInstance(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the variable instance. | 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] 

### Return type

[**HistoricVariableInstanceDto**](HistoricVariableInstanceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricVariableInstanceBinary"></a>
# **getHistoricVariableInstanceBinary**
> &#x27;Blob&#x27; getHistoricVariableInstanceBinary(id)

Get Variable Instance (Binary)

Retrieves the content of a historic variable by id. Applicable for variables that are serialized as binary data.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricVariableInstanceApi();
let id = "id_example"; // String | The id of the variable instance.

apiInstance.getHistoricVariableInstanceBinary(id, (error, data, response) => {
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
 **id** | **String**| The id of the variable instance. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, */*, application/json

<a name="getHistoricVariableInstances"></a>
# **getHistoricVariableInstances**
> [HistoricVariableInstanceDto] getHistoricVariableInstances(opts)

Get Variable Instances

Queries for historic variable instances that fulfill the given parameters. The size of the result set can be retrieved by using the [Get Variable Instance Count](https://docs.camunda.org/manual/develop/reference/rest/history/variable-instance/get-variable-instance-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricVariableInstanceApi();
let opts = { 
  'variableName': "variableName_example", // String | Filter by variable name.
  'variableNameLike': "variableNameLike_example", // String | Restrict to variables with a name like the parameter.
  'variableValue': null, // Object | Filter by variable value. Is treated as a `String` object on server side.
  'variableNamesIgnoreCase': true, // Boolean | Match the variable name provided in `variableName` and `variableNameLike` case- insensitively. If set to `true` **variableName** and **variablename** are treated as equal.
  'variableValuesIgnoreCase': true, // Boolean | Match the variable value provided in `variableValue` case-insensitively. If set to `true` **variableValue** and **variablevalue** are treated as equal.
  'variableTypeIn': "variableTypeIn_example", // String | Only include historic variable instances which belong to one of the passed and comma- separated variable types. A list of all supported variable types can be found [here](https://docs.camunda.org/manual/develop/user-guide/process-engine/variables/#supported-variable-values). **Note:** All non-primitive variables are associated with the type 'serializable'.
  'includeDeleted': true, // Boolean | Include variables that has already been deleted during the execution.
  'processInstanceId': "processInstanceId_example", // String | Filter by the process instance the variable belongs to.
  'processInstanceIdIn': "processInstanceIdIn_example", // String | Only include historic variable instances which belong to one of the passed and comma-separated process instance ids.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the process definition the variable belongs to.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by a key of the process definition the variable belongs to.
  'executionIdIn': "executionIdIn_example", // String | Only include historic variable instances which belong to one of the passed and and comma-separated execution ids.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by the case instance the variable belongs to.
  'caseExecutionIdIn': "caseExecutionIdIn_example", // String | Only include historic variable instances which belong to one of the passed and and comma-separated case execution ids.
  'caseActivityIdIn': "caseActivityIdIn_example", // String | Only include historic variable instances which belong to one of the passed and and comma-separated case activity ids.
  'taskIdIn': "taskIdIn_example", // String | Only include historic variable instances which belong to one of the passed and and comma-separated task ids.
  'activityInstanceIdIn': "activityInstanceIdIn_example", // String | Only include historic variable instances which belong to one of the passed and and comma-separated activity instance ids.
  'tenantIdIn': "tenantIdIn_example", // String | Only include historic variable instances which belong to one of the passed and comma- separated tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic variable instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'variableNameIn': "variableNameIn_example", // String | Only include historic variable instances which belong to one of the passed and comma-separated variable names.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getHistoricVariableInstances(opts, (error, data, response) => {
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
 **variableName** | **String**| Filter by variable name. | [optional] 
 **variableNameLike** | **String**| Restrict to variables with a name like the parameter. | [optional] 
 **variableValue** | [**Object**](.md)| Filter by variable value. Is treated as a &#x60;String&#x60; object on server side. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match the variable name provided in &#x60;variableName&#x60; and &#x60;variableNameLike&#x60; case- insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal. | [optional] 
 **variableValuesIgnoreCase** | **Boolean**| Match the variable value provided in &#x60;variableValue&#x60; case-insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal. | [optional] 
 **variableTypeIn** | **String**| Only include historic variable instances which belong to one of the passed and comma- separated variable types. A list of all supported variable types can be found [here](https://docs.camunda.org/manual/develop/user-guide/process-engine/variables/#supported-variable-values). **Note:** All non-primitive variables are associated with the type &#x27;serializable&#x27;. | [optional] 
 **includeDeleted** | **Boolean**| Include variables that has already been deleted during the execution. | [optional] 
 **processInstanceId** | **String**| Filter by the process instance the variable belongs to. | [optional] 
 **processInstanceIdIn** | **String**| Only include historic variable instances which belong to one of the passed and comma-separated process instance ids. | [optional] 
 **processDefinitionId** | **String**| Filter by the process definition the variable belongs to. | [optional] 
 **processDefinitionKey** | **String**| Filter by a key of the process definition the variable belongs to. | [optional] 
 **executionIdIn** | **String**| Only include historic variable instances which belong to one of the passed and and comma-separated execution ids. | [optional] 
 **caseInstanceId** | **String**| Filter by the case instance the variable belongs to. | [optional] 
 **caseExecutionIdIn** | **String**| Only include historic variable instances which belong to one of the passed and and comma-separated case execution ids. | [optional] 
 **caseActivityIdIn** | **String**| Only include historic variable instances which belong to one of the passed and and comma-separated case activity ids. | [optional] 
 **taskIdIn** | **String**| Only include historic variable instances which belong to one of the passed and and comma-separated task ids. | [optional] 
 **activityInstanceIdIn** | **String**| Only include historic variable instances which belong to one of the passed and and comma-separated activity instance ids. | [optional] 
 **tenantIdIn** | **String**| Only include historic variable instances which belong to one of the passed and comma- separated tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic variable instances that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **variableNameIn** | **String**| Only include historic variable instances which belong to one of the passed and comma-separated variable names. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] 

### Return type

[**[HistoricVariableInstanceDto]**](HistoricVariableInstanceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricVariableInstancesCount"></a>
# **getHistoricVariableInstancesCount**
> CountResultDto getHistoricVariableInstancesCount(opts)

Get Variable Instance Count

Queries for the number of historic variable instances that fulfill the given parameters. Takes the same parameters as the [Get Variable Instances](https://docs.camunda.org/manual/develop/reference/rest/history/variable-instance/get-variable-instance-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricVariableInstanceApi();
let opts = { 
  'variableName': "variableName_example", // String | Filter by variable name.
  'variableNameLike': "variableNameLike_example", // String | Restrict to variables with a name like the parameter.
  'variableValue': null, // Object | Filter by variable value. Is treated as a `String` object on server side.
  'variableNamesIgnoreCase': true, // Boolean | Match the variable name provided in `variableName` and `variableNameLike` case- insensitively. If set to `true` **variableName** and **variablename** are treated as equal.
  'variableValuesIgnoreCase': true, // Boolean | Match the variable value provided in `variableValue` case-insensitively. If set to `true` **variableValue** and **variablevalue** are treated as equal.
  'variableTypeIn': "variableTypeIn_example", // String | Only include historic variable instances which belong to one of the passed and comma- separated variable types. A list of all supported variable types can be found [here](https://docs.camunda.org/manual/develop/user-guide/process-engine/variables/#supported-variable-values). **Note:** All non-primitive variables are associated with the type 'serializable'.
  'includeDeleted': true, // Boolean | Include variables that has already been deleted during the execution.
  'processInstanceId': "processInstanceId_example", // String | Filter by the process instance the variable belongs to.
  'processInstanceIdIn': "processInstanceIdIn_example", // String | Only include historic variable instances which belong to one of the passed and comma-separated process instance ids.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the process definition the variable belongs to.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by a key of the process definition the variable belongs to.
  'executionIdIn': "executionIdIn_example", // String | Only include historic variable instances which belong to one of the passed and and comma-separated execution ids.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by the case instance the variable belongs to.
  'caseExecutionIdIn': "caseExecutionIdIn_example", // String | Only include historic variable instances which belong to one of the passed and and comma-separated case execution ids.
  'caseActivityIdIn': "caseActivityIdIn_example", // String | Only include historic variable instances which belong to one of the passed and and comma-separated case activity ids.
  'taskIdIn': "taskIdIn_example", // String | Only include historic variable instances which belong to one of the passed and and comma-separated task ids.
  'activityInstanceIdIn': "activityInstanceIdIn_example", // String | Only include historic variable instances which belong to one of the passed and and comma-separated activity instance ids.
  'tenantIdIn': "tenantIdIn_example", // String | Only include historic variable instances which belong to one of the passed and comma- separated tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic variable instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'variableNameIn': "variableNameIn_example" // String | Only include historic variable instances which belong to one of the passed and comma-separated variable names.
};
apiInstance.getHistoricVariableInstancesCount(opts, (error, data, response) => {
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
 **variableName** | **String**| Filter by variable name. | [optional] 
 **variableNameLike** | **String**| Restrict to variables with a name like the parameter. | [optional] 
 **variableValue** | [**Object**](.md)| Filter by variable value. Is treated as a &#x60;String&#x60; object on server side. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match the variable name provided in &#x60;variableName&#x60; and &#x60;variableNameLike&#x60; case- insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal. | [optional] 
 **variableValuesIgnoreCase** | **Boolean**| Match the variable value provided in &#x60;variableValue&#x60; case-insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal. | [optional] 
 **variableTypeIn** | **String**| Only include historic variable instances which belong to one of the passed and comma- separated variable types. A list of all supported variable types can be found [here](https://docs.camunda.org/manual/develop/user-guide/process-engine/variables/#supported-variable-values). **Note:** All non-primitive variables are associated with the type &#x27;serializable&#x27;. | [optional] 
 **includeDeleted** | **Boolean**| Include variables that has already been deleted during the execution. | [optional] 
 **processInstanceId** | **String**| Filter by the process instance the variable belongs to. | [optional] 
 **processInstanceIdIn** | **String**| Only include historic variable instances which belong to one of the passed and comma-separated process instance ids. | [optional] 
 **processDefinitionId** | **String**| Filter by the process definition the variable belongs to. | [optional] 
 **processDefinitionKey** | **String**| Filter by a key of the process definition the variable belongs to. | [optional] 
 **executionIdIn** | **String**| Only include historic variable instances which belong to one of the passed and and comma-separated execution ids. | [optional] 
 **caseInstanceId** | **String**| Filter by the case instance the variable belongs to. | [optional] 
 **caseExecutionIdIn** | **String**| Only include historic variable instances which belong to one of the passed and and comma-separated case execution ids. | [optional] 
 **caseActivityIdIn** | **String**| Only include historic variable instances which belong to one of the passed and and comma-separated case activity ids. | [optional] 
 **taskIdIn** | **String**| Only include historic variable instances which belong to one of the passed and and comma-separated task ids. | [optional] 
 **activityInstanceIdIn** | **String**| Only include historic variable instances which belong to one of the passed and and comma-separated activity instance ids. | [optional] 
 **tenantIdIn** | **String**| Only include historic variable instances which belong to one of the passed and comma- separated tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic variable instances that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **variableNameIn** | **String**| Only include historic variable instances which belong to one of the passed and comma-separated variable names. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queryHistoricVariableInstances"></a>
# **queryHistoricVariableInstances**
> [HistoricVariableInstanceDto] queryHistoricVariableInstances(opts)

Get Variable Instances (POST)

Queries for historic variable instances that fulfill the given parameters. This method is slightly more powerful than the [Get Variable Instances](https://docs.camunda.org/manual/develop/reference/rest/history/variable-instance/get-variable-instance-query/) method because it allows filtering by variable values of the different types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricVariableInstanceApi();
let opts = { 
  'body': new CamundaRestApi.HistoricVariableInstanceQueryDto(), // HistoricVariableInstanceQueryDto | 
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.queryHistoricVariableInstances(opts, (error, data, response) => {
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
 **body** | [**HistoricVariableInstanceQueryDto**](HistoricVariableInstanceQueryDto.md)|  | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] 

### Return type

[**[HistoricVariableInstanceDto]**](HistoricVariableInstanceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryHistoricVariableInstancesCount"></a>
# **queryHistoricVariableInstancesCount**
> CountResultDto queryHistoricVariableInstancesCount(opts)

Get Variable Instance Count (POST)

Queries for historic variable instances that fulfill the given parameters. This method takes the same message body as the [Get Variable Instances (POST)](https://docs.camunda.org/manual/develop/reference/rest/history/variable-instance/post-variable-instance-query/) method and therefore it is more powerful regarding variable values than the [Get Variable Instance Count](https://docs.camunda.org/manual/develop/reference/rest/history/variable-instance/get-variable-instance-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricVariableInstanceApi();
let opts = { 
  'body': new CamundaRestApi.HistoricVariableInstanceQueryDto() // HistoricVariableInstanceQueryDto | 
};
apiInstance.queryHistoricVariableInstancesCount(opts, (error, data, response) => {
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
 **body** | [**HistoricVariableInstanceQueryDto**](HistoricVariableInstanceQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

