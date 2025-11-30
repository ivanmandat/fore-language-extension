# IModelling

IModelling
-


# IModelling


Сборка: Ms;


## Описание


Интерфейс IModelling содержит
 методы, предназначенные для преобразования переменных.


## Иерархия наследования


           IModelling


## Комментарии


Все методы данного интерфейса перед выполнением проверяют входной ряд
 на наличие данных. Если входной ряд пуст, то вычисление метода не производится,
 сразу возвращается пустой ряд.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Abs](IModelling.Abs.htm)
		 Метод Abs возвращает
		 абсолютное значение (модуль) точек указанной переменной.


		 ![](../../Sub_Image.gif)
		 [AbsI](IModelling.AbsI.htm)
		 Метод AbsI возвращает
		 абсолютное значение (модуль) точек указанной переменной, если
		 она содержит только целые значения.


		 ![](../../Sub_Image.gif)
		 [Arima](IModelling.Arima.htm)
		 Метод Arima осуществляет
		 моделирование значений переменной методом ARIMA.


		 ![](../../Sub_Image.gif)
		 [ArimaR](IModelling.ArimaR.htm)
		 Метод ArimaR моделирует
		 значения переменной методом ARIMA с помощью пакета R.


		 ![](../../Sub_Image.gif)
		 [AutoTrend](IModelling.AutoTrend.htm)
		 Метод AutoTrend подбирает
		 для переменной оптимальный тренд на заданном периоде.


		 ![](../../Sub_Image.gif)
		 [Average](IModelling.Average.htm)
		 Метод Average возвращает
		 среднее значение точек указанной переменной.


		 ![](../../Sub_Image.gif)
		 [AverageI](IModelling.Averagei.htm)
		 Метод AverageI возвращает
		 среднее значение точек указанной переменной, если она содержит
		 только целые значения.


		 ![](../../Sub_Image.gif)
		 [Bpf](IModelling.Bpf.htm)
		 Метод Bpf моделирует
		 значения переменной фильтром [Бакстера-Кинга](Lib.chm::/02_Time_series_analysis/UiModelling_BaxterKingFilter.htm).


		 ![](../../Sub_Image.gif)
		 [BpfR](IModelling.BpfR.htm)
		 Метод BpfR моделирует
		 значения переменной фильтром [Бакстера-Кинга](Lib.chm::/02_Time_series_analysis/UiModelling_BaxterKingFilter.htm)
		 с помощью пакета R.


		 ![](../../Sub_Image.gif)
		 [Census1](IModelling.Census1.htm)
		 Метод Census1 выделяет
		 сезонную составляющую в соответствии с заданными параметрами.


		 ![](../../Sub_Image.gif)
		 [Coalesce](IModelling.Coalesce.htm)
		 Метод Coalesce возвращает
		 ряд, каждая точка которого вычисляется как первое встреченное
		 значение из указанных рядов, которое не равно Null.


		 ![](../../Sub_Image.gif)
		 [Collapse](IModelling.Collapse.htm)
		 Метод Collapse осуществляет
		 агрегацию значений переменной.


		 ![](../../Sub_Image.gif)
		 [Combine](IModelling.Combine.htm)
		 Метод Combine возвращает
		 ряд, содержащий данные исходного ряда на период идентификации
		 и прогнозного ряда на период прогнозирования.


		 ![](../../Sub_Image.gif)
		 [Cos](IModelling.Cos.htm)
		 Метод Cos возвращает
		 косинус точек указанной переменной.


		 ![](../../Sub_Image.gif)
		 [Cumulative](IModelling.Cumulative.htm)
		 Метод Cumulative осуществляет
		 преобразование переменной с применением указанного метода накопления.


		 ![](../../Sub_Image.gif)
		 [CumulativeYTD](IModelling.CumulativeYTD.htm)
		 Метод CumulativeYTD
		 осуществляет преобразование переменной с применением указанного
		 метода накопления к началу года.


		 ![](../../Sub_Image.gif)
		 [DateSeries](IModelling.DateSeries.htm)
		 Метод DateSeries возвращает
		 текущее значение даты для каждой точки ряда в зависимости от заданных
		 периодов расчёта.


		 ![](../../Sub_Image.gif)
		 [Default_](IModelling.Default_.htm)
		 Метод Default_ возвращает
		 значение Null.


		 ![](../../Sub_Image.gif)
		 [Diff](IModelling.Diff.htm)
		 Метод Diff осуществляет
		 расчёт прироста точек переменной к предыдущему периоду.


		 ![](../../Sub_Image.gif)
		 [DiffX](IModelling.DiffX.htm)
		 Метод DiffX осуществляет
		 расчёт прироста точек переменной к указанному периоду.


		 ![](../../Sub_Image.gif)
		 [DiffY](IModelling.DiffY.htm)
		 Метод DiffY осуществляет
		 расчёт прироста точек переменной к соответствующему периоду предыдущего
		 года.


		 ![](../../Sub_Image.gif)
		 [Div_](IModelling.Div_.htm)
		 Метод Div_ возвращает
		 целую часть от целочисленного деления значений точек переменной
		 на заданное число.


		 ![](../../Sub_Image.gif)
		 [Division](IModelling.Division.htm)
		 Метод Division возвращает
		 частное от поточечного деления двух переменных.


		 ![](../../Sub_Image.gif)
		 [DLog](IModelling.DLog.htm)
		 Метод DLog осуществляет
		 расчёт прироста логарифма точек переменной к предыдущему периоду.


		 ![](../../Sub_Image.gif)
		 [DLogX](IModelling.DLogX.htm)
		 Метод DLogX осуществляет
		 расчёт прироста логарифма точек переменной к указанному периоду.


		 ![](../../Sub_Image.gif)
		 [DynamicLowerConfidenceLevel](IModelling.DynamicLowerConfidenceLevel.htm)
		 Метод DynamicLowerConfidenceLevel
		 возвращает нижнюю динамическую доверительную границу прогнозного
		 ряда.


		 ![](../../Sub_Image.gif)
		 [DynamicUpperConfidenceLevel](IModelling.DynamicUpperConfidenceLevel.htm)
		 Метод DynamicUpperConfidenceLevel
		 возвращает верхнюю динамическую доверительную границу прогнозного
		 ряда.


		 ![](../../Sub_Image.gif)
		 [Ecm](IModelling.Ecm.htm)
		 Метод Ecm осуществляет
		 преобразование переменной с помощью модели коррекции ошибок.


		 ![](../../Sub_Image.gif)
		 [Estimate](IModelling.Estimate.htm)
		 Метод Estimate возвращает
		 оценённое значение константы.


		 ![](../../Sub_Image.gif)
		 [Exp](IModelling.Exp.htm)
		 Метод Exp возвращает
		 результат возведения числа e в степень, заданную точкой переменной.


		 ![](../../Sub_Image.gif)
		 [ExpSmooth](IModelling.Expsmooth.htm)
		 Метод ExpSmooth осуществляет
		 преобразование переменной методом экспоненциального сглаживания.


		 ![](../../Sub_Image.gif)
		 [ExpSmoothR](IModelling.ExpSmoothR.htm)
		 Метод ExpSmoothR преобразует
		 данные переменной методом экспоненциального сглаживания с помощью
		 пакета R.


		 ![](../../Sub_Image.gif)
		 [ExpX](IModelling.ExpX.htm)
		 Метод ExpX возвращает
		 результат возведения точек переменной в заданную степень.


		 ![](../../Sub_Image.gif)
		 [Extrapolate](IModelling.Extrapolate.htm)
		 Метод Extrapolate осуществляет
		 преобразование переменной с использованием тренда с подбором функциональной
		 зависимости.


		 ![](../../Sub_Image.gif)
		 [Fact](IModelling.Fact.htm)
		 Метод Fact возвращает
		 факториал точек указанной переменной.


		 ![](../../Sub_Image.gif)
		 [Fill](IModelling.Fill.htm)
		 Метод Fill заполняет
		 пустые значения ряда с помощью различных методов обработки пропусков.


		 ![](../../Sub_Image.gif)
		 [Fitted](IModelling.Fitted.htm)
		 Метод Fitted
		 возвращает модельный ряд.


		 ![](../../Sub_Image.gif)
		 [Floor](IModelling.Floor.htm)
		 Метод Floor возвращает
		 результат округления точек переменной до кратного заданной точности
		 с недостатком.


		 ![](../../Sub_Image.gif)
		 [FloorI](IModelling.FloorI.htm)
		 Метод FloorI возвращает
		 результат округления точек переменной до кратного заданной точности
		 с недостатком, если переменная содержит только целые значения.


		 ![](../../Sub_Image.gif)
		 [Forecast](IModelling.Forecast.htm)
		 Метод Forecast возвращает
		 прогнозные значения для указанного ряда.


		 ![](../../Sub_Image.gif)
		 [GetValueByDate](IModelling.GetValueByDate.htm)
		 Метод GetValueByDate
		 возвращает значение ряда на заданную дату.


		 ![](../../Sub_Image.gif)
		 [GreyForecast](IModelling.GreyForecast.htm)
		 Метод GreyForecast
		 осуществляет моделирование переменной с помощью Грей-метода.


		 ![](../../Sub_Image.gif)
		 [Hpf](IModelling.Hpf.htm)
		 Метод Hpf осуществляет
		 сглаживание переменной с использованием фильтра Ходрика-Прескотта
		 с параметром сглаживания «лямбда».


		 ![](../../Sub_Image.gif)
		 [HpfP](IModelling.HpfP.htm)
		 Метод HpfP осуществляет
		 сглаживание переменной с использованием фильтра Ходрика-Прескотта
		 с параметром сглаживания «степень».


		 ![](../../Sub_Image.gif)
		 [HpfR](IModelling.HpfR.htm)
		 Метод HpfR осуществляет
		 сглаживание переменной с использованием фильтра Ходрика-Прескотта
		 с помощью пакета R.


		 ![](../../Sub_Image.gif)
		 [Iif](IModelling.Iif.htm)
		 Метод Iif обеспечивает
		 условное выполнение операторов.


		 ![](../../Sub_Image.gif)
		 [Int](IModelling.Int.htm)
		 Метод Int округляет
		 значения точек указанной переменной до ближайшего меньшего целого.


		 ![](../../Sub_Image.gif)
		 [Interpolate](IModelling.Interpolate.htm)
		 Метод Interpolate осуществляет
		 интерполяцию значений переменной.


		 ![](../../Sub_Image.gif)
		 [InterpolateP](IModelling.InterpolateP.htm)
		 Метод InterpolateP
		 осуществляет интерполяцию по шаблону значений переменной.


		 ![](../../Sub_Image.gif)
		 [IsSeriesEmpty](IModelling.IsSeriesEmpty.htm)
		 Метод IsSeriesEmpty
		 возвращает признак пустоты ряда.


		 ![](../../Sub_Image.gif)
		 [Lag](IModelling.Lag.htm)
		 Метод Lag осуществляет
		 сдвиг переменной вперёд на заданное количество точек во временном
		 периоде.


		 ![](../../Sub_Image.gif)
		 [Lead](IModelling.Lead.htm)
		 Метод Lead осуществляет
		 сдвиг переменной назад на заданное количество точек во временном
		 периоде.


		 ![](../../Sub_Image.gif)
		 [Level](IModelling.Level.htm)
		 Метод Level осуществляет
		 применение функции Level к указанной переменной.


		 ![](../../Sub_Image.gif)
		 [LevelIndexSeries](IModelling.LevelIndexSeries.htm)
		 Метод LevelIndexSeries
		 возвращает текущий индекс элемента для заданной календарной динамики.


		 ![](../../Sub_Image.gif)
		 [Ln](IModelling.Ln.htm)
		 Метод Ln возвращает
		 натуральный логарифм точек указанной переменной.


		 ![](../../Sub_Image.gif)
		 [Log](IModelling.Log.htm)
		 Метод Log возвращает
		 логарифм точек указанной переменной по заданному основанию.


		 ![](../../Sub_Image.gif)
		 [Log10](IModelling.Log10.htm)
		 Метод Log10 возвращает
		 десятичный логарифм точек указанной переменной.


		 ![](../../Sub_Image.gif)
		 [LowerConfidenceLevel](IModelling.LowerConfidenceLevel.htm)
		 Метод LowerConfidenceLevel
		 возвращает нижнюю доверительную границу прогнозного ряда.


		 ![](../../Sub_Image.gif)
		 [Lrxf](IModelling.Lrxf.htm)
		 Метод Lrxf осуществляет
		 моделирование переменной с помощью LRX-фильтра.


		 ![](../../Sub_Image.gif)
		 [Max](IModelling.Max.htm)
		 Метод Max возвращает
		 максимальное значение среди точек переменной.


		 ![](../../Sub_Image.gif)
		 [MaxI](IModelling.MaxI.htm)
		 Метод MaxI возвращает
		 максимальное значение среди точек переменной, если она содержит
		 только целые значения.


		 ![](../../Sub_Image.gif)
		 [Mean](IModelling.Mean.htm)
		 Метод Mean возвращает
		 математическое ожидание для указанной переменной.


		 ![](../../Sub_Image.gif)
		 [Median](IModelling.Median.htm)
		 Метод Median возвращает
		 медиану для указанной переменной.


		 ![](../../Sub_Image.gif)
		 [MedianSmooth](IModelling.MedianSmooth.htm)
		 Метод MedianSmooth
		 выполняет [медианное
		 сглаживание](Lib.chm::/02_Time_series_analysis/UiModelling_median_smoothing.htm) переменной.


		 ![](../../Sub_Image.gif)
		 [MedianSmoothR](IModelling.MedianSmoothR.htm)
		 Метод MedianSmoothR
		 выполняет [медианное
		 сглаживание](Lib.chm::/02_Time_series_analysis/UiModelling_median_smoothing.htm) переменной с помощью пакета R.


		 ![](../../Sub_Image.gif)
		 [Min](IModelling.Min.htm)
		 Метод Min возвращает
		 минимальное значение среди точек переменной.


		 ![](../../Sub_Image.gif)
		 [MinI](IModelling.MinI.htm)
		 Метод MinI возвращает
		 минимальное значение среди точек переменной, если она содержит
		 только целые значения.


		 ![](../../Sub_Image.gif)
		 [Mod_](IModelling.Mod_.htm)
		 Метод Mod_ возвращает
		 остаток от целочисленного деления значений точек переменной на
		 заданное число.


		 ![](../../Sub_Image.gif)
		 [Mode](IModelling.Mode.htm)
		 Метод Mode возвращает
		 моду указанной переменной.


		 ![](../../Sub_Image.gif)
		 [Modulus](IModelling.Modulus.htm)
		 Метод Modulus возвращает
		 остаток от целочисленного деления значений точек переменной на
		 заданное число.


		 ![](../../Sub_Image.gif)
		 [MovAvg](IModelling.MovAvg.htm)
		 Метод MovAvg осуществляет
		 преобразование переменной методом [скользящего
		 среднего](Lib.chm::/02_Time_series_analysis/UiModelling_SlideSmooth.htm).


		 ![](../../Sub_Image.gif)
		 [MovAvgR](IModelling.MovAvgR.htm)
		 Метод MovAvgR осуществляет
		 преобразование переменной методом [скользящего
		 среднего](Lib.chm::/02_Time_series_analysis/UiModelling_SlideSmooth.htm) с помощью пакета R.


		 ![](../../Sub_Image.gif)
		 [Mult](IModelling.Mult.htm)
		 Метод Mult возвращает
		 произведение соответствующих точек для двух и более переменных.


		 ![](../../Sub_Image.gif)
		 [None](IModelling.None.htm)
		 Метод None возвращает
		 признак неиспользования константы.


		 ![](../../Sub_Image.gif)
		 [Nvl](IModelling.Nvl.htm)
		 Метод Nvl заполняет
		 пропуски в данных переменной указанным значением.


		 ![](../../Sub_Image.gif)
		 [Ols](IModelling.Ols.htm)
		 Метод Ols осуществляет
		 моделирование переменной линейной регрессией (оценка МНК).


		 ![](../../Sub_Image.gif)
		 [OlsR](IModelling.OlsR.htm)
		 Метод OlsR осуществляет
		 моделирование переменной линейной регрессией (оценка МНК) с помощью
		 пакета R.


		 ![](../../Sub_Image.gif)
		 [Pch](IModelling.Pch.htm)
		 Метод Pch осуществляет
		 расчёт темпа прироста точек переменной к предыдущему периоду.


		 ![](../../Sub_Image.gif)
		 [PchA](IModelling.PchA.htm)
		 Метод PchA осуществляет
		 расчёт темпа прироста точек переменной к предыдущему периоду с
		 поправкой на сезонность.


		 ![](../../Sub_Image.gif)
		 [PchX](IModelling.PchX.htm)
		 Метод PchX осуществляет
		 расчёт темпа прироста точек переменной к указанному периоду.


		 ![](../../Sub_Image.gif)
		 [PchY](IModelling.PchY.htm)
		 Метод PchY осуществляет
		 расчёт темпа прироста точек переменной к соответствующему периоду
		 предыдущего года.


		 ![](../../Sub_Image.gif)
		 [Pi](IModelling.Pi.htm)
		 Метод Pi возвращает
		 математическую константу «Пи».


		 ![](../../Sub_Image.gif)
		 [Power](IModelling.Power.htm)
		 Метод Power возвращает
		 результат возведения точек переменной в заданную степень.


		 ![](../../Sub_Image.gif)
		 [PowerI](IModelling.PowerI.htm)
		 Метод PowerI возвращает
		 результат возведения точек переменной в заданную степень, если
		 все точки переменной и степень являются целыми числами.


		 ![](../../Sub_Image.gif)
		 [R](IModelling.R.htm)
		 Метод R выполняет преобразование
		 данных с помощью методов пакета R.


		 ![](../../Sub_Image.gif)
		 [Rand](IModelling.Rand.htm)
		 Метод Rand возвращает
		 равномерно распределённое случайное число из диапазона [0, 1].


		 ![](../../Sub_Image.gif)
		 [RandBetween](IModelling.Randbetween.htm)
		 Метод RandBetween возвращает
		 случайное вещественное число между двумя заданными числами.


		 ![](../../Sub_Image.gif)
		 [RandBetweenI](IModelling.RandBetweenI.htm)
		 Метод RandBetweenI
		 возвращает случайное целое число между двумя заданными целыми
		 числами.


		 ![](../../Sub_Image.gif)
		 [Ratio](IModelling.Ratio.htm)
		 Метод Ratio осуществляет
		 расчёт коэффициента роста точек переменной.


		 ![](../../Sub_Image.gif)
		 [Rebase](IModelling.Rebase.htm)
		 Метод Rebase осуществляет
		 применение функции Rebase к указанной переменной.


		 ![](../../Sub_Image.gif)
		 [Remainder](IModelling.Remainder.htm)
		 Метод Remainder возвращает
		 остаток от деления значений точек переменной на заданное число.


		 ![](../../Sub_Image.gif)
		 [Residuals](IModelling.Residuals.htm)
		 Метод Residuals возвращает
		 ряд остатков.


		 ![](../../Sub_Image.gif)
		 [Round](IModelling.Round.htm)
		 Метод Round осуществляет
		 округление значений точек переменной.


		 ![](../../Sub_Image.gif)
		 [RoundDown](IModelling.RoundDown.htm)
		 Метод RoundDown осуществляет
		 округление с недостатком значений точек переменной.


		 ![](../../Sub_Image.gif)
		 [RoundUp](IModelling.RoundUp.htm)
		 Метод RoundUp осуществляет
		 округление с избытком значений точек переменной.


		 ![](../../Sub_Image.gif)
		 [SetPeriod](IModelling.SetPeriod.htm)
		 Метод SetPeriod формирует
		 период по указанным датам.


		 ![](../../Sub_Image.gif)
		 [Sign](IModelling.Sign.htm)
		 Метод Sign возвращает
		 знак точек указанной переменной.


		 ![](../../Sub_Image.gif)
		 [SignI](IModelling.SignI.htm)
		 Метод SignI возвращает
		 знак точек указанной переменной, если она содержит только целые
		 значения.


		 ![](../../Sub_Image.gif)
		 [Sin](IModelling.Sin.htm)
		 Метод Sin возвращает
		 синус точек указанной переменной.


		 ![](../../Sub_Image.gif)
		 [Splice](IModelling.Splice.htm)
		 Метод Splice осуществляет
		 совмещение переменных.


		 ![](../../Sub_Image.gif)
		 [SpliceP](IModelling.SpliceP.htm)
		 Метод SpliceP осуществляет
		 преобразование переменной на основе совмещенных переменных.


		 ![](../../Sub_Image.gif)
		 [Sqrt](IModelling.Sqrt.htm)
		 Метод Sqrt возвращает
		 квадратный корень точек указанной переменной.


		 ![](../../Sub_Image.gif)
		 [StDv](IModelling.StDv.htm)
		 Метод StDv возвращает
		 стандартное отклонение для указанной переменной.


		 ![](../../Sub_Image.gif)
		 [Subtract](IModelling.Subtract.htm)
		 Метод Subtract возвращает
		 разность соответствующих точек для двух и более переменных.


		 ![](../../Sub_Image.gif)
		 [Sum](IModelling.Sum.htm)
		 Метод Sum возвращает
		 сумму соответствующих точек для двух и более переменных.


		 ![](../../Sub_Image.gif)
		 [SumI](IModelling.SumI.htm)
		 Метод SumI возвращает
		 сумму соответствующих точек для двух и более переменных, если
		 они содержат только целые значения.


		 ![](../../Sub_Image.gif)
		 [SumSq](IModelling.SumSq.htm)
		 Метод SumSq возвращает
		 сумму квадратов для соответствующих точек для двух и более переменных.


		 ![](../../Sub_Image.gif)
		 [Tan](IModelling.Tan.htm)
		 Метод Tan возвращает
		 тангенс точек указанной переменной.


		 ![](../../Sub_Image.gif)
		 [Trunc](IModelling.Trunc.htm)
		 Метод Trunc усекает
		 точки переменной до указанного количества десятичных разрядов.


		 ![](../../Sub_Image.gif)
		 [Truncate](IModelling.Truncate.htm)
		 Метод Truncate осуществляет
		 усечение переменной по заданным параметрам.


		 ![](../../Sub_Image.gif)
		 [Tsls](IModelling.Tsls.htm)
		 Метод Tsls осуществляет
		 моделирование переменной с помощью линейной регрессии (оценка
		 методом инструментальных переменных).


		 ![](../../Sub_Image.gif)
		 [TslsR](IModelling.TslsR.htm)
		 Метод TslsR моделирует
		 данные переменной с помощью линейной регрессии (оценка методом
		 инструментальных переменных). Расчёт выполняется с помощью пакета
		 R.


		 ![](../../Sub_Image.gif)
		 [UpperConfidenceLevel](IModelling.UpperConfidenceLevel.htm)
		 Метод UpperConfidenceLevel
		 возвращает верхнюю доверительную границу прогнозного ряда.


		 ![](../../Sub_Image.gif)
		 [Variance](IModelling.Variance.htm)
		 Метод Variance возвращает
		 дисперсию переменной.


		 ![](../../Sub_Image.gif)
		 [X11](IModelling.X11.htm)
		 Метод X11 осуществляет
		 сезонную декомпозицию и корректировку данных.


		 ![](../../Sub_Image.gif)
		 [YearSeries](IModelling.YearSeries.htm)
		 Метод YearSeries возвращает
		 текущее значение года для каждой точки ряда в зависимости от заданных
		 периодов расчёта.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
