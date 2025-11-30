# ICalendarDimInstance.StartPeriod

ICalendarDimInstance.StartPeriod
-


# ICalendarDimInstance.StartPeriod


## Синтаксис


StartPeriod(El: Integer): Integer;


## Параметры


El — индекс элемента.


## Описание


Метод StartPeriod возвращает индекс элемента, соответствующего началу периода, в котором находится элемент, передаваемый посредством параметра El.


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

	    i:=CalInst.StartPeriod(100);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться индекс элемента, соответствующего началу периода, в котором находится сотый элемент. Идентификатор справочника - «CALENDAR_DIM».


См. также:


[ICalendarDimInstance](ICalendarDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
