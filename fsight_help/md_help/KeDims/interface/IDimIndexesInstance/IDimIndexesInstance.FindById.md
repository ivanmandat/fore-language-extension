# IDimIndexesInstance.FindById

IDimIndexesInstance.FindById
-


# IDimIndexesInstance.FindById


## Синтаксис


FindById(IndexId: String): [IDimIndexInstance](../IDimIndexInstance/IDimIndexInstance.htm);


## Параметры


IndexId - идентификатор индекса,
 по которому осуществляется поиск.


## Описание


Метод FindById осуществляет
 поиск и возвращает объект, содержащий индекс справочника. Поиск осуществляется
 по идентификатору, передаваемому в качестве параметра IndexId.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Indxs: IDimIndexesInstance;

	    Index: IDimIndexInstance;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dimen := MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Indxs := Dimen.Indexes;

	    If Indxs.Count <> 0 Then

	        Index := Indxs.FindById("INDEX1");

	        If Index <> Null Then

	            i := Index.Index.Key;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера, будет осуществлен поиск индекса с идентификатором
 «Index1» и в случае удачного поиска, в переменной «i» будет содержаться
 ключ найденного индекса.


См. также:


[IDimIndexesInstance](IDimIndexesInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
