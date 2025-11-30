# ValidationDateOptions

ValidationDateOptions
-


# ValidationDateOptions


## Описание


Перечисление ValidationDateOptions
 содержит способы расчета даты для выполнения валидации.


Перечисление используется следующим свойством:


	- [IValidationDateSettings](../Interface/IValidationDateSettings/IValidationDateSettings.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 SpecificDate. Для расчета
		 валидации используется дата, определяемая свойством [IValidationDateSettings.Date](../Interface/IValidationDateSettings/IValidationDateSettings.Date.htm).


		 1
		 DependsFromData. Для
		 расчета валидации используется дата начала/окончания данных.


		 2
		 RelativeDate. Для расчета
		 валидации используется текущая дата, измененная на количество
		 периодов, определяемых свойством [IValidationDateSettings.Lag](../Interface/IValidationDateSettings/IValidationDateSettings.Lag.htm).


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
