# ICalendarDimInstance.PeriodLength

ICalendarDimInstance.PeriodLength
-


# ICalendarDimInstance.PeriodLength


## Синтаксис


PeriodLength(El: Integer): Integer;


## Параметры


El — индекс элемента.


## Описание


Метод PeriodLength возвращает длительность периода, в котором находится элемент, передаваемый посредством параметра El. Исчисление ведется в элементах, расположенных на самом нижнем уровне календарного справочника.


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

	    i:=CalInst.PeriodLength(100);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться длительность периода, в котором находится сотый элемент календарного справочника. Идентификатор справочника - «CALENDAR_DIM».


См. также:


[ICalendarDimInstance](ICalendarDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
