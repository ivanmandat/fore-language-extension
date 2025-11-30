# IDimIndexesInstance.FindByKey

IDimIndexesInstance.FindByKey
-


# IDimIndexesInstance.FindByKey


## Синтаксис


FindByKey(IndexKey: Integer): [IDimIndexInstance](../IDimIndexInstance/IDimIndexInstance.htm);


## Параметры


IndexKey — ключ
 индекса, по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает объект, содержащий индекс справочника. Поиск осуществляется
 по ключу, передаваемому в качестве параметра IndexKey.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Indxs: IDimIndexesInstance;

	    Index: IDimIndexInstance;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Indxs:=Dimen.Indexes;

	    If Indxs.Count<>0 Then

	        Index:=Indxs.FindByKey(4903);

	        If Index<>Null Then

	            s:=Index.Index.Id;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера, будет осуществлен поиск индекса с ключом «4903»
 и в случае удачного поиска, в переменной «s» будет содержаться идентификатор
 найденного индекса.


См. также:


[IDimIndexesInstance](IDimIndexesInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
