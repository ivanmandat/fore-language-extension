# IEaxChart.DrillSeries

IEaxChart.DrillSeries
-


# IEaxChart.DrillSeries


## Синтаксис


DrillSeries(SeriesIndexes: Array; [DrillType: [EaxDrillType](../../Enums/EaxDrillType.htm) = 1]);


## Параметры


SeriesIndexes. Целочисленный
 массив, содержащий индексы рядов диаграммы;


DrillType. Способ детализации
 данных.


## Описание


Метод DrillSeries осуществляет
 детализацию по нескольким рядам диаграммы.


## Комментарии


При выполнении метода DrillSeries
 будет изменена отметка по последнему измерению, которое расположено по
 строкам. В зависимости от значения параметра DrillType
 в измерении будут отмечены дочерние элементы, элементы, на котором расположен
 родительский элемент, либо будут отмечены элементы указанных рядов и измерение
 будет перемещено в фиксированную область. При фиксации измерения по элементам
 будет включена агрегация данных.


Примечание.
 Если указан способ детализации [EaxDrillType.Up](../../Enums/EaxDrillType.htm)
 или [EaxDrillType.Down](../../Enums/EaxDrillType.htm), то в
 массиве SeriesIndexes должен быть
 только один элемент, содержащий индекс ряда.


Для проверки возможности детализации данных используйте метод [IEaxChart.IsSeriesDrillable](IEaxChart.IsSeriesDrillable.htm).


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

	    Series: Array Of Integer;

	Begin

	    Expr := UiErAnalyzer1.Instance As IEaxAnalyzer;

	    Chart := Expr.Chart;

	    Series := New Integer[2];

	    Series[0] := 0;

	    Series[1] := 1;

	    If Chart.IsSeriesDrillable(Series, EaxDrillType.Down) Then

	        Chart.DrillSeries(Series, EaxDrillType.Down);

	    End If;

	End Sub Button1OnClick;


При нажатии на кнопку будет определена возможность детализации данных
 для указанных рядов диаграммы. Если детализация возможна, то она будет
 произведена.


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
