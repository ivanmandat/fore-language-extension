# ITableFields.Clear

ITableFields.Clear
-


# ITableFields.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет очистку списка полей таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Table: ITable;

	    Fields: ITableFields;

	    Field: ITableField;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Table_1").Edit;

	    Table := MObj As ITable;

	    Fields := Table.Fields;

	    Fields.Clear;

	    Field := Fields.Add;

	    Field.Id := "NEWFIELD";

	    Field.Name := "Новое поле";

	    Field.DataType := DbDataType.Integer;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будут удалены все поля таблицы с идентификатором «Table_1». Вместо них будет создано одно новое целочисленное поле - "NEWFIELD".


См.также:


[ITableFields](ITableFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
