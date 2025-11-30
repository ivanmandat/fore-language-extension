# IMetabaseObjectDescriptor.OpenWithParam

IMetabaseObjectDescriptor.OpenWithParam
-


# IMetabaseObjectDescriptor.OpenWithParam


## Синтаксис


OpenWithParam(Values: Variant): [IMetabaseObjectInstance](../IMetabaseObjectInstance/IMetabaseObjectInstance.htm);


## Параметры


Values. Значение параметра,
 с которым осуществляется открытие объекта.


## Описание


Метод OpenWithParam осуществляет
 открытие объекта и возвращает его данные.


## Комментарии


Данный метод актуально использовать, если объект имеет один параметр.


## Пример


Для выполнения примера предполагается наличие в репозитории запроса
 с идентификатором Query_1. Данный запрос создан с одним параметром.


Добавьте ссылки на системные сборки: Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    DInst: IDatasetInstance;

	    Fields: IDatasetInstanceFields;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Query_1");

	    DInst := MObj.OpenWithParam(100) As IDatasetInstance;

	    Fields := DInst.Fields;

	    While Not DInst.Eof Do

	        Debug.WriteLine(Fields.Item(0).Value);

	        DInst.Next;

	    End While;

	    DInst.Close;

	End Sub UserProc;


После выполнения примера будет открыт запрос с указанным значением параметра.
 Значения первого столбца данных, полученных при выполнении запроса, будут
 выведены в консоль среды разработки.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
