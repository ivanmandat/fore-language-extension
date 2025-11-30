# IStringList.BinarySearch

IStringList.BinarySearch
-


# IStringList.BinarySearch


## Синтаксис


BinarySearch(Value: String): Integer;


## Параметры


Value. Значение,
 которое необходимо найти.


## Описание


Метод BinarySearch осуществляет
 двоичный поиск элемента в массиве.


## Комментарии


Поиск осуществляется в отсортированном массиве. В случае удачного поиска
 возвращает номер первого найденного элемента, иначе «-1».


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

    i := StrL.BinarySearch("Number 20");

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строк
 и в нем осуществлен поиск значения «Number 20». В случае удачного поиска
 в переменной i будет содержаться номер первого найденного элемента.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
