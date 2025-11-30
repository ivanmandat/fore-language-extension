# IArrayList.LastIndexOfRange

IArrayList.LastIndexOfRange
-


# IArrayList.LastIndexOfRange


## Синтаксис


LastIndexOfRange(Value: Variant; StartIndex: Integer;
 Count: Integer): Integer;


## Параметры


Value. Значение элемента, которое
 необходимо найти;


StartIndex. Индекс элемента,
 с которого осуществляется поиск;


Count. Количество элементов
 диапазона, в котором будет производиться поиск.


## Описание


Метод LastIndexOfRange осуществляет
 обратный поиск элемента в заданном диапазоне.


## Комментарии


Метод возвращает индекс элемента в случае удачного поиска, и -1, если
 значение не найдено.


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

    i := ArrayL.LastIndexOfRange(25, 10, ArrayL.Count - 20);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив случайных
 чисел и осуществлен обратный поиск значения «25» во всем массиве за исключением
 первых и последних 10 элементов. В случае удачного поиска в переменной
 «i» будет содержаться индекс найденного элемента.


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
