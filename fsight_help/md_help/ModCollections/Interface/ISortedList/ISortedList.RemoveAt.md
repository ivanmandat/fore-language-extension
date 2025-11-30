# ISortedList.RemoveAt

ISortedList.RemoveAt
-


# ISortedList.RemoveAt


## Синтаксис


RemoveAt(Index: Integer);


## Параметры


Index.
 Индекс элемента, который необходимо удалить.


## Описание


Метод RemoveAt удаляет элемент
 с указанным индексом.


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

    SortList.RemoveAt(SortList.Count - 1);

End Sub UserProc;


После выполнения примера будет удален последний элемент массива.


См. также:


[ISortedList](ISortedList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
