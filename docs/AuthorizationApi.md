# CamundaRestApi.AuthorizationApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**availableOperationsAuthorization**](AuthorizationApi.md#availableOperationsAuthorization) | **OPTIONS** /authorization | Authorization Resource Options
[**availableOperationsAuthorizationInstance**](AuthorizationApi.md#availableOperationsAuthorizationInstance) | **OPTIONS** /authorization/{id} | Authorization Resource Options
[**createAuthorization**](AuthorizationApi.md#createAuthorization) | **POST** /authorization/create | Create a New Authorization
[**deleteAuthorization**](AuthorizationApi.md#deleteAuthorization) | **DELETE** /authorization/{id} | Delete Authorization
[**getAuthorization**](AuthorizationApi.md#getAuthorization) | **GET** /authorization/{id} | Get Authorization
[**getAuthorizationCount**](AuthorizationApi.md#getAuthorizationCount) | **GET** /authorization/count | Get Authorization Count
[**isUserAuthorized**](AuthorizationApi.md#isUserAuthorized) | **GET** /authorization/check | Perform an Authorization Check
[**queryAuthorizations**](AuthorizationApi.md#queryAuthorizations) | **GET** /authorization | Get Authorizations
[**updateAuthorization**](AuthorizationApi.md#updateAuthorization) | **PUT** /authorization/{id} | Update an Authorization

<a name="availableOperationsAuthorization"></a>
# **availableOperationsAuthorization**
> ResourceOptionsDto availableOperationsAuthorization()

Authorization Resource Options

The OPTIONS request allows you to check for the set of available operations that the currently authenticated user can perform on the &#x60;/authorization&#x60; resource. Whether the user can perform an operation or not may depend on various factors, including the users authorizations to interact with this resource and the internal configuration of the process engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.AuthorizationApi();
apiInstance.availableOperationsAuthorization((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResourceOptionsDto**](ResourceOptionsDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="availableOperationsAuthorizationInstance"></a>
# **availableOperationsAuthorizationInstance**
> ResourceOptionsDto availableOperationsAuthorizationInstance(id)

Authorization Resource Options

The OPTIONS request allows you to check for the set of available operations that the currently authenticated user can perform on a given instance of the &#x60;/authorization&#x60; resource. Whether the user can perform an operation or not may depend on various factors, including the users authorizations to interact with this resource and the internal configuration of the process engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.AuthorizationApi();
let id = "id_example"; // String | The id of the authorization to be retrieved.

apiInstance.availableOperationsAuthorizationInstance(id, (error, data, response) => {
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
 **id** | **String**| The id of the authorization to be retrieved. | 

### Return type

[**ResourceOptionsDto**](ResourceOptionsDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createAuthorization"></a>
# **createAuthorization**
> AuthorizationDto createAuthorization(opts)

Create a New Authorization

Creates a new authorization.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.AuthorizationApi();
let opts = { 
  'body': new CamundaRestApi.AuthorizationCreateDto() // AuthorizationCreateDto | 
};
apiInstance.createAuthorization(opts, (error, data, response) => {
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
 **body** | [**AuthorizationCreateDto**](AuthorizationCreateDto.md)|  | [optional] 

### Return type

[**AuthorizationDto**](AuthorizationDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAuthorization"></a>
# **deleteAuthorization**
> deleteAuthorization(id)

Delete Authorization

Deletes an authorization by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.AuthorizationApi();
let id = "id_example"; // String | The id of the authorization to be deleted.

apiInstance.deleteAuthorization(id, (error, data, response) => {
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
 **id** | **String**| The id of the authorization to be deleted. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAuthorization"></a>
# **getAuthorization**
> AuthorizationDto getAuthorization(id)

Get Authorization

Retrieves an authorization by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.AuthorizationApi();
let id = "id_example"; // String | The id of the authorization to be retrieved.

apiInstance.getAuthorization(id, (error, data, response) => {
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
 **id** | **String**| The id of the authorization to be retrieved. | 

### Return type

[**AuthorizationDto**](AuthorizationDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAuthorizationCount"></a>
# **getAuthorizationCount**
> CountResultDto getAuthorizationCount(opts)

Get Authorization Count

Queries for authorizations using a list of parameters and retrieves the count.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.AuthorizationApi();
let opts = { 
  'id': "id_example", // String | Filter by the id of the authorization.
  'type': 56, // Number | Filter by authorization type. (0=global, 1=grant, 2=revoke). See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/authorization-service/#authorization-type) for more information about authorization types.
  'userIdIn': "userIdIn_example", // String | Filter by a comma-separated list of userIds.
  'groupIdIn': "groupIdIn_example", // String | Filter by a comma-separated list of groupIds.
  'resourceType': 56, // Number | Filter by an integer representation of the resource type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/authorization-service/#resources) for a list of integer representations of resource types.
  'resourceId': "resourceId_example" // String | Filter by resource id.
};
apiInstance.getAuthorizationCount(opts, (error, data, response) => {
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
 **id** | **String**| Filter by the id of the authorization. | [optional] 
 **type** | **Number**| Filter by authorization type. (0&#x3D;global, 1&#x3D;grant, 2&#x3D;revoke). See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/authorization-service/#authorization-type) for more information about authorization types. | [optional] 
 **userIdIn** | **String**| Filter by a comma-separated list of userIds. | [optional] 
 **groupIdIn** | **String**| Filter by a comma-separated list of groupIds. | [optional] 
 **resourceType** | **Number**| Filter by an integer representation of the resource type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/authorization-service/#resources) for a list of integer representations of resource types. | [optional] 
 **resourceId** | **String**| Filter by resource id. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="isUserAuthorized"></a>
# **isUserAuthorized**
> AuthorizationCheckResultDto isUserAuthorized(permissionName, resourceName, resourceType, opts)

Perform an Authorization Check

Performs an authorization check for the currently authenticated user.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.AuthorizationApi();
let permissionName = "permissionName_example"; // String | String value representing the permission name to check for.
let resourceName = "resourceName_example"; // String | String value for the name of the resource to check permissions for.
let resourceType = 56; // Number | An integer representing the resource type to check permissions for. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/authorization-service/#resources) for a list of integer representations of resource types.
let opts = { 
  'resourceId': "resourceId_example", // String | The id of the resource to check permissions for. If left blank, a check for global permissions on the resource is performed.
  'userId': "userId_example" // String | The id of the user to check permissions for. The currently authenticated user must have a READ permission for the Authorization resource. If `userId` is blank, a check for the currently authenticated user is performed.
};
apiInstance.isUserAuthorized(permissionName, resourceName, resourceType, opts, (error, data, response) => {
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
 **permissionName** | **String**| String value representing the permission name to check for. | 
 **resourceName** | **String**| String value for the name of the resource to check permissions for. | 
 **resourceType** | **Number**| An integer representing the resource type to check permissions for. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/authorization-service/#resources) for a list of integer representations of resource types. | 
 **resourceId** | **String**| The id of the resource to check permissions for. If left blank, a check for global permissions on the resource is performed. | [optional] 
 **userId** | **String**| The id of the user to check permissions for. The currently authenticated user must have a READ permission for the Authorization resource. If &#x60;userId&#x60; is blank, a check for the currently authenticated user is performed. | [optional] 

### Return type

[**AuthorizationCheckResultDto**](AuthorizationCheckResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queryAuthorizations"></a>
# **queryAuthorizations**
> [AuthorizationDto] queryAuthorizations(opts)

Get Authorizations

Queries for a list of authorizations using a list of parameters. The size of the result set can be retrieved by using the [Get Authorization Count](https://docs.camunda.org/manual/develop/reference/rest/authorization/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.AuthorizationApi();
let opts = { 
  'id': "id_example", // String | Filter by the id of the authorization.
  'type': 56, // Number | Filter by authorization type. (0=global, 1=grant, 2=revoke). See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/authorization-service/#authorization-type) for more information about authorization types.
  'userIdIn': "userIdIn_example", // String | Filter by a comma-separated list of userIds.
  'groupIdIn': "groupIdIn_example", // String | Filter by a comma-separated list of groupIds.
  'resourceType': 56, // Number | Filter by an integer representation of the resource type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/authorization-service/#resources) for a list of integer representations of resource types.
  'resourceId': "resourceId_example", // String | Filter by resource id.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.queryAuthorizations(opts, (error, data, response) => {
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
 **id** | **String**| Filter by the id of the authorization. | [optional] 
 **type** | **Number**| Filter by authorization type. (0&#x3D;global, 1&#x3D;grant, 2&#x3D;revoke). See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/authorization-service/#authorization-type) for more information about authorization types. | [optional] 
 **userIdIn** | **String**| Filter by a comma-separated list of userIds. | [optional] 
 **groupIdIn** | **String**| Filter by a comma-separated list of groupIds. | [optional] 
 **resourceType** | **Number**| Filter by an integer representation of the resource type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/authorization-service/#resources) for a list of integer representations of resource types. | [optional] 
 **resourceId** | **String**| Filter by resource id. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[AuthorizationDto]**](AuthorizationDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAuthorization"></a>
# **updateAuthorization**
> updateAuthorization(id, opts)

Update an Authorization

Updates an authorization by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.AuthorizationApi();
let id = "id_example"; // String | The id of the authorization to be updated.
let opts = { 
  'body': new CamundaRestApi.AuthorizationUpdateDto() // AuthorizationUpdateDto | 
};
apiInstance.updateAuthorization(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the authorization to be updated. | 
 **body** | [**AuthorizationUpdateDto**](AuthorizationUpdateDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

