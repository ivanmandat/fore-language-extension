# ITableChecks.FindByKey

ITableChecks.FindByKey
-


# ITableChecks.FindByKey


## Синтаксис


FindByKey(Key: Integer): [ITableCheck](../ITableCheck/ITableCheck.htm);


## Параметры


Key — ключ ограничения.


## Описание


Метод FindByKey осуществляет поиск и возвращает объект, содержащий ограничение таблицы. Ключ, по которому осуществляется поиск, передается посредством параметра Key.


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

	    Check:=Checks.FindByKey(1);

	    s:=Check.Id;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор ограничения, ключ которого равен «1». Идентификатор таблицы - «Table_1».


См.также:


[ITableChecks](ITableChecks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
