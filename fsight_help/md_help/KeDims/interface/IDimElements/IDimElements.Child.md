# IDimElements.Child

IDimElements.Child
-


# IDimElements.Child


## Синтаксис


Child(Element: Integer; ChildIndex: Integer): Integer;


## Параметры


Element — индекс элемента-родителя.


ChildIndex — индекс дочернего
 элемента относительно родительского элемента.


## Описание


Свойство Child возвращает индекс
 элемента в справочнике, являющегося дочерним объектом элемента Element
 и имеющего индекс ChildIndex,
 относительно корневого элемента.


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

	    i:=Elem.Child(10,Elem.ChildrenCount(10)-1);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться индекс элемента
 в справочнике, являющегося последним дочерним объектом десятого элемента
 справочника. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
