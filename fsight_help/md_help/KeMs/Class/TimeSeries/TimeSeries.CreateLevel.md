# TimeSeries.CreateLevel

TimeSeries.CreateLevel
-


# TimeSeries.CreateLevel


## Синтаксис


CreateLevel(CalendarLevel: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm));


## Параметры


CalendarLevel. Календарная
 динамика ряда.


## Описание


Конструктор CreateLevel создает
 ряд с заданной календарной динамикой.


## Комментарии


Для создания ряда без дополнительных параметров используйте конструктор
 по умолчанию: [TimeSeries.Create](TimeSeries.Create.htm).


## Пример


В примере приведен пользовательский векторный метод расчета. Для выполнения
 примера добавьте ссылки на системные сборки «Dimensions», «Ms».


			Function TimeCalendLvl(Input: ITimeSeries): ITimeSeries;

Var

    i: Integer;

    pSeries: ITimeSeries;

Begin

    pSeries := New TimeSeries.CreateLevel(DimCalendarLevel.Year);

    If pSeries.CheckCompatible(Input, True) Then

        For i := pSeries.StartIndex To pSeries.EndIndex Do

            pSeries.Item(i) := 1 + Input.Item(i);

        End For;

    End If;

    Return pSeries;

End Function TimeCalendLvl;


Метод выполняет увеличение значений входного ряда, если он совместим
 с контекстом пользовательского метода расчета.


См. также:


[TimeSeries](TimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
