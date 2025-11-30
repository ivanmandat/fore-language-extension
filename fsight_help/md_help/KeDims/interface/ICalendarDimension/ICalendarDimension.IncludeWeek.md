# ICalendarDimension.IncludeWeek

ICalendarDimension.IncludeWeek
-


# ICalendarDimension.IncludeWeek


## Синтаксис


IncludeWeek: Boolean;


## Описание


Свойство IncludeWeek определяет, будет ли присутствовать уровень «Недели» в календарном справочнике.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    CalDim: ICalendarDimension;

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

	    MObj.Save;

	End Sub UserProc;


После выполнения примера, в корневом каталоге репозитория будет создан календарный справочник с идентификатором «CALENDAR_DIM». В данном справочнике будет присутствовать только уровень «Недели».


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
