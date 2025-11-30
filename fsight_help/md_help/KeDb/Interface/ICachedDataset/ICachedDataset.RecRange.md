# ICachedDataset.RecRange

ICachedDataset.RecRange
-


# ICachedDataset.RecRange


## Синтаксис


RecRange: Integer;


## Описание


Свойство RecRange определяет
 количество кешируемых от текущей позиции вперед записей.


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

	    Cache.RecRange:=2;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера курсор в кеше будет установлен на третью запись.
 Также в кеш будут занесены следующие две записи.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
