# IStringList.BinarySearchRange

IStringList.BinarySearchRange
-


# IStringList.BinarySearchRange


## Синтаксис


BinarySearchRange(Value: String; Index: Integer;
 Count: Integer): Integer;


## Параметры


Value. Значение, которое необходимо
 найти;


Index. Начальный индекс диапазона,
 в котором будет производиться поиск;


Count. Количество элементов,
 среди которых будет производиться поиск.


## Описание


Метод BinarySearchRange осуществляет
 двоичный поиск элемента в диапазоне массива.


## Комментарии


Поиск осуществляется в отсортированном диапазоне массива. В случае удачного
 поиска возвращает номер первого найденного элемента, иначе «-1».


## Пример


			Sub UserProc;

Var

    StrL: IStringList;

    i: Integer;

Begin

    StrL := New StringList.Create;

    For i := 0 To 100 Do

        StrL.Add("Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    StrL.Sort;

    i := StrL.BinarySearchRange("Number 20", 10, StrL.Count);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строк.
 В средней части массива, за исключением первых и последних 10 элементов,
 будет осуществлен поиск значения «Number 20». В случае удачного поиска
 в переменной «i» будет содержаться номер первого найденного элемента.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
