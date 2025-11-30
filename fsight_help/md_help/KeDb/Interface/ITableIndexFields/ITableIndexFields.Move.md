# ITableIndexFields.Move

ITableIndexFields.Move
-


# ITableIndexFields.Move


## Синтаксис


Move(Field: [ITableField](../ITableField/ITableField.htm), Position: Integer);


## Параметры


Field — поле таблицы.


Position — позиция в индексе.


## Описание


Метод Move осуществляет перемещение поля таблицы в индексе.


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

	    IndexFields.Move(Field, IndexFields.Count - 1);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в индексе первое поле таблицы будет перемещено на последнюю позицию.


См.также:


[ITableIndexFields](ITableIndexFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
