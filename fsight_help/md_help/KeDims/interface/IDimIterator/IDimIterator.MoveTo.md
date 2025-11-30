# IDimIterator.MoveTo

IDimIterator.MoveTo
-


# IDimIterator.MoveTo


## Синтаксис


MoveTo(Element: Integer): Boolean;


## Параметры


Element — индекс
 элемента в массиве.


## Описание


Метод MoveTo осуществляет установку
 курсора итератора на элемент справочника с индексом Element
 и возвращает True в случае удачной
 установки.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    ElemArr: IDimElementArray;

	    Iter: IDimIterator;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem:=Dimen.Elements;

	    ElemArr:=Elem.Children(10);

	    Iter:=ElemArr.Iterator;

	    If Iter.MoveTo(35) Then

	        i:=Iter.Position;

	    Else

	        i:=-1;

	    End If;

	End Sub UserProc;


После выполнения примера будет создан итератор, на базе массива элементов
 «ElemArr». Если в итератор попадает элемент справочника с индексом «35»
 то курсор будет установлен на этот элемент и в переменной «i» будет содержаться
 его номер.


См. также:


[IDimIterator](IDimIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
