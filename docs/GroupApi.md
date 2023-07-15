# CamundaRestApi.GroupApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**availableGroupInstanceOperations**](GroupApi.md#availableGroupInstanceOperations) | **OPTIONS** /group/{id} | Group Resource Instance Options
[**availableGroupMembersOperations**](GroupApi.md#availableGroupMembersOperations) | **OPTIONS** /group/{id}/members | Group Membership Resource Options
[**availableGroupOperations**](GroupApi.md#availableGroupOperations) | **OPTIONS** /group | Group Resource Options
[**createGroup**](GroupApi.md#createGroup) | **POST** /group/create | Create Group
[**createGroupMember**](GroupApi.md#createGroupMember) | **PUT** /group/{id}/members/{userId} | Create Group Member
[**deleteGroup**](GroupApi.md#deleteGroup) | **DELETE** /group/{id} | Delete Group
[**deleteGroupMember**](GroupApi.md#deleteGroupMember) | **DELETE** /group/{id}/members/{userId} | Delete a Group Member
[**getGroup**](GroupApi.md#getGroup) | **GET** /group/{id} | Get Group
[**getGroupCount**](GroupApi.md#getGroupCount) | **GET** /group/count | Get List Count
[**getQueryGroups**](GroupApi.md#getQueryGroups) | **GET** /group | Get List
[**postQueryGroups**](GroupApi.md#postQueryGroups) | **POST** /group | Get List (POST)
[**queryGroupCount**](GroupApi.md#queryGroupCount) | **POST** /group/count | Get List Count (POST)
[**updateGroup**](GroupApi.md#updateGroup) | **PUT** /group/{id} | Update Group

<a name="availableGroupInstanceOperations"></a>
# **availableGroupInstanceOperations**
> ResourceOptionsDto availableGroupInstanceOperations(id)

Group Resource Instance Options

The &#x60;/group&#x60; resource supports two custom OPTIONS requests, one for the resource as such and this one for individual group instances. The OPTIONS request allows checking for the set of available operations that the currently authenticated user can perform on the &#x60;/group/{id}&#x60; resource instance. If the user can perform an operation or not may depend on various things, including the users authorizations to interact with this resource and the internal configuration of the process engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.GroupApi();
let id = "id_example"; // String | The id of the group.

apiInstance.availableGroupInstanceOperations(id, (error, data, response) => {
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
 **id** | **String**| The id of the group. | 

### Return type

[**ResourceOptionsDto**](ResourceOptionsDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="availableGroupMembersOperations"></a>
# **availableGroupMembersOperations**
> ResourceOptionsDto availableGroupMembersOperations(id)

Group Membership Resource Options

The OPTIONS request allows checking for the set of available operations that the currently authenticated user can perform on the resource. If the user can perform an operation or not may depend on various things, including the users authorizations to interact with this resource and the internal configuration of the process engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.GroupApi();
let id = "id_example"; // String | The id of the group.

apiInstance.availableGroupMembersOperations(id, (error, data, response) => {
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
 **id** | **String**| The id of the group. | 

### Return type

[**ResourceOptionsDto**](ResourceOptionsDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="availableGroupOperations"></a>
# **availableGroupOperations**
> ResourceOptionsDto availableGroupOperations()

Group Resource Options

The &#x60;/group&#x60; resource supports two custom OPTIONS requests, this one for the resource as such and one for individual group instances. The OPTIONS request allows checking for the set of available operations that the currently authenticated user can perform on the &#x60;/group&#x60; resource. If the user can perform an operation or not may depend on various things, including the users authorizations to interact with this resource and the internal configuration of the process engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.GroupApi();
apiInstance.availableGroupOperations((error, data, response) => {
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

<a name="createGroup"></a>
# **createGroup**
> createGroup(opts)

Create Group

Creates a new group.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.GroupApi();
let opts = { 
  'body': new CamundaRestApi.GroupDto() // GroupDto | 
};
apiInstance.createGroup(opts, (error, data, response) => {
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
 **body** | [**GroupDto**](GroupDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createGroupMember"></a>
# **createGroupMember**
> createGroupMember(id, userId)

Create Group Member

Adds a member to a group.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.GroupApi();
let id = "id_example"; // String | The id of the group.
let userId = "userId_example"; // String | The id of user to add to the group.

apiInstance.createGroupMember(id, userId, (error, data, response) => {
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
 **id** | **String**| The id of the group. | 
 **userId** | **String**| The id of user to add to the group. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(id)

Delete Group

Deletes a group by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.GroupApi();
let id = "id_example"; // String | The id of the group to be deleted.

apiInstance.deleteGroup(id, (error, data, response) => {
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
 **id** | **String**| The id of the group to be deleted. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteGroupMember"></a>
# **deleteGroupMember**
> deleteGroupMember(id, userId)

Delete a Group Member

Removes a member from a group.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.GroupApi();
let id = "id_example"; // String | The id of the group.
let userId = "userId_example"; // String | The id of user to remove from the group.

apiInstance.deleteGroupMember(id, userId, (error, data, response) => {
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
 **id** | **String**| The id of the group. | 
 **userId** | **String**| The id of user to remove from the group. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGroup"></a>
# **getGroup**
> GroupDto getGroup(id)

Get Group

Retrieves a group by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.GroupApi();
let id = "id_example"; // String | The id of the group to be retrieved.

apiInstance.getGroup(id, (error, data, response) => {
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
 **id** | **String**| The id of the group to be retrieved. | 

### Return type

[**GroupDto**](GroupDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGroupCount"></a>
# **getGroupCount**
> CountResultDto getGroupCount(opts)

Get List Count

Queries for groups using a list of parameters and retrieves the count.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.GroupApi();
let opts = { 
  'id': "id_example", // String | Filter by the id of the group.
  'idIn': "idIn_example", // String | Filter by a comma seperated list of group ids.
  'name': "name_example", // String | Filter by the name of the group.
  'nameLike': "nameLike_example", // String | Filter by the name that the parameter is a substring of.
  'type': "type_example", // String | Filter by the type of the group.
  'member': "member_example", // String | Only retrieve groups where the given user id is a member of.
  'memberOfTenant': "memberOfTenant_example" // String | Only retrieve groups which are members of the given tenant.
};
apiInstance.getGroupCount(opts, (error, data, response) => {
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
 **id** | **String**| Filter by the id of the group. | [optional] 
 **idIn** | **String**| Filter by a comma seperated list of group ids. | [optional] 
 **name** | **String**| Filter by the name of the group. | [optional] 
 **nameLike** | **String**| Filter by the name that the parameter is a substring of. | [optional] 
 **type** | **String**| Filter by the type of the group. | [optional] 
 **member** | **String**| Only retrieve groups where the given user id is a member of. | [optional] 
 **memberOfTenant** | **String**| Only retrieve groups which are members of the given tenant. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQueryGroups"></a>
# **getQueryGroups**
> [GroupDto] getQueryGroups(opts)

Get List

Queries for a list of groups using a list of parameters. The size of the result set can be retrieved by using the [Get Group Count](https://docs.camunda.org/manual/develop/reference/rest/group/get-query-count) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.GroupApi();
let opts = { 
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'id': "id_example", // String | Filter by the id of the group.
  'idIn': "idIn_example", // String | Filter by a comma seperated list of group ids.
  'name': "name_example", // String | Filter by the name of the group.
  'nameLike': "nameLike_example", // String | Filter by the name that the parameter is a substring of.
  'type': "type_example", // String | Filter by the type of the group.
  'member': "member_example", // String | Only retrieve groups where the given user id is a member of.
  'memberOfTenant': "memberOfTenant_example" // String | Only retrieve groups which are members of the given tenant.
};
apiInstance.getQueryGroups(opts, (error, data, response) => {
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
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 
 **id** | **String**| Filter by the id of the group. | [optional] 
 **idIn** | **String**| Filter by a comma seperated list of group ids. | [optional] 
 **name** | **String**| Filter by the name of the group. | [optional] 
 **nameLike** | **String**| Filter by the name that the parameter is a substring of. | [optional] 
 **type** | **String**| Filter by the type of the group. | [optional] 
 **member** | **String**| Only retrieve groups where the given user id is a member of. | [optional] 
 **memberOfTenant** | **String**| Only retrieve groups which are members of the given tenant. | [optional] 

### Return type

[**[GroupDto]**](GroupDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postQueryGroups"></a>
# **postQueryGroups**
> [GroupDto] postQueryGroups(opts)

Get List (POST)

Queries for a list of groups using a list of parameters. The size of the result set can be retrieved by using the [Get Group Count (POST)](https://docs.camunda.org/manual/develop/reference/rest/group/post-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.GroupApi();
let opts = { 
  'body': new CamundaRestApi.GroupQueryDto(), // GroupQueryDto | 
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.postQueryGroups(opts, (error, data, response) => {
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
 **body** | [**GroupQueryDto**](GroupQueryDto.md)|  | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[GroupDto]**](GroupDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryGroupCount"></a>
# **queryGroupCount**
> CountResultDto queryGroupCount(opts)

Get List Count (POST)

Queries for groups using a list of parameters and retrieves the count.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.GroupApi();
let opts = { 
  'body': new CamundaRestApi.GroupQueryDto() // GroupQueryDto | 
};
apiInstance.queryGroupCount(opts, (error, data, response) => {
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
 **body** | [**GroupQueryDto**](GroupQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateGroup"></a>
# **updateGroup**
> updateGroup(id, opts)

Update Group

Updates a given group by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.GroupApi();
let id = "id_example"; // String | The id of the group.
let opts = { 
  'body': new CamundaRestApi.GroupDto() // GroupDto | 
};
apiInstance.updateGroup(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the group. | 
 **body** | [**GroupDto**](GroupDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

