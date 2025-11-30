# ISmQPortions

ISmQPortions
-


# ISmQPortions


Сборка: Stat;


## Описание


Интерфейс ISmQPortions возвращает
 значения медианы, квартилей, процентилей и децилей для некоторой выборки.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmQPortions


## Комментарии


Квантили специальных видов:


	- Процентиль. xp/100, где p =1, …, 99.


	- Дециль. xp/10, где p = 1, …, 9.


	- Квартиль. xp/4, где p=1,…,4. Выделяют
	 верхнюю x0,75 и
	 нижнюю x0,25 квартили.


	- [Медиана](Lib.chm::/05_Statistics/UiModelling_Median.htm). x0,5. Средний показатель распределения.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Deciles](ISmQPortions.Deciles.htm)
		 Свойство Deciles возвращает
		 децили.


		 ![](../../Property.gif)
		 [Median](ISmQPortions.Median.htm)
		 Свойство Median возвращает
		 медиану.


		 ![](../../Property.gif)
		 [Procentiles](ISmQPortions.Procentiles.htm)
		 Свойство Procentiles
		 возвращает процентили.


		 ![](../../Property.gif)
		 [Quartiles](ISmQPortions.Quartiles.htm)
		 Свойство Quartiles
		 возвращает квартили.


		 ![](../../Property.gif)
		 [Samples](ISmQPortions.Samples.htm)
		 Свойство Samples определяет
		 исходную выборку.


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
