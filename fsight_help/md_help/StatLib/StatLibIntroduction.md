# Введение: Сборка Stat

Введение: Сборка Stat
-


# Введение в сборку Stat


Основными интерфейсами сборки Stat
 являются:


	- [ICoefficients](Interface/ICoefficients/ICoefficients.htm).
	 Возвращает параметры коэффициентов модели;


	- [IDistribution](Interface/IDistribution/IDistribution.htm).
	 Предназначен для работы с распределением;


	- [IForecast](Interface/IForecast/IForecast.htm). Определяет
	 параметры прогнозного ряда;


	- [IIntercept](Interface/IIntercept/IIntercept.htm).
	 Определяет параметры константы модели;


	- [IMissingData](Interface/IMissingData/IMissingData.htm).
	 Определяет параметры обработки пропусков;


	- [ISlSerie](Interface/ISlSerie/ISlSerie.htm). Определяет
	 параметры ряда данных;


	- [ISmR](Interface/ISmR/ISmR.htm). Предназначен для
	 интеграции с R;


	- [IStatistics](Interface/IStatistics/IStatistics.htm).
	 Содержит свойства и методы для работы со статистическими характеристиками
	 и функциями;


	- [IStatMethod](Interface/IStatMethod/IStatMethod.htm).
	 Содержит свойства и методы статистического метода;


	- [IStatPeriod](Interface/IStatPeriod/IStatPeriod.htm).
	 Определяет параметры периода идентификации;


	- [ISummaryStaistics](Interface/ISummaryStatistics/ISummaryStatistics.htm).
	 Возвращает статистические характеристики.


Все имеющиеся методы в сборке можно поделить:


[![](opened.gif)![](closed.gif)Корреляционно-регрессионный
 анализ](javascript:TextPopup(this))


		- [IQRegStatistics](Interface/IQRegStatistics/IQRegStatistics.htm).
		 Характеристики квантильной регрессии;


		- [ISm2SLS](Interface/ISm2SLS/ISm2SLS.htm). Метод
		 инструментальных переменных для оценки коэффициентов линейной
		 регрессии;


		- [ISmAutoCorrelation](Interface/ISmAutoCorrelation/ISmAutoCorrelation.htm).
		 Автокорреляционный анализ;


		- [ISmBinaryModel](Interface/ISmBinaryModel/ISmBinaryModel.htm).
		 Бинарная регрессия;


		- [ISmCensoredTruncatedRegression](Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.htm).
		 Линейная регрессия с урезанными или цензурированными данными;


		- [ISmLinearRegress](Interface/ISmLinearRegress/ISmLinearRegress.htm).
		 Линейная регрессионная модель (МНК);


		- [ISmNonLinearLeastSquare](Interface/ISmNonLinearLeastSquare/ISmNonLinearLeastSquare.htm).
		 Нелинейная регрессионная модель (нелинейный МНК);


		- [ISmPairCorrelation](Interface/ISmPairCorrelation/ISmPairCorrelation.htm).
		 Расчет парных коэффициентов корреляции;


		- [ISmPartialCorrelation](Interface/ISmPartialCorrelation/ISmPartialCorrelation.htm).
		 Расчет частных коэффициентов корреляции;


		- [ISmPooledModel](Interface/ISmPooledModel/ISmPooledModel.htm).
		 Регрессия на панельных данных;


		- [ISmQuantileRegression](Interface/ISmQuantileRegression/ISmQuantileRegression.htm).
		 Квантильная регрессия;


		- [ISmVarianceAnalysis](Interface/ISmVarianceAnalysis/ISmVarianceAnalysis.htm).
		 Дисперсионный анализ.


[![](opened.gif)![](closed.gif)Тесты спецификации](javascript:TextPopup(this))


		- [ISmARCHTest](Interface/ISmARCHTest/ISmARCHTest.htm).
		 Тест ARCH на гетероскедастичность;


		- [ISmBreuschPaganGodfreyTest](Interface/ISmBreuschPaganGodfreyTest/ISmBreuschPaganGodfreyTest.htm).Тест
		 Бреуша-Пагана-Годфри на гетероскедастичность;


		- [ISmBreuschPaganTest](Interface/ISmBreuschPaganTest/ISmBreuschPaganTest.htm).
		 Тест Бреуша-Пагана.


		- [ISmChowTest](Interface/ISmChowTest/ISmChowTest.htm).
		 Тест Чоу на наличие структурных изменений;


		- [ISmOmittedVariablesTest](Interface/ISmOmittedVariablesTest/ISmOmittedVariablesTest.htm).
		 Тест на пропущенные переменные;


		- [ISmRamseyRESSETTest](Interface/ISmRamseyRESSETTest/ISmRamseyRESSETTest.htm).
		 Критерий функциональной формы;


		- [ISmRedundantVariablesTest](Interface/ISmRedundantVariablesTest/ISmRedundantVariablesTest.htm).
		 Тест на избыточные переменные;


		- [ISmSerialCorrelationLMTest](Interface/ISmSerialCorrelationLMTest/ISmSerialCorrelationLMTest.htm).
		 Критерий Годфри автокорреляции остатков;


		- [ISmWhiteHeteroskedasticityTest](Interface/ISmWhiteHeteroskedasticityTest/ISmWhiteHeteroskedasticityTest.htm).
		 Тест Уайта на гетероскедастичность.


[![](opened.gif)![](closed.gif)Анализ временных
 рядов](javascript:TextPopup(this))


		- [ISmAugmentDickeyFullerTest](Interface/ISmAugmentDickeyFullerTest/ISmAugmentDickeyFullerTest.htm).
		 Тест Дики-Фуллера на проверку стационарности ряда;


		- [ISmCurveEstimation](Interface/ISmCurveEstimation/ISmCurveEstimation.htm).
		 Тренд с подбором функциональной зависимости;


		- [ISmDickeyFullerGLSTest](Interface/ISmDickeyFullerGLSTest/ISmDickeyFullerGLSTest.htm).
		 Обобщенный тест Дики-Фуллера;


		- [ISmElliotRothenbergStockTest](Interface/ISmElliotRothenbergStockTest/ISmElliotRothenbergStockTest.htm).
		 Тест Эллиота-Розенберга-Стока;


		- [ISmEngleGrangerTest](Interface/ISmEngleGrangerTest/ISmEngleGrangerTest.htm).
		 Тест Энгла-Гранжера;


		- [ISmGARCH](Interface/ISmGARCH/ISmGARCH.htm).
		 GARCH модель;


		- [ISmGrangerTest](Interface/ISmGrangerTest/ISmGrangerTest.htm).
		 Тест Гранжера;


		- [ISmKwiatkowskiPhillipsSchmidtShinTest](Interface/ISmKwiatkowskiPhillipsSchmidtShinTest/ISmKwiatkowskiPhillipsSchmidtShinTest.htm).
		 Тест Квятковского-Филлипса-Шмидта-Шина;


		- [ISmMarkovSwitchingGARCH](Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.htm).
		 Модель MS-GARCH (Markov switching GARCH) с одним переменным параметром:
		 среднее значение дисперсии;


		- [ISmNgPerronTest](Interface/ISmNgPerronTest/ISmNgPerronTest.htm).
		 Тест Нг-Перрона;


		- [ISmPhillipsPerronTest](Interface/ISmPhillipsPerronTest/ISmPhillipsPerronTest.htm).
		 Тест Филлипса-Перрона;


		- [ISmUnivariateSpectrumAnalysis](Interface/ISmUnivariateSpectrumAnalysis/ISmUnivariateSpectrumAnalysis.htm).
		 Спектральный анализ;


		- Модели распределенных лагов:


		-


			- [ISlGDLTerms](Interface/ISlGDLTerms/ISlGDLTerms.htm).
			 Модель геометрически распределенных лагов. Метод Койка;


			- [ISlPDLTermCollection](Interface/ISlPDLTermCollection/ISlPDLTermCollection.htm).
			 Модель полиноминально распределенных лагов. Метод Алмона;


		- Методы сглаживания:


		-


			- [ISmAutoRegress](Interface/ISmAutoRegress/ISmAutoRegress.htm).
			 Авторегрессионная модель;


			- [ISmBandpassFilter](Interface/ISmBandpassFilter/ISmBandpassFilter.htm).
			 Фильтр Бакстера-Кинга;


			- [ISmCensus1](Interface/ISmCensus1/ISmCensus1.htm).
			 Метод «Census I»,
			 который осуществляет выделение сезонной составляющей;


			- [ISmCensus2](Interface/ISmCensus2/ISmCensus2.htm).
			 Метод «X11», который
			 является усовершенствованным вариантом «Census
			 I»;


			- [ISmExponentialSmoothing](Interface/ISmExponentialSmoothing/ISmExponentialSmoothing.htm).
			 Экспоненциальное сглаживание;


			- [ISmFillGapsProcedure](Interface/ISmFillGapsProcedure/ISmFillGapsProcedure.htm).
			 Обработка пропусков рядов данных;


			- [ISmGreyForecast](Interface/ISmGreyForecast/ISmGreyForecast.htm).
			 Грей-метод;


			- [ISmHodrickPrescottFilter](Interface/ISmHodrickPrescottFilter/ISmHodrickPrescottFilter.htm).
			 Фильтр Ходрика-Прескотта;


			- [ISmLRXFilter](Interface/ISmLRXFilter/ISmLRXFilter.htm).
			 LRX-фильтр;


			- [ISmMedianSmoothing](Interface/ISmMedianSmoothing/ISmMedianSmoothing.htm).
			 Медианное сглаживание;


			- [ISmSlideSmoothing](Interface/ISmSlideSmoothing/ISmSlideSmoothing.htm).
			 Скользящее среднее;


			- [ISmTramoSeats](Interface/ISmTramoSeats/ISmTramoSeats.htm).
			 Методы «TRAMO» и
			 «SEATS»;


			- [ISmx12arima](Interface/ISmx12arima/ISmx12arima.htm).
			 Метод сезонных поправок «X12»;


			- [ISmVectorAutoRegress](Interface/ISmVectorAutoRegress/ISmVectorAutoRegress.htm).
			 Векторная авторегрессионная модель;


		- Динамические модели:


		-


			- [ISmCointegrationEq](Interface/ISmCointegrationEq/ISmCointegrationEq.htm).
			 Модель коинтеграции;


			- [ISmErrorCorrectionModel](Interface/ISmErrorCorrectionModel/ISmErrorCorrectionModel.htm).
			 Модель коррекции ошибок;


			- [ISmJohansenTest](Interface/ISmJohansenTest/ISmJohansenTest.htm).
			 Тест Йохансена;


			- [ISmPhillipsOuliarisTest](Interface/ISmPhillipsOuliarisTest/ISmPhillipsOuliarisTest.htm).
			 Тест Филлипса-Оуляриса.


[![](opened.gif)![](closed.gif)Методы оптимизации](javascript:TextPopup(this))


		- [ISmLinearProgramming](Interface/ISmLinearProgramming/ISmLinearProgramming.htm).
		 Линейное программирование;


		- [ISmNonLinearOptimization](Interface/ISmNonLinearOptimization/ISmNonLinearOptimization.htm).
		 Нелинейная оптимизация;


		-  [ISmQuadraticProgramming](Interface/ISmQuadraticProgramming/ISmQuadraticProgramming.htm).
		 Квадратичное программирование.


[![](opened.gif)![](closed.gif)Многомерный
 статистический анализ](javascript:TextPopup(this))


		- [ISmHierarchicalClusterAnalysis](Interface/ISmHierarchicalClusterAnalysis/ISmHierarchicalClusterAnalysis.htm).
		 Иерархический кластерный анализ;


		- [ISmKmeansClusterAnalysis](Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.htm).
		 Кластеризация методом к-средних;


		- [ISmPrincipalComponentAnalysis](Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.htm).
		 Метод главных компонент.


[![](opened.gif)![](closed.gif)Распределения
 и описательные статистики](javascript:TextPopup(this))


		- [ISmBetaDistribution](Interface/ISmBetaDistribution/ISmBetaDistribution.htm).
		 Бета-распределение;


		- [ISmBinomialDistribution](Interface/ISmBinomialDistribution/ISmBinomialDistribution.htm).
		 Биномиальное распределение;


		- [ISmCauchyDistribution](Interface/ISmCauchyDistribution/ISmCauchyDistribution.htm).
		 Распределение Коши;


		- [ISmChi2Distribution](Interface/ISmChi2Distribution/ISmChi2Distribution.htm).
		 Распределение хи-квадрат;


		- [ISmExponentialDistribution](Interface/ISmExponentialDistribution/ISmExponentialDistribution.htm).
		 Экспоненциальное распределение;


		- [ISmFisherDistribution](Interface/ISmFisherDistribution/ISmFisherDistribution.htm).
		 Распределение Фишера;


		- [ISmGammaDistribution](Interface/ISmGammaDistribution/ISmGammaDistribution.htm).
		 Гамма-распределение;


		- [ISmFisherTest](Interface/ISmFisherTest/ISmFisherTest.htm).
		 Теста Фишера;


		- [ISmGeneralizedExtremeValueDistribution](Interface/ISmGeneralizedExtremeValueDistribution/ISmGeneralizedExtremeValueDistribution.htm).
		 Обобщенное распределение экстремальных значений;


		- [ISmGeneralizedParetoDistribution](Interface/ISmGeneralizedParetoDistribution/ISmGeneralizedParetoDistribution.htm).
		 Обобщенное распределение Парето;


		- [ISmHyperGeometricDistribution](Interface/ISmHyperGeometricDistribution/ISmHyperGeometricDistribution.htm).
		 Гипергеометрическое распределение;


		- [ISmKolmogorovSmirnovTest](Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.htm).
		 Тест Колмогорова-Смирнова;


		- [ISmLogisticDistribution](Interface/ISmLogisticDistribution/ISmLogisticDistribution.htm).
		 Логистическое распределение;


		- [ISmLogNormalDistribution](Interface/ISmLogNormalDistribution/ISmLogNormalDistribution.htm).
		 Логнормальное распределение;


		- [ISmMultiNormalDistribution](Interface/ISmMultiNormalDistribution/ISmMultiNormalDistribution.htm).
		 Многомерное нормальное распределение;


		- [ISmNormalDistribution](Interface/ISmNormalDistribution/ISmNormalDistribution.htm).
		 Нормальное распределение;


		- [ISmParetoDistribution](Interface/ISmParetoDistribution/ISmParetoDistribution.htm).
		 Распределение Парето;


		- [ISmPoissonDistribution](Interface/ISmPoissonDistribution/ISmPoissonDistribution.htm).
		 Распределение Пуассона;


		- [ISmQPortions](Interface/ISmQPortions/ISmQPortions.htm).
		 Расчет квантилей и пр.;


		- [ISmStudentDistribution](Interface/ISmStudentDistribution/ISmStudentDistribution.htm).
		 Распределение Стьюдента;


		- [ISmUniformDistribution](Interface/ISmUniformDistribution/ISmUniformDistribution.htm).
		 Равномерное распределение;


		- [ISmWeibullDistribution](Interface/ISmWeibullDistribution/ISmWeibullDistribution.htm).
		 Распределение Вейбулла.


[![](opened.gif)![](closed.gif)Нахождение корней
 уравнений и систем уравнений](javascript:TextPopup(this))


		- [ISmLinearEquations](Interface/ISmLinearEquations/ISmLinearEquations.htm).
		 Решение системы линейных уравнений;


		- [ISmNonLinearEquations](Interface/ISmNonLinearEquations/ISmNonLinearEquations.htm).
		 Решение системы нелинейных уравнений;


		- [ISmSimultaneousSystem](Interface/ISmSimultaneousSystem/ISmSimultaneousSystem.htm).
		 Система одновременных уравнений.


[![](opened.gif)![](closed.gif)Методы интеллектуального
 анализа данных](javascript:TextPopup(this))


		- [ISmAssociationRules](Interface/ISmAssociationRules/ISmAssociationRules.htm).
		 Анализ ассоциаций;


		- [ISmBackPropagation](Interface/ISmBackPropagation/ISmBackPropagation.htm).
		 Заполнение пропусков с помощью сети обратного распространения;


		- [ISmCART](Interface/ISmCART/ISmCART.htm). Классификация
		 с помощью построения бинарных деревьев;


		- [ISmDecisionTree](Interface/ISmDecisionTree/ISmDecisionTree.htm).
		 Заполнение пропусков с помощью дерева решений;


		- [ISmDiscriminantAnalysis](Interface/ISmDiscriminantAnalysis/ISmDiscriminantAnalysis.htm).
		 Заполнение пропусков с помощью дискриминантного анализа;


		- [ISmGradientBoostedTree](Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.htm).
		 Классификация с помощью построения ансамбля деревьев методом градиентного
		 бустинга;


		- [ISmHighlightExceptions](Interface/ISmHighlightExceptions/ISmHighlightExceptions.htm).
		 Поиск исключений;


		- [ISmLogisticRegression](Interface/ISmLogisticRegression/ISmLogisticRegression.htm).
		 Заполнение пропусков с помощью логистической регрессии;


		- [ISmNaiveBayes](Interface/ISmNaiveBayes/ISmNaiveBayes.htm).
		 Выявление ключевых факторов с помощью наивного классификатора
		 Байеса;


		- [ISmRandomForest](Interface/ISmRandomForest/ISmRandomForest.htm).
		 Классификация с помощью построения ансамбля деревьев методом случайного
		 леса;


		- [ISmSelfOrganizingMap](Interface/ISmSelfOrganizingMap/ISmSelfOrganizingMap.htm).
		 Кластеризация данных с помощью самоорганизующихся карт Кохонена.


См.
 также:


[Интерфейсы
 сборки Stat](Interface/Interfaces.htm) | [Перечисления сборки
 Stat](Enums/StatLib_Enums.htm) | [Классы сборки Stat](Class/StatClass.htm) | [Примеры](Samples/Samples_main.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
