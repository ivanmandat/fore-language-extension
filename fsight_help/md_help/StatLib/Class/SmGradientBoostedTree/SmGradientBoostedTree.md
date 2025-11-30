# SmGradientBoostedTree

SmGradientBoostedTree
-


# SmGradientBoostedTree


Сборка: Stat;


## Описание


Класс SmGradientBoostedTree
 предназначен для настройки параметров расчета градиентного бустинга.


## Комментарии


Градиентный бустинг - алгоритм машинного обучения для решения задач
 регрессии и классификации, основанный на ансамбле деревьев решений. Алгоритм
 представляет собой поэтапную оптимизацию функции потерь путем метода градиентного
 спуска.


## Свойства объекта класса, унаследованные от [ISmGradientBoostedTree](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CategoriesList](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.CategoriesList.htm)
		 Свойство CategoriesList
		 возвращает список категорий объясняемого ряда.


		 ![](../../Property.gif)
		 [ClassificationSummary](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.ClassificationSummary.htm)
		 Свойство ClassificationSummary
		 возвращает сводные результаты классификации.


		 ![](../../Property.gif)
		 [Dependent](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.Dependent.htm)
		 Свойство Dependent
		 возвращает объясняемый ряд.


		 ![](../../Property.gif)
		 [ExplanatoriesCategorical](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.ExplanatoriesCategorical.htm)
		 Свойство ExplanatoriesCategorical
		 возвращает объясняющие категориальные ряды.


		 ![](../../Property.gif)
		 [ExplanatoriesContinuous](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.ExplanatoriesContinuous.htm)
		 Свойство ExplanatoriesContinuous
		 определяет объясняющие количественные ряды.


		 ![](../../Property.gif)
		 [ExplanatoriesOrdered](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.ExplanatoriesOrdered.htm)
		 Свойство ExplanatoriesOrdered
		 определяет объясняющие порядковые ряды.


		 ![](../../Property.gif)
		 [FilledDependent](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.FilledDependent.htm)
		 Свойство FilledDependent
		 возвращает результирующую классификацию.


		 ![](../../Property.gif)
		 [LearningRate](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.LearningRate.htm)
		 Свойство LearningRate
		 определяет коэффициент скорости обучения.


		 ![](../../Property.gif)
		 [NumberOfIterations](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.NumberOfIterations.htm)
		 Свойство NumberOfIterations
		 определяет число итераций.


		 ![](../../Property.gif)
		 [PseudoProbability](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.PseudoProbability.htm)
		 Свойство PseudoProbability
		 возвращает апостериорные вероятности.


		 ![](../../Property.gif)
		 [RelevanceMeasure](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.RelevanceMeasure.htm)


		 Свойство RelevanceMeasure
		 возвращает критерии качества бинарной классификации.


		 ![](../../Property.gif)
		 [ROCcurve](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.ROCcurve.htm)


		 Свойство ROCcurve
		 возвращает параметры ROC-кривой.


		 ![](../../Property.gif)
		 [Trees](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.Trees.htm)


		 Свойство Trees
		 возвращает массив деревьев.


		 ![](../../Property.gif)
		 [TreeSizeSpecification](../../Interface/ISmGradientBoostedTree/ISmGradientBoostedTree.TreeSizeSpecification.htm)


		 Свойство TreeSizeSpecification
		 возвращает параметры, описывающие размер деревьев.


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
