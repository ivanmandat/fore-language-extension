# TsInversion

TsInversion
-


# TsInversion


## Описание


Перечисление TsInversion используется
 для определения способа начального преобразования, применяемые к переменным
 (рядам).


Используется следующими свойствами и методами:


	- [ILanerSerieDisplayParams.Inversion](Laner.chm::/Interface/ILanerSerieDisplayParams/ILanerSerieDisplayParams.Inversion.htm);


	- [ITsInversionInfo.Inversion](../Interface/ITsInversionInfo/ITsInversionInfo.Inversion.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Нет преобразования.


		 1
		 Log. Натуральный логарифм.


		 2
		 DLog. Разность логарифмов.


		 3
		 PCH. Темп прироста.


		 4
		 Diff. Разность.


		 5
		 Normalization. Нормализация.


		 6
		 Standardization. Стандартизация.


		 7
		 RateOfChange. Темп
		 роста.


		 8
		 PCHA. Годовой темп
		 прироста.


		 9
		 TS. Детрендирование.


		 10
		 SA. Устранение сезонности.


		 11
		 OA. Устранение выбросов.


## Комментарии


Log. Осуществляется логарифмирование
 точек ряда: ln(X[t]).


DLog. Находится разность логарифмов
 соседних точек моделируемой переменной за определенный период: (ln(x[t]/X[t-N]).


PCH. Осуществляется расчет изменения
 значений переменной в процентах к предыдущему периоду: (X[t]/X[t-N]-1)*100.


Diff. Вычисляется прирост значений
 ряда: X[t]-X[t-N].


Normalization. Осуществляется
 нормализация точек ряда: X[t]/σ(X),
 где σ -[среднеквадратическое
 отклонение](Lib.chm::/05_Statistics/UiModelling_ArgSqDev.htm) ряда.


Standardization. Осуществляется
 стандартизация точек ряда: (X[t]-M(X))/σ(X),
 где σ - [среднеквадратическое
 отклонение](Lib.chm::/05_Statistics/UiModelling_ArgSqDev.htm) ряда, M
 - [среднее
 значение](Lib.chm::/05_Statistics/UiModelling_Avg.htm)
 ряда.


RateOfChange. Осуществляется
 расчет темпа роста значений ряда: (X[t]/X[t-N]).


PCHA. Осуществляется расчет
 годового темпа прироста значений ряда: (((X[t]/X[t-1])^S)-1)*100,
 где S - число периодов в году.


TS. Производится устранение
 тренда по формуле: x[t]-f(x(t), S),
 где f(x(t), S) - тренд ряда,
 S - вид тренда, определяемый
 свойством [ITsInversionInfo.Dependence](../Interface/ITsInversionInfo/ITsInversionInfo.Dependence.htm).


SA. Осуществляется устранение
 с помощью метода Census1 по формуле: Iff(Х>=0,SA
 Multiplicative, SA Additive), Х
 - все значения ряда. SA Additive(Х[t])=X[t]-s1(X[t]),
 где s1 - сезонная составляющая
 ряда X[t]. SA
 Multiplicative(Х[t])=X[t]/s2(X[t])*100, где s2
 - сезонная составляющая ряда X[t].
 Вид сезонности также определяется свойством [ITsInversionInfo.Seasonality](../Interface/ITsInversionInfo/ITsInversionInfo.Seasonality.htm).


OA. Осуществляется устранение
 выбросов происходит по методу k-сигм: x[t]-f(x(t),
 k), где f(x(t), k), -
 выброс ряда x(t), k
 - параметр расчета по методу k-сигм, определяемый свойством [ITsInversionInfo.K](../Interface/ITsInversionInfo/ITsInversionInfo.K.htm).


См. также:


[Перечисления
 сборки Transform](KeTransform_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
