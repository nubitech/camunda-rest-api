# CamundaRestApi.UserApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**availableOperations**](UserApi.md#availableOperations) | **OPTIONS** /user | Options
[**availableUserOperations**](UserApi.md#availableUserOperations) | **OPTIONS** /user/{id} | Options
[**createUser**](UserApi.md#createUser) | **POST** /user/create | Create
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /user/{id} | Delete
[**getUserCount**](UserApi.md#getUserCount) | **GET** /user/count | Get List Count
[**getUserProfile**](UserApi.md#getUserProfile) | **GET** /user/{id}/profile | Get Profile
[**getUsers**](UserApi.md#getUsers) | **GET** /user | Get List
[**unlockUser**](UserApi.md#unlockUser) | **POST** /user/{id}/unlock | Unlock User
[**updateCredentials**](UserApi.md#updateCredentials) | **PUT** /user/{id}/credentials | Update Credentials
[**updateProfile**](UserApi.md#updateProfile) | **PUT** /user/{id}/profile | Update User Profile

<a name="availableOperations"></a>
# **availableOperations**
> ResourceOptionsDto availableOperations()

Options

The &#x60;/user&#x60; resource supports two custom &#x60;OPTIONS&#x60; requests, one for the resource as such and one for individual user instances. The &#x60;OPTIONS&#x60; request allows checking for the set of available operations that the currently authenticated user can perform on the /user resource. If the user can perform an operation or not may depend on various things, including the user&#x27;s authorizations to interact with this resource and the internal configuration of the process engine. &#x60;OPTIONS /user&#x60; returns available interactions on the resource.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.UserApi();
apiInstance.availableOperations((error, data, response) => {
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

<a name="availableUserOperations"></a>
# **availableUserOperations**
> ResourceOptionsDto availableUserOperations(id)

Options

The &#x60;/user&#x60; resource supports two custom &#x60;OPTIONS&#x60; requests, one for the resource as such and one for individual user instances. The &#x60;OPTIONS&#x60; request allows checking for the set of available operations that the currently authenticated user can perform on the /user resource. If the user can perform an operation or not may depend on various things, including the user&#x27;s authorizations to interact with this resource and the internal configuration of the process engine. &#x60;OPTIONS /user/{id}&#x60; returns available interactions on a resource instance.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.UserApi();
let id = "id_example"; // String | The id of the user to be deleted.

apiInstance.availableUserOperations(id, (error, data, response) => {
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
 **id** | **String**| The id of the user to be deleted. | 

### Return type

[**ResourceOptionsDto**](ResourceOptionsDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createUser"></a>
# **createUser**
> createUser(opts)

Create

Create a new user.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.UserApi();
let opts = { 
  'body': new CamundaRestApi.UserDto() // UserDto | 
};
apiInstance.createUser(opts, (error, data, response) => {
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
 **body** | [**UserDto**](UserDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(id)

Delete

Deletes a user by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.UserApi();
let id = "id_example"; // String | The id of the user to be deleted.

apiInstance.deleteUser(id, (error, data, response) => {
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
 **id** | **String**| The id of the user to be deleted. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserCount"></a>
# **getUserCount**
> CountResultDto getUserCount(opts)

Get List Count

Queries for the number of deployments that fulfill given parameters. Takes the same parameters as the [Get Users](https://docs.camunda.org/manual/develop/reference/rest/user/get-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.UserApi();
let opts = { 
  'id': "id_example", // String | Filter by user id
  'idIn': "idIn_example", // String | Filter by a comma-separated list of user ids.
  'firstName': "firstName_example", // String | Filter by the first name of the user. Exact match.
  'firstNameLike': "firstNameLike_example", // String | Filter by the first name that the parameter is a substring of.
  'lastName': "lastName_example", // String | Filter by the last name of the user. Exact match.
  'lastNameLike': "lastNameLike_example", // String | Filter by the last name that the parameter is a substring of.
  'email': "email_example", // String | Filter by the email of the user. Exact match.
  'emailLike': "emailLike_example", // String | Filter by the email that the parameter is a substring of.
  'memberOfGroup': "memberOfGroup_example", // String | Filter for users which are members of the given group.
  'memberOfTenant': "memberOfTenant_example", // String | Filter for users which are members of the given tenant.
  'potentialStarter': "potentialStarter_example" // String | Only select Users that are potential starter for the given process definition.
};
apiInstance.getUserCount(opts, (error, data, response) => {
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
 **id** | **String**| Filter by user id | [optional] 
 **idIn** | **String**| Filter by a comma-separated list of user ids. | [optional] 
 **firstName** | **String**| Filter by the first name of the user. Exact match. | [optional] 
 **firstNameLike** | **String**| Filter by the first name that the parameter is a substring of. | [optional] 
 **lastName** | **String**| Filter by the last name of the user. Exact match. | [optional] 
 **lastNameLike** | **String**| Filter by the last name that the parameter is a substring of. | [optional] 
 **email** | **String**| Filter by the email of the user. Exact match. | [optional] 
 **emailLike** | **String**| Filter by the email that the parameter is a substring of. | [optional] 
 **memberOfGroup** | **String**| Filter for users which are members of the given group. | [optional] 
 **memberOfTenant** | **String**| Filter for users which are members of the given tenant. | [optional] 
 **potentialStarter** | **String**| Only select Users that are potential starter for the given process definition. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserProfile"></a>
# **getUserProfile**
> UserProfileDto getUserProfile(id)

Get Profile

Retrieves a user&#x27;s profile.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.UserApi();
let id = "id_example"; // String | The id of the user to retrieve.

apiInstance.getUserProfile(id, (error, data, response) => {
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
 **id** | **String**| The id of the user to retrieve. | 

### Return type

[**UserProfileDto**](UserProfileDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> [UserProfileDto] getUsers(opts)

Get List

Query for a list of users using a list of parameters. The size of the result set can be retrieved by using the Get User Count method. [Get User Count](https://docs.camunda.org/manual/develop/reference/rest/user/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.UserApi();
let opts = { 
  'id': "id_example", // String | Filter by user id
  'idIn': "idIn_example", // String | Filter by a comma-separated list of user ids.
  'firstName': "firstName_example", // String | Filter by the first name of the user. Exact match.
  'firstNameLike': "firstNameLike_example", // String | Filter by the first name that the parameter is a substring of.
  'lastName': "lastName_example", // String | Filter by the last name of the user. Exact match.
  'lastNameLike': "lastNameLike_example", // String | Filter by the last name that the parameter is a substring of.
  'email': "email_example", // String | Filter by the email of the user. Exact match.
  'emailLike': "emailLike_example", // String | Filter by the email that the parameter is a substring of.
  'memberOfGroup': "memberOfGroup_example", // String | Filter for users which are members of the given group.
  'memberOfTenant': "memberOfTenant_example", // String | Filter for users which are members of the given tenant.
  'potentialStarter': "potentialStarter_example", // String | Only select Users that are potential starter for the given process definition.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getUsers(opts, (error, data, response) => {
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
 **id** | **String**| Filter by user id | [optional] 
 **idIn** | **String**| Filter by a comma-separated list of user ids. | [optional] 
 **firstName** | **String**| Filter by the first name of the user. Exact match. | [optional] 
 **firstNameLike** | **String**| Filter by the first name that the parameter is a substring of. | [optional] 
 **lastName** | **String**| Filter by the last name of the user. Exact match. | [optional] 
 **lastNameLike** | **String**| Filter by the last name that the parameter is a substring of. | [optional] 
 **email** | **String**| Filter by the email of the user. Exact match. | [optional] 
 **emailLike** | **String**| Filter by the email that the parameter is a substring of. | [optional] 
 **memberOfGroup** | **String**| Filter for users which are members of the given group. | [optional] 
 **memberOfTenant** | **String**| Filter for users which are members of the given tenant. | [optional] 
 **potentialStarter** | **String**| Only select Users that are potential starter for the given process definition. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[UserProfileDto]**](UserProfileDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="unlockUser"></a>
# **unlockUser**
> unlockUser(id)

Unlock User

Unlocks a user by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.UserApi();
let id = "id_example"; // String | The id of the user to be unlocked.

apiInstance.unlockUser(id, (error, data, response) => {
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
 **id** | **String**| The id of the user to be unlocked. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCredentials"></a>
# **updateCredentials**
> updateCredentials(id, opts)

Update Credentials

Updates a user&#x27;s credentials (password)

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.UserApi();
let id = "id_example"; // String | The id of the user to be updated.
let opts = { 
  'body': new CamundaRestApi.UserCredentialsDto() // UserCredentialsDto | 
};
apiInstance.updateCredentials(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the user to be updated. | 
 **body** | [**UserCredentialsDto**](UserCredentialsDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProfile"></a>
# **updateProfile**
> updateProfile(id, opts)

Update User Profile

Updates the profile information of an already existing user.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.UserApi();
let id = "id_example"; // String | The id of the user.
let opts = { 
  'body': new CamundaRestApi.UserProfileDto() // UserProfileDto | 
};
apiInstance.updateProfile(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the user. | 
 **body** | [**UserProfileDto**](UserProfileDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

