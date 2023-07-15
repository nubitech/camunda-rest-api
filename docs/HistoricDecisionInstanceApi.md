# CamundaRestApi.HistoricDecisionInstanceApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAsync**](HistoricDecisionInstanceApi.md#deleteAsync) | **POST** /history/decision-instance/delete | Delete Async (POST)
[**getHistoricDecisionInstance**](HistoricDecisionInstanceApi.md#getHistoricDecisionInstance) | **GET** /history/decision-instance/{id} | Get Historic Decision Instance
[**getHistoricDecisionInstances**](HistoricDecisionInstanceApi.md#getHistoricDecisionInstances) | **GET** /history/decision-instance | Get Historic Decision Instances
[**getHistoricDecisionInstancesCount**](HistoricDecisionInstanceApi.md#getHistoricDecisionInstancesCount) | **GET** /history/decision-instance/count | Get Historic Decision Instance Count
[**setRemovalTimeAsyncHistoricDecisionInstance**](HistoricDecisionInstanceApi.md#setRemovalTimeAsyncHistoricDecisionInstance) | **POST** /history/decision-instance/set-removal-time | Set Removal Time Async (POST)

<a name="deleteAsync"></a>
# **deleteAsync**
> BatchDto deleteAsync(opts)

Delete Async (POST)

Delete multiple historic decision instances asynchronously (batch). At least &#x60;historicDecisionInstanceIds&#x60; or &#x60;historicDecisionInstanceQuery&#x60;  has to be provided. If both are provided then all instances matching query  criterion and instances from the list will be deleted.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricDecisionInstanceApi();
let opts = { 
  'body': new CamundaRestApi.DeleteHistoricDecisionInstancesDto() // DeleteHistoricDecisionInstancesDto | 
};
apiInstance.deleteAsync(opts, (error, data, response) => {
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
 **body** | [**DeleteHistoricDecisionInstancesDto**](DeleteHistoricDecisionInstancesDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getHistoricDecisionInstance"></a>
# **getHistoricDecisionInstance**
> HistoricDecisionInstanceDto getHistoricDecisionInstance(id, opts)

Get Historic Decision Instance

Retrieves a historic decision instance by id, according to the  &#x60;HistoricDecisionInstance&#x60; interface in the engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricDecisionInstanceApi();
let id = "id_example"; // String | The id of the historic decision instance to be retrieved.
let opts = { 
  'includeInputs': true, // Boolean | Include input values in the result. Value may only be `true`, as `false` is the default behavior.
  'includeOutputs': true, // Boolean | Include output values in the result. Value may only be `true`, as `false` is the default behavior.
  'disableBinaryFetching': true, // Boolean | Disables fetching of byte array input and output values. Value may only be `true`, as `false` is the default behavior.
  'disableCustomObjectDeserialization': true // Boolean | Disables deserialization of input and output values that are custom objects. Value may only be `true`, as `false` is the default behavior.
};
apiInstance.getHistoricDecisionInstance(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the historic decision instance to be retrieved. | 
 **includeInputs** | **Boolean**| Include input values in the result. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **includeOutputs** | **Boolean**| Include output values in the result. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **disableBinaryFetching** | **Boolean**| Disables fetching of byte array input and output values. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **disableCustomObjectDeserialization** | **Boolean**| Disables deserialization of input and output values that are custom objects. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**HistoricDecisionInstanceDto**](HistoricDecisionInstanceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricDecisionInstances"></a>
# **getHistoricDecisionInstances**
> [HistoricDecisionInstanceDto] getHistoricDecisionInstances(opts)

Get Historic Decision Instances

Queries for historic decision instances that fulfill the given parameters.  The size of the result set can be retrieved by using the  [Get Historic Decision Instance Count](https://docs.camunda.org/manual/develop/reference/rest/history/decision-instance/get-decision-instance-query-count/)  method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricDecisionInstanceApi();
let opts = { 
  'decisionInstanceId': "decisionInstanceId_example", // String | Filter by decision instance id.
  'decisionInstanceIdIn': "decisionInstanceIdIn_example", // String | Filter by decision instance ids. Must be a comma-separated list of decision instance ids.
  'decisionDefinitionId': "decisionDefinitionId_example", // String | Filter by the decision definition the instances belongs to.
  'decisionDefinitionIdIn': "decisionDefinitionIdIn_example", // String | Filter by the decision definitions the instances belongs to. Must be a comma-separated list of decision definition ids.
  'decisionDefinitionKey': "decisionDefinitionKey_example", // String | Filter by the key of the decision definition the instances belongs to.
  'decisionDefinitionKeyIn': "decisionDefinitionKeyIn_example", // String | Filter by the keys of the decision definition the instances belongs to. Must be a comma- separated list of decision definition keys.
  'decisionDefinitionName': "decisionDefinitionName_example", // String | Filter by the name of the decision definition the instances belongs to.
  'decisionDefinitionNameLike': "decisionDefinitionNameLike_example", // String | Filter by the name of the decision definition the instances belongs to, that the parameter is a substring of.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the process definition the instances belongs to.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by the key of the process definition the instances belongs to.
  'processInstanceId': "processInstanceId_example", // String | Filter by the process instance the instances belongs to.
  'caseDefinitionId': "caseDefinitionId_example", // String | Filter by the case definition the instances belongs to.
  'caseDefinitionKey': "caseDefinitionKey_example", // String | Filter by the key of the case definition the instances belongs to.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by the case instance the instances belongs to.
  'activityIdIn': "activityIdIn_example", // String | Filter by the activity ids the instances belongs to. Must be a comma-separated list of acitvity ids.
  'activityInstanceIdIn': "activityInstanceIdIn_example", // String | Filter by the activity instance ids the instances belongs to. Must be a comma-separated list of acitvity instance ids.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A historic decision instance must have one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic decision instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'evaluatedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were evaluated before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM- dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'evaluatedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were evaluated after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM- dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'userId': "userId_example", // String | Restrict to instances that were evaluated by the given user.
  'rootDecisionInstanceId': "rootDecisionInstanceId_example", // String | Restrict to instances that have a given root decision instance id. This also includes the decision instance with the given id.
  'rootDecisionInstancesOnly': true, // Boolean | Restrict to instances those are the root decision instance of an evaluation. Value may only be `true`, as `false` is the default behavior.
  'decisionRequirementsDefinitionId': "decisionRequirementsDefinitionId_example", // String | Filter by the decision requirements definition the instances belongs to.
  'decisionRequirementsDefinitionKey': "decisionRequirementsDefinitionKey_example", // String | Filter by the key of the decision requirements definition the instances belongs to.
  'includeInputs': true, // Boolean | Include input values in the result. Value may only be `true`, as `false` is the default behavior.
  'includeOutputs': true, // Boolean | Include output values in the result. Value may only be `true`, as `false` is the default behavior.
  'disableBinaryFetching': true, // Boolean | Disables fetching of byte array input and output values. Value may only be `true`, as `false` is the default behavior.
  'disableCustomObjectDeserialization': true, // Boolean | Disables deserialization of input and output values that are custom objects. Value may only be `true`, as `false` is the default behavior.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getHistoricDecisionInstances(opts, (error, data, response) => {
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
 **decisionInstanceId** | **String**| Filter by decision instance id. | [optional] 
 **decisionInstanceIdIn** | **String**| Filter by decision instance ids. Must be a comma-separated list of decision instance ids. | [optional] 
 **decisionDefinitionId** | **String**| Filter by the decision definition the instances belongs to. | [optional] 
 **decisionDefinitionIdIn** | **String**| Filter by the decision definitions the instances belongs to. Must be a comma-separated list of decision definition ids. | [optional] 
 **decisionDefinitionKey** | **String**| Filter by the key of the decision definition the instances belongs to. | [optional] 
 **decisionDefinitionKeyIn** | **String**| Filter by the keys of the decision definition the instances belongs to. Must be a comma- separated list of decision definition keys. | [optional] 
 **decisionDefinitionName** | **String**| Filter by the name of the decision definition the instances belongs to. | [optional] 
 **decisionDefinitionNameLike** | **String**| Filter by the name of the decision definition the instances belongs to, that the parameter is a substring of. | [optional] 
 **processDefinitionId** | **String**| Filter by the process definition the instances belongs to. | [optional] 
 **processDefinitionKey** | **String**| Filter by the key of the process definition the instances belongs to. | [optional] 
 **processInstanceId** | **String**| Filter by the process instance the instances belongs to. | [optional] 
 **caseDefinitionId** | **String**| Filter by the case definition the instances belongs to. | [optional] 
 **caseDefinitionKey** | **String**| Filter by the key of the case definition the instances belongs to. | [optional] 
 **caseInstanceId** | **String**| Filter by the case instance the instances belongs to. | [optional] 
 **activityIdIn** | **String**| Filter by the activity ids the instances belongs to. Must be a comma-separated list of acitvity ids. | [optional] 
 **activityInstanceIdIn** | **String**| Filter by the activity instance ids the instances belongs to. Must be a comma-separated list of acitvity instance ids. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A historic decision instance must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic decision instances that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **evaluatedBefore** | **Date**| Restrict to instances that were evaluated before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM- dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **evaluatedAfter** | **Date**| Restrict to instances that were evaluated after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM- dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **userId** | **String**| Restrict to instances that were evaluated by the given user. | [optional] 
 **rootDecisionInstanceId** | **String**| Restrict to instances that have a given root decision instance id. This also includes the decision instance with the given id. | [optional] 
 **rootDecisionInstancesOnly** | **Boolean**| Restrict to instances those are the root decision instance of an evaluation. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **decisionRequirementsDefinitionId** | **String**| Filter by the decision requirements definition the instances belongs to. | [optional] 
 **decisionRequirementsDefinitionKey** | **String**| Filter by the key of the decision requirements definition the instances belongs to. | [optional] 
 **includeInputs** | **Boolean**| Include input values in the result. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **includeOutputs** | **Boolean**| Include output values in the result. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **disableBinaryFetching** | **Boolean**| Disables fetching of byte array input and output values. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **disableCustomObjectDeserialization** | **Boolean**| Disables deserialization of input and output values that are custom objects. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[HistoricDecisionInstanceDto]**](HistoricDecisionInstanceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricDecisionInstancesCount"></a>
# **getHistoricDecisionInstancesCount**
> CountResultDto getHistoricDecisionInstancesCount(opts)

Get Historic Decision Instance Count

Queries for the number of historic decision instances that fulfill the given parameters.  Takes the same parameters as the  [Get Historic Decision Instances](https://docs.camunda.org/manual/develop/reference/rest/history/decision-instance/get-decision-instance-query/)  method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricDecisionInstanceApi();
let opts = { 
  'decisionInstanceId': "decisionInstanceId_example", // String | Filter by decision instance id.
  'decisionInstanceIdIn': "decisionInstanceIdIn_example", // String | Filter by decision instance ids. Must be a comma-separated list of decision instance ids.
  'decisionDefinitionId': "decisionDefinitionId_example", // String | Filter by the decision definition the instances belongs to.
  'decisionDefinitionIdIn': "decisionDefinitionIdIn_example", // String | Filter by the decision definitions the instances belongs to. Must be a comma-separated list of decision definition ids.
  'decisionDefinitionKey': "decisionDefinitionKey_example", // String | Filter by the key of the decision definition the instances belongs to.
  'decisionDefinitionKeyIn': "decisionDefinitionKeyIn_example", // String | Filter by the keys of the decision definition the instances belongs to. Must be a comma- separated list of decision definition keys.
  'decisionDefinitionName': "decisionDefinitionName_example", // String | Filter by the name of the decision definition the instances belongs to.
  'decisionDefinitionNameLike': "decisionDefinitionNameLike_example", // String | Filter by the name of the decision definition the instances belongs to, that the parameter is a substring of.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the process definition the instances belongs to.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by the key of the process definition the instances belongs to.
  'processInstanceId': "processInstanceId_example", // String | Filter by the process instance the instances belongs to.
  'caseDefinitionId': "caseDefinitionId_example", // String | Filter by the case definition the instances belongs to.
  'caseDefinitionKey': "caseDefinitionKey_example", // String | Filter by the key of the case definition the instances belongs to.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by the case instance the instances belongs to.
  'activityIdIn': "activityIdIn_example", // String | Filter by the activity ids the instances belongs to. Must be a comma-separated list of acitvity ids.
  'activityInstanceIdIn': "activityInstanceIdIn_example", // String | Filter by the activity instance ids the instances belongs to. Must be a comma-separated list of acitvity instance ids.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A historic decision instance must have one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic decision instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'evaluatedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were evaluated before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM- dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'evaluatedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were evaluated after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM- dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'userId': "userId_example", // String | Restrict to instances that were evaluated by the given user.
  'rootDecisionInstanceId': "rootDecisionInstanceId_example", // String | Restrict to instances that have a given root decision instance id. This also includes the decision instance with the given id.
  'rootDecisionInstancesOnly': true, // Boolean | Restrict to instances those are the root decision instance of an evaluation. Value may only be `true`, as `false` is the default behavior.
  'decisionRequirementsDefinitionId': "decisionRequirementsDefinitionId_example", // String | Filter by the decision requirements definition the instances belongs to.
  'decisionRequirementsDefinitionKey': "decisionRequirementsDefinitionKey_example" // String | Filter by the key of the decision requirements definition the instances belongs to.
};
apiInstance.getHistoricDecisionInstancesCount(opts, (error, data, response) => {
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
 **decisionInstanceId** | **String**| Filter by decision instance id. | [optional] 
 **decisionInstanceIdIn** | **String**| Filter by decision instance ids. Must be a comma-separated list of decision instance ids. | [optional] 
 **decisionDefinitionId** | **String**| Filter by the decision definition the instances belongs to. | [optional] 
 **decisionDefinitionIdIn** | **String**| Filter by the decision definitions the instances belongs to. Must be a comma-separated list of decision definition ids. | [optional] 
 **decisionDefinitionKey** | **String**| Filter by the key of the decision definition the instances belongs to. | [optional] 
 **decisionDefinitionKeyIn** | **String**| Filter by the keys of the decision definition the instances belongs to. Must be a comma- separated list of decision definition keys. | [optional] 
 **decisionDefinitionName** | **String**| Filter by the name of the decision definition the instances belongs to. | [optional] 
 **decisionDefinitionNameLike** | **String**| Filter by the name of the decision definition the instances belongs to, that the parameter is a substring of. | [optional] 
 **processDefinitionId** | **String**| Filter by the process definition the instances belongs to. | [optional] 
 **processDefinitionKey** | **String**| Filter by the key of the process definition the instances belongs to. | [optional] 
 **processInstanceId** | **String**| Filter by the process instance the instances belongs to. | [optional] 
 **caseDefinitionId** | **String**| Filter by the case definition the instances belongs to. | [optional] 
 **caseDefinitionKey** | **String**| Filter by the key of the case definition the instances belongs to. | [optional] 
 **caseInstanceId** | **String**| Filter by the case instance the instances belongs to. | [optional] 
 **activityIdIn** | **String**| Filter by the activity ids the instances belongs to. Must be a comma-separated list of acitvity ids. | [optional] 
 **activityInstanceIdIn** | **String**| Filter by the activity instance ids the instances belongs to. Must be a comma-separated list of acitvity instance ids. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A historic decision instance must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic decision instances that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **evaluatedBefore** | **Date**| Restrict to instances that were evaluated before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM- dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **evaluatedAfter** | **Date**| Restrict to instances that were evaluated after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM- dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **userId** | **String**| Restrict to instances that were evaluated by the given user. | [optional] 
 **rootDecisionInstanceId** | **String**| Restrict to instances that have a given root decision instance id. This also includes the decision instance with the given id. | [optional] 
 **rootDecisionInstancesOnly** | **Boolean**| Restrict to instances those are the root decision instance of an evaluation. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **decisionRequirementsDefinitionId** | **String**| Filter by the decision requirements definition the instances belongs to. | [optional] 
 **decisionRequirementsDefinitionKey** | **String**| Filter by the key of the decision requirements definition the instances belongs to. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setRemovalTimeAsyncHistoricDecisionInstance"></a>
# **setRemovalTimeAsyncHistoricDecisionInstance**
> BatchDto setRemovalTimeAsyncHistoricDecisionInstance(opts)

Set Removal Time Async (POST)

Sets the removal time to multiple historic decision instances asynchronously (batch).  At least &#x60;historicDecisionInstanceIds&#x60; or &#x60;historicDecisionInstanceQuery&#x60; has to be provided. If both are provided, all instances matching query criterion and instances from the list will be updated with a removal time.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricDecisionInstanceApi();
let opts = { 
  'body': new CamundaRestApi.SetRemovalTimeToHistoricDecisionInstancesDto() // SetRemovalTimeToHistoricDecisionInstancesDto | 
};
apiInstance.setRemovalTimeAsyncHistoricDecisionInstance(opts, (error, data, response) => {
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
 **body** | [**SetRemovalTimeToHistoricDecisionInstancesDto**](SetRemovalTimeToHistoricDecisionInstancesDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

