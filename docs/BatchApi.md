# CamundaRestApi.BatchApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteBatch**](BatchApi.md#deleteBatch) | **DELETE** /batch/{id} | Delete
[**getBatch**](BatchApi.md#getBatch) | **GET** /batch/{id} | Get
[**getBatchStatistics**](BatchApi.md#getBatchStatistics) | **GET** /batch/statistics | Get Statistics
[**getBatchStatisticsCount**](BatchApi.md#getBatchStatisticsCount) | **GET** /batch/statistics/count | Get Statistics Count
[**getBatches**](BatchApi.md#getBatches) | **GET** /batch | Get List
[**getBatchesCount**](BatchApi.md#getBatchesCount) | **GET** /batch/count | Get List Count
[**updateBatchSuspensionState**](BatchApi.md#updateBatchSuspensionState) | **PUT** /batch/{id}/suspended | Activate/Suspend

<a name="deleteBatch"></a>
# **deleteBatch**
> deleteBatch(id, opts)

Delete

Deletes a batch by id, including all related jobs and job definitions. Optionally also deletes the batch history.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.BatchApi();
let id = "id_example"; // String | The id of the batch to be deleted.
let opts = { 
  'cascade': true // Boolean | `true`, if the historic batch and historic job logs for this batch should also be deleted.
};
apiInstance.deleteBatch(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the batch to be deleted. | 
 **cascade** | **Boolean**| &#x60;true&#x60;, if the historic batch and historic job logs for this batch should also be deleted. | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBatch"></a>
# **getBatch**
> BatchDto getBatch(id)

Get

Retrieves a batch by id, according to the Batch interface in the engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.BatchApi();
let id = "id_example"; // String | The id of the batch to be retrieved.

apiInstance.getBatch(id, (error, data, response) => {
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
 **id** | **String**| The id of the batch to be retrieved. | 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBatchStatistics"></a>
# **getBatchStatistics**
> [BatchStatisticsDto] getBatchStatistics(opts)

Get Statistics

Queries for batch statistics that fulfill given parameters. Parameters may be the properties of batches, such as the id or type. The size of the result set can be retrieved by using the  [Get Batch Statistics Count](https://docs.camunda.org/manual/develop/reference/rest/batch/get-statistics-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.BatchApi();
let opts = { 
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'batchId': "batchId_example", // String | Filter by batch id.
  'type': "type_example", // String | Filter by batch type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/batch/#creating-a-batch) for more information about batch types.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of `Strings`. A batch matches if it has one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include batches which belong to no tenant. Value can effectively only be `true`, as `false` is the default behavior.
  'suspended': true, // Boolean | A `Boolean` value which indicates whether only active or suspended batches should be included. When the value is set to `true`, only suspended batches will be returned and when the value is set to `false`, only active batches will be returned.
  'createdBy': "createdBy_example", // String | Only include batches that were started by this user id.
  'startedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Only include batches that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'startedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Only include batches that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'withFailures': true, // Boolean | Only include batches having jobs with failures. Value can only be `true`.
  'withoutFailures': true // Boolean | Only include batches having jobs without failures. Value can only be `true`.
};
apiInstance.getBatchStatistics(opts, (error, data, response) => {
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
 **batchId** | **String**| Filter by batch id. | [optional] 
 **type** | **String**| Filter by batch type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/batch/#creating-a-batch) for more information about batch types. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of &#x60;Strings&#x60;. A batch matches if it has one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include batches which belong to no tenant. Value can effectively only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **suspended** | **Boolean**| A &#x60;Boolean&#x60; value which indicates whether only active or suspended batches should be included. When the value is set to &#x60;true&#x60;, only suspended batches will be returned and when the value is set to &#x60;false&#x60;, only active batches will be returned. | [optional] 
 **createdBy** | **String**| Only include batches that were started by this user id. | [optional] 
 **startedBefore** | **Date**| Only include batches that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedAfter** | **Date**| Only include batches that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **withFailures** | **Boolean**| Only include batches having jobs with failures. Value can only be &#x60;true&#x60;. | [optional] 
 **withoutFailures** | **Boolean**| Only include batches having jobs without failures. Value can only be &#x60;true&#x60;. | [optional] 

### Return type

[**[BatchStatisticsDto]**](BatchStatisticsDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBatchStatisticsCount"></a>
# **getBatchStatisticsCount**
> CountResultDto getBatchStatisticsCount(opts)

Get Statistics Count

Requests the number of batch statistics that fulfill the query criteria. Takes the same filtering parameters as the [Get Batch Statistics](https://docs.camunda.org/manual/develop/reference/rest/batch/get-statistics-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.BatchApi();
let opts = { 
  'batchId': "batchId_example", // String | Filter by batch id.
  'type': "type_example", // String | Filter by batch type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/batch/#creating-a-batch) for more information about batch types.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of `Strings`. A batch matches if it has one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include batches which belong to no tenant. Value can effectively only be `true`, as `false` is the default behavior.
  'suspended': true, // Boolean | A `Boolean` value which indicates whether only active or suspended batches should be included. When the value is set to `true`, only suspended batches will be returned and when the value is set to `false`, only active batches will be returned.
  'createdBy': "createdBy_example", // String | Only include batches that were started by this user id.
  'startedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Only include batches that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'startedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Only include batches that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'withFailures': true, // Boolean | Only include batches having jobs with failures. Value can only be `true`.
  'withoutFailures': true // Boolean | Only include batches having jobs without failures. Value can only be `true`.
};
apiInstance.getBatchStatisticsCount(opts, (error, data, response) => {
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
 **batchId** | **String**| Filter by batch id. | [optional] 
 **type** | **String**| Filter by batch type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/batch/#creating-a-batch) for more information about batch types. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of &#x60;Strings&#x60;. A batch matches if it has one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include batches which belong to no tenant. Value can effectively only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **suspended** | **Boolean**| A &#x60;Boolean&#x60; value which indicates whether only active or suspended batches should be included. When the value is set to &#x60;true&#x60;, only suspended batches will be returned and when the value is set to &#x60;false&#x60;, only active batches will be returned. | [optional] 
 **createdBy** | **String**| Only include batches that were started by this user id. | [optional] 
 **startedBefore** | **Date**| Only include batches that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedAfter** | **Date**| Only include batches that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **withFailures** | **Boolean**| Only include batches having jobs with failures. Value can only be &#x60;true&#x60;. | [optional] 
 **withoutFailures** | **Boolean**| Only include batches having jobs without failures. Value can only be &#x60;true&#x60;. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBatches"></a>
# **getBatches**
> [BatchDto] getBatches(opts)

Get List

Queries for batches that fulfill given parameters. Parameters may be the properties of batches, such as the id or type. The size of the result set can be retrieved by using the [Get Batch Count](https://docs.camunda.org/manual/develop/reference/rest/batch/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.BatchApi();
let opts = { 
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'batchId': "batchId_example", // String | Filter by batch id.
  'type': "type_example", // String | Filter by batch type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/batch/#creating-a-batch) for more information about batch types.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of `Strings`. A batch matches if it has one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include batches which belong to no tenant. Value can effectively only be `true`, as `false` is the default behavior.
  'suspended': true, // Boolean | A `Boolean` value which indicates whether only active or suspended batches should be included. When the value is set to `true`, only suspended batches will be returned and when the value is set to `false`, only active batches will be returned.
  'createdBy': "createdBy_example", // String | Only include batches that were started by this user id.
  'startedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Only include batches that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'startedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Only include batches that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'withFailures': true, // Boolean | Only include batches having jobs with failures. Value can only be `true`.
  'withoutFailures': true // Boolean | Only include batches having jobs without failures. Value can only be `true`.
};
apiInstance.getBatches(opts, (error, data, response) => {
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
 **batchId** | **String**| Filter by batch id. | [optional] 
 **type** | **String**| Filter by batch type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/batch/#creating-a-batch) for more information about batch types. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of &#x60;Strings&#x60;. A batch matches if it has one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include batches which belong to no tenant. Value can effectively only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **suspended** | **Boolean**| A &#x60;Boolean&#x60; value which indicates whether only active or suspended batches should be included. When the value is set to &#x60;true&#x60;, only suspended batches will be returned and when the value is set to &#x60;false&#x60;, only active batches will be returned. | [optional] 
 **createdBy** | **String**| Only include batches that were started by this user id. | [optional] 
 **startedBefore** | **Date**| Only include batches that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedAfter** | **Date**| Only include batches that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **withFailures** | **Boolean**| Only include batches having jobs with failures. Value can only be &#x60;true&#x60;. | [optional] 
 **withoutFailures** | **Boolean**| Only include batches having jobs without failures. Value can only be &#x60;true&#x60;. | [optional] 

### Return type

[**[BatchDto]**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBatchesCount"></a>
# **getBatchesCount**
> CountResultDto getBatchesCount(opts)

Get List Count

Requests the number of batches that fulfill the query criteria. Takes the same filtering parameters as the [Get Batches](https://docs.camunda.org/manual/develop/reference/rest/batch/get-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.BatchApi();
let opts = { 
  'batchId': "batchId_example", // String | Filter by batch id.
  'type': "type_example", // String | Filter by batch type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/batch/#creating-a-batch) for more information about batch types.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of `Strings`. A batch matches if it has one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include batches which belong to no tenant. Value can effectively only be `true`, as `false` is the default behavior.
  'suspended': true, // Boolean | A `Boolean` value which indicates whether only active or suspended batches should be included. When the value is set to `true`, only suspended batches will be returned and when the value is set to `false`, only active batches will be returned.
  'createdBy': "createdBy_example", // String | Only include batches that were started by this user id.
  'startedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Only include batches that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'startedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Only include batches that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'withFailures': true, // Boolean | Only include batches having jobs with failures. Value can only be `true`.
  'withoutFailures': true // Boolean | Only include batches having jobs without failures. Value can only be `true`.
};
apiInstance.getBatchesCount(opts, (error, data, response) => {
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
 **batchId** | **String**| Filter by batch id. | [optional] 
 **type** | **String**| Filter by batch type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/batch/#creating-a-batch) for more information about batch types. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of &#x60;Strings&#x60;. A batch matches if it has one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include batches which belong to no tenant. Value can effectively only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **suspended** | **Boolean**| A &#x60;Boolean&#x60; value which indicates whether only active or suspended batches should be included. When the value is set to &#x60;true&#x60;, only suspended batches will be returned and when the value is set to &#x60;false&#x60;, only active batches will be returned. | [optional] 
 **createdBy** | **String**| Only include batches that were started by this user id. | [optional] 
 **startedBefore** | **Date**| Only include batches that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedAfter** | **Date**| Only include batches that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **withFailures** | **Boolean**| Only include batches having jobs with failures. Value can only be &#x60;true&#x60;. | [optional] 
 **withoutFailures** | **Boolean**| Only include batches having jobs without failures. Value can only be &#x60;true&#x60;. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBatchSuspensionState"></a>
# **updateBatchSuspensionState**
> updateBatchSuspensionState(id, opts)

Activate/Suspend

Activates or suspends a batch by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.BatchApi();
let id = "id_example"; // String | The id of the batch to activate or suspend.
let opts = { 
  'body': new CamundaRestApi.SuspensionStateDto() // SuspensionStateDto | 
};
apiInstance.updateBatchSuspensionState(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the batch to activate or suspend. | 
 **body** | [**SuspensionStateDto**](SuspensionStateDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

