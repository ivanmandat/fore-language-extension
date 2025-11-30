# IStatistics

IStatistics
-


# IStatistics


Сборка: Stat;


## Описание


Интерфейс IStatistics содержит
 свойства и методы для работы со статистическими характеристиками и функциями.


## Иерархия наследования


           IStatistics


## Комментарии


Если при расчете функции или характеристики возникла ошибка, то будет
 возвращено значение 1.#QNAN.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Errors](IStatistics.Errors.htm)


		 Свойство Errors возвращает
		 сообщение обо всех ошибках и предупреждениях, возникших при расчетах.


		 ![](../../Property.gif)
		 [Status](IStatistics.Status.htm)


		 Свойство Status возвращает
		 статус выполнения расчета.


## Методы


		 Имя метода


		 Краткое описание


		 ![](../../Sub.gif)
		 [AveDev](IStatistics.AveDev.htm)


		 Метод AveDev возвращает
		 среднее абсолютных значений отклонений точек данных от среднего.


		 ![](../../Sub.gif)
		 [Average](IStatistics.Average.htm)


		 Метод Average возвращает
		 среднее арифметическое своих аргументов.


		 ![](../../Sub.gif)
		 [AverageDcml](IStatistics.AverageDcml.htm)


		 Метод AverageDcml возвращает
		 среднее арифметическое аргументов типа Decimal.


		 ![](../../Sub.gif)
		 [BetaDist](IStatistics.BetaDist.htm)


		 Метод BetaDist возвращает
		 интегральную функцию плотности бета-вероятности.


		 ![](../../Sub.gif)
		 [BetaInv](IStatistics.BetaInv.htm)


		 Метод BetaInv возвращает
		 обратную функцию к интегральной функции плотности бета-вероятности.


		 ![](../../Sub.gif)
		 [BinomDist](IStatistics.BinomDist.htm)


		 Метод BinomDist возвращает
		 отдельное значение биномиального распределения.


		 ![](../../Sub.gif)
		 [ChiDist](IStatistics.ChiDist.htm)


		 Метод ChiDist возвращает
		 одностороннюю вероятность распределения хи-квадрат.


		 ![](../../Sub.gif)
		 [ChiInv](IStatistics.ChiInv.htm)


		 Метод ChiInv возвращает
		 значение, обратное к односторонней вероятности распределения хи-квадрат.


		 ![](../../Sub.gif)
		 [ChiTest](IStatistics.ChiTest.htm)


		 Метод ChiTest возвращает
		 критерий независимости: значение распределения χ2 (хи-квадрат)
		 для статистического распределения и соответствующего числа степеней
		 свободы.


		 ![](../../Sub.gif)
		 [Confidence](IStatistics.Confidence.htm)


		 Метод Confidence возвращает
		 доверительный интервал для среднего генеральной совокупности.


		 ![](../../Sub.gif)
		 [Correl](IStatistics.Correl.htm)


		 Метод Correl возвращает
		 коэффициент корреляции между двумя рядами.


		 ![](../../Sub.gif)
		 [Count](IStatistics.Count.htm)


		 Метод Count возвращает
		 количество непустых элементов в массиве.


		 ![](../../Sub.gif)
		 [CountBlank](IStatistics.CountBlank.htm)


		 Метод CountBlank возвращает
		 количество пустых элементов в массиве.


		 ![](../../Sub.gif)
		 [Covar](IStatistics.Covar.htm)


		 Метод Covar возвращает
		 ковариацию, то есть среднее произведений отклонений для каждой
		 пары точек данных.


		 ![](../../Sub.gif)
		 [CritBinom](IStatistics.CritBinom.htm)


		 Метод CritBinom возвращает
		 наименьшее значение, для которого интегральное биномиальное распределение
		 больше или равно заданному критерию.


		 ![](../../Sub.gif)
		 [DevSq](IStatistics.DevSq.htm)


		 Метод DevSq возвращает
		 сумму квадратов отклонений точек данных от их среднего.


		 ![](../../Sub.gif)
		 [Dispersion](IStatistics.Dispersion.htm)


		 Метод Dispersion оценивает
		 дисперсию по выборке.


		 ![](../../Sub.gif)
		 [DispersionDcml](IStatistics.DispersionDcml.htm)


		 Метод DispersionDcml
		 оценивает дисперсию по выборке чисел типа Decimal.


		 ![](../../Sub.gif)
		 [DispersionP](IStatistics.DispersionP.htm)


		 Метод DispersionP вычисляет
		 дисперсию для генеральной совокупности.


		 ![](../../Sub.gif)
		 [DurbinWatsonProbabilities](IStatistics.DurbinWatsonProbabilities.htm)


		 Метод DurbinWatsonProbabilities
		 производит расчет значений вероятности границ интервала статистики
		 Дарбина-Уотсона.


		 ![](../../Sub.gif)
		 [DurbinWatsonStats](IStatistics.DurbinWatsonStats.htm)


		 Метод DurbinWatsonStats
		 возвращает приближенные значения границ интервала статистики Дарбина-Уотсона,
		 взятые из таблиц.


		 ![](../../Sub.gif)
		 [ExponDist](IStatistics.ExponDist.htm)


		 Метод ExponDist возвращает
		 экспоненциальное распределение.


		 ![](../../Sub.gif)
		 [FDist](IStatistics.FDist.htm)


		 Метод FDist возвращает
		 F-распределение вероятности.


		 ![](../../Sub.gif)
		 [FInv](IStatistics.FInv.htm)


		 Метод FInv возвращает
		 обратное значение для F-распределения вероятностей.


		 ![](../../Sub.gif)
		 [Fisher](IStatistics.Fisher.htm)


		 Метод Fisher возвращает
		 преобразование Фишера для аргумента Value.


		 ![](../../Sub.gif)
		 [FisherInv](IStatistics.FisherInv.htm)


		 Метод FisherInv возвращает
		 обратное преобразование Фишера.


		 ![](../../Sub.gif)
		 [Forecast](IStatistics.Forecast.htm)


		 Метод Forecast вычисляет
		 будущее значение по существующим значениям.


		 ![](../../Sub.gif)
		 [Frequency](IStatistics.Frequency.htm)


		 Метод Frequency вычисляет
		 частоту появления значений в интервале значений и возвращает массив
		 цифр.


		 ![](../../Sub.gif)
		 [FTest](IStatistics.FTest.htm)


		 Метод FTest возвращает
		 результат F-теста.


		 ![](../../Sub.gif)
		 [GammaDist](IStatistics.GammaDist.htm)


		 Метод GammaDist возвращает
		 гамма-распределение.


		 ![](../../Sub.gif)
		 [GammaFunc](IStatistics.GammaFunc.htm)


		 Свойство GammaFunc
		 возвращает значение Гамма-функции для указанного аргумента.


		 ![](../../Sub.gif)
		 [GammaInv](IStatistics.GammaInv.htm)


		 Метод GammaInv возвращает
		 обратное гамма-распределение.


		 ![](../../Sub.gif)
		 [GammaLn](IStatistics.GammaLn.htm)


		 Метод GammaLn возвращает
		 натуральный логарифм гамма-функции.


		 ![](../../Sub.gif)
		 [GeoMean](IStatistics.GeoMean.htm)


		 Метод GeoMean возвращает
		 среднее геометрическое значений массива положительных чисел.


		 ![](../../Sub.gif)
		 [Growth](IStatistics.Growth.htm)


		 Метод Growth рассчитывает
		 прогнозируемый экспоненциальный рост на основании имеющихся данных.


		 ![](../../Sub.gif)
		 [HarMean](IStatistics.HarMean.htm)


		 Метод HarMean возвращает
		 среднее гармоническое множества данных.


		 ![](../../Sub.gif)
		 [HypGeomDist](IStatistics.HypGeomDist.htm)


		 Метод HypGeomDist возвращает
		 гипергеометрическое распределение.


		 ![](../../Sub.gif)
		 [Intercept](IStatistics.Intercept.htm)


		 Метод Intercept вычисляет
		 точку пересечения линии с осью y.


		 ![](../../Sub.gif)
		 [JarqueBeraStat](IStatistics.JarqueBeraStat.htm)


		 Метод JarqueBeraStat
		 возвращает статистику Жака-Бера.


		 ![](../../Sub.gif)
		 [Kurt](IStatistics.Kurt.htm)


		 Метод Kurt возвращает
		 эксцесс множества данных.


		 ![](../../Sub.gif)
		 [KurtDcml](IStatistics.KurtDcml.htm)


		 Метод KurtDcml возвращает
		 эксцесс множества данных типа Decimal.


		 ![](../../Sub.gif)
		 [Large](IStatistics.Large.htm)


		 Метод Large возвращает
		 k-ое по величине значение из множества данных.


		 ![](../../Sub.gif)
		 [Linest](IStatistics.Linest.htm)


		 Метод Linest рассчитывает
		 статистику для ряда с применением метода наименьших квадратов.


		 ![](../../Sub.gif)
		 [Logest](IStatistics.Logest.htm)


		 Метод Logest возвращает
		 параметры экспоненциального тренда.


		 ![](../../Sub.gif)
		 [LogInv](IStatistics.LogInv.htm)


		 Метод LogInv возвращает
		 обратную функцию логарифмического нормального распределения.


		 ![](../../Sub.gif)
		 [LogNormDist](IStatistics.LogNormDist.htm)


		 Метод LogNormDist возвращает
		 интегральное логарифмическое нормальное распределение.


		 ![](../../Sub.gif)
		 [Max](IStatistics.Max.htm)


		 Метод Max возвращает
		 наибольшее значение из заданного набора значений.


		 ![](../../Sub.gif)
		 [MaxDcml](IStatistics.MaxDcml.htm)


		 Метод MaxDcml возвращает
		 наибольшее значение из набора значений типа Decimal.


		 ![](../../Sub.gif)
		 [Median](IStatistics.Median.htm)


		 Метод Median возвращает
		 медиану заданных чисел.


		 ![](../../Sub.gif)
		 [MedianDcml](IStatistics.MedianDcml.htm)


		 Метод MedianDcml возвращает
		 медиану заданных чисел типа Decimal.


		 ![](../../Sub.gif)
		 [Min](IStatistics.Min.htm)


		 Метод Min возвращает
		 наименьшее значение из заданного набора значений.


		 ![](../../Sub.gif)
		 [MinDcml](IStatistics.MinDcml.htm)


		 Метод MinDcml возвращает
		 наименьшее значение из набора значений типа Decimal.


		 ![](../../Sub.gif)
		 [Mode](IStatistics.Mode.htm)


		 Метод Mode возвращает
		 моду - наиболее часто встречающееся значение в массиве данных.


		 ![](../../Sub.gif)
		 [NegBinomDist](IStatistics.NegBinomDist.htm)


		 Метод NegBinomDist
		 возвращает отрицательное биномиальное распределение.


		 ![](../../Sub.gif)
		 [NormDist](IStatistics.NormDist.htm)


		 Метод NormDist возвращает
		 нормальную функцию распределения для указанного среднего и стандартного
		 отклонения.


		 ![](../../Sub.gif)
		 [NormInv](IStatistics.NormInv.htm)


		 Метод NormInv возвращает
		 обратное нормальное распределение.


		 ![](../../Sub.gif)
		 [NormsDist](IStatistics.NormsDist.htm)


		 Метод NormsDist возвращает
		 стандартное нормальное распределение.


		 ![](../../Sub.gif)
		 [NormsInv](IStatistics.NormsInv.htm)


		 Метод NormsInv возвращает
		 обратное значение стандартного нормального распределения.


		 ![](../../Sub.gif)
		 [Pearson](IStatistics.Pearson.htm)


		 Метод Pearson возвращает
		 коэффициент корреляции Пирсона (r).


		 ![](../../Sub.gif)
		 [Percentile](IStatistics.Percentile.htm)


		 Метод Percentile возвращает
		 k-ую процентиль для значений из интервала.


		 ![](../../Sub.gif)
		 [PercentileDcml](IStatistics.PercentileDcml.htm)


		 Метод PercentileDcml
		 возвращает k-ую процентиль для значений типа Decimal
		 из заданного интервала.


		 ![](../../Sub.gif)
		 [PercentRank](IStatistics.PercentRank.htm)


		 Метод PercentRank возвращает
		 категорию значения в наборе данных как процентное содержание в
		 наборе данных.


		 ![](../../Sub.gif)
		 [Permut](IStatistics.Permut.htm)


		 Метод Permut возвращает
		 количество перестановок для заданного числа объектов.


		 ![](../../Sub.gif)
		 [Poisson](IStatistics.Poisson.htm)


		 Метод Poisson возвращает
		 распределение Пуассона.


		 ![](../../Sub.gif)
		 [Prob](IStatistics.Prob.htm)


		 Метод Prob возвращает
		 вероятность того, что значение из интервала находится внутри заданных
		 пределов.


		 ![](../../Sub.gif)
		 [Quartile](IStatistics.Quartile.htm)


		 Метод Quartile возвращает
		 квартиль множества данных.


		 ![](../../Sub.gif)
		 [QuartileDcml](IStatistics.QuartileDcml.htm)


		 Метод QuartileDcml
		 возвращает квартиль множества данных типа Decimal.


		 ![](../../Sub.gif)
		 [Rank](IStatistics.Rank.htm)


		 Метод Rank возвращает
		 ранг числа в массиве чисел.


		 ![](../../Sub.gif)
		 [Rsq](IStatistics.Rsq.htm)


		 Метод Rsq возвращает
		 квадрат коэффициента корреляции Пирсона.


		 ![](../../Sub.gif)
		 [Skew](IStatistics.Skew.htm)


		 Метод Skew возвращает
		 асимметрию распределения.


		 ![](../../Sub.gif)
		 [SkewDcml](IStatistics.SkewDcml.htm)


		 Метод SkewDcml возвращает
		 асимметрию распределения для данных типа Decimal.


		 ![](../../Sub.gif)
		 [Slope](IStatistics.Slope.htm)


		 Метод Slope возвращает
		 наклон линии линейной регрессии.


		 ![](../../Sub.gif)
		 [Small](IStatistics.Small.htm)


		 Метод Small возвращает
		 k-ое наименьшее значение в множестве данных.


		 ![](../../Sub.gif)
		 [Standardize](IStatistics.Standardize.htm)


		 Метод Standardize возвращает
		 нормализованное значение для распределения, характеризуемого средним
		 и стандартным отклонением.


		 ![](../../Sub.gif)
		 [StDev](IStatistics.StDev.htm)


		 Метод StDev оценивает
		 стандартное отклонение по выборке.


		 ![](../../Sub.gif)
		 [StDevDcml](IStatistics.StDevDcml.htm)


		 Метод StDevDcml оценивает
		 стандартное отклонение по выборке чисел типа Decimal.


		 ![](../../Sub.gif)
		 [StDevP](IStatistics.StDevP.htm)


		 Метод StDevP вычисляет
		 стандартное отклонение по генеральной совокупности.


		 ![](../../Sub.gif)
		 [SteYX](IStatistics.SteYX.htm)


		 Метод SteYX возвращает
		 стандартную ошибку предсказанных значений Y для каждого значения
		 X в регрессии.


		 ![](../../Sub.gif)
		 [TDist](IStatistics.TDist.htm)


		 Метод TDist возвращает
		 процентные точки (вероятность) для t-распределения Стьюдента.


		 ![](../../Sub.gif)
		 [TInv](IStatistics.TInv.htm)


		 Метод TInv возвращает
		 t-значение распределения Стьюдента как функцию вероятности и числа
		 степеней свободы.


		 ![](../../Sub.gif)
		 [Trend](IStatistics.Trend.htm)


		 Метод Trend возвращает
		 значения в соответствии с линейным трендом.


		 ![](../../Sub.gif)
		 [TrimMean](IStatistics.TrimMean.htm)


		 Метод TrimMean возвращает
		 среднее внутренности множества данных.


		 ![](../../Sub.gif)
		 [TTest](IStatistics.TTest.htm)


		 Метод TTest возвращает
		 вероятность, соответствующую критерию Стьюдента.


		 ![](../../Sub.gif)
		 [Weibull](IStatistics.Weibull.htm)


		 Метод Weibull возвращает
		 распределение Вейбулла.


		 ![](../../Sub.gif)
		 [ZTest](IStatistics.ZTest.htm)


		 Метод ZTest возвращает
		 двустороннее P-значение z-теста.


См. также:


[Интерфейсы сборки Stat](../Interfaces.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
