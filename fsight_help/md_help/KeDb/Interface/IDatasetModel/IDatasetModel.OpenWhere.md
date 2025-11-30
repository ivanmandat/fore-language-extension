# IDatasetModel.OpenWhere

IDatasetModel.OpenWhere
-


# IDatasetModel.OpenWhere


## Синтаксис


OpenWhere(Params: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);
 Where: String): [IDatasetInstance](../IDatasetInstance/IDatasetInstance.htm);


## Параметры


Params. Значения параметров
 для открытия источника данных.
 Null если параметры отсутствуют;


Where. Условие фильтрации,
 используемое при открытии.


## Описание


Метод OpenWhere открывает источник
 данных, используя фильтр, условие которого передается посредством параметра
 Where.


## Пример


Для выполнения примера предполагается наличие в репозитории запроса
 с идентификатором Query_1. Данный запрос имеет один параметр.


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

	    DSInst := DSModel.OpenWhere(Params, "Num2>15");

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
 значением параметра. Данные, полученные в результате выполнения запроса
 и удовлетворяющие условию фильтрации "Num2>15", будут выведены
 в консоль среды разработки.


См. также:


[IDatasetModel](IDatasetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
