# IHashtable.ContainsKey

IHashtable.ContainsKey
-


# IHashtable.ContainsKey


## Синтаксис


ContainsKey(Key: Variant): Boolean;


## Параметры


Key. Ключ
 элемента.


## Описание


Метод ContainsKey осуществляет
 проверку наличия элемента с указанным ключом.


## Пример


			Sub Main;

Var

    Hash: IHashtable;

    i: Integer;

    s: String;

Begin

    Hash := New Hashtable.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        Hash.Add("Key_" + Math.RandBetweenI(0, 100).ToString, "Value " + Math.RandBetweenI(0, 100).ToString);

    End For;

    If Hash.ContainsKey("Key_" + Math.RandBetweenI(0, Hash.Count).ToString) Then

        s := "Yes";

    Else

        s := "No";

    End If;

End Sub Main;


После выполнения примера будет сгенерирована хеш-таблица и в переменной
 s будет содержаться значение Yes, если в ней содержится элемент со случайным
 ключом.


См. также:


[IHashtable](IHashtable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
