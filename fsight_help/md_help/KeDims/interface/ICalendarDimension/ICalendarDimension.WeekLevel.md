# ICalendarDimension.WeekLevel

ICalendarDimension.WeekLevel
-


# ICalendarDimension.WeekLevel


## Синтаксис


WeekLevel: [ICalendarWeekLevel](../ICalendarWeekLevel/ICalendarWeekLevel.htm);


## Описание


Свойство WeekLevel определяет параметры уровня «Недели» в календарном справочнике.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    CalDim: ICalendarDimension;

	    WeekLev: ICalendarWeekLevel;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_CLNDIM;

	    CrInfo.Id := "CALENDAR_DIM";

	    CrInfo.Name := "Календарный справочник";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    CalDim := MObj As ICalendarDimension;

	    CalDim.Hierarchy := 3;

	    CalDim.IncludeWeek := True;

	    CalDim.IncludeDays := True;

	    WeekLev := CalDim.WeekLevel;

	    WeekLev.FirstDayOfWeek := DayOfWeekSet.Sunday;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера, в корневом каталоге репозитория будет создан календарный справочник с идентификатором «CALENDAR_DIM». В иерархии справочника будут присутствовать уровни «Недели» и «Дни», первым днем уровня «Недели» будет воскресение.


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
