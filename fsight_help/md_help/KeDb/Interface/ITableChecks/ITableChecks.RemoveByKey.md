# ITableChecks.RemoveByKey

ITableChecks.RemoveByKey
-


# ITableChecks.RemoveByKey


## Синтаксис


RemoveByKey(CheckKey: Integer): Boolean;


## Параметры


CheckKey — ключ ограничения.


## Описание


Метод RemoveByKey осуществляет удаление ограничения таблицы. Ключ индекса передается посредством параметра TriggerKey.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    Table: ITable;

	    Checks: ITableChecks;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Object:=MB.ItemById("TABLE_1").Edit;

	    Table:=Object As ITable;

	    Checks:=Table.Checks;

	    If Checks.RemoveByKey(10) Then

	        s:="Removed";

	    Else

	        s:="Don't Removed";

	    End If;

	    Object.Save;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Removed» если удаление ограничения с ключом «10» из таблицы прошло удачно. Идентификатор таблицы - «Table_1».


См.также:


[ITableChecks](ITableChecks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
