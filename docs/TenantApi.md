# CamundaRestApi.TenantApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**availableTenantGroupMembersOperations**](TenantApi.md#availableTenantGroupMembersOperations) | **OPTIONS** /tenant/{id}/group-members | Tenant Group Membership Resource Options
[**availableTenantInstanceOperations**](TenantApi.md#availableTenantInstanceOperations) | **OPTIONS** /tenant/{id} | Tenant Resource Options
[**availableTenantResourceOperations**](TenantApi.md#availableTenantResourceOperations) | **OPTIONS** /tenant | Tenant Resource Options
[**availableTenantUserMembersOperations**](TenantApi.md#availableTenantUserMembersOperations) | **OPTIONS** /tenant/{id}/user-members | Tenant User Membership Resource Options
[**createGroupMembership**](TenantApi.md#createGroupMembership) | **PUT** /tenant/{id}/group-members/{groupId} | Create Tenant Group Membership
[**createTenant**](TenantApi.md#createTenant) | **POST** /tenant/create | Create Tenant
[**createUserMembership**](TenantApi.md#createUserMembership) | **PUT** /tenant/{id}/user-members/{userId} | Create Tenant User Membership
[**deleteGroupMembership**](TenantApi.md#deleteGroupMembership) | **DELETE** /tenant/{id}/group-members/{groupId} | Create Tenant Group Membership
[**deleteTenant**](TenantApi.md#deleteTenant) | **DELETE** /tenant/{id} | Delete Tenant
[**deleteUserMembership**](TenantApi.md#deleteUserMembership) | **DELETE** /tenant/{id}/user-members/{userId} | Delete a Tenant User Membership
[**getTenant**](TenantApi.md#getTenant) | **GET** /tenant/{id} | Get Tenant
[**getTenantCount**](TenantApi.md#getTenantCount) | **GET** /tenant/count | Get Tenant Count
[**queryTenants**](TenantApi.md#queryTenants) | **GET** /tenant | Get Tenants
[**updateTenant**](TenantApi.md#updateTenant) | **PUT** /tenant/{id} | Update Tenant

<a name="availableTenantGroupMembersOperations"></a>
# **availableTenantGroupMembersOperations**
> ResourceOptionsDto availableTenantGroupMembersOperations(id)

Tenant Group Membership Resource Options

The OPTIONS request allows checking for the set of available operations that the currently authenticated user can perform on the resource. If the user can perform an operation or not may depend on various things, including the users authorizations to interact with this resource and the internal configuration of the process engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TenantApi();
let id = "id_example"; // String | The id of the tenant

apiInstance.availableTenantGroupMembersOperations(id, (error, data, response) => {
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
 **id** | **String**| The id of the tenant | 

### Return type

[**ResourceOptionsDto**](ResourceOptionsDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="availableTenantInstanceOperations"></a>
# **availableTenantInstanceOperations**
> ResourceOptionsDto availableTenantInstanceOperations(id)

Tenant Resource Options

The &#x60;/tenant&#x60; resource supports two custom OPTIONS requests, one for the resource as such and this one for individual tenant instances. The OPTIONS request allows checking for the set of available operations that the currently authenticated user can perform on the &#x60;/tenant/{id}&#x60; resource. If the user can perform an operation or not may depend on various things, including the users authorizations to interact with this resource and the internal configuration of the process engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TenantApi();
let id = "id_example"; // String | The id of the tenant

apiInstance.availableTenantInstanceOperations(id, (error, data, response) => {
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
 **id** | **String**| The id of the tenant | 

### Return type

[**ResourceOptionsDto**](ResourceOptionsDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="availableTenantResourceOperations"></a>
# **availableTenantResourceOperations**
> ResourceOptionsDto availableTenantResourceOperations()

Tenant Resource Options

The &#x60;/tenant&#x60; resource supports two custom OPTIONS requests, this one for the resource as such and one for individual tenant instances. The OPTIONS request allows checking for the set of available operations that the currently authenticated user can perform on the &#x60;/tenant&#x60; resource. If the user can perform an operation or not may depend on various things, including the users authorizations to interact with this resource and the internal configuration of the process engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TenantApi();
apiInstance.availableTenantResourceOperations((error, data, response) => {
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

<a name="availableTenantUserMembersOperations"></a>
# **availableTenantUserMembersOperations**
> ResourceOptionsDto availableTenantUserMembersOperations(id)

Tenant User Membership Resource Options

The OPTIONS request allows checking for the set of available operations that the currently authenticated user can perform on the resource. If the user can perform an operation or not may depend on various things, including the users authorizations to interact with this resource and the internal configuration of the process engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TenantApi();
let id = "id_example"; // String | The id of the tenant

apiInstance.availableTenantUserMembersOperations(id, (error, data, response) => {
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
 **id** | **String**| The id of the tenant | 

### Return type

[**ResourceOptionsDto**](ResourceOptionsDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createGroupMembership"></a>
# **createGroupMembership**
> createGroupMembership(id, groupId)

Create Tenant Group Membership

Creates a membership between a tenant and a group.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TenantApi();
let id = "id_example"; // String | The id of the tenant.
let groupId = "groupId_example"; // String | The id of the group.

apiInstance.createGroupMembership(id, groupId, (error, data, response) => {
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
 **id** | **String**| The id of the tenant. | 
 **groupId** | **String**| The id of the group. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createTenant"></a>
# **createTenant**
> createTenant(opts)

Create Tenant

Create a new tenant.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TenantApi();
let opts = { 
  'body': new CamundaRestApi.TenantDto() // TenantDto | 
};
apiInstance.createTenant(opts, (error, data, response) => {
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
 **body** | [**TenantDto**](TenantDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserMembership"></a>
# **createUserMembership**
> createUserMembership(id, userId)

Create Tenant User Membership

Creates a membership between a tenant and an user.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TenantApi();
let id = "id_example"; // String | The id of the tenant.
let userId = "userId_example"; // String | The id of the user.

apiInstance.createUserMembership(id, userId, (error, data, response) => {
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
 **id** | **String**| The id of the tenant. | 
 **userId** | **String**| The id of the user. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteGroupMembership"></a>
# **deleteGroupMembership**
> deleteGroupMembership(id, groupId)

Create Tenant Group Membership

Creates a membership between a tenant and a group.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TenantApi();
let id = "id_example"; // String | The id of the tenant.
let groupId = "groupId_example"; // String | The id of the group.

apiInstance.deleteGroupMembership(id, groupId, (error, data, response) => {
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
 **id** | **String**| The id of the tenant. | 
 **groupId** | **String**| The id of the group. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTenant"></a>
# **deleteTenant**
> deleteTenant(id)

Delete Tenant

Deletes a tenant by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TenantApi();
let id = "id_example"; // String | The id of the tenant to be deleted.

apiInstance.deleteTenant(id, (error, data, response) => {
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
 **id** | **String**| The id of the tenant to be deleted. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteUserMembership"></a>
# **deleteUserMembership**
> deleteUserMembership(id, userId)

Delete a Tenant User Membership

Deletes a membership between a tenant and an user.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TenantApi();
let id = "id_example"; // String | The id of the tenant.
let userId = "userId_example"; // String | The id of the user.

apiInstance.deleteUserMembership(id, userId, (error, data, response) => {
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
 **id** | **String**| The id of the tenant. | 
 **userId** | **String**| The id of the user. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTenant"></a>
# **getTenant**
> TenantDto getTenant(id)

Get Tenant

Retrieves a tenant.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TenantApi();
let id = "id_example"; // String | The id of the tenant to be retrieved.

apiInstance.getTenant(id, (error, data, response) => {
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
 **id** | **String**| The id of the tenant to be retrieved. | 

### Return type

[**TenantDto**](TenantDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTenantCount"></a>
# **getTenantCount**
> CountResultDto getTenantCount(opts)

Get Tenant Count

Query for tenants using a list of parameters and retrieves the count.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TenantApi();
let opts = { 
  'id': "id_example", // String | Filter by the id of the tenant.
  'name': "name_example", // String | Filter by the name of the tenant.
  'nameLike': "nameLike_example", // String | Filter by the name that the parameter is a substring of.
  'userMember': "userMember_example", // String | Select only tenants where the given user is a member of.
  'groupMember': "groupMember_example", // String | Select only tenants where the given group is a member of.
  'includingGroupsOfUser': true // Boolean | Select only tenants where the user or one of his groups is a member of. Can only be used in combination with the `userMember` parameter. Value may only be `true`, as `false` is the default behavior.
};
apiInstance.getTenantCount(opts, (error, data, response) => {
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
 **id** | **String**| Filter by the id of the tenant. | [optional] 
 **name** | **String**| Filter by the name of the tenant. | [optional] 
 **nameLike** | **String**| Filter by the name that the parameter is a substring of. | [optional] 
 **userMember** | **String**| Select only tenants where the given user is a member of. | [optional] 
 **groupMember** | **String**| Select only tenants where the given group is a member of. | [optional] 
 **includingGroupsOfUser** | **Boolean**| Select only tenants where the user or one of his groups is a member of. Can only be used in combination with the &#x60;userMember&#x60; parameter. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queryTenants"></a>
# **queryTenants**
> [TenantDto] queryTenants(opts)

Get Tenants

Query for a list of tenants using a list of parameters. The size of the result set can be retrieved by using the [Get Tenant Count](https://docs.camunda.org/manual/develop/reference/rest/tenant/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TenantApi();
let opts = { 
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'id': "id_example", // String | Filter by the id of the tenant.
  'name': "name_example", // String | Filter by the name of the tenant.
  'nameLike': "nameLike_example", // String | Filter by the name that the parameter is a substring of.
  'userMember': "userMember_example", // String | Select only tenants where the given user is a member of.
  'groupMember': "groupMember_example", // String | Select only tenants where the given group is a member of.
  'includingGroupsOfUser': true // Boolean | Select only tenants where the user or one of his groups is a member of. Can only be used in combination with the `userMember` parameter. Value may only be `true`, as `false` is the default behavior.
};
apiInstance.queryTenants(opts, (error, data, response) => {
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
 **id** | **String**| Filter by the id of the tenant. | [optional] 
 **name** | **String**| Filter by the name of the tenant. | [optional] 
 **nameLike** | **String**| Filter by the name that the parameter is a substring of. | [optional] 
 **userMember** | **String**| Select only tenants where the given user is a member of. | [optional] 
 **groupMember** | **String**| Select only tenants where the given group is a member of. | [optional] 
 **includingGroupsOfUser** | **Boolean**| Select only tenants where the user or one of his groups is a member of. Can only be used in combination with the &#x60;userMember&#x60; parameter. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**[TenantDto]**](TenantDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTenant"></a>
# **updateTenant**
> updateTenant(id, opts)

Update Tenant

Updates a given tenant.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TenantApi();
let id = "id_example"; // String | The id of the tenant.
let opts = { 
  'body': new CamundaRestApi.TenantDto() // TenantDto | 
};
apiInstance.updateTenant(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the tenant. | 
 **body** | [**TenantDto**](TenantDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

