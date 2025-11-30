# IComparerClass.IntegerComparer

IComparerClass.IntegerComparer
-


# IComparerClass.IntegerComparer


## Синтаксис


IntegerComparer: [IComparer](../IComparer/IComparer.htm);


## Описание


Свойство IntegerComparer возвращает
 объект для сравнения элементов целого типа.


## Пример


			Sub UserProc;

Var

    ArrayL: IArrayList;

    i: Integer;

Begin

    ArrayL := New ArrayList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        ArrayL.Add(Math.RandBetweenI(0, 100));

    End For;

    ArrayL.Sort(Comparer.IntegerComparer);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив случайных
 целых чисел, данный массив будет отсортирован по возрастанию.


См. также:


[IComparerClass](IComparerClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
