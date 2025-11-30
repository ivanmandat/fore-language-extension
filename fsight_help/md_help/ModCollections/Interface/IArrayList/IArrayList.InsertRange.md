# IArrayList.InsertRange

IArrayList.InsertRange
-


# IArrayList.InsertRange


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

    ArrayL, ArrayL1: IArrayList;

    i: Integer;

Begin

    ArrayL := New ArrayList.Create;

    ArrayL1 := New ArrayList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        ArrayL.Add(Math.RandBetweenI(0, 100));

    End For;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        ArrayL1.Add(Math.RandBetweenI(0, 100));

    End For;

    ArrayL.InsertRange(Double.FloorInt(ArrayL.Count / 2), ArrayL1 As ICollection);

End Sub UserProc;


После выполнения примера будут сгенерированы два динамических массива
 и значения второго будут вставлены в середину первого массива.


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
