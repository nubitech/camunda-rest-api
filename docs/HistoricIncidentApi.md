# CamundaRestApi.HistoricIncidentApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricIncidents**](HistoricIncidentApi.md#getHistoricIncidents) | **GET** /history/incident | Get Incidents
[**getHistoricIncidentsCount**](HistoricIncidentApi.md#getHistoricIncidentsCount) | **GET** /history/incident/count | Get Incident Count

<a name="getHistoricIncidents"></a>
# **getHistoricIncidents**
> [HistoricIncidentDto] getHistoricIncidents(opts)

Get Incidents

Queries for historic incidents that fulfill given parameters. The size of the result set can be retrieved by using the [Get Incident Count](https://docs.camunda.org/manual/develop/reference/rest/history/incident/get-incident-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricIncidentApi();
let opts = { 
  'incidentId': "incidentId_example", // String | Restricts to incidents that have the given id.
  'incidentType': "incidentType_example", // String | Restricts to incidents that belong to the given incident type. See the [User Guide](/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'incidentMessage': "incidentMessage_example", // String | Restricts to incidents that have the given incident message.
  'incidentMessageLike': "incidentMessageLike_example", // String | Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). 
  'processDefinitionId': "processDefinitionId_example", // String | Restricts to incidents that belong to a process definition with the given id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Restricts to incidents that have the given processDefinitionKey.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Restricts to incidents that have one of the given process definition keys.
  'processInstanceId': "processInstanceId_example", // String | Restricts to incidents that belong to a process instance with the given id.
  'executionId': "executionId_example", // String | Restricts to incidents that belong to an execution with the given id.
  'createTimeBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to incidents that have a createTime date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'createTimeAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to incidents that have a createTime date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'endTimeBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to incidents that have an endTimeBefore date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'endTimeAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to incidents that have an endTimeAfter date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'activityId': "activityId_example", // String | Restricts to incidents that belong to an activity with the given id.
  'failedActivityId': "failedActivityId_example", // String | Restricts to incidents that were created due to the failure of an activity with the given id.
  'causeIncidentId': "causeIncidentId_example", // String | Restricts to incidents that have the given incident id as cause incident.
  'rootCauseIncidentId': "rootCauseIncidentId_example", // String | Restricts to incidents that have the given incident id as root cause incident.
  'configuration': "configuration_example", // String | Restricts to incidents that have the given parameter set as configuration.
  'historyConfiguration': "historyConfiguration_example", // String | Restricts to incidents that have the given parameter set as history configuration.
  'open': true, // Boolean | Restricts to incidents that are open.
  'resolved': true, // Boolean | Restricts to incidents that are resolved.
  'deleted': true, // Boolean | Restricts to incidents that are deleted.
  'tenantIdIn': "tenantIdIn_example", // String | Restricts to incidents that have one of the given comma-separated tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic incidents that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'jobDefinitionIdIn': "jobDefinitionIdIn_example", // String | Restricts to incidents that have one of the given comma-separated job definition ids.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example" // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
};
apiInstance.getHistoricIncidents(opts, (error, data, response) => {
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
 **incidentId** | **String**| Restricts to incidents that have the given id. | [optional] 
 **incidentType** | **String**| Restricts to incidents that belong to the given incident type. See the [User Guide](/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **incidentMessage** | **String**| Restricts to incidents that have the given incident message. | [optional] 
 **incidentMessageLike** | **String**| Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character &#x27;%&#x27; to express like-strategy: starts with (string%), ends with (%string) or contains (%string%).  | [optional] 
 **processDefinitionId** | **String**| Restricts to incidents that belong to a process definition with the given id. | [optional] 
 **processDefinitionKey** | **String**| Restricts to incidents that have the given processDefinitionKey. | [optional] 
 **processDefinitionKeyIn** | **String**| Restricts to incidents that have one of the given process definition keys. | [optional] 
 **processInstanceId** | **String**| Restricts to incidents that belong to a process instance with the given id. | [optional] 
 **executionId** | **String**| Restricts to incidents that belong to an execution with the given id. | [optional] 
 **createTimeBefore** | **Date**| Restricts to incidents that have a createTime date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **createTimeAfter** | **Date**| Restricts to incidents that have a createTime date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **endTimeBefore** | **Date**| Restricts to incidents that have an endTimeBefore date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **endTimeAfter** | **Date**| Restricts to incidents that have an endTimeAfter date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **activityId** | **String**| Restricts to incidents that belong to an activity with the given id. | [optional] 
 **failedActivityId** | **String**| Restricts to incidents that were created due to the failure of an activity with the given id. | [optional] 
 **causeIncidentId** | **String**| Restricts to incidents that have the given incident id as cause incident. | [optional] 
 **rootCauseIncidentId** | **String**| Restricts to incidents that have the given incident id as root cause incident. | [optional] 
 **configuration** | **String**| Restricts to incidents that have the given parameter set as configuration. | [optional] 
 **historyConfiguration** | **String**| Restricts to incidents that have the given parameter set as history configuration. | [optional] 
 **open** | **Boolean**| Restricts to incidents that are open. | [optional] 
 **resolved** | **Boolean**| Restricts to incidents that are resolved. | [optional] 
 **deleted** | **Boolean**| Restricts to incidents that are deleted. | [optional] 
 **tenantIdIn** | **String**| Restricts to incidents that have one of the given comma-separated tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic incidents that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **jobDefinitionIdIn** | **String**| Restricts to incidents that have one of the given comma-separated job definition ids. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 

### Return type

[**[HistoricIncidentDto]**](HistoricIncidentDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricIncidentsCount"></a>
# **getHistoricIncidentsCount**
> CountResultDto getHistoricIncidentsCount(opts)

Get Incident Count

Queries for the number of historic incidents that fulfill the given parameters. Takes the same parameters as the [Get Incidents](https://docs.camunda.org/manual/develop/reference/rest/history/incident/get-incident-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricIncidentApi();
let opts = { 
  'incidentId': "incidentId_example", // String | Restricts to incidents that have the given id.
  'incidentType': "incidentType_example", // String | Restricts to incidents that belong to the given incident type. See the [User Guide](/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'incidentMessage': "incidentMessage_example", // String | Restricts to incidents that have the given incident message.
  'incidentMessageLike': "incidentMessageLike_example", // String | Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character '%' to express like-strategy: starts with (string%), ends with (%string) or contains (%string%). 
  'processDefinitionId': "processDefinitionId_example", // String | Restricts to incidents that belong to a process definition with the given id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Restricts to incidents that have the given processDefinitionKey.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Restricts to incidents that have one of the given process definition keys.
  'processInstanceId': "processInstanceId_example", // String | Restricts to incidents that belong to a process instance with the given id.
  'executionId': "executionId_example", // String | Restricts to incidents that belong to an execution with the given id.
  'createTimeBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to incidents that have a createTime date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'createTimeAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to incidents that have a createTime date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'endTimeBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to incidents that have an endTimeBefore date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'endTimeAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to incidents that have an endTimeAfter date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'activityId': "activityId_example", // String | Restricts to incidents that belong to an activity with the given id.
  'failedActivityId': "failedActivityId_example", // String | Restricts to incidents that were created due to the failure of an activity with the given id.
  'causeIncidentId': "causeIncidentId_example", // String | Restricts to incidents that have the given incident id as cause incident.
  'rootCauseIncidentId': "rootCauseIncidentId_example", // String | Restricts to incidents that have the given incident id as root cause incident.
  'configuration': "configuration_example", // String | Restricts to incidents that have the given parameter set as configuration.
  'historyConfiguration': "historyConfiguration_example", // String | Restricts to incidents that have the given parameter set as history configuration.
  'open': true, // Boolean | Restricts to incidents that are open.
  'resolved': true, // Boolean | Restricts to incidents that are resolved.
  'deleted': true, // Boolean | Restricts to incidents that are deleted.
  'tenantIdIn': "tenantIdIn_example", // String | Restricts to incidents that have one of the given comma-separated tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic incidents that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'jobDefinitionIdIn': "jobDefinitionIdIn_example", // String | Restricts to incidents that have one of the given comma-separated job definition ids.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example" // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
};
apiInstance.getHistoricIncidentsCount(opts, (error, data, response) => {
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
 **incidentId** | **String**| Restricts to incidents that have the given id. | [optional] 
 **incidentType** | **String**| Restricts to incidents that belong to the given incident type. See the [User Guide](/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **incidentMessage** | **String**| Restricts to incidents that have the given incident message. | [optional] 
 **incidentMessageLike** | **String**| Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character &#x27;%&#x27; to express like-strategy: starts with (string%), ends with (%string) or contains (%string%).  | [optional] 
 **processDefinitionId** | **String**| Restricts to incidents that belong to a process definition with the given id. | [optional] 
 **processDefinitionKey** | **String**| Restricts to incidents that have the given processDefinitionKey. | [optional] 
 **processDefinitionKeyIn** | **String**| Restricts to incidents that have one of the given process definition keys. | [optional] 
 **processInstanceId** | **String**| Restricts to incidents that belong to a process instance with the given id. | [optional] 
 **executionId** | **String**| Restricts to incidents that belong to an execution with the given id. | [optional] 
 **createTimeBefore** | **Date**| Restricts to incidents that have a createTime date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **createTimeAfter** | **Date**| Restricts to incidents that have a createTime date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **endTimeBefore** | **Date**| Restricts to incidents that have an endTimeBefore date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **endTimeAfter** | **Date**| Restricts to incidents that have an endTimeAfter date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **activityId** | **String**| Restricts to incidents that belong to an activity with the given id. | [optional] 
 **failedActivityId** | **String**| Restricts to incidents that were created due to the failure of an activity with the given id. | [optional] 
 **causeIncidentId** | **String**| Restricts to incidents that have the given incident id as cause incident. | [optional] 
 **rootCauseIncidentId** | **String**| Restricts to incidents that have the given incident id as root cause incident. | [optional] 
 **configuration** | **String**| Restricts to incidents that have the given parameter set as configuration. | [optional] 
 **historyConfiguration** | **String**| Restricts to incidents that have the given parameter set as history configuration. | [optional] 
 **open** | **Boolean**| Restricts to incidents that are open. | [optional] 
 **resolved** | **Boolean**| Restricts to incidents that are resolved. | [optional] 
 **deleted** | **Boolean**| Restricts to incidents that are deleted. | [optional] 
 **tenantIdIn** | **String**| Restricts to incidents that have one of the given comma-separated tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic incidents that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **jobDefinitionIdIn** | **String**| Restricts to incidents that have one of the given comma-separated job definition ids. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

