# CamundaRestApi.MessageApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deliverMessage**](MessageApi.md#deliverMessage) | **POST** /message | Correlate

<a name="deliverMessage"></a>
# **deliverMessage**
> [MessageCorrelationResultWithVariableDto] deliverMessage(opts)

Correlate

Correlates a message to the process engine to either trigger a message start event or an intermediate message  catching event. Internally this maps to the engine&#x27;s message correlation builder methods &#x60;MessageCorrelationBuilder#correlateWithResult()&#x60; and &#x60;MessageCorrelationBuilder#correlateAllWithResult()&#x60;. For more information about the correlation behavior, see the [Message Events](https://docs.camunda.org/manual/develop/bpmn20/events/message-events/) section of the [BPMN 2.0 Implementation Reference](https://docs.camunda.org/manual/develop/reference/bpmn20/).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.MessageApi();
let opts = { 
  'body': new CamundaRestApi.CorrelationMessageDto() // CorrelationMessageDto | 
};
apiInstance.deliverMessage(opts, (error, data, response) => {
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
 **body** | [**CorrelationMessageDto**](CorrelationMessageDto.md)|  | [optional] 

### Return type

[**[MessageCorrelationResultWithVariableDto]**](MessageCorrelationResultWithVariableDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

