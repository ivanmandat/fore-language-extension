# ITsCalendarSettings.IsDateEnd

ITsCalendarSettings.IsDateEnd
-


# ITsCalendarSettings.IsDateEnd


## Синтаксис


IsDateEnd(Level:[DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm)):
 Boolean;


## Параметры


Level. Уровень календаря.


## Описание


Свойство IsDateEnd определяет,
 заменять ли дату начала периода датой конца периода для указанного уровня
 календаря.


## Комментарии


Допустимые значения:


	- True. Датой начала периода
	 является дата конца периода. Смещение выполняется от конца периода;


	- False. Дата начала периода
	 не изменяется. Смещение выполняется от начала периода.


Смещение доступно для следующих уровней:


	- годы. Level = DimCalendarLevel.Year;


	- кварталы. Level = DimCalendarLevel.Quarter;


	- месяцы. Level = DimCalendarLevel.Month;


	- недели. Level = DimCalendarLevel.Week.


Для указания количества дней, на которое будет выполнено смещение даты
 начала периода используйте свойство [ITsCalendarSettings.OffsetDate](ITsCalendarSettings.OffsetDate.htm).


## Пример


В данном примере приведен пользовательский векторный метод расчета.
 Для выполнения примера добавьте ссылки на системные сборки «Dimensions»,
 «Ms», «Transform».


			Function OffsetDate(Input: ITimeSeries): ITimeSeries;

Var

    pContext: ITsCalculationContext;

    i: Integer;

    pSeries: ITimeSeries;

    CalendSett: ITsCalendarSettings;

Begin

    pContext := TsCalculation.Current;

    pSeries := pContext.CreateTimeSeries;

    CalendSett := Input.CalendarSettings;

    If (CalendSett.IsDateEnd(DimCalendarLevel.Year)) And (CalendSett.OffsetDate(DimCalendarLevel.Year) = 1) Then

        For i := Input.StartIndex To Input.EndIndex Do

            pSeries.Item(i) := 1 + Input.Item(i);

        End For;

    Else

        pContext.RaiseWarning("Используемые календарные параметры не подходят для вычисления метода");

    End If;

    Return pSeries;

End Function OffsetDate;


Метод выполняет увеличение значений входного ряда, если используется
 смещение годового календарного уровня на год от конца календаря.


См. также:


[ITsCalendarSettings](ITsCalendarSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
