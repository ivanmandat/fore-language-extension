# X11

X11
-


# X11


## Синтаксис


X11(Input: [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm),

    Period: [IMsPeriod](kems.chm::/Interface/IMsPeriod/IMsPeriod.htm),

    OutputSeries: [MsOutputSeriesType](kems.chm::/enums/msoutputseriestype.htm),

    SeasonalEffect: [SeasonalityType](StatLib.chm::/Enums/SeasonalityType.htm),

    TradingDaysAdjustment: MsTradingDaysAdjustment,

    LowerSigma: Double,

    UpperSigma: Double,

    MovingAverage: String,

    WeightCoefficients: String,

    HolidayAdjustment: [MsHolidayAdjustment](kems.chm::/enums/msholidayadjustment.htm),

    SSAnalysis: Boolean)


## Параметры


Input. Входная переменная;


Period. Период, на котором
 рассчитывается метод. Если значение параметра Null,
 то метод рассчитывается на всём временном периоде;


OutputSeries. Тип ряда, выгружаемого
 в моделируемую переменную;


SeasonalEffect. Модель сезонности;


TradingDaysAdjustment. Поправка
 на рабочие дни. Необязательный параметр. По умолчанию поправки на рабочие
 дни не вычисляются;


LowerSigma. Нижняя граница
 сигма. Необязательный параметр. По умолчанию параметр равен 1,5;


UpperSigma. Верхняя граница
 сигма. Необязательный параметр. По умолчанию параметр равен 2,5;


MovingAverage. Скользящее среднее.
 Необязательный параметр. Значение параметра по умолчанию не задано;


WeightCoefficients. Весовые
 коэффициенты. Необязательный параметр. Значение параметра по умолчанию
 не задано;


HolidayAdjustment. Поправка
 на праздничные дни. Необязательный параметр. По умолчанию поправка на
 праздничные дни не производится;


SSAnalysis. Признак использования
 в расчете скользящих интервалов. Необязательный параметр. По умолчанию
 параметр имеет значение False
 - скользящие интервалы не применяются в расчете.


## Описание


Осуществляет сезонную декомпозицию и корректировку данных.


Примечание.
 Метод поддерживается только в ОС Windows.


## Пример


		 Формула
		 Результат
		 Применение


		 = X11({Brazil|BCA[t]}, SetPeriod("2000",
		 "2015"), MsOutputSeriesType.D10, SeasonalityType.Additive,
		 MsTradingDaysAdjustment.Auto)
		 Для показателя Brazil|BCA
		 будет выполнена сезонная декомпозиция и корректировка данных с
		 автоматической поправкой на рабочие дни на периоде с 2000 по 2015
		 год.


		 Можно использовать в формулах вычисляемых рядов базы данных
		 временных рядов и в формулах моделей контейнера моделирования,
		 основанных на атрибутах.


		 = X11(X1, Null, MsOutputSeriesType.D10, SeasonalityType.Additive,
		 MsTradingDaysAdjustment.No,
		1.8, 2.1, "", "", MsHolidayAdjustment.None,
		 False)


		 Для фактора X1 будет
		 выполнена сезонная декомпозиция и корректировка данных на всём
		 периоде без поправки на рабочие и праздничные дни и без использования
		 скользящих интервалов.
		 Можно использовать в формулах моделей контейнера моделирования,
		 основанных на переменных.


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) │ [Сглаживание](Func_Smoothing.htm) │ [IModelling.X11](kems.chm::/interface/imodelling/IModelling.X11.htm)
 │ Метод «[X11](Lib.chm::/02_Time_series_analysis/UiModelling_Census2.htm)»


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
