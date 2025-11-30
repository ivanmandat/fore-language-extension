# IDatasetModelField.IsData

IDatasetModelField.IsData
-


# IDatasetModelField.IsData


## Синтаксис


IsData: Boolean;


## Описание


Свойство IsData возвращает True, если поле источника данных
 обычное (не вычисляемое).


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

	    If Field.IsData Then

	        s:="Yes";

	    Else

	        s:="No";

	    End If;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Yes» если
 первое поле источника данных обычное (не вычисляемое). Идентификатор источника
 данных - «Table_1».


См. также:


[IDatasetModelField](IDatasetModelField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
