# CamundaRestApi.TaskLocalVariableApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTaskLocalVariable**](TaskLocalVariableApi.md#deleteTaskLocalVariable) | **DELETE** /task/{id}/localVariables/{varName} | Delete Local Task Variable
[**getTaskLocalVariable**](TaskLocalVariableApi.md#getTaskLocalVariable) | **GET** /task/{id}/localVariables/{varName} | Get Local Task Variable
[**getTaskLocalVariableBinary**](TaskLocalVariableApi.md#getTaskLocalVariableBinary) | **GET** /task/{id}/localVariables/{varName}/data | Get Local Task Variable (Binary)
[**getTaskLocalVariables**](TaskLocalVariableApi.md#getTaskLocalVariables) | **GET** /task/{id}/localVariables | Get Local Task Variables
[**modifyTaskLocalVariables**](TaskLocalVariableApi.md#modifyTaskLocalVariables) | **POST** /task/{id}/localVariables | Update/Delete Local Task Variables
[**putTaskLocalVariable**](TaskLocalVariableApi.md#putTaskLocalVariable) | **PUT** /task/{id}/localVariables/{varName} | Update Local Task Variable
[**setBinaryTaskLocalVariable**](TaskLocalVariableApi.md#setBinaryTaskLocalVariable) | **POST** /task/{id}/localVariables/{varName}/data | Update Local Task Variable (Binary)

<a name="deleteTaskLocalVariable"></a>
# **deleteTaskLocalVariable**
> deleteTaskLocalVariable(id, varName)

Delete Local Task Variable

Removes a local variable from a task by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskLocalVariableApi();
let id = "id_example"; // String | The id of the task to delete the variable from.
let varName = "varName_example"; // String | The name of the variable to be removed.

apiInstance.deleteTaskLocalVariable(id, varName, (error, data, response) => {
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
 **id** | **String**| The id of the task to delete the variable from. | 
 **varName** | **String**| The name of the variable to be removed. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTaskLocalVariable"></a>
# **getTaskLocalVariable**
> VariableValueDto getTaskLocalVariable(id, varName, opts)

Get Local Task Variable

Retrieves a variable from the context of a given task by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskLocalVariableApi();
let id = "id_example"; // String | The id of the task to retrieve the variable from.
let varName = "varName_example"; // String | The name of the variable to get
let opts = { 
  'deserializeValue': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getTaskLocalVariable(id, varName, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to retrieve the variable from. | 
 **varName** | **String**| The name of the variable to get | 
 **deserializeValue** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] [default to true]

### Return type

[**VariableValueDto**](VariableValueDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTaskLocalVariableBinary"></a>
# **getTaskLocalVariableBinary**
> &#x27;Blob&#x27; getTaskLocalVariableBinary(id, varName)

Get Local Task Variable (Binary)

Retrieves a binary variable from the context of a given task by id. Applicable for byte array and file variables.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskLocalVariableApi();
let id = "id_example"; // String | The id of the task to retrieve the variable for.
let varName = "varName_example"; // String | The name of the variable to retrieve.

apiInstance.getTaskLocalVariableBinary(id, varName, (error, data, response) => {
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
 **id** | **String**| The id of the task to retrieve the variable for. | 
 **varName** | **String**| The name of the variable to retrieve. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, text/plain, application/json

<a name="getTaskLocalVariables"></a>
# **getTaskLocalVariables**
> {&#x27;String&#x27;: VariableValueDto} getTaskLocalVariables(id, opts)

Get Local Task Variables

Retrieves all variables of a given task by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskLocalVariableApi();
let id = "id_example"; // String | The id of the task to retrieve the variables from.
let opts = { 
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getTaskLocalVariables(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to retrieve the variables from. | 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] [default to true]

### Return type

[**{&#x27;String&#x27;: VariableValueDto}**](VariableValueDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyTaskLocalVariables"></a>
# **modifyTaskLocalVariables**
> modifyTaskLocalVariables(id, opts)

Update/Delete Local Task Variables

Updates or deletes the variables in the context of a task. Updates precede deletions. So, if a variable is updated AND deleted, the deletion overrides the update.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskLocalVariableApi();
let id = "id_example"; // String | The id of the task to set variables for.
let opts = { 
  'body': new CamundaRestApi.PatchVariablesDto() // PatchVariablesDto | 
};
apiInstance.modifyTaskLocalVariables(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to set variables for. | 
 **body** | [**PatchVariablesDto**](PatchVariablesDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putTaskLocalVariable"></a>
# **putTaskLocalVariable**
> putTaskLocalVariable(id, varName, opts)

Update Local Task Variable

Sets a variable in the context of a given task.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskLocalVariableApi();
let id = "id_example"; // String | The id of the task to set the variable for.
let varName = "varName_example"; // String | The name of the variable to set.
let opts = { 
  'body': new CamundaRestApi.VariableValueDto() // VariableValueDto | 
};
apiInstance.putTaskLocalVariable(id, varName, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to set the variable for. | 
 **varName** | **String**| The name of the variable to set. | 
 **body** | [**VariableValueDto**](VariableValueDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setBinaryTaskLocalVariable"></a>
# **setBinaryTaskLocalVariable**
> setBinaryTaskLocalVariable(id, varName, opts)

Update Local Task Variable (Binary)

Sets the serialized value for a binary variable or the binary value for a file variable.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskLocalVariableApi();
let id = "id_example"; // String | The id of the task to retrieve the variable for.
let varName = "varName_example"; // String | The name of the variable to retrieve.
let opts = { 
  'data': "data_example", // Blob | 
  'valueType': "valueType_example" // String | 
};
apiInstance.setBinaryTaskLocalVariable(id, varName, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to retrieve the variable for. | 
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

