# IChart.StockStyle

IChart.StockStyle
-


# IChart.StockStyle


## Синтаксис


StockStyle: [ChartStockStyle](../../Enums/ChartStockStyle.htm);


## Описание


Свойство Style определяет вид
 биржевой диаграммы.


## Комментарии


По умолчанию используется значение Type1.


## Пример


В рассматриваемом примере предполагается существование объекта Chart типа IChart.
 Диаграмма должна быть биржевого типа. Для преобразования диаграммы к данному
 типу следует выполнить команду:


«Chart.Type := 5 As ChartType»


	Sub Stock;

	Var

	    Chart : IChart;

	Begin

	    Chart.StockStyle := 2 As ChartStockStyle;

	End Sub Stock;


После выполнения примера биржевая диаграмма примет вид Type3.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
