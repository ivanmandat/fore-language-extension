# IEaxChart.DrillSerie

IEaxChart.DrillSerie
-


# IEaxChart.DrillSerie


## Синтаксис


DrillSerie(Index: Integer; [DrillType: [EaxDrillType](../../Enums/EaxDrillType.htm)
 = 1]);


## Параметры


Index. Индекс ряда;


DrillType. Способ детализации
 данных.


## Описание


Метод DrillSerie осуществляет
 детализацию данных по ряду диаграммы.


## Комментарии


При выполнении метода DrillSerie
 будет изменена отметка по последнему измерению, которое расположено по
 строкам. В зависимости от значения параметра DrillType
 в измерении будут отмечены дочерние элементы, элемент, на котором расположен
 родительский элемент, либо будет отмечен элемент указанного ряда и измерение
 будет перемещено в фиксированную область.


Для проверки возможности детализации данных используйте свойство [IEaxChart.SerieDrillable](IEaxChart.SerieDrillable.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer
 с наименованием «UiErAnalyzer1» и компонента ChartBox,
 который отображает диаграмму экспресс-отчета, подключенного в «UiErAnalyzer1».
 Экспресс-отчет должен содержать хотя бы один ряд данных.


Процедура является обработчиком события OnClick для кнопки «Button1».
 Пример будет выполняться при нажатии кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Expr: IEaxAnalyzer;

	    Chart: IEaxChart;

	Begin

	    Expr := UiErAnalyzer1.Instance As IEaxAnalyzer;

	    Chart := Expr.Chart;

	    If Chart.SerieDrillable(0) Then

	        Chart.DrillSerie(0);

	    End If;

	End Sub Button1OnClick;


При нажатии на кнопку будет осуществлена детализация данных по первому
 ряду диаграммы экспресс-отчета, если детализация возможна.


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
