# IDatasetInstance.OpenCached

IDatasetInstance.OpenCached
-


# IDatasetInstance.OpenCached


## Синтаксис


OpenCached: [ICachedDataset](../ICachedDataset/ICachedDataset.htm);


## Описание


Метод OpenCached позволяет работать
 с кешем источника данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Cache: ICachedDataset;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DSInst := MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Cache := DSInst.OpenCached;

	    i := Cache.RecordCountAll;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в переменной i будет содержаться количество
 всех записей в кеше.


См. также:


[IDatasetInstance](IDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
