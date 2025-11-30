# Lrxf

Lrxf
-


# Lrxf


Lrxf(Input: [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm),

     Period: [IMsPeriod](kems.chm::/Interface/IMsPeriod/IMsPeriod.htm),

     PrioryValues: [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm),

     Weights1: [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm),

     Weights2: [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm),

     Smoothing: Double)


## Параметры


Input. Моделируемая переменная;


Period. Период, на котором
 рассчитывается метод. Если значение параметра Null,
 то метод рассчитывается на всём временном периоде;


PrioryValues. Входной ряд предварительных
 значений;


Weights1. Первые весовые значения;


Weights2. Вторые весовые значения;


Smoothing. Параметр сглаживания.


## Описание


Осуществляет моделирование переменной с
 помощью [LRX-фильтра](Lib.chm::/02_Time_series_analysis/UiModellling_LRX.htm).


## Пример


		 Формула
		 Результат
		 Применение


		 = Lrxf({Brazil|BCA}, SetPeriod("01.01.2005",
		 "01.01.2015"), {Sudan|BCA[t]},{China|BCA[t]},Null,100)
		 Для ряда Brazil|BCA
		 будет применено сглаживание с использованием LRX-фильтра на периоде
		 с 2005 по 2015 год. Входной ряд предварительных значений задан
		 рядом Sudan|BCA, первые
		 весовые значения - рядом China|BCA,
		 параметр сглаживания равен ста.


		 Можно использовать в формулах вычисляемых рядов базы данных
		 временных рядов и в формулах моделей контейнера моделирования,
		 основанных на атрибутах.


		 = Lrxf(X1,Null,X2,Null,Null,50)
		 Для фактора X1 будет
		 применено сглаживание с использованием LRX-фильтра на всём временном
		 периоде. Входной ряд предварительных значений задан фактором X2, весовые значения не заданы,
		 параметр сглаживания равен пятидесяти.
		 Можно использовать в формулах моделей контейнера моделирования,
		 основанных на переменных.


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) │ [Сглаживание](Func_Smoothing.htm) │ [IModelling.Lrxf](kems.chm::/interface/imodelling/IModelling.Lrxf.htm)
 │ Метод «[LRX-фильтр](Lib.chm::/02_Time_series_analysis/UiModellling_LRX.htm)»


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
