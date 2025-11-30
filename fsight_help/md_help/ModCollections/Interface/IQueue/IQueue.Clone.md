# IQueue.Clone

IQueue.Clone
-


# IQueue.Clone


## Синтаксис


Clone: [IQueue](IQueue.htm);


## Описание


Метод Clone создает копию очереди.


## Пример


			Sub UserProc;

Var

    Que, Que1: IQueue;

    i: Integer;

Begin

    Que := New Queue.Create;

    Que1 := New Queue.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        Que.Enqueue("Value " + Math.RandBetweenI(0, 100).ToString);

    End For;

    Que1 := Que.Clone;

    Que.Clear;

End Sub UserProc;


После выполнения примера в очереди Que1 будет содержаться копия очереди
 Que.


См. также:


[IQueue](IQueue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
