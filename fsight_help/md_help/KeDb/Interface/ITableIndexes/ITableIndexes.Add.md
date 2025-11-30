# ITableIndexes.Add

ITableIndexes.Add
-


# ITableIndexes.Add


## Синтаксис


Add: [ITableIndex](../ITableIndex/ITableIndex.htm);


## Описание


Метод Add осуществляет добавление индекса таблицы.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы с идентификатором "TABLE_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Table: ITable;

	    Indexes: ITableIndexes;

	    Index: ITableIndex;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("TABLE_1").Edit;

	    Table:=MObj As ITable;

	    Indexes:=Table.Indexes;

	    Index:=Indexes.Add;

	    Index.Fields.Add(Table.Fields.Item(0));

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в таблице будет создан индекс по первому полю.


См.также:


[ITableIndexes](ITableIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
