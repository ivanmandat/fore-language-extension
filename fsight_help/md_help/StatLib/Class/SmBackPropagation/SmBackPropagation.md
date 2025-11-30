# SmBackPropagation

SmBackPropagation
-


# SmBackPropagation


Сборка: Stat;


## Описание


Класс SmBackPropagation предназначен
 для интеллектуального анализа данных методом «Сеть
 обратного распространения».


## Комментарии


Метод использует для заполнения пропусков нейронную сеть обратного распространения.
 В данной сети применяется алгоритм обучения, в котором ошибка распространяется
 от выходного слоя к входному, т. е. в направлении, противоположном
 направлению распространения сигнала при нормальном функционировании сети.
 Метод работает на числовых значениях.


## Свойства объекта класса, унаследованные от [ISmBackPropagation](../../Interface/ISmBackPropagation/ISmBackPropagation.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CategoriesList](../../Interface/ISmBackPropagation/ISmBackPropagation.CategoriesList.htm)
		 Свойство CategoriesList
		 возвращает список категорий.


		 ![](../../Property.gif)
		 [ClassificationSummary](../../Interface/ISmBackPropagation/ISmBackPropagation.ClassificationSummary.htm)
		 Свойство ClassificationSummary
		 возвращает сводные результаты классификации.


		 ![](../../Property.gif)
		 [DeltasMinimum](../../Interface/ISmBackPropagation/ISmBackPropagation.DeltasMinimum.htm)
		 Свойство DeltasMinimum
		 определяет минимальное значение параметра точности delta.


		 ![](../../Property.gif)
		 [Epoch](../../Interface/ISmBackPropagation/ISmBackPropagation.Epoch.htm)
		 Свойство Epoch
		 определяет максимальное число итераций.


		 ![](../../Property.gif)
		 [Explanatories](../../Interface/ISmBackPropagation/ISmBackPropagation.Explanatories.htm)
		 Свойство Explanatories
		 возвращает коллекцию признаков для классификации.


		 ![](../../Property.gif)
		 [Neurons](../../Interface/ISmBackPropagation/ISmBackPropagation.Neurons.htm)
		 Свойство Neurons
		 определяет количество нейронов во внутреннем слое.


		 ![](../../Property.gif)
		 [RelevanceMeasure](../../Interface/ISmBackPropagation/ISmBackPropagation.RelevanceMeasure.htm)
		 Свойство RelevanceMeasure
		 возвращает критерии качества бинарной классификации.


## Свойства объекта класса, унаследованные
 от [IDataMining](../../Interface/IDataMining/IDataMining.htm)


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


## Свойства объекта класса, унаследованные
 от [IStatMethodValid](../../Interface/IStatMethodValid/IStatMethodValid.htm)


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


## Свойства объекта класса, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


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


## Методы объекта класса, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


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
