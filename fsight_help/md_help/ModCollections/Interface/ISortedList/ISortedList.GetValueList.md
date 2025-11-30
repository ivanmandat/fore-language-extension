# ISortedList.GetValueList

ISortedList.GetValueList
-


# ISortedList.GetValueList


## Синтаксис


GetValueList: [IList](../IList/IList.htm);


## Описание


Метод GetValueList возвращает
 список значений массива.


## Пример


			Sub UserProc;

Var

    SortList: ISortedList;

    ValList: IList;

    i: Integer;

Begin

    SortList := New SortedList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        SortList.Add("Key_" + Math.RandBetweenI(0, 100).ToString, "Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    ValList := SortList.GetValueList;

End Sub UserProc;


После выполнения примера в переменной ValList будет содержаться список
 значений массива.


См. также:


[ISortedList](ISortedList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
