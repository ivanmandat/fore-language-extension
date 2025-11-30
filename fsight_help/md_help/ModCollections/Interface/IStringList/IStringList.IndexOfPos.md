# IStringList.IndexOfPos

IStringList.IndexOfPos
-


# IStringList.IndexOfPos


## Синтаксис


IndexOfPos(Value: String; StartIndex: Integer):
 Integer;


## Параметры


Value. Значение элемента, которое
 необходимо найти;


StartIndex. Индекс элемента,
 с которого осуществляется поиск.


## Описание


Метод IndexOfPos осуществляет
 прямой поиск значения, начиная с заданной позиции.


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

    i := StrL.IndexOfPos("Number 25", Double.FloorInt(StrL.Count / 2));

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строк
 и осуществлен прямой поиск элемента со значением «Number 25» во второй
 половине массива. В переменной i будет содержаться номер первого найденного
 элемента в случае удачного поиска.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
