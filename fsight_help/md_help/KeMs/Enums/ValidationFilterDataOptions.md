# ValidationFilterDataOptions

ValidationFilterDataOptions
-


# ValidationFilterDataOptions


## Описание


Перечисление ValidationFilterDataOptions
 используется для определения способа учёта дат при расчёте валидации.


Используется следующим свойством:


	- [IValidationCustom.UseValidationFilterDates](../Interface/IValidationCustom/IValidationCustom.UseValidationFilterDates.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Даты валидации
		 не учитываются.


		 1
		 PeriodByValidation.
		 Даты валидации учитываются только для периода расчёта.


		 2
		 OutputPeriodByValidation.
		 Даты валидации учитываются только для периода выгрузки данных.


		 3
		 AllPeriodByValidation.
		 Даты валидации учитываются для периодов расчёта и выгрузки данных.


## Комментарии


Для определения дат расчёта валидации используйте свойства: [IValidationFilter.StartDateSettings](../Interface/IValidationFilter/IValidationFilter.StartDateSettings.htm)
 и [IValidationFilter.EndDateSettings](../Interface/IValidationFilter/IValidationFilter.EndDateSettings.htm).


Если периоды расчёта и выгрузки установлены как AllbyOwner,
 то при расчёте валидации:


	- на БД временных рядов.
	 Используются даты БД временных рядов;


	- на экспресс-отчёте.
	 Используются даты, заданные свойствами IEaxDataAreaSlice.ExtendedPeriodStart
	 и IEaxDataAreaSlice.ExtendedPeriodEnd.
	 Если данные свойства не заданы, то используются даты, полученные из
	 отметки измерений экспресс-отчёта;


	- на рабочей книге. Используются
	 даты, заданные свойствами ILanerContext.DataLoadStartDate
	 и ILanerContext.DataLoadEndDate.


См. также:


[Перечисления
 сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
