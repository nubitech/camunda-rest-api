# CamundaRestApi.TaskDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The task id. | [optional] 
**name** | **String** | The task name. | [optional] 
**assignee** | **String** | The assignee&#x27;s id. | [optional] 
**owner** | **String** | The owner&#x27;s id. | [optional] 
**created** | **Date** | The date the task was created on. [Default format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;. | [optional] 
**lastUpdated** | **Date** | The date the task was last updated. Every action that fires a [task update event](https://docs.camunda.org/manual/develop/user-guide/process-engine/delegation-code/#task-listener-event-lifecycle) will update this property. [Default format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;. | [optional] 
**due** | **Date** | The task&#x27;s due date. [Default format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;. | [optional] 
**followUp** | **Date** | The follow-up date for the task. [Default format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;. | [optional] 
**delegationState** | **String** | The task&#x27;s delegation state. Possible values are &#x60;PENDING&#x60; and &#x60;RESOLVED&#x60;. | [optional] 
**description** | **String** | The task&#x27;s description. | [optional] 
**executionId** | **String** | The id of the execution the task belongs to. | [optional] 
**parentTaskId** | **String** | The id the parent task, if this task is a subtask. | [optional] 
**priority** | **Number** | The task&#x27;s priority. | [optional] 
**processDefinitionId** | **String** | The id of the process definition the task belongs to. | [optional] 
**processInstanceId** | **String** | The id of the process instance the task belongs to. | [optional] 
**caseExecutionId** | **String** | The id of the case execution the task belongs to. | [optional] 
**caseDefinitionId** | **String** | The id of the case definition the task belongs to. | [optional] 
**caseInstanceId** | **String** | The id of the case instance the task belongs to. | [optional] 
**taskDefinitionKey** | **String** | The task&#x27;s key. | [optional] 
**suspended** | **Boolean** | Whether the task belongs to a process instance that is suspended. | [optional] 
**formKey** | **String** | If not &#x60;null&#x60;, the form key for the task. | [optional] 
**camundaFormRef** | [**{String: CamundaFormRef}**](CamundaFormRef.md) | A reference to a specific version of a Camunda Form. | [optional] 
**tenantId** | **String** | If not &#x60;null&#x60;, the tenant id of the task. | [optional] 

<a name="DelegationStateEnum"></a>
## Enum: DelegationStateEnum

* `PENDING` (value: `"PENDING"`)
* `RESOLVED` (value: `"RESOLVED"`)

