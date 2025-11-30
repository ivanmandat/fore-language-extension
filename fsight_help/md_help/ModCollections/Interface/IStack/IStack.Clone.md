# IStack.Clone

IStack.Clone
-


# IStack.Clone


## Синтаксис


Clone: [IStack](IStack.htm);


## Описание


Метод Clone создает копию стека.


## Пример


			Sub UserProc;

Var

    Stack1, Stack2: IStack;

    i: Integer;

Begin

    Stack1 := New Stack.Create;

    Stack2 := New Stack.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        Stack1.Push("Value " + Math.RandBetweenI(0, 100).ToString);

    End For;

    Stack2 := Stack1.Clone;

    Stack1.Clear;

End Sub UserProc;


После выполнения примера в стеке Stack2 будет содержаться копия стека
 Stack1.


См. также:


[IStack](IStack.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
