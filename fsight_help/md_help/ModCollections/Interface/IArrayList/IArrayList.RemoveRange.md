# IArrayList.RemoveRange

IArrayList.RemoveRange
-


# IArrayList.RemoveRange


## Синтаксис


RemoveRange(Index: Integer; Count: Integer);


## Параметры


Index. Индекс элемента, с которого
 начинается удаляемый диапазон;


Count. Количество элементов
 в диапазоне, который необходимо удалить.


## Описание


Метод RemoveRange осуществляет
 удаление диапазона элементов.


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

    ArrayL.RemoveRange(ArrayL.Count - 10, 10);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив случайных
 чисел и из него удалены последние 10 элементов.


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
