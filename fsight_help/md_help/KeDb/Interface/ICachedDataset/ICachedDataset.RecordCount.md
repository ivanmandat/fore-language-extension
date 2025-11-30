# ICachedDataset.RecordCount

ICachedDataset.RecordCount
-


# ICachedDataset.RecordCount


## Синтаксис


RecordCount: Integer;


## Описание


Свойство RecordCount возвращает
 текущее количество кешированных записей.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Cache: ICachedDataset;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DSInst:=MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Cache:=DSInst.OpenCached;

	    i:=Cache.RecordCount;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в переменной i будет содержаться текущее количество
 кешированных записей.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
