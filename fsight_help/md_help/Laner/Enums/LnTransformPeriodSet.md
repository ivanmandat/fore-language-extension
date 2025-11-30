# LnTransformPeriodSet

LnTransformPeriodSet
-


# LnTransformPeriodSet


## Описание


Перечисление LnTransformPeriodSet
 содержит параметры периода расчета.


Данное перечисление используется следующим свойством:


	- [ILanerTransformPeriod.PeriodSet](../Interface/ILanerTransformPeriod/ILanerTransformPeriod.PeriodSet.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Параметры периода
		 расчета не заданы.


		 1
		 StartDate. Начало идентификации
		 данных.


		 2
		 ForecastStartDate.
		 Начало прогнозирования данных.


		 2
		 IdentificationEndDate.
		 Окончание идентификации данных.


		 4
		 EndDate. Окончание
		 прогнозирования данных.


		 8
		 ForecastStartDate.
		 Начало прогнозирования данных


		 15
		 All. Начало, окончание
		 идентификации данных и начало, окончание прогнозирования данных.


## Комментарии


Для применения нескольких параметров периода расчета указывайте необходимые
 значения перечисления LnTransformPeriodSet
 через «Or». Значение All
 равносильно указанию значений StartDate,
 IdentificationEndDate, ForecastStartDate
 и EndDate через «Or».


Элемент IdentificationEndDate
 рекомендуется использовать вместо ForecastStartDate.
 Одновременное использование IdentificationEndDate
 и ForecastStartDate в [ILanerTransformPeriod.PeriodSet](../Interface/ILanerTransformPeriod/ILanerTransformPeriod.PeriodSet.htm)
 возможно только при условии, что одна из дат [ILanerTransformPeriod.IdentificationEndDate](../Interface/ILanerTransformPeriod/ILanerTransformPeriod.IdentificationEndDate.htm)
 или [ILanerTransformPeriod.ForecastStartDate](../Interface/ILanerTransformPeriod/ILanerTransformPeriod.ForecastStartDate.htm)
 будет пустая (одновременное использование данных свойств не допускается).


См. также:


[Перечисления
 сборки Laner](Laner_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
