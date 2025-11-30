# IArrayList.SortRange

IArrayList.SortRange
-


# IArrayList.SortRange


## Синтаксис


SortRange(Index: Integer; Count: Integer; Comparer:
 [IComparer](../IComparer/IComparer.htm));


## Параметры


Index. Индекс элемента, с которого
 начинается диапазон;


Count. Количество элементов
 в диапазоне;


Comparer. Объект, осуществляющий
 сравнение элементов массива.


## Описание


Метод SortRange осуществляет
 сортировку диапазона массива.


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

    ArrayL.SortRange(10, ArrayL.Count - 20, Comparer.IntegerComparer);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив случайных
 чисел, средняя часть массива, за исключением первых и последних 10 элементов,
 будет отсортирована по возрастанию.


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
