# IValidationRevisionComparison

IValidationRevisionComparison
-


# IValidationRevisionComparison


Сборка: Ms;


## Описание


Интерфейс IValidationRevisionComparison
 предназначен для работы с правилом валидации типа «Сравнение
 версий данных».


## Иерархия наследования


           [IValidationDetails](../IValidationDetails/IValidationDetails.htm)


           IValidationRevisionComparison


## Комментарии


Правило сравнивает данные между указанной и текущей ревизией.


Для настройки параметров данного правила приведите значение, возвращаемое
 свойством [IValidationFilter.Details](../IValidationFilter/IValidationFilter.Details.htm),
 к интерфейсу IValidationRevisionComparison.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComparisonType](IValidationRevisionComparison.ComparisonType.htm)
		 Свойство ComparisonType
		 определяет тип изменения значения между ревизиями.


		 ![](../../Property_Image.gif)
		 [ComparisonValue](IValidationRevisionComparison.ComparisonValue.htm)
		 Свойство ComparisonValue
		 возвращает параметры сравнения.


		 ![](../../Property_Image.gif)
		 [Revision](IValidationRevisionComparison.Revision.htm)
		 Свойство Revision определяет
		 ключ сравниваемой ревизии.


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
