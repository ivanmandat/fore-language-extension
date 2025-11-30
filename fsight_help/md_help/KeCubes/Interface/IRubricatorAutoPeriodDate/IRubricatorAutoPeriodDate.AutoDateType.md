# IRubricatorAutoPeriodDate.AutoDateType

IRubricatorAutoPeriodDate.AutoDateType
-


# IRubricatorAutoPeriodDate.AutoDateType


## Синтаксис


AutoDateType: [RubricatorAutoDateType](../../Enums/RubricatorAutoDateType.htm);


## Описание


Свойство AutoDateType определяет способ задания даты.


## Комментарии


Если требуется указать абсолютную величину, т.е. AutoDateType равняется Exact, то для задания даты используйте свойство [IRubricatorAutoPeriodDate.ExactDate](IRubricatorAutoPeriodDate.ExactDate.htm). Если требуется указать относительную величину, т.е. AutoDateType равняется или Now, или DateStart, или DateEnd, то для задания даты используйте свойство [IRubricatorAutoPeriodDate.Offset](IRubricatorAutoPeriodDate.Offset.htm).


## Пример


Использование свойства приведено в примере для [IExportRequestParams.AutoPeriod](../IExportRequestParams/IExportRequestParams.AutoPeriod.htm).


См. также:


[IRubricatorAutoPeriodDate](IRubricatorAutoPeriodDate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
