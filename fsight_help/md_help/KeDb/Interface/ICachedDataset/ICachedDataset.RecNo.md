# ICachedDataset.RecNo

ICachedDataset.RecNo
-


# ICachedDataset.RecNo


## Синтаксис


RecNo: Integer;


## Описание


Свойство RecNo определяет индекс
 записи, на которой установлен курсор в кеше.


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

	    Cache.RecNo:=2;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера курсор в кеше будет установлен на третью запись.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
