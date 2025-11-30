# ITableField.IsCalculated

ITableField.IsCalculated
-


# ITableField.IsCalculated


## Синтаксис


IsCalculated: Boolean;


## Описание


Свойство IsCalculated определяет, будет ли поле вычисляемым или нет. True, если поле вычисляемое.


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

	    Field:=Fields.Item(0);

	    If Field.IsCalculated Then

	        s:="Calculated";

	    Else

	        s:="Not Calculated";

	    End If;

	End Sub UserProc;


После выполнения пример в переменной «s» будет содержаться «Calculated» если первое поле таблицы с идентификатором «Table_1» - вычисляемое.


См.также:


[ITableField](ITableField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
