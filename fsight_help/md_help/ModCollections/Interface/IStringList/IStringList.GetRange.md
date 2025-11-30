# IStringList.GetRange

IStringList.GetRange
-


# IStringList.GetRange


## Синтаксис


GetRange(Index: Integer; Count: Integer): [IStringList](IStringList.htm);


## Параметры


Index. Индекс элемента, начиная
 с которого необходимо получить диапазон;


Count. Количество элементов
 диапазона массива, которые необходимо получить.


## Описание


Метод GetRange возвращает диапазон
 массива в соответствии с заданными параметрами.


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

    StrL1 := StrL.GetRange(10, StrL.Count - 20)

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив StrL.
 В массиве StrL1 будет содержаться копия массива StrL за исключение первых
 и последних 10 элементов.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
