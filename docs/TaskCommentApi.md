# CamundaRestApi.TaskCommentApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createComment**](TaskCommentApi.md#createComment) | **POST** /task/{id}/comment/create | Create
[**getComment**](TaskCommentApi.md#getComment) | **GET** /task/{id}/comment/{commentId} | Get
[**getComments**](TaskCommentApi.md#getComments) | **GET** /task/{id}/comment | Get List

<a name="createComment"></a>
# **createComment**
> CommentDto createComment(id, opts)

Create

Creates a comment for a task by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskCommentApi();
let id = "id_example"; // String | The id of the task to add the comment to.
let opts = { 
  'body': new CamundaRestApi.CommentDto() // CommentDto | **Note:** Only the `message` and `processInstanceId` properties will be used. Every other property passed to this endpoint will be ignored.
};
apiInstance.createComment(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to add the comment to. | 
 **body** | [**CommentDto**](CommentDto.md)| **Note:** Only the &#x60;message&#x60; and &#x60;processInstanceId&#x60; properties will be used. Every other property passed to this endpoint will be ignored. | [optional] 

### Return type

[**CommentDto**](CommentDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getComment"></a>
# **getComment**
> CommentDto getComment(id, commentId)

Get

Retrieves a task comment by task id and comment id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskCommentApi();
let id = "id_example"; // String | The id of the task.
let commentId = "commentId_example"; // String | The id of the comment to be retrieved.

apiInstance.getComment(id, commentId, (error, data, response) => {
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
 **commentId** | **String**| The id of the comment to be retrieved. | 

### Return type

[**CommentDto**](CommentDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getComments"></a>
# **getComments**
> [CommentDto] getComments(id)

Get List

Gets the comments for a task by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskCommentApi();
let id = "id_example"; // String | The id of the task to retrieve the comments for.

apiInstance.getComments(id, (error, data, response) => {
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
 **id** | **String**| The id of the task to retrieve the comments for. | 

### Return type

[**[CommentDto]**](CommentDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

