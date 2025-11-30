# IValidationCrossFrequency

IValidationCrossFrequency
-


# IValidationCrossFrequency


Сборка: Ms;


## Описание


Интерфейс IValidationCrossFrequency
 предназначен для работы с правилом валидации типа «Сравнение
 уровней динамики».


## Иерархия наследования


           [IValidationDetails](../IValidationDetails/IValidationDetails.htm)


           IValidationCrossFrequency


## Комментарии


Данное правило валидации сравнивает значения указанных календарных уровней.


Для настройки параметров данного правила приведите значение, возвращаемое
 свойством [IValidationFilter.Details](../IValidationFilter/IValidationFilter.Details.htm),
 к интерфейсу IValidationCrossFrequency.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AggregationType](IValidationCrossFrequency.AggregationType.htm)
		 Свойство AggregationType
		 определяет тип агрегации данных.


		 ![](../../Property_Image.gif)
		 [ComparisonValue](IValidationCrossFrequency.ComparisonValue.htm)
		 Свойство ComparisonValue
		 возвращает параметры сравнения.


		 ![](../../Property_Image.gif)
		 [FromLevel](IValidationCrossFrequency.FromLevel.htm)
		 Свойство FromLevel
		 определяет сравниваемый уровень.


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


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
