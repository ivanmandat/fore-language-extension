# ICalendarDimension.IncludeHalfYears

ICalendarDimension.IncludeHalfYears
-


# ICalendarDimension.IncludeHalfYears


## Синтаксис


IncludeHalfYears: Boolean;


## Описание


Свойство IncludeHalfYears определяет, будет ли присутствовать уровень «Полугодия» в календарном справочнике.


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

	    CalDim.IncludeHalfYears:=True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в календарном справочнике будет включен уровень «Полугодия».


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
