# IArrayList.ReverseRange

IArrayList.ReverseRange
-


# IArrayList.ReverseRange


## Синтаксис


ReverseRange(Index: Integer; Count: Integer);


## Параметры


Index. Индекс элемента, с которого
 начинается диапазон;


Count. Количество элементов
 диапазона.


## Описание


Метод ReverseRange устанавливает
 обратный порядок диапазона элементов массива.


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

    ArrayL.ReverseRange(Double.FloorInt(ArrayL.Count / 2), Double.FloorInt(ArrayL.Count / 2) + 1);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строк,
 вторая половина массива будет обращена.


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
