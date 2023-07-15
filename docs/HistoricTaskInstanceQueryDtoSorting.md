# CamundaRestApi.HistoricTaskInstanceQueryDtoSorting

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sortBy** | **String** | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
**sortOrder** | **String** | Sort the results in a given order. Values may be &#x60;asc&#x60; for ascending order or &#x60;desc&#x60; for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 

<a name="SortByEnum"></a>
## Enum: SortByEnum

* `taskId` (value: `"taskId"`)
* `activityInstanceId` (value: `"activityInstanceId"`)
* `processDefinitionId` (value: `"processDefinitionId"`)
* `processInstanceId` (value: `"processInstanceId"`)
* `executionId` (value: `"executionId"`)
* `duration` (value: `"duration"`)
* `endTime` (value: `"endTime"`)
* `startTime` (value: `"startTime"`)
* `taskName` (value: `"taskName"`)
* `taskDescription` (value: `"taskDescription"`)
* `assignee` (value: `"assignee"`)
* `owner` (value: `"owner"`)
* `dueDate` (value: `"dueDate"`)
* `followUpDate` (value: `"followUpDate"`)
* `deleteReason` (value: `"deleteReason"`)
* `taskDefinitionKey` (value: `"taskDefinitionKey"`)
* `priority` (value: `"priority"`)
* `caseDefinitionId` (value: `"caseDefinitionId"`)
* `caseInstanceId` (value: `"caseInstanceId"`)
* `caseExecutionId` (value: `"caseExecutionId"`)
* `tenantId` (value: `"tenantId"`)


<a name="SortOrderEnum"></a>
## Enum: SortOrderEnum

* `asc` (value: `"asc"`)
* `desc` (value: `"desc"`)

