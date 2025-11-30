# IChartAxis.DisplayUnit

IChartAxis.DisplayUnit
-


# IChartAxis.DisplayUnit


## Синтаксис


DisplayUnit: [ChartAxisDisplayUnit](../../Enums/ChartAxisDisplayUnit.htm);


## Описание


Свойство DisplayUnit позволяет
 задать цену деления на оси.


## Комментарии


Например, если значения лежат в диапазоне от 10 000 до 90 000, можно
 отображать числа от 10 до 90 и указывать, что единицы измерения - Тысячи.


При задании цены деления рядом с осью будет отображен заголовок цены
 деления.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub DisUn;

	Var

	    Chart : IChart;

	Begin

	    Chart.AxisY.DisplayUnit := ChartAxisDisplayUnit.Thousands;

	End Sub DisUn;


После выполнения примера по оси Y цена деления будет - тысяча. По умолчанию
 рядом с осью будет отображен заголовок цены деления.


См. также:


[IChartAxis](IChartAxis.htm) | [IChartAxis.DisplayUnitCaption](IChartAxis.DisplayUnitCaption.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
