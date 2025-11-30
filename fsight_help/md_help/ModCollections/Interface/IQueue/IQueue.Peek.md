# IQueue.Peek

IQueue.Peek
-


# IQueue.Peek


## Синтаксис


Peek: Variant;


## Описание


Метод Peek извлекает из очереди
 значение элемента, помещенное первым.


## Комментарии


После извлечения элемент не удаляется из очереди.


## Пример


			Sub UserProc;

Var

    Que: IQueue;

    i: Integer;

    v: Variant;

Begin

    Que := New Queue.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        Que.Enqueue("Value " + Math.RandBetweenI(0, 100).ToString);

    End For;

    v := Que.Peek;

End Sub UserProc;


После выполнения примера будет создана очередь случайных элементов и
 в переменной v будет содержаться значение первого помещенного в очередь
 элемента.


См. также:


[IQueue](IQueue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
