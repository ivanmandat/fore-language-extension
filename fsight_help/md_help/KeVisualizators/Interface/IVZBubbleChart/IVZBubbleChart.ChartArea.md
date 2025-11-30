# IVZBubbleChart.ChartArea

IVZBubbleChart.ChartArea
-


# IVZBubbleChart.ChartArea


## Синтаксис


ChartArea: [IVZChartArea](../IVZChartArea/IVZChartArea.htm);


## Описание


Свойство ChartArea определяет
 область построения диаграммы.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EAX_BUBBLECHART, в котором имеется пузырьковая диаграмма.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    BC: IVZBubbleChart;

	    ChartArea: IVZChartArea;

	Begin

	    MB := MetabaseClass.Active;

	    // Экспресс-отчёт с пузырьковой диаграммой

	    Express := MB.ItemById("EAX_BUBBLECHART").Edit As IEaxAnalyzer;

	    // Получим пузырьковую диаграмму

	    BC := Express.BubbleChart.BubbleChart;

	    // Настройка области построения диаграммы

	    ChartArea := BC.ChartArea;

	    ChartArea.Brush := New GxLinearGradientBrush.Create(GxColor.FromKnownColor(GxKnownColor.LightGray), GxColor.FromKnownColor(GxKnownColor.SlateGray), 270);

	    ChartArea.Pen := New GxPen.CreateSolid(GxColor.FromKnownColor(GxKnownColor.SteelBlue), 3);

	    // Сохранение изменений

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера будут изменены настройки области построения диаграммы:
 будет задана градиентная заливка и граница.


См. также:


[IVZBubbleChart](IVZBubbleChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
