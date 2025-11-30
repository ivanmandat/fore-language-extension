# IEaxChart.DrillPoints

IEaxChart.DrillPoints
-


# IEaxChart.DrillPoints


## Синтаксис


DrillPoints(SeriesIndices: Array; PointsIndices:
 Array; DrillType: [EaxDrillType](../../Enums/EaxDrillType.htm); DimKey:
 Integer);


## Параметры


SeriesIndeces. Целочисленный
 массив, содержащий индексы рядов диаграммы;


PointIndeces. Целочисленный
 массив, содержащий индексы точек диаграммы;


DrillType. Способ детализации
 данных;


DimKey. Ключ измерения экспресс-отчета.


## Описание


Метод DrillPoints осуществляет
 детализацию по нескольким точкам ряда диаграммы.


## Комментарии


Для проверки возможности детализации данных используется метод [IEaxChart.ArePointsDrillable](IEaxChart.ArePointsDrillable.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer
 с наименованием «UiErAnalyzer1» и компонента ChartBox,
 который отображает диаграмму экспресс-отчета, подключенного в «UiErAnalyzer1».
 Экспресс-отчет должен содержать хотя бы два ряда данных.


Процедура является обработчиком события OnClick для кнопки «Button1».
 Пример будет выполняться при нажатии кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Expr: IEaxAnalyzer;

	    Chart: IEaxChart;

	    points: Array Of Integer;

	    Series: Array Of Integer;

	Begin

	    Expr := UiErAnalyzer1.Instance As IEaxAnalyzer;

	    Chart := Expr.Chart;

	    Points := New Integer[2];

	    Points[0] := 0;

	    Points[1] := 1;

	    Series := New Integer[2];

	    Series[0] := 0;

	    Series[1] := 1;

	    If Chart.ArePointsDrillable(Series, Points, EaxDrillType.Down) Then

	        Chart.DrillPoints(Series, Points, EaxDrillType.Down, 0);

	    End If;

	End Sub Button1OnClick;


При выполнении примера определена возможность детализации данных для
 указанного набора точек диаграммы. Если детализация возможна, то она будет
 произведена для первых двух точек первых двух рядов.


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
