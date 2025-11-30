# ICalendarDimInstance.Day

ICalendarDimInstance.Day
-


# ICalendarDimInstance.Day


## Синтаксис


Day(El: Integer): Integer;


## Параметры


El - индекс элемента, соответствующего какому-либо календарному периоду в справочнике (Год, Полугодие и т.д.).


## Описание


Метод Day возвращает индекс элемента, являющегося днем в календарном справочнике. Полученный день является началом календарного периода, которому соответствует элемент El.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Obj: IMetabaseObjectDescriptor;

	    CalClass: CalendarDimInstanceFactory;

	    Dim: IDimInstance;

	    CalInst: ICalendarDimInstance;

	    i: Integer;

	Begin

	    Mb:=MetabaseClass.Active;

	    Obj:=Mb.ItemById("CALENDAR_DIM");

	    Dim:=Obj.Open(Null) As IDimInstance;

	    CalClass:=New CalendarDimInstanceFactory.Create;

	    CalInst:=CalClass.CreateCalendarDimInstance(Dim);

	    i:=CalInst.Day(Dim.Elements.FindById("YEARS:2002"));

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться индекс элемента, соответствующего 1 января 2002 года. Идентификатор справочника - «CALENDAR_DIM».


См. также:


[ICalendarDimInstance](ICalendarDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
