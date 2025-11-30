# IDimElements.Count

IDimElements.Count
-


# IDimElements.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 элементов справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem:=Dimen.Elements;

	    i:=Elem.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 элементов справочника. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
