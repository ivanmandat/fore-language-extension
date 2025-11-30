# ITableCheck.Text

ITableCheck.Text
-


# ITableCheck.Text


## Синтаксис


Text: String;


## Описание


Свойство Text определяет текст выражения ограничения таблицы.


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

	    s:=Check.Text;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться текст выражения первого ограничения таблицы. Идентификатор таблицы - «Table_1».


См.также:


[ITableCheck](ITableCheck.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
