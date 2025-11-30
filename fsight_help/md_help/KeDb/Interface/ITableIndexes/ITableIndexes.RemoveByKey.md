# ITableIndexes.RemoveByKey

ITableIndexes.RemoveByKey
-


# ITableIndexes.RemoveByKey


## Синтаксис


RemoveByKey(IndexKey: Integer): Boolean;


## Параметры


IndexKey — ключ индекса.


## Описание


Метод RemoveByKey осуществляет удаление индекса, ключ которого передается посредством параметра IndexKey.


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

	    Indexes.RemoveByKey(1);

	    Object.Save;

	End Sub UserProc;


После выполнения примера в таблице с идентификатором «Table_1» будет удален индекс с ключом «1».


См.также:


[ITableIndexes](ITableIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
