# IMsTimeMatrix.AddTerm

IMsTimeMatrix.AddTerm
-


# IMsTimeMatrix.AddTerm


## Синтаксис


AddTerm(TermValue: [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm)):
 [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


## Параметры


TermValue. Значение терма.


## Описание


Метод AddTerm добавляет терм
 в матрицу.


## Комментарии


Для добавления ряда в матрицу используйте метод [IMsTimeMatrix.AddSerie](IMsTimeMatrix.AddSerie.htm).


## Пример


В данном примере описан пользовательский метод.


Для выполнения примера добавьте ссылки на системные сборки Ms.


			Public Function Create(param: ITimeSeries): Variant;

Var

    m : IMsTimeMatrix;

    Term: IMsFormulaTerm;

    i, j: Integer;

    s : String;

    serie : ITimeSeries;

Begin

    m := New MsTimeMatrix.Create;

    If param.CurrentDate < DateTime.Now Then

        Debug.WriteLine("Рядов - " + m.Count.ToString);

        Term := param.Item(i);

        m.AddTerm(Term);

        For i := 0 To m.Count - 1 Do

            s := "";

            serie := m.Item(i);

            For j := m.StartIndex To m.EndIndex Do

                s := s + (serie.Item(j) As double).ToString + " ";

            End For;

            Debug.WriteLine("Ряд: " + i.ToString + " - " + s);

            Debug.WriteLine("Количество точек между индексами начала и конца ряда: "

                + m.CalcPointCount.ToString);

        End For;

    End If;

    Return m;

End Function Create;


Метод выполняет добавление термов в матрицу. После чего в окно консоли
 будут выведены ряды результирующей матрицы и количество точек между индексами
 начала и конца ряда.


См. также:


[IMsTimeMatrix](IMsTimeMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
