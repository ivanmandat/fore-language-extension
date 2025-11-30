# IDimIterator.NewIterator

IDimIterator.NewIterator
-


# IDimIterator.NewIterator


## Синтаксис


NewIterator(Offset: Integer): [IDimIterator](IDimIterator.htm);


## Параметры


Offset - смещение
 нового итератора.


## Описание


Метод NewIterator создает новый
 итератор, элементы которого смещены на Offset
 элементов.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    ElemArr: IDimElementArray;

	    Iter, Iter1: IDimIterator;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem:=Dimen.Elements;

	    ElemArr:=Elem.Children(10);

	    Iter:=ElemArr.Iterator;

	    Iter1:=Iter.NewIterator(3);

	End Sub UserProc;


После выполнения примера будут созданы два итератора на базе элементов
 массива «ElemArr». Индексы элементов в итераторе "Iter1" будут
 смещены на "3".


См. также:


[IDimIterator](IDimIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
