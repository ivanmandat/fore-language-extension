# ISortedList.GetKey

ISortedList.GetKey
-


# ISortedList.GetKey


## Синтаксис


GetKey(Index: Integer): Variant;


## Параметры


Index. Индекс элемента, ключ
 которого необходимо получить.


## Описание


Метод GetKey возвращает ключ
 элемента с указанным индексом.


## Пример


			Sub UserProc;

Var

    SortList: ISortedList;

    i: Integer;

    v: Variant;

Begin

    SortList := New SortedList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        SortList.Add("Key_" + Math.RandBetweenI(0, 100).ToString, "Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    v := SortList.GetKey(0);

End Sub UserProc;


После выполнения примера в переменной v будет содержаться ключ первого
 элемента массива.


См. также:


[ISortedList](ISortedList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
