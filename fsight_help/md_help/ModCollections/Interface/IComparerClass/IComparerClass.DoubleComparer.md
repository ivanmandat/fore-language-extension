# IComparerClass.DoubleComparer

IComparerClass.DoubleComparer
-


# IComparerClass.DoubleComparer


## Синтаксис


DoubleComparer: [IComparer](../IComparer/IComparer.htm);


## Описание


Свойство DoubleComparer возвращает
 объект для сравнения элементов вещественного типа.


## Пример


			Sub UserProc;

Var

    ArrayL: IArrayList;

    i: Integer;

Begin

    ArrayL := New ArrayList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        ArrayL.Add(Math.RandBetween(0, 100));

    End For;

    ArrayL.Sort(Comparer.DoubleComparer);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив случайных
 вещественных чисел, данный массив будет отсортирован по возрастанию.


См. также:


[IComparerClass](IComparerClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
