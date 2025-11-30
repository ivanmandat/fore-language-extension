# IMsTimeMatrix.CalendarSettings

IMsTimeMatrix.CalendarSettings
-


# IMsTimeMatrix.CalendarSettings


## Синтаксис


CalendarSettings: [IMsCalendarSettings](../IMsCalendarSettings/IMsCalendarSettings.htm);


## Описание


Свойство CalendarSettings возвращает
 параметры календарного уровня для пользовательского метода расчёта.


## Комментарии


Свойство доступно только для чтения. Используя данное свойство, можно
 изменить день начала недели, число выходных дней и прочие параметры.


## Пример


В данном примере описан пользовательский метод.


Для выполнения примера добавьте ссылки на системные сборки Ms, Dimensions,
 Transform.


			Public Function Remove(param: IMsTimeMatrix; Index: Integer): Variant;

Var

    TsCalc: TsCalculation;

    Context: ITsCalculationContext;

    Serie: IMsTimeMatrix;

    CalendSett: ITsCalendarSettings;

    i, j: Integer;

    s: String;

Begin

    TsCalc := New TsCalculation.Create;

    Context := TsCalc.Current;

    Serie := Context.CreateTimeSeries;

    CalendSett := param.CalendarSettings;

    Index := param.CurrentIndex;

    If CalendSett.RestDays = DayOfWeekSet.SaturdaySunday Then

        param.DeleteSerie(Index);

        param.MoveSerie(0,5);

        For i := 0 To param.Count - 1 Do

            s := "";

            For j := param.StartIndex To param.EndIndex Do

                s := s + (param.Item(i).Item(j) As double).ToString + " ";

            End For;

            Debug.WriteLine("Индекс лага: " + param.LagIndex(0,1).ToString);

            Debug.WriteLine("Ряд: " + i.ToString + " - " + s);

        End For;

    End If;

    Return Null;

End Function Remove;


Метод выполняет удаление и перемещение рядов в матрице, если выходные
 дни ряда - суббота и воскресенье. После чего в окно консоли будут выведены
 индекс лага и ряды результирующей матрицы.


См. также:


[IMsTimeMatrix](IMsTimeMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
