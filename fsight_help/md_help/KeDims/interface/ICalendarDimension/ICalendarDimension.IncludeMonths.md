# ICalendarDimension.IncludeMonths

ICalendarDimension.IncludeMonths
-


# ICalendarDimension.IncludeMonths


## Синтаксис


IncludeMonths: Boolean;


## Описание


Свойство IncludeMonths определяет, будет ли присутствовать уровень «Месяцы» в календарном справочнике.


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

	    CalDim.IncludeMonths:=True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в календарном справочнике будет включен уровень «Месяцы».


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
