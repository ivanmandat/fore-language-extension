# Census1

Census1
-


# Census1


Census1(Input: [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm),

     Period: [IMsPeriod](kems.chm::/Interface/IMsPeriod/IMsPeriod.htm),

     OutputSeries: [MsOutputCensus1SeriesType](KeMs.chm::/Enums/MsOutputCensus1SeriesType.htm),

     SeasonalEffect: [SeasonalityType](StatLib.chm::/Enums/SeasonalityType.htm),

     SeasonalPeriod: Integer,

     Casewise: [MsCasewise](kems.chm::/enums/mscasewise.htm))


## Параметры


Input. Моделируемая переменная;


Period. Период, на котором
 рассчитывается метод. Если значение параметра Null,
 то метод рассчитывается на всём временном периоде;


OutputSeries. Тип ряда, выгружаемого
 в моделируемую переменную;


SeasonalEffect. Модель сезонности;


SeasonalPeriod. Продолжительность
 сезонного периода. Необязательный параметр. По умолчанию параметр имеет
 значение 12;


Casewise. Метод обработки пропусков.
 Необязательный параметр. По умолчанию параметр имеет значение MsCasewise.No
 - обработка пропусков не используется.


## Описание


Осуществляет моделирование переменной с
 помощью метода [Census1](Lib.chm::/02_Time_series_analysis/UiModelling_Census1.htm).


## Пример


		 Формула
		 Результат
		 Применение


		 = Census1({Чикаго - население[t]}, setperiod("01.01.2000",
		 "01.01.2015"), MsOutputCensus1SeriesType.MovingAverage,
		 SeasonalityType.Additive)
		 Данные временного ряда Чикаго
		 - население[t] будут сглажены методом Census1 на периоде
		 с 2005 по 2015 год. После расчёта будет выгружаться сглаженный
		 ряд.


		 Можно использовать в формулах вычисляемых рядов базы данных
		 временных рядов и в формулах моделей контейнера моделирования,
		 основанных на атрибутах.


		 = Census1(X1, Null, MsOutputCensus1SeriesType.MovingAverage,
		 SeasonalityType.Additive,12,MsCasewise.Yes)
		 Для фактора X1 будет
		 применено сглаживание методом Census1 на всём периоде. Расчёт
		 выполняется с применением обработки пропусков методом Casewise.
		 После расчёта будет выгружаться сглаженный ряд.
		 Можно использовать в формулах моделей контейнера моделирования,
		 основанных на переменных.


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) │ [Сглаживание](Func_Smoothing.htm) │ [IModelling.Census1](kems.chm::/interface/imodelling/IModelling.Census1.htm)
 │ Метод «[Census1](Lib.chm::/02_Time_series_analysis/UiModelling_Census1.htm)»


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
