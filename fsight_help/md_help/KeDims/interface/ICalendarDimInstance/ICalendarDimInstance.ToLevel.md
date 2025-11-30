# ICalendarDimInstance.ToLevel

ICalendarDimInstance.ToLevel
-


# ICalendarDimInstance.ToLevel


## Синтаксис


ToLevel(El: Integer; Level: [DimCalendarLevel](../../Enums/DimCalendarLevel.htm)): Integer;


## Параметры


El — индекс элемента.


Level — индекс уровня, на котором расположен искомый элемент.


## Описание


Метод ToLevel возвращает индекс родительского элемента, расположенного на уровне Level, относительно которого элемент El является дочерним. Если уровень, передаваемый посредством параметра Level, отсутствует в справочнике - возвращает «-1».


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

	    i:=CalInst.ToLevel(100,DimCalendarLevel.Month);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться индекс месяца, относительно которого сотый элементы справочника является дочерним. Идентификатор справочника - «CALENDAR_DIM».


См. также:


[ICalendarDimInstance](ICalendarDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
