# CamundaRestApi.DeploymentApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeployment**](DeploymentApi.md#createDeployment) | **POST** /deployment/create | Create
[**deleteDeployment**](DeploymentApi.md#deleteDeployment) | **DELETE** /deployment/{id} | Delete
[**getDeployment**](DeploymentApi.md#getDeployment) | **GET** /deployment/{id} | Get
[**getDeploymentResource**](DeploymentApi.md#getDeploymentResource) | **GET** /deployment/{id}/resources/{resourceId} | Get Resource
[**getDeploymentResourceData**](DeploymentApi.md#getDeploymentResourceData) | **GET** /deployment/{id}/resources/{resourceId}/data | Get Resource (Binary)
[**getDeploymentResources**](DeploymentApi.md#getDeploymentResources) | **GET** /deployment/{id}/resources | Get Resources
[**getDeployments**](DeploymentApi.md#getDeployments) | **GET** /deployment | Get List
[**getDeploymentsCount**](DeploymentApi.md#getDeploymentsCount) | **GET** /deployment/count | Get List Count
[**getRegisteredDeployments**](DeploymentApi.md#getRegisteredDeployments) | **GET** /deployment/registered | Get Registered Deployments
[**redeploy**](DeploymentApi.md#redeploy) | **POST** /deployment/{id}/redeploy | Redeploy

<a name="createDeployment"></a>
# **createDeployment**
> DeploymentWithDefinitionsDto createDeployment(opts)

Create

Creates a deployment.  **Security Consideration**  Deployments can contain custom code in form of scripts or EL expressions to customize process behavior. This may be abused for remote execution of arbitrary code.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DeploymentApi();
let opts = { 
  'tenantId': "tenantId_example", // String | 
  'deploymentSource': "deploymentSource_example", // String | 
  'deployChangedOnly': true, // Boolean | 
  'enableDuplicateFiltering': true, // Boolean | 
  'deploymentName': "deploymentName_example", // String | 
  'deploymentActivationTime': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'data': "data_example" // Blob | 
};
apiInstance.createDeployment(opts, (error, data, response) => {
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
 **tenantId** | **String**|  | [optional] 
 **deploymentSource** | **String**|  | [optional] 
 **deployChangedOnly** | **Boolean**|  | [optional] 
 **enableDuplicateFiltering** | **Boolean**|  | [optional] 
 **deploymentName** | **String**|  | [optional] 
 **deploymentActivationTime** | **Date**|  | [optional] 
 **data** | **Blob**|  | [optional] 

### Return type

[**DeploymentWithDefinitionsDto**](DeploymentWithDefinitionsDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="deleteDeployment"></a>
# **deleteDeployment**
> deleteDeployment(id, opts)

Delete

Deletes a deployment by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DeploymentApi();
let id = "id_example"; // String | The id of the deployment to be deleted.
let opts = { 
  'cascade': false, // Boolean | `true`, if all process instances, historic process instances and jobs for this deployment should be deleted.
  'skipCustomListeners': false, // Boolean | `true`, if only the built-in ExecutionListeners should be notified with the end event.
  'skipIoMappings': false // Boolean | `true`, if all input/output mappings should not be invoked.
};
apiInstance.deleteDeployment(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the deployment to be deleted. | 
 **cascade** | **Boolean**| &#x60;true&#x60;, if all process instances, historic process instances and jobs for this deployment should be deleted. | [optional] [default to false]
 **skipCustomListeners** | **Boolean**| &#x60;true&#x60;, if only the built-in ExecutionListeners should be notified with the end event. | [optional] [default to false]
 **skipIoMappings** | **Boolean**| &#x60;true&#x60;, if all input/output mappings should not be invoked. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeployment"></a>
# **getDeployment**
> DeploymentDto getDeployment(id)

Get

Retrieves a deployment by id, according to the &#x60;Deployment&#x60; interface of the engine.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DeploymentApi();
let id = "id_example"; // String | The id of the deployment.

apiInstance.getDeployment(id, (error, data, response) => {
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
 **id** | **String**| The id of the deployment. | 

### Return type

[**DeploymentDto**](DeploymentDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeploymentResource"></a>
# **getDeploymentResource**
> DeploymentResourceDto getDeploymentResource(id, resourceId)

Get Resource

Retrieves a deployment resource by resource id for the given deployment.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DeploymentApi();
let id = "id_example"; // String | The id of the deployment
let resourceId = "resourceId_example"; // String | The id of the deployment resource

apiInstance.getDeploymentResource(id, resourceId, (error, data, response) => {
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
 **id** | **String**| The id of the deployment | 
 **resourceId** | **String**| The id of the deployment resource | 

### Return type

[**DeploymentResourceDto**](DeploymentResourceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeploymentResourceData"></a>
# **getDeploymentResourceData**
> &#x27;Blob&#x27; getDeploymentResourceData(id, resourceId)

Get Resource (Binary)

Retrieves the binary content of a deployment resource for the given deployment by id.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DeploymentApi();
let id = "id_example"; // String | The id of the deployment.
let resourceId = "resourceId_example"; // String | The id of the deployment resource.

apiInstance.getDeploymentResourceData(id, resourceId, (error, data, response) => {
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
 **id** | **String**| The id of the deployment. | 
 **resourceId** | **String**| The id of the deployment resource. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, */*, application/json

<a name="getDeploymentResources"></a>
# **getDeploymentResources**
> [DeploymentResourceDto] getDeploymentResources(id)

Get Resources

Retrieves all deployment resources of a given deployment.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DeploymentApi();
let id = "id_example"; // String | The id of the deployment to retrieve the deployment resources for.

apiInstance.getDeploymentResources(id, (error, data, response) => {
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
 **id** | **String**| The id of the deployment to retrieve the deployment resources for. | 

### Return type

[**[DeploymentResourceDto]**](DeploymentResourceDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeployments"></a>
# **getDeployments**
> [DeploymentDto] getDeployments(opts)

Get List

Queries for deployments that fulfill given parameters. Parameters may be the properties of deployments, such as the id or name or a range of the deployment time. The size of the result set can be retrieved by using the [Get Deployment count](https://docs.camunda.org/manual/develop/reference/rest/deployment/get-query-count/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DeploymentApi();
let opts = { 
  'id': "id_example", // String | Filter by deployment id
  'name': "name_example", // String | Filter by the deployment name. Exact match.
  'nameLike': "nameLike_example", // String | Filter by the deployment name that the parameter is a substring of. The parameter can include the wildcard `%` to express like-strategy such as: starts with (`%`name), ends with (name`%`) or contains (`%`name`%`).
  'source': "source_example", // String | Filter by the deployment source.
  'withoutSource': false, // Boolean | Filter by the deployment source whereby source is equal to `null`.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A deployment must have one of the given tenant ids.
  'withoutTenantId': false, // Boolean | Only include deployments which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'includeDeploymentsWithoutTenantId': false, // Boolean | Include deployments which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
  'after': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to all deployments after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'before': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to all deployments before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getDeployments(opts, (error, data, response) => {
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
 **id** | **String**| Filter by deployment id | [optional] 
 **name** | **String**| Filter by the deployment name. Exact match. | [optional] 
 **nameLike** | **String**| Filter by the deployment name that the parameter is a substring of. The parameter can include the wildcard &#x60;%&#x60; to express like-strategy such as: starts with (&#x60;%&#x60;name), ends with (name&#x60;%&#x60;) or contains (&#x60;%&#x60;name&#x60;%&#x60;). | [optional] 
 **source** | **String**| Filter by the deployment source. | [optional] 
 **withoutSource** | **Boolean**| Filter by the deployment source whereby source is equal to &#x60;null&#x60;. | [optional] [default to false]
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A deployment must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include deployments which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **includeDeploymentsWithoutTenantId** | **Boolean**| Include deployments which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **after** | **Date**| Restricts to all deployments after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **before** | **Date**| Restricts to all deployments before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[DeploymentDto]**](DeploymentDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeploymentsCount"></a>
# **getDeploymentsCount**
> CountResultDto getDeploymentsCount(opts)

Get List Count

Queries for the number of deployments that fulfill given parameters. Takes the same parameters as the [Get Deployments](https://docs.camunda.org/manual/develop/reference/rest/deployment/get-query/) method.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DeploymentApi();
let opts = { 
  'id': "id_example", // String | Filter by deployment id
  'name': "name_example", // String | Filter by the deployment name. Exact match.
  'nameLike': "nameLike_example", // String | Filter by the deployment name that the parameter is a substring of. The parameter can include the wildcard `%` to express like-strategy such as: starts with (`%`name), ends with (name`%`) or contains (`%`name`%`).
  'source': "source_example", // String | Filter by the deployment source.
  'withoutSource': false, // Boolean | Filter by the deployment source whereby source is equal to `null`.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A deployment must have one of the given tenant ids.
  'withoutTenantId': false, // Boolean | Only include deployments which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'includeDeploymentsWithoutTenantId': false, // Boolean | Include deployments which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
  'after': new Date("2013-10-20T19:20:30+01:00"), // Date | Restricts to all deployments after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'before': new Date("2013-10-20T19:20:30+01:00") // Date | Restricts to all deployments before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
};
apiInstance.getDeploymentsCount(opts, (error, data, response) => {
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
 **id** | **String**| Filter by deployment id | [optional] 
 **name** | **String**| Filter by the deployment name. Exact match. | [optional] 
 **nameLike** | **String**| Filter by the deployment name that the parameter is a substring of. The parameter can include the wildcard &#x60;%&#x60; to express like-strategy such as: starts with (&#x60;%&#x60;name), ends with (name&#x60;%&#x60;) or contains (&#x60;%&#x60;name&#x60;%&#x60;). | [optional] 
 **source** | **String**| Filter by the deployment source. | [optional] 
 **withoutSource** | **Boolean**| Filter by the deployment source whereby source is equal to &#x60;null&#x60;. | [optional] [default to false]
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A deployment must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include deployments which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **includeDeploymentsWithoutTenantId** | **Boolean**| Include deployments which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] [default to false]
 **after** | **Date**| Restricts to all deployments after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **before** | **Date**| Restricts to all deployments before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRegisteredDeployments"></a>
# **getRegisteredDeployments**
> [&#x27;String&#x27;] getRegisteredDeployments()

Get Registered Deployments

Queries the registered deployment IDs for the current application.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DeploymentApi();
apiInstance.getRegisteredDeployments((error, data, response) => {
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

**[&#x27;String&#x27;]**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="redeploy"></a>
# **redeploy**
> DeploymentWithDefinitionsDto redeploy(id, opts)

Redeploy

Re-deploys an existing deployment.  The deployment resources to re-deploy can be restricted by using the properties &#x60;resourceIds&#x60; or &#x60;resourceNames&#x60;. If no deployment resources to re-deploy are passed then all existing resources of the given deployment are re-deployed.  **Warning**: Deployments can contain custom code in form of scripts or EL expressions to customize process behavior. This may be abused for remote execution of arbitrary code. See the section on [security considerations for custom code](https://docs.camunda.org/manual/develop/user-guide/process-engine/securing-custom-code/) in the user guide for details.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.DeploymentApi();
let id = "id_example"; // String | The id of the deployment to re-deploy.
let opts = { 
  'body': new CamundaRestApi.RedeploymentDto() // RedeploymentDto | 
};
apiInstance.redeploy(id, opts, (error, data, response) => {
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
 **id** | **String**| The id of the deployment to re-deploy. | 
 **body** | [**RedeploymentDto**](RedeploymentDto.md)|  | [optional] 

### Return type

[**DeploymentWithDefinitionsDto**](DeploymentWithDefinitionsDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

