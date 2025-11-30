# ITableTriggers.Clear

ITableTriggers.Clear
-


# ITableTriggers.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет очистку списка триггеров таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Table: ITable;

	    Triggers: ITableTriggers;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("TABLE_1").Edit;

	    Table:=MObj As ITable;

	    Triggers:=Table.Triggers;

	    Triggers.Clear;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будут удалены все триггеры таблицы. Идентификатор таблицы - «Table_1».


См.также:


[ITableTriggers](ITableTriggers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
