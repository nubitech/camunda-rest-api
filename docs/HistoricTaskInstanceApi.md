# CamundaRestApi.HistoricTaskInstanceApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricTaskInstanceReport**](HistoricTaskInstanceApi.md#getHistoricTaskInstanceReport) | **GET** /history/task/report | Get Task Report (Historic)
[**getHistoricTaskInstances**](HistoricTaskInstanceApi.md#getHistoricTaskInstances) | **GET** /history/task | Get Tasks (Historic)
[**getHistoricTaskInstancesCount**](HistoricTaskInstanceApi.md#getHistoricTaskInstancesCount) | **GET** /history/task/count | Get Task Count
[**queryHistoricTaskInstances**](HistoricTaskInstanceApi.md#queryHistoricTaskInstances) | **POST** /history/task | Get Tasks (Historic) (POST)
[**queryHistoricTaskInstancesCount**](HistoricTaskInstanceApi.md#queryHistoricTaskInstancesCount) | **POST** /history/task/count | Get Task Count (POST)

<a name="getHistoricTaskInstanceReport"></a>
# **getHistoricTaskInstanceReport**
> [HistoricTaskInstanceReportResultDto] getHistoricTaskInstanceReport(opts)

Get Task Report (Historic)

Retrieves a report of completed tasks. When the report type is set to &#x60;count&#x60;, the report contains a list of completed task counts where an entry contains the task name, the definition key of the task, the process definition id, the process definition key, the process definition name and the count of how many tasks were completed for the specified key in a given period. When the report type is set to &#x60;duration&#x60;, the report contains a minimum, maximum and average duration value of all completed task instances in a given period.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricTaskInstanceApi();
let opts = { 
  'reportType': "reportType_example", // String | **Mandatory.** Specifies the kind of the report to execute. To retrieve a report about the duration of process instances the value must be set to `duration`. For a report of the completed tasks in a specific timespan the value must be set to `count`.
  'periodUnit': "periodUnit_example", // String | When the report type is set to `duration`, this parameter is **mandatory**. Specifies the granularity of the report. Valid values are `month` and `quarter`.
  'completedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that were completed before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'completedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that were completed after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'groupBy': "groupBy_example" // String | When the report type is set to `count`, this parameter is **mandatory**. Groups the tasks report by a given criterion. Valid values are `taskName` and `processDefinition`.
};
apiInstance.getHistoricTaskInstanceReport(opts, (error, data, response) => {
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
 **reportType** | **String**| **Mandatory.** Specifies the kind of the report to execute. To retrieve a report about the duration of process instances the value must be set to &#x60;duration&#x60;. For a report of the completed tasks in a specific timespan the value must be set to &#x60;count&#x60;. | [optional] 
 **periodUnit** | **String**| When the report type is set to &#x60;duration&#x60;, this parameter is **mandatory**. Specifies the granularity of the report. Valid values are &#x60;month&#x60; and &#x60;quarter&#x60;. | [optional] 
 **completedBefore** | **Date**| Restrict to tasks that were completed before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **completedAfter** | **Date**| Restrict to tasks that were completed after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **groupBy** | **String**| When the report type is set to &#x60;count&#x60;, this parameter is **mandatory**. Groups the tasks report by a given criterion. Valid values are &#x60;taskName&#x60; and &#x60;processDefinition&#x60;. | [optional] 

### Return type

[**[HistoricTaskInstanceReportResultDto]**](HistoricTaskInstanceReportResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricTaskInstances"></a>
# **getHistoricTaskInstances**
> [HistoricTaskInstanceDto] getHistoricTaskInstances(opts)

Get Tasks (Historic)

Queries for historic tasks that fulfill the given parameters. The size of the result set can be retrieved by using the [Get Task Count](https://docs.camunda.org/manual/develop/reference/rest/history/task/get-task-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricTaskInstanceApi();
let opts = { 
  'taskId': "taskId_example", // String | Filter by task id.
  'taskParentTaskId': "taskParentTaskId_example", // String | Filter by parent task id.
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'processInstanceBusinessKey': "processInstanceBusinessKey_example", // String | Filter by process instance business key.
  'processInstanceBusinessKeyIn': "processInstanceBusinessKeyIn_example", // String | Filter by process instances with one of the give business keys. The keys need to be in a comma-separated list.
  'processInstanceBusinessKeyLike': "processInstanceBusinessKeyLike_example", // String | Filter by  process instance business key that has the parameter value as a substring.
  'executionId': "executionId_example", // String | Filter by the id of the execution that executed the task.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by process definition id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Restrict to tasks that belong to a process definition with the given key.
  'processDefinitionName': "processDefinitionName_example", // String | Restrict to tasks that belong to a process definition with the given name.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by case instance id.
  'caseExecutionId': "caseExecutionId_example", // String | Filter by the id of the case execution that executed the task.
  'caseDefinitionId': "caseDefinitionId_example", // String | Filter by case definition id.
  'caseDefinitionKey': "caseDefinitionKey_example", // String | Restrict to tasks that belong to a case definition with the given key.
  'caseDefinitionName': "caseDefinitionName_example", // String | Restrict to tasks that belong to a case definition with the given name.
  'activityInstanceIdIn': "activityInstanceIdIn_example", // String | Only include tasks which belong to one of the passed comma-separated activity instance ids.
  'taskName': "taskName_example", // String | Restrict to tasks that have the given name.
  'taskNameLike': "taskNameLike_example", // String | Restrict to tasks that have a name with the given parameter value as substring.
  'taskDescription': "taskDescription_example", // String | Restrict to tasks that have the given description.
  'taskDescriptionLike': "taskDescriptionLike_example", // String | Restrict to tasks that have a description that has the parameter value as a substring.
  'taskDefinitionKey': "taskDefinitionKey_example", // String | Restrict to tasks that have the given key.
  'taskDefinitionKeyIn': "taskDefinitionKeyIn_example", // String | Restrict to tasks that have one of the passed comma-separated task definition keys.
  'taskDeleteReason': "taskDeleteReason_example", // String | Restrict to tasks that have the given delete reason.
  'taskDeleteReasonLike': "taskDeleteReasonLike_example", // String | Restrict to tasks that have a delete reason that has the parameter value as a substring.
  'taskAssignee': "taskAssignee_example", // String | Restrict to tasks that the given user is assigned to.
  'taskAssigneeLike': "taskAssigneeLike_example", // String | Restrict to tasks that are assigned to users with the parameter value as a substring.
  'taskOwner': "taskOwner_example", // String | Restrict to tasks that the given user owns.
  'taskOwnerLike': "taskOwnerLike_example", // String | Restrict to tasks that are owned by users with the parameter value as a substring.
  'taskPriority': 56, // Number | Restrict to tasks that have the given priority.
  'assigned': true, // Boolean | If set to `true`, restricts the query to all tasks that are assigned.
  'unassigned': true, // Boolean | If set to `true`, restricts the query to all tasks that are unassigned.
  'finished': true, // Boolean | Only include finished tasks. Value may only be `true`, as `false` is the default behavior.
  'unfinished': true, // Boolean | Only include unfinished tasks. Value may only be `true`, as `false` is the default behavior.
  'processFinished': true, // Boolean | Only include tasks of finished processes. Value may only be `true`, as `false` is the default behavior.
  'processUnfinished': true, // Boolean | Only include tasks of unfinished processes. Value may only be `true`, as `false` is the default behavior.
  'taskDueDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'taskDueDateBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'taskDueDateAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'withoutTaskDueDate': true, // Boolean | Only include tasks which have no due date. Value may only be `true`, as `false` is the default behavior.
  'taskFollowUpDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'taskFollowUpDateBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'taskFollowUpDateAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'startedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'startedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'finishedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that were finished before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'finishedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that were finished after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A task instance must have one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic task instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'taskVariables': "taskVariables_example", // String | Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value. **Note:** Values are always treated as `String` objects on server side.   Valid operator values are: * `eq` - equal to; * `neq` - not equal to; * `gt` - greater than; * `gteq` - greater than or equal to; * `lt` - lower than; * `lteq` - lower than or equal to; * `like`.  `key` and `value` may not contain underscore or comma characters.
  'processVariables': "processVariables_example", // String | Only include tasks that belong to process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value. **Note:** Values are always treated as `String` objects on server side.   Valid operator values are: * `eq` - equal to; * `neq` - not equal to; * `gt` - greater than; * `gteq` - greater than or equal to; * `lt` - lower than; * `lteq` - lower than or equal to; * `like`; * `notLike`.  `key` and `value` may not contain underscore or comma characters.
  'variableNamesIgnoreCase': true, // Boolean | Match the variable name provided in `taskVariables` and `processVariables` case- insensitively. If set to `true` **variableName** and **variablename** are treated as equal.
  'variableValuesIgnoreCase': true, // Boolean | Match the variable value provided in `taskVariables` and `processVariables` case- insensitively. If set to `true` **variableValue** and **variablevalue** are treated as equal.
  'taskInvolvedUser': "taskInvolvedUser_example", // String | Restrict to tasks with a historic identity link to the given user.
  'taskInvolvedGroup': "taskInvolvedGroup_example", // String | Restrict to tasks with a historic identity link to the given group.
  'taskHadCandidateUser': "taskHadCandidateUser_example", // String | Restrict to tasks with a historic identity link to the given candidate user.
  'taskHadCandidateGroup': "taskHadCandidateGroup_example", // String | Restrict to tasks with a historic identity link to the given candidate group.
  'withCandidateGroups': true, // Boolean | Only include tasks which have a candidate group. Value may only be `true`, as `false` is the default behavior.
  'withoutCandidateGroups': true, // Boolean | Only include tasks which have no candidate group. Value may only be `true`, as `false` is the default behavior.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getHistoricTaskInstances(opts, (error, data, response) => {
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
 **taskId** | **String**| Filter by task id. | [optional] 
 **taskParentTaskId** | **String**| Filter by parent task id. | [optional] 
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **processInstanceBusinessKey** | **String**| Filter by process instance business key. | [optional] 
 **processInstanceBusinessKeyIn** | **String**| Filter by process instances with one of the give business keys. The keys need to be in a comma-separated list. | [optional] 
 **processInstanceBusinessKeyLike** | **String**| Filter by  process instance business key that has the parameter value as a substring. | [optional] 
 **executionId** | **String**| Filter by the id of the execution that executed the task. | [optional] 
 **processDefinitionId** | **String**| Filter by process definition id. | [optional] 
 **processDefinitionKey** | **String**| Restrict to tasks that belong to a process definition with the given key. | [optional] 
 **processDefinitionName** | **String**| Restrict to tasks that belong to a process definition with the given name. | [optional] 
 **caseInstanceId** | **String**| Filter by case instance id. | [optional] 
 **caseExecutionId** | **String**| Filter by the id of the case execution that executed the task. | [optional] 
 **caseDefinitionId** | **String**| Filter by case definition id. | [optional] 
 **caseDefinitionKey** | **String**| Restrict to tasks that belong to a case definition with the given key. | [optional] 
 **caseDefinitionName** | **String**| Restrict to tasks that belong to a case definition with the given name. | [optional] 
 **activityInstanceIdIn** | **String**| Only include tasks which belong to one of the passed comma-separated activity instance ids. | [optional] 
 **taskName** | **String**| Restrict to tasks that have the given name. | [optional] 
 **taskNameLike** | **String**| Restrict to tasks that have a name with the given parameter value as substring. | [optional] 
 **taskDescription** | **String**| Restrict to tasks that have the given description. | [optional] 
 **taskDescriptionLike** | **String**| Restrict to tasks that have a description that has the parameter value as a substring. | [optional] 
 **taskDefinitionKey** | **String**| Restrict to tasks that have the given key. | [optional] 
 **taskDefinitionKeyIn** | **String**| Restrict to tasks that have one of the passed comma-separated task definition keys. | [optional] 
 **taskDeleteReason** | **String**| Restrict to tasks that have the given delete reason. | [optional] 
 **taskDeleteReasonLike** | **String**| Restrict to tasks that have a delete reason that has the parameter value as a substring. | [optional] 
 **taskAssignee** | **String**| Restrict to tasks that the given user is assigned to. | [optional] 
 **taskAssigneeLike** | **String**| Restrict to tasks that are assigned to users with the parameter value as a substring. | [optional] 
 **taskOwner** | **String**| Restrict to tasks that the given user owns. | [optional] 
 **taskOwnerLike** | **String**| Restrict to tasks that are owned by users with the parameter value as a substring. | [optional] 
 **taskPriority** | **Number**| Restrict to tasks that have the given priority. | [optional] 
 **assigned** | **Boolean**| If set to &#x60;true&#x60;, restricts the query to all tasks that are assigned. | [optional] 
 **unassigned** | **Boolean**| If set to &#x60;true&#x60;, restricts the query to all tasks that are unassigned. | [optional] 
 **finished** | **Boolean**| Only include finished tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **unfinished** | **Boolean**| Only include unfinished tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **processFinished** | **Boolean**| Only include tasks of finished processes. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **processUnfinished** | **Boolean**| Only include tasks of unfinished processes. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **taskDueDate** | **Date**| Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **taskDueDateBefore** | **Date**| Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **taskDueDateAfter** | **Date**| Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **withoutTaskDueDate** | **Boolean**| Only include tasks which have no due date. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **taskFollowUpDate** | **Date**| Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **taskFollowUpDateBefore** | **Date**| Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **taskFollowUpDateAfter** | **Date**| Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedBefore** | **Date**| Restrict to tasks that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedAfter** | **Date**| Restrict to tasks that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **finishedBefore** | **Date**| Restrict to tasks that were finished before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **finishedAfter** | **Date**| Restrict to tasks that were finished after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A task instance must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic task instances that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **taskVariables** | **String**| Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value. **Note:** Values are always treated as &#x60;String&#x60; objects on server side.   Valid operator values are: * &#x60;eq&#x60; - equal to; * &#x60;neq&#x60; - not equal to; * &#x60;gt&#x60; - greater than; * &#x60;gteq&#x60; - greater than or equal to; * &#x60;lt&#x60; - lower than; * &#x60;lteq&#x60; - lower than or equal to; * &#x60;like&#x60;.  &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **processVariables** | **String**| Only include tasks that belong to process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value. **Note:** Values are always treated as &#x60;String&#x60; objects on server side.   Valid operator values are: * &#x60;eq&#x60; - equal to; * &#x60;neq&#x60; - not equal to; * &#x60;gt&#x60; - greater than; * &#x60;gteq&#x60; - greater than or equal to; * &#x60;lt&#x60; - lower than; * &#x60;lteq&#x60; - lower than or equal to; * &#x60;like&#x60;; * &#x60;notLike&#x60;.  &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match the variable name provided in &#x60;taskVariables&#x60; and &#x60;processVariables&#x60; case- insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal. | [optional] 
 **variableValuesIgnoreCase** | **Boolean**| Match the variable value provided in &#x60;taskVariables&#x60; and &#x60;processVariables&#x60; case- insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal. | [optional] 
 **taskInvolvedUser** | **String**| Restrict to tasks with a historic identity link to the given user. | [optional] 
 **taskInvolvedGroup** | **String**| Restrict to tasks with a historic identity link to the given group. | [optional] 
 **taskHadCandidateUser** | **String**| Restrict to tasks with a historic identity link to the given candidate user. | [optional] 
 **taskHadCandidateGroup** | **String**| Restrict to tasks with a historic identity link to the given candidate group. | [optional] 
 **withCandidateGroups** | **Boolean**| Only include tasks which have a candidate group. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **withoutCandidateGroups** | **Boolean**| Only include tasks which have no candidate group. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[HistoricTaskInstanceDto]**](HistoricTaskInstanceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricTaskInstancesCount"></a>
# **getHistoricTaskInstancesCount**
> CountResultDto getHistoricTaskInstancesCount(opts)

Get Task Count

Queries for the number of historic tasks that fulfill the given parameters. Takes the same parameters as the [Get Tasks (Historic)](https://docs.camunda.org/manual/develop/reference/rest/history/task/get-task-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricTaskInstanceApi();
let opts = { 
  'taskId': "taskId_example", // String | Filter by task id.
  'taskParentTaskId': "taskParentTaskId_example", // String | Filter by parent task id.
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'processInstanceBusinessKey': "processInstanceBusinessKey_example", // String | Filter by process instance business key.
  'processInstanceBusinessKeyIn': "processInstanceBusinessKeyIn_example", // String | Filter by process instances with one of the give business keys. The keys need to be in a comma-separated list.
  'processInstanceBusinessKeyLike': "processInstanceBusinessKeyLike_example", // String | Filter by  process instance business key that has the parameter value as a substring.
  'executionId': "executionId_example", // String | Filter by the id of the execution that executed the task.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by process definition id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Restrict to tasks that belong to a process definition with the given key.
  'processDefinitionName': "processDefinitionName_example", // String | Restrict to tasks that belong to a process definition with the given name.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by case instance id.
  'caseExecutionId': "caseExecutionId_example", // String | Filter by the id of the case execution that executed the task.
  'caseDefinitionId': "caseDefinitionId_example", // String | Filter by case definition id.
  'caseDefinitionKey': "caseDefinitionKey_example", // String | Restrict to tasks that belong to a case definition with the given key.
  'caseDefinitionName': "caseDefinitionName_example", // String | Restrict to tasks that belong to a case definition with the given name.
  'activityInstanceIdIn': "activityInstanceIdIn_example", // String | Only include tasks which belong to one of the passed comma-separated activity instance ids.
  'taskName': "taskName_example", // String | Restrict to tasks that have the given name.
  'taskNameLike': "taskNameLike_example", // String | Restrict to tasks that have a name with the given parameter value as substring.
  'taskDescription': "taskDescription_example", // String | Restrict to tasks that have the given description.
  'taskDescriptionLike': "taskDescriptionLike_example", // String | Restrict to tasks that have a description that has the parameter value as a substring.
  'taskDefinitionKey': "taskDefinitionKey_example", // String | Restrict to tasks that have the given key.
  'taskDefinitionKeyIn': "taskDefinitionKeyIn_example", // String | Restrict to tasks that have one of the passed comma-separated task definition keys.
  'taskDeleteReason': "taskDeleteReason_example", // String | Restrict to tasks that have the given delete reason.
  'taskDeleteReasonLike': "taskDeleteReasonLike_example", // String | Restrict to tasks that have a delete reason that has the parameter value as a substring.
  'taskAssignee': "taskAssignee_example", // String | Restrict to tasks that the given user is assigned to.
  'taskAssigneeLike': "taskAssigneeLike_example", // String | Restrict to tasks that are assigned to users with the parameter value as a substring.
  'taskOwner': "taskOwner_example", // String | Restrict to tasks that the given user owns.
  'taskOwnerLike': "taskOwnerLike_example", // String | Restrict to tasks that are owned by users with the parameter value as a substring.
  'taskPriority': 56, // Number | Restrict to tasks that have the given priority.
  'assigned': true, // Boolean | If set to `true`, restricts the query to all tasks that are assigned.
  'unassigned': true, // Boolean | If set to `true`, restricts the query to all tasks that are unassigned.
  'finished': true, // Boolean | Only include finished tasks. Value may only be `true`, as `false` is the default behavior.
  'unfinished': true, // Boolean | Only include unfinished tasks. Value may only be `true`, as `false` is the default behavior.
  'processFinished': true, // Boolean | Only include tasks of finished processes. Value may only be `true`, as `false` is the default behavior.
  'processUnfinished': true, // Boolean | Only include tasks of unfinished processes. Value may only be `true`, as `false` is the default behavior.
  'taskDueDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'taskDueDateBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'taskDueDateAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'withoutTaskDueDate': true, // Boolean | Only include tasks which have no due date. Value may only be `true`, as `false` is the default behavior.
  'taskFollowUpDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'taskFollowUpDateBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'taskFollowUpDateAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'startedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'startedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'finishedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that were finished before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'finishedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to tasks that were finished after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A task instance must have one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include historic task instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'taskVariables': "taskVariables_example", // String | Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value. **Note:** Values are always treated as `String` objects on server side.   Valid operator values are: * `eq` - equal to; * `neq` - not equal to; * `gt` - greater than; * `gteq` - greater than or equal to; * `lt` - lower than; * `lteq` - lower than or equal to; * `like`.  `key` and `value` may not contain underscore or comma characters.
  'processVariables': "processVariables_example", // String | Only include tasks that belong to process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value. **Note:** Values are always treated as `String` objects on server side.   Valid operator values are: * `eq` - equal to; * `neq` - not equal to; * `gt` - greater than; * `gteq` - greater than or equal to; * `lt` - lower than; * `lteq` - lower than or equal to; * `like`; * `notLike`.  `key` and `value` may not contain underscore or comma characters.
  'variableNamesIgnoreCase': true, // Boolean | Match the variable name provided in `taskVariables` and `processVariables` case- insensitively. If set to `true` **variableName** and **variablename** are treated as equal.
  'variableValuesIgnoreCase': true, // Boolean | Match the variable value provided in `taskVariables` and `processVariables` case- insensitively. If set to `true` **variableValue** and **variablevalue** are treated as equal.
  'taskInvolvedUser': "taskInvolvedUser_example", // String | Restrict to tasks with a historic identity link to the given user.
  'taskInvolvedGroup': "taskInvolvedGroup_example", // String | Restrict to tasks with a historic identity link to the given group.
  'taskHadCandidateUser': "taskHadCandidateUser_example", // String | Restrict to tasks with a historic identity link to the given candidate user.
  'taskHadCandidateGroup': "taskHadCandidateGroup_example", // String | Restrict to tasks with a historic identity link to the given candidate group.
  'withCandidateGroups': true, // Boolean | Only include tasks which have a candidate group. Value may only be `true`, as `false` is the default behavior.
  'withoutCandidateGroups': true // Boolean | Only include tasks which have no candidate group. Value may only be `true`, as `false` is the default behavior.
};
apiInstance.getHistoricTaskInstancesCount(opts, (error, data, response) => {
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
 **taskId** | **String**| Filter by task id. | [optional] 
 **taskParentTaskId** | **String**| Filter by parent task id. | [optional] 
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **processInstanceBusinessKey** | **String**| Filter by process instance business key. | [optional] 
 **processInstanceBusinessKeyIn** | **String**| Filter by process instances with one of the give business keys. The keys need to be in a comma-separated list. | [optional] 
 **processInstanceBusinessKeyLike** | **String**| Filter by  process instance business key that has the parameter value as a substring. | [optional] 
 **executionId** | **String**| Filter by the id of the execution that executed the task. | [optional] 
 **processDefinitionId** | **String**| Filter by process definition id. | [optional] 
 **processDefinitionKey** | **String**| Restrict to tasks that belong to a process definition with the given key. | [optional] 
 **processDefinitionName** | **String**| Restrict to tasks that belong to a process definition with the given name. | [optional] 
 **caseInstanceId** | **String**| Filter by case instance id. | [optional] 
 **caseExecutionId** | **String**| Filter by the id of the case execution that executed the task. | [optional] 
 **caseDefinitionId** | **String**| Filter by case definition id. | [optional] 
 **caseDefinitionKey** | **String**| Restrict to tasks that belong to a case definition with the given key. | [optional] 
 **caseDefinitionName** | **String**| Restrict to tasks that belong to a case definition with the given name. | [optional] 
 **activityInstanceIdIn** | **String**| Only include tasks which belong to one of the passed comma-separated activity instance ids. | [optional] 
 **taskName** | **String**| Restrict to tasks that have the given name. | [optional] 
 **taskNameLike** | **String**| Restrict to tasks that have a name with the given parameter value as substring. | [optional] 
 **taskDescription** | **String**| Restrict to tasks that have the given description. | [optional] 
 **taskDescriptionLike** | **String**| Restrict to tasks that have a description that has the parameter value as a substring. | [optional] 
 **taskDefinitionKey** | **String**| Restrict to tasks that have the given key. | [optional] 
 **taskDefinitionKeyIn** | **String**| Restrict to tasks that have one of the passed comma-separated task definition keys. | [optional] 
 **taskDeleteReason** | **String**| Restrict to tasks that have the given delete reason. | [optional] 
 **taskDeleteReasonLike** | **String**| Restrict to tasks that have a delete reason that has the parameter value as a substring. | [optional] 
 **taskAssignee** | **String**| Restrict to tasks that the given user is assigned to. | [optional] 
 **taskAssigneeLike** | **String**| Restrict to tasks that are assigned to users with the parameter value as a substring. | [optional] 
 **taskOwner** | **String**| Restrict to tasks that the given user owns. | [optional] 
 **taskOwnerLike** | **String**| Restrict to tasks that are owned by users with the parameter value as a substring. | [optional] 
 **taskPriority** | **Number**| Restrict to tasks that have the given priority. | [optional] 
 **assigned** | **Boolean**| If set to &#x60;true&#x60;, restricts the query to all tasks that are assigned. | [optional] 
 **unassigned** | **Boolean**| If set to &#x60;true&#x60;, restricts the query to all tasks that are unassigned. | [optional] 
 **finished** | **Boolean**| Only include finished tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **unfinished** | **Boolean**| Only include unfinished tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **processFinished** | **Boolean**| Only include tasks of finished processes. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **processUnfinished** | **Boolean**| Only include tasks of unfinished processes. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **taskDueDate** | **Date**| Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **taskDueDateBefore** | **Date**| Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **taskDueDateAfter** | **Date**| Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **withoutTaskDueDate** | **Boolean**| Only include tasks which have no due date. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **taskFollowUpDate** | **Date**| Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **taskFollowUpDateBefore** | **Date**| Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **taskFollowUpDateAfter** | **Date**| Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedBefore** | **Date**| Restrict to tasks that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedAfter** | **Date**| Restrict to tasks that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **finishedBefore** | **Date**| Restrict to tasks that were finished before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **finishedAfter** | **Date**| Restrict to tasks that were finished after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A task instance must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic task instances that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **taskVariables** | **String**| Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value. **Note:** Values are always treated as &#x60;String&#x60; objects on server side.   Valid operator values are: * &#x60;eq&#x60; - equal to; * &#x60;neq&#x60; - not equal to; * &#x60;gt&#x60; - greater than; * &#x60;gteq&#x60; - greater than or equal to; * &#x60;lt&#x60; - lower than; * &#x60;lteq&#x60; - lower than or equal to; * &#x60;like&#x60;.  &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **processVariables** | **String**| Only include tasks that belong to process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value. **Note:** Values are always treated as &#x60;String&#x60; objects on server side.   Valid operator values are: * &#x60;eq&#x60; - equal to; * &#x60;neq&#x60; - not equal to; * &#x60;gt&#x60; - greater than; * &#x60;gteq&#x60; - greater than or equal to; * &#x60;lt&#x60; - lower than; * &#x60;lteq&#x60; - lower than or equal to; * &#x60;like&#x60;; * &#x60;notLike&#x60;.  &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match the variable name provided in &#x60;taskVariables&#x60; and &#x60;processVariables&#x60; case- insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal. | [optional] 
 **variableValuesIgnoreCase** | **Boolean**| Match the variable value provided in &#x60;taskVariables&#x60; and &#x60;processVariables&#x60; case- insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal. | [optional] 
 **taskInvolvedUser** | **String**| Restrict to tasks with a historic identity link to the given user. | [optional] 
 **taskInvolvedGroup** | **String**| Restrict to tasks with a historic identity link to the given group. | [optional] 
 **taskHadCandidateUser** | **String**| Restrict to tasks with a historic identity link to the given candidate user. | [optional] 
 **taskHadCandidateGroup** | **String**| Restrict to tasks with a historic identity link to the given candidate group. | [optional] 
 **withCandidateGroups** | **Boolean**| Only include tasks which have a candidate group. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **withoutCandidateGroups** | **Boolean**| Only include tasks which have no candidate group. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queryHistoricTaskInstances"></a>
# **queryHistoricTaskInstances**
> [HistoricTaskInstanceDto] queryHistoricTaskInstances(opts)

Get Tasks (Historic) (POST)

Queries for historic tasks that fulfill the given parameters. This method is slightly more powerful than the [Get Tasks (Historic)](https://docs.camunda.org/manual/develop/reference/rest/history/task/get-task-query/) method because it allows filtering by multiple process or task variables of types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;. The size of the result set can be retrieved by using the [Get Task Count (POST)](https://docs.camunda.org/manual/develop/reference/rest/history/task/post-task-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricTaskInstanceApi();
let opts = { 
  'body': new CamundaRestApi.HistoricTaskInstanceQueryDto(), // HistoricTaskInstanceQueryDto | 
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.queryHistoricTaskInstances(opts, (error, data, response) => {
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
 **body** | [**HistoricTaskInstanceQueryDto**](HistoricTaskInstanceQueryDto.md)|  | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[HistoricTaskInstanceDto]**](HistoricTaskInstanceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryHistoricTaskInstancesCount"></a>
# **queryHistoricTaskInstancesCount**
> CountResultDto queryHistoricTaskInstancesCount(opts)

Get Task Count (POST)

Queries for the number of historic tasks that fulfill the given parameters. Takes the same parameters as the [Get Tasks (Historic)](https://docs.camunda.org/manual/develop/reference/rest/history/task/get-task-query/) method. Corresponds to the size of the result set of the [Get Tasks (Historic) (POST)](https://docs.camunda.org/manual/develop/reference/rest/history/task/post-task-query/) method and takes the same parameters.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.HistoricTaskInstanceApi();
let opts = { 
  'body': new CamundaRestApi.HistoricTaskInstanceQueryDto() // HistoricTaskInstanceQueryDto | 
};
apiInstance.queryHistoricTaskInstancesCount(opts, (error, data, response) => {
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
 **body** | [**HistoricTaskInstanceQueryDto**](HistoricTaskInstanceQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

