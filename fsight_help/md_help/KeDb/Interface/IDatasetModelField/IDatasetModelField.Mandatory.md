# IDatasetModelField.Mandatory

IDatasetModelField.Mandatory
-


# IDatasetModelField.Mandatory


## Синтаксис


Mandatory: Boolean;


## Описание


Свойство Mandatory возвращает
 True, если не допускаются пустые
 значения в поле.


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

	    If Field.Mandatory Then

	        s:="No";

	    Else

	        s:="Yes";

	    End If;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в переменной s будет содержаться «Yes» если
 допускаются пустые значения в первом поле источника данных. Идентификатор
 источника данных - Table_1.


См. также:


[IDatasetModelField](IDatasetModelField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
