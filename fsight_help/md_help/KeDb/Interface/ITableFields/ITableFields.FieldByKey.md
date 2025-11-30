# ITableFields.FieldByKey

ITableFields.FieldByKey
-


# ITableFields.FieldByKey


## Синтаксис


FieldByKey(Key: Integer): [ITableField](../ITableField/ITableField.htm);


## Параметры


Key — ключ поля.


## Описание


Метод FieldByKey осуществляет переход к полю таблицы. Ключ поля передается посредством параметра Key.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Table: ITable;

	    Fields: ITableFields;

	    Field: ITableField;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Table:=MB.ItemById("TABLE_1").Bind As ITable;

	    Fields:=Table.Fields;

	    Field:=Fields.FieldByKey(10);

	    s:=Field.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование поля, ключ которого равен «10». Идентификатор таблицы - «Table_1».


См.также:


[ITableFields](ITableFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
