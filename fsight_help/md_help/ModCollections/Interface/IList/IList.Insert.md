# IList.Insert

IList.Insert
-


# IList.Insert


## Синтаксис


Insert(Index: Integer; Value: Variant);


## Параметры


Index. Индекс позиции, в которую
 необходимо добавить элемент.


Value. Значение элемента, которое
 необходимо добавить.


## Описание


Метод Insert осуществляет добавление
 элемента с указанным значением в указанную позицию.


## Пример


			Sub UserProc;

Var

    ArrayL: IArrayList;

    i: Integer;

Begin

    ArrayL := New ArrayList.Create;

    For i := 0 To Math.RandBetweenI(0, 100) Do

        ArrayL.Add(Math.RandBetweenI(0, 100));

    End For;

    ArrayL.Insert(0, "Первый");

End Sub UserProc;


После выполнения примера будет создан динамический массив со случайными
 значениями и в первую позицию будет добавлен еще один элемент с заданным
 значением.


См. также:


[IList](IList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
