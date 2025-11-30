# ITsCalendarSettings.RestDays

ITsCalendarSettings.RestDays
-


# ITsCalendarSettings.RestDays


## Синтаксис


RestDays: [DayOfWeekSet](KeDims.chm::/Enums/DayOfWeekSet.htm);


## Описание


Свойство RestDays определяет
 выходные дни недели.


## Комментарии


Свойство актуально для рядов с дневной календарной динамикой.


## Пример


В данном примере приведен пользовательский векторный метод расчета.
 Для выполнения примера добавьте ссылки на системные сборки «Dimensions»,
 «Ms», «Transform».


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


Метод выполняет увеличение значений входного ряда, если выходные дни
 ряда - это суббота и воскресенье.


См. также:


[ITsCalendarSettings](ITsCalendarSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
