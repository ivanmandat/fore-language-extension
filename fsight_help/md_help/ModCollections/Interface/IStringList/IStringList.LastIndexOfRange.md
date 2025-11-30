# IStringList.LastIndexOfRange

IStringList.LastIndexOfRange
-


# IStringList.LastIndexOfRange


## Синтаксис


LastIndexOfRange(Value: Srting; StartIndex: String;
 Count: Integer): Integer;


## Параметры


Value. Значение элемента, которое
 необходимо найти;


StartIndex. Индекс элемента,
 с которого осуществляется поиск;


Count. Количество элементов
 диапазона, в котором будет производиться поиск.


## Описание


Метод LastIndexOfRange осуществляет
 обратный поиск элемента в заданном диапазоне.


## Комментарии


Метод возвращает индекс элемента в случае удачного поиска, и -1, если
 значение не найдено.


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

    i := StrL.LastIndexOfRange("Number 25", 10, StrL.Count - 20);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строк
 и осуществлен обратный поиск значения «Number 25» во всем массиве за исключением
 первых и последних 10 элементов. В случае удачного поиска в переменной
 i будет содержаться индекс найденного элемента.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
