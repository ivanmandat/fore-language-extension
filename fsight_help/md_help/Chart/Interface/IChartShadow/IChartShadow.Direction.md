# IChartShadow.Direction

IChartShadow.Direction
-


# IChartShadow.Direction


## Синтаксис


Direction: [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm);


## Описание


Свойство Direction определяет
 смещение тени.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Shad;

	Var

	    Chart: IChart;

	    Pnt : IGxPointF;

	Begin

	    Pnt := New GxPointF.Create (1.00,2.00);

	    Chart.Series.Item(0).Shadow.Direction := Pnt;

	End Sub Shad;


После выполнения примера у заданного ряда данных на графике появится
 тень, смещенная на заданные расстояния.


См. также:


[IChartShadow](IChartShadow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
