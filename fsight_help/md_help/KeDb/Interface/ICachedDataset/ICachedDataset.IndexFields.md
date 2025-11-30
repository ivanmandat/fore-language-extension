# ICachedDataset.IndexFields

ICachedDataset.IndexFields
-


# ICachedDataset.IndexFields


## Синтаксис


IndexFields: String;


## Описание


Свойство IndexFields определяет
 список полей сортировки кеша источника данных.


## Комментарии


Поля в списке разделяются знаком «;». Данное свойство также определяет
 список полей, по которым осуществляется фильтрация при связывании нескольких
 источников данных.


## Пример


Для выполнения примера предполагается наличие в репозитории двух таблиц
 с идентификаторами "Table_1" и "Table_2".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst, DSInst1: IDatasetInstance;

	    Cache, Cache1: ICachedDataset;

	Begin

	    MB := MetabaseClass.Active;

	    DSInst := MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    DSInst1 := MB.ItemById("Table_2").Open(Null) As IDatasetInstance;

	    Cache := DSInst.OpenCached;

	    Cache1 := DSInst1.OpenCached;

	    Cache.IndexFields := "FIELD2";

	    Cache.MasterFields := "FIELD_2";

	    Cache.MasterSource := Cache1;

	    Cache1.First;

	    While Not Cache1.Eof Do

	        Debug.WriteLine(Cache.RecordCountAll);

	        Cache1.Next;

	    End While;

	    Cache.Close;

	    Cache1.Close;

	    DSInst.Close;

	    DSInst1.Close;

	End Sub UserProc;


После выполнения примера будет установлена связь между двумя таблицами.
 Поле главной таблицы, из которой будут браться данные, имеет идентификатор
 - «FIELD_2»; поле ведомой таблицы, по которому будет осуществляться фильтрация
 в соответствии с данными из первой таблицы, имеет идентификатор - «FIELD2».
 Будет осуществлен проход по всем записям главной таблицы. В консоль будет
 выведено количество записей в связанной таблице, полученных в результате
 фильтрации по данным каждой записи главной таблицы.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
