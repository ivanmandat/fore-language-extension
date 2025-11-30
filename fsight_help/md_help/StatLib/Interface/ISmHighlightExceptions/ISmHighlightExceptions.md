# ISmHighlightExceptions

ISmHighlightExceptions
-


# ISmHighlightExceptions


Сборка: Stat;


## Описание


Интерфейс ISmHighlightExceptions
 предназначен для выполнения интеллектуального анализа данных методом «Поиск исключений».


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmHighlightExceptions


## Комментарии


Данный вид анализа определяет «степень исключительности» для каждого
 признака каждого объекта на основании всей совокупности данных и значений
 других признаков. Исходя из полученной характеристики, можно ранжировать
 объекты по их исключительности.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Data](ISmHighlightExceptions.Data.htm)


		 Свойство Data определяет
		 исходные данные.


		 ![](../../Property.gif)
		 [ExceptionLevels](ISmHighlightExceptions.ExceptionLevels.htm)


		 Свойство ExceptionLevels
		 возвращает массив уровней исключительности наблюдений (по всем
		 признакам).


		 ![](../../Property.gif)
		 [HEDistance](ISmHighlightExceptions.HEDistance.htm)


		 Свойство HEDistance
		 определяет способ вычисления расстояний Махаланобиса.


		 ![](../../Property.gif)
		 [Indexes](ISmHighlightExceptions.Indexes.htm)


		 Свойство Indexes возвращает
		 индексы признаков, имеющих максимальный уровень исключительности.


		 ![](../../Property.gif)
		 [IsContinuousData](ISmHighlightExceptions.IsContinuousData.htm)


		 Свойство IsContinuousData
		 определяет, являются данные количественными или категориальными.


		 ![](../../Property.gif)
		 [MahalanobisDistances](ISmHighlightExceptions.MahalanobisDistances.htm)


		 Свойство MahalanobisDistances
		 возвращает ряд расстояний Махаланобиса.


		 ![](../../Property.gif)
		 [MedianDeviationFraction](ISmHighlightExceptions.MedianDeviationFraction.htm)


		 Свойство MedianDeviationFraction
		 определяет долю медианного отклонения.


		 ![](../../Property.gif)
		 [MissingData](ISmHighlightExceptions.MissingData.htm)


		 Свойство MissingData
		 определяет метод обработки пропусков, применяемый к исходным данным.


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


[Интерфейсы сборки Stat](../Interfaces.htm) |
 [Анализ
 исключений](Lib.chm::/06_DataMining/Lib_ExceptionSearch.htm) |
 [Поиск
 исключений](DataMining.chm::/Master/Methods/DataMining_ExceptionSearch.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
