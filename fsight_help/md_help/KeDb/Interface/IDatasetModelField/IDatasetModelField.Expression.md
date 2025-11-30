# IDatasetModelField.Expression

IDatasetModelField.Expression
-


# IDatasetModelField.Expression


## Синтаксис


Expression: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Expression возвращает
 выражение вычисляемого поля. Если поле не вычисляемое - возвращает пустое
 значение.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    DSModel: IDatasetModel;

	    Fields: IDatasetModelFields;

	    Field: IDatasetModelField;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    DSInst:=MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    DSModel:=DSInst.Dataset;

	    Fields:=DSModel.Fields;

	    Field:=Fields.Item(0);

	    s:=Field.Expression.AsString;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в переменной s будет содержаться выражение
 первого поля источника данных, преобразованное к строковому типу. Идентификатор
 источника данных - Table_1.


См. также:


[IDatasetModelField](IDatasetModelField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
