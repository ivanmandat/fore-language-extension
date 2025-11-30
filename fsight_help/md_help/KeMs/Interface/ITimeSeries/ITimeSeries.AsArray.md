# ITimeSeries.AsArray

ITimeSeries.AsArray
-


# ITimeSeries.AsArray


## Синтаксис


AsArray: Array;


## Описание


Свойство AsArray возвращает/принимает ряд данных с исключенными выходными днями.


## Комментарии


Свойство актуально для рядов с дневной календарной динамикой.


## Пример


В данном примере приведен пользовательский метод расчета для ряда с дневной динамикой. Для выполнения примера добавьте ссылки на системные сборки «Ms», «Transform».


			Function UserAsArray(Input: ITimeSeries): ITimeSeries;

Var

    pContext: ITsCalculationContext;

    i: Integer;

    pSeries: ITimeSeries;

    SerieArray: Array Of Double;

Begin

    pContext := TsCalculation.Current;

    pSeries := pContext.CreateTimeSeries;

    SerieArray := Input.AsArray;

    For i := 0 To SerieArray.Length - 1 Do

        pSeries.Item(i) := 1 + SerieArray[i];

    End For;

    Return pSeries;

End Function UserAsArray;


Метод выполняет увеличение значений ряда, которые соответствуют рабочим дням.


См. также:


[ITimeSeries](ITimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
