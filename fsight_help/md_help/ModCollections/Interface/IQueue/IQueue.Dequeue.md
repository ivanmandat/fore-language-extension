# IQueue.Dequeue

IQueue.Dequeue
-


# IQueue.Dequeue


## Синтаксис


Dequeue: Variant;


## Описание


Метод Dequeue извлекает из очереди
 значение элемента, помещённого первым.


## Комментарии


После извлечения элемент удаляется из очереди.


## Пример


			Sub UserProc;

Var

    Que: IQueue;

    i: Integer;

Begin

    Que := New Queue.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        Que.Enqueue("Value " + Math.RandBetweenI(0, 100).ToString);

    End For;

    For i := 0 To Math.RandBetweenI(0, 50) Do

        Que.Dequeue;

    End For;

    i := Que.Count;

End Sub UserProc;


После выполнения примера будет создана очередь случайных элементов,
 часть элементов будет извлечена и в переменной i будет содержаться количество
 элементов, оставшихся в очереди.


См. также:


[IQueue](IQueue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
