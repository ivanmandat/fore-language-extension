# IValidationRevisionMetadataComparison

IValidationRevisionMetadataComparison
-


# IValidationRevisionMetadataComparison


Сборка: Ms;


## Описание


Интерфейс IValidationRevisionMetadataComparison
 предназначен для работы с правилом валидации типа «Сравнение
 версий метаданных».


## Иерархия наследования


           [IValidationDetails](../IValidationDetails/IValidationDetails.htm)


           IValidationRevisionMetadataComparison


## Комментарии


Правило сравнивает метаданные между указанной и текущей ревизией.


Для настройки параметров данного правила приведите значение, возвращаемое
 свойством [IValidationFilter.Details](../IValidationFilter/IValidationFilter.Details.htm),
 к интерфейсу IValidationRevisionMetadataComparison.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](IValidationRevisionMetadataComparison.Attributes.htm)
		 Свойство Attributes
		 возвращает атрибуты базы данных временных рядов, по которым будет
		 происходить сравнение.


		 ![](../../Property_Image.gif)
		 [CalculationType](IValidationRevisionMetadataComparison.CalculationType.htm)
		 Свойство CalculationType
		 определяет способ расчета правила валидации: на уровне ряда или
		 на уровне наблюдений ряда.


		 ![](../../Property_Image.gif)
		 [ComparisonType](IValidationRevisionMetadataComparison.ComparisonType.htm)
		 Свойство ComparisonType
		 определяет тип сравнения метаданных.


		 ![](../../Property_Image.gif)
		 [Revision](IValidationRevisionMetadataComparison.Revision.htm)
		 Свойство Revision определяет
		 ключ ревизии, с которой сравниваются актуальные метаданные.


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
