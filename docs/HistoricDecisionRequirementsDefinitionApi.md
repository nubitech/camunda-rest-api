# CamundaRestApi.HistoricDecisionRequirementsDefinitionApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDecisionStatistics**](HistoricDecisionRequirementsDefinitionApi.md#getDecisionStatistics) | **GET** /history/decision-requirements-definition/{id}/statistics | Get DRD Statistics

<a name="getDecisionStatistics"></a>
# **getDecisionStatistics**
> [HistoricDecisionInstanceStatisticsDto] getDecisionStatistics(id, opts)

Get DRD Statistics

Retrieves evaluation statistics of a given decision requirements definition.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricDecisionRequirementsDefinitionApi();
let id = "id_example"; // String | The id of the decision requirements definition.
let opts = { 
  'decisionInstanceId': "decisionInstanceId_example" // String | Restrict query results to be based only on specific evaluation instance of a given decision requirements definition.
};
apiInstance.getDecisionStatistics(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the decision requirements definition. | 
 **decisionInstanceId** | **String**| Restrict query results to be based only on specific evaluation instance of a given decision requirements definition. | [optional] 

### Return type

[**[HistoricDecisionInstanceStatisticsDto]**](HistoricDecisionInstanceStatisticsDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

