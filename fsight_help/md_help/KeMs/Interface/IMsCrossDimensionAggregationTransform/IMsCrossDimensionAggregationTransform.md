# IMsCrossDimensionAggregationTransform

IMsCrossDimensionAggregationTransform
-


# IMsCrossDimensionAggregationTransform


Сборка: Ms;


## Описание


Интерфейс IMsCrossDimensionAggregationTransform
 предназначен для настройки параметров агрегации, которая использует метод
 обработки пропусков и рассчитывается по группе, отметке или параметру
 (расширенная агрегация).


## Иерархия наследования


           [IMsMethod](../IMsMethod/IMsMethod.htm)


           [IMsVectorMethod](../IMsVectorMethod/IMsVectorMethod.htm)


           IMsCrossDimensionAggregationTransform


## Комментарии


[Особенности
 разбора выражений агрегации](IMsCrossDimensionAggregationTransform_features.htm) для свойств [IMsCrossDimensionAggregationTransform.Expression](IMsCrossDimensionAggregationTransform.Expression.htm),
 [IMsCrossDimensionAggregationTransform.WeightsExpression](IMsCrossDimensionAggregationTransform.WeightsExpression.htm),
 [IMsCrossDimensionAggregationTransform.CompositionRelevanceExpression](IMsCrossDimensionAggregationTransform.CompositionRelevanceExpression.htm),
 [IMsCrossDimensionAggregationTransform.AppliesToExpression](IMsCrossDimensionAggregationTransform.AppliesToExpression.htm)
 приведены в одноимённом разделе.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AgregationMethod](IMsCrossDimensionAggregationTransform.AgregationMethod.htm)
		 Свойство AgregationMethod
		 определяет метод агрегации.


		 ![](../../Property_Image.gif)
		 [AppliesToExpression](IMsCrossDimensionAggregationTransform.AppliesToExpression.htm)
		 Свойство AppliesToExpression
		 определяет выражение для задания компонентов, которые будут
		 агрегироваться без учёта обработки пропусков.


		 ![](../../Property_Image.gif)
		 [AppliesToOperands](IMsCrossDimensionAggregationTransform.AppliesToOperands.htm)
		 Свойство AppliesToOperands
		 возвращает коллекцию элементов выражения для задания компонентов,
		 которые будут агрегироваться без учёта обработки пропусков.


		 ![](../../Property_Image.gif)
		 [CompositionRelevanceExpression](IMsCrossDimensionAggregationTransform.CompositionRelevanceExpression.htm)
		 Свойство CompositionRelevanceExpression
		 определяет выражение для расчёта релевантности агрегации.


		 ![](../../Property_Image.gif)
		 [CompositionRelevanceOperands](IMsCrossDimensionAggregationTransform.CompositionRelevanceOperands.htm)
		 Свойство CompositionRelevanceOperands
		 возвращает элементы, которые могут быть использованы в выражении
		 для расчёта релевантности агрегации.


		 ![](../../Property_Image.gif)
		 [Expression](IMsCrossDimensionAggregationTransform.Expression.htm)
		 Свойство Expression
		 возвращает выражение агрегации.


		 ![](../../Property_Image.gif)
		 [Filter](IMsCrossDimensionAggregationTransform.Filter.htm)
		 Свойство Filter возвращает
		 коллекцию фильтров агрегации.


		 ![](../../Property_Image.gif)
		 [Operands](IMsCrossDimensionAggregationTransform.Operands.htm)
		 Свойство Operands возвращает
		 коллекцию термов, используемых для составления выражения агрегации.


		 ![](../../Property_Image.gif)
		 [Options](IMsCrossDimensionAggregationTransform.Options.htm)
		 Свойство Options возвращает
		 дополнительные параметры расчёта агрегации.


		 ![](../../Property_Image.gif)
		 [Result](IMsCrossDimensionAggregationTransform.Result.htm)
		 Свойство Result возвращает
		 терм, соответствующий моделируемой переменной.


		 ![](../../Property_Image.gif)
		 [WeightsExpression](IMsCrossDimensionAggregationTransform.WeightsExpression.htm)
		 Свойство WeightsExpression
		 определяет выражение для расчёта весов агрегации.


		 ![](../../Property_Image.gif)
		 [WeightsOperands](IMsCrossDimensionAggregationTransform.WeightsOperands.htm)
		 Свойство WeightsOperands
		 возвращает коллекцию элементов, которые могу быть использованы
		 в выражении для расчёта весов агрегации.


## Свойства, унаследованные от [IMsMethod](../IMsMethod/IMsMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalculateSeries](../IMsMethod/IMsMethod.CalculateSeries.htm)
		 Свойство CalculateSeries
		 возвращает данные, полученные в результате расчета модели.


		 ![](../../Property_Image.gif)
		 [InversionInfo](../IMsMethod/IMsMethod.InversionInfo.htm)
		 Свойство InversionInfo
		 возвращает параметры начального преобразования, применяемого к
		 переменной.


		 ![](../../Property_Image.gif)
		 [ObservationsCount](../IMsMethod/IMsMethod.ObservationsCount.htm)
		 Свойство ObservationsCount
		 возвращает число наблюдений модели.


		 ![](../../Property_Image.gif)
		 [PeriodAlignment](../IMsMethod/IMsMethod.PeriodAlignment.htm)
		 Свойство PeriodAlignment
		 возвращает тип расчета метода относительно периода.


		 ![](../../Property_Image.gif)
		 [Series](../IMsMethod/IMsMethod.Series.htm)
		 Свойство Series возвращает
		 набор возможных рядов, используемых методом при расчете.


		 ![](../../Property_Image.gif)
		 [StatMethod](../IMsMethod/IMsMethod.StatMethod.htm)
		 Свойство StatMethod
		 возвращает информацию о статистическом методе, используемом для
		 расчета модели.


		 ![](../../Property_Image.gif)
		 [Summary](../IMsMethod/IMsMethod.Summary.htm)
		 Свойство Summary возвращает
		 статистические характеристики, рассчитанные для модели.


		 ![](../../Property_Image.gif)
		 [SupportsR](../IMsMethod/IMsMethod.SupportsR.htm)
		 Свойство SupportsR
		 определяет, возможен ли расчет метода с помощью R.


		 ![](../../Property_Image.gif)
		 [Type](../IMsMethod/IMsMethod.Type.htm)
		 Свойство Type возвращает
		 тип метода, используемого для расчета модели.


		 ![](../../Property_Image.gif)
		 [UseR](../IMsMethod/IMsMethod.UseR.htm)
		 Свойство UseR
		 определяет, используется ли при расчете метода подключение к R.


## Методы, унаследованные от [IMsMethod](../IMsMethod/IMsMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Execute](../IMsMethod/IMsMethod.Execute.htm)
		 Метод Execute осуществляет
		 расчет модели и возвращает результаты расчета.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
