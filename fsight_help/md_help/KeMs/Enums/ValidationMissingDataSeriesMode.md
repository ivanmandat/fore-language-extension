# ValidationMissingDataSeriesMode

ValidationMissingDataSeriesMode
-


# ValidationMissingDataSeriesMode


## Описание


Перечисление ValidationMissingDataSeriesMode используется для определения режима выгрузки исключений, выявленных правилом валидации «Пропуски в данных».


Используется свойством:


-
[IValidationMissingData.SeriesMode](../Interface/IValidationMissingData/IValidationMissingData.SeriesMode.htm).


## Допустимые значения


 Значение
 Краткое описание


 0
 None. Исключения выгружаются на каждую выявленную точку ряда данных.


 1
 Range. Исключение выгружается на ряд, если в заданном диапазоне дат нет данных.


 2
 Serie. Исключение выгружается на ряд, если весь ряд не содержит данных.


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
