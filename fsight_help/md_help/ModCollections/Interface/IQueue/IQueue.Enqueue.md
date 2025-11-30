# IQueue.Enqueue

IQueue.Enqueue
-


# IQueue.Enqueue


## Синтаксис


Enqueue(Value: Variant);


## Параметры


Value.
 Значение, которое необходимо поместить в очередь.


## Описание


Метод Enqueue помещает элемент
 с указанным значением в очередь.


## Комментарии


Значение помещается в конец очереди.


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
