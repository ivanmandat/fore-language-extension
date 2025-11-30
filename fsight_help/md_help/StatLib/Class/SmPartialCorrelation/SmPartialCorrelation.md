# SmPartialCorrelation

SmPartialCorrelation
-


# SmPartialCorrelation


Сборка: Stat;


## Описание


Класс SmPartialCorrelation реализует алгоритм расчета частных коэффициентов корреляции.


## Комментарии


Корреляция служит для оценки тесноты и направления линейной стохастической зависимости между изучаемыми переменными.


## Свойства, унаследованные от [ISmPartialCorrelation](../../Interface/ISmPartialCorrelation/ISmPartialCorrelation.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Data](../../Interface/ISmPartialCorrelation/ISmPartialCorrelation.Data.htm)
		 Свойство Data определяет
		 матрицу исходных данных.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmPartialCorrelation/ISmPartialCorrelation.MissingData.htm)
		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [PairCorrelationMatrix](../../Interface/ISmPartialCorrelation/ISmPartialCorrelation.PairCorrelationMatrix.htm)
		 Свойство PairCorrelationMatrix
		 возвращает матрицу парных коэффициентов корреляции.


		 ![](../../Property.gif)
		 [PartialCorrelationMatrix](../../Interface/ISmPartialCorrelation/ISmPartialCorrelation.PartialCorrelationMatrix.htm)
		 Свойство PartialCorrelationMatrix
		 возвращает матрицу частных коэффициентов корреляции.


		 ![](../../Property.gif)
		 [Weights](../../Interface/ISmPartialCorrelation/ISmPartialCorrelation.Weights.htm)
		 Свойство Weights определяет
		 вектор весов.


		 ![](../../Property.gif)
		 [X](../../Interface/ISmPartialCorrelation/ISmPartialCorrelation.X.htm)
		 Свойство X определяет
		 матрицу внешних переменных.


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


[Классы сборки Stat](../StatClass.htm) | [Частные коэффициенты корреляции](Lib.chm::/05_Statistics/UiModelling_CoeffCorr.htm) | [Автокорреляционный анализ](Lib.chm::/05_Statistics/UiModelling_Autocorrelation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
