# IComparerClass.StringCaseInsensitiveComparer

IComparerClass.StringCaseInsensitiveComparer
-


# IComparerClass.StringCaseInsensitiveComparer


## Синтаксис


StringCaseInsensitiveComparer: [IComparer](../IComparer/IComparer.htm);


## Описание


Свойство StringCaseInsensitiveComparer
 возвращает объект для сравнения элементов строкового типа.


## Комментарии


Сравнение происходит с учётом длины и без учета регистра содержимого
 элементов.


## Пример


			Sub UserProc;

Var

    Com: IComparer;

    i, i1, i2, i3: Integer;

Begin

    Com := Comparer.StringCaseInsensitiveComparer;

    i := Com.Compare("a", "A");

    i1 := Com.Compare("aa", "A");

    i2 := Com.Compare("a", "AA");

    i3 := Com.Compare("aA", "Aa");

End Sub UserProc;


После выполнения примера в переменных «i, i1, i2, i3» будут содержаться
 значения «0, 1, -1, 0» соответственно.


См. также:


[IComparerClass](IComparerClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
