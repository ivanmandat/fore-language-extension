# ISmCART

ISmCART
-


# ISmCART


Сборка: Stat;


## Описание


Интерфейс ISmCART предназначен
 для решения задач классификации путем построения бинарных деревьев.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmCART


## Комментарии


Бинарными деревья называют потому, что каждый узел дерева при разбиении
 имеет только двух потомков.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CategoriesList](ISmCART.CategoriesList.htm)


		 Свойство CategoriesList
		 возвращает список категорий объясняемого ряда.


		 ![](../../Property.gif)
		 [ClassificationSummary](ISmCART.ClassificationSummary.htm)
		 Свойство ClassificationSummary
		 возвращает сводные результаты классификации.


		 ![](../../Property.gif)
		 [Dependent](ISmCART.Dependent.htm)
		 Свойство Dependent
		 определяет объясняемый ряд.


		 ![](../../Property.gif)
		 [ExplanatoriesCategorical](ISmCART.ExplanatoriesCategorical.htm)
		 Свойство ExplanatoriesCategorical
		 возвращает объясняющие категориальные ряды.


		 ![](../../Property.gif)
		 [ExplanatoriesContinuous](ISmCART.ExplanatoriesContinuous.htm)
		 Свойство ExplanatoriesContinuous
		 определяет объясняющие количественные ряды.


		 ![](../../Property.gif)
		 [ExplanatoriesOrdered](ISmCART.ExplanatoriesOrdered.htm)
		 Свойство ExplanatoriesOrdered
		 определяет объясняющие порядковые ряды.


		 ![](../../Property.gif)
		 [FilledDependent](ISmCART.FilledDependent.htm)
		 Свойство FilledDependent
		 возвращает результирующую классификацию.


		 ![](../../Property.gif)
		 [RelevanceMeasure](ISmCART.RelevanceMeasure.htm)
		 Свойство RelevanceMeasure
		 возвращает критерии качества бинарной классификации.


		 ![](../../Property.gif)
		 [ROCcurve](ISmCART.ROCcurve.htm)
		 Свойство ROCcurve возвращает
		 параметры ROC-кривой.


		 ![](../../Property.gif)
		 [Tree](ISmCART.Tree.htm)
		 Свойство Tree
		 возвращает построенное дерево решений.


		 ![](../../Property.gif)
		 [TreeSizeSpecification](ISmCART.TreeSizeSpecification.htm)
		 Свойство TreeSizeSpecification
		 возвращает параметры, описывающие размер дерева.


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


[Интерфейсы
 сборки Stat](../Interfaces.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
