# CamundaRestApi.TaskApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**claim**](TaskApi.md#claim) | **POST** /task/{id}/claim | Claim
[**complete**](TaskApi.md#complete) | **POST** /task/{id}/complete | Complete
[**createTask**](TaskApi.md#createTask) | **POST** /task/create | Create
[**delegateTask**](TaskApi.md#delegateTask) | **POST** /task/{id}/delegate | Delegate
[**deleteTask**](TaskApi.md#deleteTask) | **DELETE** /task/{id} | Delete
[**getDeployedForm**](TaskApi.md#getDeployedForm) | **GET** /task/{id}/deployed-form | Get Deployed Form
[**getForm**](TaskApi.md#getForm) | **GET** /task/{id}/form | Get Form Key
[**getFormVariables**](TaskApi.md#getFormVariables) | **GET** /task/{id}/form-variables | Get Task Form Variables
[**getRenderedForm**](TaskApi.md#getRenderedForm) | **GET** /task/{id}/rendered-form | Get Rendered Form
[**getTask**](TaskApi.md#getTask) | **GET** /task/{id} | Get
[**getTaskCountByCandidateGroup**](TaskApi.md#getTaskCountByCandidateGroup) | **GET** /task/report/candidate-group-count | Get Task Count By Candidate Group
[**getTasks**](TaskApi.md#getTasks) | **GET** /task | Get List
[**getTasksCount**](TaskApi.md#getTasksCount) | **GET** /task/count | Get List Count
[**handleBpmnError**](TaskApi.md#handleBpmnError) | **POST** /task/{id}/bpmnError | Handle BPMN Error
[**handleEscalation**](TaskApi.md#handleEscalation) | **POST** /task/{id}/bpmnEscalation | Handle BPMN Escalation
[**queryTasks**](TaskApi.md#queryTasks) | **POST** /task | Get List (POST)
[**queryTasksCount**](TaskApi.md#queryTasksCount) | **POST** /task/count | Get List Count (POST)
[**resolve**](TaskApi.md#resolve) | **POST** /task/{id}/resolve | Resolve
[**setAssignee**](TaskApi.md#setAssignee) | **POST** /task/{id}/assignee | Set Assignee
[**submit**](TaskApi.md#submit) | **POST** /task/{id}/submit-form | Submit Form
[**unclaim**](TaskApi.md#unclaim) | **POST** /task/{id}/unclaim | Unclaim
[**updateTask**](TaskApi.md#updateTask) | **PUT** /task/{id} | Update

<a name="claim"></a>
# **claim**
> claim(id, opts)

Claim

Claims a task for a specific user.  **Note:** The difference with the [Set Assignee](https://docs.camunda.org/manual/develop/reference/rest/task/post-assignee/) method is that here a check is performed to see if the task already has a user assigned to it.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task to claim.
let opts = { 
  'body': new CamundaRestApi.UserIdDto() // UserIdDto | Provide the id of the user that claims the task.
};
apiInstance.claim(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to claim. | 
 **body** | [**UserIdDto**](UserIdDto.md)| Provide the id of the user that claims the task. | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="complete"></a>
# **complete**
> {&#x27;String&#x27;: VariableValueDto} complete(id, opts)

Complete

Completes a task and updates process variables.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task to complete.
let opts = { 
  'body': new CamundaRestApi.CompleteTaskDto() // CompleteTaskDto | 
};
apiInstance.complete(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to complete. | 
 **body** | [**CompleteTaskDto**](CompleteTaskDto.md)|  | [optional] 

### Return type

[**{&#x27;String&#x27;: VariableValueDto}**](VariableValueDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTask"></a>
# **createTask**
> createTask(opts)

Create

Creates a new task.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let opts = { 
  'body': new CamundaRestApi.TaskDto() // TaskDto | 
};
apiInstance.createTask(opts, (error, data, response) => {
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
 **body** | [**TaskDto**](TaskDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="delegateTask"></a>
# **delegateTask**
> delegateTask(id, opts)

Delegate

Delegates a task to another user.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task to delegate.
let opts = { 
  'body': new CamundaRestApi.UserIdDto() // UserIdDto | Provide the id of the user that the task should be delegated to.
};
apiInstance.delegateTask(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to delegate. | 
 **body** | [**UserIdDto**](UserIdDto.md)| Provide the id of the user that the task should be delegated to. | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTask"></a>
# **deleteTask**
> deleteTask(id)

Delete

Removes a task by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task to be removed.

apiInstance.deleteTask(id, (error, data, response) => {
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
 **id** | **String**| The id of the task to be removed. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeployedForm"></a>
# **getDeployedForm**
> &#x27;Blob&#x27; getDeployedForm(id)

Get Deployed Form

Retrieves the deployed form that is referenced from a given task. For further information please refer to the [User Guide](https://docs.camunda.org/manual/develop/user-guide/task-forms/#embedded-task-forms).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task to get the deployed form for.

apiInstance.getDeployedForm(id, (error, data, response) => {
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
 **id** | **String**| The id of the task to get the deployed form for. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xhtml+xml, application/json

<a name="getForm"></a>
# **getForm**
> FormDto getForm(id)

Get Form Key

Retrieves the form key for a task. The form key corresponds to the &#x60;FormData#formKey&#x60; property in the engine. This key can be used to do task-specific form rendering in client applications. Additionally, the context path of the containing process application is returned.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task to retrieve the form for.

apiInstance.getForm(id, (error, data, response) => {
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
 **id** | **String**| The id of the task to retrieve the form for. | 

### Return type

[**FormDto**](FormDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFormVariables"></a>
# **getFormVariables**
> {&#x27;String&#x27;: VariableValueDto} getFormVariables(id, opts)

Get Task Form Variables

Retrieves the form variables for a task. The form variables take form data specified on the task into account. If form fields are defined, the variable types and default values of the form fields are taken into account.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task to retrieve the variables for.
let opts = { 
  'variableNames': "variableNames_example", // String | A comma-separated list of variable names. Allows restricting the list of requested variables to the variable names in the list. It is best practice to restrict the list of variables to the variables actually required by the form in order to minimize fetching of data. If the query parameter is ommitted all variables are fetched. If the query parameter contains non-existent variable names, the variable names are ignored.
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](http://jackson.codehaus.org/) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getFormVariables(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to retrieve the variables for. | 
 **variableNames** | **String**| A comma-separated list of variable names. Allows restricting the list of requested variables to the variable names in the list. It is best practice to restrict the list of variables to the variables actually required by the form in order to minimize fetching of data. If the query parameter is ommitted all variables are fetched. If the query parameter contains non-existent variable names, the variable names are ignored. | [optional] 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#x27;s](http://jackson.codehaus.org/) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#x27;s classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] [default to true]

### Return type

[**{&#x27;String&#x27;: VariableValueDto}**](VariableValueDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRenderedForm"></a>
# **getRenderedForm**
> &#x27;Blob&#x27; getRenderedForm(id)

Get Rendered Form

Retrieves the rendered form for a task. This method can be used to get the HTML rendering of a [Generated Task Form](https://docs.camunda.org/manual/develop/user-guide/task-forms/#generated-task-forms).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task to get the rendered form for.

apiInstance.getRenderedForm(id, (error, data, response) => {
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
 **id** | **String**| The id of the task to get the rendered form for. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xhtml+xml, application/json

<a name="getTask"></a>
# **getTask**
> TaskDto getTask(id)

Get

Retrieves a task by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task to be retrieved.

apiInstance.getTask(id, (error, data, response) => {
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
 **id** | **String**| The id of the task to be retrieved. | 

### Return type

[**TaskDto**](TaskDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTaskCountByCandidateGroup"></a>
# **getTaskCountByCandidateGroup**
> [TaskCountByCandidateGroupResultDto] getTaskCountByCandidateGroup()

Get Task Count By Candidate Group

Retrieves the number of tasks for each candidate group.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
apiInstance.getTaskCountByCandidateGroup((error, data, response) => {
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

[**[TaskCountByCandidateGroupResultDto]**](TaskCountByCandidateGroupResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/csv, text/csv

<a name="getTasks"></a>
# **getTasks**
> [TaskDto] getTasks(opts)

Get List

Queries for tasks that fulfill a given filter. The size of the result set can be retrieved by using the Get Task Count method.  **Security Consideration:** There are several query parameters (such as assigneeExpression) for specifying an EL expression. These are disabled by default to prevent remote code execution. See the section on [security considerations](https://docs.camunda.org/manual/develop/user-guide/process-engine/securing-custom-code/) for custom code in the user guide for details.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let opts = { 
  'taskId': "taskId_example", // String | Restrict to task with the given id.
  'taskIdIn': "taskIdIn_example", // String | Restrict to tasks with any of the given ids.
  'processInstanceId': "processInstanceId_example", // String | Restrict to tasks that belong to process instances with the given id.
  'processInstanceIdIn': "processInstanceIdIn_example", // String | Restrict to tasks that belong to process instances with the given ids.
  'processInstanceBusinessKey': "processInstanceBusinessKey_example", // String | Restrict to tasks that belong to process instances with the given business key.
  'processInstanceBusinessKeyExpression': "processInstanceBusinessKeyExpression_example", // String | Restrict to tasks that belong to process instances with the given business key which  is described by an expression. See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions.
  'processInstanceBusinessKeyIn': "processInstanceBusinessKeyIn_example", // String | Restrict to tasks that belong to process instances with one of the give business keys.  The keys need to be in a comma-separated list.
  'processInstanceBusinessKeyLike': "processInstanceBusinessKeyLike_example", // String | Restrict to tasks that have a process instance business key that has the parameter  value as a substring.
  'processInstanceBusinessKeyLikeExpression': "processInstanceBusinessKeyLikeExpression_example", // String | Restrict to tasks that have a process instance business key that has the parameter  value as a substring and is described by an expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
  'processDefinitionId': "processDefinitionId_example", // String | Restrict to tasks that belong to a process definition with the given id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Restrict to tasks that belong to a process definition with the given key.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Restrict to tasks that belong to a process definition with one of the given keys. The  keys need to be in a comma-separated list.
  'processDefinitionName': "processDefinitionName_example", // String | Restrict to tasks that belong to a process definition with the given name.
  'processDefinitionNameLike': "processDefinitionNameLike_example", // String | Restrict to tasks that have a process definition name that has the parameter value as  a substring.
  'executionId': "executionId_example", // String | Restrict to tasks that belong to an execution with the given id.
  'caseInstanceId': "caseInstanceId_example", // String | Restrict to tasks that belong to case instances with the given id.
  'caseInstanceBusinessKey': "caseInstanceBusinessKey_example", // String | Restrict to tasks that belong to case instances with the given business key.
  'caseInstanceBusinessKeyLike': "caseInstanceBusinessKeyLike_example", // String | Restrict to tasks that have a case instance business key that has the parameter value  as a substring.
  'caseDefinitionId': "caseDefinitionId_example", // String | Restrict to tasks that belong to a case definition with the given id.
  'caseDefinitionKey': "caseDefinitionKey_example", // String | Restrict to tasks that belong to a case definition with the given key.
  'caseDefinitionName': "caseDefinitionName_example", // String | Restrict to tasks that belong to a case definition with the given name.
  'caseDefinitionNameLike': "caseDefinitionNameLike_example", // String | Restrict to tasks that have a case definition name that has the parameter value as a  substring.
  'caseExecutionId': "caseExecutionId_example", // String | Restrict to tasks that belong to a case execution with the given id.
  'activityInstanceIdIn': "activityInstanceIdIn_example", // String | Only include tasks which belong to one of the passed and comma-separated activity  instance ids.
  'tenantIdIn': "tenantIdIn_example", // String | Only include tasks which belong to one of the passed and comma-separated  tenant ids.
  'withoutTenantId': false, // Boolean | Only include tasks which belong to no tenant. Value may only be `true`,  as `false` is the default behavior.
  'assignee': "assignee_example", // String | Restrict to tasks that the given user is assigned to.
  'assigneeExpression': "assigneeExpression_example", // String | Restrict to tasks that the user described by the given expression is assigned to.  See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
  'assigneeLike': "assigneeLike_example", // String | Restrict to tasks that have an assignee that has the parameter  value as a substring.
  'assigneeLikeExpression': "assigneeLikeExpression_example", // String | Restrict to tasks that have an assignee that has the parameter value described by the  given expression as a substring. See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
  'assigneeIn': "assigneeIn_example", // String | Only include tasks which are assigned to one of the passed and  comma-separated user ids.
  'assigneeNotIn': "assigneeNotIn_example", // String | Only include tasks which are not assigned to one of the passed and comma-separated user ids.
  'owner': "owner_example", // String | Restrict to tasks that the given user owns.
  'ownerExpression': "ownerExpression_example", // String | Restrict to tasks that the user described by the given expression owns. See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
  'candidateGroup': "candidateGroup_example", // String | Only include tasks that are offered to the given group.
  'candidateGroupExpression': "candidateGroupExpression_example", // String | Only include tasks that are offered to the group described by the given expression.  See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
  'candidateUser': "candidateUser_example", // String | Only include tasks that are offered to the given user or to one of his groups.
  'candidateUserExpression': "candidateUserExpression_example", // String | Only include tasks that are offered to the user described by the given expression.  See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
  'includeAssignedTasks': false, // Boolean | Also include tasks that are assigned to users in candidate queries. Default is to only  include tasks that are not assigned to any user if you query by candidate user or group(s).
  'involvedUser': "involvedUser_example", // String | Only include tasks that the given user is involved in. A user is involved in a task if  an identity link exists between task and user (e.g., the user is the assignee).
  'involvedUserExpression': "involvedUserExpression_example", // String | Only include tasks that the user described by the given expression is involved in. A user is involved in a task if an identity link exists between task and user (e.g., the user is the assignee). See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions.
  'assigned': false, // Boolean | If set to `true`, restricts the query to all tasks that are assigned.
  'unassigned': false, // Boolean | If set to `true`, restricts the query to all tasks that are unassigned.
  'taskDefinitionKey': "taskDefinitionKey_example", // String | Restrict to tasks that have the given key.
  'taskDefinitionKeyIn': "taskDefinitionKeyIn_example", // String | Restrict to tasks that have one of the given keys. The keys need to be in a comma-separated list.
  'taskDefinitionKeyLike': "taskDefinitionKeyLike_example", // String | Restrict to tasks that have a key that has the parameter value as a substring.
  'name': "name_example", // String | Restrict to tasks that have the given name.
  'nameNotEqual': "nameNotEqual_example", // String | Restrict to tasks that do not have the given name.
  'nameLike': "nameLike_example", // String | Restrict to tasks that have a name with the given parameter value as substring.
  'nameNotLike': "nameNotLike_example", // String | Restrict to tasks that do not have a name with the given parameter value as substring.
  'description': "description_example", // String | Restrict to tasks that have the given description.
  'descriptionLike': "descriptionLike_example", // String | Restrict to tasks that have a description that has the parameter value as a substring.
  'priority': 56, // Number | Restrict to tasks that have the given priority.
  'maxPriority': 56, // Number | Restrict to tasks that have a lower or equal priority.
  'minPriority': 56, // Number | Restrict to tasks that have a higher or equal priority.
  'dueDate': "dueDate_example", // String | Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.546+0200`.
  'dueDateExpression': "dueDateExpression_example", // String | Restrict to tasks that are due on the date described by the given expression. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'dueAfter': "dueAfter_example", // String | Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.435+0200`.
  'dueAfterExpression': "dueAfterExpression_example", // String | Restrict to tasks that are due after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'dueBefore': "dueBefore_example", // String | Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.243+0200`.
  'dueBeforeExpression': "dueBeforeExpression_example", // String | Restrict to tasks that are due before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'withoutDueDate': false, // Boolean | Only include tasks which have no due date. Value may only be `true`,  as `false` is the default behavior.
  'followUpDate': "followUpDate_example", // String | Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.342+0200`.
  'followUpDateExpression': "followUpDateExpression_example", // String | Restrict to tasks that have a followUp date on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'followUpAfter': "followUpAfter_example", // String | Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.542+0200`.
  'followUpAfterExpression': "followUpAfterExpression_example", // String | Restrict to tasks that have a followUp date after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'followUpBefore': "followUpBefore_example", // String | Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.234+0200`.
  'followUpBeforeExpression': "followUpBeforeExpression_example", // String | Restrict to tasks that have a followUp date before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'followUpBeforeOrNotExistent': "followUpBeforeOrNotExistent_example", // String | Restrict to tasks that have no followUp date or a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.432+0200`. The typical use case is to query all `active` tasks for a user for a given date.
  'followUpBeforeOrNotExistentExpression': "followUpBeforeOrNotExistentExpression_example", // String | Restrict to tasks that have no followUp date or a followUp date before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'createdOn': "createdOn_example", // String | Restrict to tasks that were created on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.324+0200`.
  'createdOnExpression': "createdOnExpression_example", // String | Restrict to tasks that were created on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'createdAfter': "createdAfter_example", // String | Restrict to tasks that were created after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.342+0200`.
  'createdAfterExpression': "createdAfterExpression_example", // String | Restrict to tasks that were created after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'createdBefore': "createdBefore_example", // String | Restrict to tasks that were created before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.332+0200`.
  'createdBeforeExpression': "createdBeforeExpression_example", // String | Restrict to tasks that were created before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'updatedAfter': "updatedAfter_example", // String | Restrict to tasks that were updated after the given date. Every action that fires  a [task update event](https://docs.camunda.org/manual/develop/user-guide/process-engine/delegation-code/#task-listener-event-lifecycle) is considered as updating the task. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.332+0200`.
  'updatedAfterExpression': "updatedAfterExpression_example", // String | Restrict to tasks that were updated after the date described by the given expression. Every action that fires  a [task update event](https://docs.camunda.org/manual/develop/user-guide/process-engine/delegation-code/#task-listener-event-lifecycle) is considered as updating the task. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'delegationState': "delegationState_example", // String | Restrict to tasks that are in the given delegation state. Valid values are `PENDING` and `RESOLVED`.
  'candidateGroups': "candidateGroups_example", // String | Restrict to tasks that are offered to any of the given candidate groups. Takes a comma-separated list of group names, so for example `developers,support,sales`.
  'candidateGroupsExpression': "candidateGroupsExpression_example", // String | Restrict to tasks that are offered to any of the candidate groups described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to `java.util.List` of Strings.
  'withCandidateGroups': false, // Boolean | Only include tasks which have a candidate group. Value may only be `true`, as `false` is the default behavior.
  'withoutCandidateGroups': false, // Boolean | Only include tasks which have no candidate group. Value may only be `true`, as `false` is the default behavior.
  'withCandidateUsers': false, // Boolean | Only include tasks which have a candidate user. Value may only be `true`, as `false` is the default behavior.
  'withoutCandidateUsers': false, // Boolean | Only include tasks which have no candidate users. Value may only be `true`, as `false` is the default behavior.
  'active': false, // Boolean | Only include active tasks. Value may only be `true`, as `false` is the default behavior.
  'suspended': false, // Boolean | Only include suspended tasks. Value may only be `true`, as `false` is the default behavior.
  'taskVariables': "taskVariables_example", // String | Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
  'processVariables': "processVariables_example", // String | Only include tasks that belong to process instances that have variables with certain  values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`; `notLike`. `key` and `value` may not contain underscore or comma characters.
  'caseInstanceVariables': "caseInstanceVariables_example", // String | Only include tasks that belong to case instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
  'variableNamesIgnoreCase': false, // Boolean | Match all variable names in this query case-insensitively. If set `variableName` and `variablename` are treated as equal.
  'variableValuesIgnoreCase': false, // Boolean | Match all variable values in this query case-insensitively. If set `variableValue` and `variablevalue` are treated as equal.
  'parentTaskId': "parentTaskId_example", // String | Restrict query to all tasks that are sub tasks of the given task. Takes a task id.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getTasks(opts, (error, data, response) => {
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
 **taskId** | **String**| Restrict to task with the given id. | [optional] 
 **taskIdIn** | **String**| Restrict to tasks with any of the given ids. | [optional] 
 **processInstanceId** | **String**| Restrict to tasks that belong to process instances with the given id. | [optional] 
 **processInstanceIdIn** | **String**| Restrict to tasks that belong to process instances with the given ids. | [optional] 
 **processInstanceBusinessKey** | **String**| Restrict to tasks that belong to process instances with the given business key. | [optional] 
 **processInstanceBusinessKeyExpression** | **String**| Restrict to tasks that belong to process instances with the given business key which  is described by an expression. See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. | [optional] 
 **processInstanceBusinessKeyIn** | **String**| Restrict to tasks that belong to process instances with one of the give business keys.  The keys need to be in a comma-separated list. | [optional] 
 **processInstanceBusinessKeyLike** | **String**| Restrict to tasks that have a process instance business key that has the parameter  value as a substring. | [optional] 
 **processInstanceBusinessKeyLikeExpression** | **String**| Restrict to tasks that have a process instance business key that has the parameter  value as a substring and is described by an expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. | [optional] 
 **processDefinitionId** | **String**| Restrict to tasks that belong to a process definition with the given id. | [optional] 
 **processDefinitionKey** | **String**| Restrict to tasks that belong to a process definition with the given key. | [optional] 
 **processDefinitionKeyIn** | **String**| Restrict to tasks that belong to a process definition with one of the given keys. The  keys need to be in a comma-separated list. | [optional] 
 **processDefinitionName** | **String**| Restrict to tasks that belong to a process definition with the given name. | [optional] 
 **processDefinitionNameLike** | **String**| Restrict to tasks that have a process definition name that has the parameter value as  a substring. | [optional] 
 **executionId** | **String**| Restrict to tasks that belong to an execution with the given id. | [optional] 
 **caseInstanceId** | **String**| Restrict to tasks that belong to case instances with the given id. | [optional] 
 **caseInstanceBusinessKey** | **String**| Restrict to tasks that belong to case instances with the given business key. | [optional] 
 **caseInstanceBusinessKeyLike** | **String**| Restrict to tasks that have a case instance business key that has the parameter value  as a substring. | [optional] 
 **caseDefinitionId** | **String**| Restrict to tasks that belong to a case definition with the given id. | [optional] 
 **caseDefinitionKey** | **String**| Restrict to tasks that belong to a case definition with the given key. | [optional] 
 **caseDefinitionName** | **String**| Restrict to tasks that belong to a case definition with the given name. | [optional] 
 **caseDefinitionNameLike** | **String**| Restrict to tasks that have a case definition name that has the parameter value as a  substring. | [optional] 
 **caseExecutionId** | **String**| Restrict to tasks that belong to a case execution with the given id. | [optional] 
 **activityInstanceIdIn** | **String**| Only include tasks which belong to one of the passed and comma-separated activity  instance ids. | [optional] 
 **tenantIdIn** | **String**| Only include tasks which belong to one of the passed and comma-separated  tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include tasks which belong to no tenant. Value may only be &#x60;true&#x60;,  as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **assignee** | **String**| Restrict to tasks that the given user is assigned to. | [optional] 
 **assigneeExpression** | **String**| Restrict to tasks that the user described by the given expression is assigned to.  See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. | [optional] 
 **assigneeLike** | **String**| Restrict to tasks that have an assignee that has the parameter  value as a substring. | [optional] 
 **assigneeLikeExpression** | **String**| Restrict to tasks that have an assignee that has the parameter value described by the  given expression as a substring. See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. | [optional] 
 **assigneeIn** | **String**| Only include tasks which are assigned to one of the passed and  comma-separated user ids. | [optional] 
 **assigneeNotIn** | **String**| Only include tasks which are not assigned to one of the passed and comma-separated user ids. | [optional] 
 **owner** | **String**| Restrict to tasks that the given user owns. | [optional] 
 **ownerExpression** | **String**| Restrict to tasks that the user described by the given expression owns. See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. | [optional] 
 **candidateGroup** | **String**| Only include tasks that are offered to the given group. | [optional] 
 **candidateGroupExpression** | **String**| Only include tasks that are offered to the group described by the given expression.  See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. | [optional] 
 **candidateUser** | **String**| Only include tasks that are offered to the given user or to one of his groups. | [optional] 
 **candidateUserExpression** | **String**| Only include tasks that are offered to the user described by the given expression.  See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. | [optional] 
 **includeAssignedTasks** | **Boolean**| Also include tasks that are assigned to users in candidate queries. Default is to only  include tasks that are not assigned to any user if you query by candidate user or group(s). | [optional] [default to false]
 **involvedUser** | **String**| Only include tasks that the given user is involved in. A user is involved in a task if  an identity link exists between task and user (e.g., the user is the assignee). | [optional] 
 **involvedUserExpression** | **String**| Only include tasks that the user described by the given expression is involved in. A user is involved in a task if an identity link exists between task and user (e.g., the user is the assignee). See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. | [optional] 
 **assigned** | **Boolean**| If set to &#x60;true&#x60;, restricts the query to all tasks that are assigned. | [optional] [default to false]
 **unassigned** | **Boolean**| If set to &#x60;true&#x60;, restricts the query to all tasks that are unassigned. | [optional] [default to false]
 **taskDefinitionKey** | **String**| Restrict to tasks that have the given key. | [optional] 
 **taskDefinitionKeyIn** | **String**| Restrict to tasks that have one of the given keys. The keys need to be in a comma-separated list. | [optional] 
 **taskDefinitionKeyLike** | **String**| Restrict to tasks that have a key that has the parameter value as a substring. | [optional] 
 **name** | **String**| Restrict to tasks that have the given name. | [optional] 
 **nameNotEqual** | **String**| Restrict to tasks that do not have the given name. | [optional] 
 **nameLike** | **String**| Restrict to tasks that have a name with the given parameter value as substring. | [optional] 
 **nameNotLike** | **String**| Restrict to tasks that do not have a name with the given parameter value as substring. | [optional] 
 **description** | **String**| Restrict to tasks that have the given description. | [optional] 
 **descriptionLike** | **String**| Restrict to tasks that have a description that has the parameter value as a substring. | [optional] 
 **priority** | **Number**| Restrict to tasks that have the given priority. | [optional] 
 **maxPriority** | **Number**| Restrict to tasks that have a lower or equal priority. | [optional] 
 **minPriority** | **Number**| Restrict to tasks that have a higher or equal priority. | [optional] 
 **dueDate** | **String**| Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.546+0200&#x60;. | [optional] 
 **dueDateExpression** | **String**| Restrict to tasks that are due on the date described by the given expression. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **dueAfter** | **String**| Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.435+0200&#x60;. | [optional] 
 **dueAfterExpression** | **String**| Restrict to tasks that are due after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **dueBefore** | **String**| Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.243+0200&#x60;. | [optional] 
 **dueBeforeExpression** | **String**| Restrict to tasks that are due before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **withoutDueDate** | **Boolean**| Only include tasks which have no due date. Value may only be &#x60;true&#x60;,  as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **followUpDate** | **String**| Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.342+0200&#x60;. | [optional] 
 **followUpDateExpression** | **String**| Restrict to tasks that have a followUp date on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **followUpAfter** | **String**| Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.542+0200&#x60;. | [optional] 
 **followUpAfterExpression** | **String**| Restrict to tasks that have a followUp date after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **followUpBefore** | **String**| Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.234+0200&#x60;. | [optional] 
 **followUpBeforeExpression** | **String**| Restrict to tasks that have a followUp date before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **followUpBeforeOrNotExistent** | **String**| Restrict to tasks that have no followUp date or a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.432+0200&#x60;. The typical use case is to query all &#x60;active&#x60; tasks for a user for a given date. | [optional] 
 **followUpBeforeOrNotExistentExpression** | **String**| Restrict to tasks that have no followUp date or a followUp date before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **createdOn** | **String**| Restrict to tasks that were created on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.324+0200&#x60;. | [optional] 
 **createdOnExpression** | **String**| Restrict to tasks that were created on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **createdAfter** | **String**| Restrict to tasks that were created after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.342+0200&#x60;. | [optional] 
 **createdAfterExpression** | **String**| Restrict to tasks that were created after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **createdBefore** | **String**| Restrict to tasks that were created before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.332+0200&#x60;. | [optional] 
 **createdBeforeExpression** | **String**| Restrict to tasks that were created before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **updatedAfter** | **String**| Restrict to tasks that were updated after the given date. Every action that fires  a [task update event](https://docs.camunda.org/manual/develop/user-guide/process-engine/delegation-code/#task-listener-event-lifecycle) is considered as updating the task. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.332+0200&#x60;. | [optional] 
 **updatedAfterExpression** | **String**| Restrict to tasks that were updated after the date described by the given expression. Every action that fires  a [task update event](https://docs.camunda.org/manual/develop/user-guide/process-engine/delegation-code/#task-listener-event-lifecycle) is considered as updating the task. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **delegationState** | **String**| Restrict to tasks that are in the given delegation state. Valid values are &#x60;PENDING&#x60; and &#x60;RESOLVED&#x60;. | [optional] 
 **candidateGroups** | **String**| Restrict to tasks that are offered to any of the given candidate groups. Takes a comma-separated list of group names, so for example &#x60;developers,support,sales&#x60;. | [optional] 
 **candidateGroupsExpression** | **String**| Restrict to tasks that are offered to any of the candidate groups described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to &#x60;java.util.List&#x60; of Strings. | [optional] 
 **withCandidateGroups** | **Boolean**| Only include tasks which have a candidate group. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **withoutCandidateGroups** | **Boolean**| Only include tasks which have no candidate group. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **withCandidateUsers** | **Boolean**| Only include tasks which have a candidate user. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **withoutCandidateUsers** | **Boolean**| Only include tasks which have no candidate users. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **active** | **Boolean**| Only include active tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **suspended** | **Boolean**| Only include suspended tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **taskVariables** | **String**| Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note**: Values are always treated as String objects on server side.  Valid &#x60;operator&#x60; values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **processVariables** | **String**| Only include tasks that belong to process instances that have variables with certain  values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note**: Values are always treated as String objects on server side.  Valid &#x60;operator&#x60; values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;; &#x60;notLike&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **caseInstanceVariables** | **String**| Only include tasks that belong to case instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note**: Values are always treated as String objects on server side.  Valid &#x60;operator&#x60; values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match all variable names in this query case-insensitively. If set &#x60;variableName&#x60; and &#x60;variablename&#x60; are treated as equal. | [optional] [default to false]
 **variableValuesIgnoreCase** | **Boolean**| Match all variable values in this query case-insensitively. If set &#x60;variableValue&#x60; and &#x60;variablevalue&#x60; are treated as equal. | [optional] [default to false]
 **parentTaskId** | **String**| Restrict query to all tasks that are sub tasks of the given task. Takes a task id. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[TaskDto]**](TaskDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTasksCount"></a>
# **getTasksCount**
> CountResultDto getTasksCount(opts)

Get List Count

Retrieves the number of tasks that fulfill a provided filter. Corresponds to the size of the result set when using the [Get Tasks](https://docs.camunda.org/manual/develop/reference/rest/task/) method.  **Security Consideration:** There are several query parameters (such as assigneeExpression) for specifying an EL expression. These are disabled by default to prevent remote code execution. See the section on [security considerations](https://docs.camunda.org/manual/develop/user-guide/process-engine/securing-custom-code/) for custom code in the user guide for details.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let opts = { 
  'taskId': "taskId_example", // String | Restrict to task with the given id.
  'taskIdIn': "taskIdIn_example", // String | Restrict to tasks with any of the given ids.
  'processInstanceId': "processInstanceId_example", // String | Restrict to tasks that belong to process instances with the given id.
  'processInstanceIdIn': "processInstanceIdIn_example", // String | Restrict to tasks that belong to process instances with the given ids.
  'processInstanceBusinessKey': "processInstanceBusinessKey_example", // String | Restrict to tasks that belong to process instances with the given business key.
  'processInstanceBusinessKeyExpression': "processInstanceBusinessKeyExpression_example", // String | Restrict to tasks that belong to process instances with the given business key which  is described by an expression. See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions.
  'processInstanceBusinessKeyIn': "processInstanceBusinessKeyIn_example", // String | Restrict to tasks that belong to process instances with one of the give business keys.  The keys need to be in a comma-separated list.
  'processInstanceBusinessKeyLike': "processInstanceBusinessKeyLike_example", // String | Restrict to tasks that have a process instance business key that has the parameter  value as a substring.
  'processInstanceBusinessKeyLikeExpression': "processInstanceBusinessKeyLikeExpression_example", // String | Restrict to tasks that have a process instance business key that has the parameter  value as a substring and is described by an expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
  'processDefinitionId': "processDefinitionId_example", // String | Restrict to tasks that belong to a process definition with the given id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Restrict to tasks that belong to a process definition with the given key.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Restrict to tasks that belong to a process definition with one of the given keys. The  keys need to be in a comma-separated list.
  'processDefinitionName': "processDefinitionName_example", // String | Restrict to tasks that belong to a process definition with the given name.
  'processDefinitionNameLike': "processDefinitionNameLike_example", // String | Restrict to tasks that have a process definition name that has the parameter value as  a substring.
  'executionId': "executionId_example", // String | Restrict to tasks that belong to an execution with the given id.
  'caseInstanceId': "caseInstanceId_example", // String | Restrict to tasks that belong to case instances with the given id.
  'caseInstanceBusinessKey': "caseInstanceBusinessKey_example", // String | Restrict to tasks that belong to case instances with the given business key.
  'caseInstanceBusinessKeyLike': "caseInstanceBusinessKeyLike_example", // String | Restrict to tasks that have a case instance business key that has the parameter value  as a substring.
  'caseDefinitionId': "caseDefinitionId_example", // String | Restrict to tasks that belong to a case definition with the given id.
  'caseDefinitionKey': "caseDefinitionKey_example", // String | Restrict to tasks that belong to a case definition with the given key.
  'caseDefinitionName': "caseDefinitionName_example", // String | Restrict to tasks that belong to a case definition with the given name.
  'caseDefinitionNameLike': "caseDefinitionNameLike_example", // String | Restrict to tasks that have a case definition name that has the parameter value as a  substring.
  'caseExecutionId': "caseExecutionId_example", // String | Restrict to tasks that belong to a case execution with the given id.
  'activityInstanceIdIn': "activityInstanceIdIn_example", // String | Only include tasks which belong to one of the passed and comma-separated activity  instance ids.
  'tenantIdIn': "tenantIdIn_example", // String | Only include tasks which belong to one of the passed and comma-separated  tenant ids.
  'withoutTenantId': false, // Boolean | Only include tasks which belong to no tenant. Value may only be `true`,  as `false` is the default behavior.
  'assignee': "assignee_example", // String | Restrict to tasks that the given user is assigned to.
  'assigneeExpression': "assigneeExpression_example", // String | Restrict to tasks that the user described by the given expression is assigned to.  See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
  'assigneeLike': "assigneeLike_example", // String | Restrict to tasks that have an assignee that has the parameter  value as a substring.
  'assigneeLikeExpression': "assigneeLikeExpression_example", // String | Restrict to tasks that have an assignee that has the parameter value described by the  given expression as a substring. See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
  'assigneeIn': "assigneeIn_example", // String | Only include tasks which are assigned to one of the passed and  comma-separated user ids.
  'assigneeNotIn': "assigneeNotIn_example", // String | Only include tasks which are not assigned to one of the passed and comma-separated user ids.
  'owner': "owner_example", // String | Restrict to tasks that the given user owns.
  'ownerExpression': "ownerExpression_example", // String | Restrict to tasks that the user described by the given expression owns. See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
  'candidateGroup': "candidateGroup_example", // String | Only include tasks that are offered to the given group.
  'candidateGroupExpression': "candidateGroupExpression_example", // String | Only include tasks that are offered to the group described by the given expression.  See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
  'candidateUser': "candidateUser_example", // String | Only include tasks that are offered to the given user or to one of his groups.
  'candidateUserExpression': "candidateUserExpression_example", // String | Only include tasks that are offered to the user described by the given expression.  See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
  'includeAssignedTasks': false, // Boolean | Also include tasks that are assigned to users in candidate queries. Default is to only  include tasks that are not assigned to any user if you query by candidate user or group(s).
  'involvedUser': "involvedUser_example", // String | Only include tasks that the given user is involved in. A user is involved in a task if  an identity link exists between task and user (e.g., the user is the assignee).
  'involvedUserExpression': "involvedUserExpression_example", // String | Only include tasks that the user described by the given expression is involved in. A user is involved in a task if an identity link exists between task and user (e.g., the user is the assignee). See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions.
  'assigned': false, // Boolean | If set to `true`, restricts the query to all tasks that are assigned.
  'unassigned': false, // Boolean | If set to `true`, restricts the query to all tasks that are unassigned.
  'taskDefinitionKey': "taskDefinitionKey_example", // String | Restrict to tasks that have the given key.
  'taskDefinitionKeyIn': "taskDefinitionKeyIn_example", // String | Restrict to tasks that have one of the given keys. The keys need to be in a comma-separated list.
  'taskDefinitionKeyLike': "taskDefinitionKeyLike_example", // String | Restrict to tasks that have a key that has the parameter value as a substring.
  'name': "name_example", // String | Restrict to tasks that have the given name.
  'nameNotEqual': "nameNotEqual_example", // String | Restrict to tasks that do not have the given name.
  'nameLike': "nameLike_example", // String | Restrict to tasks that have a name with the given parameter value as substring.
  'nameNotLike': "nameNotLike_example", // String | Restrict to tasks that do not have a name with the given parameter value as substring.
  'description': "description_example", // String | Restrict to tasks that have the given description.
  'descriptionLike': "descriptionLike_example", // String | Restrict to tasks that have a description that has the parameter value as a substring.
  'priority': 56, // Number | Restrict to tasks that have the given priority.
  'maxPriority': 56, // Number | Restrict to tasks that have a lower or equal priority.
  'minPriority': 56, // Number | Restrict to tasks that have a higher or equal priority.
  'dueDate': "dueDate_example", // String | Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.546+0200`.
  'dueDateExpression': "dueDateExpression_example", // String | Restrict to tasks that are due on the date described by the given expression. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'dueAfter': "dueAfter_example", // String | Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.435+0200`.
  'dueAfterExpression': "dueAfterExpression_example", // String | Restrict to tasks that are due after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'dueBefore': "dueBefore_example", // String | Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.243+0200`.
  'dueBeforeExpression': "dueBeforeExpression_example", // String | Restrict to tasks that are due before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'withoutDueDate': false, // Boolean | Only include tasks which have no due date. Value may only be `true`,  as `false` is the default behavior.
  'followUpDate': "followUpDate_example", // String | Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.342+0200`.
  'followUpDateExpression': "followUpDateExpression_example", // String | Restrict to tasks that have a followUp date on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'followUpAfter': "followUpAfter_example", // String | Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.542+0200`.
  'followUpAfterExpression': "followUpAfterExpression_example", // String | Restrict to tasks that have a followUp date after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'followUpBefore': "followUpBefore_example", // String | Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.234+0200`.
  'followUpBeforeExpression': "followUpBeforeExpression_example", // String | Restrict to tasks that have a followUp date before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'followUpBeforeOrNotExistent': "followUpBeforeOrNotExistent_example", // String | Restrict to tasks that have no followUp date or a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.432+0200`. The typical use case is to query all `active` tasks for a user for a given date.
  'followUpBeforeOrNotExistentExpression': "followUpBeforeOrNotExistentExpression_example", // String | Restrict to tasks that have no followUp date or a followUp date before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'createdOn': "createdOn_example", // String | Restrict to tasks that were created on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.324+0200`.
  'createdOnExpression': "createdOnExpression_example", // String | Restrict to tasks that were created on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'createdAfter': "createdAfter_example", // String | Restrict to tasks that were created after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.342+0200`.
  'createdAfterExpression': "createdAfterExpression_example", // String | Restrict to tasks that were created after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'createdBefore': "createdBefore_example", // String | Restrict to tasks that were created before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.332+0200`.
  'createdBeforeExpression': "createdBeforeExpression_example", // String | Restrict to tasks that were created before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'updatedAfter': "updatedAfter_example", // String | Restrict to tasks that were updated after the given date. Every action that fires  a [task update event](https://docs.camunda.org/manual/develop/user-guide/process-engine/delegation-code/#task-listener-event-lifecycle) is considered as updating the task. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.332+0200`.
  'updatedAfterExpression': "updatedAfterExpression_example", // String | Restrict to tasks that were updated after the date described by the given expression. Every action that fires  a [task update event](https://docs.camunda.org/manual/develop/user-guide/process-engine/delegation-code/#task-listener-event-lifecycle) is considered as updating the task. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
  'delegationState': "delegationState_example", // String | Restrict to tasks that are in the given delegation state. Valid values are `PENDING` and `RESOLVED`.
  'candidateGroups': "candidateGroups_example", // String | Restrict to tasks that are offered to any of the given candidate groups. Takes a comma-separated list of group names, so for example `developers,support,sales`.
  'candidateGroupsExpression': "candidateGroupsExpression_example", // String | Restrict to tasks that are offered to any of the candidate groups described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to `java.util.List` of Strings.
  'withCandidateGroups': false, // Boolean | Only include tasks which have a candidate group. Value may only be `true`, as `false` is the default behavior.
  'withoutCandidateGroups': false, // Boolean | Only include tasks which have no candidate group. Value may only be `true`, as `false` is the default behavior.
  'withCandidateUsers': false, // Boolean | Only include tasks which have a candidate user. Value may only be `true`, as `false` is the default behavior.
  'withoutCandidateUsers': false, // Boolean | Only include tasks which have no candidate users. Value may only be `true`, as `false` is the default behavior.
  'active': false, // Boolean | Only include active tasks. Value may only be `true`, as `false` is the default behavior.
  'suspended': false, // Boolean | Only include suspended tasks. Value may only be `true`, as `false` is the default behavior.
  'taskVariables': "taskVariables_example", // String | Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
  'processVariables': "processVariables_example", // String | Only include tasks that belong to process instances that have variables with certain  values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`; `notLike`. `key` and `value` may not contain underscore or comma characters.
  'caseInstanceVariables': "caseInstanceVariables_example", // String | Only include tasks that belong to case instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
  'variableNamesIgnoreCase': false, // Boolean | Match all variable names in this query case-insensitively. If set `variableName` and `variablename` are treated as equal.
  'variableValuesIgnoreCase': false, // Boolean | Match all variable values in this query case-insensitively. If set `variableValue` and `variablevalue` are treated as equal.
  'parentTaskId': "parentTaskId_example" // String | Restrict query to all tasks that are sub tasks of the given task. Takes a task id.
};
apiInstance.getTasksCount(opts, (error, data, response) => {
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
 **taskId** | **String**| Restrict to task with the given id. | [optional] 
 **taskIdIn** | **String**| Restrict to tasks with any of the given ids. | [optional] 
 **processInstanceId** | **String**| Restrict to tasks that belong to process instances with the given id. | [optional] 
 **processInstanceIdIn** | **String**| Restrict to tasks that belong to process instances with the given ids. | [optional] 
 **processInstanceBusinessKey** | **String**| Restrict to tasks that belong to process instances with the given business key. | [optional] 
 **processInstanceBusinessKeyExpression** | **String**| Restrict to tasks that belong to process instances with the given business key which  is described by an expression. See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. | [optional] 
 **processInstanceBusinessKeyIn** | **String**| Restrict to tasks that belong to process instances with one of the give business keys.  The keys need to be in a comma-separated list. | [optional] 
 **processInstanceBusinessKeyLike** | **String**| Restrict to tasks that have a process instance business key that has the parameter  value as a substring. | [optional] 
 **processInstanceBusinessKeyLikeExpression** | **String**| Restrict to tasks that have a process instance business key that has the parameter  value as a substring and is described by an expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. | [optional] 
 **processDefinitionId** | **String**| Restrict to tasks that belong to a process definition with the given id. | [optional] 
 **processDefinitionKey** | **String**| Restrict to tasks that belong to a process definition with the given key. | [optional] 
 **processDefinitionKeyIn** | **String**| Restrict to tasks that belong to a process definition with one of the given keys. The  keys need to be in a comma-separated list. | [optional] 
 **processDefinitionName** | **String**| Restrict to tasks that belong to a process definition with the given name. | [optional] 
 **processDefinitionNameLike** | **String**| Restrict to tasks that have a process definition name that has the parameter value as  a substring. | [optional] 
 **executionId** | **String**| Restrict to tasks that belong to an execution with the given id. | [optional] 
 **caseInstanceId** | **String**| Restrict to tasks that belong to case instances with the given id. | [optional] 
 **caseInstanceBusinessKey** | **String**| Restrict to tasks that belong to case instances with the given business key. | [optional] 
 **caseInstanceBusinessKeyLike** | **String**| Restrict to tasks that have a case instance business key that has the parameter value  as a substring. | [optional] 
 **caseDefinitionId** | **String**| Restrict to tasks that belong to a case definition with the given id. | [optional] 
 **caseDefinitionKey** | **String**| Restrict to tasks that belong to a case definition with the given key. | [optional] 
 **caseDefinitionName** | **String**| Restrict to tasks that belong to a case definition with the given name. | [optional] 
 **caseDefinitionNameLike** | **String**| Restrict to tasks that have a case definition name that has the parameter value as a  substring. | [optional] 
 **caseExecutionId** | **String**| Restrict to tasks that belong to a case execution with the given id. | [optional] 
 **activityInstanceIdIn** | **String**| Only include tasks which belong to one of the passed and comma-separated activity  instance ids. | [optional] 
 **tenantIdIn** | **String**| Only include tasks which belong to one of the passed and comma-separated  tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include tasks which belong to no tenant. Value may only be &#x60;true&#x60;,  as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **assignee** | **String**| Restrict to tasks that the given user is assigned to. | [optional] 
 **assigneeExpression** | **String**| Restrict to tasks that the user described by the given expression is assigned to.  See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. | [optional] 
 **assigneeLike** | **String**| Restrict to tasks that have an assignee that has the parameter  value as a substring. | [optional] 
 **assigneeLikeExpression** | **String**| Restrict to tasks that have an assignee that has the parameter value described by the  given expression as a substring. See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. | [optional] 
 **assigneeIn** | **String**| Only include tasks which are assigned to one of the passed and  comma-separated user ids. | [optional] 
 **assigneeNotIn** | **String**| Only include tasks which are not assigned to one of the passed and comma-separated user ids. | [optional] 
 **owner** | **String**| Restrict to tasks that the given user owns. | [optional] 
 **ownerExpression** | **String**| Restrict to tasks that the user described by the given expression owns. See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. | [optional] 
 **candidateGroup** | **String**| Only include tasks that are offered to the given group. | [optional] 
 **candidateGroupExpression** | **String**| Only include tasks that are offered to the group described by the given expression.  See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. | [optional] 
 **candidateUser** | **String**| Only include tasks that are offered to the given user or to one of his groups. | [optional] 
 **candidateUserExpression** | **String**| Only include tasks that are offered to the user described by the given expression.  See the  [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. | [optional] 
 **includeAssignedTasks** | **Boolean**| Also include tasks that are assigned to users in candidate queries. Default is to only  include tasks that are not assigned to any user if you query by candidate user or group(s). | [optional] [default to false]
 **involvedUser** | **String**| Only include tasks that the given user is involved in. A user is involved in a task if  an identity link exists between task and user (e.g., the user is the assignee). | [optional] 
 **involvedUserExpression** | **String**| Only include tasks that the user described by the given expression is involved in. A user is involved in a task if an identity link exists between task and user (e.g., the user is the assignee). See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. | [optional] 
 **assigned** | **Boolean**| If set to &#x60;true&#x60;, restricts the query to all tasks that are assigned. | [optional] [default to false]
 **unassigned** | **Boolean**| If set to &#x60;true&#x60;, restricts the query to all tasks that are unassigned. | [optional] [default to false]
 **taskDefinitionKey** | **String**| Restrict to tasks that have the given key. | [optional] 
 **taskDefinitionKeyIn** | **String**| Restrict to tasks that have one of the given keys. The keys need to be in a comma-separated list. | [optional] 
 **taskDefinitionKeyLike** | **String**| Restrict to tasks that have a key that has the parameter value as a substring. | [optional] 
 **name** | **String**| Restrict to tasks that have the given name. | [optional] 
 **nameNotEqual** | **String**| Restrict to tasks that do not have the given name. | [optional] 
 **nameLike** | **String**| Restrict to tasks that have a name with the given parameter value as substring. | [optional] 
 **nameNotLike** | **String**| Restrict to tasks that do not have a name with the given parameter value as substring. | [optional] 
 **description** | **String**| Restrict to tasks that have the given description. | [optional] 
 **descriptionLike** | **String**| Restrict to tasks that have a description that has the parameter value as a substring. | [optional] 
 **priority** | **Number**| Restrict to tasks that have the given priority. | [optional] 
 **maxPriority** | **Number**| Restrict to tasks that have a lower or equal priority. | [optional] 
 **minPriority** | **Number**| Restrict to tasks that have a higher or equal priority. | [optional] 
 **dueDate** | **String**| Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.546+0200&#x60;. | [optional] 
 **dueDateExpression** | **String**| Restrict to tasks that are due on the date described by the given expression. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **dueAfter** | **String**| Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.435+0200&#x60;. | [optional] 
 **dueAfterExpression** | **String**| Restrict to tasks that are due after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **dueBefore** | **String**| Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.243+0200&#x60;. | [optional] 
 **dueBeforeExpression** | **String**| Restrict to tasks that are due before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **withoutDueDate** | **Boolean**| Only include tasks which have no due date. Value may only be &#x60;true&#x60;,  as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **followUpDate** | **String**| Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.342+0200&#x60;. | [optional] 
 **followUpDateExpression** | **String**| Restrict to tasks that have a followUp date on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **followUpAfter** | **String**| Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.542+0200&#x60;. | [optional] 
 **followUpAfterExpression** | **String**| Restrict to tasks that have a followUp date after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **followUpBefore** | **String**| Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.234+0200&#x60;. | [optional] 
 **followUpBeforeExpression** | **String**| Restrict to tasks that have a followUp date before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **followUpBeforeOrNotExistent** | **String**| Restrict to tasks that have no followUp date or a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.432+0200&#x60;. The typical use case is to query all &#x60;active&#x60; tasks for a user for a given date. | [optional] 
 **followUpBeforeOrNotExistentExpression** | **String**| Restrict to tasks that have no followUp date or a followUp date before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **createdOn** | **String**| Restrict to tasks that were created on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.324+0200&#x60;. | [optional] 
 **createdOnExpression** | **String**| Restrict to tasks that were created on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **createdAfter** | **String**| Restrict to tasks that were created after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.342+0200&#x60;. | [optional] 
 **createdAfterExpression** | **String**| Restrict to tasks that were created after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **createdBefore** | **String**| Restrict to tasks that were created before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.332+0200&#x60;. | [optional] 
 **createdBeforeExpression** | **String**| Restrict to tasks that were created before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **updatedAfter** | **String**| Restrict to tasks that were updated after the given date. Every action that fires  a [task update event](https://docs.camunda.org/manual/develop/user-guide/process-engine/delegation-code/#task-listener-event-lifecycle) is considered as updating the task. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.332+0200&#x60;. | [optional] 
 **updatedAfterExpression** | **String**| Restrict to tasks that were updated after the date described by the given expression. Every action that fires  a [task update event](https://docs.camunda.org/manual/develop/user-guide/process-engine/delegation-code/#task-listener-event-lifecycle) is considered as updating the task. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a &#x60;java.util.Date&#x60; or &#x60;org.joda.time.DateTime&#x60; object. | [optional] 
 **delegationState** | **String**| Restrict to tasks that are in the given delegation state. Valid values are &#x60;PENDING&#x60; and &#x60;RESOLVED&#x60;. | [optional] 
 **candidateGroups** | **String**| Restrict to tasks that are offered to any of the given candidate groups. Takes a comma-separated list of group names, so for example &#x60;developers,support,sales&#x60;. | [optional] 
 **candidateGroupsExpression** | **String**| Restrict to tasks that are offered to any of the candidate groups described by the given expression. See the [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to &#x60;java.util.List&#x60; of Strings. | [optional] 
 **withCandidateGroups** | **Boolean**| Only include tasks which have a candidate group. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **withoutCandidateGroups** | **Boolean**| Only include tasks which have no candidate group. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **withCandidateUsers** | **Boolean**| Only include tasks which have a candidate user. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **withoutCandidateUsers** | **Boolean**| Only include tasks which have no candidate users. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **active** | **Boolean**| Only include active tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **suspended** | **Boolean**| Only include suspended tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **taskVariables** | **String**| Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note**: Values are always treated as String objects on server side.  Valid &#x60;operator&#x60; values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **processVariables** | **String**| Only include tasks that belong to process instances that have variables with certain  values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note**: Values are always treated as String objects on server side.  Valid &#x60;operator&#x60; values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;; &#x60;notLike&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **caseInstanceVariables** | **String**| Only include tasks that belong to case instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note**: Values are always treated as String objects on server side.  Valid &#x60;operator&#x60; values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match all variable names in this query case-insensitively. If set &#x60;variableName&#x60; and &#x60;variablename&#x60; are treated as equal. | [optional] [default to false]
 **variableValuesIgnoreCase** | **Boolean**| Match all variable values in this query case-insensitively. If set &#x60;variableValue&#x60; and &#x60;variablevalue&#x60; are treated as equal. | [optional] [default to false]
 **parentTaskId** | **String**| Restrict query to all tasks that are sub tasks of the given task. Takes a task id. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="handleBpmnError"></a>
# **handleBpmnError**
> handleBpmnError(id, opts)

Handle BPMN Error

Reports a business error in the context of a running task by id. The error code must be specified to identify the BPMN error handler. See the documentation for [Reporting Bpmn Error](https://docs.camunda.org/manual/develop/reference/bpmn20/tasks/user-task/#reporting-bpmn-error) in User Tasks.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task a BPMN error is reported for.
let opts = { 
  'body': new CamundaRestApi.TaskBpmnErrorDto() // TaskBpmnErrorDto | 
};
apiInstance.handleBpmnError(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task a BPMN error is reported for. | 
 **body** | [**TaskBpmnErrorDto**](TaskBpmnErrorDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="handleEscalation"></a>
# **handleEscalation**
> handleEscalation(id, opts)

Handle BPMN Escalation

Reports an escalation in the context of a running task by id. The escalation code must be specified to identify the escalation handler. See the documentation for [Reporting Bpmn Escalation](https://docs.camunda.org/manual/develop/reference/bpmn20/tasks/user-task/#reporting-bpmn-escalation) in User Tasks.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task in which context a BPMN escalation is reported.
let opts = { 
  'body': new CamundaRestApi.TaskEscalationDto() // TaskEscalationDto | 
};
apiInstance.handleEscalation(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task in which context a BPMN escalation is reported. | 
 **body** | [**TaskEscalationDto**](TaskEscalationDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryTasks"></a>
# **queryTasks**
> [TaskDto] queryTasks(opts)

Get List (POST)

Queries for tasks that fulfill a given filter. This method is slightly more powerful than the [Get Tasks](https://docs.camunda.org/manual/develop/reference/rest/task/get-query/) method because it allows filtering by multiple process or task variables of types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;. The size of the result set can be retrieved by using the [Get Task Count (POST)](https://docs.camunda.org/manual/develop/reference/rest/task/post-query-count/) method.  **Security Consideration**: There are several parameters (such as &#x60;assigneeExpression&#x60;) for specifying an EL expression. These are disabled by default to prevent remote code execution. See the section on [security considerations for custom code](https://docs.camunda.org/manual/develop/user-guide/process-engine/securing-custom-code/) in the user guide for details.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let opts = { 
  'body': new CamundaRestApi.TaskQueryDto(), // TaskQueryDto | 
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.queryTasks(opts, (error, data, response) => {
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
 **body** | [**TaskQueryDto**](TaskQueryDto.md)|  | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[TaskDto]**](TaskDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryTasksCount"></a>
# **queryTasksCount**
> CountResultDto queryTasksCount(opts)

Get List Count (POST)

Retrieves the number of tasks that fulfill the given filter. Corresponds to the size of the result set of the [Get Tasks (POST)](https://docs.camunda.org/manual/develop/reference/rest/task/post-query/) method and takes the same parameters.  **Security Consideration**: There are several parameters (such as &#x60;assigneeExpression&#x60;) for specifying an EL expression. These are disabled by default to prevent remote code execution. See the section on [security considerations for custom code](https://docs.camunda.org/manual/develop/user-guide/process-engine/securing-custom-code/) in the user guide for details.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let opts = { 
  'body': new CamundaRestApi.TaskQueryDto() // TaskQueryDto | 
};
apiInstance.queryTasksCount(opts, (error, data, response) => {
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
 **body** | [**TaskQueryDto**](TaskQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resolve"></a>
# **resolve**
> resolve(id, opts)

Resolve

Resolves a task and updates execution variables.  Resolving a task marks that the assignee is done with the task delegated to them, and that it can be sent back to the owner. Can only be executed when the task has been delegated. The assignee will be set to the owner, who performed the delegation.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task to resolve.
let opts = { 
  'body': new CamundaRestApi.CompleteTaskDto() // CompleteTaskDto | 
};
apiInstance.resolve(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to resolve. | 
 **body** | [**CompleteTaskDto**](CompleteTaskDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setAssignee"></a>
# **setAssignee**
> setAssignee(id, opts)

Set Assignee

Changes the assignee of a task to a specific user.  **Note:** The difference with the [Claim Task](https://docs.camunda.org/manual/develop/reference/rest/task/post-claim/) method is that this method does not check if the task already has a user assigned to it.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task to set the assignee for.
let opts = { 
  'body': new CamundaRestApi.UserIdDto() // UserIdDto | Provide the id of the user that will be the assignee of the task.
};
apiInstance.setAssignee(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to set the assignee for. | 
 **body** | [**UserIdDto**](UserIdDto.md)| Provide the id of the user that will be the assignee of the task. | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submit"></a>
# **submit**
> {&#x27;String&#x27;: VariableValueDto} submit(id, opts)

Submit Form

Completes a task and updates process variables using a form submit. There are two difference between this method and the &#x60;complete&#x60; method:  * If the task is in state &#x60;PENDING&#x60; - i.e., has been delegated before, it is not completed but resolved. Otherwise it will be completed. * If the task has Form Field Metadata defined, the process engine will perform backend validation for any form fields which have validators defined. See the [Generated Task Forms](https://docs.camunda.org/manual/develop/user-guide/task-forms/_index/#generated-task-forms) section of the [User Guide](https://docs.camunda.org/manual/develop/user-guide/) for more information.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task to submit the form for.
let opts = { 
  'body': new CamundaRestApi.CompleteTaskDto() // CompleteTaskDto | 
};
apiInstance.submit(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to submit the form for. | 
 **body** | [**CompleteTaskDto**](CompleteTaskDto.md)|  | [optional] 

### Return type

[**{&#x27;String&#x27;: VariableValueDto}**](VariableValueDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unclaim"></a>
# **unclaim**
> unclaim(id)

Unclaim

Resets a task&#x27;s assignee. If successful, the task is not assigned to a user.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task to unclaim.

apiInstance.unclaim(id, (error, data, response) => {
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
 **id** | **String**| The id of the task to unclaim. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTask"></a>
# **updateTask**
> updateTask(id, opts)

Update

Updates a task.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.TaskApi();
let id = "id_example"; // String | The id of the task to be updated.
let opts = { 
  'body': new CamundaRestApi.TaskDto() // TaskDto | 
};
apiInstance.updateTask(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the task to be updated. | 
 **body** | [**TaskDto**](TaskDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

