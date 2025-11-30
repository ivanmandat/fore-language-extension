# IMsModelPeriod.ForecastStartOffset

IMsModelPeriod.ForecastStartOffset
-


# IMsModelPeriod.ForecastStartOffset


## Синтаксис


ForecastStartOffset: Integer;


## Описание


Свойство ForecastStartOffset
 определяет число периодов, на которое сдвигается дата начала периода прогнозирования.


## Комментарии


ForecastStartOffset учитывается,
 если выполняется одно из условий:


	- [IMsModelPeriod.AutoPeriod](IMsModelPeriod.AutoPeriod.htm)
	 использует значение, требующее задания дополнительного числа периодов,
	 например, MsAutoPeriodOptions.ForecastStartAsNow;


	- задано свойство [IMsModelPeriod.ForecastStartDate](IMsModelPeriod.ForecastStartDate.htm).


## Пример


Использование свойства приведено в примере для [IMsModelPeriod.AutoPeriod](IMsModelPeriod.AutoPeriod.htm).


См. также:


[IMsModelPeriod](IMsModelPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
