# IEaxChart.PointChartMode

IEaxChart.PointChartMode
-


# IEaxChart.PointChartMode


## Синтаксис


PointChartMode: [EaxPointChartMode](../../Enums/EaxPointChartMode.htm);


## Описание


Свойство PointChartMode определяет
 способ передачи данных при построении точечной диаграммы.


## Комментарии


По умолчанию установлено значение XYY.


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


После выполнения примера будет выделен диапазон ячеек «B0:C10» и по
 нему будет построена диаграмма. Тип диаграммы - точечная, способ передачи
 данных YXYX. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
