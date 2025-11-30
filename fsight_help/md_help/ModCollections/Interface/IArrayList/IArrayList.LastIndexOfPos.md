# IArrayList.LastIndexOfPos

IArrayList.LastIndexOfPos
-


# IArrayList.LastIndexOfPos


## Синтаксис


LastIndexOfPos(Value: Variant; StartIndex: Integer):
 Integer;


## Параметры


Value. Значение элемента, которое
 необходимо найти;


StartIndex. Индекс элемента,
 с которого осуществляется поиск.


## Описание


Метод LastIndexOfPos осуществляет
 обратный поиск значения, начиная с заданного элемента.


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

    i := ArrayL.LastIndexOfPos(25, Double.FloorInt(ArrayL.Count / 2));

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив случайных
 целых чисел и осуществлен обратный поиск значения «25» в второй половине
 массива. В переменной «i» будет содержаться номер первого найденного элемента
 в случае удачного поиска.


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
