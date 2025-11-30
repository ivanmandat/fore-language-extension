# ITableIndexes.FindById

ITableIndexes.FindById
-


# ITableIndexes.FindById


## Синтаксис


FindById(Id: String): [ITableIndex](../ITableIndex/ITableIndex.htm);


## Параметры


Id — идентификатор индекса.


## Описание


Метод FindById осуществляет поиск и возвращает объект, содержащий индекс таблицы. Идентификатор, по которому осуществляется поиск, передается посредством параметра Id.


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

	    Index:=Indexes.FindById("TABLE_1_INDEX");

	    s:=Index.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование индекса, идентификатор которого равен «TABLE_1_INDEX». Таблицы имеет идентификатор «Table_1»


См.также:


[ITableIndexes](ITableIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
