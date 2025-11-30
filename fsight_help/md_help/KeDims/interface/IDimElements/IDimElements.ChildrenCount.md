# IDimElements.ChildrenCount

IDimElements.ChildrenCount
-


# IDimElements.ChildrenCount


## Синтаксис


ChildrenCount(Element: Integer): Integer;


## Параметры


Element - индекс
 элемента справочника.


## Описание


Свойство ChildrenCount возвращает
 количество дочерних элементов у элемента с индексом Element.


## Комментарии


Данное свойство возвращает количество непосредственных дочерних элементов,
 расположенных на один уровень ниже элемента Element.
 Для получения общего количества дочерних элементов, расположенных на всех
 уровнях ниже уровня элемента Element,
 используйте свойство [AllChildrenCount](IDimElements.AllChildrenCount.htm).


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

	    i:=Elem.ChildrenCount(10);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 дочерних элементов у десятого элемента справочника. Идентификатор объекта
 репозитория - «D_TO».


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
