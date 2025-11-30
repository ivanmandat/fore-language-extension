# ISmRandomForest

ISmRandomForest
-


# ISmRandomForest


Сборка: Stat;


## Описание


Интерфейс ISmRandomForest предназначен
 для работы с ансамблем деревьев решений Random Forest.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmRandomForest


## Комментарии


Случайный лес (от англ. Random
 Forest) - метод решения задач классификации, предложенный Лео Брейманом.
 Метод относится к классу алгоритмов машинного обучения.


Для построения решающих правил предполагается использование ансамбля
 (комитета) решающих деревьев. Классификация объектов проводится путём
 голосования: каждое дерево сформированного леса относит рассматриваемый
 объект к одной из категорий. Побеждает категория, получившая наибольшее
 число голосов.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CategoriesList](ISmRandomForest.CategoriesList.htm)
		 Свойство CategoriesList
		 возвращает список категорий.


		 ![](../../Property.gif)
		 [ClassificationSummary](ISmRandomForest.ClassificationSummary.htm)
		 Свойство ClassificationSummary
		 возвращает сводные результаты классификации.


		 ![](../../Property.gif)
		 [Dependent](ISmRandomForest.Dependent.htm)
		 Свойство Dependent
		 возвращает объясняемый ряд.


		 ![](../../Property.gif)
		 [ExplanatoriesCategorical](ISmRandomForest.ExplanatoriesCategorical.htm)
		 Свойство ExplanatoriesCategorical
		 возвращает объясняющие категориальные ряды.


		 ![](../../Property.gif)
		 [ExplanatoriesContinuous](ISmRandomForest.ExplanatoriesContinuous.htm)
		 Свойство ExplanatoriesContinuous
		 возвращает объясняющие количественные ряды.


		 ![](../../Property.gif)
		 [ExplanatoriesOrdered](ISmRandomForest.ExplanatoriesOrdered.htm)
		 Свойство ExplanatoriesOrdered
		 возвращает объясняющие порядковые ряды.


		 ![](../../Property.gif)
		 [FilledDependent](ISmRandomForest.FilledDependent.htm)
		 Свойство FilledDependent
		 возвращает предсказанную классификацию.


		 ![](../../Property.gif)
		 [Forest](ISmRandomForest.Forest.htm)
		 Свойство Forest возвращает
		 массив деревьев.


		 ![](../../Property.gif)
		 [ForestSize](ISmRandomForest.ForestSize.htm)
		 Свойство ForestSize
		 определяет число деревьев в случайном лесе.


		 ![](../../Property.gif)
		 [LearningSamplePortion](ISmRandomForest.LearningSamplePortion.htm)
		 Свойство LearningSamplePortion
		 определяет долю выборки для обучения дерева.


		 ![](../../Property.gif)
		 [NumberOfPredictors](ISmRandomForest.NumberOfPredictors.htm)
		 Свойство NumberOfPredictors
		 определяет число признаков, которые формируют случайное дерево.


		 ![](../../Property.gif)
		 [ROCcurve](ISmRandomForest.ROCcurve.htm)
		 Свойство ROCcurve
		 возвращает параметры ROC-кривой.


		 ![](../../Property.gif)
		 [Probability](ISmRandomForest.Probability.htm)
		 Свойство Probability
		 возвращает двумерный массив вероятностей попадания наблюдений
		 в выбранные категории.


		 ![](../../Property.gif)
		 [TreeSizeSpecification](ISmRandomForest.TreeSizeSpecification.htm)
		 Свойство TreeSizeSpecification
		 возвращает спецификацию дерева.


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
