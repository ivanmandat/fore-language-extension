# ISmBackPropagation

ISmBackPropagation
-


# ISmBackPropagation


Сборка: Stat;


## Описание


Интерфейс ISmBackPropagation предназначен
 для интеллектуального анализа данных методом «Сеть
 обратного распространения».


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           [IStatMethodValid](../IStatMethodValid/IStatMethodValid.htm)


           [IDataMining](../IDataMining/IDataMining.htm)


           ISmBackPropagation


## Комментарии


Для заполнения пропусков в методе используется нейронная сеть обратного
 распространения. В данной сети применяется алгоритм обучения, в котором
 ошибка распространяется от выходного слоя к входному, т. е. в направлении,
 противоположном направлению распространения сигнала при нормальном функционировании
 сети.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CategoriesList](ISmBackPropagation.CategoriesList.htm)
		 Свойство CategoriesList
		 возвращает список категорий.


		 ![](../../Property.gif)
		 [ClassificationSummary](ISmBackPropagation.ClassificationSummary.htm)
		 Свойство ClassificationSummary
		 возвращает сводные результаты классификации.


		 ![](../../Property.gif)
		 [DeltasMinimum](ISmBackPropagation.DeltasMinimum.htm)
		 Свойство DeltasMinimum
		 определяет минимальное значение параметра точности delta.


		 ![](../../Property.gif)
		 [Epoch](ISmBackPropagation.Epoch.htm)
		 Свойство Epoch
		 определяет максимальное число итераций.


		 ![](../../Property.gif)
		 [Explanatories](ISmBackPropagation.Explanatories.htm)
		 Свойство Explanatories
		 возвращает коллекцию признаков для классификации.


		 ![](../../Property.gif)
		 [Neurons](ISmBackPropagation.Neurons.htm)
		 Свойство Neurons
		 определяет количество нейронов во внутреннем слое.


		 ![](../../Property.gif)
		 [RelevanceMeasure](ISmBackPropagation.RelevanceMeasure.htm)
		 Свойство RelevanceMeasure
		 возвращает критерии качества бинарной классификации.


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


[Интерфейсы сборки Stat](../Interfaces.htm) |
 [Сеть
 обратного распространения](Lib.chm::/06_DataMining/Lib_BackPropagation.htm) | [Заполнение
 по шаблону](DataMining.chm::/Master/Methods/DataMining_PatternSubst.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
