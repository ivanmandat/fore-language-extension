# IFormulaTransformModel.IdentificationEndOffset

IFormulaTransformModel.IdentificationEndOffset
-


# IFormulaTransformModel.IdentificationEndOffset


## Синтаксис


IdentificationEndOffset: Integer;


## Описание


Свойство IdentificationEndOffset определяет число периодов, на которое сдвигается дата окончания периода идентификации.


## Комментарии


IdentificationEndOffset учитывается, если [IFormulaTransformModel.AutoPeriod](IFormulaTransformModel.AutoPeriod.htm) использует одно из следующих значений перечисления [TransformModelAutoPeriodOptions](../../Enums/TransformModelAutoPeriodOptions.htm):


-
IdentEndByFact;


-
IdentEndAsNow;


-
IdentEndByFactStart;


-
IdentEndByIdentStart;


-
IdentByFact;


-
AllByFact.


## Пример


Использование свойства приведено в примере для [IFormulaTransformModel.AutoPeriod](IFormulaTransformModel.AutoPeriod.htm).


См. также:


[IFormulaTransformModel](IFormulaTransformModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
