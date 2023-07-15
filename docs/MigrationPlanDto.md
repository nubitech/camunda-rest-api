# CamundaRestApi.MigrationPlanDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceProcessDefinitionId** | **String** | The id of the source process definition for the migration. | [optional] 
**targetProcessDefinitionId** | **String** | The id of the target process definition for the migration. | [optional] 
**instructions** | [**[MigrationInstructionDto]**](MigrationInstructionDto.md) | A list of migration instructions which map equal activities. Each migration instruction is a JSON object with the following properties: | [optional] 
**variables** | [**{String: VariableValueDto}**](VariableValueDto.md) | A map of variables which will be set into the process instances&#x27; scope. Each key is a variable name and each value a JSON variable value object. | [optional] 
