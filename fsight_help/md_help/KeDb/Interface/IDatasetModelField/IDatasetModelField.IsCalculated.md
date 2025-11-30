# IDatasetModelField.IsCalculated

IDatasetModelField.IsCalculated
-


# IDatasetModelField.IsCalculated


## Синтаксис


IsCalculated: Boolean;


## Описание


Свойство IsCalculated возвращает
 True, если поле источника данных
 вычисляемое.


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

	    If Field.IsCalculated Then

	        s:="Yes";

	    Else

	        s:="No";

	    End If;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в переменной s будет содержаться «Yes» если
 первое поле источника данных вычисляемое. Идентификатор источника данных
 - Table_1.


См. также:


[IDatasetModelField](IDatasetModelField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
