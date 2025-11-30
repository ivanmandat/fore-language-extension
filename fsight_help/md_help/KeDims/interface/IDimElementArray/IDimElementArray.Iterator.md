# IDimElementArray.Iterator

IDimElementArray.Iterator
-


# IDimElementArray.Iterator


## Синтаксис


Iterator: [IDimIterator](../IDimIterator/IDimIterator.htm);


## Описание


Метод Iterator создает объект,
 содержащий итератор.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    ElemArr: IDimElementArray;

	    Iter: IDimIterator;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem:=Dimen.Elements;

	    ElemArr:=Elem.Children(10);

	    Iter:=ElemArr.Iterator;

	End Sub UserProc;


После выполнения примера в переменной «Iter» будет содержаться итератор.


См. также:


[IDimElementArray](IDimElementArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
