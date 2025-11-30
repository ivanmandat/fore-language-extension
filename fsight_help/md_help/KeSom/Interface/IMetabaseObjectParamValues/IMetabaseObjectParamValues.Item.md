# IMetabaseObjectParamValues.Item

IMetabaseObjectParamValues.Item
-


# IMetabaseObjectParamValues.Item


## Синтаксис


Item(Index: Integer): [IMetabaseObjectParamValue](../IMetabaseObjectParamValue/IMetabaseObjectParamValue.htm);


## Параметры


Index. Индекс параметра, к значению которого необходимо
 обратиться.


## Описание


Свойство Item возвращает значение
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


[IMetabaseObjectParamValues](IMetabaseObjectParamValues.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
