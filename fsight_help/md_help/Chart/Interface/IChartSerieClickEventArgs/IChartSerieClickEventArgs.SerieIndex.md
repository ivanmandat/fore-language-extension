# IChartSerieClickEventArgs.SerieIndex

IChartSerieClickEventArgs.SerieIndex
-


# IChartSerieClickEventArgs.SerieIndex


## Синтаксис


SerieIndex: Integer;


## Описание


Свойство доступно только для чтения.


Свойство SerieIndex возвращает
 индекс выделенного ряда.


Примечание.
 Для круговой диаграммы с вторичной индекс выделенной объединенной группы
 рядов на единицу больше максимального индекса ряда.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента ChartBox с наименованием «ChartBox1» и компонента UiErAnalyzer,
 являющегося источником данных. Пример будет выполнен после щелчка кнопкой
 мыши по ряду на диаграмме.


	Sub ChartBox1OnSerieClick(Sender: Object; Args: IChartSerieClickEventArgs);

	Var

	    S: String;

	Begin

	    S := "Serie - " + Args.SerieIndex.ToString;

	    WinApplication.InformationBox(S);

	End Sub ChartBox1OnSerieClick;


После выполнения примера будет отображено сообщение, в котором будет
 указан выделенный ряд.


См. также:


[IChartSerieClickEventArgs](IChartSerieClickEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
