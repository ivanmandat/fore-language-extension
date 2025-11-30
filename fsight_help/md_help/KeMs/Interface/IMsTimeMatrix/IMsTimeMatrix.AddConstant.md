# IMsTimeMatrix.AddConstant

IMsTimeMatrix.AddConstant
-


# IMsTimeMatrix.AddConstant


## Синтаксис


AddConstant(ConstantValue: Variant): [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


## Параметры


ConstantValue. Значение константы.


## Описание


Метод AddConstant добавляет
 константу в матрицу.


## Комментарии


Для добавления ряда в матрицу используйте метод [IMsTimeMatrix.AddSerie](IMsTimeMatrix.AddSerie.htm).


## Пример


В данном примере описан пользовательский метод.


Для выполнения примера добавьте ссылки на системные сборки Ms, Dimensions.


			Public Function CreateLevel(param: IMsTimeMatrix): Variant;

Var

    m : IMsTimeMatrix;

    i, j: Integer;

    s : String;

    serie : ITimeSeries;

Begin

    m := New MsTimeMatrix.CreateLevel(DimCalendarLevel.Year);

    m.AddConstant(13);

    m.AddConstant(5);

    If param.StartDate = DateTime.ComposeDay(2014,7,8) Then

        Debug.WriteLine("Рядов: " + m.Count.ToString);

        For i := 0 To m.Count - 1 Do

            s := "";

            serie := m.Item(i);

            For j := m.StartIndex To m.EndIndex Do

                s := s + (serie.Item(j) As double).ToString + " ";

            End For;

            Debug.WriteLine("Ряд: " + i.ToString + " - " + s);

        End For;

    End If;

    Return m;

End Function CreateLevel;


Метод выполняет добавление констант в матрицу. После чего в окно консоли
 будут выведены ряды результирующей матрицы.


См. также:


[IMsTimeMatrix](IMsTimeMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
