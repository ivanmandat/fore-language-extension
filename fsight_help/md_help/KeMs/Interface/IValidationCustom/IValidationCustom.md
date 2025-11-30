# IValidationCustom

IValidationCustom
-


# IValidationCustom


Сборка: Ms;


## Описание


Интерфейс IValidationCustom
 предназначен для работы с правилом валидации типа «Сравнение
 по выражению».


## Иерархия наследования


           [IValidationDetails](../IValidationDetails/IValidationDetails.htm)


           IValidationCustom


## Комментарии


Для настройки параметров данного правила приведите значение, возвращаемое
 свойством [IValidationFilter.Details](../IValidationFilter/IValidationFilter.Details.htm),
 к интерфейсу IValidationCustom.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalculationType](IValidationCustom.CalculationType.htm)
		 Свойство CalculationType
		 определяет режим расчета правила валидации.


		 ![](../../Property_Image.gif)
		 [Mappings](IValidationCustom.Mappings.htm)
		 Свойство Mappings
		 возвращает коллекцию сопоставлений источников данных.


		 ![](../../Property_Image.gif)
		 [Transform](IValidationCustom.Transform.htm)
		 Свойство Transform
		 возвращает объект, позволяющий настроить параметры расчета
		 правила валидации.


		 ![](../../Property_Image.gif)
		 [UseValidationFilterDates](IValidationCustom.UseValidationFilterDates.htm)
		 Свойство UseValidationFilterDates
		 определяет, каким образом учитывать даты расчёта, заданные для
		 валидации.


## Свойства, унаследованные от [IValidationDetails](../IValidationDetails/IValidationDetails.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Kind](../IValidationDetails/IValidationDetails.Kind.htm)


		 Свойство Kind возвращает
		 тип правила валидации.


		 ![](../../Property_Image.gif)
		 [SelectionFilter](../IValidationDetails/IValidationDetails.SelectionFilter.htm)


		 Свойство SelectionFilter
		 возвращает параметры фильтра, ограничивающего проверяемые ряды.


		 ![](../../Property_Image.gif)
		 [SelectionTargetData](../IValidationDetails/IValidationDetails.SelectionTargetData.htm)


		 Свойство SelectionTargetData
		 возвращает объект, определяющий данные, по которым будет выполняться
		 валидация.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)
 | [Использование
 расширенных возможностей правила валидации «Сравнение по выражению»](../../Samples/KeMs_Sample14.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
