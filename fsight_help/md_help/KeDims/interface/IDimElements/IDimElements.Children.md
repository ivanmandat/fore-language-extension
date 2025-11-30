# IDimElements.Children

IDimElements.Children
-


# IDimElements.Children


## Синтаксис


Children(Element: Integer): [IDimElementArray](../IDimElementArray/IDimElementArray.htm);


## Параметры


Element — индекс
 элемента справочника.


## Описание


Свойство Children возвращает
 объект, содержащий массив дочерних объектов элемента с индексом Element.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    ElemArr: IDimElementArray;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem:=Dimen.Elements;

	    ElemArr:=Elem.Children(10);

	    i:=ElemArr.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будут содержаться количество
 дочерних элементов десятого элемента справочника. Идентификатор объекта
 репозитория - «D_TO».


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
