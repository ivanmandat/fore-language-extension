# IFormulaTransformModel.ForecastEndOffset

IFormulaTransformModel.ForecastEndOffset
-


# IFormulaTransformModel.ForecastEndOffset


## Синтаксис


ForecastEndOffset: Integer;


## Описание


Свойство ForecastEndOffset определяет
 число периодов, на которое сдвигается дата окончания периода прогнозирования.


## Комментарии


IdentificationStartOffset учитывается,
 если [IFormulaTransformModel.AutoPeriod](IFormulaTransformModel.AutoPeriod.htm)
 использует одно из следующих значений перечисления [TransformModelAutoPeriodOptions](../../Enums/TransformModelAutoPeriodOptions.htm):


	- ForecastEndByIdentEnd;


	- ForecastEndByFact;


	- ForecastEndAsNow;


	- AllByFact.


## Пример


Использование свойства приведено в примере для [IFormulaTransformModel.AutoPeriod](IFormulaTransformModel.AutoPeriod.htm).


См. также:


[IFormulaTransformModel](IFormulaTransformModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
