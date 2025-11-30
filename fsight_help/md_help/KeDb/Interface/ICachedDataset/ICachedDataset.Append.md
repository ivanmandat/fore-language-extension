# ICachedDataset.Append

ICachedDataset.Append
-


# ICachedDataset.Append


## Синтаксис


Append;


## Описание


Метод Append добавляет запись
 в конце таблицы и переходит к ее редактированию.


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

	    Cache.Append;

	    Cache.Post;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера будет добавлена запись в конце таблицы.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
