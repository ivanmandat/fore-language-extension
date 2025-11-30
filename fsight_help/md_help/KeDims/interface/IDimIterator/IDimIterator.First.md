# IDimIterator.First

IDimIterator.First
-


# IDimIterator.First


## Синтаксис


First;


## Описание


Метод First осуществляет переход
 на начало итератора. После вызова метода, курсор устанавливается на элемент
 с индексом "-1".


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    ElemArr: IDimElementArray;

	    Iter: IDimIterator;

	Begin

	    MB := MetabaseClass.Active;

	    Dimen := MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem := Dimen.Elements;

	    ElemArr := Elem.Children(10);

	    Iter := ElemArr.Iterator;

	    Iter.First;

	    While Iter.Next Do

	        Debug.WriteLine(Elem.Name(Iter.Element));

	    End While;

	End Sub UserProc;


После выполнения примера будет создан итератор на базе массива элементов
 «ElemArr». При проходе по элементам итератора, в консоль среды разработки
 будут выводиться наименования соответствующих элементов справочника.


См. также:


[IDimIterator](IDimIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
