# IComparerClass.DateTimeComparer

IComparerClass.DateTimeComparer
-


# IComparerClass.DateTimeComparer


## Синтаксис


DateTimeComparer: [IComparer](../IComparer/IComparer.htm);


## Описание


Свойство DateTimeComparer возвращает
 объект для сравнения элементов типа DateTime.


## Пример


			Sub UserProc;

Var

    Com: IComparer;

    d, d1: DateTime;

    i, i1, i2: Integer;

Begin

    Com := Comparer.DateTimeComparer;

    d := DateTime.Compose(2000, 01, 01, 0, 0, 0, 0);

    d1 := DateTime.Compose(3000, 01, 01, 0, 0, 0, 0);

    i := Com.Compare(d, DateTime.Now);

    i1 := Com.Compare(d1, DateTime.Now);

    i2 := Com.Compare(d, d1);

End Sub UserProc;


После выполнения примера в переменных «i, i1, i2» будут содержаться
 значения «-1, 1, -1» соответственно.


См. также:


[IComparerClass](IComparerClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
