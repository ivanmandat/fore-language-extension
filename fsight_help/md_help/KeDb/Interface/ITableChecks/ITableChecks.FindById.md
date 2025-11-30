# ITableChecks.FindById

ITableChecks.FindById
-


# ITableChecks.FindById


## Синтаксис


FindById(Id: String): [ITableCheck](../ITableCheck/ITableCheck.htm);


## Параметры


Id — идентификатор ограничения.


## Описание


Метод FindById осуществляет поиск и возвращает объект, содержащий ограничение таблицы. Идентификатор, по которому осуществляется поиск, передается посредством параметра Id.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Table: ITable;

	    Checks: ITableChecks;

	    Check: ITableCheck;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Table:=MB.ItemById("TABLE_1").Bind As ITable;

	    Checks:=Table.Checks;

	    Check:=Checks.FindById("TABLE_1_CHECK");

	    i:=Check.Key;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться ключ ограничения, идентификатор которого «TABLE_1_CHECK». Идентификатор таблицы - «Table_1».


См.также:


[ITableChecks](ITableChecks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
