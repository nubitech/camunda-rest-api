# CamundaRestApi.MultiFormVariableBinaryDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **Blob** | The binary data to be set. For File variables, this multipart can contain the filename, binary value and MIME type of the file variable to be set Only the filename is mandatory. | [optional] 
**valueType** | **String** | The name of the variable type. Either Bytes for a byte array variable or File for a file variable. | [optional] 

<a name="ValueTypeEnum"></a>
## Enum: ValueTypeEnum

* `bytes` (value: `"Bytes"`)
* `file` (value: `"File"`)

