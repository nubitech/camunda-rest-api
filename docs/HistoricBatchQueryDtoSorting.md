# CamundaRestApi.HistoricBatchQueryDtoSorting

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sortBy** | **String** | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
**sortOrder** | **String** | Sort the results in a given order. Values may be &#x60;asc&#x60; for ascending order or &#x60;desc&#x60; for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 

<a name="SortByEnum"></a>
## Enum: SortByEnum

* `batchId` (value: `"batchId"`)
* `startTime` (value: `"startTime"`)
* `endTime` (value: `"endTime"`)
* `tenantId` (value: `"tenantId"`)


<a name="SortOrderEnum"></a>
## Enum: SortOrderEnum

* `asc` (value: `"asc"`)
* `desc` (value: `"desc"`)

