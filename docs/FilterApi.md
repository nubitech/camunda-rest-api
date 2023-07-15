# CamundaRestApi.FilterApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFilter**](FilterApi.md#createFilter) | **POST** /filter/create | Create Filter
[**deleteFilter**](FilterApi.md#deleteFilter) | **DELETE** /filter/{id} | Delete Filter
[**executeFilterCount**](FilterApi.md#executeFilterCount) | **GET** /filter/{id}/count | Execute Filter Count
[**executeFilterList**](FilterApi.md#executeFilterList) | **GET** /filter/{id}/list | Execute Filter List
[**executeFilterSingleResult**](FilterApi.md#executeFilterSingleResult) | **GET** /filter/{id}/singleResult | Execute Filter Single Result
[**filterResourceOptions**](FilterApi.md#filterResourceOptions) | **OPTIONS** /filter | Filter Resource Options
[**filterResourceOptionsSingle**](FilterApi.md#filterResourceOptionsSingle) | **OPTIONS** /filter/{id} | Filter Resource Options
[**getFilterCount**](FilterApi.md#getFilterCount) | **GET** /filter/count | Get Filter Count
[**getFilterList**](FilterApi.md#getFilterList) | **GET** /filter | Get Filters
[**getSingleFilter**](FilterApi.md#getSingleFilter) | **GET** /filter/{id} | Get Single Filter
[**postExecuteFilterCount**](FilterApi.md#postExecuteFilterCount) | **POST** /filter/{id}/count | Execute Filter Count (POST)
[**postExecuteFilterList**](FilterApi.md#postExecuteFilterList) | **POST** /filter/{id}/list | Execute Filter List (POST)
[**postExecuteFilterSingleResult**](FilterApi.md#postExecuteFilterSingleResult) | **POST** /filter/{id}/singleResult | Execute Filter Single Result (POST)
[**updateFilter**](FilterApi.md#updateFilter) | **PUT** /filter/{id} | Update Filter

<a name="createFilter"></a>
# **createFilter**
> FilterDto createFilter(opts)

Create Filter

Creates a new filter.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.FilterApi();
let opts = { 
  'body': new CamundaRestApi.CreateFilterDto() // CreateFilterDto | 
};
apiInstance.createFilter(opts, (error, data, response) => {
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
 **body** | [**CreateFilterDto**](CreateFilterDto.md)|  | [optional] 

### Return type

[**FilterDto**](FilterDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFilter"></a>
# **deleteFilter**
> deleteFilter(id)

Delete Filter

Deletes a filter by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.FilterApi();
let id = "id_example"; // String | The id of the filter to be deleted.

apiInstance.deleteFilter(id, (error, data, response) => {
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
 **id** | **String**| The id of the filter to be deleted. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="executeFilterCount"></a>
# **executeFilterCount**
> CountResultDto executeFilterCount(id)

Execute Filter Count

Executes the saved query of the filter by id and returns the count.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.FilterApi();
let id = "id_example"; // String | The id of the filter to execute.

apiInstance.executeFilterCount(id, (error, data, response) => {
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
 **id** | **String**| The id of the filter to execute. | 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="executeFilterList"></a>
# **executeFilterList**
> [Object] executeFilterList(id, opts)

Execute Filter List

Executes the saved query of the filter by id and returns the result list.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.FilterApi();
let id = "id_example"; // String | The id of the filter to execute.
let opts = { 
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.executeFilterList(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the filter to execute. | 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

**[Object]**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="executeFilterSingleResult"></a>
# **executeFilterSingleResult**
> Object executeFilterSingleResult(id)

Execute Filter Single Result

Executes the saved query of the filter by id and returns the single result.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.FilterApi();
let id = "id_example"; // String | The id of the filter to execute.

apiInstance.executeFilterSingleResult(id, (error, data, response) => {
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
 **id** | **String**| The id of the filter to execute. | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="filterResourceOptions"></a>
# **filterResourceOptions**
> ResourceOptionsDto filterResourceOptions()

Filter Resource Options

The OPTIONS request allows you to check for the set of available operations  that the currently authenticated user can perform on the &#x60;/filter&#x60; resource. Whether the user can perform an operation or not may depend on various factors, including the users authorizations to interact with this resource and the internal configuration of the process engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.FilterApi();
apiInstance.filterResourceOptions((error, data, response) => {
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

<a name="filterResourceOptionsSingle"></a>
# **filterResourceOptionsSingle**
> ResourceOptionsDto filterResourceOptionsSingle(id)

Filter Resource Options

The OPTIONS request allows you to check for the set of available operations  that the currently authenticated user can perform on the &#x60;/filter&#x60; resource. Whether the user can perform an operation or not may depend on various factors, including the users authorizations to interact with this resource and the internal configuration of the process engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.FilterApi();
let id = "id_example"; // String | The id of the filter to be checked.

apiInstance.filterResourceOptionsSingle(id, (error, data, response) => {
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
 **id** | **String**| The id of the filter to be checked. | 

### Return type

[**ResourceOptionsDto**](ResourceOptionsDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFilterCount"></a>
# **getFilterCount**
> CountResultDto getFilterCount(opts)

Get Filter Count

Retrieves the number of filters that fulfill a provided query. Corresponds to the size of the result set when using the  [Get Filters](https://docs.camunda.org/manual/develop/reference/rest/filter/get-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.FilterApi();
let opts = { 
  'filterId': "filterId_example", // String | Filter by the id of the filter.
  'resourceType': "resourceType_example", // String | Filter by the resource type of the filter, e.g., `Task`.
  'name': "name_example", // String | Filter by the name of the filter.
  'nameLike': "nameLike_example", // String | Filter by the name that the parameter is a substring of.
  'owner': "owner_example" // String | Filter by the user id of the owner of the filter.
};
apiInstance.getFilterCount(opts, (error, data, response) => {
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
 **filterId** | **String**| Filter by the id of the filter. | [optional] 
 **resourceType** | **String**| Filter by the resource type of the filter, e.g., &#x60;Task&#x60;. | [optional] 
 **name** | **String**| Filter by the name of the filter. | [optional] 
 **nameLike** | **String**| Filter by the name that the parameter is a substring of. | [optional] 
 **owner** | **String**| Filter by the user id of the owner of the filter. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFilterList"></a>
# **getFilterList**
> [FilterDto] getFilterList(opts)

Get Filters

Queries for a list of filters using a list of parameters. The size of the result set can be retrieved by using the [Get Filter Count](https://docs.camunda.org/manual/develop/reference/rest/filter/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.FilterApi();
let opts = { 
  'filterId': "filterId_example", // String | Filter by the id of the filter.
  'resourceType': "resourceType_example", // String | Filter by the resource type of the filter, e.g., `Task`.
  'name': "name_example", // String | Filter by the name of the filter.
  'nameLike': "nameLike_example", // String | Filter by the name that the parameter is a substring of.
  'owner': "owner_example", // String | Filter by the user id of the owner of the filter.
  'itemCount': true, // Boolean | If set to `true`, each filter result will contain an `itemCount` property with the number of items matched by the filter itself.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getFilterList(opts, (error, data, response) => {
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
 **filterId** | **String**| Filter by the id of the filter. | [optional] 
 **resourceType** | **String**| Filter by the resource type of the filter, e.g., &#x60;Task&#x60;. | [optional] 
 **name** | **String**| Filter by the name of the filter. | [optional] 
 **nameLike** | **String**| Filter by the name that the parameter is a substring of. | [optional] 
 **owner** | **String**| Filter by the user id of the owner of the filter. | [optional] 
 **itemCount** | **Boolean**| If set to &#x60;true&#x60;, each filter result will contain an &#x60;itemCount&#x60; property with the number of items matched by the filter itself. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[FilterDto]**](FilterDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSingleFilter"></a>
# **getSingleFilter**
> FilterDto getSingleFilter(id, opts)

Get Single Filter

Retrieves a single filter by id, according to the &#x60;Filter&#x60; interface in the engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.FilterApi();
let id = "id_example"; // String | The id of the filter to be retrieved.
let opts = { 
  'itemCount': true // Boolean | If set to `true`, each filter result will contain an `itemCount` property with the number of items matched by the filter itself.
};
apiInstance.getSingleFilter(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the filter to be retrieved. | 
 **itemCount** | **Boolean**| If set to &#x60;true&#x60;, each filter result will contain an &#x60;itemCount&#x60; property with the number of items matched by the filter itself. | [optional] 

### Return type

[**FilterDto**](FilterDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postExecuteFilterCount"></a>
# **postExecuteFilterCount**
> CountResultDto postExecuteFilterCount(id, opts)

Execute Filter Count (POST)

Executes the saved query of the filter by id and returns the count. This method is slightly more powerful then the [Get Execute Filter Count](https://docs.camunda.org/manual/develop/reference/rest/filter/get-execute-count/)  method because it allows to extend the saved query of the filter.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.FilterApi();
let id = "id_example"; // String | The id of the filter to execute.
let opts = { 
  'body': {
  "summary" : "request",
  "description" : "POST `filter/aTaskFilterId/singleResult`. Note: The examples show a task filter. So the request body corresponds to a task query. For other resource types the request body will differ.",
  "value" : {
    "assignee" : "jonny1",
    "taskDefinitionKey" : "aTaskKey"
  }
} // Object | A JSON object which corresponds to the type of the saved query of the filter, i.e., if the resource type of the filter is Task the body should form a valid task query corresponding to the Task resource.
};
apiInstance.postExecuteFilterCount(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the filter to execute. | 
 **body** | [**Object**](Object.md)| A JSON object which corresponds to the type of the saved query of the filter, i.e., if the resource type of the filter is Task the body should form a valid task query corresponding to the Task resource. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postExecuteFilterList"></a>
# **postExecuteFilterList**
> [Object] postExecuteFilterList(id, opts)

Execute Filter List (POST)

Executes the saved query of the filter by id and returns the result list. This method is slightly more powerful then the  [Get Execute FilterList](https://docs.camunda.org/manual/develop/reference/rest/filter/get-execute-list/) method because it allows to extend the saved query of the filter.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.FilterApi();
let id = "id_example"; // String | The id of the filter to execute.
let opts = { 
  'body': {
  "summary" : "request",
  "description" : "POST `/filter/aTaskFilterId/list/?firstResult=0&maxResults=2`. **Note**: The examples show a task filter. So the request body corresponds to a task query. For other resource types the request body will differ.",
  "value" : {
    "assignee" : "jonny1",
    "taskDefinitionKey" : "aTaskKey"
  }
}, // Object | A JSON object which corresponds to the type of the saved query of the filter, i.e., if the resource type of the filter is Task the body should form a valid task query corresponding to the Task resource.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.postExecuteFilterList(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the filter to execute. | 
 **body** | [**Object**](Object.md)| A JSON object which corresponds to the type of the saved query of the filter, i.e., if the resource type of the filter is Task the body should form a valid task query corresponding to the Task resource. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

**[Object]**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postExecuteFilterSingleResult"></a>
# **postExecuteFilterSingleResult**
> Object postExecuteFilterSingleResult(id, opts)

Execute Filter Single Result (POST)

Executes the saved query of the filter by id and returns the single result. This method is slightly more powerful then the [Get Execute Filter Single Result](https://docs.camunda.org/manual/develop/reference/rest/filter/get-execute-single-result/) method because it allows to extend the saved query of the filter.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.FilterApi();
let id = "id_example"; // String | The id of the filter to execute.
let opts = { 
  'body': {
  "summary" : "request",
  "description" : "POST `filter/aTaskFilterId/singleResult`. **Note**: The examples show a task filter. So the request body corresponds to a task query. For other resource types the request body will differ.",
  "value" : {
    "assignee" : "jonny1",
    "taskDefinitionKey" : "aTaskKey"
  }
} // Object | A JSON object which corresponds to the type of the saved query of the filter, i.e., if the resource type of the filter is Task the body should form a valid task query corresponding to the Task resource.
};
apiInstance.postExecuteFilterSingleResult(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the filter to execute. | 
 **body** | [**Object**](Object.md)| A JSON object which corresponds to the type of the saved query of the filter, i.e., if the resource type of the filter is Task the body should form a valid task query corresponding to the Task resource. | [optional] 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFilter"></a>
# **updateFilter**
> updateFilter(id, opts)

Update Filter

Updates an existing filter.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.FilterApi();
let id = "id_example"; // String | The id of the filter to be updated.
let opts = { 
  'body': new CamundaRestApi.CreateFilterDto() // CreateFilterDto | 
};
apiInstance.updateFilter(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the filter to be updated. | 
 **body** | [**CreateFilterDto**](CreateFilterDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

