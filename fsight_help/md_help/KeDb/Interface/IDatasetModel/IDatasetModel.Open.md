# IDatasetModel.Open

IDatasetModel.Open
-


# IDatasetModel.Open


## Синтаксис


Open(Params: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm)):
 [IDatasetInstance](../IDatasetInstance/IDatasetInstance.htm);


## Параметры


Params.
 Значения параметров для открытия источника
 данных. Null
 если параметры отсутствуют.


## Описание


Метод Open открывает источник
 данных.


## Комментарии


Для открытия источника данных с применением фильтра используйте метод
 [IDatasetModel.OpenWhere](IDatasetModel.OpenWhere.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории запроса
 с идентификатором Query_1. Данный запрос имеет один параметр.


Добавьте ссылки на системные сборки: Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    DSInst: IDatasetInstance;

	    DSModel: IDatasetModel;

	    Params: IMetabaseObjectParamValues;

	    Fields: IDatasetInstanceFields;

	    Field: IDatasetInstanceField;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Query_1").Bind;

	    DSModel := MObj As IDatasetModel;

	    Params := MObj.Params.CreateEmptyValues;

	    Params.Item(0).Value := "100";

	    DSInst := DSModel.Open(Params);

	    Fields := DSInst.Fields;

	    While Not DSInst.Eof Do

	        For Each Field In Fields Do

	            Debug.Write(Field.Value + " ");

	        End For;

	        Debug.WriteLine("");

	        DSInst.Next;

	    End While;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера будет произведено открытие запроса с указанным
 значением параметра. Данные, полученные в результате выполнения запроса,
 будут выведены в консоль среды разработки.


См. также:


[IDatasetModel](IDatasetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
