# IStringList.InsertRange

IStringList.InsertRange
-


# IStringList.InsertRange


## Синтаксис


InsertRange(Index: Integer; Collection: [ICollection](../ICollection/ICollection.htm));


## Параметры


Index. Индекс позиции, в которую
 необходимо добавить коллекцию;


Collection. Коллекция элементов,
 которую необходимо добавить в массив.


## Описание


Метод InsertRange осуществляет
 вставку коллекции элементов в заданную позицию.


## Пример


			Sub UserProc;

Var

    StrL, StrL1: IStringList;

    i: Integer;

Begin

    StrL := New StringList.Create;

    StrL1 := New StringList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        StrL.Add("Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        StrL1.Add("Number " + Math.RandBetweenI(100, 200).ToString);

    End For;

    StrL.InsertRange(Double.FloorInt(StrL.Count / 2), StrL1 As ICollection);

End Sub UserProc;


После выполнения примера будут сгенерированы два динамических массива
 строк и значения второго будут вставлены в середину первого массива.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
