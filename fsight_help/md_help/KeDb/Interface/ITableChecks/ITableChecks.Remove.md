# ITableChecks.Remove

ITableChecks.Remove
-


# ITableChecks.Remove


## Синтаксис


Remove(Check: Integer): Boolean;


## Параметры


Check — номер ограничения.


## Описание


Метод Remove осуществляет удаление ограничения таблицы. Номер ограничения передается посредством параметра Check.


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

	    If Checks.Remove(0) Then

	        s:="Removed";

	    Else

	        s:="Don't Removed";

	    End If;

	    Object.Save;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Removed» если удаление первого ограничения таблицы прошло удачно. Идентификатор таблицы - «Table_1».


См.также:


[ITableChecks](ITableChecks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
