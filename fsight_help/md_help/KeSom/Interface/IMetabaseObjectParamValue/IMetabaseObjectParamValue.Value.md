# IMetabaseObjectParamValue.Value

IMetabaseObjectParamValue.Value
-


# IMetabaseObjectParamValue.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение
 параметра.


## Пример


Для выполнения примера предполагается наличие в репозитории запроса
 с идентификатором Query_1. Данный запрос создан с двумя параметрами.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Params: IMetabaseObjectParamValues;

	    DInst: IDatasetInstance;

	    Fields: IDatasetInstanceFields;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Query_1").Bind;

	    Params := MObj.ParamValues;

	    Params.Item(0).Value := 100;

	    Params.Item(1).Value := 300;

	    DInst := MObj.Open(Params) As IDatasetInstance;

	    Fields := DInst.Fields;

	    While Not DInst.Eof Do

	        Debug.WriteLine(Fields.Item(0).Value);

	        DInst.Next;

	    End While;

	    DInst.Close;

	End Sub UserProc;


После выполнения примера будет открыт запрос с указанными значениями
 параметров. Значения первого столбца данных, полученных при выполнении
 запроса, будут выведены в консоль среды разработки.


См. также:


[IMetabaseObjectParamValue](IMetabaseObjectParamValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
