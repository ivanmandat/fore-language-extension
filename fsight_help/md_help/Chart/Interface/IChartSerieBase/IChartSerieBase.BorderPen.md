# IChartSerieBase.BorderPen

IChartSerieBase.BorderPen
-


# IChartSerieBase.BorderPen


## Синтаксис


BorderPen: [IGxPen](ModDrawing.chm::/Interface/IGxPen/IGxPen.htm);


## Описание


Свойство BordenPen определяет
 границу (обводку) ряда данных.


## Комментарии


Граница ряда данных отображается на диаграммах: с областями, гистограммы,
 круговой, смешанной и на частных случаях биржевой.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub BPS;

	Var

	    Chart: IChart;

	    Serie: IChartSerie;

	    BPen : IGxPen;

	Begin

	    Serie := Chart.Series.Item(0);

	    BPen := New GxPen.CreateSolid(New GxColor.CreateARGB(255,0,0,255),1.02);

	    Serie.BorderPen := BPen;

	End Sub BPS;


После выполнения примера у ряда на графике появится синяя обводка.


См. также:


[IChartSerieBase](IChartSerieBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
