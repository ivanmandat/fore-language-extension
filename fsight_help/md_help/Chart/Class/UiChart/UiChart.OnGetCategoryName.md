# UiChart.OnGetCategoryName

UiChart.OnGetCategoryName
-


# UiChart.OnGetCategoryName


## Синтаксис


Sub OnGetCategoryName(Sender: Object; Args: [IUiChartCategoryNameEventArgs](../../Interface/IUiChartCategoryNameEventArgs/IUiChartCategoryNameEventArgs.htm));


Begin


//набор операторов


End Sub OnGetCategoryName;


## Параметры


Sender - параметр, возвращающий компонент, сгенерировавший событие.


Args - параметр, позволяющий определить параметры события.


## Описание


Событие OnGetCategoryName позволяет определить наименование точек для оси категорий. Событие наступает при отрисовке графика.


Примечание. Формат наименования можно задать, используя событие [UiChart.OnGetCategoryFormat](UiChart.OnGetCategoryFormat.htm).


## Пример


В рассматриваемом примере предполагается существование объекта UiChart1 типа UiChart.


			Sub UiChart1OnGetCategoryName(Sender: Object; Args: IUiChartCategoryNameEventArgs);

Begin

    Args.Result := DateTime.AddDays(DateTime.Now, Args.PointIndex);

End Sub UiChart1OnGetCategoryName;


Sub UiChart1OnGetCategoryFormat(Sender: Object; Args: IUiChartCategoryFormatEventArgs);

Begin

    Args.Result := "dddd d MMMM yyyy";

End Sub UiChart1OnGetCategoryFormat;


После выполнения наименования точек для оси категорий будут формироваться из наименования дня недели и даты:


![](UiChart_OnGetCategoryName.gif)


См. также:


[UiChart](UiChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
