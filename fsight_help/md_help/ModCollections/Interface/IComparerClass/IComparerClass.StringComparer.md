# IComparerClass.StringComparer

IComparerClass.StringComparer
-


# IComparerClass.StringComparer


## Синтаксис


StringComparer: [IComparer](../IComparer/IComparer.htm);


## Описание


Свойство StringComparer возвращает
 объект для сравнения элементов строкового типа.


## Комментарии


Сравнение происходит с учётом длины и регистра содержимого элементов.


## Пример


			Sub UserProc;

Var

    Com: IComparer;

    i, i1, i2, i3: Integer;

Begin

    Com := Comparer.StringComparer;

    i := Com.Compare("a", "A");

    i1 := Com.Compare("aa", "A");

    i2 := Com.Compare("a", "AA");

    i3 := Com.Compare("aA", "Aa");

End Sub UserProc;


После выполнения примера в переменных «i, i1, i2, i3» будут содержаться
 значения «-1, 1, -1, -1» соответственно.


См. также:


[IComparerClass](IComparerClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
