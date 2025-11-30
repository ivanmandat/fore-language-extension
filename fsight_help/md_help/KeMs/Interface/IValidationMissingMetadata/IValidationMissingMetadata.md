# IValidationMissingMetadata

IValidationMissingMetadata
-


# IValidationMissingMetadata


Сборка: Ms;


## Описание


Интерфейс IValidationMissingMetadata
 предназначен для работы с правилом валидации типа «Пропуски
 в метаданных».


## Иерархия наследования


           [IValidationDetails](../IValidationDetails/IValidationDetails.htm)


           IValidationMissingMetadata


## Комментарии


Для настройки параметров данного правила приведите значение, возвращаемое
 свойством [IValidationFilter.Details](../IValidationFilter/IValidationFilter.Details.htm),
 к интерфейсу IValidationMissingMetadata.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](IValidationMissingMetadata.Attributes.htm)
		 Свойство Attributes
		 возвращает коллекцию атрибутов, отсутствие значений которых будет
		 проверять валидация.


		 ![](../../Property_Image.gif)
		 [CalculationType](IValidationMissingMetadata.CalculationType.htm)
		 Свойство CalculationType
		 определяет тип метаданных, в которых валидация выявляет
		 отсутствие значений.


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
