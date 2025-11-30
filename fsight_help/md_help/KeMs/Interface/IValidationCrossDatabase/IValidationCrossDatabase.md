# IValidationCrossDatabase

IValidationCrossDatabase
-


# IValidationCrossDatabase


Сборка: Ms;


## Описание


Интерфейс IValidationCrossDatabase
 предназначен для работы с параметрами правила валидации «Сравнение
 с базой данных временных рядов».


## Иерархия наследования


           [IValidationDetails](../IValidationDetails/IValidationDetails.htm)


           IValidationCrossDatabase


## Комментарии


Для настройки параметров данного правила приведите значение, возвращаемое
 свойством [IValidationFilter.Details](../IValidationFilter/IValidationFilter.Details.htm),
 к интерфейсу IValidationCrossDatabase.


Данное правило валидации также можно использовать для сравнения со стандартным
 кубом, содержащим календарное измерение.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Comparator](IValidationCrossDatabase.Comparator.htm)
		 Свойство Comparator
		 определяет источник данных, с которым будет производиться сравнение.


		 ![](../../Property_Image.gif)
		 [ComparisonType](IValidationCrossDatabase.ComparisonType.htm)
		 Свойство ComparisonType
		 определяет тип сравнения метаданных.


		 ![](../../Property_Image.gif)
		 [ComparisonValue](IValidationCrossDatabase.ComparisonValue.htm)
		 Свойство ComparisonValue
		 возвращает параметры сравнения значения.


		 ![](../../Property_Image.gif)
		 [Mappings](IValidationCrossDatabase.Mappings.htm)
		 Свойство Mappings возвращает
		 коллекцию привязок измерений сравниваемых источников данных.


		 ![](../../Property_Image.gif)
		 [SelectionComparatorData](IValidationCrossDatabase.SelectionComparatorData.htm)
		 Свойство SelectionComparatorData
		 возвращает набор отметок, определяющий данные, с которыми будет
		 производиться сравнение.


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
