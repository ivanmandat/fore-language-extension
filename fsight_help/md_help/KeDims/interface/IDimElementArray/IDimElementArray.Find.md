# IDimElementArray.Find

IDimElementArray.Find
-


# IDimElementArray.Find


## Синтаксис


Find(Element: Integer): Integer;


## Параметры


Element — индекс
 элемента в массиве.


## Описание


Метод Find осуществляет поиск
 элемента справочника с индексом Element
 в массиве. В случае удачного поиска возвращает индекс элемента в массива,
 иначе «-1».


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

	    i:=ElemArr.Find(96);

	End Sub UserProc;


После выполнения примера будет осуществлен поиск элемента справочника
 с индексом «96» в массиве «ElemArr». В случае удачного поиска в переменной
 «i» будет содержаться индекс элемента массива, который соответствует указанному
 элементу справочника.


См. также:


[IDimElementArray](IDimElementArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
