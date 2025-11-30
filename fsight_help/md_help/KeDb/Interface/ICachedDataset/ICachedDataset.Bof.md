# ICachedDataset.Bof

ICachedDataset.Bof
-


# ICachedDataset.Bof


## Синтаксис


Bof: Boolean;


## Описание


Метод Bof возвращает True,
 если курсор расположен на первой записи кеша.


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

	    If Cache.Bof Then

	        s:="Yes";

	    Else

	        s:="No";

	    End If;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Yes» если
 курсор в кеше находится на первой записи.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
