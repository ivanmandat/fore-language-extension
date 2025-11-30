# IValidationCustomMapping.AddBinding

IValidationCustomMapping.AddBinding
-


# IValidationCustomMapping.AddBinding


## Синтаксис


AddBinding(ValidationDim: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);

           ExternalDim:
 [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm)

          ): [IValidationCustomDimensionsBinding](../IValidationCustomDimensionsBinding/IValidationCustomDimensionsBinding.htm);


## Параметры


ValidationDim. Измерение из
 сопоставляемого источника данных, по которому выполняется валидация;


ExternalDim. Измерение из внешнего
 источника данных, по которому выполняется сопоставление.


## Описание


Метод AddBinding добавляет привязку
 измерений для сопоставляемых источников данных.


## Комментарии


Для удаления всех привязок измерений используйте метод [IValidationCustomMapping.Clear](IValidationCustomMapping.Clear.htm).


## Пример


Использование метода приведено в примере для [IValidationCustom.Mappings](../IValidationCustom/IValidationCustom.Mappings.htm).


См. также:


[IValidationCustomMapping](IValidationCustomMapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
