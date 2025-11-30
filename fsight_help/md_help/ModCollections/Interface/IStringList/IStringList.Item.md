# IStringList.Item

IStringList.Item
-


# IStringList.Item


## Синтаксис


Item(Index: Integer): String;


## Параметры


Index. Индекс
 элемента.


## Описание


Свойство Item возвращает значение
 элемента с указанным индексом.


## Пример


			Sub UserProc;

Var

    StrL: IStringList;

    i: Integer;

    s: String;

Begin

    StrL := New StringList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        StrL.Add("Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    s := StrL.Item(Math.RandBetweenI(0, StrL.Count));

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строк
 и в переменной s будет содержаться случайный элемент массива.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
