# IChartSerieClickEventArgs.PointIndex

IChartSerieClickEventArgs.PointIndex
-


# IChartSerieClickEventArgs.PointIndex


## Синтаксис


PointIndex: Integer;


## Описание


Свойство доступно только для чтения.


Свойство PointIndex возвращает
 индекс выделенной точки ряда. Свойство возвращает значение «-1», если
 щелкнули кнопкой мыши по ряду, но мимо точки.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента ChartBox с наименованием «ChartBox1» и компонента UiErAnalyzer,
 являющегося источником данных. Пример будет выполнен после щелчка кнопкой
 мыши по ряду на диаграмме.


	Sub ChartBox1OnSerieClick(Sender: Object; Args: IChartSerieClickEventArgs);

	Var

	    S: String;

	Begin

	    S := "Point - " + Args.PointIndex.ToString;

	    WinApplication.InformationBox(S);

	End Sub ChartBox1OnSerieClick;


После выполнения примера будет отображено сообщение, в котором будет
 указана выделенная точка ряда.


См. также:


[IChartSerieClickEventArgs](IChartSerieClickEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
