# MsFormulaKind

MsFormulaKind
-


# MsFormulaKind


## Описание


Перечисление MsFormulaKind используется
 для определения метода, используемого для расчета модели.


Используется следующими свойствами и методами:


	- [IMsFormula.Kind](../Interface/IMsFormula/IMsFormula.Kind.htm);


	- [IMsMetaModelVisualController.CreateSimpleModel](../Interface/IMsMetaModelVisualController/IMsMetaModelVisualController.CreateSimpleModel.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 -1
		 None. Метод не определен.


		 0
		 Deterministic. Детерминированное
		 уравнение.


		 1
		 LinearRegression. Линейная
		 регрессия.


		 2
		 ExponentialSmoothing.
		 Экспоненциальное сглаживание.


		 3
		 Arima. ARIMA.


		 4
		 User. Пользовательский
		 метод.


		 5
		 CurveEstimation. Универсальный
		 тренд.


		 6
		 SlideSmoothing. Скользящее
		 среднее.


		 7
		 MedianSmoothing. Медианное
		 сглаживание.


		 8
		 HodrickPrescottFilter.
		 Фильтр Ходрика-Прескотта.


		 9
		 NonLinearEquations.
		 Система уравнений.


		 10
		 InterindustryBalance.
		 Межотраслевой баланс.


		 11
		 ErrorCorrectionModel.
		 Векторная модель коррекции ошибок.


		 12
		 ECMEquation. Уравнение
		 в векторной модели коррекции ошибок.


		 13
		 NonLinearOptimization.
		 Нелинейная оптимизация.


		 14
		 Aggregation. Агрегация.


		 15
		 NonLinearRegression.
		 Нелинейная регрессия.


		 16
		 GreyForecast.
		 Грей-метод.


		 17
		 LRXFilter. LRX-фильтр.


		 18
		 CointegrationEquation.
		 Модель коррекции ошибок.


		 19
		 BandpassFilter.
		 Фильтр Бакстера-Кинга.


		 20
		 DetermAggregation.
		 Агрегация, рассчитываемая как детерминированное уравнение.


		 21
		 SLS2. Линейная
		 регрессия (оценка методом инструментальных переменных).


		 22
		 FillGaps. Метод
		 заполнения пропусков.


		 23
		 Cumulative. Метод
		 накопления.


		 24
		 Census2. Метод
		 сглаживания «X11» (метод сезонной декомпозиции и корректировки).

		Примечание.
		 Метод X11 поддерживается только в ОС Windows.


		 25
		 Collapse. Модель «Коллапс
		 (векторный расчет)» (осуществляет агрегацию данных с нижнего уровня
		 на верхний по календарному измерению).


		 26
		 Interpolate.
		 Модель «Интерполяция» (осуществляет дезагрегацию данных с верхнего
		 уровня на нижний по календарному измерению).


		 27
		 Splice. Сращивание
		 рядов.


		 28
		 LinearEquations. Система
		 одновременных уравнений.


		 29
		 BinaryRegression. Бинарная
		 регрессия.


		 30
		 PointwiseCollapse.
		 Модель «Коллапс (поточечный расчет)» (осуществляет поточечную
		 агрегацию данных с нижнего уровня на верхний по календарному измерению).


		 31
		 CrossDimensionAggregation.
		 Агрегация по группе, отметке или параметру, использующая метод
		 обработки пропусков.


		 32
		 PooledModel. Регрессия
		 на панельных данных.


		 33
		 ValueAtRisk. Модель
		 «Value-At-Risk».


		 34
		 Census1. Метод
		 сглаживания «Census1».


		 35
		 TargetOptimization.
		 Целевая функция.


		 36
		 R. Модель «R».


		 37
		 MatrixAggregation.
		 Матричная агрегация.


		 38
		 Validation. Модель
		 валидации данных.


		 39
		 UserOptimization.
		 Модель пользовательской оптимизации.


## Комментарии


Математическое описание методов приведено в разделе «Библиотека
 методов и моделей».


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm) |
 [Библиотека
 методов и моделей](Lib.chm::/UiModelling_Lib_Common.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
