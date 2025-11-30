# IArrayList.BinarySearchRange

IArrayList.BinarySearchRange
-


# IArrayList.BinarySearchRange


## Синтаксис


BinarySearchRange(


Value: Variant;


Comparer: [IComparer](../IComparer/IComparer.htm);


Index: Integer;


Count: Integer): Integer;


## Параметры


Value. Значение, которое необходимо
 найти;


Comparer. Объект, осуществляющий
 сравнение элементов массива;


Index. Начальный индекс диапазона,
 в котором будет производиться поиск;


Count. Количество элементов,
 среди которых будет производиться поиск.


## Описание


Метод BinarySearchRange осуществляет
 двоичный поиск элемента в диапазоне массива.


## Комментарии


Поиск осуществляется в отсортированном диапазоне массива. В случае удачного
 поиска возвращает номер первого найденного элемента, иначе «-1».


## Пример


			Sub UserProc;

Var

    ArrayL: IArrayList;

    i: Integer;

Begin

    ArrayL := New ArrayList.Create;

    For i := 0 To 100 Do

        ArrayL.Add(Math.RandBetweenI(0, 50));

    End For;

    ArrayL.Sort(Comparer.IntegerComparer);

    i := ArrayL.BinarySearchRange(5, Comparer.IntegerComparer, 10, ArrayL.Count - 20);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив случайных
 чисел. В средней части массива, за исключением первых и последних 10 элементов,
 будет осуществлен поиск значения «5». В случае удачного поиска в переменной
 «i» будет содержаться номер первого найденного элемента.


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
