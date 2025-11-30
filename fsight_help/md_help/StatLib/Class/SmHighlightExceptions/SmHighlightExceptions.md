# SmHighlightExceptions

SmHighlightExceptions
-


# SmHighlightExceptions


Сборка: Stat;


## Описание


Класс SmHighlightExceptions
 предназначен для выполнения интеллектуального анализа данных методом «Поиск исключений».


## Комментарии


Данный вид анализа определяет «степень исключительности» для каждого
 признака каждого объекта на основании всей совокупности данных и значений
 других признаков. Исходя из полученной характеристики, можно ранжировать
 объекты по их исключительности.


## Свойства объекта класса, унаследованные от [ISmHighlightExceptions](../../Interface/ISmHighlightExceptions/ISmHighlightExceptions.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Data](../../Interface/ISmHighlightExceptions/ISmHighlightExceptions.Data.htm)


		 Свойство Data определяет
		 исходные данные.


		 ![](../../Property.gif)
		 [ExceptionLevels](../../Interface/ISmHighlightExceptions/ISmHighlightExceptions.ExceptionLevels.htm)


		 Свойство ExceptionLevels
		 возвращает массив уровней исключительности наблюдений (по всем
		 признакам).


		 ![](../../Property.gif)
		 [HEDistance](../../Interface/ISmHighlightExceptions/ISmHighlightExceptions.HEDistance.htm)


		 Свойство HEDistance
		 определяет способ вычисления расстояний Махаланобиса.


		 ![](../../Property.gif)
		 [Indexes](../../Interface/ISmHighlightExceptions/ISmHighlightExceptions.Indexes.htm)


		 Свойство Indexes возвращает
		 индексы признаков, имеющих максимальный уровень исключительности.


		 ![](../../Property.gif)
		 [IsContinuousData](../../Interface/ISmHighlightExceptions/ISmHighlightExceptions.IsContinuousData.htm)


		 Свойство IsContinuousData
		 определяет, являются данные количественными или категориальными.


		 ![](../../Property.gif)
		 [MahalanobisDistances](../../Interface/ISmHighlightExceptions/ISmHighlightExceptions.MahalanobisDistances.htm)


		 Свойство MahalanobisDistances
		 возвращает ряд расстояний Махаланобиса.


		 ![](../../Property.gif)
		 [MedianDeviationFraction](../../Interface/ISmHighlightExceptions/ISmHighlightExceptions.MedianDeviationFraction.htm)


		 Свойство MedianDeviationFraction
		 определяет долю медианного отклонения.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmHighlightExceptions/ISmHighlightExceptions.MissingData.htm)


		 Свойство MissingData
		 определяет метод обработки пропусков, применяемый к исходным данным.


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
