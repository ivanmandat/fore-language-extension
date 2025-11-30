# ISmCointegrationEq

ISmCointegrationEq
-


# ISmCointegrationEq


Сборка: Stat;


## Описание


Интерфейс ISmCointegrationEq
 определяет параметры метода коррекции ошибок.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmCointegrationEq


## Комментарии


Метод коррекции ошибок допускает следующие виды модели:


	- без тренда в авторегрессии, без константы в коинтеграционном
	 уравнении;


	- без тренда в авторегрессии, с константой в коинтеграционном
	 уравнении;


	- с константой в авторегрессии и в коинтеграционном уравнении
	 (тренд в исходных данных).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CointegralEquation](ISmCointegrationEq.CointegralEquation.htm)
		 Свойство CointegralEquation
		 возвращает параметры коэффициентов при коинтеграционном уравнении.


		 ![](../../Property.gif)
		 [CommonExogenious](ISmCointegrationEq.CommonExogenious.htm)
		 Свойство CommonExogenious
		 определяет массив индексов экзогенных переменных, входящих в группу
		 переменных с краткосрочными коинтеграционными связями.


		 ![](../../Property.gif)
		 [Equation](ISmCointegrationEq.Equation.htm)
		 Свойство Equation возвращает
		 параметры уравнения метода.


		 ![](../../Property.gif)
		 [LongTermExogenious](ISmCointegrationEq.LongTermExogenious.htm)
		 Свойство LongTermExogenious
		 определяет массив индексов экзогенных переменных, входящих в группу
		 переменных с долгосрочными коинтеграционными связями.


		 ![](../../Property.gif)
		 [MissingData](ISmCointegrationEq.MissingData.htm)
		 Свойство MissingData
		 возвращает параметры обработки пропусков объясняемого ряда.


		 ![](../../Property.gif)
		 [ModelType](ISmCointegrationEq.ModelType.htm)
		 Свойство ModelType
		 определяет тип модели коррекции ошибок.


		 ![](../../Property.gif)
		 [Period](ISmCointegrationEq.Period.htm)
		 Свойство Period возвращает
		 параметры периода идентификации модели.


		 ![](../../Property.gif)
		 [SerieAROrder](ISmCointegrationEq.SerieAROrder.htm)
		 Свойство SerieAROrder
		 определяет порядок авторегрессии эндогенных переменных.


		 ![](../../Property.gif)
		 [VARStatistics](ISmCointegrationEq.VARStatistics.htm)
		 Свойство VARStatistics
		 возвращает значения статистик векторной авторегрессии, рассчитанные
		 для модели.


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [ParseSerieAROrder](ISmCointegrationEq.ParseSerieAROrder.htm)


		 Метод ParseSerieAROrder
		 осуществляет разбор строкового представления порядка авторегрессии
		 эндогенных переменных.


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
