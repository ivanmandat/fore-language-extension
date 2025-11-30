# IMsDetermAggregationTransform.AgregationMethod

IMsDetermAggregationTransform.AgregationMethod
-


# IMsDetermAggregationTransform.AgregationMethod


## Синтаксис


		AgregationMethod: [MsAgregationMethodType](../../Enums/MsAgregationMethodType.htm);


## Описание


Свойство AgregationMethod определяет
 метод агрегации.


## Комментарии


Для данного вида агрегации доступны следующие методы:


	- MsAgregationMethodType.WeightedSum.
	 Взвешанная сумма;


	- MsAgregationMethodType.Dispersion.
	 Дисперсия;


	- MsAgregationMethodType.DispersionP.
	 Исправленная дисперсия;


	- MsAgregationMethodType.StDevP.
	 Исправленное стандартное отклонение;


	- MsAgregationMethodType.DevSq.
	 Квадрат отклонений;


	- MsAgregationMethodType.Skew.
	 Коэффициент асимметрии;


	- MsAgregationMethodType.Max.
	 Максимум;


	- MsAgregationMethodType.Median.
	 Медиана;


	- MsAgregationMethodType.Min.
	 Минимум;


	- MsAgregationMethodType.Average.
	 Среднее;


	- MsAgregationMethodType.HarMean.
	 Среднее гармоническое;


	- MsAgregationMethodType.GeoMean.
	 Среднее геометрическое;


	- MsAgregationMethodType.AveDev.
	 Среднее отклонений;


	- MsAgregationMethodType.StDev.
	 Стандартное отклонение;


	- MsAgregationMethodType.Sum.
	 Сумма;


	- MsAgregationMethodType.SumSq.
	 Сумма квадратов;


	- MsAgregationMethodType.Kurt.
	 Эксцесс.


Если задать другой метод, то при расчёте агрегации будет использоваться
 метод «Сумма».


## Пример


Использование свойства приведено в примере для [IMsDetermAggregationTransform.AggregationExpression](IMsDetermAggregationTransform.AggregationExpression.htm).


См. также:


[IMsDetermAggregationTransform](IMsDetermAggregationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
