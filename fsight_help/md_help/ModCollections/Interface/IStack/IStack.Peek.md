# IStack.Peek

IStack.Peek
-


# IStack.Peek


## Синтаксис


Peek: Variant;


## Описание


Метод Peek извлекает значение
 последнего, помещенного в стек, элемента.


## Комментарии


После извлечения элемент не удаляется из стека.


## Пример


			Sub UserProc;

Var

    Stack1: IStack;

    i: Integer;

    v: Variant;

Begin

    Stack1 := New Stack.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        Stack1.Push("Value " + Math.RandBetweenI(0, 100).ToString);

    End For;

    v := Stack1.Peek;

End Sub UserProc;


После выполнения примера будет создан стек случайных элементов и в переменной
 v будет содержаться значение последнего, помещенного в стек, элемента.


См. также:


[IStack](IStack.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
