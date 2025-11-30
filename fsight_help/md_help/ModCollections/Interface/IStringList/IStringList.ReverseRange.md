# IStringList.ReverseRange

IStringList.ReverseRange
-


# IStringList.ReverseRange


## Синтаксис


ReverseRange(Index: Integer; Count: Integer);


## Параметры


Index. Индекс элемента, с которого
 начинается диапазон;


Count. Количество элементов
 диапазона.


## Описание


Метод ReverseRange осуществляет
 переворот диапазона массива.


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

    StrL.ReverseRange(Double.FloorInt(StrL.Count / 2), Double.FloorInt(StrL.Count / 2) + 1);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строк,
 вторая половина массива будет перевернута.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
