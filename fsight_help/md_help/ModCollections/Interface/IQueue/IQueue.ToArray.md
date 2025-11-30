# IQueue.ToArray

IQueue.ToArray
-


# IQueue.ToArray


## Синтаксис


ToArray: Array;


## Описание


Метод ToArray осуществляет преобразование
 очереди в обычный массив.


## Пример


			Sub UserProc;

Var

    Que: IQueue;

    i: Integer;

    Arr: Array Of Variant;

Begin

    Que := New Queue.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        Que.Enqueue("Value " + Math.RandBetweenI(0, 100).ToString);

    End For;

    Arr := Que.ToArray;

End Sub UserProc;


После выполнения примера сгенерированная очередь будет преобразована
 в массив Arr.


См. также:


[IQueue](IQueue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
