# ITimeSeries.CalendarSettings

ITimeSeries.CalendarSettings
-


# ITimeSeries.CalendarSettings


## Синтаксис


CalendarSettings: [IMsCalendarSettings](../IMsCalendarSettings/IMsCalendarSettings.htm);


## Описание


Свойство доступно только для чтения.


Свойство CalendarSettings возвращает параметры календарного уровня для пользовательского метода расчёта.


## Комментарии


Используя данное свойство можно изменить день начала недели, число выходных дней и прочие параметры.


## Пример


В данном примере приведен пользовательский векторный метод расчета. Для выполнения примера добавьте ссылки на системные сборки «Dimensions», «Ms», «Transform».


			Function RestDays(Input: ITimeSeries): ITimeSeries;

Var

    TsCalc: TsCalculation;

    pContext: ITsCalculationContext;

    i: Integer;

    pSeries: ITimeSeries;

    CalendSett: ITsCalendarSettings;

Begin

    TsCalc := New TsCalculation.Create;

    pContext := TsCalc.Current;;

    pSeries := pContext.CreateTimeSeries;

    CalendSett := Input.CalendarSettings;

    If CalendSett.RestDays = DayOfWeekSet.SaturdaySunday Then

        For i := Input.StartIndex To Input.EndIndex Do

            pSeries.Item(i) := 1 + Input.Item(i);

        End For;

    End If;

    Return pSeries;

End Function RestDays;


Метод выполняет увеличение значений входного ряда, если выходные дни ряда - это суббота и воскресенье.


См. также:


[ITimeSeries](ITimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
