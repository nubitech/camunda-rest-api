# CamundaRestApi.HistoricDecisionDefinitionApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCleanableHistoricDecisionInstanceReport**](HistoricDecisionDefinitionApi.md#getCleanableHistoricDecisionInstanceReport) | **GET** /history/decision-definition/cleanable-decision-instance-report | Get Cleanable Decision Instance Report
[**getCleanableHistoricDecisionInstanceReportCount**](HistoricDecisionDefinitionApi.md#getCleanableHistoricDecisionInstanceReportCount) | **GET** /history/decision-definition/cleanable-decision-instance-report/count | Get Cleanable Decision Instance Report Count

<a name="getCleanableHistoricDecisionInstanceReport"></a>
# **getCleanableHistoricDecisionInstanceReport**
> [CleanableHistoricDecisionInstanceReportResultDto] getCleanableHistoricDecisionInstanceReport(opts)

Get Cleanable Decision Instance Report

Retrieves a report about a decision definition and finished decision instances relevant to history cleanup (see [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup)),  so that you can tune the history time to live. These reports include the count of the finished historic decision instances, cleanable decision instances and basic decision definition data - id, key, name and version. The size of the result set can be retrieved by using the  [Get Cleanable Decision Instance Report Count](https://docs.camunda.org/manual/develop/reference/rest/history/decision-definition/get-cleanable-decision-instance-report-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricDecisionDefinitionApi();
let opts = { 
  'decisionDefinitionIdIn': "decisionDefinitionIdIn_example", // String | Filter by decision definition ids. Must be a comma-separated list of decision definition ids.
  'decisionDefinitionKeyIn': "decisionDefinitionKeyIn_example", // String | Filter by decision definition keys. Must be a comma-separated list of decision definition keys.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A decision definition must have one of the given tenant  ids.
  'withoutTenantId': true, // Boolean | Only include decision definitions which belong to no tenant. Value may only be `true`, as `false`  is the default behavior.
  'compact': true, // Boolean | Only include decision instances which have more than zero finished instances. Value may only be `true`,  as `false` is the default behavior.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getCleanableHistoricDecisionInstanceReport(opts, (error, data, response) => {
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
 **decisionDefinitionIdIn** | **String**| Filter by decision definition ids. Must be a comma-separated list of decision definition ids. | [optional] 
 **decisionDefinitionKeyIn** | **String**| Filter by decision definition keys. Must be a comma-separated list of decision definition keys. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A decision definition must have one of the given tenant  ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include decision definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60;  is the default behavior. | [optional] 
 **compact** | **Boolean**| Only include decision instances which have more than zero finished instances. Value may only be &#x60;true&#x60;,  as &#x60;false&#x60; is the default behavior. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[CleanableHistoricDecisionInstanceReportResultDto]**](CleanableHistoricDecisionInstanceReportResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCleanableHistoricDecisionInstanceReportCount"></a>
# **getCleanableHistoricDecisionInstanceReportCount**
> CountResultDto getCleanableHistoricDecisionInstanceReportCount(opts)

Get Cleanable Decision Instance Report Count

Queries for the number of report results about a decision definition and finished decision instances relevant to history cleanup (see [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup)). Takes the same parameters as the [Get Cleanable Decision Instance Report](https://docs.camunda.org/manual/develop/reference/rest/history/decision-definition/get-cleanable-decision-instance-report/)  method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricDecisionDefinitionApi();
let opts = { 
  'decisionDefinitionIdIn': "decisionDefinitionIdIn_example", // String | Filter by decision definition ids. Must be a comma-separated list of decision definition ids.
  'decisionDefinitionKeyIn': "decisionDefinitionKeyIn_example", // String | Filter by decision definition keys. Must be a comma-separated list of decision definition keys.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A decision definition must have one of the given tenant  ids.
  'withoutTenantId': true, // Boolean | Only include decision definitions which belong to no tenant. Value may only be `true`, as `false`  is the default behavior.
  'compact': true // Boolean | Only include decision instances which have more than zero finished instances. Value may only be `true`,  as `false` is the default behavior.
};
apiInstance.getCleanableHistoricDecisionInstanceReportCount(opts, (error, data, response) => {
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
 **decisionDefinitionIdIn** | **String**| Filter by decision definition ids. Must be a comma-separated list of decision definition ids. | [optional] 
 **decisionDefinitionKeyIn** | **String**| Filter by decision definition keys. Must be a comma-separated list of decision definition keys. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A decision definition must have one of the given tenant  ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include decision definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60;  is the default behavior. | [optional] 
 **compact** | **Boolean**| Only include decision instances which have more than zero finished instances. Value may only be &#x60;true&#x60;,  as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

