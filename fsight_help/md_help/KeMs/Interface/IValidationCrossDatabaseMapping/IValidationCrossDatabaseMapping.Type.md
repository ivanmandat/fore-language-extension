# IValidationCrossDatabaseMapping.Type

IValidationCrossDatabaseMapping.Type
-


# IValidationCrossDatabaseMapping.Type


## Синтаксис


Type: [ValidationCrossDatabaseMappingType](../../Enums/ValidationCrossDatabaseMappingType.htm);


## Описание


Свойство Type определяет
 тип привязки измерения.


## Комментарии


В зависимости от значения IValidationCrossDatabaseMapping.Type
 требуется использовать различные свойства интерфейса [IValidationCrossDatabaseMapping](IValidationCrossDatabaseMapping.htm):


	- Attributes. Используйте
	 [IValidationCrossDatabaseMapping.TargetSelectionMapping](IValidationCrossDatabaseMapping.TargetSelectionMapping.htm),
	 [IValidationCrossDatabaseMapping.TargetDim](IValidationCrossDatabaseMapping.TargetDim.htm)
	 и [IValidationCrossDatabaseMapping.ComparatorSelectionMapping](IValidationCrossDatabaseMapping.ComparatorSelectionMapping.htm),
	 [IValidationCrossDatabaseMapping.ComparatorDim](IValidationCrossDatabaseMapping.ComparatorDim.htm).
	 Отметка, заданная в свойствах, не важна;


	- TargetConst. Используйте
	 [IValidationCrossDatabaseMapping.TargetSelectionMapping](IValidationCrossDatabaseMapping.TargetSelectionMapping.htm),
	 [IValidationCrossDatabaseMapping.TargetDim](IValidationCrossDatabaseMapping.TargetDim.htm).
	 Отметка, заданная в свойстве [IValidationCrossDatabaseMapping.TargetSelectionMapping](IValidationCrossDatabaseMapping.TargetSelectionMapping.htm),
	 должна содержать только один элемент;


	- ComparatorConst. Используйте
	 [IValidationCrossDatabaseMapping.ComparatorSelectionMapping](IValidationCrossDatabaseMapping.ComparatorSelectionMapping.htm),
	 [IValidationCrossDatabaseMapping.ComparatorDim](IValidationCrossDatabaseMapping.ComparatorDim.htm).
	 Отметка, заданная в свойстве [IValidationCrossDatabaseMapping.ComparatorSelectionMapping](IValidationCrossDatabaseMapping.ComparatorSelectionMapping.htm),
	 должна содержать только один элемент.


## Пример


Использование свойства приведено в примере для [IValidationCrossDatabase.Mappings](../IValidationCrossDatabase/IValidationCrossDatabase.Mappings.htm).


См. также:


[IValidationCrossDatabaseMapping](IValidationCrossDatabaseMapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
