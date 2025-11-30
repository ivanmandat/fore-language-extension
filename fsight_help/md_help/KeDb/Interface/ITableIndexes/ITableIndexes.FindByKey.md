# ITableIndexes.FindByKey

ITableIndexes.FindByKey
-


# ITableIndexes.FindByKey


## Синтаксис


FindByKey(Key: Integer): [ITableIndex](../ITableIndex/ITableIndex.htm);


## Параметры


Key — ключ индекса.


## Описание


Метод FindByKey осуществляет поиск и возвращает объект, содержащий индекс таблицы. Ключ, по которому осуществляется поиск, передается посредством параметра Key.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Table: ITable;

	    Indexes: ITableIndexes;

	    Index: ITableIndex;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Table:=MB.ItemById("TABLE_1").Bind As ITable;

	    Indexes:=Table.Indexes;

	    Index:=Indexes.FindByKey(1);

	    s:=Index.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование индекса, ключ которого равен «1». Таблицы имеет идентификатор «Table_1».


См.также:


[ITableIndexes](ITableIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
