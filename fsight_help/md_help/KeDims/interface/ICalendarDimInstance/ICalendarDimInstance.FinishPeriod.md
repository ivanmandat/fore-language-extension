# ICalendarDimInstance.FinishPeriod

ICalendarDimInstance.FinishPeriod
-


# ICalendarDimInstance.FinishPeriod


## Синтаксис


FinishPeriod(El: Integer): Integer;


## Параметры


El — индекс элемента.


## Описание


Метод FinishPeriod возвращает индекс элемента, соответствующего окончанию периода, в котором находится элемент, передаваемый посредством параметра El.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CalClass: CalendarDimInstanceFactory;

	    Dim: IDimInstance;

	    CalInst: ICalendarDimInstance;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dim := MB.ItemById("CALENDAR_DIM").Open(Null) As IDimInstance;

	    CalClass := New CalendarDimInstanceFactory.Create;

	    CalInst := CalClass.CreateCalendarDimInstance(Dim);

	    i := CalInst.FinishPeriod(100);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться индекс элемента, соответствующего окончанию периода, в котором находится сотый элемент. Идентификатор справочника - «CALENDAR_DIM».


См. также:


[ICalendarDimInstance](ICalendarDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
