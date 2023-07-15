# CamundaRestApi.HistoricBatchApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteHistoricBatch**](HistoricBatchApi.md#deleteHistoricBatch) | **DELETE** /history/batch/{id} | Delete Historic Batch
[**getCleanableHistoricBatchesReport**](HistoricBatchApi.md#getCleanableHistoricBatchesReport) | **GET** /history/batch/cleanable-batch-report | Get Cleanable Batch Report
[**getCleanableHistoricBatchesReportCount**](HistoricBatchApi.md#getCleanableHistoricBatchesReportCount) | **GET** /history/batch/cleanable-batch-report/count | Get Cleanable Batch Report Count
[**getHistoricBatch**](HistoricBatchApi.md#getHistoricBatch) | **GET** /history/batch/{id} | Get Historic Batch
[**getHistoricBatches**](HistoricBatchApi.md#getHistoricBatches) | **GET** /history/batch | Get Historic Batches
[**getHistoricBatchesCount**](HistoricBatchApi.md#getHistoricBatchesCount) | **GET** /history/batch/count | Get Historic Batch Count
[**setRemovalTimeAsyncHistoricBatch**](HistoricBatchApi.md#setRemovalTimeAsyncHistoricBatch) | **POST** /history/batch/set-removal-time | Set Removal Time Async (POST)

<a name="deleteHistoricBatch"></a>
# **deleteHistoricBatch**
> deleteHistoricBatch(id)

Delete Historic Batch

Deletes a historic batch by id, including related historic job logs.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricBatchApi();
let id = "id_example"; // String | The id of the batch to be deleted.

apiInstance.deleteHistoricBatch(id, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCleanableHistoricBatchesReport"></a>
# **getCleanableHistoricBatchesReport**
> [CleanableHistoricBatchReportResultDto] getCleanableHistoricBatchesReport(opts)

Get Cleanable Batch Report

Retrieves a report about a historic batch operations relevant to history cleanup (see [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup) ) so that you can tune the history time to live. These reports include the count of the finished batches, cleanable batches and type of the batch. The size of the result set can be retrieved by using the [Get Cleanable Batch Report Count](https://docs.camunda.org/manual/develop/reference/rest/history/batch/get-cleanable-batch-report-count/) method.  **Please note:** The history time to live for batch operations does not support [Multi-Tenancy](https://docs.camunda.org/manual/develop/user-guide/process-engine/multi-tenancy.md). The report will return an information for all batch operations (for all tenants) if you have permissions to see the history. 

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricBatchApi();
let opts = { 
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getCleanableHistoricBatchesReport(opts, (error, data, response) => {
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

### Return type

[**[CleanableHistoricBatchReportResultDto]**](CleanableHistoricBatchReportResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCleanableHistoricBatchesReportCount"></a>
# **getCleanableHistoricBatchesReportCount**
> CountResultDto getCleanableHistoricBatchesReportCount(opts)

Get Cleanable Batch Report Count

Queries for the number of report results about a historic batch operations relevant to history cleanup (see [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup) ). Takes the same parameters as the [Get Cleanable Batch Report](https://docs.camunda.org/manual/develop/reference/rest/history/batch/get-cleanable-batch-report/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricBatchApi();
let opts = { 
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getCleanableHistoricBatchesReportCount(opts, (error, data, response) => {
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

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricBatch"></a>
# **getHistoricBatch**
> HistoricBatchDto getHistoricBatch(id)

Get Historic Batch

Retrieves a historic batch by id, according to the &#x60;HistoricBatch&#x60; interface in the engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricBatchApi();
let id = "id_example"; // String | The id of the historic batch to be retrieved.

apiInstance.getHistoricBatch(id, (error, data, response) => {
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
 **id** | **String**| The id of the historic batch to be retrieved. | 

### Return type

[**HistoricBatchDto**](HistoricBatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricBatches"></a>
# **getHistoricBatches**
> [HistoricBatchDto] getHistoricBatches(opts)

Get Historic Batches

Queries for historic batches that fulfill given parameters. Parameters may be the properties of batches, such as the id or type. The size of the result set can be retrieved by using the [Get Historic Batch Count](https://docs.camunda.org/manual/develop/reference/rest/history/batch/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricBatchApi();
let opts = { 
  'batchId': "batchId_example", // String | Filter by batch id.
  'type': "type_example", // String | Filter by batch type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/batch/#creating-a-batch) for more information about batch types.
  'completed': true, // Boolean |  Filter completed or not completed batches. If the value is `true`, only completed batches, i.e., end time is set, are returned. Otherwise, if the value is `false`, only running batches, i.e., end time is null, are returned.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A batch matches if it has one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include batches which belong to no tenant. Value can effectively only be `true`, as `false` is the default behavior.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getHistoricBatches(opts, (error, data, response) => {
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
 **completed** | **Boolean**|  Filter completed or not completed batches. If the value is &#x60;true&#x60;, only completed batches, i.e., end time is set, are returned. Otherwise, if the value is &#x60;false&#x60;, only running batches, i.e., end time is null, are returned. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A batch matches if it has one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include batches which belong to no tenant. Value can effectively only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[HistoricBatchDto]**](HistoricBatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricBatchesCount"></a>
# **getHistoricBatchesCount**
> CountResultDto getHistoricBatchesCount(opts)

Get Historic Batch Count

Requests the number of historic batches that fulfill the query criteria. Takes the same filtering parameters as the [Get Historic Batches](https://docs.camunda.org/manual/develop/reference/rest/history/batch/get-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricBatchApi();
let opts = { 
  'batchId': "batchId_example", // String | Filter by batch id.
  'type': "type_example", // String | Filter by batch type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/batch/#creating-a-batch) for more information about batch types.
  'completed': true, // Boolean |  Filter completed or not completed batches. If the value is `true`, only completed batches, i.e., end time is set, are returned. Otherwise, if the value is `false`, only running batches, i.e., end time is null, are returned.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A batch matches if it has one of the given tenant ids.
  'withoutTenantId': true // Boolean | Only include batches which belong to no tenant. Value can effectively only be `true`, as `false` is the default behavior.
};
apiInstance.getHistoricBatchesCount(opts, (error, data, response) => {
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
 **completed** | **Boolean**|  Filter completed or not completed batches. If the value is &#x60;true&#x60;, only completed batches, i.e., end time is set, are returned. Otherwise, if the value is &#x60;false&#x60;, only running batches, i.e., end time is null, are returned. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A batch matches if it has one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include batches which belong to no tenant. Value can effectively only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setRemovalTimeAsyncHistoricBatch"></a>
# **setRemovalTimeAsyncHistoricBatch**
> BatchDto setRemovalTimeAsyncHistoricBatch(opts)

Set Removal Time Async (POST)

Sets the removal time to multiple historic batches asynchronously (batch).  At least __historicBatchIds__ or __historicBatchQuery__ has to be provided. If both are provided, all instances matching query criterion and instances from the list will be updated with a removal time.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricBatchApi();
let opts = { 
  'body': new CamundaRestApi.SetRemovalTimeToHistoricBatchesDto() // SetRemovalTimeToHistoricBatchesDto | 
};
apiInstance.setRemovalTimeAsyncHistoricBatch(opts, (error, data, response) => {
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
 **body** | [**SetRemovalTimeToHistoricBatchesDto**](SetRemovalTimeToHistoricBatchesDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

