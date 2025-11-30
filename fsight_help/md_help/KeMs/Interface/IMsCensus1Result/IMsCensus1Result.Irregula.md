# IMsCensus1Result.Irregula

IMsCensus1Result.Irregula
-


# IMsCensus1Result.Irregula


## Синтаксис


		Irregula: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


## Описание


Свойство Irregula возвращает
 нерегулярную компоненту.


## Пример


Приведён пользовательский метод расчёта, возвращающий сглаженный ряд
 для метода Census1.


Добавьте ссылку на системную сборку Ms.


					Public Function Census1Result(Result: Variant): ITimeSeries;

		Var

		    Census1Res: IMsCensus1Result;

		    Series: ITimeSeries;

		Begin

		    Census1Res := Result As IMsCensus1Result;

		    // Выводим наименование метода

		    Debug.WriteLine("Наименование метода: " + Census1Res.BaseMethod.Name);

		    Debug.WriteLine("");

		    // Получаем нерегулярную компоненту и выводим её в окно консоли

		    Series := Census1Res.Irregula;

		    Debug.WriteLine("Нерегулярная компонента");

		    Print(Series);

		    // Получаем отношение/разность и выводим в окно консоли

		    Series := Census1Res.RatioDifferences;

		    Debug.WriteLine("Отношение/разность");

		    Print(Series);

		    // Получаем сезонную составляющую и выводим её в окно консоли

		    Series := Census1Res.Seasonal;

		    Debug.WriteLine("Сезонная составляющая");

		    Print(Series);

		    // Получаем сезонную корректировку и выводим её в окно консоли

		    Series := Census1Res.SeasonalAdjustment;

		    Debug.WriteLine("Сезонная корректировка");

		    Print(Series);

		    // Получаем тренд-циклическую компоненту и выводим её в окно консоли

		    Series := Census1Res.TrendCycle;

		    Debug.WriteLine("Тренд-циклическая компонента");

		    Print(Series);

		    // Возвращаем сглаженный ряд

		    Return Census1Res.MovingAverage;

		End Function Census1Result;


		// Процедура вывода значений ряда в окно консоли

		Sub Print(Series: ITimeSeries);

		Var

		    CF: ICultureInfo;

		    i: Integer;

		    d: DateTime;

		Begin

		    CF := CultureInfo.Current;

		    Debug.Indent;

		    For i := Series.StartIndex To Series.EndIndex Do

		        d := Series.IndexToDate(i);

		        Debug.WriteLine(CF.FormatShortDate(d) + ": " + Series.Item(i));

		    End For;

		    Debug.Unindent;

		    Debug.WriteLine("");

		End Sub Print;


В результате выполнения примера в окно консоли будут выведены результаты
 расчёта методом Census1.


Данный пользовательский метод может быть использован в [детерминированном
 уравнении](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/4_Deterministic_equation/uimodelling_model_specification_deter.htm), в [калькуляторе](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 в анализе временных рядов и в [редакторе выражения](UiNav.chm::/GUI/ExpressionEditor.htm).
 Например, использование пользовательского метода в детерминированном уравнении:


IMSCENSUS1RESULT_IRREGULA.Census1Result(census1(X1,
 SetPeriod("01.01.2000", "01.01.2015"), MsOutputCensus1SeriesType.MovingAverage,
 SeasonalityType.Additive))


Где:


	- IMSCENSUS1RESULT_IRREGULA.
	 Идентификатор модуля, в котором содержится пользовательский метод;


	- Census1Result. Название
	 пользовательского метода;


	- [Census1](../IModelling/IModelling.Census1.htm).
	 Метод расчёта Census1;


	- X1. Фактор модели.


См. также:


[IMsCensus1Result](IMsCensus1Result.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
