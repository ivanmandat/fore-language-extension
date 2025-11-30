# SmCART

SmCART
-


# SmCART


Сборка: Stat;


## Описание


Класс SmCART предназначен для
 решения задач классификации путем построения бинарных деревьев.


## Комментарии


Бинарными деревья называют потому, что каждый узел дерева при разбиении
 имеет только двух потомков.


## Свойства объекта класса, унаследованные от [ISmCART](../../Interface/ISmCART/ISmCART.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CategoriesList](../../Interface/ISmCART/ISmCART.CategoriesList.htm)


		 Свойство CategoriesList
		 возвращает список категорий объясняемого ряда.


		 ![](../../Property.gif)
		 [ClassificationSummary](../../Interface/ISmCART/ISmCART.ClassificationSummary.htm)
		 Свойство ClassificationSummary
		 возвращает сводные результаты классификации.


		 ![](../../Property.gif)
		 [Dependent](../../Interface/ISmCART/ISmCART.Dependent.htm)
		 Свойство Dependent
		 определяет объясняемый ряд.


		 ![](../../Property.gif)
		 [ExplanatoriesCategorical](../../Interface/ISmCART/ISmCART.ExplanatoriesCategorical.htm)
		 Свойство ExplanatoriesCategorical
		 возвращает объясняющие категориальные ряды.


		 ![](../../Property.gif)
		 [ExplanatoriesContinuous](../../Interface/ISmCART/ISmCART.ExplanatoriesContinuous.htm)
		 Свойство ExplanatoriesContinuous
		 определяет объясняющие количественные ряды.


		 ![](../../Property.gif)
		 [ExplanatoriesOrdered](../../Interface/ISmCART/ISmCART.ExplanatoriesOrdered.htm)
		 Свойство ExplanatoriesOrdered
		 определяет объясняющие порядковые ряды.


		 ![](../../Property.gif)
		 [FilledDependent](../../Interface/ISmCART/ISmCART.FilledDependent.htm)
		 Свойство FilledDependent
		 возвращает результирующую классификацию.


		 ![](../../Property.gif)
		 [RelevanceMeasure](../../Interface/ISmCART/ISmCART.RelevanceMeasure.htm)
		 Свойство RelevanceMeasure
		 возвращает критерии качества бинарной классификации.


		 ![](../../Property.gif)
		 [ROCcurve](../../Interface/ISmCART/ISmCART.ROCcurve.htm)
		 Свойство ROCcurve возвращает
		 параметры ROC-кривой.


		 ![](../../Property.gif)
		 [Tree](../../Interface/ISmCART/ISmCART.Tree.htm)
		 Свойство Tree
		 возвращает построенное дерево решений.


		 ![](../../Property.gif)
		 [TreeSizeSpecification](../../Interface/ISmCART/ISmCART.TreeSizeSpecification.htm)
		 Свойство TreeSizeSpecification
		 возвращает параметры, описывающие размер дерева.


## Свойства, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


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


## Методы, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


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
