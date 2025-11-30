# IFormulaTransformModel.ForecastStartDateOffset

IFormulaTransformModel.ForecastStartDateOffset
-


# IFormulaTransformModel.ForecastStartDateOffset


## Синтаксис


ForecastStartDateOffset: Integer;


## Описание


Свойство ForecastStartDateOffset
 определяет число периодов, на которое сдвигается дата начала периода прогнозирования.


## Комментарии


ForecastStartDateOffset учитывается,
 если [IFormulaTransformModel.AutoPeriod](IFormulaTransformModel.AutoPeriod.htm)
 использует одно из следующих значений перечисления [TransformModelAutoPeriodOptions](../../Enums/TransformModelAutoPeriodOptions.htm):


	- ForecastStartAsNow;


	- ForecastStartByForecastEnd;


	- ForecastStartByIdentEnd;


	- ForecastStartbyIdentStart.


## Пример


Использование свойства приведено в примере для [IFormulaTransformModel.AutoPeriod](IFormulaTransformModel.AutoPeriod.htm).


См. также:


[IFormulaTransformModel](IFormulaTransformModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
