# IList.Add

IList.Add
-


# IList.Add


## Синтаксис


Add(Value: Variant): Integer;


## Параметры


Value.
 Значение, которое необходимо добавить.


## Описание


Метод Add осуществляет добавление
 элемента и возвращает его индекс.


## Пример


			Sub UserProc;

Var

    ArrayL: IArrayList;

    i: Integer;

Begin

    ArrayL := New ArrayList.Create;

    For i := 0 To Math.RandBetweenI(0, 1000) Do

        ArrayL.Add(Math.RandBetween(0, 100));

    End For;

    i := ArrayL.Count;

End Sub UserProc;


После выполнения примера будет создан динамический массив со случайными
 значениями и в переменной «i» будет содержаться его размер.


См. также:


[IList](IList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
