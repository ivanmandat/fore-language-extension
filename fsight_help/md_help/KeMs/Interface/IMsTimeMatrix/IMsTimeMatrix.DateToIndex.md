# IMsTimeMatrix.DateToIndex

IMsTimeMatrix.DateToIndex
-


# IMsTimeMatrix.DateToIndex


## Синтаксис


DateToIndex(Value: [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm)):
 Integer;


## Параметры


Value. Календарная точка ряда.


## Описание


Метод DateToIndex переводит
 дату в индекс.


## Комментарии


Для перевода индекса в дату используйте метод [IMsTimeMatrix.IndexToDate](IMsTimeMatrix.IndexToDate.htm).


## Пример


В данном примере описан пользовательский метод.


Для выполнения примера добавьте ссылки на системные сборки Ms, MathFin.


			Public Function Max(Matrix: IMsTimeMatrix): Variant;

Var

    Serie : ITimeSeries;

    index, i : integer;

    arr : Array Of double;

Begin

    Serie := New TimeSeries.Create;

    index := Matrix.CurrentIndex;

    If Matrix.DateToIndex(Matrix.ForecastStartDate) <> index Then

        For i := 0 To Matrix.PointCount - 1 Do

            arr := Matrix.Column(i) As Array Of double;

            Serie.Item(i) := Math.Max(arr);

        End For;

    End If;

    Return Serie;

End Function Max;


Метод находит максимальное значение среди точек ряда матрицы, если значение,
 полученное при переводе даты в индекс, не совпадает с текущим индексом
 расчета.


См. также:


[IMsTimeMatrix](IMsTimeMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
