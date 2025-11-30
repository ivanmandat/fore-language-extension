# IUiChartCategoryFormatEventArgs.Result

IUiChartCategoryFormatEventArgs.Result
-


# IUiChartCategoryFormatEventArgs.Result


## Синтаксис


Result: String;


## Описание


Свойство Result определяет формат
 наименования точек для оси категорий.


## Пример


В рассматриваемом примере предполагается существование объекта UiChart1 типа UiChart.


	Sub UiChart1OnGetCategoryFormat(Sender: Object; Args: IUiChartCategoryFormatEventArgs);

	Begin

	    Args.Result := "dddd dd MMMM yyyy";

	End Sub UiChart1OnGetCategoryFormat;

	Sub UiChart1OnGetCategoryName(Sender: Object; Args: IUiChartCategoryNameEventArgs);

	Begin

	    Args.Result := DateTime.AddDays(CurDay, Args.PointIndex);

	End Sub UiChart1OnGetCategoryName;


После выполнения наименования точек для оси категорий будут формироваться
 из наименования дня недели и даты:


![](../../Class/UiChart/UiChart_OnGetCategoryName.gif)


См. также:


[IUiChartCategoryFormatEventArgs](IUiChartCategoryFormatEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
