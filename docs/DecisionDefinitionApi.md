# CamundaRestApi.DecisionDefinitionApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**evaluateDecisionById**](DecisionDefinitionApi.md#evaluateDecisionById) | **POST** /decision-definition/{id}/evaluate | Evaluate By Id
[**evaluateDecisionByKey**](DecisionDefinitionApi.md#evaluateDecisionByKey) | **POST** /decision-definition/key/{key}/evaluate | Evaluate By Key
[**evaluateDecisionByKeyAndTenant**](DecisionDefinitionApi.md#evaluateDecisionByKeyAndTenant) | **POST** /decision-definition/key/{key}/tenant-id/{tenant-id}/evaluate | Evaluate By Key And Tenant
[**getDecisionDefinitionById**](DecisionDefinitionApi.md#getDecisionDefinitionById) | **GET** /decision-definition/{id} | Get Decision Definition By Id
[**getDecisionDefinitionByKey**](DecisionDefinitionApi.md#getDecisionDefinitionByKey) | **GET** /decision-definition/key/{key} | Get Decision Definition By Key
[**getDecisionDefinitionByKeyAndTenantId**](DecisionDefinitionApi.md#getDecisionDefinitionByKeyAndTenantId) | **GET** /decision-definition/key/{key}/tenant-id/{tenant-id} | Get Decision Definition By Key And Tenant Id
[**getDecisionDefinitionDiagram**](DecisionDefinitionApi.md#getDecisionDefinitionDiagram) | **GET** /decision-definition/{id}/diagram | Get Diagram
[**getDecisionDefinitionDiagramByKey**](DecisionDefinitionApi.md#getDecisionDefinitionDiagramByKey) | **GET** /decision-definition/key/{key}/diagram | Get Diagram By Key
[**getDecisionDefinitionDiagramByKeyAndTenant**](DecisionDefinitionApi.md#getDecisionDefinitionDiagramByKeyAndTenant) | **GET** /decision-definition/key/{key}/tenant-id/{tenant-id}/diagram | Get Diagram By Key And Tenant
[**getDecisionDefinitionDmnXmlById**](DecisionDefinitionApi.md#getDecisionDefinitionDmnXmlById) | **GET** /decision-definition/{id}/xml | Get XML By Id
[**getDecisionDefinitionDmnXmlByKey**](DecisionDefinitionApi.md#getDecisionDefinitionDmnXmlByKey) | **GET** /decision-definition/key/{key}/xml | Get XML By Key
[**getDecisionDefinitionDmnXmlByKeyAndTenant**](DecisionDefinitionApi.md#getDecisionDefinitionDmnXmlByKeyAndTenant) | **GET** /decision-definition/key/{key}/tenant-id/{tenant-id}/xml | Get XML By Key and Tenant
[**getDecisionDefinitions**](DecisionDefinitionApi.md#getDecisionDefinitions) | **GET** /decision-definition | Get List
[**getDecisionDefinitionsCount**](DecisionDefinitionApi.md#getDecisionDefinitionsCount) | **GET** /decision-definition/count | Get List Count
[**updateHistoryTimeToLiveByDecisionDefinitionId**](DecisionDefinitionApi.md#updateHistoryTimeToLiveByDecisionDefinitionId) | **PUT** /decision-definition/{id}/history-time-to-live | Update History Time to Live
[**updateHistoryTimeToLiveByDecisionDefinitionKey**](DecisionDefinitionApi.md#updateHistoryTimeToLiveByDecisionDefinitionKey) | **PUT** /decision-definition/key/{key}/history-time-to-live | Update History Time to Live By Key
[**updateHistoryTimeToLiveByDecisionDefinitionKeyAndTenant**](DecisionDefinitionApi.md#updateHistoryTimeToLiveByDecisionDefinitionKeyAndTenant) | **PUT** /decision-definition/key/{key}/tenant-id/{tenant-id}/history-time-to-live | Update History Time to Live By Key And Tenant

<a name="evaluateDecisionById"></a>
# **evaluateDecisionById**
> [{&#x27;String&#x27;: VariableValueDto}] evaluateDecisionById(id, opts)

Evaluate By Id

Evaluates a given decision and returns the result. The input values of the decision have to be supplied in the request body.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let id = "id_example"; // String | The id of the decision definition to be evaluated.
let opts = { 
  'body': new CamundaRestApi.EvaluateDecisionDto() // EvaluateDecisionDto | 
};
apiInstance.evaluateDecisionById(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the decision definition to be evaluated. | 
 **body** | [**EvaluateDecisionDto**](EvaluateDecisionDto.md)|  | [optional] 

### Return type

**[{&#x27;String&#x27;: VariableValueDto}]**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="evaluateDecisionByKey"></a>
# **evaluateDecisionByKey**
> [{&#x27;String&#x27;: VariableValueDto}] evaluateDecisionByKey(key, opts)

Evaluate By Key

Evaluates the latest version of the decision definition which belongs to no tenant. The input values of the decision have to be supplied in the request body.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let key = "key_example"; // String | The key of the decision definition (the latest version thereof) to be evaluated.
let opts = { 
  'body': new CamundaRestApi.EvaluateDecisionDto() // EvaluateDecisionDto | 
};
apiInstance.evaluateDecisionByKey(key, opts, (error, data, response) => {
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
 **key** | **String**| The key of the decision definition (the latest version thereof) to be evaluated. | 
 **body** | [**EvaluateDecisionDto**](EvaluateDecisionDto.md)|  | [optional] 

### Return type

**[{&#x27;String&#x27;: VariableValueDto}]**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="evaluateDecisionByKeyAndTenant"></a>
# **evaluateDecisionByKeyAndTenant**
> [{&#x27;String&#x27;: VariableValueDto}] evaluateDecisionByKeyAndTenant(key, tenantId, opts)

Evaluate By Key And Tenant

Evaluates the latest version of the decision definition for tenant. The input values of the decision have to be supplied in the request body.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let key = "key_example"; // String | The key of the decision definition (the latest version thereof) to be evaluated.
let tenantId = "tenantId_example"; // String | The id of the tenant the decision definition belongs to.
let opts = { 
  'body': new CamundaRestApi.EvaluateDecisionDto() // EvaluateDecisionDto | 
};
apiInstance.evaluateDecisionByKeyAndTenant(key, tenantId, opts, (error, data, response) => {
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
 **key** | **String**| The key of the decision definition (the latest version thereof) to be evaluated. | 
 **tenantId** | **String**| The id of the tenant the decision definition belongs to. | 
 **body** | [**EvaluateDecisionDto**](EvaluateDecisionDto.md)|  | [optional] 

### Return type

**[{&#x27;String&#x27;: VariableValueDto}]**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDecisionDefinitionById"></a>
# **getDecisionDefinitionById**
> DecisionDefinitionDto getDecisionDefinitionById(id)

Get Decision Definition By Id

Retrieves a decision definition by id, according to the &#x60;DecisionDefinition&#x60; interface in the engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let id = "id_example"; // String | The id of the decision definition to be retrieved.

apiInstance.getDecisionDefinitionById(id, (error, data, response) => {
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
 **id** | **String**| The id of the decision definition to be retrieved. | 

### Return type

[**DecisionDefinitionDto**](DecisionDefinitionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDecisionDefinitionByKey"></a>
# **getDecisionDefinitionByKey**
> DecisionDefinitionDto getDecisionDefinitionByKey(key)

Get Decision Definition By Key

Retrieves the latest version of the decision definition which belongs to no tenant.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let key = "key_example"; // String | The key of the decision definition (the latest version thereof) to be retrieved.

apiInstance.getDecisionDefinitionByKey(key, (error, data, response) => {
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
 **key** | **String**| The key of the decision definition (the latest version thereof) to be retrieved. | 

### Return type

[**DecisionDefinitionDto**](DecisionDefinitionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDecisionDefinitionByKeyAndTenantId"></a>
# **getDecisionDefinitionByKeyAndTenantId**
> DecisionDefinitionDto getDecisionDefinitionByKeyAndTenantId(key, tenantId)

Get Decision Definition By Key And Tenant Id

Retrieves the latest version of the decision definition for tenant

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let key = "key_example"; // String | The key of the decision definition (the latest version thereof) to be retrieved.
let tenantId = "tenantId_example"; // String | The id of the tenant the decision definition belongs to.

apiInstance.getDecisionDefinitionByKeyAndTenantId(key, tenantId, (error, data, response) => {
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
 **key** | **String**| The key of the decision definition (the latest version thereof) to be retrieved. | 
 **tenantId** | **String**| The id of the tenant the decision definition belongs to. | 

### Return type

[**DecisionDefinitionDto**](DecisionDefinitionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDecisionDefinitionDiagram"></a>
# **getDecisionDefinitionDiagram**
> &#x27;Blob&#x27; getDecisionDefinitionDiagram(id)

Get Diagram

Retrieves the diagram of a decision definition.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let id = "id_example"; // String | The id of the process definition.

apiInstance.getDecisionDefinitionDiagram(id, (error, data, response) => {
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
 **id** | **String**| The id of the process definition. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, */*, application/json

<a name="getDecisionDefinitionDiagramByKey"></a>
# **getDecisionDefinitionDiagramByKey**
> &#x27;Blob&#x27; getDecisionDefinitionDiagramByKey(key)

Get Diagram By Key

Returns the diagram for the latest version of the decision definition which belongs to no tenant

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let key = "key_example"; // String | The key of the decision definition (the latest version thereof) to be retrieved.

apiInstance.getDecisionDefinitionDiagramByKey(key, (error, data, response) => {
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
 **key** | **String**| The key of the decision definition (the latest version thereof) to be retrieved. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, */*, application/json

<a name="getDecisionDefinitionDiagramByKeyAndTenant"></a>
# **getDecisionDefinitionDiagramByKeyAndTenant**
> &#x27;Blob&#x27; getDecisionDefinitionDiagramByKeyAndTenant(key, tenantId)

Get Diagram By Key And Tenant

Returns the XML of the latest version of the decision definition for tenant.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let key = "key_example"; // String | The key of the decision definition (the latest version thereof) to be retrieved.
let tenantId = "tenantId_example"; // String | The id of the tenant the decision definition belongs to.

apiInstance.getDecisionDefinitionDiagramByKeyAndTenant(key, tenantId, (error, data, response) => {
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
 **key** | **String**| The key of the decision definition (the latest version thereof) to be retrieved. | 
 **tenantId** | **String**| The id of the tenant the decision definition belongs to. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, */*, application/json

<a name="getDecisionDefinitionDmnXmlById"></a>
# **getDecisionDefinitionDmnXmlById**
> DecisionDefinitionDiagramDto getDecisionDefinitionDmnXmlById(id)

Get XML By Id

Retrieves the DMN XML of a decision definition.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let id = "id_example"; // String | The id of the decision definition.

apiInstance.getDecisionDefinitionDmnXmlById(id, (error, data, response) => {
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
 **id** | **String**| The id of the decision definition. | 

### Return type

[**DecisionDefinitionDiagramDto**](DecisionDefinitionDiagramDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDecisionDefinitionDmnXmlByKey"></a>
# **getDecisionDefinitionDmnXmlByKey**
> DecisionDefinitionDiagramDto getDecisionDefinitionDmnXmlByKey(key)

Get XML By Key

Retrieves the XML for the latest version of the decision definition which belongs to no tenant.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let key = "key_example"; // String | The key of the decision definition (the latest version thereof).

apiInstance.getDecisionDefinitionDmnXmlByKey(key, (error, data, response) => {
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
 **key** | **String**| The key of the decision definition (the latest version thereof). | 

### Return type

[**DecisionDefinitionDiagramDto**](DecisionDefinitionDiagramDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDecisionDefinitionDmnXmlByKeyAndTenant"></a>
# **getDecisionDefinitionDmnXmlByKeyAndTenant**
> DecisionDefinitionDiagramDto getDecisionDefinitionDmnXmlByKeyAndTenant(key, tenantId)

Get XML By Key and Tenant

Retrieves the XML of the latest version of the decision definition for tenant

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let key = "key_example"; // String | The key of the decision definition (the latest version thereof).
let tenantId = "tenantId_example"; // String | The id of the tenant the decision definition belongs to.

apiInstance.getDecisionDefinitionDmnXmlByKeyAndTenant(key, tenantId, (error, data, response) => {
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
 **key** | **String**| The key of the decision definition (the latest version thereof). | 
 **tenantId** | **String**| The id of the tenant the decision definition belongs to. | 

### Return type

[**DecisionDefinitionDiagramDto**](DecisionDefinitionDiagramDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDecisionDefinitions"></a>
# **getDecisionDefinitions**
> [DecisionDefinitionDto] getDecisionDefinitions(opts)

Get List

Queries for decision definitions that fulfill given parameters. Parameters may be the properties of decision definitions, such as the name, key or version. The size of the result set can be retrieved by using the [Get Decision Definition Count](https://docs.camunda.org/manual/develop/reference/rest/decision-definition/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let opts = { 
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'decisionDefinitionId': "decisionDefinitionId_example", // String | Filter by decision definition id.
  'decisionDefinitionIdIn': "decisionDefinitionIdIn_example", // String | Filter by decision definition ids.
  'name': "name_example", // String | Filter by decision definition name.
  'nameLike': "nameLike_example", // String | Filter by decision definition names that the parameter is a substring of.
  'deploymentId': "deploymentId_example", // String | Filter by the deployment the id belongs to.
  'deployedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter by the deploy time of the deployment the decision definition belongs to. Only selects decision definitions that have been deployed after (exclusive) a specific time.
  'deployedAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter by the deploy time of the deployment the decision definition belongs to. Only selects decision definitions that have been deployed at a specific time (exact match).
  'key': "key_example", // String | Filter by decision definition key, i.e., the id in the DMN 1.0 XML. Exact match.
  'keyLike': "keyLike_example", // String | Filter by decision definition keys that the parameter is a substring of.
  'category': "category_example", // String | Filter by decision definition category. Exact match.
  'categoryLike': "categoryLike_example", // String | Filter by decision definition categories that the parameter is a substring of.
  'version': 56, // Number | Filter by decision definition version.
  'latestVersion': true, // Boolean | Only include those decision definitions that are latest versions. Value may only be `true`, as `false` is the default behavior.
  'resourceName': "resourceName_example", // String | Filter by the name of the decision definition resource. Exact match.
  'resourceNameLike': "resourceNameLike_example", // String | Filter by names of those decision definition resources that the parameter is a substring of.
  'decisionRequirementsDefinitionId': "decisionRequirementsDefinitionId_example", // String | Filter by the id of the decision requirements definition this decision definition belongs to.
  'decisionRequirementsDefinitionKey': "decisionRequirementsDefinitionKey_example", // String | Filter by the key of the decision requirements definition this decision definition belongs to.
  'withoutDecisionRequirementsDefinition': true, // Boolean | Only include decision definitions which does not belongs to any decision requirements definition. Value may only be `true`, as `false` is the default behavior.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of `Strings`. A decision definition must have one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include decision definitions which belong to no tenant. Value can effectively only be `true`, as `false` is the default behavior.
  'includeDecisionDefinitionsWithoutTenantId': true, // Boolean | Include decision definitions which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
  'versionTag': "versionTag_example", // String | Filter by the version tag.
  'versionTagLike': "versionTagLike_example" // String | Filter by the version tags of those decision definition resources that the parameter is a substring of.
};
apiInstance.getDecisionDefinitions(opts, (error, data, response) => {
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
 **decisionDefinitionId** | **String**| Filter by decision definition id. | [optional] 
 **decisionDefinitionIdIn** | **String**| Filter by decision definition ids. | [optional] 
 **name** | **String**| Filter by decision definition name. | [optional] 
 **nameLike** | **String**| Filter by decision definition names that the parameter is a substring of. | [optional] 
 **deploymentId** | **String**| Filter by the deployment the id belongs to. | [optional] 
 **deployedAfter** | **Date**| Filter by the deploy time of the deployment the decision definition belongs to. Only selects decision definitions that have been deployed after (exclusive) a specific time. | [optional] 
 **deployedAt** | **Date**| Filter by the deploy time of the deployment the decision definition belongs to. Only selects decision definitions that have been deployed at a specific time (exact match). | [optional] 
 **key** | **String**| Filter by decision definition key, i.e., the id in the DMN 1.0 XML. Exact match. | [optional] 
 **keyLike** | **String**| Filter by decision definition keys that the parameter is a substring of. | [optional] 
 **category** | **String**| Filter by decision definition category. Exact match. | [optional] 
 **categoryLike** | **String**| Filter by decision definition categories that the parameter is a substring of. | [optional] 
 **version** | **Number**| Filter by decision definition version. | [optional] 
 **latestVersion** | **Boolean**| Only include those decision definitions that are latest versions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **resourceName** | **String**| Filter by the name of the decision definition resource. Exact match. | [optional] 
 **resourceNameLike** | **String**| Filter by names of those decision definition resources that the parameter is a substring of. | [optional] 
 **decisionRequirementsDefinitionId** | **String**| Filter by the id of the decision requirements definition this decision definition belongs to. | [optional] 
 **decisionRequirementsDefinitionKey** | **String**| Filter by the key of the decision requirements definition this decision definition belongs to. | [optional] 
 **withoutDecisionRequirementsDefinition** | **Boolean**| Only include decision definitions which does not belongs to any decision requirements definition. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of &#x60;Strings&#x60;. A decision definition must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include decision definitions which belong to no tenant. Value can effectively only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **includeDecisionDefinitionsWithoutTenantId** | **Boolean**| Include decision definitions which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **versionTag** | **String**| Filter by the version tag. | [optional] 
 **versionTagLike** | **String**| Filter by the version tags of those decision definition resources that the parameter is a substring of. | [optional] 

### Return type

[**[DecisionDefinitionDto]**](DecisionDefinitionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDecisionDefinitionsCount"></a>
# **getDecisionDefinitionsCount**
> CountResultDto getDecisionDefinitionsCount(opts)

Get List Count

Requests the number of decision definitions that fulfill the query criteria. Takes the same filtering parameters as the [Get Decision Definition](https://docs.camunda.org/manual/develop/reference/rest/decision-definition/get-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let opts = { 
  'decisionDefinitionId': "decisionDefinitionId_example", // String | Filter by decision definition id.
  'decisionDefinitionIdIn': "decisionDefinitionIdIn_example", // String | Filter by decision definition ids.
  'name': "name_example", // String | Filter by decision definition name.
  'nameLike': "nameLike_example", // String | Filter by decision definition names that the parameter is a substring of.
  'deploymentId': "deploymentId_example", // String | Filter by the deployment the id belongs to.
  'deployedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter by the deploy time of the deployment the decision definition belongs to. Only selects decision definitions that have been deployed after (exclusive) a specific time.
  'deployedAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter by the deploy time of the deployment the decision definition belongs to. Only selects decision definitions that have been deployed at a specific time (exact match).
  'key': "key_example", // String | Filter by decision definition key, i.e., the id in the DMN 1.0 XML. Exact match.
  'keyLike': "keyLike_example", // String | Filter by decision definition keys that the parameter is a substring of.
  'category': "category_example", // String | Filter by decision definition category. Exact match.
  'categoryLike': "categoryLike_example", // String | Filter by decision definition categories that the parameter is a substring of.
  'version': 56, // Number | Filter by decision definition version.
  'latestVersion': true, // Boolean | Only include those decision definitions that are latest versions. Value may only be `true`, as `false` is the default behavior.
  'resourceName': "resourceName_example", // String | Filter by the name of the decision definition resource. Exact match.
  'resourceNameLike': "resourceNameLike_example", // String | Filter by names of those decision definition resources that the parameter is a substring of.
  'decisionRequirementsDefinitionId': "decisionRequirementsDefinitionId_example", // String | Filter by the id of the decision requirements definition this decision definition belongs to.
  'decisionRequirementsDefinitionKey': "decisionRequirementsDefinitionKey_example", // String | Filter by the key of the decision requirements definition this decision definition belongs to.
  'withoutDecisionRequirementsDefinition': true, // Boolean | Only include decision definitions which does not belongs to any decision requirements definition. Value may only be `true`, as `false` is the default behavior.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of `Strings`. A decision definition must have one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include decision definitions which belong to no tenant. Value can effectively only be `true`, as `false` is the default behavior.
  'includeDecisionDefinitionsWithoutTenantId': true, // Boolean | Include decision definitions which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
  'versionTag': "versionTag_example", // String | Filter by the version tag.
  'versionTagLike': "versionTagLike_example" // String | Filter by the version tags of those decision definition resources that the parameter is a substring of.
};
apiInstance.getDecisionDefinitionsCount(opts, (error, data, response) => {
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
 **decisionDefinitionId** | **String**| Filter by decision definition id. | [optional] 
 **decisionDefinitionIdIn** | **String**| Filter by decision definition ids. | [optional] 
 **name** | **String**| Filter by decision definition name. | [optional] 
 **nameLike** | **String**| Filter by decision definition names that the parameter is a substring of. | [optional] 
 **deploymentId** | **String**| Filter by the deployment the id belongs to. | [optional] 
 **deployedAfter** | **Date**| Filter by the deploy time of the deployment the decision definition belongs to. Only selects decision definitions that have been deployed after (exclusive) a specific time. | [optional] 
 **deployedAt** | **Date**| Filter by the deploy time of the deployment the decision definition belongs to. Only selects decision definitions that have been deployed at a specific time (exact match). | [optional] 
 **key** | **String**| Filter by decision definition key, i.e., the id in the DMN 1.0 XML. Exact match. | [optional] 
 **keyLike** | **String**| Filter by decision definition keys that the parameter is a substring of. | [optional] 
 **category** | **String**| Filter by decision definition category. Exact match. | [optional] 
 **categoryLike** | **String**| Filter by decision definition categories that the parameter is a substring of. | [optional] 
 **version** | **Number**| Filter by decision definition version. | [optional] 
 **latestVersion** | **Boolean**| Only include those decision definitions that are latest versions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **resourceName** | **String**| Filter by the name of the decision definition resource. Exact match. | [optional] 
 **resourceNameLike** | **String**| Filter by names of those decision definition resources that the parameter is a substring of. | [optional] 
 **decisionRequirementsDefinitionId** | **String**| Filter by the id of the decision requirements definition this decision definition belongs to. | [optional] 
 **decisionRequirementsDefinitionKey** | **String**| Filter by the key of the decision requirements definition this decision definition belongs to. | [optional] 
 **withoutDecisionRequirementsDefinition** | **Boolean**| Only include decision definitions which does not belongs to any decision requirements definition. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of &#x60;Strings&#x60;. A decision definition must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include decision definitions which belong to no tenant. Value can effectively only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **includeDecisionDefinitionsWithoutTenantId** | **Boolean**| Include decision definitions which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **versionTag** | **String**| Filter by the version tag. | [optional] 
 **versionTagLike** | **String**| Filter by the version tags of those decision definition resources that the parameter is a substring of. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateHistoryTimeToLiveByDecisionDefinitionId"></a>
# **updateHistoryTimeToLiveByDecisionDefinitionId**
> updateHistoryTimeToLiveByDecisionDefinitionId(id, opts)

Update History Time to Live

Updates history time to live for decision definition. The field is used within [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let id = "id_example"; // String | The id of the decision definition to change history time to live.
let opts = { 
  'body': new CamundaRestApi.HistoryTimeToLiveDto() // HistoryTimeToLiveDto | 
};
apiInstance.updateHistoryTimeToLiveByDecisionDefinitionId(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the decision definition to change history time to live. | 
 **body** | [**HistoryTimeToLiveDto**](HistoryTimeToLiveDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateHistoryTimeToLiveByDecisionDefinitionKey"></a>
# **updateHistoryTimeToLiveByDecisionDefinitionKey**
> updateHistoryTimeToLiveByDecisionDefinitionKey(key, opts)

Update History Time to Live By Key

Updates the latest version of the decision definition which belongs to no tenant. The field is used within [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let key = "key_example"; // String | The key of the decision definitions to change history time to live.
let opts = { 
  'body': new CamundaRestApi.HistoryTimeToLiveDto() // HistoryTimeToLiveDto | 
};
apiInstance.updateHistoryTimeToLiveByDecisionDefinitionKey(key, opts, (error, data, response) => {
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
 **key** | **String**| The key of the decision definitions to change history time to live. | 
 **body** | [**HistoryTimeToLiveDto**](HistoryTimeToLiveDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateHistoryTimeToLiveByDecisionDefinitionKeyAndTenant"></a>
# **updateHistoryTimeToLiveByDecisionDefinitionKeyAndTenant**
> updateHistoryTimeToLiveByDecisionDefinitionKeyAndTenant(key, tenantId, opts)

Update History Time to Live By Key And Tenant

Updates the latest version of the decision definition for tenant. The field is used within [History cleanup](https://docs.camunda.org/manual/develop/user-guide/process-engine/history/#history-cleanup).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionDefinitionApi();
let key = "key_example"; // String | The key of the decision definitions to change history time to live.
let tenantId = "tenantId_example"; // String | The id of the tenant the decision definition belongs to.
let opts = { 
  'body': new CamundaRestApi.HistoryTimeToLiveDto() // HistoryTimeToLiveDto | 
};
apiInstance.updateHistoryTimeToLiveByDecisionDefinitionKeyAndTenant(key, tenantId, opts, (error, data, response) => {
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
 **key** | **String**| The key of the decision definitions to change history time to live. | 
 **tenantId** | **String**| The id of the tenant the decision definition belongs to. | 
 **body** | [**HistoryTimeToLiveDto**](HistoryTimeToLiveDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

