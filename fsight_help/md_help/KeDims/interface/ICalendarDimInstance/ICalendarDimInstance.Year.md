# ICalendarDimInstance.Year

ICalendarDimInstance.Year
-


# ICalendarDimInstance.Year


## Синтаксис


Year(El: Integer): Integer;


## Параметры


El — индекс элемента.


## Описание


Метод Year возвращает индекс года для элемента календарного справочника, индекс которого передается посредством параметра El. Если уровень «Годы» отсутствует в справочнике - возвращает «-1».


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

	    i:=CalInst.Year(Dim.Elements.FindById("DAYS:12.12.2002"));

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться индекс элемента календарного справочника, соответствующего 2002 году. Идентификатор справочника - «CALENDAR_DIM».


См. также:


[ICalendarDimInstance](ICalendarDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
