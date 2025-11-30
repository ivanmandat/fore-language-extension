# UiChart.OnGetToolTip

UiChart.OnGetToolTip
-


# UiChart.OnGetToolTip


## Синтаксис


Sub OnGetToolTip(Sender:
 Object; Args: [IUiChartGetTextEventArgs](../../Interface/IUiChartGetTextEventArgs/IUiChartGetTextEventArgs.htm));


Begin


//набор операторов


End Sub
 OnGetToolTip;


## Параметры


Sender - параметр, возвращающий
 компонент, сгенерировавший событие.


Args - параметр, позволяющий
 определить параметры события.


## Описание


Событие OnGetToolTip определяет
 параметры всплывающих подсказок на точках диаграммы, подсказки появляются
 при наведении курсора мыши на точку.


## Пример


	Sub UiChartOnGetToolTip(Sender: Object; Args: IUiChartGetTextEventArgs);

	Begin

	    Args.Result := True;

	    Args.Text := Args.SerieIndex.ToString + #13 + #10 + Args.PointIndex.ToString;

	End Sub UiChart1OnGetToolTip;


После выполнения примера при наведении курсора мыши на точку ряда будет
 появляться подсказка, на которой в первой строчке будет отображен номер
 ряда, а во второй номер точки.


См. также:


[UiChart](UiChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
