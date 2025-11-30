# ICalendarDimInstance.Week

ICalendarDimInstance.Week
-


# ICalendarDimInstance.Week


## Синтаксис


Week(El: Integer): Integer;


## Параметры


El — индекс элемента.


## Описание


Метод Week возвращает индекс недели для элемента календарного справочника, индекс которого передается посредством параметра El. Если уровень «Недели» отсутствует в справочнике - возвращает «-1».


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

	    i := CalInst.Week(Dim.Elements.FindById("WEEKS:7.1.2008"));

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться индекс соответствующего элемента календарного справочника. Идентификатор справочника - «CALENDAR_DIM».


См. также:


[ICalendarDimInstance](ICalendarDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
