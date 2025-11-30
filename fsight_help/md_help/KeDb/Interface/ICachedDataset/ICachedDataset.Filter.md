# ICachedDataset.Filter

ICachedDataset.Filter
-


# ICachedDataset.Filter


## Синтаксис


Filter: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Filter возвращает условие
 фильтрации данных в кеше.


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

	    Cache.FetchToRecord(Cache.RecordCountAll);

	    Cache.Filter.AsString := "Num1 < 30";

	    Cache.Filtered := True;

	    i := Cache.RecordCount;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в кеш будут загружены все записи из источника
 данных, затем будет установлен фильтр (условие фильтрации - "Num1
 <30") и в переменной "i" будет содержаться количество
 записей, которые остались после фильтрации.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
