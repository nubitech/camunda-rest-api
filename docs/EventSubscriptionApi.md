# CamundaRestApi.EventSubscriptionApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEventSubscriptions**](EventSubscriptionApi.md#getEventSubscriptions) | **GET** /event-subscription | Get List
[**getEventSubscriptionsCount**](EventSubscriptionApi.md#getEventSubscriptionsCount) | **GET** /event-subscription/count | Get List Count

<a name="getEventSubscriptions"></a>
# **getEventSubscriptions**
> [EventSubscriptionDto] getEventSubscriptions(opts)

Get List

Queries for event subscriptions that fulfill given parameters. The size of the result set can be retrieved by using the [Get Event Subscriptions count](https://docs.camunda.org/manual/develop/reference/rest/event-subscription/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.EventSubscriptionApi();
let opts = { 
  'eventSubscriptionId': "eventSubscriptionId_example", // String | Only select subscription with the given id.
  'eventName': "eventName_example", // String | Only select subscriptions for events with the given name.
  'eventType': "eventType_example", // String | Only select subscriptions for events with the given type. Valid values: `message`, `signal`, `compensate` and `conditional`.
  'executionId': "executionId_example", // String | Only select subscriptions that belong to an execution with the given id.
  'processInstanceId': "processInstanceId_example", // String | Only select subscriptions that belong to a process instance with the given id.
  'activityId': "activityId_example", // String | Only select subscriptions that belong to an activity with the given id.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only select subscriptions which have no tenant id. Value may only be `true`, as `false` is the default behavior.
  'includeEventSubscriptionsWithoutTenantId': true, // Boolean | Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be `true`, as `false` is the default behavior.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getEventSubscriptions(opts, (error, data, response) => {
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
 **eventSubscriptionId** | **String**| Only select subscription with the given id. | [optional] 
 **eventName** | **String**| Only select subscriptions for events with the given name. | [optional] 
 **eventType** | **String**| Only select subscriptions for events with the given type. Valid values: &#x60;message&#x60;, &#x60;signal&#x60;, &#x60;compensate&#x60; and &#x60;conditional&#x60;. | [optional] 
 **executionId** | **String**| Only select subscriptions that belong to an execution with the given id. | [optional] 
 **processInstanceId** | **String**| Only select subscriptions that belong to a process instance with the given id. | [optional] 
 **activityId** | **String**| Only select subscriptions that belong to an activity with the given id. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only select subscriptions which have no tenant id. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **includeEventSubscriptionsWithoutTenantId** | **Boolean**| Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[EventSubscriptionDto]**](EventSubscriptionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventSubscriptionsCount"></a>
# **getEventSubscriptionsCount**
> CountResultDto getEventSubscriptionsCount(opts)

Get List Count

Queries for the number of event subscriptions that fulfill given parameters. Takes the same parameters as the [Get Event Subscriptions](https://docs.camunda.org/manual/develop/reference/rest/event-subscription/get-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.EventSubscriptionApi();
let opts = { 
  'eventSubscriptionId': "eventSubscriptionId_example", // String | Only select subscription with the given id.
  'eventName': "eventName_example", // String | Only select subscriptions for events with the given name.
  'eventType': "eventType_example", // String | Only select subscriptions for events with the given type. Valid values: `message`, `signal`, `compensate` and `conditional`.
  'executionId': "executionId_example", // String | Only select subscriptions that belong to an execution with the given id.
  'processInstanceId': "processInstanceId_example", // String | Only select subscriptions that belong to a process instance with the given id.
  'activityId': "activityId_example", // String | Only select subscriptions that belong to an activity with the given id.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only select subscriptions which have no tenant id. Value may only be `true`, as `false` is the default behavior.
  'includeEventSubscriptionsWithoutTenantId': true // Boolean | Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be `true`, as `false` is the default behavior.
};
apiInstance.getEventSubscriptionsCount(opts, (error, data, response) => {
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
 **eventSubscriptionId** | **String**| Only select subscription with the given id. | [optional] 
 **eventName** | **String**| Only select subscriptions for events with the given name. | [optional] 
 **eventType** | **String**| Only select subscriptions for events with the given type. Valid values: &#x60;message&#x60;, &#x60;signal&#x60;, &#x60;compensate&#x60; and &#x60;conditional&#x60;. | [optional] 
 **executionId** | **String**| Only select subscriptions that belong to an execution with the given id. | [optional] 
 **processInstanceId** | **String**| Only select subscriptions that belong to a process instance with the given id. | [optional] 
 **activityId** | **String**| Only select subscriptions that belong to an activity with the given id. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only select subscriptions which have no tenant id. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **includeEventSubscriptionsWithoutTenantId** | **Boolean**| Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

