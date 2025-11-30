# ValidationCrossDatabaseMappingType

ValidationCrossDatabaseMappingType
-


# ValidationCrossDatabaseMappingType


## Описание


Перечисление ValidationCrossDatabaseMappingType
 содержит виды привязки измерений сравниваемых источников данных.


Используется следующим свойством:


	- [IValidationCrossDatabaseMapping.Type](../Interface/IValidationCrossDatabaseMapping/IValidationCrossDatabaseMapping.Type.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Attributes. Связываются
		 два измерения.


		 1
		 TargetConst. Фиксируется
		 измерение в сравниваемом источнике данных.


		 2
		 ComparatorConst. Фиксируется
		 измерение в источнике данных, с которым выполняется сравнение.


## Комментарии


Привязка измерений сравниваемых источников данных используется в валидации
 «Сравнение с базой данных временных
 рядов». В качестве источников могут использоваться базы данных
 временных рядов и стандартные кубы, содержащие календарное измерение.


В зависимости от значения ValidationCrossDatabaseMappingType
 требуется использовать различные свойства интерфейса [IValidationCrossDatabaseMapping](../Interface/IValidationCrossDatabaseMapping/IValidationCrossDatabaseMapping.htm):


	- Attributes. Используйте
	 [IValidationCrossDatabaseMapping.TargetSelectionMapping](../Interface/IValidationCrossDatabaseMapping/IValidationCrossDatabaseMapping.TargetSelectionMapping.htm),
	 [IValidationCrossDatabaseMapping.TargetDim](../Interface/IValidationCrossDatabaseMapping/IValidationCrossDatabaseMapping.TargetDim.htm)
	 и [IValidationCrossDatabaseMapping.ComparatorSelectionMapping](../Interface/IValidationCrossDatabaseMapping/IValidationCrossDatabaseMapping.ComparatorSelectionMapping.htm),
	 [IValidationCrossDatabaseMapping.ComparatorDim](../Interface/IValidationCrossDatabaseMapping/IValidationCrossDatabaseMapping.ComparatorDim.htm).
	 Отметка, заданная в свойствах, не важна;


	- TargetConst. Используйте
	 [IValidationCrossDatabaseMapping.TargetSelectionMapping](../Interface/IValidationCrossDatabaseMapping/IValidationCrossDatabaseMapping.TargetSelectionMapping.htm),
	 [IValidationCrossDatabaseMapping.TargetDim](../Interface/IValidationCrossDatabaseMapping/IValidationCrossDatabaseMapping.TargetDim.htm).
	 Отметка, заданная в свойстве [IValidationCrossDatabaseMapping.TargetSelectionMapping](../Interface/IValidationCrossDatabaseMapping/IValidationCrossDatabaseMapping.TargetSelectionMapping.htm),
	 должна содержать только один элемент;


	- ComparatorConst. Используйте
	 [IValidationCrossDatabaseMapping.ComparatorSelectionMapping](../Interface/IValidationCrossDatabaseMapping/IValidationCrossDatabaseMapping.ComparatorSelectionMapping.htm),
	 [IValidationCrossDatabaseMapping.ComparatorDim](../Interface/IValidationCrossDatabaseMapping/IValidationCrossDatabaseMapping.ComparatorDim.htm).
	 Отметка, заданная в свойстве [IValidationCrossDatabaseMapping.ComparatorSelectionMapping](../Interface/IValidationCrossDatabaseMapping/IValidationCrossDatabaseMapping.ComparatorSelectionMapping.htm),
	 должна содержать только один элемент.


См. также:


[Перечисления
 сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
