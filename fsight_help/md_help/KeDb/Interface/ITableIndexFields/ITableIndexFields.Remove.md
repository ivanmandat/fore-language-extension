# ITableIndexFields.Remove

ITableIndexFields.Remove
-


# ITableIndexFields.Remove


## Синтаксис


Remove(Value: [ITableField](../ITableField/ITableField.htm));


## Параметры


Value — поле таблицы.


## Описание


Метод Remove осуществляет удаление поля из индекса таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Table: ITable;

	    Index: ITableIndex;

	    IndexFields: ITableIndexFields;

	    Field: ITableField;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("TABLE_1").Edit;

	    Table := MObj As ITable;

	    Index := Table.Indexes.Item(0);

	    IndexFields := Index.Fields;

	    Field := IndexFields.Item(0);

	    IndexFields.Remove(Field);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера из индекса будет удалено первое поле таблицы, по которому он создан. Идентификатор таблицы - «Table_1».


См.также:


[ITableIndexFields](ITableIndexFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
