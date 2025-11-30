# ICalendarDimension.ShiftForward

ICalendarDimension.ShiftForward
-


# ICalendarDimension.ShiftForward


## Синтаксис


ShiftForward: Boolean;


## Описание


Свойство ShiftForward определяет состояние опции «Сдвиг последнего уровня на точку вперед».


## Пример


Для выполнения примера предполагается наличие в репозитории календарного справочника с идентификатором "CALENDAR_DIM".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    CalDim: ICalendarDimension;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("CALENDAR_DIM").Edit;

	    CalDim:=MObj As ICalendarDimension;

	    CalDim.ShiftForward:=True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет включена опция «Сдвиг последнего уровня на точку вперед» календарного справочника.


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
