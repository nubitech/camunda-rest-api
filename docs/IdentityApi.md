# CamundaRestApi.IdentityApi

All URIs are relative to *http://{host}:{port}/{contextPath}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkPassword**](IdentityApi.md#checkPassword) | **POST** /identity/password-policy | Validate Password
[**getGroupInfo**](IdentityApi.md#getGroupInfo) | **GET** /identity/groups | Get a User&#x27;s Groups
[**getPasswordPolicy**](IdentityApi.md#getPasswordPolicy) | **GET** /identity/password-policy | Get Password Policy
[**verifyUser**](IdentityApi.md#verifyUser) | **POST** /identity/verify | Verify User

<a name="checkPassword"></a>
# **checkPassword**
> CheckPasswordPolicyResultDto checkPassword(opts)

Validate Password

A password policy consists of a list of rules that new passwords must follow to be policy compliant. A password can be checked for compliancy via this end point. More information on password policies in Camunda can be found in the password policy [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/password-policy/) and in the [security instructions](https://docs.camunda.org/manual/develop/user-guide/security/).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.IdentityApi();
let opts = { 
  'body': new CamundaRestApi.PasswordPolicyRequestDto() // PasswordPolicyRequestDto | 
};
apiInstance.checkPassword(opts, (error, data, response) => {
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
 **body** | [**PasswordPolicyRequestDto**](PasswordPolicyRequestDto.md)|  | [optional] 

### Return type

[**CheckPasswordPolicyResultDto**](CheckPasswordPolicyResultDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroupInfo"></a>
# **getGroupInfo**
> IdentityServiceGroupInfoDto getGroupInfo(userId)

Get a User&#x27;s Groups

Gets the groups of a user by id and includes all users that share a group with the given user.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.IdentityApi();
let userId = "userId_example"; // String | The id of the user to get the groups for.

apiInstance.getGroupInfo(userId, (error, data, response) => {
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
 **userId** | **String**| The id of the user to get the groups for. | 

### Return type

[**IdentityServiceGroupInfoDto**](IdentityServiceGroupInfoDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPasswordPolicy"></a>
# **getPasswordPolicy**
> PasswordPolicyDto getPasswordPolicy()

Get Password Policy

A password policy consists of a list of rules that new passwords must follow to be policy compliant. This end point returns a JSON representation of the list of policy rules. More information on password policies in Camunda can be found in the password policy [user guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/password-policy/) and in the [security instructions](https://docs.camunda.org/manual/develop/user-guide/security/).

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.IdentityApi();
apiInstance.getPasswordPolicy((error, data, response) => {
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

[**PasswordPolicyDto**](PasswordPolicyDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="verifyUser"></a>
# **verifyUser**
> AuthenticationResult verifyUser(opts)

Verify User

Verifies that user credentials are valid.

### Example
```javascript
import {CamundaRestApi} from 'camunda-rest-api';
let defaultClient = CamundaRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CamundaRestApi.IdentityApi();
let opts = { 
  'body': new CamundaRestApi.BasicUserCredentialsDto() // BasicUserCredentialsDto | 
};
apiInstance.verifyUser(opts, (error, data, response) => {
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
 **body** | [**BasicUserCredentialsDto**](BasicUserCredentialsDto.md)|  | [optional] 

### Return type

[**AuthenticationResult**](AuthenticationResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

