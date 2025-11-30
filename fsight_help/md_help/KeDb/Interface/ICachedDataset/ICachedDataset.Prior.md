# ICachedDataset.Prior

ICachedDataset.Prior
-


# ICachedDataset.Prior


## Синтаксис


Prior;


## Описание


Метод Prior осуществляет переход
 к предыдущей записи.


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

	    Cache.RecNo:=4;

	    Cache.Prior;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера произойдет переход с пятой на четвертую запись
 в кеше.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
