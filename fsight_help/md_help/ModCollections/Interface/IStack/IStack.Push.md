# IStack.Push

IStack.Push
-


# IStack.Push


## Синтаксис


Push(Value: Variant);


## Параметры


Value.
 Значение, которое необходимо поместить в стек.


## Описание


Метод Push помещает указанное
 значение в начало стека.


## Пример


			Sub UserProc;

Var

    Stack1: IStack;

    i: Integer;

Begin

    Stack1 := New Stack.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        Stack1.Push("Value " + Math.RandBetweenI(0, 100).ToString);

    End For;

    For i := 0 To Math.RandBetweenI(0, 50) Do

        Stack1.Pop;

    End For;

    i := Stack1.Count;

End Sub UserProc;


После выполнения примера будет создан стек случайных элементов, часть
 элементов будет извлечена и в переменной i будет содержаться количество
 элементов, оставшихся в стеке.


См. также:


[IStack](IStack.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
