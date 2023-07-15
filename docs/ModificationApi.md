# CamundaRestApi.ModificationApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**executeModification**](ModificationApi.md#executeModification) | **POST** /modification/execute | Execute Modification
[**executeModificationAsync**](ModificationApi.md#executeModificationAsync) | **POST** /modification/executeAsync | Execute Modification Async (Batch)

<a name="executeModification"></a>
# **executeModification**
> executeModification(opts)

Execute Modification

Executes a modification synchronously for multiple process instances. To modify a single process instance, use the [Modify Process Instance Execution State](https://docs.camunda.org/manual/develop/reference/rest/process-instance/post-modification/) method. To execute a modification asynchronously, use the [Execute Modification Async (Batch)](https://docs.camunda.org/manual/develop/reference/rest/modification/post-modification-async/) method.  For more information about the difference between synchronous and asynchronous execution of a modification, please refer to the related section of the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/process-instance-migration.md#executing-a-migration-plan).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ModificationApi();
let opts = { 
  'body': new CamundaRestApi.ModificationDto() // ModificationDto | 
};
apiInstance.executeModification(opts, (error, data, response) => {
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
 **body** | [**ModificationDto**](ModificationDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="executeModificationAsync"></a>
# **executeModificationAsync**
> BatchDto executeModificationAsync(opts)

Execute Modification Async (Batch)

Executes a modification asynchronously for multiple process instances. To execute a modification synchronously, use the [Execute Modification](https://docs.camunda.org/manual/develop/reference/rest/modification/post-modification-sync/) method.  For more information about the difference between synchronous and asynchronous execution of a modification, please refer to the related section of the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/process-instance-migration.md#executing-a-migration-plan).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.ModificationApi();
let opts = { 
  'body': new CamundaRestApi.ModificationDto() // ModificationDto | 
};
apiInstance.executeModificationAsync(opts, (error, data, response) => {
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
 **body** | [**ModificationDto**](ModificationDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

