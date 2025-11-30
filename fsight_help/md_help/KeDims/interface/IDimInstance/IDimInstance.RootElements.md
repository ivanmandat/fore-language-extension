# IDimInstance.RootElements

IDimInstance.RootElements
-


# IDimInstance.RootElements


## Синтаксис


RootElements: [IDimElementArray](../IDimElementArray/IDimElementArray.htm);


## Описание


Свойство RootElements возвращает
 объект, содержащий массив элементов справочника, находящихся на нулевом
 уровне.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    RootElem: IDimElementArray;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    RootElem:=Dimen.RootElements;

	    i:=RootElem.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 элементов справочника, находящихся на нулевом уровне. Идентификатор объекта
 репозитория - «D_TO».


См. также:


[IDimInstance](IDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
