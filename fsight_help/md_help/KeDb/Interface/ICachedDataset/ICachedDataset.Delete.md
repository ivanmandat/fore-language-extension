# ICachedDataset.Delete

ICachedDataset.Delete
-


# ICachedDataset.Delete


## Синтаксис


Delete;


## Описание


Метод Delete удаляет текущую
 запись.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Cache: ICachedDataset;

	Begin

	    MB := MetabaseClass.Active;

	    DSInst := MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Cache := DSInst.OpenCached;

	    Cache.Delete;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера будет удалена первая запись в таблице источника
 данных.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
