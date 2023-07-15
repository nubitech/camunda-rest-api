# CamundaRestApi.VariableQueryParameterDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** | **String** | Comparison operator to be used. &#x60;notLike&#x60; is not supported by all endpoints. | [optional] 
**value** | [**AnyValue**](AnyValue.md) |  | [optional] 

<a name="OperatorEnum"></a>
## Enum: OperatorEnum

* `eq` (value: `"eq"`)
* `neq` (value: `"neq"`)
* `gt` (value: `"gt"`)
* `gteq` (value: `"gteq"`)
* `lt` (value: `"lt"`)
* `lteq` (value: `"lteq"`)
* `like` (value: `"like"`)
* `notLike` (value: `"notLike"`)

