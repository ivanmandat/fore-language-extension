# TimeSeries.CreateEx

TimeSeries.CreateEx
-


# TimeSeries.CreateEx


## Синтаксис


CreateEx(CalendarLevel: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm);
 CalendarSettings: [ITsCalendarSettings](KeTransform.chm::/Interface/ITsCalendarSettings/ITsCalendarSettings.htm));


## Параметры


CalendarLevel. Календарная
 динамика ряда;


CalendarSettings. Параметры
 календарного уровня.


## Описание


Конструктор CreateEx создает
 ряд с заданными параметрами календарного уровня.


## Комментарии


Для создания ряда без дополнительных параметров используйте конструктор
 по умолчанию: [TimeSeries.Create](TimeSeries.Create.htm).


## Пример


В примере приведен пользовательский векторный метод расчета. Для выполнения
 примера добавьте ссылки на системные сборки «Dimensions», «Ms», «Transform».


			Function TimeS(Input: ITimeSeries): ITimeSeries;

Var

    pContext: ITsCalculationContext;

    i: Integer;

    CalendSett: ITsCalendarSettings;

    pSeries: ITimeSeries;

Begin

    pContext := TsCalculation.Current;

    CalendSett := New MsCalendarSettings.Create;

    CalendSett.RestDays := DayOfWeekSet.SaturdaySunday;

    CalendSett.FirstDay := DayOfWeekSet.Monday;

    pSeries := New TimeSeries.CreateEx(DimCalendarLevel.Day, CalendSett);

    If pSeries.CheckCompatible(Input, True) Then

        For i := pSeries.StartIndex To pSeries.EndIndex Do

            pSeries.Item(i) := 1 + Input.Item(i);

        End For;

    End If;

    Return pSeries;

End Function TimeS;


Метод выполняет увеличение значений входного ряда, если он совместим
 с контекстом пользовательского метода расчета.


См. также:


[TimeSeries](TimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
