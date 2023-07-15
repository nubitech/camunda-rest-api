# CamundaRestApi.DecisionRequirementsDefinitionApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDecisionRequirementsDefinitionById**](DecisionRequirementsDefinitionApi.md#getDecisionRequirementsDefinitionById) | **GET** /decision-requirements-definition/{id} | Get Decision Requirements Definition by ID
[**getDecisionRequirementsDefinitionByKey**](DecisionRequirementsDefinitionApi.md#getDecisionRequirementsDefinitionByKey) | **GET** /decision-requirements-definition/key/{key} | Get Decision Requirements Definition by Key
[**getDecisionRequirementsDefinitionByKeyAndTenantId**](DecisionRequirementsDefinitionApi.md#getDecisionRequirementsDefinitionByKeyAndTenantId) | **GET** /decision-requirements-definition/key/{key}/tenant-id/{tenant-id} | Get Decision Requirements Definition by Key and Tenant ID
[**getDecisionRequirementsDefinitionDiagramById**](DecisionRequirementsDefinitionApi.md#getDecisionRequirementsDefinitionDiagramById) | **GET** /decision-requirements-definition/{id}/diagram | Get Decision Requirements Diagram by ID
[**getDecisionRequirementsDefinitionDiagramByKey**](DecisionRequirementsDefinitionApi.md#getDecisionRequirementsDefinitionDiagramByKey) | **GET** /decision-requirements-definition/key/{key}/diagram | Get Decision Requirements Diagram by Key
[**getDecisionRequirementsDefinitionDiagramByKeyAndTenantId**](DecisionRequirementsDefinitionApi.md#getDecisionRequirementsDefinitionDiagramByKeyAndTenantId) | **GET** /decision-requirements-definition/key/{key}/tenant-id/{tenant-id}/diagram | Get Decision Requirements Diagram by Key and Tenant ID
[**getDecisionRequirementsDefinitionDmnXmlById**](DecisionRequirementsDefinitionApi.md#getDecisionRequirementsDefinitionDmnXmlById) | **GET** /decision-requirements-definition/{id}/xml | Get DMN XML by ID
[**getDecisionRequirementsDefinitionDmnXmlByKey**](DecisionRequirementsDefinitionApi.md#getDecisionRequirementsDefinitionDmnXmlByKey) | **GET** /decision-requirements-definition/key/{key}/xml | Get DMN XML by Key
[**getDecisionRequirementsDefinitionDmnXmlByKeyAndTenantId**](DecisionRequirementsDefinitionApi.md#getDecisionRequirementsDefinitionDmnXmlByKeyAndTenantId) | **GET** /decision-requirements-definition/key/{key}/tenant-id/{tenant-id}/xml | Get DMN XML by Key and Tenant ID
[**getDecisionRequirementsDefinitions**](DecisionRequirementsDefinitionApi.md#getDecisionRequirementsDefinitions) | **GET** /decision-requirements-definition | Get Decision Requirements Definitions
[**getDecisionRequirementsDefinitionsCount**](DecisionRequirementsDefinitionApi.md#getDecisionRequirementsDefinitionsCount) | **GET** /decision-requirements-definition/count | Get Decision Requirements Definition Count

<a name="getDecisionRequirementsDefinitionById"></a>
# **getDecisionRequirementsDefinitionById**
> DecisionRequirementsDefinitionDto getDecisionRequirementsDefinitionById(id)

Get Decision Requirements Definition by ID

Retrieves a decision requirements definition according to the &#x60;DecisionRequirementsDefinition&#x60; interface in the engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionRequirementsDefinitionApi();
let id = "id_example"; // String | The id of the decision requirements definition to be retrieved.

apiInstance.getDecisionRequirementsDefinitionById(id, (error, data, response) => {
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
 **id** | **String**| The id of the decision requirements definition to be retrieved. | 

### Return type

[**DecisionRequirementsDefinitionDto**](DecisionRequirementsDefinitionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDecisionRequirementsDefinitionByKey"></a>
# **getDecisionRequirementsDefinitionByKey**
> DecisionRequirementsDefinitionDto getDecisionRequirementsDefinitionByKey(key)

Get Decision Requirements Definition by Key

Retrieves a decision requirements definition according to the &#x60;DecisionRequirementsDefinition&#x60; interface in the engine.  Returns the latest version of the decision requirements definition  which belongs to no tenant.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionRequirementsDefinitionApi();
let key = "key_example"; // String | The key of the decision requirements definition (the latest version thereof) to be retrieved.

apiInstance.getDecisionRequirementsDefinitionByKey(key, (error, data, response) => {
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
 **key** | **String**| The key of the decision requirements definition (the latest version thereof) to be retrieved. | 

### Return type

[**DecisionRequirementsDefinitionDto**](DecisionRequirementsDefinitionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDecisionRequirementsDefinitionByKeyAndTenantId"></a>
# **getDecisionRequirementsDefinitionByKeyAndTenantId**
> DecisionRequirementsDefinitionDto getDecisionRequirementsDefinitionByKeyAndTenantId(key, tenantId)

Get Decision Requirements Definition by Key and Tenant ID

Retrieves a decision requirements definition according to the &#x60;DecisionRequirementsDefinition&#x60; interface in the engine. Returns the latest version of the decision requirements definition  for a tenant.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionRequirementsDefinitionApi();
let key = "key_example"; // String | The key of the decision requirements definition (the latest version thereof) to be retrieved.
let tenantId = "tenantId_example"; // String | The id of the tenant to which the decision requirements definition belongs to.

apiInstance.getDecisionRequirementsDefinitionByKeyAndTenantId(key, tenantId, (error, data, response) => {
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
 **key** | **String**| The key of the decision requirements definition (the latest version thereof) to be retrieved. | 
 **tenantId** | **String**| The id of the tenant to which the decision requirements definition belongs to. | 

### Return type

[**DecisionRequirementsDefinitionDto**](DecisionRequirementsDefinitionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDecisionRequirementsDefinitionDiagramById"></a>
# **getDecisionRequirementsDefinitionDiagramById**
> &#x27;Blob&#x27; getDecisionRequirementsDefinitionDiagramById(id)

Get Decision Requirements Diagram by ID

Retrieves the diagram of a decision requirements definition.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionRequirementsDefinitionApi();
let id = "id_example"; // String | The id of the decision requirements definition.

apiInstance.getDecisionRequirementsDefinitionDiagramById(id, (error, data, response) => {
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
 **id** | **String**| The id of the decision requirements definition. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/_*, application/octet-stream, application/json

<a name="getDecisionRequirementsDefinitionDiagramByKey"></a>
# **getDecisionRequirementsDefinitionDiagramByKey**
> &#x27;Blob&#x27; getDecisionRequirementsDefinitionDiagramByKey(key)

Get Decision Requirements Diagram by Key

Retrieves the diagram of a decision requirements definition. Returns the diagram for the latest version of the decision requirements  definition which belongs to no tenant.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionRequirementsDefinitionApi();
let key = "key_example"; // String | The key of the decision requirements definition (the latest version thereof) to be retrieved.

apiInstance.getDecisionRequirementsDefinitionDiagramByKey(key, (error, data, response) => {
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
 **key** | **String**| The key of the decision requirements definition (the latest version thereof) to be retrieved. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/_*, application/octet-stream, application/json

<a name="getDecisionRequirementsDefinitionDiagramByKeyAndTenantId"></a>
# **getDecisionRequirementsDefinitionDiagramByKeyAndTenantId**
> &#x27;Blob&#x27; getDecisionRequirementsDefinitionDiagramByKeyAndTenantId(key, tenantId)

Get Decision Requirements Diagram by Key and Tenant ID

Retrieves the diagram of a decision requirements definition. Returns the diagram of the latest version of the decision requirements  definition for a tenant.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionRequirementsDefinitionApi();
let key = "key_example"; // String | The key of the decision requirements definition (the latest version thereof) to be retrieved.
let tenantId = "tenantId_example"; // String | The id of the tenant to which the decision requirements definition belongs to.

apiInstance.getDecisionRequirementsDefinitionDiagramByKeyAndTenantId(key, tenantId, (error, data, response) => {
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
 **key** | **String**| The key of the decision requirements definition (the latest version thereof) to be retrieved. | 
 **tenantId** | **String**| The id of the tenant to which the decision requirements definition belongs to. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/_*, application/octet-stream, application/json

<a name="getDecisionRequirementsDefinitionDmnXmlById"></a>
# **getDecisionRequirementsDefinitionDmnXmlById**
> DecisionRequirementsDefinitionXmlDto getDecisionRequirementsDefinitionDmnXmlById(id)

Get DMN XML by ID

Retrieves the DMN XML of a decision requirements definition.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionRequirementsDefinitionApi();
let id = "id_example"; // String | The id of the decision requirements definition.

apiInstance.getDecisionRequirementsDefinitionDmnXmlById(id, (error, data, response) => {
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
 **id** | **String**| The id of the decision requirements definition. | 

### Return type

[**DecisionRequirementsDefinitionXmlDto**](DecisionRequirementsDefinitionXmlDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDecisionRequirementsDefinitionDmnXmlByKey"></a>
# **getDecisionRequirementsDefinitionDmnXmlByKey**
> DecisionRequirementsDefinitionXmlDto getDecisionRequirementsDefinitionDmnXmlByKey(key)

Get DMN XML by Key

Retrieves the DMN XML of a decision requirements definition. Returns the XML for the latest version of the decision requirements  definition which belongs to no tenant.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionRequirementsDefinitionApi();
let key = "key_example"; // String | The key of the decision requirements definition (the latest version thereof) to be retrieved.

apiInstance.getDecisionRequirementsDefinitionDmnXmlByKey(key, (error, data, response) => {
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
 **key** | **String**| The key of the decision requirements definition (the latest version thereof) to be retrieved. | 

### Return type

[**DecisionRequirementsDefinitionXmlDto**](DecisionRequirementsDefinitionXmlDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDecisionRequirementsDefinitionDmnXmlByKeyAndTenantId"></a>
# **getDecisionRequirementsDefinitionDmnXmlByKeyAndTenantId**
> DecisionRequirementsDefinitionXmlDto getDecisionRequirementsDefinitionDmnXmlByKeyAndTenantId(key, tenantId)

Get DMN XML by Key and Tenant ID

Retrieves the DMN XML of a decision requirements definition. Returns the XML of the latest version of the decision requirements  definition for a tenant.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionRequirementsDefinitionApi();
let key = "key_example"; // String | The key of the decision requirements definition (the latest version thereof) to be retrieved.
let tenantId = "tenantId_example"; // String | The id of the tenant to which the decision requirements definition belongs to.

apiInstance.getDecisionRequirementsDefinitionDmnXmlByKeyAndTenantId(key, tenantId, (error, data, response) => {
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
 **key** | **String**| The key of the decision requirements definition (the latest version thereof) to be retrieved. | 
 **tenantId** | **String**| The id of the tenant to which the decision requirements definition belongs to. | 

### Return type

[**DecisionRequirementsDefinitionXmlDto**](DecisionRequirementsDefinitionXmlDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDecisionRequirementsDefinitions"></a>
# **getDecisionRequirementsDefinitions**
> [DecisionRequirementsDefinitionDto] getDecisionRequirementsDefinitions(opts)

Get Decision Requirements Definitions

Queries for decision requirements definitions that fulfill given parameters. Parameters may be the properties of decision requirements definitions, such as the name, key or version.  The size of the result set can be retrieved by using the [Get Decision Requirements Definition Count](https://docs.camunda.org/manual/develop/reference/rest/decision-requirements-definition/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionRequirementsDefinitionApi();
let opts = { 
  'decisionRequirementsDefinitionId': "decisionRequirementsDefinitionId_example", // String | Filter by decision requirements definition id.
  'decisionRequirementsDefinitionIdIn': "decisionRequirementsDefinitionIdIn_example", // String | Filter by decision requirements definition ids.
  'name': "name_example", // String | Filter by decision requirements definition name.
  'nameLike': "nameLike_example", // String | Filter by decision requirements definition names that the parameter is a substring of.
  'deploymentId': "deploymentId_example", // String | Filter by the id of the deployment a decision requirement definition belongs to.
  'key': "key_example", // String | Filter by decision requirements definition key, i.e., the id in the DMN 1.3 XML. Exact match.
  'keyLike': "keyLike_example", // String | Filter by decision requirements definition keys that the parameter is a substring of.
  'category': "category_example", // String | Filter by decision requirements definition category. Exact match.
  'categoryLike': "categoryLike_example", // String | Filter by decision requirements definition categories that the parameter is a substring of.
  'version': 56, // Number | Filter by decision requirements definition version.
  'latestVersion': true, // Boolean | Only include those decision requirements definitions that are latest versions. Value may only be `true`, as `false` is the default behavior.
  'resourceName': "resourceName_example", // String | Filter by the name of the decision requirements definition resource. Exact match.
  'resourceNameLike': "resourceNameLike_example", // String | Filter by names of those decision requirements definition resources that the parameter is a substring of.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A decision requirements definition must have one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include decision requirements definitions which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'includeDecisionRequirementsDefinitionsWithoutTenantId': true, // Boolean | Include decision requirements definitions which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getDecisionRequirementsDefinitions(opts, (error, data, response) => {
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
 **decisionRequirementsDefinitionId** | **String**| Filter by decision requirements definition id. | [optional] 
 **decisionRequirementsDefinitionIdIn** | **String**| Filter by decision requirements definition ids. | [optional] 
 **name** | **String**| Filter by decision requirements definition name. | [optional] 
 **nameLike** | **String**| Filter by decision requirements definition names that the parameter is a substring of. | [optional] 
 **deploymentId** | **String**| Filter by the id of the deployment a decision requirement definition belongs to. | [optional] 
 **key** | **String**| Filter by decision requirements definition key, i.e., the id in the DMN 1.3 XML. Exact match. | [optional] 
 **keyLike** | **String**| Filter by decision requirements definition keys that the parameter is a substring of. | [optional] 
 **category** | **String**| Filter by decision requirements definition category. Exact match. | [optional] 
 **categoryLike** | **String**| Filter by decision requirements definition categories that the parameter is a substring of. | [optional] 
 **version** | **Number**| Filter by decision requirements definition version. | [optional] 
 **latestVersion** | **Boolean**| Only include those decision requirements definitions that are latest versions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **resourceName** | **String**| Filter by the name of the decision requirements definition resource. Exact match. | [optional] 
 **resourceNameLike** | **String**| Filter by names of those decision requirements definition resources that the parameter is a substring of. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A decision requirements definition must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include decision requirements definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **includeDecisionRequirementsDefinitionsWithoutTenantId** | **Boolean**| Include decision requirements definitions which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[DecisionRequirementsDefinitionDto]**](DecisionRequirementsDefinitionDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDecisionRequirementsDefinitionsCount"></a>
# **getDecisionRequirementsDefinitionsCount**
> CountResultDto getDecisionRequirementsDefinitionsCount(opts)

Get Decision Requirements Definition Count

Requests the number of decision requirements definitions that fulfill the query criteria. Takes the same filtering parameters as the [Get Decision Requirements Definitions](https://docs.camunda.org/manual/develop/reference/rest/decision-requirements-definition/get-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DecisionRequirementsDefinitionApi();
let opts = { 
  'decisionRequirementsDefinitionId': "decisionRequirementsDefinitionId_example", // String | Filter by decision requirements definition id.
  'decisionRequirementsDefinitionIdIn': "decisionRequirementsDefinitionIdIn_example", // String | Filter by decision requirements definition ids.
  'name': "name_example", // String | Filter by decision requirements definition name.
  'nameLike': "nameLike_example", // String | Filter by decision requirements definition names that the parameter is a substring of.
  'deploymentId': "deploymentId_example", // String | Filter by the id of the deployment a decision requirement definition belongs to.
  'key': "key_example", // String | Filter by decision requirements definition key, i.e., the id in the DMN 1.3 XML. Exact match.
  'keyLike': "keyLike_example", // String | Filter by decision requirements definition keys that the parameter is a substring of.
  'category': "category_example", // String | Filter by decision requirements definition category. Exact match.
  'categoryLike': "categoryLike_example", // String | Filter by decision requirements definition categories that the parameter is a substring of.
  'version': 56, // Number | Filter by decision requirements definition version.
  'latestVersion': true, // Boolean | Only include those decision requirements definitions that are latest versions. Value may only be `true`, as `false` is the default behavior.
  'resourceName': "resourceName_example", // String | Filter by the name of the decision requirements definition resource. Exact match.
  'resourceNameLike': "resourceNameLike_example", // String | Filter by names of those decision requirements definition resources that the parameter is a substring of.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A decision requirements definition must have one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include decision requirements definitions which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'includeDecisionRequirementsDefinitionsWithoutTenantId': true // Boolean | Include decision requirements definitions which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
};
apiInstance.getDecisionRequirementsDefinitionsCount(opts, (error, data, response) => {
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
 **decisionRequirementsDefinitionId** | **String**| Filter by decision requirements definition id. | [optional] 
 **decisionRequirementsDefinitionIdIn** | **String**| Filter by decision requirements definition ids. | [optional] 
 **name** | **String**| Filter by decision requirements definition name. | [optional] 
 **nameLike** | **String**| Filter by decision requirements definition names that the parameter is a substring of. | [optional] 
 **deploymentId** | **String**| Filter by the id of the deployment a decision requirement definition belongs to. | [optional] 
 **key** | **String**| Filter by decision requirements definition key, i.e., the id in the DMN 1.3 XML. Exact match. | [optional] 
 **keyLike** | **String**| Filter by decision requirements definition keys that the parameter is a substring of. | [optional] 
 **category** | **String**| Filter by decision requirements definition category. Exact match. | [optional] 
 **categoryLike** | **String**| Filter by decision requirements definition categories that the parameter is a substring of. | [optional] 
 **version** | **Number**| Filter by decision requirements definition version. | [optional] 
 **latestVersion** | **Boolean**| Only include those decision requirements definitions that are latest versions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **resourceName** | **String**| Filter by the name of the decision requirements definition resource. Exact match. | [optional] 
 **resourceNameLike** | **String**| Filter by names of those decision requirements definition resources that the parameter is a substring of. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A decision requirements definition must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include decision requirements definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **includeDecisionRequirementsDefinitionsWithoutTenantId** | **Boolean**| Include decision requirements definitions which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

