# IArrayList.BinarySearch

IArrayList.BinarySearch
-


# IArrayList.BinarySearch


## Синтаксис


BinarySearch(Value: Variant; Comparer: [IComparer](../IComparer/IComparer.htm)):
 Integer;


## Параметры


Value. Значение, которое необходимо
 найти;


Comparer. Объект, осуществляющий
 сравнение элементов массива.


## Описание


Метод BinarySearch осуществляет
 двоичный поиск элемента в массиве.


## Комментарии


Поиск осуществляется в отсортированном массиве. В случае удачного поиска
 возвращает номер первого найденного элемента, иначе «-1».


## Пример


			Sub UserProc;

Var

    ArrayL: IArrayList;

    i: Integer;

Begin

    ArrayL := New ArrayList.Create;

    For i := 0 To 100 Do

        ArrayL.Add(Math.RandBetweenI(0, 100));

    End For;

    ArrayL.Sort(Comparer.IntegerComparer);

    i := ArrayL.BinarySearch(34, Comparer.IntegerComparer);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив случайных
 чисел и в нем осуществлен поиск значения «34». В случае удачного поиска
 в переменной «i» будет содержаться номер первого найденного элемента.


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
