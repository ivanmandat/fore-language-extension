# ICachedDataset.Insert

ICachedDataset.Insert
-


# ICachedDataset.Insert


## Синтаксис


Insert;


## Описание


Метод Insert вставляет запись
 в текущую позицию и переходит к ее редактированию.


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

	    Cache.Insert;

	    Cache.Post;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера будет добавлена запись в первой позиции.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
