# ITableIndexes.Clear

ITableIndexes.Clear
-


# ITableIndexes.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет очистку списка индексов таблицы.


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

	    Indexes.Clear;

	    Object.Save;

	End Sub UserProc;


После выполнения примера будут удалены все индексы таблицы с идентификатором «Table_1».


См.также:


[ITableIndexes](ITableIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
