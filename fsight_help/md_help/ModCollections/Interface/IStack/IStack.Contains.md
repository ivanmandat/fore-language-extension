# IStack.Contains

IStack.Contains
-


# IStack.Contains


## Синтаксис


Contains(Value: Variant): Boolean;


## Параметры


Value.
 Значение элемента, наличие которого необходимо проверить.


## Описание


Метод Contains проверяет наличие
 элемента с указанным значением.


## Комментарии


Метод возвращает значение True,
 если элемент с указанным значением имеется и False,
 если элемент отсутствует.


## Пример


			Sub UserProc;

Var

    Stack1: IStack;

    i: Integer;

    s: String;

Begin

    Stack1 := New Stack.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        Stack1.Push("Value " + Math.RandBetweenI(0, 100).ToString);

    End For;

    If Stack1.Contains("Value 25") Then

        s := "Yes";

    Else

        s := "No";

    End If;

End Sub UserProc;


После выполнения примера будет создан стек случайных элементов. В переменной
 s будет содержаться значение Yes, если в стеке содержится элемент со значением
 «Value 25».


См. также:


[IStack](IStack.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
