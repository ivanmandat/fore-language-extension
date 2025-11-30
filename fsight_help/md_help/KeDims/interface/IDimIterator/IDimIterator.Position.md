# IDimIterator.Position

IDimIterator.Position
-


# IDimIterator.Position


## Синтаксис


Position: Integer;


## Описание


Свойство Position возвращает
 позицию курсора в итераторе.


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

	    For i:=0 To Math.RandBetweenI(0,Iter.DimElementArray.Count) Do

	        Iter.Next;

	    End For;

	    i:=Iter.Position;

	End Sub UserProc;


После выполнения примера будет создан итератор, на базе массива элементов
 «ElemArr». Курсор итератора будет установлен на случайный элемент и в
 переменной «i» будет содержаться номер этого элемента.


См. также:


[IDimIterator](IDimIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
