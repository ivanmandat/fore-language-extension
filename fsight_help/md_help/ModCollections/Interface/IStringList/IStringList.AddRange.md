# IStringList.AddRange

IStringList.AddRange
-


# IStringList.AddRange


## Синтаксис


AddRange(Collection: [ICollection](../ICollection/ICollection.htm));


## Параметры


Collection. Коллекция
 элементов, которую необходимо добавить в массив.


## Описание


Метод AddRange добавляет указанную
 коллекцию элементов в конец массива.


## Пример


			Sub UserProc;

Var

    StrL1, StrL2: IStringList;

    i: Integer;

Begin

    StrL1 := New StringList.Create;

    StrL2 := New StringList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        StrL1.Add("Значение " + Math.RandBetweenI(0, 100).ToString);

    End For;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        StrL2.Add("Значение " + Math.RandBetweenI(100, 200).ToString);

    End For;

    StrL1.AddRange(StrL2);

End Sub UserProc;


При выполнении примера будут сгенерированы два динамических массива
 строк. Значения второго массива будут добавлены в конец первого.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
