# ISortedList.Clone

ISortedList.Clone
-


# ISortedList.Clone


## Синтаксис


Clone: [ISortedList](ISortedList.htm);


## Описание


Метод Clone создает копию массива.


## Пример


			Sub UserProc;

Var

    SortList, SortList1: ISortedList;

    i: Integer;

Begin

    SortList := New SortedList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        SortList.Add(Math.RandBetweenI(0, 100), "Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    SortList1 := SortList.Clone;

End Sub UserProc;


После выполнения примера в массиве SortList1 будет содержаться копия
 массива SortList.


См. также:


[ISortedList](ISortedList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
