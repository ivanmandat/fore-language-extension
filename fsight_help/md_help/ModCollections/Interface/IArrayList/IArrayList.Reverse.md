# IArrayList.Reverse

IArrayList.Reverse
-


# IArrayList.Reverse


## Синтаксис


Reverse;


## Описание


Метод Reverse устанавливает
 обратный порядок элементов массива.


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

    ArrayL.Reverse;

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив случайных
 чисел, данный массив будет отсортирован по убыванию.


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
