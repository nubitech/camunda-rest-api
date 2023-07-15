# CamundaRestApi.MigrationApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**executeMigrationPlan**](MigrationApi.md#executeMigrationPlan) | **POST** /migration/execute | Execute Migration Plan
[**executeMigrationPlanAsync**](MigrationApi.md#executeMigrationPlanAsync) | **POST** /migration/executeAsync | Execute Migration Plan Async (Batch)
[**generateMigrationPlan**](MigrationApi.md#generateMigrationPlan) | **POST** /migration/generate | Generate Migration Plan
[**validateMigrationPlan**](MigrationApi.md#validateMigrationPlan) | **POST** /migration/validate | Validate Migration Plan

<a name="executeMigrationPlan"></a>
# **executeMigrationPlan**
> executeMigrationPlan(opts)

Execute Migration Plan

Executes a migration plan synchronously for multiple process instances. To execute a migration plan asynchronously, use the [Execute Migration Plan Async(Batch)](https://docs.camunda.org/manual/develop/reference/rest/migration/execute-migration-async/) method.  For more information about the difference between synchronous and asynchronous execution of a migration plan, please refer to the related section of [the user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/process-instance-migration/#executing-a-migration-plan).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.MigrationApi();
let opts = { 
  'body': new CamundaRestApi.MigrationExecutionDto() // MigrationExecutionDto | 
};
apiInstance.executeMigrationPlan(opts, (error, data, response) => {
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
 **body** | [**MigrationExecutionDto**](MigrationExecutionDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="executeMigrationPlanAsync"></a>
# **executeMigrationPlanAsync**
> BatchDto executeMigrationPlanAsync(opts)

Execute Migration Plan Async (Batch)

Executes a migration plan asynchronously (batch) for multiple process instances. To execute a migration plan synchronously, use the [Execute MigrationPlan](https://docs.camunda.org/manual/develop/reference/rest/migration/execute-migration/) method.  For more information about the difference between synchronous and asynchronous execution of a migration plan, please refer to the related section of [the user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/process-instance-migration/#executing-a-migration-plan).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.MigrationApi();
let opts = { 
  'body': new CamundaRestApi.MigrationExecutionDto() // MigrationExecutionDto | 
};
apiInstance.executeMigrationPlanAsync(opts, (error, data, response) => {
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
 **body** | [**MigrationExecutionDto**](MigrationExecutionDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateMigrationPlan"></a>
# **generateMigrationPlan**
> MigrationPlanDto generateMigrationPlan(opts)

Generate Migration Plan

Generates a migration plan for two process definitions. The generated migration plan contains migration instructions which map equal activities between the two process definitions.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.MigrationApi();
let opts = { 
  'body': new CamundaRestApi.MigrationPlanGenerationDto() // MigrationPlanGenerationDto | 
};
apiInstance.generateMigrationPlan(opts, (error, data, response) => {
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
 **body** | [**MigrationPlanGenerationDto**](MigrationPlanGenerationDto.md)|  | [optional] 

### Return type

[**MigrationPlanDto**](MigrationPlanDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateMigrationPlan"></a>
# **validateMigrationPlan**
> MigrationPlanReportDto validateMigrationPlan(opts)

Validate Migration Plan

Validates a migration plan statically without executing it. This corresponds to the [creation time validation](https://docs.camunda.org/manual/develop/user-guide/process-engine/process-instance-migration/#creation-time-validation) described in the user guide.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.MigrationApi();
let opts = { 
  'body': new CamundaRestApi.MigrationPlanDto() // MigrationPlanDto | 
};
apiInstance.validateMigrationPlan(opts, (error, data, response) => {
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
 **body** | [**MigrationPlanDto**](MigrationPlanDto.md)|  | [optional] 

### Return type

[**MigrationPlanReportDto**](MigrationPlanReportDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

