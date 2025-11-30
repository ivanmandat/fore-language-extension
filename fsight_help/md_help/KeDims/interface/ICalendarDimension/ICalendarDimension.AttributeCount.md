# ICalendarDimension.AttributeCount

ICalendarDimension.AttributeCount
-


# ICalendarDimension.AttributeCount


## Синтаксис


AttributeCount: Integer;


## Описание


Свойство AttributeCount возвращает количество системных атрибутов справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории календарного справочника с идентификатором «CALENDAR_DIM».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CalDim: ICalendarDimension;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    CalDim:=MB.ItemById("CALENDAR_DIM").Bind As ICalendarDimension;

	    i:=CalDim.AttributeCount;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество системных атрибутов справочника.


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
