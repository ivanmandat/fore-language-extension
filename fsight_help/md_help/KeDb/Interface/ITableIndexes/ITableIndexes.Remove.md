# ITableIndexes.Remove

ITableIndexes.Remove
-


# ITableIndexes.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index — номер индекса.


## Описание


Метод Remove осуществляет удаление индекса, номер которого передается посредством параметра Index.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    Table: ITable;

	    Indexes: ITableIndexes;

	    Index: ITableIndex;

	Begin

	    MB:=MetabaseClass.Active;

	    Object:=MB.ItemById("TABLE_1").Edit;

	    Table:=Object As ITable;

	    Indexes:=Table.Indexes;

	    Indexes.Remove(0);

	    Object.Save;

	End Sub UserProc;


После выполнения примера в таблице с идентификатором «Table_1» будет удален первый индекс.


См.также:


[ITableIndexes](ITableIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
