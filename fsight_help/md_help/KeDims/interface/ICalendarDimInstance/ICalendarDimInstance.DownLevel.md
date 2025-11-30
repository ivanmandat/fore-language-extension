# ICalendarDimInstance.DownLevel

ICalendarDimInstance.DownLevel
-


# ICalendarDimInstance.DownLevel


## Синтаксис


DownLevel(El: Integer): Integer;


## Параметры


El — индекс элемента.


## Описание


Метод DownLevel возвращает индекс элемента календарного справочника, находящегося на уровень ниже элемента, индекс которого передается посредством параметра El. Если элементов, находящихся на более низком уровне нет - возвращает «-1».


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

	    i:=CalInst.DownLevel(100);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться индекс элемента, относительно которого сотый элемент справочника является родителем. Идентификатор справочника - «CALENDAR_DIM».


См. также:


[ICalendarDimInstance](ICalendarDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
