# UiChart.OnGetPointName

UiChart.OnGetPointName
-


# UiChart.OnGetPointName


## Синтаксис


Sub OnGetPointName(Sender:
 Object; Args: [IUiChartPointNameEventArgs](../../Interface/IUiChartPointNameEventArgs/IUiChartPointNameEventArgs.htm));


Begin


//набор операторов


End Sub
 OnGetPointName;


## Параметры


Sender - параметр, возвращающий
 компонент, сгенерировавший событие.


Args - параметр, позволяющий
 определить параметры события.


## Описание


Событие OnGetPointName позволяет
 определить наименование точек на графике. Событие наступает при отрисовке
 графика.


## Пример


В рассматриваемом примере предполагается существование объекта Chart типа IChart.


	Sub UiChartOnGetPointName(Sender: Object; Args: IUiChartPointNameEventArgs);

	Begin

	    Args.Result := "точка " + Args.PointIndex.ToString As String;

	End Sub UiChartOnGetPointName;


После выполнения примера имена точек на графике будут изменены: «точка
 0», «точка 1» и т.д.


См. также:


[UiChart](UiChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
