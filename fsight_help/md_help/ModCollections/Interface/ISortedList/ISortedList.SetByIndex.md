# ISortedList.SetByIndex

ISortedList.SetByIndex
-


# ISortedList.SetByIndex


## Синтаксис


SetByIndex(Index: Integer; Value: Variant);


## Параметры


Index. Индекс элемента, значение
 которого необходимо изменить.


Value. Новое значение элемента,
 которое необходимо установить.


## Описание


Метод SetByIndex изменяет значение
 элемента.


## Пример


			Sub UserProc;

Var

    SortList: ISortedList;

    i: Integer;

Begin

    SortList := New SortedList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        SortList.Add("Key_" + Math.RandBetweenI(0, 100).ToString, "Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    SortList.SetByIndex(SortList.Count - 1, "Last Element");

End Sub UserProc;


После выполнения примера будет изменено значение последнего элемента.


См. также:


[ISortedList](ISortedList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
