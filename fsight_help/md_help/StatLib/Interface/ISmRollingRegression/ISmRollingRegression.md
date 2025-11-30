# ISmRollingRegression

ISmRollingRegression
-


# ISmRollingRegression


Сборка: Stat;


## Описание


Интерфейс ISmRollingRegression
 предназначен для работы с параметрами скользящей регрессии.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmRollingRegression


## Комментарии


Метод скользящей регрессии позволяет построить траектории оценок коэффициентов
 вместе с их доверительными границами и проверить гипотезу о постоянстве
 коэффициентов регрессионного уравнения.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CoefficientsMatrix](ISmRollingRegression.CoefficientsMatrix.htm)
		 Свойство CoefficientsMatrix возвращает
		 матрицу оценок коэффициентов.


		 ![](../../Property.gif)
		 [Explained](ISmRollingRegression.Explained.htm)
		 Свойство Explained
		 возвращает объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](ISmRollingRegression.Explanatories.htm)
		 Свойство Explanatories
		 возвращает объясняющие ряды.


		 ![](../../Property.gif)
		 [Intercept](ISmRollingRegression.Intercept.htm)
		 Свойство Intercept
		 возвращает оценку константы регрессии и её характеристики.


		 ![](../../Property.gif)
		 [MissingData](ISmRollingRegression.MissingData.htm)
		 Свойство MissingData
		 возвращает метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmRollingRegression.ModelPeriod.htm)
		 Свойство ModelPeriod
		 возвращает параметры периода идентификации.


		 ![](../../Property.gif)
		 [PValueMatrix](ISmRollingRegression.PValueMatrix.htm)
		 Свойство PValueMatrix
		 возвращает матрицу вероятностей для матрицы t-статистик.


		 ![](../../Property.gif)
		 [RollingForecast](ISmRollingRegression.RollingForecast.htm)
		 Свойство RollingForecast
		 возвращает значения прогнозного ряда.


		 ![](../../Property.gif)
		 [RollingStep](ISmRollingRegression.RollingStep.htm)
		 Свойство RollingStep
		 определяет шаг сдвига окна.


		 ![](../../Property.gif)
		 [StandartErrorMatrix](ISmRollingRegression.StandartErrorMatrix.htm)
		 Свойство StandartErrorMatrix
		 возвращает матрицу стандартных ошибок для коэффициентов.


		 ![](../../Property.gif)
		 [TStatisticMatrix](ISmRollingRegression.TStatisticMatrix.htm)
		 Свойство TStatisticMatrix
		 возвращает матрицу t-статистик.


		 ![](../../Property.gif)
		 [Window](ISmRollingRegression.Window.htm)
		 Свойство Window
		 определяет ширину окна скользящей регрессии.


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
 | [Скользящая
 регрессия](Lib.chm::/01_Regression_models/Rolling_Regression.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
