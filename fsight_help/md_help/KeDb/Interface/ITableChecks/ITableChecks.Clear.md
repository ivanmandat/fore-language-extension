# ITableChecks.Clear

ITableChecks.Clear
-


# ITableChecks.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет очистку списка ограничений таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    Table: ITable;

	    Checks: ITableChecks;

	Begin

	    MB:=MetabaseClass.Active;

	    Object:=MB.ItemById("TABLE_1").Edit;

	    Table:=Object As ITable;

	    Checks:=Table.Checks;

	    Checks.Clear;

	    Object.Save;

	End Sub UserProc;


После выполнения примера будут удалены все ограничения таблицы. Идентификатор таблицы - «Table_1».


См.также:


[ITableChecks](ITableChecks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
