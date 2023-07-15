/*
 * Camunda Platform REST API
 * OpenApi Spec for Camunda Platform REST API.
 *
 * OpenAPI spec version: 7.20.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {CountResultDto} from '../model/CountResultDto';
import {ExceptionDto} from '../model/ExceptionDto';
import {HistoricTaskInstanceDto} from '../model/HistoricTaskInstanceDto';
import {HistoricTaskInstanceQueryDto} from '../model/HistoricTaskInstanceQueryDto';
import {HistoricTaskInstanceReportResultDto} from '../model/HistoricTaskInstanceReportResultDto';

/**
* HistoricTaskInstance service.
* @module api/HistoricTaskInstanceApi
* @version 7.20.0
*/
export class HistoricTaskInstanceApi {

    /**
    * Constructs a new HistoricTaskInstanceApi. 
    * @alias module:api/HistoricTaskInstanceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getHistoricTaskInstanceReport operation.
     * @callback moduleapi/HistoricTaskInstanceApi~getHistoricTaskInstanceReportCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HistoricTaskInstanceReportResultDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Task Report (Historic)
     * Retrieves a report of completed tasks. When the report type is set to &#x60;count&#x60;, the report contains a list of completed task counts where an entry contains the task name, the definition key of the task, the process definition id, the process definition key, the process definition name and the count of how many tasks were completed for the specified key in a given period. When the report type is set to &#x60;duration&#x60;, the report contains a minimum, maximum and average duration value of all completed task instances in a given period.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.reportType **Mandatory.** Specifies the kind of the report to execute. To retrieve a report about the duration of process instances the value must be set to &#x60;duration&#x60;. For a report of the completed tasks in a specific timespan the value must be set to &#x60;count&#x60;.
     * @param {module:model/String} opts.periodUnit When the report type is set to &#x60;duration&#x60;, this parameter is **mandatory**. Specifies the granularity of the report. Valid values are &#x60;month&#x60; and &#x60;quarter&#x60;.
     * @param {Date} opts.completedBefore Restrict to tasks that were completed before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.completedAfter Restrict to tasks that were completed after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {String} opts.groupBy When the report type is set to &#x60;count&#x60;, this parameter is **mandatory**. Groups the tasks report by a given criterion. Valid values are &#x60;taskName&#x60; and &#x60;processDefinition&#x60;.
     * @param {module:api/HistoricTaskInstanceApi~getHistoricTaskInstanceReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getHistoricTaskInstanceReport(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'reportType': opts['reportType'],'periodUnit': opts['periodUnit'],'completedBefore': opts['completedBefore'],'completedAfter': opts['completedAfter'],'groupBy': opts['groupBy']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [HistoricTaskInstanceReportResultDto];

      return this.apiClient.callApi(
        '/history/task/report', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getHistoricTaskInstances operation.
     * @callback moduleapi/HistoricTaskInstanceApi~getHistoricTaskInstancesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HistoricTaskInstanceDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Tasks (Historic)
     * Queries for historic tasks that fulfill the given parameters. The size of the result set can be retrieved by using the [Get Task Count](https://docs.camunda.org/manual/develop/reference/rest/history/task/get-task-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.taskId Filter by task id.
     * @param {String} opts.taskParentTaskId Filter by parent task id.
     * @param {String} opts.processInstanceId Filter by process instance id.
     * @param {String} opts.processInstanceBusinessKey Filter by process instance business key.
     * @param {String} opts.processInstanceBusinessKeyIn Filter by process instances with one of the give business keys. The keys need to be in a comma-separated list.
     * @param {String} opts.processInstanceBusinessKeyLike Filter by  process instance business key that has the parameter value as a substring.
     * @param {String} opts.executionId Filter by the id of the execution that executed the task.
     * @param {String} opts.processDefinitionId Filter by process definition id.
     * @param {String} opts.processDefinitionKey Restrict to tasks that belong to a process definition with the given key.
     * @param {String} opts.processDefinitionName Restrict to tasks that belong to a process definition with the given name.
     * @param {String} opts.caseInstanceId Filter by case instance id.
     * @param {String} opts.caseExecutionId Filter by the id of the case execution that executed the task.
     * @param {String} opts.caseDefinitionId Filter by case definition id.
     * @param {String} opts.caseDefinitionKey Restrict to tasks that belong to a case definition with the given key.
     * @param {String} opts.caseDefinitionName Restrict to tasks that belong to a case definition with the given name.
     * @param {String} opts.activityInstanceIdIn Only include tasks which belong to one of the passed comma-separated activity instance ids.
     * @param {String} opts.taskName Restrict to tasks that have the given name.
     * @param {String} opts.taskNameLike Restrict to tasks that have a name with the given parameter value as substring.
     * @param {String} opts.taskDescription Restrict to tasks that have the given description.
     * @param {String} opts.taskDescriptionLike Restrict to tasks that have a description that has the parameter value as a substring.
     * @param {String} opts.taskDefinitionKey Restrict to tasks that have the given key.
     * @param {String} opts.taskDefinitionKeyIn Restrict to tasks that have one of the passed comma-separated task definition keys.
     * @param {String} opts.taskDeleteReason Restrict to tasks that have the given delete reason.
     * @param {String} opts.taskDeleteReasonLike Restrict to tasks that have a delete reason that has the parameter value as a substring.
     * @param {String} opts.taskAssignee Restrict to tasks that the given user is assigned to.
     * @param {String} opts.taskAssigneeLike Restrict to tasks that are assigned to users with the parameter value as a substring.
     * @param {String} opts.taskOwner Restrict to tasks that the given user owns.
     * @param {String} opts.taskOwnerLike Restrict to tasks that are owned by users with the parameter value as a substring.
     * @param {Number} opts.taskPriority Restrict to tasks that have the given priority.
     * @param {Boolean} opts.assigned If set to &#x60;true&#x60;, restricts the query to all tasks that are assigned.
     * @param {Boolean} opts.unassigned If set to &#x60;true&#x60;, restricts the query to all tasks that are unassigned.
     * @param {Boolean} opts.finished Only include finished tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.unfinished Only include unfinished tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.processFinished Only include tasks of finished processes. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.processUnfinished Only include tasks of unfinished processes. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Date} opts.taskDueDate Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.taskDueDateBefore Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.taskDueDateAfter Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Boolean} opts.withoutTaskDueDate Only include tasks which have no due date. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Date} opts.taskFollowUpDate Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.taskFollowUpDateBefore Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.taskFollowUpDateAfter Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.startedBefore Restrict to tasks that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.startedAfter Restrict to tasks that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.finishedBefore Restrict to tasks that were finished before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.finishedAfter Restrict to tasks that were finished after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {String} opts.tenantIdIn Filter by a comma-separated list of tenant ids. A task instance must have one of the given tenant ids.
     * @param {Boolean} opts.withoutTenantId Only include historic task instances that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {String} opts.taskVariables Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value. **Note:** Values are always treated as &#x60;String&#x60; objects on server side.   Valid operator values are: * &#x60;eq&#x60; - equal to; * &#x60;neq&#x60; - not equal to; * &#x60;gt&#x60; - greater than; * &#x60;gteq&#x60; - greater than or equal to; * &#x60;lt&#x60; - lower than; * &#x60;lteq&#x60; - lower than or equal to; * &#x60;like&#x60;.  &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters.
     * @param {String} opts.processVariables Only include tasks that belong to process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value. **Note:** Values are always treated as &#x60;String&#x60; objects on server side.   Valid operator values are: * &#x60;eq&#x60; - equal to; * &#x60;neq&#x60; - not equal to; * &#x60;gt&#x60; - greater than; * &#x60;gteq&#x60; - greater than or equal to; * &#x60;lt&#x60; - lower than; * &#x60;lteq&#x60; - lower than or equal to; * &#x60;like&#x60;; * &#x60;notLike&#x60;.  &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters.
     * @param {Boolean} opts.variableNamesIgnoreCase Match the variable name provided in &#x60;taskVariables&#x60; and &#x60;processVariables&#x60; case- insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal.
     * @param {Boolean} opts.variableValuesIgnoreCase Match the variable value provided in &#x60;taskVariables&#x60; and &#x60;processVariables&#x60; case- insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal.
     * @param {String} opts.taskInvolvedUser Restrict to tasks with a historic identity link to the given user.
     * @param {String} opts.taskInvolvedGroup Restrict to tasks with a historic identity link to the given group.
     * @param {String} opts.taskHadCandidateUser Restrict to tasks with a historic identity link to the given candidate user.
     * @param {String} opts.taskHadCandidateGroup Restrict to tasks with a historic identity link to the given candidate group.
     * @param {Boolean} opts.withCandidateGroups Only include tasks which have a candidate group. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.withoutCandidateGroups Only include tasks which have no candidate group. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {module:model/String} opts.sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {module:model/String} opts.sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {module:api/HistoricTaskInstanceApi~getHistoricTaskInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getHistoricTaskInstances(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'taskId': opts['taskId'],'taskParentTaskId': opts['taskParentTaskId'],'processInstanceId': opts['processInstanceId'],'processInstanceBusinessKey': opts['processInstanceBusinessKey'],'processInstanceBusinessKeyIn': opts['processInstanceBusinessKeyIn'],'processInstanceBusinessKeyLike': opts['processInstanceBusinessKeyLike'],'executionId': opts['executionId'],'processDefinitionId': opts['processDefinitionId'],'processDefinitionKey': opts['processDefinitionKey'],'processDefinitionName': opts['processDefinitionName'],'caseInstanceId': opts['caseInstanceId'],'caseExecutionId': opts['caseExecutionId'],'caseDefinitionId': opts['caseDefinitionId'],'caseDefinitionKey': opts['caseDefinitionKey'],'caseDefinitionName': opts['caseDefinitionName'],'activityInstanceIdIn': opts['activityInstanceIdIn'],'taskName': opts['taskName'],'taskNameLike': opts['taskNameLike'],'taskDescription': opts['taskDescription'],'taskDescriptionLike': opts['taskDescriptionLike'],'taskDefinitionKey': opts['taskDefinitionKey'],'taskDefinitionKeyIn': opts['taskDefinitionKeyIn'],'taskDeleteReason': opts['taskDeleteReason'],'taskDeleteReasonLike': opts['taskDeleteReasonLike'],'taskAssignee': opts['taskAssignee'],'taskAssigneeLike': opts['taskAssigneeLike'],'taskOwner': opts['taskOwner'],'taskOwnerLike': opts['taskOwnerLike'],'taskPriority': opts['taskPriority'],'assigned': opts['assigned'],'unassigned': opts['unassigned'],'finished': opts['finished'],'unfinished': opts['unfinished'],'processFinished': opts['processFinished'],'processUnfinished': opts['processUnfinished'],'taskDueDate': opts['taskDueDate'],'taskDueDateBefore': opts['taskDueDateBefore'],'taskDueDateAfter': opts['taskDueDateAfter'],'withoutTaskDueDate': opts['withoutTaskDueDate'],'taskFollowUpDate': opts['taskFollowUpDate'],'taskFollowUpDateBefore': opts['taskFollowUpDateBefore'],'taskFollowUpDateAfter': opts['taskFollowUpDateAfter'],'startedBefore': opts['startedBefore'],'startedAfter': opts['startedAfter'],'finishedBefore': opts['finishedBefore'],'finishedAfter': opts['finishedAfter'],'tenantIdIn': opts['tenantIdIn'],'withoutTenantId': opts['withoutTenantId'],'taskVariables': opts['taskVariables'],'processVariables': opts['processVariables'],'variableNamesIgnoreCase': opts['variableNamesIgnoreCase'],'variableValuesIgnoreCase': opts['variableValuesIgnoreCase'],'taskInvolvedUser': opts['taskInvolvedUser'],'taskInvolvedGroup': opts['taskInvolvedGroup'],'taskHadCandidateUser': opts['taskHadCandidateUser'],'taskHadCandidateGroup': opts['taskHadCandidateGroup'],'withCandidateGroups': opts['withCandidateGroups'],'withoutCandidateGroups': opts['withoutCandidateGroups'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'firstResult': opts['firstResult'],'maxResults': opts['maxResults']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [HistoricTaskInstanceDto];

      return this.apiClient.callApi(
        '/history/task', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getHistoricTaskInstancesCount operation.
     * @callback moduleapi/HistoricTaskInstanceApi~getHistoricTaskInstancesCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Task Count
     * Queries for the number of historic tasks that fulfill the given parameters. Takes the same parameters as the [Get Tasks (Historic)](https://docs.camunda.org/manual/develop/reference/rest/history/task/get-task-query/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.taskId Filter by task id.
     * @param {String} opts.taskParentTaskId Filter by parent task id.
     * @param {String} opts.processInstanceId Filter by process instance id.
     * @param {String} opts.processInstanceBusinessKey Filter by process instance business key.
     * @param {String} opts.processInstanceBusinessKeyIn Filter by process instances with one of the give business keys. The keys need to be in a comma-separated list.
     * @param {String} opts.processInstanceBusinessKeyLike Filter by  process instance business key that has the parameter value as a substring.
     * @param {String} opts.executionId Filter by the id of the execution that executed the task.
     * @param {String} opts.processDefinitionId Filter by process definition id.
     * @param {String} opts.processDefinitionKey Restrict to tasks that belong to a process definition with the given key.
     * @param {String} opts.processDefinitionName Restrict to tasks that belong to a process definition with the given name.
     * @param {String} opts.caseInstanceId Filter by case instance id.
     * @param {String} opts.caseExecutionId Filter by the id of the case execution that executed the task.
     * @param {String} opts.caseDefinitionId Filter by case definition id.
     * @param {String} opts.caseDefinitionKey Restrict to tasks that belong to a case definition with the given key.
     * @param {String} opts.caseDefinitionName Restrict to tasks that belong to a case definition with the given name.
     * @param {String} opts.activityInstanceIdIn Only include tasks which belong to one of the passed comma-separated activity instance ids.
     * @param {String} opts.taskName Restrict to tasks that have the given name.
     * @param {String} opts.taskNameLike Restrict to tasks that have a name with the given parameter value as substring.
     * @param {String} opts.taskDescription Restrict to tasks that have the given description.
     * @param {String} opts.taskDescriptionLike Restrict to tasks that have a description that has the parameter value as a substring.
     * @param {String} opts.taskDefinitionKey Restrict to tasks that have the given key.
     * @param {String} opts.taskDefinitionKeyIn Restrict to tasks that have one of the passed comma-separated task definition keys.
     * @param {String} opts.taskDeleteReason Restrict to tasks that have the given delete reason.
     * @param {String} opts.taskDeleteReasonLike Restrict to tasks that have a delete reason that has the parameter value as a substring.
     * @param {String} opts.taskAssignee Restrict to tasks that the given user is assigned to.
     * @param {String} opts.taskAssigneeLike Restrict to tasks that are assigned to users with the parameter value as a substring.
     * @param {String} opts.taskOwner Restrict to tasks that the given user owns.
     * @param {String} opts.taskOwnerLike Restrict to tasks that are owned by users with the parameter value as a substring.
     * @param {Number} opts.taskPriority Restrict to tasks that have the given priority.
     * @param {Boolean} opts.assigned If set to &#x60;true&#x60;, restricts the query to all tasks that are assigned.
     * @param {Boolean} opts.unassigned If set to &#x60;true&#x60;, restricts the query to all tasks that are unassigned.
     * @param {Boolean} opts.finished Only include finished tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.unfinished Only include unfinished tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.processFinished Only include tasks of finished processes. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.processUnfinished Only include tasks of unfinished processes. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Date} opts.taskDueDate Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.taskDueDateBefore Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.taskDueDateAfter Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Boolean} opts.withoutTaskDueDate Only include tasks which have no due date. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Date} opts.taskFollowUpDate Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.taskFollowUpDateBefore Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.taskFollowUpDateAfter Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.startedBefore Restrict to tasks that were started before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.startedAfter Restrict to tasks that were started after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.finishedBefore Restrict to tasks that were finished before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {Date} opts.finishedAfter Restrict to tasks that were finished after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;.
     * @param {String} opts.tenantIdIn Filter by a comma-separated list of tenant ids. A task instance must have one of the given tenant ids.
     * @param {Boolean} opts.withoutTenantId Only include historic task instances that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {String} opts.taskVariables Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value. **Note:** Values are always treated as &#x60;String&#x60; objects on server side.   Valid operator values are: * &#x60;eq&#x60; - equal to; * &#x60;neq&#x60; - not equal to; * &#x60;gt&#x60; - greater than; * &#x60;gteq&#x60; - greater than or equal to; * &#x60;lt&#x60; - lower than; * &#x60;lteq&#x60; - lower than or equal to; * &#x60;like&#x60;.  &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters.
     * @param {String} opts.processVariables Only include tasks that belong to process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value. **Note:** Values are always treated as &#x60;String&#x60; objects on server side.   Valid operator values are: * &#x60;eq&#x60; - equal to; * &#x60;neq&#x60; - not equal to; * &#x60;gt&#x60; - greater than; * &#x60;gteq&#x60; - greater than or equal to; * &#x60;lt&#x60; - lower than; * &#x60;lteq&#x60; - lower than or equal to; * &#x60;like&#x60;; * &#x60;notLike&#x60;.  &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters.
     * @param {Boolean} opts.variableNamesIgnoreCase Match the variable name provided in &#x60;taskVariables&#x60; and &#x60;processVariables&#x60; case- insensitively. If set to &#x60;true&#x60; **variableName** and **variablename** are treated as equal.
     * @param {Boolean} opts.variableValuesIgnoreCase Match the variable value provided in &#x60;taskVariables&#x60; and &#x60;processVariables&#x60; case- insensitively. If set to &#x60;true&#x60; **variableValue** and **variablevalue** are treated as equal.
     * @param {String} opts.taskInvolvedUser Restrict to tasks with a historic identity link to the given user.
     * @param {String} opts.taskInvolvedGroup Restrict to tasks with a historic identity link to the given group.
     * @param {String} opts.taskHadCandidateUser Restrict to tasks with a historic identity link to the given candidate user.
     * @param {String} opts.taskHadCandidateGroup Restrict to tasks with a historic identity link to the given candidate group.
     * @param {Boolean} opts.withCandidateGroups Only include tasks which have a candidate group. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {Boolean} opts.withoutCandidateGroups Only include tasks which have no candidate group. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {module:api/HistoricTaskInstanceApi~getHistoricTaskInstancesCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getHistoricTaskInstancesCount(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'taskId': opts['taskId'],'taskParentTaskId': opts['taskParentTaskId'],'processInstanceId': opts['processInstanceId'],'processInstanceBusinessKey': opts['processInstanceBusinessKey'],'processInstanceBusinessKeyIn': opts['processInstanceBusinessKeyIn'],'processInstanceBusinessKeyLike': opts['processInstanceBusinessKeyLike'],'executionId': opts['executionId'],'processDefinitionId': opts['processDefinitionId'],'processDefinitionKey': opts['processDefinitionKey'],'processDefinitionName': opts['processDefinitionName'],'caseInstanceId': opts['caseInstanceId'],'caseExecutionId': opts['caseExecutionId'],'caseDefinitionId': opts['caseDefinitionId'],'caseDefinitionKey': opts['caseDefinitionKey'],'caseDefinitionName': opts['caseDefinitionName'],'activityInstanceIdIn': opts['activityInstanceIdIn'],'taskName': opts['taskName'],'taskNameLike': opts['taskNameLike'],'taskDescription': opts['taskDescription'],'taskDescriptionLike': opts['taskDescriptionLike'],'taskDefinitionKey': opts['taskDefinitionKey'],'taskDefinitionKeyIn': opts['taskDefinitionKeyIn'],'taskDeleteReason': opts['taskDeleteReason'],'taskDeleteReasonLike': opts['taskDeleteReasonLike'],'taskAssignee': opts['taskAssignee'],'taskAssigneeLike': opts['taskAssigneeLike'],'taskOwner': opts['taskOwner'],'taskOwnerLike': opts['taskOwnerLike'],'taskPriority': opts['taskPriority'],'assigned': opts['assigned'],'unassigned': opts['unassigned'],'finished': opts['finished'],'unfinished': opts['unfinished'],'processFinished': opts['processFinished'],'processUnfinished': opts['processUnfinished'],'taskDueDate': opts['taskDueDate'],'taskDueDateBefore': opts['taskDueDateBefore'],'taskDueDateAfter': opts['taskDueDateAfter'],'withoutTaskDueDate': opts['withoutTaskDueDate'],'taskFollowUpDate': opts['taskFollowUpDate'],'taskFollowUpDateBefore': opts['taskFollowUpDateBefore'],'taskFollowUpDateAfter': opts['taskFollowUpDateAfter'],'startedBefore': opts['startedBefore'],'startedAfter': opts['startedAfter'],'finishedBefore': opts['finishedBefore'],'finishedAfter': opts['finishedAfter'],'tenantIdIn': opts['tenantIdIn'],'withoutTenantId': opts['withoutTenantId'],'taskVariables': opts['taskVariables'],'processVariables': opts['processVariables'],'variableNamesIgnoreCase': opts['variableNamesIgnoreCase'],'variableValuesIgnoreCase': opts['variableValuesIgnoreCase'],'taskInvolvedUser': opts['taskInvolvedUser'],'taskInvolvedGroup': opts['taskInvolvedGroup'],'taskHadCandidateUser': opts['taskHadCandidateUser'],'taskHadCandidateGroup': opts['taskHadCandidateGroup'],'withCandidateGroups': opts['withCandidateGroups'],'withoutCandidateGroups': opts['withoutCandidateGroups']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CountResultDto;

      return this.apiClient.callApi(
        '/history/task/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the queryHistoricTaskInstances operation.
     * @callback moduleapi/HistoricTaskInstanceApi~queryHistoricTaskInstancesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HistoricTaskInstanceDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Tasks (Historic) (POST)
     * Queries for historic tasks that fulfill the given parameters. This method is slightly more powerful than the [Get Tasks (Historic)](https://docs.camunda.org/manual/develop/reference/rest/history/task/get-task-query/) method because it allows filtering by multiple process or task variables of types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;. The size of the result set can be retrieved by using the [Get Task Count (POST)](https://docs.camunda.org/manual/develop/reference/rest/history/task/post-task-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {module:model/HistoricTaskInstanceQueryDto} opts.body 
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {module:api/HistoricTaskInstanceApi~queryHistoricTaskInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    queryHistoricTaskInstances(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        'firstResult': opts['firstResult'],'maxResults': opts['maxResults']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [HistoricTaskInstanceDto];

      return this.apiClient.callApi(
        '/history/task', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the queryHistoricTaskInstancesCount operation.
     * @callback moduleapi/HistoricTaskInstanceApi~queryHistoricTaskInstancesCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResultDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Task Count (POST)
     * Queries for the number of historic tasks that fulfill the given parameters. Takes the same parameters as the [Get Tasks (Historic)](https://docs.camunda.org/manual/develop/reference/rest/history/task/get-task-query/) method. Corresponds to the size of the result set of the [Get Tasks (Historic) (POST)](https://docs.camunda.org/manual/develop/reference/rest/history/task/post-task-query/) method and takes the same parameters.
     * @param {Object} opts Optional parameters
     * @param {module:model/HistoricTaskInstanceQueryDto} opts.body 
     * @param {module:api/HistoricTaskInstanceApi~queryHistoricTaskInstancesCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    queryHistoricTaskInstancesCount(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CountResultDto;

      return this.apiClient.callApi(
        '/history/task/count', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}