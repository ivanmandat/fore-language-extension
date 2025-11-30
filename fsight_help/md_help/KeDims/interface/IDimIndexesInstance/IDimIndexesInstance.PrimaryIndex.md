# IDimIndexesInstance.PrimaryIndex

IDimIndexesInstance.PrimaryIndex
-


# IDimIndexesInstance.PrimaryIndex


## Синтаксис


PrimaryIndex: [IDimIndexInstance](../IDimIndexInstance/IDimIndexInstance.htm);


## Описание


Свойство PrimaryIndex возвращает
 данные первичного индекса справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Indxs: IDimIndexesInstance;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Indxs:=Dimen.Indexes;

	    If Indxs.Count<>0 Then

	        If Indxs.PrimaryIndex<>Null Then

	            i:=Indxs.PrimaryIndex.Index.Attributes.Count;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 атрибутов, по которым создан первичный индекс справочника. Идентификатор
 объекта репозитория - «D_TO».


См. также:


[IDimIndexesInstance](IDimIndexesInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
