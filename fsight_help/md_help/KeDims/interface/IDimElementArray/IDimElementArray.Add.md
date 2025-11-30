# IDimElementArray.Add

IDimElementArray.Add
-


# IDimElementArray.Add


## Синтаксис


Add(Element: Integer): Boolean;


## Параметры


Element — индекс
 элемента в справочнике.


## Описание


Метод Add осуществляет добавление
 элемента справочника с индексом Element
 и возвращает True в случае удачного
 добавления.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    ElemArr: IDimElementArray;

	    b: Boolean;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem:=Dimen.Elements;

	    ElemArr:=Elem.Children(10);

	    b:=ElemArr.Add(Dimen.Elements.Elements.Element(31));

	End Sub UserProc;


После выполнения примера в переменной «b» будет содержаться «True»,
 если добавление 31 элемента справочника в массив «ElemArr» прошло удачно.


См. также:


[IDimElementArray](IDimElementArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
