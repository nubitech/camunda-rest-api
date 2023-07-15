# CamundaRestApi.TaskAttachmentApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAttachment**](TaskAttachmentApi.md#addAttachment) | **POST** /task/{id}/attachment/create | Create
[**deleteAttachment**](TaskAttachmentApi.md#deleteAttachment) | **DELETE** /task/{id}/attachment/{attachmentId} | Delete
[**getAttachment**](TaskAttachmentApi.md#getAttachment) | **GET** /task/{id}/attachment/{attachmentId} | Get
[**getAttachmentData**](TaskAttachmentApi.md#getAttachmentData) | **GET** /task/{id}/attachment/{attachmentId}/data | Get (Binary)
[**getAttachments**](TaskAttachmentApi.md#getAttachments) | **GET** /task/{id}/attachment | Get List

<a name="addAttachment"></a>
# **addAttachment**
> AttachmentDto addAttachment(id, opts)

Create

Creates an attachment for a task.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskAttachmentApi();
let id = "id_example"; // String | The id of the task to add the attachment to.
let opts = { 
  'attachmentName': "attachmentName_example", // String | 
  'attachmentDescription': "attachmentDescription_example", // String | 
  'attachmentType': "attachmentType_example", // String | 
  'url': "url_example", // String | 
  'content': "content_example" // Blob | 
};
apiInstance.addAttachment(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to add the attachment to. | 
 **attachmentName** | **String**|  | [optional] 
 **attachmentDescription** | **String**|  | [optional] 
 **attachmentType** | **String**|  | [optional] 
 **url** | **String**|  | [optional] 
 **content** | **Blob**|  | [optional] 

### Return type

[**AttachmentDto**](AttachmentDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="deleteAttachment"></a>
# **deleteAttachment**
> deleteAttachment(id, attachmentId)

Delete

Removes an attachment from a task by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskAttachmentApi();
let id = "id_example"; // String | The id of the task.
let attachmentId = "attachmentId_example"; // String | The id of the attachment to be removed.

apiInstance.deleteAttachment(id, attachmentId, (error, data, response) => {
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
 **id** | **String**| The id of the task. | 
 **attachmentId** | **String**| The id of the attachment to be removed. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAttachment"></a>
# **getAttachment**
> AttachmentDto getAttachment(id, attachmentId)

Get

Retrieves a task attachment by task id and attachment id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskAttachmentApi();
let id = "id_example"; // String | The id of the task.
let attachmentId = "attachmentId_example"; // String | The id of the attachment to be retrieved.

apiInstance.getAttachment(id, attachmentId, (error, data, response) => {
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
 **id** | **String**| The id of the task. | 
 **attachmentId** | **String**| The id of the attachment to be retrieved. | 

### Return type

[**AttachmentDto**](AttachmentDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAttachmentData"></a>
# **getAttachmentData**
> &#x27;Blob&#x27; getAttachmentData(id, attachmentId)

Get (Binary)

Retrieves the binary content of a task attachment by task id and attachment id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskAttachmentApi();
let id = "id_example"; // String | The id of the task.
let attachmentId = "attachmentId_example"; // String | The id of the attachment to be retrieved.

apiInstance.getAttachmentData(id, attachmentId, (error, data, response) => {
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
 **id** | **String**| The id of the task. | 
 **attachmentId** | **String**| The id of the attachment to be retrieved. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, text/plain, application/json

<a name="getAttachments"></a>
# **getAttachments**
> [AttachmentDto] getAttachments(id)

Get List

Gets the attachments for a task.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskAttachmentApi();
let id = "id_example"; // String | The id of the task to retrieve the attachments for.

apiInstance.getAttachments(id, (error, data, response) => {
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
 **id** | **String**| The id of the task to retrieve the attachments for. | 

### Return type

[**[AttachmentDto]**](AttachmentDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

