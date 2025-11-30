# ICachedDataset.EofData

ICachedDataset.EofData
-


# ICachedDataset.EofData


## Синтаксис


EofData: Boolean;


## Описание


Метод EofData возвращает True, если курсор стоит на записи,
 соответствующей последней записи в исходных данных источника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Cache: ICachedDataset;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    DSInst:=MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Cache:=DSInst.OpenCached;

	    If Cache.EofData Then

	        s:="Yes";

	    Else

	        s:="No";

	    End If;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Yes» если
 курсор в кеше находится на записи, соответствующей последней записи исходных
 данных источника.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
