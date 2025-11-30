# IMsModelPeriod.ForecastEndOffset

IMsModelPeriod.ForecastEndOffset
-


# IMsModelPeriod.ForecastEndOffset


## Синтаксис


ForecastEndOffset: Integer;


## Описание


Свойство ForecastEndOffset определяет
 число периодов, на которое сдвигается дата окончания периода прогнозирования.


## Комментарии


ForecastEndOffset учитывается,
 если выполняется одно из условий:


	- [IMsModelPeriod.AutoPeriod](IMsModelPeriod.AutoPeriod.htm)
	 использует значение, требующее задания дополнительного числа периодов,
	 например, MsAutoPeriodOptions.ForecastEndAsNow;


	- задано свойство [IMsModelPeriod.ForecastEndDate](IMsModelPeriod.ForecastEndDate.htm).


## Пример


Использование свойства приведено в примере для [IMsModelPeriod.AutoPeriod](IMsModelPeriod.AutoPeriod.htm).


См. также:


[IMsModelPeriod](IMsModelPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
