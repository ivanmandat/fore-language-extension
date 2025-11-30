# ITableChecks.Item

ITableChecks.Item
-


# ITableChecks.Item


## Синтаксис


Item(Index: Integer): [ITableCheck](../ITableCheck/ITableCheck.htm);


## Параметры


Index — индекс ограничения.


## Описание


Свойство Item возвращает объект, содержащий ограничение таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Table: ITable;

	    Checks: ITableChecks;

	    Check: ITableCheck;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Table:=MB.ItemById("TABLE_1").Bind As ITable;

	    Checks:=Table.Checks;

	    Check:=Checks.Item(0);

	    s:=Check.Id;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор первого ограничения таблицы. Идентификатор таблицы - «Table_1».


См.также:


[ITableChecks](ITableChecks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
