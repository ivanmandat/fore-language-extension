# IArrayList.AddRange

IArrayList.AddRange
-


# IArrayList.AddRange


## Синтаксис


AddRange(Collection: [ICollection](../ICollection/ICollection.htm));


## Параметры


Collection. Коллекция
 элементов, которую необходимо добавить в массив.


## Описание


Метод AddRange осуществляет
 добавление коллекции в конец массива.


## Пример


			Sub UserProc;

Var

    ArrayL, ArrayL1: IArrayList;

    i: Integer;

Begin

    ArrayL := New ArrayList.Create;

    ArrayL1 := New ArrayList.Create;

    For i := 0 To Math.RandBetweenI(0, 100) Do

        ArrayL.Add(Math.RandBetweenI(0, 500));

    End For;

    For i := 0 To Math.RandBetweenI(0, 100) Do

        ArrayL1.Add(Math.RandBetweenI(0, 500));

    End For;

    ArrayL.AddRange(ArrayL1 As ICollection);

End Sub UserProc;


После выполнения примера будут сгенерированы два динамических массива
 и значения второго будут добавлены в конец первого.


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
