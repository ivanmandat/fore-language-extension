# ITableIndex.Fields

ITableIndex.Fields
-


# ITableIndex.Fields


## Синтаксис


Fields: [ITableIndexFields](../ITableIndexFields/ITableIndexFields.htm);


## Описание


Свойство Fields возвращает коллекцию полей таблицы, по которым создан индекс.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы с идентификатором "Table_1". В таблице имеется минимум два поля.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Table: ITable;

	    Fields: ITableFields;

	    Index: ITableIndex;

	Begin

	    MB := MetabaseClass.Active;

	    Table := MB.ItemById("Table_1").Edit As ITable;

	    Fields := Table.Fields;

	    Index := Table.Indexes.Add;

	    Index.Fields.Add(Fields.Item(0));

	    Index.Fields.Add(Fields.Item(1));

	    Index.Primary := True;

	    (Table As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в таблице будет создан первичный индекс. Данный индекс будет создан по двум первым полям таблицы.


См.также:


[ITableIndex](ITableIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
