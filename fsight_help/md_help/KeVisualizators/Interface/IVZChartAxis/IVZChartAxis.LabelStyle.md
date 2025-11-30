# IVZChartAxis.LabelStyle

IVZChartAxis.LabelStyle
-


# IVZChartAxis.LabelStyle


## Синтаксис


LabelStyle: [IVZLabelStyle](../IVZLabelBase/IVZLabelBase.htm);


## Описание


Свойство LabelStyle определяет
 стиль подписей на оси диаграммы.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего пузырьковую диаграмму.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    BC: IVZBubbleChart;

	    CA: IVZChartAxis;

	    Pen: IGxPenBase;

	    Style: IVZLabelStyle;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковую диаграмму

	    BC := Express.BubbleChart.BubbleChart;

	    // Получим ось X пузырьковой диаграммы

	    CA := BC.AxisX;

	    // Получим стиль подписей оси

	    Style := CA.LabelStyle;

	    // Изменим цвет шрифта подписей

	    Style.FontColor := New GxColor.CreateRGB(120, 0, 120);

	    // Установим изменённый стиль

	    CA.LabelStyle := Style;

	    // Получим перо оси

	    Pen := CA.Pen;

	    // Изменим цвет
	 и толщину пера

	    Pen.Color := New GxColor.CreateRGB(120, 0, 120);

	    Pen.Width := 3;

	    // Установим изменённое перо

	    CA.Pen := Pen;

	    // Получим перо главных линий сетки диаграммы

	    Pen := CA.PrimaryGrid.Pen;

	    // Изменим цвет
	 и толщину пера

	    Pen.Color := New GxColor.CreateRGB(120, 0, 120);

	    Pen.Width := 3;

	    // Установим изменённое перо

	    CA.PrimaryGrid.Pen := Pen;

	    // Получим перо неосновных линий сетки диаграммы

	    Pen := CA.SecondaryGrid.Pen;

	    // Изменим цвет
	 пера

	    Pen.Color := New GxColor.CreateRGB(120, 0, 120);

	    // Установим изменённое перо

	    CA.SecondaryGrid.Pen := Pen;

	    // Получим перо линий делений

	    Pen := CA.TicksPen;

	    // Изменим цвет
	 и толщину пера

	    Pen.Color := New GxColor.CreateRGB(120, 100, 120);

	    Pen.Width := 10;

	    // Установим изменённое перо

	    CA.TicksPen := Pen;

	    // Обновим пузырьковую диаграмму и сохраним отчет

	    Express.BubbleChart.Refresh;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера на пузырьковой диаграмме экспресс-отчета будут
 изменёны цвет шрифта подписей, цвет и толщина линий оси X, линий сетки,
 линий делений.


См. также:


[IVZChartAxis](IVZChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
