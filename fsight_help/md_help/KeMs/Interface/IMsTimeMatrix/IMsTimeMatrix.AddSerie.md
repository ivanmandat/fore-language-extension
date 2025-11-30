# IMsTimeMatrix.AddSerie

IMsTimeMatrix.AddSerie
-


# IMsTimeMatrix.AddSerie


## Синтаксис


AddSerie(Item: [ITimeSeries](../ITimeSeries/ITimeSeries.htm));


## Параметры


Item. Ряд данных.


## Описание


Метод AddSerie добавляет ряд
 в матрицу.


## Комментарии


Для удаления ряда из матрицы используйте метод [IMsTimeMatrix.DeleteSerie](IMsTimeMatrix.DeleteSerie.htm).


## Пример


В данном примере описан пользовательский метод.


Для выполнения примера добавьте ссылки на системные сборки Ms, Transform,
 Dimensions.


			Public Function CreateEx(param: ITimeSeries): Variant;

Var

    CalendSett: ITsCalendarSettings;

    m : IMsTimeMatrix;

    i, j: Integer;

    s : String;

    serie : ITimeSeries;

Begin

    CalendSett := New MsCalendarSettings.Create;

    CalendSett.RestDays := DayOfWeekSet.SaturdaySunday;

    CalendSett.FirstDay := DayOfWeekSet.Monday;

    m := New MsTimeMatrix.CreateEx(DimCalendarLevel.Day, CalendSett);

    If param.EndDate > DateTime.Now Then

        m.Clear;

        m.AddSerie(param);

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

End Function CreateEx;


Метод выполняет добавление рядов в матрицу. После чего в окно консоли
 будут выведены ряды результирующей матрицы.


См. также:


[IMsTimeMatrix](IMsTimeMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
