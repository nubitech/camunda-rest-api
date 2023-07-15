# CamundaRestApi.HistoricTaskInstanceQueryDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **String** | Filter by task id. | [optional] 
**taskParentTaskId** | **String** | Filter by parent task id. | [optional] 
**processInstanceId** | **String** | Filter by process instance id. | [optional] 
**processInstanceBusinessKey** | **String** | Filter by process instance business key. | [optional] 
**processInstanceBusinessKeyIn** | **[String]** | Filter by process instances with one of the give business keys. The keys need to be in a comma-separated list. | [optional] 
**processInstanceBusinessKeyLike** | **String** | Filter by  process instance business key that has the parameter value as a substring. | [optional] 
**executionId** | **String** | Filter by the id of the execution that executed the task. | [optional] 
**processDefinitionId** | **String** | Filter by process definition id. | [optional] 
**processDefinitionKey** | **String** | Restrict to tasks that belong to a process definition with the given key. | [optional] 
**processDefinitionName** | **String** | Restrict to tasks that belong to a process definition with the given name. | [optional] 
**caseInstanceId** | **String** | Filter by case instance id. | [optional] 
**caseExecutionId** | **String** | Filter by the id of the case execution that executed the task. | [optional] 
**caseDefinitionId** | **String** | Filter by case definition id. | [optional] 
**caseDefinitionKey** | **String** | Restrict to tasks that belong to a case definition with the given key. | [optional] 
**caseDefinitionName** | **String** | Restrict to tasks that belong to a case definition with the given name. | [optional] 
**activityInstanceIdIn** | **[String]** | Only include tasks which belong to one of the passed  activity instance ids. | [optional] 
**taskName** | **String** | Restrict to tasks that have the given name. | [optional] 
**taskNameLike** | **String** | Restrict to tasks that have a name with the given parameter value as substring. | [optional] 
**taskDescription** | **String** | Restrict to tasks that have the given description. | [optional] 
**taskDescriptionLike** | **String** | Restrict to tasks that have a description that has the parameter value as a substring. | [optional] 
**taskDefinitionKey** | **String** | Restrict to tasks that have the given key. | [optional] 
**taskDefinitionKeyIn** | **[String]** | Restrict to tasks that have one of the passed  task definition keys. | [optional] 
**taskDeleteReason** | **String** | Restrict to tasks that have the given delete reason. | [optional] 
**taskDeleteReasonLike** | **String** | Restrict to tasks that have a delete reason that has the parameter value as a substring. | [optional] 
**taskAssignee** | **String** | Restrict to tasks that the given user is assigned to. | [optional] 
**taskAssigneeLike** | **String** | Restrict to tasks that are assigned to users with the parameter value as a substring. | [optional] 
**taskOwner** | **String** | Restrict to tasks that the given user owns. | [optional] 
**taskOwnerLike** | **String** | Restrict to tasks that are owned by users with the parameter value as a substring. | [optional] 
**taskPriority** | **Number** | Restrict to tasks that have the given priority. | [optional] 
**assigned** | **Boolean** | If set to &#x60;true&#x60;, restricts the query to all tasks that are assigned. | [optional] 
**unassigned** | **Boolean** | If set to &#x60;true&#x60;, restricts the query to all tasks that are unassigned. | [optional] 
**finished** | **Boolean** | Only include finished tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
**unfinished** | **Boolean** | Only include unfinished tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
**processFinished** | **Boolean** | Only include tasks of finished processes. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
**processUnfinished** | **Boolean** | Only include tasks of unfinished processes. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
**taskDueDate** | **Date** | Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
**taskDueDateBefore** | **Date** | Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
**taskDueDateAfter** | **Date** | Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
**withoutTaskDueDate** | **Boolean** | Only include tasks which have no due date. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
**taskFollowUpDate** | **Date** | Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
**taskFollowUpDateBefore** | **Date** | Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
**taskFollowUpDateAfter** | **Date** | Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
**startedBefore** | **Date** | Restrict to tasks that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
**startedAfter** | **Date** | Restrict to tasks that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
**finishedBefore** | **Date** | Restrict to tasks that were finished before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
**finishedAfter** | **Date** | Restrict to tasks that were finished after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
**tenantIdIn** | **[String]** | Filter by a  list of tenant ids. A task instance must have one of the given tenant ids. | [optional] 
**withoutTenantId** | **Boolean** | Only include historic task instances that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
**taskVariables** | [**[VariableQueryParameterDto]**](VariableQueryParameterDto.md) | Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value. **Note:** Values are always treated as &#x60;String&#x60; objects on server side.   Valid operator values are: * &#x60;eq&#x60; - equal to; * &#x60;neq&#x60; - not equal to; * &#x60;gt&#x60; - greater than; * &#x60;gteq&#x60; - greater than or equal to; * &#x60;lt&#x60; - lower than; * &#x60;lteq&#x60; - lower than or equal to; * &#x60;like&#x60;.  &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
**processVariables** | [**[VariableQueryParameterDto]**](VariableQueryParameterDto.md) | Only include tasks that belong to process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value. **Note:** Values are always treated as &#x60;String&#x60; objects on server side.   Valid operator values are: * &#x60;eq&#x60; - equal to; * &#x60;neq&#x60; - not equal to; * &#x60;gt&#x60; - greater than; * &#x60;gteq&#x60; - greater than or equal to; * &#x60;lt&#x60; - lower than; * &#x60;lteq&#x60; - lower than or equal to; * &#x60;like&#x60;; * &#x60;notLike&#x60;.  &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
**variableNamesIgnoreCase** | **Boolean** | Match the variable name provided in &#x60;taskVariables&#x60; and &#x60;processVariables&#x60; case- insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal. | [optional] 
**variableValuesIgnoreCase** | **Boolean** | Match the variable value provided in &#x60;taskVariables&#x60; and &#x60;processVariables&#x60; case- insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal. | [optional] 
**taskInvolvedUser** | **String** | Restrict to tasks with a historic identity link to the given user. | [optional] 
**taskInvolvedGroup** | **String** | Restrict to tasks with a historic identity link to the given group. | [optional] 
**taskHadCandidateUser** | **String** | Restrict to tasks with a historic identity link to the given candidate user. | [optional] 
**taskHadCandidateGroup** | **String** | Restrict to tasks with a historic identity link to the given candidate group. | [optional] 
**withCandidateGroups** | **Boolean** | Only include tasks which have a candidate group. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
**withoutCandidateGroups** | **Boolean** | Only include tasks which have no candidate group. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
**orQueries** | [**[HistoricTaskInstanceQueryDto]**](HistoricTaskInstanceQueryDto.md) | A JSON array of nested historic task instance queries with OR semantics.  A task instance matches a nested query if it fulfills at least one of the query&#x27;s predicates.  With multiple nested queries, a task instance must fulfill at least one predicate of each query ([Conjunctive Normal Form](https://en.wikipedia.org/wiki/Conjunctive_normal_form)).  All task instance query properties can be used except for: &#x60;sorting&#x60;, &#x60;withCandidateGroups&#x60;, &#x60; withoutCandidateGroups&#x60;.  See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/process-engine-api/#or-queries) for more information about OR queries. | [optional] 
**sorting** | [**[HistoricTaskInstanceQueryDtoSorting]**](HistoricTaskInstanceQueryDtoSorting.md) | An array of criteria to sort the result by. Each element of the array is                     an object that specifies one ordering. The position in the array                     identifies the rank of an ordering, i.e., whether it is primary, secondary,                     etc. Sorting has no effect for &#x60;count&#x60; endpoints | [optional] 