# CamundaRestApi.HistoricProcessDefinitionApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCleanableHistoricProcessInstanceReport**](HistoricProcessDefinitionApi.md#getCleanableHistoricProcessInstanceReport) | **GET** /history/process-definition/cleanable-process-instance-report | Get Cleanable Process Instance Report
[**getCleanableHistoricProcessInstanceReportCount**](HistoricProcessDefinitionApi.md#getCleanableHistoricProcessInstanceReportCount) | **GET** /history/process-definition/cleanable-process-instance-report/count | Get Cleanable Process Instance Report Count
[**getHistoricActivityStatistics**](HistoricProcessDefinitionApi.md#getHistoricActivityStatistics) | **GET** /history/process-definition/{id}/statistics | Get Historic Activity Statistics

<a name="getCleanableHistoricProcessInstanceReport"></a>
# **getCleanableHistoricProcessInstanceReport**
> [CleanableHistoricProcessInstanceReportResultDto] getCleanableHistoricProcessInstanceReport(opts)

Get Cleanable Process Instance Report

Retrieves a report about a process definition and finished process instances relevant to history cleanup (see [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup))  so that you can tune the history time to live. These reports include the count of the finished historic process instances, cleanable process instances and basic process definition data - id, key, name and version. The size of the result set can be retrieved by using the [Get Cleanable Process Instance Report Count](https://docs.camunda.org/manual/develop/reference/rest/history/process-definition/get-cleanable-process-instance-report-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricProcessDefinitionApi();
let opts = { 
  'processDefinitionIdIn': "processDefinitionIdIn_example", // String | Filter by process definition ids. Must be a comma-separated list of process definition ids.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Filter by process definition keys. Must be a comma-separated list of process definition keys.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A process definition must have one of the given  tenant ids.
  'withoutTenantId': true, // Boolean | Only include process definitions which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'compact': true, // Boolean | Only include process instances which have more than zero finished instances. Value may only be `true`, as `false` is the default behavior.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getCleanableHistoricProcessInstanceReport(opts, (error, data, response) => {
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
 **processDefinitionIdIn** | **String**| Filter by process definition ids. Must be a comma-separated list of process definition ids. | [optional] 
 **processDefinitionKeyIn** | **String**| Filter by process definition keys. Must be a comma-separated list of process definition keys. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A process definition must have one of the given  tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include process definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **compact** | **Boolean**| Only include process instances which have more than zero finished instances. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[CleanableHistoricProcessInstanceReportResultDto]**](CleanableHistoricProcessInstanceReportResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCleanableHistoricProcessInstanceReportCount"></a>
# **getCleanableHistoricProcessInstanceReportCount**
> CountResultDto getCleanableHistoricProcessInstanceReportCount(opts)

Get Cleanable Process Instance Report Count

Queries for the number of report results about a process definition and finished process instances relevant to history cleanup (see [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup)). Takes the same parameters as the [Get Cleanable Process Instance Report](https://docs.camunda.org/manual/develop/reference/rest/history/process-definition/get-cleanable-process-instance-report/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricProcessDefinitionApi();
let opts = { 
  'processDefinitionIdIn': "processDefinitionIdIn_example", // String | Filter by process definition ids. Must be a comma-separated list of process definition ids.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Filter by process definition keys. Must be a comma-separated list of process definition keys.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A process definition must have one of the given  tenant ids.
  'withoutTenantId': true, // Boolean | Only include process definitions which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'compact': true // Boolean | Only include process instances which have more than zero finished instances. Value may only be `true`, as `false` is the default behavior.
};
apiInstance.getCleanableHistoricProcessInstanceReportCount(opts, (error, data, response) => {
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
 **processDefinitionIdIn** | **String**| Filter by process definition ids. Must be a comma-separated list of process definition ids. | [optional] 
 **processDefinitionKeyIn** | **String**| Filter by process definition keys. Must be a comma-separated list of process definition keys. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A process definition must have one of the given  tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include process definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **compact** | **Boolean**| Only include process instances which have more than zero finished instances. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricActivityStatistics"></a>
# **getHistoricActivityStatistics**
> [HistoricActivityStatisticsDto] getHistoricActivityStatistics(id, opts)

Get Historic Activity Statistics

Retrieves historic statistics of a given process definition, grouped by activities. These statistics include the number of running activity instances and, optionally, the number of canceled activity instances, finished activity instances and activity instances which completed a scope (i.e., in BPMN 2.0 manner: a scope is completed by an activity instance when the activity instance consumed a token but did not emit a new token). **Note:** This only includes historic data.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition.
let opts = { 
  'canceled': true, // Boolean | Whether to include the number of canceled activity instances in the result or not. Valid values are `true` or `false`. Default: `false`.
  'finished': true, // Boolean | Whether to include the number of finished activity instances in the result or not. Valid values are `true` or `false`. Default: `false`.
  'completeScope': true, // Boolean | Whether to include the number of activity instances which completed a scope in the result or not. Valid values are `true` or `false`. Default: `false`.
  'incidents': true, // Boolean | Whether to include the number of incidents. Valid values are `true` or `false`. Default: `false`.
  'startedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to process instances that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/),  the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,  e.g., `2013-01-23T14:42:45.000+0200`.
  'startedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to process instances that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/),  the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,  e.g., `2013-01-23T14:42:45.000+0200`.
  'finishedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to process instances that were finished before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/),  the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,  e.g., `2013-01-23T14:42:45.000+0200`.
  'finishedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to process instances that were finished after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/),  the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,  e.g., `2013-01-23T14:42:45.000+0200`.
  'processInstanceIdIn': "processInstanceIdIn_example", // String | Restrict to process instances with the given IDs. The IDs must be provided as a comma- separated list.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example" // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
};
apiInstance.getHistoricActivityStatistics(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the process definition. | 
 **canceled** | **Boolean**| Whether to include the number of canceled activity instances in the result or not. Valid values are &#x60;true&#x60; or &#x60;false&#x60;. Default: &#x60;false&#x60;. | [optional] 
 **finished** | **Boolean**| Whether to include the number of finished activity instances in the result or not. Valid values are &#x60;true&#x60; or &#x60;false&#x60;. Default: &#x60;false&#x60;. | [optional] 
 **completeScope** | **Boolean**| Whether to include the number of activity instances which completed a scope in the result or not. Valid values are &#x60;true&#x60; or &#x60;false&#x60;. Default: &#x60;false&#x60;. | [optional] 
 **incidents** | **Boolean**| Whether to include the number of incidents. Valid values are &#x60;true&#x60; or &#x60;false&#x60;. Default: &#x60;false&#x60;. | [optional] 
 **startedBefore** | **Date**| Restrict to process instances that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/),  the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;,  e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedAfter** | **Date**| Restrict to process instances that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/),  the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;,  e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **finishedBefore** | **Date**| Restrict to process instances that were finished before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/),  the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;,  e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **finishedAfter** | **Date**| Restrict to process instances that were finished after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/),  the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;,  e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **processInstanceIdIn** | **String**| Restrict to process instances with the given IDs. The IDs must be provided as a comma- separated list. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 

### Return type

[**[HistoricActivityStatisticsDto]**](HistoricActivityStatisticsDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

