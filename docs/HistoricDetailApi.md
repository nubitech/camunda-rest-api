# CamundaRestApi.HistoricDetailApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricDetails**](HistoricDetailApi.md#getHistoricDetails) | **GET** /history/detail | Get Historic Details
[**getHistoricDetailsCount**](HistoricDetailApi.md#getHistoricDetailsCount) | **GET** /history/detail/count | Get Historic Detail Count
[**historicDetail**](HistoricDetailApi.md#historicDetail) | **GET** /history/detail/{id} | Get Historic Detail
[**historicDetailBinary**](HistoricDetailApi.md#historicDetailBinary) | **GET** /history/detail/{id}/data | Get Historic Detail (Binary)
[**queryHistoricDetails**](HistoricDetailApi.md#queryHistoricDetails) | **POST** /history/detail | Get Historic Details (POST)

<a name="getHistoricDetails"></a>
# **getHistoricDetails**
> [HistoricDetailDto] getHistoricDetails(opts)

Get Historic Details

Queries for historic details that fulfill the given parameters. The size of the result set can be retrieved by using the [Get Historic Detail Count](https://docs.camunda.org/manual/develop/reference/rest/history/detail/get-detail-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricDetailApi();
let opts = { 
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'processInstanceIdIn': "processInstanceIdIn_example", // String | Only include historic details which belong to one of the passed comma-separated process instance ids.
  'executionId': "executionId_example", // String | Filter by execution id.
  'taskId': "taskId_example", // String | Filter by task id.
  'activityInstanceId': "activityInstanceId_example", // String | Filter by activity instance id.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by case instance id.
  'caseExecutionId': "caseExecutionId_example", // String | Filter by case execution id.
  'variableInstanceId': "variableInstanceId_example", // String | Filter by variable instance id.
  'variableTypeIn': "variableTypeIn_example", // String | Only include historic details where the variable updates belong to one of the passed comma-separated list of variable types. A list of all supported variable types can be found [here](https://docs.camunda.org/manual/develop/user-guide/process-engine/variables/#supported-variable-values). **Note:** All non-primitive variables are associated with the type `serializable`.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic details that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'userOperationId': "userOperationId_example", // String | Filter by a user operation id.
  'formFields': true, // Boolean | Only include `HistoricFormFields`. Value may only be `true`, as `false` is the default behavior.
  'variableUpdates': true, // Boolean | Only include `HistoricVariableUpdates`. Value may only be `true`, as `false` is the default behavior.
  'excludeTaskDetails': true, // Boolean | Excludes all task-related `HistoricDetails`, so only items which have no task id set will be selected. When this parameter is used together with `taskId`, this call is ignored and task details are not excluded. Value may only be `true`, as `false` is the default behavior.
  'initial': true, // Boolean | Restrict to historic variable updates that contain only initial variable values. Value may only be `true`, as `false` is the default behavior.
  'occurredBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to historic details that occured before the given date (including the date). Default [format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
  'occurredAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to historic details that occured after the given date (including the date). Default [format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getHistoricDetails(opts, (error, data, response) => {
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
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **processInstanceIdIn** | **String**| Only include historic details which belong to one of the passed comma-separated process instance ids. | [optional] 
 **executionId** | **String**| Filter by execution id. | [optional] 
 **taskId** | **String**| Filter by task id. | [optional] 
 **activityInstanceId** | **String**| Filter by activity instance id. | [optional] 
 **caseInstanceId** | **String**| Filter by case instance id. | [optional] 
 **caseExecutionId** | **String**| Filter by case execution id. | [optional] 
 **variableInstanceId** | **String**| Filter by variable instance id. | [optional] 
 **variableTypeIn** | **String**| Only include historic details where the variable updates belong to one of the passed comma-separated list of variable types. A list of all supported variable types can be found [here](https://docs.camunda.org/manual/develop/user-guide/process-engine/variables/#supported-variable-values). **Note:** All non-primitive variables are associated with the type &#x60;serializable&#x60;. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic details that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **userOperationId** | **String**| Filter by a user operation id. | [optional] 
 **formFields** | **Boolean**| Only include &#x60;HistoricFormFields&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **variableUpdates** | **Boolean**| Only include &#x60;HistoricVariableUpdates&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **excludeTaskDetails** | **Boolean**| Excludes all task-related &#x60;HistoricDetails&#x60;, so only items which have no task id set will be selected. When this parameter is used together with &#x60;taskId&#x60;, this call is ignored and task details are not excluded. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **initial** | **Boolean**| Restrict to historic variable updates that contain only initial variable values. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **occurredBefore** | **Date**| Restrict to historic details that occured before the given date (including the date). Default [format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **occurredAfter** | **Date**| Restrict to historic details that occured after the given date (including the date). Default [format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] 

### Return type

[**[HistoricDetailDto]**](HistoricDetailDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricDetailsCount"></a>
# **getHistoricDetailsCount**
> CountResultDto getHistoricDetailsCount(opts)

Get Historic Detail Count

Queries for the number of historic details that fulfill the given parameters. Takes the same parameters as the [Get Historic Details](https://docs.camunda.org/manual/develop/reference/rest/history/detail/get-detail-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricDetailApi();
let opts = { 
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'processInstanceIdIn': "processInstanceIdIn_example", // String | Only include historic details which belong to one of the passed comma-separated process instance ids.
  'executionId': "executionId_example", // String | Filter by execution id.
  'taskId': "taskId_example", // String | Filter by task id.
  'activityInstanceId': "activityInstanceId_example", // String | Filter by activity instance id.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by case instance id.
  'caseExecutionId': "caseExecutionId_example", // String | Filter by case execution id.
  'variableInstanceId': "variableInstanceId_example", // String | Filter by variable instance id.
  'variableTypeIn': "variableTypeIn_example", // String | Only include historic details where the variable updates belong to one of the passed comma-separated list of variable types. A list of all supported variable types can be found [here](https://docs.camunda.org/manual/develop/user-guide/process-engine/variables/#supported-variable-values). **Note:** All non-primitive variables are associated with the type `serializable`.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic details that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'userOperationId': "userOperationId_example", // String | Filter by a user operation id.
  'formFields': true, // Boolean | Only include `HistoricFormFields`. Value may only be `true`, as `false` is the default behavior.
  'variableUpdates': true, // Boolean | Only include `HistoricVariableUpdates`. Value may only be `true`, as `false` is the default behavior.
  'excludeTaskDetails': true, // Boolean | Excludes all task-related `HistoricDetails`, so only items which have no task id set will be selected. When this parameter is used together with `taskId`, this call is ignored and task details are not excluded. Value may only be `true`, as `false` is the default behavior.
  'initial': true, // Boolean | Restrict to historic variable updates that contain only initial variable values. Value may only be `true`, as `false` is the default behavior.
  'occurredBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to historic details that occured before the given date (including the date). Default [format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
  'occurredAfter': new Date("2013-10-20T19:20:30+01:00") // Date | Restrict to historic details that occured after the given date (including the date). Default [format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
};
apiInstance.getHistoricDetailsCount(opts, (error, data, response) => {
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
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **processInstanceIdIn** | **String**| Only include historic details which belong to one of the passed comma-separated process instance ids. | [optional] 
 **executionId** | **String**| Filter by execution id. | [optional] 
 **taskId** | **String**| Filter by task id. | [optional] 
 **activityInstanceId** | **String**| Filter by activity instance id. | [optional] 
 **caseInstanceId** | **String**| Filter by case instance id. | [optional] 
 **caseExecutionId** | **String**| Filter by case execution id. | [optional] 
 **variableInstanceId** | **String**| Filter by variable instance id. | [optional] 
 **variableTypeIn** | **String**| Only include historic details where the variable updates belong to one of the passed comma-separated list of variable types. A list of all supported variable types can be found [here](https://docs.camunda.org/manual/develop/user-guide/process-engine/variables/#supported-variable-values). **Note:** All non-primitive variables are associated with the type &#x60;serializable&#x60;. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic details that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **userOperationId** | **String**| Filter by a user operation id. | [optional] 
 **formFields** | **Boolean**| Only include &#x60;HistoricFormFields&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **variableUpdates** | **Boolean**| Only include &#x60;HistoricVariableUpdates&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **excludeTaskDetails** | **Boolean**| Excludes all task-related &#x60;HistoricDetails&#x60;, so only items which have no task id set will be selected. When this parameter is used together with &#x60;taskId&#x60;, this call is ignored and task details are not excluded. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **initial** | **Boolean**| Restrict to historic variable updates that contain only initial variable values. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **occurredBefore** | **Date**| Restrict to historic details that occured before the given date (including the date). Default [format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **occurredAfter** | **Date**| Restrict to historic details that occured after the given date (including the date). Default [format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="historicDetail"></a>
# **historicDetail**
> HistoricDetailDto historicDetail(id, opts)

Get Historic Detail

Retrieves a historic detail by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricDetailApi();
let id = "id_example"; // String | The id of the detail.
let opts = { 
  'deserializeValue': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.historicDetail(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the detail. | 
 **deserializeValue** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] 

### Return type

[**HistoricDetailDto**](HistoricDetailDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="historicDetailBinary"></a>
# **historicDetailBinary**
> &#x27;Blob&#x27; historicDetailBinary(id)

Get Historic Detail (Binary)

Retrieves the content of a historic variable update by id. Applicable for byte array and file variables.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricDetailApi();
let id = "id_example"; // String | The id of the historic variable update.

apiInstance.historicDetailBinary(id, (error, data, response) => {
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
 **id** | **String**| The id of the historic variable update. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, */*, application/json

<a name="queryHistoricDetails"></a>
# **queryHistoricDetails**
> [HistoricDetailDto] queryHistoricDetails(opts)

Get Historic Details (POST)

Queries for historic details that fulfill the given parameters. This method is slightly more powerful than the [Get Historic Details](https://docs.camunda.org/manual/develop/reference/rest/history/detail/get-detail-query/) method because it allows sorting by multiple parameters. The size of the result set can be retrieved by using the [Get Historic Detail Count](https://docs.camunda.org/manual/develop/reference/rest/history/detail/get-detail-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricDetailApi();
let opts = { 
  'body': new CamundaRestApi.HistoricDetailQueryDto(), // HistoricDetailQueryDto | 
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.queryHistoricDetails(opts, (error, data, response) => {
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
 **body** | [**HistoricDetailQueryDto**](HistoricDetailQueryDto.md)|  | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] 

### Return type

[**[HistoricDetailDto]**](HistoricDetailDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

