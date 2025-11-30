# ITableFields.FindById

ITableFields.FindById
-


# ITableFields.FindById


## Синтаксис


FindById(Id: String): [ITableField](../ITableField/ITableField.htm);


## Параметры


Id — идентификатор поля.


## Описание


Метод FindById осуществляет поиск и возвращает объект, содержащий поле таблицы. Идентификатор, по которому осуществляется поиск, передается посредством параметра Id.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Table: ITable;

	    Fields: ITableFields;

	    Field: ITableField;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Table:=MB.ItemById("TABLE_1").Bind As ITable;

	    Fields:=Table.Fields;

	    Field:=Fields.FindById("Pole1");

	    i:=Field.Key;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться ключ поля c идентификатором «Pole1». Идентификатор таблицы - «Table_1».


См.также:


[ITableFields](ITableFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
