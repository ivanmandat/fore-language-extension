# ITableField.Expression

ITableField.Expression
-


# ITableField.Expression


## Синтаксис


Expression: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Expression возвращает выражение вычисляемого поля. Если поле не вычисляемое - вернет пустое значение.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Table: ITable;

	    Fields: ITableFields;

	    Field: ITableField;

	    Expr: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Table:=MB.ItemById("TABLE_1").Bind As ITable;

	    Fields:=Table.Fields;

	    Field:=Fields.Item(0);

	    Expr:=Field.Expression.AsString;

	End Sub UserProc;


После выполнения примера в переменной «Expr» будет содержаться выражение первого поля таблицы с идентификатором «Table_1».


См.также:


[ITableField](ITableField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
