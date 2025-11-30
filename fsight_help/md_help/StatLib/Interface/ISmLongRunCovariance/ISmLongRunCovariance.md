# ISmLongRunCovariance

ISmLongRunCovariance
-


# ISmLongRunCovariance


Сборка: Stat;


## Описание


Интерфейс ISmLongRunCovariance
 предназначен для работы с долгосрочной ковариацией.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmLongRunCovariance


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [BandwidthValue](ISmLongRunCovariance.BandwidthValue.htm)
		 Свойство BandwidthValue
		 определяет значение пропускной способности ядра.


		 ![](../../Property.gif)
		 [CovarianceMatrix](ISmLongRunCovariance.CovarianceMatrix.htm)
		 Свойство CovarianceMatrix
		 возвращает значения долгосрочной ковариационной матрицы.


		 ![](../../Property.gif)
		 [DFAdjustment](ISmLongRunCovariance.DFAdjustment.htm)
		 Свойство DFAdjustment
		 определяет, учитывать ли количество степеней свободы.


		 ![](../../Property.gif)
		 [DFNumber](ISmLongRunCovariance.DFNumber.htm)
		 Свойство DFNumber
		 определяет количество степеней свободы.


		 ![](../../Property.gif)
		 [KernelVector](ISmLongRunCovariance.KernelVector.htm)
		 Свойство KernelVector
		 определяет вектор ядра.


		 ![](../../Property.gif)
		 [LRCBandwidthMethod](ISmLongRunCovariance.LRCBandwidthMethod.htm)
		 Свойство LRCBandwidthMethod
		 определяет метод для расчета значения пропускной способности ядра.


		 ![](../../Property.gif)
		 [LRCKernel](ISmLongRunCovariance.LRCKernel.htm)
		 Свойство LRCKernel
		 определяет тип ядра.


		 ![](../../Property.gif)
		 [LRCLagSpecification](ISmLongRunCovariance.LRCLagSpecification.htm)
		 Свойство LRCLagSpecification
		 определяет спецификацию лагов.


		 ![](../../Property.gif)
		 [LRCWindow](ISmLongRunCovariance.LRCWindow.htm)
		 Свойство LRCWindow
		 определяет тип окна.


		 ![](../../Property.gif)
		 [MissingData](ISmLongRunCovariance.MissingData.htm)
		 Свойство MissingData
		 возвращает параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmLongRunCovariance.ModelPeriod.htm)
		 Свойство ModelPeriod
		 возвращает параметры периода идентификации.


		 ![](../../Property.gif)
		 [NumberOfLags](ISmLongRunCovariance.NumberOfLags.htm)
		 Свойство NumberOfLags
		 определяет количество лагов.


		 ![](../../Property.gif)
		 [Regressors](ISmLongRunCovariance.Regressors.htm)
		 Свойство Regressors
		 возвращает входные ряды.


		 ![](../../Property.gif)
		 [RemoveMeans](ISmLongRunCovariance.RemoveMeans.htm)
		 Свойство RemoveMeans
		 определяет, выполнять ли стандартизацию данных.


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
