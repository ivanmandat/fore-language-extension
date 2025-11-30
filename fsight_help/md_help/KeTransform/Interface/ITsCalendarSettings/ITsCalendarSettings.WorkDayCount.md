# ITsCalendarSettings.WorkDayCount

ITsCalendarSettings.WorkDayCount
-


# ITsCalendarSettings.WorkDayCount


## Синтаксис


WorkDayCount: Integer;


## Описание


Свойство WorkDayCount возвращает
 количество рабочих дней в неделе.


## Комментарии


Свойство актуально для рядов с дневной календарной динамикой. Значение
 WorkDayCount рассчитывается как
 7 минус количество дней из свойства [ITsCalendarSettings.RestDays](ITsCalendarSettings.RestDays.htm).


## Пример


В данном примере приведен пользовательский векторный метод расчета.
 Для выполнения примера добавьте ссылки на системные сборки «Dimensions»,
 «Ms», «Transform».


			Function WorkDayCount(Input: ITimeSeries): Variant;

Var

    pContext: ITsCalculationContext;

    i: Integer;

    pSeries: ITimeSeries;

    CalendSett: ITsCalendarSettings;

Begin

    pContext := TsCalculation.Current;

    pSeries := pContext.CreateTimeSeries(DimCalendarLevel.Day);

    CalendSett := pContext.CalendarSettings;

    If (CalendSett.WorkDayCount = 5) And (CalendSett.FirstDay = DayOfWeekSet.Monday) Then

        For i := Input.StartIndex To Input.EndIndex Do

            pSeries.Item(i) := 1 + Input.Item(i);

        End For;

    Else

        pContext.RaiseWarning("Используемые календарные параметры не подходят для вычисления метода");

    End If;

    Return pSeries;

End Function WorkDayCount;


Метод выполняет увеличение значений входного ряда, если контекст пользовательского
 метода расчета настроен на пятидневную неделю и началом недели является
 понедельник.


См. также:


[ITsCalendarSettings](ITsCalendarSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
