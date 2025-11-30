# ICachedDataset.GetFieldValue

ICachedDataset.GetFieldValue
-


# ICachedDataset.GetFieldValue


## Синтаксис


GetFieldValue(RecNo: Integer; FieldNo: Integer):
 Variant;


## Параметры


RecNo. Номер записи.


FieldNo. Номер столбца.


## Описание


Метод GetFieldValue возвращает
 значение кешированного поля без перемещения по записям.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Cache: ICachedDataset;

	    v: Variant;

	Begin

	    MB:=MetabaseClass.Active;

	    DSInst:=MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Cache:=DSInst.OpenCached;

	    Cache.FetchToRecord(Cache.RecordCountAll);

	    v:=Cache.GetFieldValue(3,3);

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в переменной «v» будет содержаться значение
 четвертого столбца, четвертой записи кеша.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
