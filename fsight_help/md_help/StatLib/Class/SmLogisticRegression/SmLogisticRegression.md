# SmLogisticRegression

SmLogisticRegression
-


# SmLogisticRegression


Сборка: Stat;


## Описание


Класс SmLogisticRegression предназначен
 для интеллектуального анализа данных методом «Логистическая
 регрессия».


## Комментарии


Метод применяется, если требуется предсказать вероятность наступления
 некоего события на основе ряда признаков. Например, если требуется предсказать
 наличие заболевания у пациента на основе пола и возраста. Анализ предназначен
 только для бинарных данных.


## Свойства объекта класса, унаследованные от [ISmLogisticRegression](../../Interface/ISmLogisticRegression/ISmLogisticRegression.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ClassificationSummary](../../Interface/ISmLogisticRegression/ISmLogisticRegression.ClassificationSummary.htm)


		 Свойство ClassificationSummary
		 возвращает сводные результаты классификации.


		 ![](../../Property.gif)
		 [ModelCoefficients](../../Interface/ISmLogisticRegression/ISmLogisticRegression.ModelCoefficients.htm)
		 Свойство ModelCoefficients
		 возвращает рассчитанные коэффициенты модели.


		 ![](../../Property.gif)
		 [MaxIteration](../../Interface/ISmLogisticRegression/ISmLogisticRegression.MaxIteration.htm)


		 Свойство MaxIteration
		 определяет максимальное число итераций, за которое необходимо
		 получить решение.


		 ![](../../Property.gif)
		 [NumOfIter](../../Interface/ISmLogisticRegression/ISmLogisticRegression.NumOfIter.htm)


		 Свойство NumOfIter
		 возвращает число итераций, за которое было получено решение.


		 ![](../../Property.gif)
		 [Probabilities](../../Interface/ISmLogisticRegression/ISmLogisticRegression.Probabilities.htm)
		 Свойство Probabilities
		 возвращает ряд вероятностей прогноза логистической регрессии.


		 ![](../../Property.gif)
		 [ProbFitted](../../Interface/ISmLogisticRegression/ISmLogisticRegression.ProbFitted.htm)
		 Свойство ProbFitted
		 возвращает ряд вероятностей для обучающих объектов.


		 ![](../../Property.gif)
		 [RelevanceMeasure](../../Interface/ISmLogisticRegression/ISmLogisticRegression.RelevanceMeasure.htm)


		 Свойство RelevanceMeasure
		 возвращает критерии качества бинарной классификации.


		 ![](../../Property.gif)
		 [ROCcurve](../../Interface/ISmLogisticRegression/ISmLogisticRegression.ROCcurve.htm)


		 Свойство ROCcurve
		 возвращает параметры ROC-кривой.


		 ![](../../Property.gif)
		 [SummaryStatistics](../../Interface/ISmLogisticRegression/ISmLogisticRegression.SummaryStatistics.htm)
		 Свойство SummaryStatistics
		 возвращает рассчитанные статистические характеристики модели.


		 ![](../../Property.gif)
		 [Threshold](../../Interface/ISmLogisticRegression/ISmLogisticRegression.Threshold.htm)


		 Свойство Threshold
		 определяет пороговое значение вероятности для классификации.


		 ![](../../Property.gif)
		 [Tolerance](../../Interface/ISmLogisticRegression/ISmLogisticRegression.Tolerance.htm)


		 Свойство Tolerance
		 определяет точность решения.


## Свойства объекта класса, унаследованные от [IDataMining](../../Interface/IDataMining/IDataMining.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Dependent](../../Interface/IDataMining/IDataMining.Dependent.htm)
		 Свойство Dependent
		 возвращает объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](../../Interface/IDataMining/IDataMining.Explanatories.htm)
		 Свойство Explanatories
		 возвращает коллекцию признаков для классификации.


		 ![](../../Property.gif)
		 [FilledDependent](../../Interface/IDataMining/IDataMining.FilledDependent.htm)
		 Свойство FilledDependent
		 возвращает ряд с результатами расчета.


## Свойства объекта класса, унаследованные от [IStatMethodValid](../../Interface/IStatMethodValid/IStatMethodValid.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CrossValidation](../../Interface/IStatMethodValid/IStatMethodValid.CrossValidation.htm)
		 Свойство CrossValidation возвращает
		 настройки кросс-валидации.


		 ![](../../Property.gif)
		 [PerformanceScores](../../Interface/IStatMethodValid/IStatMethodValid.PerformanceScores.htm)


		 Свойство PerformanceScores
		 возвращает результаты кросс-валидации.


## Свойства объекта класса, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DisplayName](../../Interface/IStatMethod/IStatMethod.DisplayName.htm)
		 Свойство DisplayName
		 возвращает внешнее наименование метода.


		 ![](../../Property.gif)
		 [ErrorByStatus](../../Interface/IStatMethod/IStatMethod.ErrorByStatus.htm)
		 Свойство ErrorByStatus
		 возвращает сообщение об ошибке по ее номеру.


		 ![](../../Property.gif)
		 [Errors](../../Interface/IStatMethod/IStatMethod.Errors.htm)
		 Свойство Errors возвращает
		 сообщение обо всех ошибках и предупреждениях.


		 ![](../../Property.gif)
		 [Name](../../Interface/IStatMethod/IStatMethod.Name.htm)
		 Свойство Name возвращает
		 внутреннее наименование метода.


		 ![](../../Property.gif)
		 [PerformanceTime](../../Interface/IStatMethod/IStatMethod.PerformanceTime.htm)
		 Свойство PerformanceTime
		 возвращает время выполнения метода.


		 ![](../../Property.gif)
		 [Status](../../Interface/IStatMethod/IStatMethod.Status.htm)
		 Свойство Status возвращает
		 статус выполнения метода.


		 ![](../../Property.gif)
		 [SupportsR](../../Interface/IStatMethod/IStatMethod.SupportsR.htm)
		 Свойство SupportsR
		 возвращает признак поддержки расчета статистического метода через
		 пакет R.


		 ![](../../Property.gif)
		 [UseR](../../Interface/IStatMethod/IStatMethod.UseR.htm)
		 Свойство UseR определяет,
		 будет ли расчет статистического метода производиться через
		 пакет R.


		 ![](../../Property.gif)
		 [WarningByStatus](../../Interface/IStatMethod/IStatMethod.WarningByStatus.htm)
		 Свойство WarningByStatus
		 возвращает текст предупреждения по его номеру.


		 ![](../../Property.gif)
		 [Warnings](../../Interface/IStatMethod/IStatMethod.Warnings.htm)
		 Свойство Warnings возвращает предупреждения, возникшие при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsCount](../../Interface/IStatMethod/IStatMethod.WarningsCount.htm)
		 Свойство WarningsCount
		 возвращает число предупреждений, возникших при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsNumbers](../../Interface/IStatMethod/IStatMethod.WarningsNumbers.htm)
		 Свойство WarningsNumbers возвращает номера предупреждений, возникших при расчёте метода.


## Методы объекта класса, унаследованные от [IStatMethodValid](../../Interface/IStatMethodValid/IStatMethodValid.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [ExecuteValidation](../../Interface/IStatMethodValid/IStatMethodValid.ExecuteValidation.htm)
		 Метод ExecuteValidation
		 выполняет кросс-валидацию.


## Методы объекта класса, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [Clone](../../Interface/IStatMethod/IStatMethod.Clone.htm)
		 Метод Clone клонирует
		 объект статистического метода.


		 ![](../../Sub.gif)
		 [Execute](../../Interface/IStatMethod/IStatMethod.Execute.htm)
		 Метод Execute осуществляет
		 выполнение статистического метода.


		 ![](../../Sub.gif)
		 [LoadFromXML](../../Interface/IStatMethod/IStatMethod.LoadFromXML.htm)
		 Метод LoadFromXML осуществляет
		 загрузку настроек статистического метода из XML-кода.


		 ![](../../Sub.gif)
		 [SaveToXML](../../Interface/IStatMethod/IStatMethod.SaveToXML.htm)
		 Метод SaveToXML осуществляет
		 выгрузку настроек статистического метода в XML-код.


См. также:


[Классы
 сборки Stat](../StatClass.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
