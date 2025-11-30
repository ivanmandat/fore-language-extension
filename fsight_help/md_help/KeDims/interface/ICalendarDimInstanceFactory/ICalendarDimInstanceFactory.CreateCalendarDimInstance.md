# ICalendarDimInstanceFactory.CreateCalendarDimInstance

ICalendarDimInstanceFactory.CreateCalendarDimInstance
-


# ICalendarDimInstanceFactory.CreateCalendarDimInstance


## Синтаксис


CreateCalendarDimInstance(Cln: [IDimInstance](../IDimInstance/IDimInstance.htm)): [ICalendarDimInstance](../ICalendarDimInstance/ICalendarDimInstance.htm);


## Параметры


Cln — данные календарного справочника.


## Описание


Метод CreateCalendarDimInstance создает объект, содержащий методы для навигации по иерархии элементов календарного справочника.


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


[ICalendarDimInstanceFactory](ICalendarDimInstanceFactory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
