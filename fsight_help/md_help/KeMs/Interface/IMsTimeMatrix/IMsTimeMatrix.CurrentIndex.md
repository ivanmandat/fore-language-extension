# IMsTimeMatrix.CurrentIndex

IMsTimeMatrix.CurrentIndex
-


# IMsTimeMatrix.CurrentIndex


## Синтаксис


CurrentIndex: Integer;


## Описание


Свойство CurrentIndex возвращает
 текущий индекс расчета.


## Комментарии


Для получения индекса начала ряда используйте свойство [IMsTimeMatrix.StartIndex](IMsTimeMatrix.StartIndex.htm).


## Пример


В данном примере описан пользовательский метод.


Для выполнения примера добавьте ссылки на системные сборки Ms, Dimensions,
 MathFin.


			Public Function CalendarLevel(param: IMsTimeMatrix): Variant;

Var

    Serie : ITimeSeries;

    index, i: integer;

    arr: Array Of Double;

Begin

    Serie := New TimeSeries.Create;

    index := param.CurrentIndex;

    If param.CalendarLevel = DimCalendarLevel.Year Then

        For i := 0 To param.PointCount - 1 Do

            arr := param.Column(i) As Array Of double;

            Serie.Item(index) := Math.Max(arr);

        End For;

    End If;

    Return Serie;

End Function CalendarLevel;


Метод находит максимальное значение среди точек ряда матрицы, если ряд
 матрицы содержит годовую календарную динамику.


См. также:


[IMsTimeMatrix](IMsTimeMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
