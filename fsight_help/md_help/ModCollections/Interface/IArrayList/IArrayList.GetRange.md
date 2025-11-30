# IArrayList.GetRange

IArrayList.GetRange
-


# IArrayList.GetRange


## Синтаксис


GetRange(Index: Integer; Count: Integer): [IArrayList](IArrayList.htm);


## Параметры


Index. Индекс элемента, начиная
 с которого необходимо получить диапазон;


Count. Количество элементов
 диапазона массива, которые необходимо получить.


## Описание


Метод GetRange возвращает диапазон
 массива в соответствии с указанными параметрами.


## Пример


			Sub UserProc;

Var

    ArrayL, ArrayL1: IArrayList;

    i: Integer;

Begin

    ArrayL := New ArrayList.Create;

    ArrayL1 := New ArrayList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        ArrayL.Add(Math.RandBetweenI(0, 100));

    End For;

    ArrayL1 := ArrayL.GetRange(10, ArrayL.Count - 20);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив «ArrayL».
 В массиве «ArrayL1» будет содержаться копия массива «ArrayL» за исключение
 первых и последних 10 элементов.


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
