# IHashtable.Clone

IHashtable.Clone
-


# IHashtable.Clone


## Синтаксис


Clone: [IHashtable](IHashtable.htm);


## Описание


Метод Clone создает копию хеш-таблицы.


## Пример


			Sub Main;

Var

    Hash, Hash1: IHashtable;

    i: Integer;

Begin

    Hash := New Hashtable.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        Hash.Add("Key_" + i.ToString, "Value " + Math.RandBetweenI(0, 100).ToString);

    End For;

    Hash1 := Hash.Clone;

    Hash.Clear;

End Sub Main;


После выполнения примера в переменной Hash1 будет содержаться копия
 хеш-таблицы Hash.


См. также:


[IHashtable](IHashtable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
