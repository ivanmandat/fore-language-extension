# DeleteDictionaryElementOptions

DeleteDictionaryElementOptions
-


# DeleteDictionaryElementOptions


## Описание


Перечисление DeleteDictionaryElementOptions
 содержит опции удаления элементов справочника НСИ.


Используется следующим методом:


	- [IRdsDictionaryElement.DeleteRaw](../Interface/IRdsDictionaryElement/IRdsDictionaryElement.DeleteRaw.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Default_. При удалении
		 поведение по умолчанию. Перед удалением осуществляется проверка
		 наличия зависимостей от элемента. Если зависимости существуют,
		 то генерируется исключительная ситуация.


		 1
		 IgnoreDependents. Не
		 проверять зависимости. При удалении элемента зависимости не проверяются
		 и не удаляются.


		 2
		 ForceDeleteDependents.
		 Принудительно удалять зависимости. При удалении элемента также
		 будут удалены все зависимости от него.


См. также:


[Перечисления
 сборки Rds](KeRds_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
