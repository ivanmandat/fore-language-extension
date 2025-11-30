# ITableIndexFields.Add

ITableIndexFields.Add
-


# ITableIndexFields.Add


## Синтаксис


Add(Value: [ITableField](../ITableField/ITableField.htm));


## Параметры


Value — поле таблицы.


## Описание


Метод Add осуществляет добавление поля таблицы в индекс.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    Table: ITable;

	    Index: ITableIndex;

	    IndexFields: ITableIndexFields;

	    Field: ITableField;

	Begin

	    MB:=MetabaseClass.Active;

	    Object:=MB.ItemById("TABLE_1").Edit;

	    Table:=Object As ITable;

	    Field:=Table.Fields.Item(2);

	    Index:=Table.Indexes.Item(0);

	    IndexFields:=Index.Fields;

	    IndexFields.Add(Field);

	    Object.Save;

	End Sub UserProc;


После выполнения примера в первый индекс будет добавлено третье поле таблицы. Идентификатор таблицы - «Table_1».


См.также:


[ITableIndexFields](ITableIndexFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
