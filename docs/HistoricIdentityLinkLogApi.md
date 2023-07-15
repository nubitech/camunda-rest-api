# CamundaRestApi.HistoricIdentityLinkLogApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricIdentityLinks**](HistoricIdentityLinkLogApi.md#getHistoricIdentityLinks) | **GET** /history/identity-link-log | Get Identity Link Logs
[**getHistoricIdentityLinksCount**](HistoricIdentityLinkLogApi.md#getHistoricIdentityLinksCount) | **GET** /history/identity-link-log/count | Get Identity Link Log Count

<a name="getHistoricIdentityLinks"></a>
# **getHistoricIdentityLinks**
> [HistoricIdentityLinkLogDto] getHistoricIdentityLinks(opts)

Get Identity Link Logs

Queries for historic identity link logs that fulfill given parameters. The size of the result set can be retrieved by using the [Get Identity-Link-Log Count](https://docs.camunda.org/manual/develop/reference/rest/history/identity-links/get-identity-link-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricIdentityLinkLogApi();
let opts = { 
  'type': "type_example", // String | Restricts to identity links that have the given type (candidate/assignee/owner).
  'userId': "userId_example", // String | Restricts to identity links that have the given user id.
  'groupId': "groupId_example", // String | Restricts to identity links that have the given group id.
  'dateBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to identity links that have the time before the given time.
  'dateAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to identity links that have the time after the given time.
  'taskId': "taskId_example", // String | Restricts to identity links that have the given task id.
  'processDefinitionId': "processDefinitionId_example", // String | Restricts to identity links that have the given process definition id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Restricts to identity links that have the given process definition key.
  'operationType': "operationType_example", // String | Restricts to identity links that have the given operationType (add/delete).
  'assignerId': "assignerId_example", // String | Restricts to identity links that have the given assigner id.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic identity links that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getHistoricIdentityLinks(opts, (error, data, response) => {
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
 **type** | **String**| Restricts to identity links that have the given type (candidate/assignee/owner). | [optional] 
 **userId** | **String**| Restricts to identity links that have the given user id. | [optional] 
 **groupId** | **String**| Restricts to identity links that have the given group id. | [optional] 
 **dateBefore** | **Date**| Restricts to identity links that have the time before the given time. | [optional] 
 **dateAfter** | **Date**| Restricts to identity links that have the time after the given time. | [optional] 
 **taskId** | **String**| Restricts to identity links that have the given task id. | [optional] 
 **processDefinitionId** | **String**| Restricts to identity links that have the given process definition id. | [optional] 
 **processDefinitionKey** | **String**| Restricts to identity links that have the given process definition key. | [optional] 
 **operationType** | **String**| Restricts to identity links that have the given operationType (add/delete). | [optional] 
 **assignerId** | **String**| Restricts to identity links that have the given assigner id. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic identity links that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[HistoricIdentityLinkLogDto]**](HistoricIdentityLinkLogDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricIdentityLinksCount"></a>
# **getHistoricIdentityLinksCount**
> CountResultDto getHistoricIdentityLinksCount(opts)

Get Identity Link Log Count

Queries for the number of historic identity link logs that fulfill the given parameters. Takes the same parameters as the [Get Identity-Link-Logs](https://docs.camunda.org/manual/develop/reference/rest/history/identity-links/get-identity-link-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricIdentityLinkLogApi();
let opts = { 
  'type': "type_example", // String | Restricts to identity links that have the given type (candidate/assignee/owner).
  'userId': "userId_example", // String | Restricts to identity links that have the given user id.
  'groupId': "groupId_example", // String | Restricts to identity links that have the given group id.
  'dateBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to identity links that have the time before the given time.
  'dateAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to identity links that have the time after the given time.
  'taskId': "taskId_example", // String | Restricts to identity links that have the given task id.
  'processDefinitionId': "processDefinitionId_example", // String | Restricts to identity links that have the given process definition id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Restricts to identity links that have the given process definition key.
  'operationType': "operationType_example", // String | Restricts to identity links that have the given operationType (add/delete).
  'assignerId': "assignerId_example", // String | Restricts to identity links that have the given assigner id.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids.
  'withoutTenantId': true // Boolean | Only include historic identity links that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
};
apiInstance.getHistoricIdentityLinksCount(opts, (error, data, response) => {
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
 **type** | **String**| Restricts to identity links that have the given type (candidate/assignee/owner). | [optional] 
 **userId** | **String**| Restricts to identity links that have the given user id. | [optional] 
 **groupId** | **String**| Restricts to identity links that have the given group id. | [optional] 
 **dateBefore** | **Date**| Restricts to identity links that have the time before the given time. | [optional] 
 **dateAfter** | **Date**| Restricts to identity links that have the time after the given time. | [optional] 
 **taskId** | **String**| Restricts to identity links that have the given task id. | [optional] 
 **processDefinitionId** | **String**| Restricts to identity links that have the given process definition id. | [optional] 
 **processDefinitionKey** | **String**| Restricts to identity links that have the given process definition key. | [optional] 
 **operationType** | **String**| Restricts to identity links that have the given operationType (add/delete). | [optional] 
 **assignerId** | **String**| Restricts to identity links that have the given assigner id. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic identity links that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

