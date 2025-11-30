# IDimElementArray.Count

IDimElementArray.Count
-


# IDimElementArray.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 элементов в массиве.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    ElemArr: IDimElementArray;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dimen := MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem := Dimen.Elements;

	    ElemArr := Elem.Children(10);

	    i := ElemArr.Count;

	End Sub UserProc;


После выполнения примера в массиве «ElemArr» будут содержаться все дочерние
 элементы десятого элемента справочника и в переменной «i» будет содержаться
 их количество.


См. также:


[IDimElementArray](IDimElementArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
