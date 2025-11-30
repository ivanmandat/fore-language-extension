# IStringMap.ContainsKey

IStringMap.ContainsKey
-


# IStringMap.ContainsKey


## Синтаксис


ContainsKey(Key: String): Boolean;


## Параметры


Key. Ключ
 элемента, наличие которого необходимо проверить.


## Описание


Метод ContainsKey осуществляет
 проверку наличия элемента с указанным ключом.


## Пример


			Sub UserProc;

Var

    StrMap: IStringMap;

    i: Integer;

    s: String;

Begin

    StrMap := New StringMap.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        StrMap.Add("Key_" + Math.RandBetweenI(0, 100).ToString, "Value " + Math.RandBetweenI(0, 100).ToString);

    End For;

    If StrMap.ContainsKey("Key_50") Then

        s := "Yes";

    Else

        s := "No";

    End If;

End Sub UserProc;


После выполнения примера будет сгенерирована карта строк случайного
 размера. Элементы с повторяющимися ключами будут перезаписываться. В переменной
 s будет содержаться значение Yes, если элемент с ключом "Key_50"
 присутствует в карте.


См. также:


[IStringMap](IStringMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
