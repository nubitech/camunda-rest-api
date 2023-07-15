# CamundaRestApi.TaskIdentityLinkApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addIdentityLink**](TaskIdentityLinkApi.md#addIdentityLink) | **POST** /task/{id}/identity-links | Add
[**deleteIdentityLink**](TaskIdentityLinkApi.md#deleteIdentityLink) | **POST** /task/{id}/identity-links/delete | Delete
[**getIdentityLinks**](TaskIdentityLinkApi.md#getIdentityLinks) | **GET** /task/{id}/identity-links | Get List

<a name="addIdentityLink"></a>
# **addIdentityLink**
> addIdentityLink(id, opts)

Add

Adds an identity link to a task by id. Can be used to link any user or group to a task and specify a relation.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskIdentityLinkApi();
let id = "id_example"; // String | The id of the task to add a link to.
let opts = { 
  'body': new CamundaRestApi.IdentityLinkDto() // IdentityLinkDto | 
};
apiInstance.addIdentityLink(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to add a link to. | 
 **body** | [**IdentityLinkDto**](IdentityLinkDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteIdentityLink"></a>
# **deleteIdentityLink**
> deleteIdentityLink(id, opts)

Delete

Removes an identity link from a task by id

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskIdentityLinkApi();
let id = "id_example"; // String | The id of the task to remove a link from.
let opts = { 
  'body': new CamundaRestApi.IdentityLinkDto() // IdentityLinkDto | 
};
apiInstance.deleteIdentityLink(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to remove a link from. | 
 **body** | [**IdentityLinkDto**](IdentityLinkDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIdentityLinks"></a>
# **getIdentityLinks**
> [IdentityLinkDto] getIdentityLinks(id, opts)

Get List

Gets the identity links for a task by id, which are the users and groups that are in *some* relation to it (including assignee and owner).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskIdentityLinkApi();
let id = "id_example"; // String | The id of the task to retrieve the identity links for.
let opts = { 
  'type': "type_example" // String | Filter by the type of links to include.
};
apiInstance.getIdentityLinks(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to retrieve the identity links for. | 
 **type** | **String**| Filter by the type of links to include. | [optional] 

### Return type

[**[IdentityLinkDto]**](IdentityLinkDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

