# ICalendarDimension.IncludeYears

ICalendarDimension.IncludeYears
-


# ICalendarDimension.IncludeYears


## Синтаксис


IncludeYears: Boolean;


## Описание


Свойство IncludeYears определяет, будет ли присутствовать уровень «Годы» в календарном справочнике.


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

	    CalDim.IncludeYears:=True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в календарном справочнике будет включен уровень «Годы».


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
