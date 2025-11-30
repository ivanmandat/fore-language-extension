# IEaxChart.DrillPoint

IEaxChart.DrillPoint
-


# IEaxChart.DrillPoint


## Синтаксис


DrillPoint(SerieIndex: Integer; PointIndex:
 Integer; DrillType: [EaxDrillType](../../Enums/EaxDrillType.htm);
 DimKey: Integer);


## Параметры


SerieIndex. Индекс ряда;


PointIndex. Индекс точки ряда;


DrillType. Способ детализации
 данных;


DimKey. Ключ измерения экспресс-отчета.


## Описание


Метод DrillPoint осуществляет
 детализацию данных по точке ряда диаграммы.


## Комментарии


Для проверки возможности детализации данных по точке диаграммы используйте
 метод [IEaxChart.IsPointDrillable](IEaxChart.IsPointDrillable.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer
 с наименованием «UiErAnalyzer1» и компонента ChartBox,
 который отображает диаграмму экспресс-отчета, подключенного в «UiErAnalyzer1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Expr: IEaxAnalyzer;

	    Chart: IEaxChart;

	Begin

	    Expr := UiErAnalyzer1.Instance As IEaxAnalyzer;

	    Chart := Expr.Chart;

	    Chart.CorrectSerieIndex(0);

	    If Chart.IsPointDrillable(0, 0, EaxDrilltype.Down) Then

	        Chart.DrillPoint(0, 0, EaxDrilltype.Down, 0);

	    End If;

	End Sub Button1OnClick;


При нажатии на кнопку будет осуществлена проверка возможности детализации
 данных для указанной точки диаграммы. Если детализация возможна, то она
 будет произведена.


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
