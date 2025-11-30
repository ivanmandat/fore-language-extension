# SmCointegrationEq

SmCointegrationEq
-


# SmCointegrationEq


## Описание


Класс SmCointegrationEq реализует алгоритм метода коррекции ошибок.


## Свойства, унаследованные от [ISmCointegrationEq](../../Interface/ISmCointegrationEq/ISmCointegrationEq.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CointegralEquation](../../Interface/ISmCointegrationEq/ISmCointegrationEq.CointegralEquation.htm)
		 Свойство CointegralEquation
		 возвращает параметры коэффициентов при коинтеграционном уравнении.


		 ![](../../Property.gif)
		 [CommonExogenious](../../Interface/ISmCointegrationEq/ISmCointegrationEq.CommonExogenious.htm)
		 Свойство CommonExogenious
		 определяет массив индексов экзогенных переменных, входящих в группу
		 переменных с краткосрочными коинтеграционными связями.


		 ![](../../Property.gif)
		 [Equation](../../Interface/ISmCointegrationEq/ISmCointegrationEq.Equation.htm)
		 Свойство Equation возвращает
		 параметры уравнения метода.


		 ![](../../Property.gif)
		 [LongTermExogenious](../../Interface/ISmCointegrationEq/ISmCointegrationEq.LongTermExogenious.htm)
		 Свойство LongTermExogenious
		 определяет массив индексов экзогенных переменных, входящих в группу
		 переменных с долгосрочными коинтеграционными связями.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmCointegrationEq/ISmCointegrationEq.MissingData.htm)
		 Свойство MissingData
		 возвращает параметры обработки пропусков объясняемого ряда.


		 ![](../../Property.gif)
		 [ModelType](../../Interface/ISmCointegrationEq/ISmCointegrationEq.ModelType.htm)
		 Свойство ModelType
		 определяет тип модели коррекции ошибок.


		 ![](../../Property.gif)
		 [Period](../../Interface/ISmCointegrationEq/ISmCointegrationEq.Period.htm)
		 Свойство Period возвращает
		 параметры периода идентификации модели.


		 ![](../../Property.gif)
		 [SerieAROrder](../../Interface/ISmCointegrationEq/ISmCointegrationEq.SerieAROrder.htm)
		 Свойство SerieAROrder
		 определяет порядок авторегрессии эндогенных переменных.


		 ![](../../Property.gif)
		 [VARStatistics](../../Interface/ISmCointegrationEq/ISmCointegrationEq.VARStatistics.htm)
		 Свойство VARStatistics
		 возвращает значения статистик векторной авторегрессии, рассчитанные
		 для модели.


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [ParseSerieAROrder](../../Interface/ISmCointegrationEq/ISmCointegrationEq.ParseSerieAROrder.htm)


		 Метод ParseSerieAROrder
		 осуществляет разбор строкового представления порядка авторегрессии
		 эндогенных переменных.


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


[Классы сборки Stat](../StatClass.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
