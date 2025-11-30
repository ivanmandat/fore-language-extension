# IStringList.SortRange

IStringList.SortRange
-


# IStringList.SortRange


## Синтаксис


SortRange(Index: Integer; Count: Integer);


## Параметры


Index. Индекс элемента, с которого
 начинается диапазон;


Count. Количество элементов
 в диапазоне.


## Описание


Метод SortRange осуществляет
 сортировку диапазона массива по возрастанию.


## Пример


			Sub UserProc;

Var

    StrL: IStringList;

    i: Integer;

Begin

    StrL := New StringList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        StrL.Add("Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    StrL.SortRange(10, StrL.Count - 20);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строк,
 средняя часть массива, за исключением первых и последних 10 элементов,
 будет отсортирована по возрастанию.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
