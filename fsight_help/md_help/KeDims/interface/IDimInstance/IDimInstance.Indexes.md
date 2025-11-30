# IDimInstance.Indexes

IDimInstance.Indexes
-


# IDimInstance.Indexes


## Синтаксис


Indexes: [IDimIndexesInstance](../IDimIndexesInstance/IDimIndexesInstance.htm);


## Описание


Свойство Indexes возвращает
 объект, содержащий коллекцию индексов справочника.


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

	        i:=Indxs.Item(0).Index.Attributes.Count;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 атрибутов, по которым создан первый индекс справочника. Идентификатор
 объекта репозитория - «D_TO».


См. также:


[IDimInstance](IDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
