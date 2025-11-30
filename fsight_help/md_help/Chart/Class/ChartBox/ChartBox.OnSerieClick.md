# ChartBox.OnSerieClick

ChartBox.OnSerieClick
-


# OnSerieClick


## Синтаксис


Sub OnSerieClick(Sender:
 Object; Args: [IChartSerieClickEventArgs](../../Interface/IChartSerieClickEventArgs/IChartSerieClickEventArgs.htm));


Begin


// набор операторов


End Sub
 OnSerieClick;


## Параметры


Sender - параметр, возвращающий
 компонент, сгенерировавший событие.


Args - параметр, позволяющий
 определить параметры события.


## Описание


Событие OnSerieClick наступает
 при щелчке кнопкой мыши по ряду диаграммы.


Примечание.
 Данное событие обрабатывается, если диаграмма находится в режиме гиперссылок
 ([ChartInteractiveMode](../../Enums/ChartInteractiveMode.htm)).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 ChartBox с наименованием «ChartBox1» и компонент UiErAnalyzer, являющийся
 источником данных. Пример будет выполнен после щелчка кнопкой мыши по
 ряду на диаграмме.


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


[ChartBox](ChartBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
