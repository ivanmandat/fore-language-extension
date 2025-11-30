# ISortedList.GetKeyList

ISortedList.GetKeyList
-


# ISortedList.GetKeyList


## Синтаксис


GetKeyList: [IList](../IList/IList.htm);


## Описание


Метод GetKeyList возвращает
 список ключей массива.


## Пример


			Sub UserProc;

Var

    SortList: ISortedList;

    KeyList: IList;

    i: Integer;

Begin

    SortList := New SortedList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        SortList.Add("Key_" + Math.RandBetweenI(0, 100).ToString, "Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    KeyList := SortList.GetKeyList;

End Sub UserProc;


После выполнения примера в переменной KeyList будет содержаться список
 ключей массива.


См. также:


[ISortedList](ISortedList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
