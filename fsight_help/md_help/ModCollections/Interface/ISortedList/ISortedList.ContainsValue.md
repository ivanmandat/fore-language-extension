# ISortedList.ContainsValue

ISortedList.ContainsValue
-


# ISortedList.ContainsValue


## Синтаксис


ContainsValue(Value: Variant): Boolean;


## Параметры


Value.
 Значение элемента, наличие которого необходимо проверить.


## Описание


Метод ContainsValue проверяет
 наличие элемента с указанным значением.


## Пример


			Sub UserProc;

Var

    SortList: ISortedList;

    i: Integer;

    s: String;

Begin

    SortList := New SortedList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        SortList.Add("Key_" + Math.RandBetweenI(0, 100).ToString, "Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    If SortList.ContainsValue("Number 50") Then

        s := "Yes";

    Else

        s := "No";

    End If;

End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Yes» если
 в сгенерированном отсортированном массиве будет содержаться элемент со
 значением «Number 50».


См. также:


[ISortedList](ISortedList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
