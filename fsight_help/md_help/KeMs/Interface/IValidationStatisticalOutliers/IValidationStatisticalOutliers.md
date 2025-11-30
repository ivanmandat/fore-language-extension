# IValidationStatisticalOutliers

IValidationStatisticalOutliers
-


# IValidationStatisticalOutliers


Сборка: Ms;


## Описание


Интерфейс IValidationStatisticalOutliers
 предназначен для работы с правилом валидации типа «Анализ
 статистических выбросов».


## Иерархия наследования


           [IValidationDetails](../IValidationDetails/IValidationDetails.htm)


           IValidationStatisticalOutliers


## Комментарии


Правило выявляет статистические выбросы в данных.


Для настройки параметров данного правила приведите значение, возвращаемое
 свойством [IValidationFilter.Details](../IValidationFilter/IValidationFilter.Details.htm),
 к интерфейсу IValidationStatisticalOutliers.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [InvertException](IValidationStatisticalOutliers.InvertException.htm)
		 Свойство InvertException
		 определяет, инвертировать ли ошибки валидации.


		 ![](../../Property_Image.gif)
		 [LowerPercentile](IValidationStatisticalOutliers.LowerPercentile.htm)
		 Свойство LowerPercentile
		 определяет вероятность нижней границы выброса.


		 ![](../../Property_Image.gif)
		 [OutliersType](IValidationStatisticalOutliers.OutliersType.htm)
		 Свойство OutliersType
		 определяет область данных для выявления статистических выбросов.


		 ![](../../Property_Image.gif)
		 [UpperPercentile](IValidationStatisticalOutliers.UpperPercentile.htm)
		 Свойство UpperPercentile
		 определяет вероятность верхней границы выброса.


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
