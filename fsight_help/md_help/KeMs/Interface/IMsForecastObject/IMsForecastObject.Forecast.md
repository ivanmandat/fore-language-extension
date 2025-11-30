# IMsForecastObject.Forecast

IMsForecastObject.Forecast
-


# IMsForecastObject.Forecast


## Синтаксис


		Forecast(Period: [IMsPeriod](../IMsPeriod/IMsPeriod.htm)):
		 [IMsForecast](../IMsForecast/IMsForecast.htm);


## Параметры


Period. Период прогнозирования.


## Описание


Свойство Forecast возвращает
 параметры прогнозного ряда.


## Комментарии


Если параметр Period
 принимает значение Null,
 то период прогнозирования будет совпадать с периодом расчёта метода.


## Пример


Приведён пользовательский метод расчёта, возвращающий прогнозные значения
 для какого-либо прогнозного метода расчёта.


Добавьте ссылки на системные сборки: Ms, Stat.


					Public Function ForecastVal(FO: IMsForecastObject): ITimeSeries;

		Var

		    SumStat: ISummaryStatistics;

		    Series: ITimeSeries;

		    Period: IMsDatePeriod;

		    Forecast: IMsForecast;

		Begin

		    // Выводим наименование метода

		    Debug.WriteLine("Наименование метода: " + FO.BaseMethod.Name);

		    Debug.WriteLine("");

		    // Получаем статистические характеристики

		    SumStat := FO.Stats;

		    // Выводим статистические характеристики в окно консоли

		    Debug.WriteLine("Статистические характеристики");

		    Debug.Indent;

		    Debug.WriteLine("Критерии качества");

		    Debug.Indent;

		    Debug.WriteLine("Коэффициент детерминации (R^2): " + SumStat.R2.ToString);

		    Debug.WriteLine("Скорректированный коэффициент детерминации (adj R^2): " + SumStat.AdjR2.ToString);

		    Debug.WriteLine("Статистика Фишера (F): " + SumStat.Fstat.ToString);

		    Debug.WriteLine("Вероятность статистики Фишера (p-v): " + SumStat.ProbFstat.ToString);

		    Debug.Unindent;

		    Debug.WriteLine("Диагностические критерии");

		    Debug.Indent;

		    Debug.WriteLine("Статистика Дарбина-Уотсона (DW): " + SumStat.DW.ToString);

		    Debug.Unindent;

		    Debug.Unindent;

		    Debug.WriteLine("");

		    // Получаем модельный
		 ряд и выводим его в окно консоли

		    Series := FO.Fitted;

		    Debug.WriteLine("Модельный ряд");

		    Print(Series);

		    // Получаем ряд остатков и выводим его в окно консоли

		    Series := FO.Residuals;

		    Debug.WriteLine("Ряд остатков");

		    Print(Series);

		    // Получаем моделируемый ряд и выводим его в окно консоли

		    Series := FO.TimeSeries;

		    Debug.WriteLine("Результирующий ряд");

		    Print(Series);

		    // Создаем временной период

		    Period := New MsDatePeriod.Create;

		    Period.Start := DateTime.Parse("01.01.2010");

		    Period.End_ := DateTime.Parse("31.12.2020");

		    // Получаем параметры прогнозного ряда на заданном периоде

		    Forecast := FO.Forecast(Period);

		    // Получаем и выводим в окно консоли значения прогнозного ряда

		    Series := Forecast.Value;

		    Debug.WriteLine("Прогнозный ряд");

		    Print(Series);

		    // Получаем и выводим в окно консоли значения верхней доверительной границы прогнозного ряда

		    Series := Forecast.UpperConfidenceLevel;

		    Debug.WriteLine("Значения верхней доверительной границы прогнозного ряда");

		    Print(Series);

		    // Получаем и выводим в окно консоли значения нижней доверительной границы прогнозного ряда

		    Series := Forecast.LowerConfidenceLevel;

		    Debug.WriteLine("Значения нижней доверительной границы прогнозного ряда");

		    Print(Series);

		    // Получаем и выводим в окно консоли значения верхней динамической доверительной границы прогнозного ряда

		    Series := Forecast.DynamicUpperConfidenceLevel;

		    Debug.WriteLine("Значения верхней динамической доверительной границы прогнозного ряда");

		    Print(Series);

		    // Получаем и выводим в окно консоли значения нижней динамической доверительной границы прогнозного ряда

		    Series := Forecast.DynamicLowerConfidenceLevel;

		    Debug.WriteLine("Значения нижней динамической доверительной границы прогнозного ряда");

		    Print(Series);

		    // Получаем и выводим в окно консоли значения ряда,

		    // содержащего данные исходного ряда на период идентификации и прогнозного ряда на период прогнозирования

		    Series := Forecast.Combined;

		    Debug.WriteLine("Значения ряда, содержащего данные исходного ряда на период идентификации " +

		        "и прогнозного ряда на период прогнозирования");

		    Print(Series);

		    // Возвращаем прогнозный ряд

		    Return Forecast.Value;

		End Function ForecastVal;


		// Процедура вывода значений ряда в окно консоли

		Sub Print(Series: ITimeSeries);

		Var

		    i: Integer;

		    d: DateTime;

		Begin

		    Debug.Indent;

		    For i := Series.StartIndex To Series.EndIndex Do

		        d := Series.IndexToDate(i);

		        Debug.WriteLine(CultureInfo.Current.FormatShortDate(d) + ": " + Series.Item(i));

		    End For;

		    Debug.Unindent;

		    Debug.WriteLine("");

		End Sub Print;


В результате выполнения примера в окно консоли будет выведено:


	- наименование метода расчёта;


	- значения статистических характеристик;


	- значения следующих рядов: результирующий ряд, модельный ряд,
	 ряд остатков, прогнозный ряд, ряд, содержащий данные исходного ряда
	 на период идентификации и прогнозного ряда на период прогнозирования;


	- значения доверительных границ прогнозного ряда.


Данный пользовательский метод может быть использован в [детерминированном
 уравнении](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/4_Deterministic_equation/uimodelling_model_specification_deter.htm), в [калькуляторе](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 в анализе временных рядов и в [редакторе выражения](UiNav.chm::/GUI/ExpressionEditor.htm).
 Например, использование пользовательского метода в детерминированном уравнении:


IMsForecastObject_Forecast.ForecastVal(Arima(X1,
 Null, "1", "1", 1, 2))


Где:


	- IMsForecastObject_Forecast.
	 Идентификатор модуля, в котором содержится пользовательский метод;


	- ForecastVal. Название
	 пользовательского метода;


	- [Arima](../IModelling/IModelling.Arima.htm).
	 Метод расчёта ARIMA;


	- X1. Фактор модели.


См. также:


[IMsForecastObject](IMsForecastObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
