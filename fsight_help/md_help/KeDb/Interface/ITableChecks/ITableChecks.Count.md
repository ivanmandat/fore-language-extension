# ITableChecks.Count

ITableChecks.Count
-


# ITableChecks.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество ограничений таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Table: ITable;

	    Checks: ITableChecks;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Table:=MB.ItemById("TABLE_1").Bind As ITable;

	    Checks:=Table.Checks;

	    i:=Checks.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество ограничений таблицы с идентификатором «Table_1».


См.также:


[ITableChecks](ITableChecks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
