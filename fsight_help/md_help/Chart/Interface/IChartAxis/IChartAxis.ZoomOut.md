# IChartAxis.ZoomOut

IChartAxis.ZoomOut
-


# IChartAxis.ZoomOut


## Синтаксис


ZoomOut(OriginalPosition: Boolean);


## Параметры


OriginalPosition. Признак возврата
 оси к исходному состоянию.


## Описание


Метод ZoomOut определяет уменьшение
 масштаба ранее увеличенного участка и возвращение оси к исходному состоянию.


## Комментарии


Если значение True, то происходит
 уменьшение масштаба и возвращение оси к исходному состоянию. Если значение
 False - нет.


## Пример


В рассматриваемом примере предполагается, что существует объект ChartAxis типа IChartAxis.


	Sub ZoomOut;

	Var

	    ChartAxis : IChartAxis;

	Begin

	    ChartAxis.ZoomOut(True);

	End Sub ZoomOut;


После выполнения примера произойдет уменьшение масштаба, ось будет возвращена
 к исходному состоянию.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
