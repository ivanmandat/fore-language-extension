# ICalendarDimInstance.Level

ICalendarDimInstance.Level
-


# ICalendarDimInstance.Level


## Синтаксис


Level(El: Integer): [DimCalendarLevel](../../Enums/DimCalendarLevel.htm);


## Параметры


El — индекс элемента.


## Описание


Метод Level возвращает уровень справочника, на котором расположен элемент с индексом El.


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

	    i:=CalInst.Level(Dim.Elements.Count-1);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться номер уровня, на котором расположен последний элемент календарного справочника. Идентификатор справочника - «CALENDAR_DIM».


См. также:


[ICalendarDimInstance](ICalendarDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
