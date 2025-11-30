# IEaxChart.Range

IEaxChart.Range
-


# IEaxChart.Range


## Синтаксис


Range: [IGxRect](ModDrawing.chm::/Interface/IGxRect/IGxRect.htm);


## Описание


Свойство Range определяет диапазон
 выделенной области таблицы, по которому строится диаграмма.


## Комментарии


Если в таблице выделена только одна ячейка, то диаграмма строится по
 всем данным таблицы. В качестве значения свойства Range
 указывается диапазон, в котором:


	- [Left](ModDrawing.chm::/Interface/IGxRect/IGxRect.Left.htm)
	 - индекс левого столбца;


	- [Top](ModDrawing.chm::/Interface/IGxRect/IGxRect.Top.htm)
	 - индекс верхней строки;


	- [Right](moddrawing.chm::/Interface/IGxRect/IGxRect.Right.htm) - индекс правого столбца;


	- [Bottom](ModDrawing.chm::/Interface/IGxRect/IGxRect.Bottom.htm)
	 - индекс нижней строки.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    EChart: IEaxChart;

	    Rect1: IGxRect;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Expr.UseGridSelection := True;

	    EChart := Expr.Chart;

	    EChart.Chart.Type := ChartType.Points;

	    EChart.PointChartMode := EaxPointChartMode.YXYX;

	    Rect1 := New GxRect.Create(1, 1, 2, 10);

	    EChart.Range := Rect1;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет выделен диапазон ячеек «B40:C60» и по
 нему будет построена диаграмма. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
