# ISmGradientBoostedTree

ISmGradientBoostedTree
-


# ISmGradientBoostedTree


Сборка: Stat;


## Описание


Интерфейс ISmGradientBoostedTree
 предназначен для настройки параметров расчета градиентного бустинга.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           [IStatMethodValid](../IStatMethodValid/IStatMethodValid.htm)


           ISmGradientBoostedTree


## Комментарии


Градиентный бустинг - алгоритм машинного обучения для решения задач
 регрессии и классификации, основанный на ансамбле деревьев решений. Алгоритм
 представляет собой поэтапную оптимизацию функции потерь путем метода градиентного
 спуска.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CategoriesList](ISmGradientBoostedTree.CategoriesList.htm)
		 Свойство CategoriesList
		 возвращает список категорий объясняемого ряда.


		 ![](../../Property.gif)
		 [ClassificationSummary](ISmGradientBoostedTree.ClassificationSummary.htm)
		 Свойство ClassificationSummary
		 возвращает сводные результаты классификации.


		 ![](../../Property.gif)
		 [Dependent](ISmGradientBoostedTree.Dependent.htm)
		 Свойство Dependent
		 возвращает объясняемый ряд.


		 ![](../../Property.gif)
		 [ExplanatoriesCategorical](ISmGradientBoostedTree.ExplanatoriesCategorical.htm)
		 Свойство ExplanatoriesCategorical
		 возвращает объясняющие категориальные ряды.


		 ![](../../Property.gif)
		 [ExplanatoriesContinuous](ISmGradientBoostedTree.ExplanatoriesContinuous.htm)
		 Свойство ExplanatoriesContinuous
		 определяет объясняющие количественные ряды.


		 ![](../../Property.gif)
		 [ExplanatoriesOrdered](ISmGradientBoostedTree.ExplanatoriesOrdered.htm)
		 Свойство ExplanatoriesOrdered
		 определяет объясняющие порядковые ряды.


		 ![](../../Property.gif)
		 [FilledDependent](ISmGradientBoostedTree.FilledDependent.htm)
		 Свойство FilledDependent
		 возвращает результирующую классификацию.


		 ![](../../Property.gif)
		 [LearningRate](ISmGradientBoostedTree.LearningRate.htm)
		 Свойство LearningRate
		 определяет коэффициент скорости обучения.


		 ![](../../Property.gif)
		 [NumberOfIterations](ISmGradientBoostedTree.NumberOfIterations.htm)
		 Свойство NumberOfIterations
		 определяет число итераций.


		 ![](../../Property.gif)
		 [PseudoProbability](ISmGradientBoostedTree.PseudoProbability.htm)
		 Свойство PseudoProbability
		 возвращает апостериорные вероятности.


		 ![](../../Property.gif)
		 [RelevanceMeasure](ISmGradientBoostedTree.RelevanceMeasure.htm)


		 Свойство RelevanceMeasure
		 возвращает критерии качества бинарной классификации.


		 ![](../../Property.gif)
		 [ROCcurve](ISmGradientBoostedTree.ROCcurve.htm)


		 Свойство ROCcurve
		 возвращает параметры ROC-кривой.


		 ![](../../Property.gif)
		 [Trees](ISmGradientBoostedTree.Trees.htm)


		 Свойство Trees
		 возвращает массив деревьев.


		 ![](../../Property.gif)
		 [TreeSizeSpecification](ISmGradientBoostedTree.TreeSizeSpecification.htm)


		 Свойство TreeSizeSpecification
		 возвращает параметры, описывающие размер деревьев.


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


## Методы, унаследованные от [IStatMethodValid](../IStatMethodValid/IStatMethodValid.htm)


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


[Интерфейсы сборки Stat](../Interfaces.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
