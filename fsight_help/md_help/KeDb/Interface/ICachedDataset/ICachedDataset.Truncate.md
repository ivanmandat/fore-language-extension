# ICachedDataset.Truncate

ICachedDataset.Truncate
-


# ICachedDataset.Truncate


## Синтаксис


Truncate;


## Описание


Метод Truncate удаляет все записи
 источника данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Cache: ICachedDataset;

	Begin

	    MB:=MetabaseClass.Active;

	    DSInst:=MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Cache:=DSInst.OpenCached;

	    Cache.Truncate;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера будут удалены все записи источника данных.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
