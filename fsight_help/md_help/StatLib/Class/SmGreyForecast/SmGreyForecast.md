# SmGreyForecast

SmGreyForecast
-


# SmGreyForecast


## Описание


Класс SmGreyForecast реализует
 алгоритм Грей-метода.


## Комментарии


В отличии от традиционных статистических методов анализа временных рядов,
 которые накладывают достаточно жесткое ограничение о линейности модели,
 Грей-метод подходит для прогнозирования поведения нелинейных временных
 рядов. Данный метод относится к нестатистическим методам прогнозирования
 и особенно эффективен в условиях недостаточного числа наблюдений.


## Свойства, унаследованные от [ISmGreyForecast](../../Interface/ISmGreyForecast/ISmGreyForecast.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Fitted](../../Interface/ISmGreyForecast/ISmGreyForecast.Fitted.htm)


		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [Forecast](../../Interface/ISmGreyForecast/ISmGreyForecast.Forecast.htm)


		 Свойство Forecast определяет
		 параметры прогнозного ряда.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmGreyForecast/ISmGreyForecast.MissingData.htm)


		 Свойство MissingData
		 определяет метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](../../Interface/ISmGreyForecast/ISmGreyForecast.ModelCoefficients.htm)


		 Свойство ModelCoefficients
		 возвращает коэффициенты модели.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmGreyForecast/ISmGreyForecast.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [Residuals](../../Interface/ISmGreyForecast/ISmGreyForecast.Residuals.htm)


		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [Serie](../../Interface/ISmGreyForecast/ISmGreyForecast.Serie.htm)


		 Свойство Serie определяет
		 исходный ряд.


		 ![](../../Property.gif)
		 [SummaryStatistics](../../Interface/ISmGreyForecast/ISmGreyForecast.SummaryStatistics.htm)


		 Свойство SummaryStatistics
		 возвращает статистические характеристики.


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


[Классы сборки Stat](../StatClass.htm) |
 [Модель
 GM(1,1) (Грей-метод)](Lib.chm::/02_Time_series_analysis/Grey.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
