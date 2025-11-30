# IStringMap.Item

IStringMap.Item
-


# IStringMap.Item


## Синтаксис


Item(Key: String): String;


## Параметры


Key. Ключ
 элемента.


## Описание


Свойство Item определяет значение
 элемента с указанным ключом.


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

    s := StrMap.Item(StrMap.Key(StrMap.Count - 1));

End Sub UserProc;


После выполнения примера будет сгенерирована карта строк, элементы с
 повторяющимися ключами перезаписываются и в переменной s будет содержаться
 значение последнего элемента.


См. также:


[IStringMap](IStringMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
