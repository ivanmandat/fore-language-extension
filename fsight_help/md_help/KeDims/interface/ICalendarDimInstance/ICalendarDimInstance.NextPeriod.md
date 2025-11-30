# ICalendarDimInstance.NextPeriod

ICalendarDimInstance.NextPeriod
-


# ICalendarDimInstance.NextPeriod


## Синтаксис


NextPeriod(El: Integer): Integer;


## Параметры


El — индекс элемента, соответствующего периоду.


## Описание


Метод NextPeriod возвращает индекс элемента соответствующего следующему периоду, относительно периода, в котором находится элемент El. Если предыдущего периода нет - возвращает «-1».


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

	    i:=CalInst.NextPeriod(25);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться индекс элемента, соответствующего следующему периоду, относительно периода, которому соответствует 25 элемент. Идентификатор справочника - «CALENDAR_DIM».


См. также:


[ICalendarDimInstance](ICalendarDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
