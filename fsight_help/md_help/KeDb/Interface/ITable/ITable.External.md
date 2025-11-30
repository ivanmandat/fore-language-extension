# ITable.External

ITable.External
-


# ITable.External


## Синтаксис


External: Boolean;


## Описание


Свойство External возвращает признак присоединенной таблицы.


Если свойство возвращает значение True, то таблица является присоединенной, иначе обычной.


Для создания присоединенных таблиц используется метод [AttachTable](ITable.AttachTable.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы с идентификатором "Table_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Table: ITable;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Table:=MB.ItemById("Table_1").Bind As ITable;

	    If Table.External Then

	        s:="Yes";

	    Else

	        s:="No";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Yes», если таблица имеет признак присоединенной.


См. также:


[ITable](ITable.htm)|[ITable.AttachTable](ITable.AttachTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
