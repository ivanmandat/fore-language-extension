# IPivotFilterSettings.UseTransformationFilter

IPivotFilterSettings.UseTransformationFilter
-


# IPivotFilterSettings.UseTransformationFilter


## Синтаксис


UseTransformationFilter: Boolean;


## Описание


Свойство UseTransformationFilter
 определяет, будет ли использоваться фильтрация данных по формуле.


## Комментарии


Допустимые значения:


	- True. Фильтрация данных
	 по формуле будет использоваться. Параметры фильтрации задаются в коллекции
	 [IEaxDataAreaSlice.FilterTransformations](KeExpress.chm::/Interface/IEaxDataAreaSlice/IEaxDataAreaSlice.FilterTransformations.htm).


	- False. По умолчанию.
	 Фильтрация данных по формуле использоваться не будет.


Для использования свойства необходимо, чтобы свойство [IPivotFilterSettings.Enabled](IPivotFilterSettings.Enabled.htm)
 принимало значение True.


Если в формуле присутствует параметр, то перед параметром ставится символ
 «:». Например, формула имеет вид: AttributeId
 >= :Parameter, где:


	- AttributeId. Идентификатор
	 атрибута справочника;


	- :ParametrId. Идентификатор
	 параметра отчета.


## Пример


Пример использования приведён в описании свойства [IEaxDataAreaSlice.FilterTransformations](KeExpress.chm::/Interface/IEaxDataAreaSlice/IEaxDataAreaSlice.FilterTransformations.htm).


См. также:


[IPivotFilterSettings](IPivotFilterSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
