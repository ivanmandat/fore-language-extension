# ISmLogisticRegression

ISmLogisticRegression
-


# ISmLogisticRegression


Сборка: Stat;


## Описание


Интерфейс ISmLogisticRegression предназначен
 для интеллектуального анализа данных методом «Логистическая
 регрессия».


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           [IStatMethodValid](../IStatMethodValid/IStatMethodValid.htm)


           [IDataMining](../IDataMining/IDataMining.htm)


           ISmLogisticRegression


## Комментарии


Метод применяется, если требуется предсказать вероятность наступления
 некоего события на основе ряда признаков. Например, если требуется предсказать
 наличие заболевания у пациента на основе пола и возраста. Анализ предназначен
 только для бинарных данных.


Объясняемый ряд должен быть массивом бинарных значений, характеризующих
 наличие или отсутствие признака. Если наблюдение имеет значение Double.Nan,
 то это значит, что наблюдение пропущено и нужно определить вероятность
 наличия рассматриваемого признака. Объясняемые ряды должны представлять
 собой категориальные данные.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ClassificationSummary](ISmLogisticRegression.ClassificationSummary.htm)


		 Свойство ClassificationSummary
		 возвращает сводные результаты классификации.


		 ![](../../Property.gif)
		 [ModelCoefficients](ISmLogisticRegression.ModelCoefficients.htm)
		 Свойство ModelCoefficients
		 возвращает рассчитанные коэффициенты модели.


		 ![](../../Property.gif)
		 [MaxIteration](ISmLogisticRegression.MaxIteration.htm)


		 Свойство MaxIteration
		 определяет максимальное число итераций, за которое необходимо
		 получить решение.


		 ![](../../Property.gif)
		 [NumOfIter](ISmLogisticRegression.NumOfIter.htm)


		 Свойство NumOfIter
		 возвращает число итераций, за которое было получено решение.


		 ![](../../Property.gif)
		 [Probabilities](ISmLogisticRegression.Probabilities.htm)
		 Свойство Probabilities
		 возвращает ряд вероятностей прогноза логистической регрессии.


		 ![](../../Property.gif)
		 [ProbFitted](ISmLogisticRegression.ProbFitted.htm)
		 Свойство ProbFitted
		 возвращает ряд вероятностей для обучающих объектов.


		 ![](../../Property.gif)
		 [RelevanceMeasure](ISmLogisticRegression.RelevanceMeasure.htm)


		 Свойство RelevanceMeasure
		 возвращает критерии качества бинарной классификации.


		 ![](../../Property.gif)
		 [ROCcurve](ISmLogisticRegression.ROCcurve.htm)


		 Свойство ROCcurve
		 возвращает параметры ROC-кривой.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmLogisticRegression.SummaryStatistics.htm)
		 Свойство SummaryStatistics
		 возвращает рассчитанные статистические характеристики модели.


		 ![](../../Property.gif)
		 [Threshold](ISmLogisticRegression.Threshold.htm)


		 Свойство Threshold
		 определяет пороговое значение вероятности для классификации.


		 ![](../../Property.gif)
		 [Tolerance](ISmLogisticRegression.Tolerance.htm)


		 Свойство Tolerance
		 определяет точность решения.


## Свойства, унаследованные от [IDataMining](../IDataMining/IDataMining.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Dependent](../IDataMining/IDataMining.Dependent.htm)
		 Свойство Dependent
		 возвращает объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](../IDataMining/IDataMining.Explanatories.htm)
		 Свойство Explanatories
		 возвращает коллекцию признаков для классификации.


		 ![](../../Property.gif)
		 [FilledDependent](../IDataMining/IDataMining.FilledDependent.htm)
		 Свойство FilledDependent
		 возвращает ряд с результатами расчета.


## Свойства, унаследованные от [IStatMethodValid](../IStatMethodValid/IStatMethodValid.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CrossValidation](../IStatMethodValid/IStatMethodValid.CrossValidation.htm)
		 Свойство CrossValidation возвращает
		 настройки кросс-валидации.


		 ![](../../Property.gif)
		 [PerformanceScores](../IStatMethodValid/IStatMethodValid.PerformanceScores.htm)


		 Свойство PerformanceScores
		 возвращает результаты кросс-валидации.


## Свойства, унаследованные от [IStatMethod](../IStatMethod/IStatMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DisplayName](../IStatMethod/IStatMethod.DisplayName.htm)
		 Свойство DisplayName
		 возвращает внешнее наименование метода.


		 ![](../../Property.gif)
		 [ErrorByStatus](../IStatMethod/IStatMethod.ErrorByStatus.htm)
		 Свойство ErrorByStatus
		 возвращает сообщение об ошибке по ее номеру.


		 ![](../../Property.gif)
		 [Errors](../IStatMethod/IStatMethod.Errors.htm)
		 Свойство Errors возвращает
		 сообщение обо всех ошибках и предупреждениях.


		 ![](../../Property.gif)
		 [Name](../IStatMethod/IStatMethod.Name.htm)
		 Свойство Name возвращает
		 внутреннее наименование метода.


		 ![](../../Property.gif)
		 [PerformanceTime](../IStatMethod/IStatMethod.PerformanceTime.htm)
		 Свойство PerformanceTime
		 возвращает время выполнения метода.


		 ![](../../Property.gif)
		 [Status](../IStatMethod/IStatMethod.Status.htm)
		 Свойство Status возвращает
		 статус выполнения метода.


		 ![](../../Property.gif)
		 [SupportsR](../IStatMethod/IStatMethod.SupportsR.htm)
		 Свойство SupportsR
		 возвращает признак поддержки расчета статистического метода через
		 пакет R.


		 ![](../../Property.gif)
		 [UseR](../IStatMethod/IStatMethod.UseR.htm)
		 Свойство UseR определяет,
		 будет ли расчет статистического метода производиться через
		 пакет R.


		 ![](../../Property.gif)
		 [WarningByStatus](../IStatMethod/IStatMethod.WarningByStatus.htm)
		 Свойство WarningByStatus
		 возвращает текст предупреждения по его номеру.


		 ![](../../Property.gif)
		 [Warnings](../IStatMethod/IStatMethod.Warnings.htm)
		 Свойство Warnings возвращает предупреждения, возникшие при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsCount](../IStatMethod/IStatMethod.WarningsCount.htm)
		 Свойство WarningsCount
		 возвращает число предупреждений, возникших при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsNumbers](../IStatMethod/IStatMethod.WarningsNumbers.htm)
		 Свойство WarningsNumbers возвращает номера предупреждений, возникших при расчёте метода.


## Методы объекта класса, унаследованные от [IStatMethodValid](../IStatMethodValid/IStatMethodValid.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [ExecuteValidation](../IStatMethodValid/IStatMethodValid.ExecuteValidation.htm)
		 Метод ExecuteValidation
		 выполняет кросс-валидацию.


## Методы, унаследованные от [IStatMethod](../IStatMethod/IStatMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [Clone](../IStatMethod/IStatMethod.Clone.htm)
		 Метод Clone клонирует
		 объект статистического метода.


		 ![](../../Sub.gif)
		 [Execute](../IStatMethod/IStatMethod.Execute.htm)
		 Метод Execute осуществляет
		 выполнение статистического метода.


		 ![](../../Sub.gif)
		 [LoadFromXML](../IStatMethod/IStatMethod.LoadFromXML.htm)
		 Метод LoadFromXML осуществляет
		 загрузку настроек статистического метода из XML-кода.


		 ![](../../Sub.gif)
		 [SaveToXML](../IStatMethod/IStatMethod.SaveToXML.htm)
		 Метод SaveToXML осуществляет
		 выгрузку настроек статистического метода в XML-код.


См. также:


[Интерфейсы сборки Stat](../Interfaces.htm) |
 [Логистическая
 регрессия](Lib.chm::/06_DataMining/Lib_LogisticRegr.htm) | [Заполнение
 по шаблону](DataMining.chm::/Master/Methods/DataMining_PatternSubst.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
