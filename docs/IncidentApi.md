# CamundaRestApi.IncidentApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearIncidentAnnotation**](IncidentApi.md#clearIncidentAnnotation) | **DELETE** /incident/{id}/annotation | Clear Incident Annotation
[**getIncident**](IncidentApi.md#getIncident) | **GET** /incident/{id} | Get Incident
[**getIncidents**](IncidentApi.md#getIncidents) | **GET** /incident | Get List
[**getIncidentsCount**](IncidentApi.md#getIncidentsCount) | **GET** /incident/count | Get List Count
[**resolveIncident**](IncidentApi.md#resolveIncident) | **DELETE** /incident/{id} | Resolve Incident
[**setIncidentAnnotation**](IncidentApi.md#setIncidentAnnotation) | **PUT** /incident/{id}/annotation | Set Incident Annotation

<a name="clearIncidentAnnotation"></a>
# **clearIncidentAnnotation**
> clearIncidentAnnotation(id)

Clear Incident Annotation

Clears the annotation of an incident with given id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.IncidentApi();
let id = "id_example"; // String | The id of the incident to clear the annotation at.

apiInstance.clearIncidentAnnotation(id, (error, data, response) => {
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
 **id** | **String**| The id of the incident to clear the annotation at. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIncident"></a>
# **getIncident**
> IncidentDto getIncident(id)

Get Incident

Retrieves an incident by ID.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.IncidentApi();
let id = "id_example"; // String | The id of the incident to be retrieved.

apiInstance.getIncident(id, (error, data, response) => {
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
 **id** | **String**| The id of the incident to be retrieved. | 

### Return type

[**IncidentDto**](IncidentDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIncidents"></a>
# **getIncidents**
> [IncidentDto] getIncidents(opts)

Get List

Queries for incidents that fulfill given parameters. The size of the result set can be retrieved by using the [Get Incident Count](https://docs.camunda.org/manual/develop/reference/rest/incident/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.IncidentApi();
let opts = { 
  'incidentId': "incidentId_example", // String | Restricts to incidents that have the given id.
  'incidentType': "incidentType_example", // String | Restricts to incidents that belong to the given incident type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'incidentMessage': "incidentMessage_example", // String | Restricts to incidents that have the given incident message.
  'incidentMessageLike': "incidentMessageLike_example", // String | Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character '%' to express like-strategy: starts with (`string%`), ends with (`%string`) or contains (`%string%`).
  'processDefinitionId': "processDefinitionId_example", // String | Restricts to incidents that belong to a process definition with the given id.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Restricts to incidents that belong to a process definition with the given keys. Must be a comma-separated list.
  'processInstanceId': "processInstanceId_example", // String | Restricts to incidents that belong to a process instance with the given id.
  'executionId': "executionId_example", // String | Restricts to incidents that belong to an execution with the given id.
  'incidentTimestampBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to incidents that have an incidentTimestamp date before the given date.  By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'incidentTimestampAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to incidents that have an incidentTimestamp date after the given date.  By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'activityId': "activityId_example", // String | Restricts to incidents that belong to an activity with the given id.
  'failedActivityId': "failedActivityId_example", // String | Restricts to incidents that were created due to the failure of an activity with the given id.
  'causeIncidentId': "causeIncidentId_example", // String | Restricts to incidents that have the given incident id as cause incident.
  'rootCauseIncidentId': "rootCauseIncidentId_example", // String | Restricts to incidents that have the given incident id as root cause incident.
  'configuration': "configuration_example", // String | Restricts to incidents that have the given parameter set as configuration.
  'tenantIdIn': "tenantIdIn_example", // String | Restricts to incidents that have one of the given comma-separated tenant ids.
  'jobDefinitionIdIn': "jobDefinitionIdIn_example", // String | Restricts to incidents that have one of the given comma-separated job definition ids.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getIncidents(opts, (error, data, response) => {
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
 **incidentType** | **String**| Restricts to incidents that belong to the given incident type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **incidentMessage** | **String**| Restricts to incidents that have the given incident message. | [optional] 
 **incidentMessageLike** | **String**| Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character &#x27;%&#x27; to express like-strategy: starts with (&#x60;string%&#x60;), ends with (&#x60;%string&#x60;) or contains (&#x60;%string%&#x60;). | [optional] 
 **processDefinitionId** | **String**| Restricts to incidents that belong to a process definition with the given id. | [optional] 
 **processDefinitionKeyIn** | **String**| Restricts to incidents that belong to a process definition with the given keys. Must be a comma-separated list. | [optional] 
 **processInstanceId** | **String**| Restricts to incidents that belong to a process instance with the given id. | [optional] 
 **executionId** | **String**| Restricts to incidents that belong to an execution with the given id. | [optional] 
 **incidentTimestampBefore** | **Date**| Restricts to incidents that have an incidentTimestamp date before the given date.  By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **incidentTimestampAfter** | **Date**| Restricts to incidents that have an incidentTimestamp date after the given date.  By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **activityId** | **String**| Restricts to incidents that belong to an activity with the given id. | [optional] 
 **failedActivityId** | **String**| Restricts to incidents that were created due to the failure of an activity with the given id. | [optional] 
 **causeIncidentId** | **String**| Restricts to incidents that have the given incident id as cause incident. | [optional] 
 **rootCauseIncidentId** | **String**| Restricts to incidents that have the given incident id as root cause incident. | [optional] 
 **configuration** | **String**| Restricts to incidents that have the given parameter set as configuration. | [optional] 
 **tenantIdIn** | **String**| Restricts to incidents that have one of the given comma-separated tenant ids. | [optional] 
 **jobDefinitionIdIn** | **String**| Restricts to incidents that have one of the given comma-separated job definition ids. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[IncidentDto]**](IncidentDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIncidentsCount"></a>
# **getIncidentsCount**
> CountResultDto getIncidentsCount(opts)

Get List Count

Queries for the number of incidents that fulfill given parameters. Takes the same parameters as the [Get Incidents](https://docs.camunda.org/manual/develop/reference/rest/incident/get-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.IncidentApi();
let opts = { 
  'incidentId': "incidentId_example", // String | Restricts to incidents that have the given id.
  'incidentType': "incidentType_example", // String | Restricts to incidents that belong to the given incident type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'incidentMessage': "incidentMessage_example", // String | Restricts to incidents that have the given incident message.
  'incidentMessageLike': "incidentMessageLike_example", // String | Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character '%' to express like-strategy: starts with (`string%`), ends with (`%string`) or contains (`%string%`).
  'processDefinitionId': "processDefinitionId_example", // String | Restricts to incidents that belong to a process definition with the given id.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Restricts to incidents that belong to a process definition with the given keys. Must be a comma-separated list.
  'processInstanceId': "processInstanceId_example", // String | Restricts to incidents that belong to a process instance with the given id.
  'executionId': "executionId_example", // String | Restricts to incidents that belong to an execution with the given id.
  'incidentTimestampBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to incidents that have an incidentTimestamp date before the given date.  By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'incidentTimestampAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to incidents that have an incidentTimestamp date after the given date.  By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'activityId': "activityId_example", // String | Restricts to incidents that belong to an activity with the given id.
  'failedActivityId': "failedActivityId_example", // String | Restricts to incidents that were created due to the failure of an activity with the given id.
  'causeIncidentId': "causeIncidentId_example", // String | Restricts to incidents that have the given incident id as cause incident.
  'rootCauseIncidentId': "rootCauseIncidentId_example", // String | Restricts to incidents that have the given incident id as root cause incident.
  'configuration': "configuration_example", // String | Restricts to incidents that have the given parameter set as configuration.
  'tenantIdIn': "tenantIdIn_example", // String | Restricts to incidents that have one of the given comma-separated tenant ids.
  'jobDefinitionIdIn': "jobDefinitionIdIn_example" // String | Restricts to incidents that have one of the given comma-separated job definition ids.
};
apiInstance.getIncidentsCount(opts, (error, data, response) => {
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
 **incidentType** | **String**| Restricts to incidents that belong to the given incident type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **incidentMessage** | **String**| Restricts to incidents that have the given incident message. | [optional] 
 **incidentMessageLike** | **String**| Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character &#x27;%&#x27; to express like-strategy: starts with (&#x60;string%&#x60;), ends with (&#x60;%string&#x60;) or contains (&#x60;%string%&#x60;). | [optional] 
 **processDefinitionId** | **String**| Restricts to incidents that belong to a process definition with the given id. | [optional] 
 **processDefinitionKeyIn** | **String**| Restricts to incidents that belong to a process definition with the given keys. Must be a comma-separated list. | [optional] 
 **processInstanceId** | **String**| Restricts to incidents that belong to a process instance with the given id. | [optional] 
 **executionId** | **String**| Restricts to incidents that belong to an execution with the given id. | [optional] 
 **incidentTimestampBefore** | **Date**| Restricts to incidents that have an incidentTimestamp date before the given date.  By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **incidentTimestampAfter** | **Date**| Restricts to incidents that have an incidentTimestamp date after the given date.  By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **activityId** | **String**| Restricts to incidents that belong to an activity with the given id. | [optional] 
 **failedActivityId** | **String**| Restricts to incidents that were created due to the failure of an activity with the given id. | [optional] 
 **causeIncidentId** | **String**| Restricts to incidents that have the given incident id as cause incident. | [optional] 
 **rootCauseIncidentId** | **String**| Restricts to incidents that have the given incident id as root cause incident. | [optional] 
 **configuration** | **String**| Restricts to incidents that have the given parameter set as configuration. | [optional] 
 **tenantIdIn** | **String**| Restricts to incidents that have one of the given comma-separated tenant ids. | [optional] 
 **jobDefinitionIdIn** | **String**| Restricts to incidents that have one of the given comma-separated job definition ids. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="resolveIncident"></a>
# **resolveIncident**
> resolveIncident(id)

Resolve Incident

Resolves an incident with given id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.IncidentApi();
let id = "id_example"; // String | The id of the incident to be resolved.

apiInstance.resolveIncident(id, (error, data, response) => {
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
 **id** | **String**| The id of the incident to be resolved. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setIncidentAnnotation"></a>
# **setIncidentAnnotation**
> setIncidentAnnotation(id, opts)

Set Incident Annotation

Sets the annotation of an incident with given id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.IncidentApi();
let id = "id_example"; // String | The id of the incident to clear the annotation at.
let opts = { 
  'body': new CamundaRestApi.AnnotationDto() // AnnotationDto | 
};
apiInstance.setIncidentAnnotation(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the incident to clear the annotation at. | 
 **body** | [**AnnotationDto**](AnnotationDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

