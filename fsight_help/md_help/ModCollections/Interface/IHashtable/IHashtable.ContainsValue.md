# IHashtable.ContainsValue

IHashtable.ContainsValue
-


# IHashtable.ContainsValue


## Синтаксис


ContainsValue(Value: Variant): Boolean;


## Параметры


Value. Значение
 элемента.


## Описание


Метод ContainsValue осуществляет
 проверку наличия элемента с заданным значением.


## Пример


			Sub UserProc;

Var

    Hash: IHashtable;

    i: Integer;

    s: String;

Begin

    Hash := New Hashtable.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        Hash.Add("Key_" + Math.RandBetweenI(0, 100).ToString, "Value " + Math.RandBetweenI(0, 100).ToString);

    End For;

    If Hash.ContainsValue("Value 25") Then

        s := "Yes";

    Else

        s := "No";

    End If;

End Sub UserProc;


После выполнения примера будет сгенерирована хеш-таблица и в переменной
 s будет содержаться значение Yes, если в ней содержится элемент со значением
 «Value 25».


См. также:


[IHashtable](IHashtable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
