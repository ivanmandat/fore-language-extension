# ITableFields.Add

ITableFields.Add
-


# ITableFields.Add


## Синтаксис


Add: [ITableField](../ITableField/ITableField.htm);


## Описание


Метод Add осуществляет создание нового поля таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    Table: ITable;

	    Fields: ITableFields;

	    Field: ITableField;

	Begin

	    MB:=MetabaseClass.Active;

	    Object:=MB.ItemById("TABLE_1").Edit;

	    Table:=Object As ITable;

	    Fields:=Table.Fields;

	    Field:=Fields.Add;

	    Field.DataType:=DbDataType.String;

	    Field.Id:="Text_Field";

	    Field.Name:="Текстовое поле";

	    Field.Size:=50;

	    Object.Save;

	End Sub UserProc;


После выполнения примера в таблице с идентификатором «Table_1» будет создано одно поле. Идентификатор поля - «Text_Field», тип данных - «строковый», длина поля - «50».


См.также:


[ITableFields](ITableFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
