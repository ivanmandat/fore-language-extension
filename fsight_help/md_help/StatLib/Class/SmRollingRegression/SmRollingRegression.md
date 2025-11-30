# SmRollingRegression

SmRollingRegression
-


# SmRollingRegression


Сборка: Stat;


## Описание


Класс SmRollingRegression предназначен
 для работы с параметрами скользящей регрессии.


## Комментарии


Метод скользящей регрессии позволяет построить траектории оценок коэффициентов
 вместе с их доверительными границами и проверить гипотезу о постоянстве
 коэффициентов регрессионного уравнения.


## Свойства, унаследованные от [ISmRollingRegression](../../Interface/ISmRollingRegression/ISmRollingRegression.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CoefficientsMatrix](../../Interface/ISmRollingRegression/ISmRollingRegression.CoefficientsMatrix.htm)
		 Свойство CoefficientsMatrix возвращает
		 матрицу оценок коэффициентов.


		 ![](../../Property.gif)
		 [Explained](../../Interface/ISmRollingRegression/ISmRollingRegression.Explained.htm)
		 Свойство Explained
		 возвращает объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](../../Interface/ISmRollingRegression/ISmRollingRegression.Explanatories.htm)
		 Свойство Explanatories
		 возвращает объясняющие ряды.


		 ![](../../Property.gif)
		 [Intercept](../../Interface/ISmRollingRegression/ISmRollingRegression.Intercept.htm)
		 Свойство Intercept
		 возвращает оценку константы регрессии и её характеристики.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmRollingRegression/ISmRollingRegression.MissingData.htm)
		 Свойство MissingData
		 возвращает метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmRollingRegression/ISmRollingRegression.ModelPeriod.htm)
		 Свойство ModelPeriod
		 возвращает параметры периода идентификации.


		 ![](../../Property.gif)
		 [PValueMatrix](../../Interface/ISmRollingRegression/ISmRollingRegression.PValueMatrix.htm)
		 Свойство PValueMatrix
		 возвращает матрицу вероятностей для матрицы t-статистик.


		 ![](../../Property.gif)
		 [RollingForecast](../../Interface/ISmRollingRegression/ISmRollingRegression.RollingForecast.htm)
		 Свойство RollingForecast
		 возвращает значения прогнозного ряда.


		 ![](../../Property.gif)
		 [RollingStep](../../Interface/ISmRollingRegression/ISmRollingRegression.RollingStep.htm)
		 Свойство RollingStep
		 определяет шаг сдвига окна.


		 ![](../../Property.gif)
		 [StandartErrorMatrix](../../Interface/ISmRollingRegression/ISmRollingRegression.StandartErrorMatrix.htm)
		 Свойство StandartErrorMatrix
		 возвращает матрицу стандартных ошибок для коэффициентов.


		 ![](../../Property.gif)
		 [TStatisticMatrix](../../Interface/ISmRollingRegression/ISmRollingRegression.TStatisticMatrix.htm)
		 Свойство TStatisticMatrix
		 возвращает матрицу t-статистик.


		 ![](../../Property.gif)
		 [Window](../../Interface/ISmRollingRegression/ISmRollingRegression.Window.htm)
		 Свойство Window
		 определяет ширину окна скользящей регрессии.


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
 сборки Stat](../StatClass.htm) | [Скользящая
 регрессия](Lib.chm::/01_Regression_models/Rolling_Regression.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
