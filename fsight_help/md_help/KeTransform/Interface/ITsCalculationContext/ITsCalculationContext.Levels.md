# ITsCalculationContext.Levels

ITsCalculationContext.Levels
-


# ITsCalculationContext.Levels


## Синтаксис


Levels: [DimCalendarLevelSet](KeDims.chm::/Enums/DimCalendarLevelSet.htm);


## Описание


Свойство Levels возвращает набор
 календарных динамик, доступных для расчёта пользовательского метода.


## Пример


В данном примере приведен пользовательский метод расчета. Для выполнения
 примера добавьте ссылки на системные сборки «Dimensions», «Ms», «Transform».


			Function WorkDayCount(Input: ITimeSeries): ITimeSeries;

Var

    pContext: ITsCalculationContext;

    i: Integer;

    pSeries: ITimeSeries;

Begin

    pContext := TsCalculation.Current;

    pSeries := pContext.CreateTimeSeries(DimCalendarLevel.Day);

    If pContext.Levels = DimCalendarLevelSet.Day Then

        For i := Input.StartIndex To Input.EndIndex Do

            pSeries.Item(i) := 1 + Input.Item(i);

        End For;

    Else

        pContext.RaiseWarning("Используемые календарные параметры не подходят для вычисления метода");

    End If;

    Return pSeries;

End Function WorkDayCount;


Метод выполняет увеличение значений входного ряда, если контекст пользовательского
 метода расчета настроен на дневную динамику.


См. также:


[ITsCalculationContext](ITsCalculationContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
