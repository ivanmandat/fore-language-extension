# ICalendarDimension.LevelCount

ICalendarDimension.LevelCount
-


# ICalendarDimension.LevelCount


## Синтаксис


LevelCount: Integer;


## Описание


Свойство LevelCount возвращает количество уровней в календарном справочнике. «6» - если установлен "0" или "2" тип иерархии, «5» - если 1 тип иерархии. Тип иерархии устанавливается с помощью свойства [Hierarchy](ICalendarDimension.Hierarchy.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории календарного справочника с идентификатором "CALENDAR_DIM".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CalDim: ICalendarDimension;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    CalDim:=MB.ItemById("CALENDAR_DIM").Bind As ICalendarDimension;

	    i:=CalDim.LevelCount;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество уровней календарного справочника.


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
