# IQueue.Contains

IQueue.Contains
-


# IQueue.Contains


## Синтаксис


Contains(Value: Variant): Boolean;


## Параметры


Value.
 Значение элемента, наличие которого необходимо проверить в очереди.


## Описание


Метод Contains проверяет наличие
 в очереди элемента с заданным значением.


## Комментарии


Метод возвращает значение True,
 если элемент с указанным значением имеется и False,
 если элемент отсутствует.


## Пример


			Sub UserProc;

Var

    Que: IQueue;

    i: Integer;

    s: String;

Begin

    Que := New Queue.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        Que.Enqueue("Value " + Math.RandBetweenI(0, 100).ToString);

    End For;

    If Que.Contains("Value 25") Then

        s := "Yes";

    Else

        s := "No";

    End If;

End Sub UserProc;


После выполнения примера будет создана очередь случайных элементов.
 В переменной s будет содержаться значение Yes, если в очереди содержится
 элемент со значением «Value 25».


См. также:


[IQueue](IQueue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
