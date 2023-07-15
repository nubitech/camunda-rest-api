# CamundaRestApi.HistoricDetailQueryDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processInstanceId** | **String** | Filter by process instance id. | [optional] 
**processInstanceIdIn** | **[String]** | Only include historic details which belong to one of the passed  process instance ids. | [optional] 
**executionId** | **String** | Filter by execution id. | [optional] 
**taskId** | **String** | Filter by task id. | [optional] 
**activityInstanceId** | **String** | Filter by activity instance id. | [optional] 
**caseInstanceId** | **String** | Filter by case instance id. | [optional] 
**caseExecutionId** | **String** | Filter by case execution id. | [optional] 
**variableInstanceId** | **String** | Filter by variable instance id. | [optional] 
**variableTypeIn** | **[String]** | Only include historic details where the variable updates belong to one of the passed  list of variable types. A list of all supported variable types can be found [here](https://docs.camunda.org/manual/develop/user-guide/process-engine/variables/#supported-variable-values). **Note:** All non-primitive variables are associated with the type &#x60;serializable&#x60;. | [optional] 
**tenantIdIn** | **[String]** | Filter by a  list of tenant ids. | [optional] 
**withoutTenantId** | **Boolean** | Only include historic details that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
**userOperationId** | **String** | Filter by a user operation id. | [optional] 
**formFields** | **Boolean** | Only include &#x60;HistoricFormFields&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
**variableUpdates** | **Boolean** | Only include &#x60;HistoricVariableUpdates&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
**excludeTaskDetails** | **Boolean** | Excludes all task-related &#x60;HistoricDetails&#x60;, so only items which have no task id set will be selected. When this parameter is used together with &#x60;taskId&#x60;, this call is ignored and task details are not excluded. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
**initial** | **Boolean** | Restrict to historic variable updates that contain only initial variable values. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
**occurredBefore** | **Date** | Restrict to historic details that occured before the given date (including the date). Default [format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
**occurredAfter** | **Date** | Restrict to historic details that occured after the given date (including the date). Default [format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
**sorting** | [**[HistoricDetailQueryDtoSorting]**](HistoricDetailQueryDtoSorting.md) | A JSON array of criteria to sort the result by. Each element of the array is                     a JSON object that specifies one ordering. The position in the array                     identifies the rank of an ordering, i.e., whether it is primary, secondary,                     etc. Does not have an effect for the &#x60;count&#x60; endpoint. | [optional] 
