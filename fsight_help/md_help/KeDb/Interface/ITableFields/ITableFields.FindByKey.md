# ITableFields.FindByKey

ITableFields.FindByKey
-


# ITableFields.FindByKey


## Синтаксис


FindByKey(Key: Integer): [ITableField](../ITableField/ITableField.htm);


## Параметры


Key — ключ поля, по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет поиск и возвращает объект, содержащий поле таблицы. Ключ, по которому осуществляется поиск, передается посредством параметра Key.


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

	    Field:=Fields.FindByKey(1);

	    s:=Field.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование поля, ключ которого равен «1». Идентификатор таблицы - «Table_1».


См.также:


[ITableFields](ITableFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
