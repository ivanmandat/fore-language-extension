# PivotEvaluatorElementType

PivotEvaluatorElementType
-


# PivotEvaluatorElementType


## Описание


Перечисление PivotEvaluatorElementType
 содержит типы итогов, который необходимо рассчитать по строкам и/или столбцам
 таблицы.


Используется следующими свойствами и методами:


	- [IPivotEvaluatorTotals.Add](../Interface/IPivotEvaluatorTotals/IPivotEvaluatorTotals.Add.htm);


	- [IPivotEvaluatorTotals.ColumnTotalName](../Interface/IPivotEvaluatorTotals/IPivotEvaluatorTotals.ColumnTotalName.htm);


	- [IPivotEvaluatorTotals.ColumnTypes](../Interface/IPivotEvaluatorTotals/IPivotEvaluatorTotals.ColumnTypes.htm);


	- [IPivotEvaluatorTotals.RowTotalName](../Interface/IPivotEvaluatorTotals/IPivotEvaluatorTotals.RowTotalName.htm);


	- [IPivotEvaluatorTotals.RowTypes](../Interface/IPivotEvaluatorTotals/IPivotEvaluatorTotals.RowTypes.htm);


	- [IPivotEvaluatorTotalsItem.TotalTypes](../Interface/IPivotEvaluatorTotalsItem/IPivotEvaluatorTotalsItem.TotalTypes.htm);


	- [IPivotEvaluatorDimCalculatesItem.AddPercentCalculate](../Interface/IPivotEvaluatorDimCalculatesItem/IPivotEvaluatorDimCalculatesItem.AddPercentCalculate.htm);


	- [IPivotParetoSettings.OtherAggregation](../Interface/IPivotParetoSettings/IPivotParetoSettings.OtherAggregation.htm);


	- [IPivotInsteadOwnerTotalsSettings.Totaltype](../Interface/IPivotInsteadOwnerTotalsSettings/IPivotInsteadOwnerTotalsSettings.TotalType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Не рассчитывать
		 итоги.


		 1
		 Sum. Сумма.


		 2
		 Avg. Среднее арифметическое.


		 4
		 Min. Минимум.


		 8
		 Max. Максимум.


		 16
		 Moda. Мода.


		 32
		 Median. Медиана.


		 64
		 Disp. Дисперсия.


		 128
		 StdDev. Среднеквадратическое
		 отклонение.


		 256
		 Skewness. Асимметрия.


		 512
		 Excess. Эксцесс.


		 1024
		 Razmah. Размах.


		 2048
		 Var_. Коэффициент вариации.


		 4096
		 SQ. Сумма квадратов.


		 8192
		 Auto1. Автокорреляция
		 1-го порядка.


		 16384
		 HiD. Верхняя дециль.


		 32768
		 HiQ. Верхняя квартиль.


		 65536
		 LoQ. Нижняя квартиль.


		 131072
		 LoD. Нижняя дециль.


		 262144
		 DataSource. Общий итог.
		 Итог, рассчитываемый в соответствии с [настройками
		 агрегации по фактам](KeCubes.chm::/Interface/IStandardCubeFactBinding/IStandardCubeFactBinding.AggregationType.htm) источника данных. Если
		 для факта источника данных отсутствует настройка агрегации, либо
		 факт не привязан к данным (вычисляемый факт), то при включении
		 данного вида итогов в список рассчитываемых, по данному факту
		 будет рассчитываться сумма значений.


		 524288
		 CountNull. Количество
		 пустых ячеек.


		 1048576
		 CountNotNull. Количество
		 непустых ячеек.


		 2097152
		 Common. Итоги, настроенные
		 в источнике. Итог, рассчитываемый в соответствии с [настройками
		 агрегации по измерениям](KeCubes.chm::/Interface/IStandardCubeDimension/IStandardCubeDimension.Aggregator.htm) куба.


См. также:


[Перечисления сборки Pivot](KePivot_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
