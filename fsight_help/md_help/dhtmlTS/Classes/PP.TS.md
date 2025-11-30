# PP.TS

PP.TS
-


# PP.TS


## Описание


Пространство имен содержит классы для работы с временными рядами.


## Классы


		 Имя класса
		 Краткое описание


		 ![](../Class_Image.gif)
		 [HieService](TimeSeries/HieService/HieService.htm)
		 Класс HieService служит
		 для работы с иерархией базы данных временных рядов продукта «Форсайт. Аналитическая платформа».


		 ![](../Class_Image.gif)
		 [MetaAttrBrCrOptionParser](TimeSeries/MetaAttrBrCrOptionParser/MetaAttrBrCrOptionParser.htm)
		 Класс MetaAttrBrCrOptionParser
		 реализует парсинг XML-строки с настройками навигационной цепочки
		 полученных из сервиса.


		 ![](../Class_Image.gif)
		 [MetaHierarchy](TimeSeries/MetaHierarchy/MetaHierarchy.htm)
		 Класс MetaHierarchy
		 реализует экземпляр иерархии метаданных.


		 ![](../Class_Image.gif)
		 [TSService](TimeSeries/TSService/TSService.htm)
		 Класс TSService реализует
		 сервис для работы с анализом временных рядов.


		 ![](../Class_Image.gif)
		 [WbkDocument](TimeSeries/WbkDocument/WbkDocument.htm)
		 Класс WbkDocument реализует
		 экземпляр рабочей книги из базы данных временных рядов.


		 ![](../Class_Image.gif)
		 [Workbook](TimeSeries/Workbook/Workbook.htm)
		 Класс Workbook описывает
		 модель данных рабочей книги.


		 ![](../Class_Image.gif)
		 [WorkbookViewCtrl](TimeSeries/WorkbookViewCtrl/WorkbookViewCtrl.htm)
		 Класс WorkbookViewCtrl
		 реализует контроллер для работы с рабочей книгой.


## Перечисления


		 Имя перечисления
		 Краткое описание


		 ![](../Enums_Image.gif)
		 [BreadcrumbItemCaptionType](../Enums/BreadcrumbItemCaptionType.htm)
		 Перечисление BreadcrumbItemCaptionType содержит
		 типы надписи у элемента цепочки навигации в компоненте [MetaAttributeBreadCrumb](../Components/TimeSeries/MetaAttributeBreadCrumb/MetaAttributeBreadCrumb.htm).


		 ![](../Enums_Image.gif)
		 [ExpressionFuncType](../Enums/ExpressionFuncType.htm)
		 Перечисление ExpressionFuncType
		 содержит категории функций.


		 ![](../Enums_Image.gif)
		 [HieFilterMode](../Enums/HieFilterMode.htm)
		 HieFilterMode является
		 перечислением режимов фильтрации рядов в иерархии.


		 ![](../Enums_Image.gif)
		 [FrResultType](../Enums/FrResultType.htm)
		 Перечисление FrResultType содержит
		 типы параметра пользовательской функции.


		 ![](../Enums_Image.gif)
		 [SerieFlags](../Enums/SerieFlags.htm)
		 Перечисление SerieFlags содержит
		 типы deterministic-методов. Аналог перечисления LnSerieFlags в
		 WSDL.


		 ![](../Enums_Image.gif)
		 [StatCensus2HolidaysAdjustmentType](../Enums/StatCensus2HolidaysAdjustmentType.htm)
		 Перечисление PP.TS.StatCensus2HolidaysAdjustmentType
		 - перечисление, используемое в WSDL StatTraidingDaysAdjustmentType.


		 ![](../Enums_Image.gif)
		 [StatCriterionType](../Enums/StatCriterionType.htm)
		 Перечисление PP.TS.StatCriterionType
		 - перечисление, используемое в WSDL StatCriterionType.


		 ![](../Enums_Image.gif)
		 [StatInterceptMode](../Enums/StatInterceptMode.htm)
		 Перечисление StatInterceptMode
		 используется для определения режима задания константы.


		 ![](../Enums_Image.gif)
		 [StatSearchType](../Enums/StatsearchType.htm)
		 Перечисление StatSearchType
		 используется для определения метода подбора значений коэффициентов
		 экспоненциального сглаживания.


		 ![](../Enums_Image.gif)
		 [StatTraidingDaysAdjustmentType](../Enums/StatTraidingDaysAdjustmentType.htm)
		 Перечисление StatTraidingDaysAdjustmentType
		 используется для определения поправки на рабочие дни.


		 ![](../Enums_Image.gif)
		 [WbkChartType](../Enums/WbkChartType.htm)
		 Перечисление WbkChartType содержит
		 тип диаграммы в рабочей книге.


## Статические методы


		 Статические методы
		 Краткое описание


		 ![](../Sub_Image.gif)
		 [PP.TS.isAggregationSerie](TimeSeries/PP.TS.isAggregationSerie.htm)
		 Метод isAggregationSerie
		 возвращает признак того, что ряд serie имеет тип формулы «Агрегация».


		 ![](../Sub_Image.gif)
		 [PP.TS.isCalculatedSerie](TimeSeries/PP.TS.isCalculatedSerie.htm)
		 Метод isCalculatedSerie
		 возвращает признак того, что ряд serie является вычислимым рядом.


		 ![](../Sub_Image.gif)
		 [PP.TS.isDerivedSerie](TimeSeries/PP.TS.isDerivedSerie.htm)
		 Метод isDerivedSerie
		 возвращает признак того, что ряд serie является дочерним рядом.


		 ![](../Sub_Image.gif)
		 [PP.TS.isDeterministicSerie](TimeSeries/PP.TS.isDeterministicSerie.htm)
		 Метод isDeterministicSerie
		 возвращает признак того, что ряд serie имеет тип формулы «Deterministic».


		 ![](../Sub_Image.gif)
		 [PP.TS.isFillGapsSerie](TimeSeries/PP.TS.isFillGapsSerie.htm)
		 Метод isFillGapsSerie
		 возвращает признак того, что ряд serie имеет тип формулы «FillGaps».


		 ![](../Sub_Image.gif)
		 [PP.TS.isGroupSerie](TimeSeries/PP.TS.isGroupSerie.htm)
		 Метод isGroupSerie
		 возвращает признак того, что ряд serie является группой.


		 ![](../Sub_Image.gif)
		 [PP.TS.isInteroplationSerie](TimeSeries/PP.TS.isInteroplationSerie.htm)
		 Метод isInteroplationSerie
		 возвращает признак того, что ряд serie имеет тип формулы «Интерполяция».


		 ![](../Sub_Image.gif)
		 [PP.TS.isLagSerie](TimeSeries/PP.TS.isLagSerie.htm)
		 Метод isLagSerie возвращает
		 признак того, что ряд serie имеет тип формулы «Лаг».


		 ![](../Sub_Image.gif)
		 [PP.TS.isLeadSerie](TimeSeries/PP.TS.isLeadSerie.htm)
		 Метод isLeadSerie возвращает
		 признак того, что ряд serie имеет тип формулы «Lead».


		 ![](../Sub_Image.gif)
		 [PP.TS.isLogSerie](TimeSeries/PP.TS.isLogSerie.htm)
		 Метод isLogSerie возвращает
		 признак того, что ряд serie имеет тип формулы «Log».


		 ![](../Sub_Image.gif)
		 [PP.TS.isModSerie](TimeSeries/PP.TS.isModSerie.htm)
		 Метод isModSerie возвращает
		 признак того, что ряд serie имеет тип формулы «Остаток от деления».


		 ![](../Sub_Image.gif)
		 [PP.TS.isPredictionSerie](TimeSeries/PP.TS.isPredictionSerie.htm)
		 Метод isPredictionSerie
		 возвращает признак того, что ряд serie имеет тип формулы «Прогнозирование».


		 ![](../Sub_Image.gif)
		 [PP.TS.isRegressionSerie](TimeSeries/PP.TS.isRegressionSerie.htm)
		 Метод isRegressionSerie
		 возвращает признак того, что ряд serie имеет тип формулы «Регрессия».


		 ![](../Sub_Image.gif)
		 [PP.TS.isRoundSerie](TimeSeries/PP.TS.isRoundSerie.htm)
		 Метод isRoundSerie
		 возвращает признак того, что ряд serie имеет тип формулы «Округление».


		 ![](../Sub_Image.gif)
		 [PP.TS.isSmoothingSerie](TimeSeries/PP.TS.isSmoothingSerie.htm)
		 Метод isSmoothingSerie
		 возвращает признак того, что ряд serie имеет тип формулы «Сглаживание».


		 ![](../Sub_Image.gif)
		 [PP.TS.isSplicedSerie](TimeSeries/PP.TS.isSplicedSerie.htm)
		 Метод isSplicedSerie
		 возвращает признак того, что ряд serie имеет тип формулы «Сплайс».


		 ![](../Sub_Image.gif)
		 [PP.TS.isStatSerie](TimeSeries/PP.TS.isStatSerie.htm)
		 Метод isStatSerie возвращает
		 признак того, что ряд serie имеет тип формулы «Статистические».


		 ![](../Sub_Image.gif)
		 [PP.TS.isTruncateSerie](TimeSeries/PP.TS.isTruncateSerie.htm)
		 Метод isTruncateSerie
		 возвращает признак того, что ряд serie имеет тип формулы «Truncate».


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
