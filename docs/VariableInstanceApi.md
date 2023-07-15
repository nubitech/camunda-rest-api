# CamundaRestApi.VariableInstanceApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVariableInstance**](VariableInstanceApi.md#getVariableInstance) | **GET** /variable-instance/{id} | Get Variable Instance
[**getVariableInstanceBinary**](VariableInstanceApi.md#getVariableInstanceBinary) | **GET** /variable-instance/{id}/data | Get Variable Instance (Binary)
[**getVariableInstances**](VariableInstanceApi.md#getVariableInstances) | **GET** /variable-instance | Get Variable Instances
[**getVariableInstancesCount**](VariableInstanceApi.md#getVariableInstancesCount) | **GET** /variable-instance/count | Get Variable Instance Count
[**queryVariableInstances**](VariableInstanceApi.md#queryVariableInstances) | **POST** /variable-instance | Get Variable Instances (POST)
[**queryVariableInstancesCount**](VariableInstanceApi.md#queryVariableInstancesCount) | **POST** /variable-instance/count | Get Variable Instance Count (POST)

<a name="getVariableInstance"></a>
# **getVariableInstance**
> VariableInstanceDto getVariableInstance(id, opts)

Get Variable Instance

Retrieves a variable by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.VariableInstanceApi();
let id = "id_example"; // String | The id of the variable instance.
let opts = { 
  'deserializeValue': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:**  While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getVariableInstance(id, opts, (error, data, response) => {
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
 **deserializeValue** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:**  While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] 

### Return type

[**VariableInstanceDto**](VariableInstanceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVariableInstanceBinary"></a>
# **getVariableInstanceBinary**
> &#x27;Blob&#x27; getVariableInstanceBinary(id)

Get Variable Instance (Binary)

Retrieves the content of a variable by id. Applicable for byte array and file variables.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.VariableInstanceApi();
let id = "id_example"; // String | The id of the variable instance.

apiInstance.getVariableInstanceBinary(id, (error, data, response) => {
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

<a name="getVariableInstances"></a>
# **getVariableInstances**
> [VariableInstanceDto] getVariableInstances(opts)

Get Variable Instances

Query for variable instances that fulfill given parameters. Parameters may be the properties of variable instances, such as the name or type. The size of the result set can be retrieved by using the [Get Variable Instance Count](https://docs.camunda.org/manual/develop/reference/rest/variable-instance/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.VariableInstanceApi();
let opts = { 
  'variableName': "variableName_example", // String | Filter by variable instance name.
  'variableNameLike': "variableNameLike_example", // String | Filter by the variable instance name. The parameter can include the wildcard `%` to express like-strategy such as: starts with (`%`name), ends with (name`%`) or contains (`%`name`%`).
  'processInstanceIdIn': "processInstanceIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated process instance ids.
  'executionIdIn': "executionIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated execution ids.
  'caseInstanceIdIn': "caseInstanceIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated case instance ids.
  'caseExecutionIdIn': "caseExecutionIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated case execution ids.
  'taskIdIn': "taskIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated task ids.
  'batchIdIn': "batchIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated batch ids.
  'activityInstanceIdIn': "activityInstanceIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated activity instance ids.
  'tenantIdIn': "tenantIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated tenant ids.
  'variableValues': "variableValues_example", // String | Only include variable instances that have the certain values. Value filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note:** Values are always treated as `String` objects on server side.  Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
  'variableNamesIgnoreCase': true, // Boolean | Match all variable names provided in `variableValues` case-insensitively. If set to `true` **variableName** and **variablename** are treated as equal.
  'variableValuesIgnoreCase': true, // Boolean | Match all variable values provided in `variableValues` case-insensitively. If set to `true` **variableValue** and **variablevalue** are treated as equal.
  'variableScopeIdIn': "variableScopeIdIn_example", // String | Only include variable instances which belong to one of passed scope ids.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getVariableInstances(opts, (error, data, response) => {
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
 **variableName** | **String**| Filter by variable instance name. | [optional] 
 **variableNameLike** | **String**| Filter by the variable instance name. The parameter can include the wildcard &#x60;%&#x60; to express like-strategy such as: starts with (&#x60;%&#x60;name), ends with (name&#x60;%&#x60;) or contains (&#x60;%&#x60;name&#x60;%&#x60;). | [optional] 
 **processInstanceIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated process instance ids. | [optional] 
 **executionIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated execution ids. | [optional] 
 **caseInstanceIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated case instance ids. | [optional] 
 **caseExecutionIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated case execution ids. | [optional] 
 **taskIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated task ids. | [optional] 
 **batchIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated batch ids. | [optional] 
 **activityInstanceIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated activity instance ids. | [optional] 
 **tenantIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated tenant ids. | [optional] 
 **variableValues** | **String**| Only include variable instances that have the certain values. Value filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note:** Values are always treated as &#x60;String&#x60; objects on server side.  Valid operator values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match all variable names provided in &#x60;variableValues&#x60; case-insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal. | [optional] 
 **variableValuesIgnoreCase** | **Boolean**| Match all variable values provided in &#x60;variableValues&#x60; case-insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal. | [optional] 
 **variableScopeIdIn** | **String**| Only include variable instances which belong to one of passed scope ids. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] 

### Return type

[**[VariableInstanceDto]**](VariableInstanceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVariableInstancesCount"></a>
# **getVariableInstancesCount**
> CountResultDto getVariableInstancesCount(opts)

Get Variable Instance Count

Query for the number of variable instances that fulfill given parameters. Takes the same parameters as the [Get Variable Instances](https://docs.camunda.org/manual/develop/reference/rest/variable-instance/get-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.VariableInstanceApi();
let opts = { 
  'variableName': "variableName_example", // String | Filter by variable instance name.
  'variableNameLike': "variableNameLike_example", // String | Filter by the variable instance name. The parameter can include the wildcard `%` to express like-strategy such as: starts with (`%`name), ends with (name`%`) or contains (`%`name`%`).
  'processInstanceIdIn': "processInstanceIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated process instance ids.
  'executionIdIn': "executionIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated execution ids.
  'caseInstanceIdIn': "caseInstanceIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated case instance ids.
  'caseExecutionIdIn': "caseExecutionIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated case execution ids.
  'taskIdIn': "taskIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated task ids.
  'batchIdIn': "batchIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated batch ids.
  'activityInstanceIdIn': "activityInstanceIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated activity instance ids.
  'tenantIdIn': "tenantIdIn_example", // String | Only include variable instances which belong to one of the passed and comma-separated tenant ids.
  'variableValues': "variableValues_example", // String | Only include variable instances that have the certain values. Value filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note:** Values are always treated as `String` objects on server side.  Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
  'variableNamesIgnoreCase': true, // Boolean | Match all variable names provided in `variableValues` case-insensitively. If set to `true` **variableName** and **variablename** are treated as equal.
  'variableValuesIgnoreCase': true, // Boolean | Match all variable values provided in `variableValues` case-insensitively. If set to `true` **variableValue** and **variablevalue** are treated as equal.
  'variableScopeIdIn': "variableScopeIdIn_example", // String | Only include variable instances which belong to one of passed scope ids.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example" // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
};
apiInstance.getVariableInstancesCount(opts, (error, data, response) => {
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
 **variableName** | **String**| Filter by variable instance name. | [optional] 
 **variableNameLike** | **String**| Filter by the variable instance name. The parameter can include the wildcard &#x60;%&#x60; to express like-strategy such as: starts with (&#x60;%&#x60;name), ends with (name&#x60;%&#x60;) or contains (&#x60;%&#x60;name&#x60;%&#x60;). | [optional] 
 **processInstanceIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated process instance ids. | [optional] 
 **executionIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated execution ids. | [optional] 
 **caseInstanceIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated case instance ids. | [optional] 
 **caseExecutionIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated case execution ids. | [optional] 
 **taskIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated task ids. | [optional] 
 **batchIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated batch ids. | [optional] 
 **activityInstanceIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated activity instance ids. | [optional] 
 **tenantIdIn** | **String**| Only include variable instances which belong to one of the passed and comma-separated tenant ids. | [optional] 
 **variableValues** | **String**| Only include variable instances that have the certain values. Value filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note:** Values are always treated as &#x60;String&#x60; objects on server side.  Valid operator values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match all variable names provided in &#x60;variableValues&#x60; case-insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal. | [optional] 
 **variableValuesIgnoreCase** | **Boolean**| Match all variable values provided in &#x60;variableValues&#x60; case-insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal. | [optional] 
 **variableScopeIdIn** | **String**| Only include variable instances which belong to one of passed scope ids. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queryVariableInstances"></a>
# **queryVariableInstances**
> [VariableInstanceDto] queryVariableInstances(opts)

Get Variable Instances (POST)

Query for variable instances that fulfill given parameters through a JSON object. This method is slightly more powerful than the [Get Variable Instances](https://docs.camunda.org/manual/develop/reference/rest/variable- instance/get-query/) method because it allows filtering by multiple variable instances of types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.VariableInstanceApi();
let opts = { 
  'body': new CamundaRestApi.VariableInstanceQueryDto(), // VariableInstanceQueryDto | 
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.queryVariableInstances(opts, (error, data, response) => {
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
 **body** | [**VariableInstanceQueryDto**](VariableInstanceQueryDto.md)|  | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] 

### Return type

[**[VariableInstanceDto]**](VariableInstanceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryVariableInstancesCount"></a>
# **queryVariableInstancesCount**
> CountResultDto queryVariableInstancesCount(opts)

Get Variable Instance Count (POST)

Query for the number of variable instances that fulfill given parameters. This method takes the same message body as the [Get Variable Instances POST](https://docs.camunda.org/manual/develop/reference/rest/variable- instance/post-query/) method and therefore it is slightly more powerful than the [Get Variable Instance Count](https://docs.camunda.org/manual/develop/reference/rest/variable-instance/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.VariableInstanceApi();
let opts = { 
  'body': new CamundaRestApi.VariableInstanceQueryDto() // VariableInstanceQueryDto | 
};
apiInstance.queryVariableInstancesCount(opts, (error, data, response) => {
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
 **body** | [**VariableInstanceQueryDto**](VariableInstanceQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

