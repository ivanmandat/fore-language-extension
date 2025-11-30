# IStack.ToArray

IStack.ToArray
-


# IStack.ToArray


## Синтаксис


ToArray: Array;


## Описание


Метод ToArray осуществляет преобразование
 стека в обычный массив.


## Пример


			Sub UserProc;

Var

    Stack1: IStack;

    i: Integer;

    Arr: Array Of Variant;

Begin

    Stack1 := New Stack.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        Stack1.Push("Value " + Math.RandBetweenI(0, 100).ToString);

    End For;

    Arr := Stack1.ToArray;

End Sub UserProc;


После выполнения примера сгенерированный стек будет преобразован в массив
 Arr.


См. также:


[IStack](IStack.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
