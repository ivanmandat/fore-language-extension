# IVZChartAxis.AutoMax

IVZChartAxis.AutoMax
-


# IVZChartAxis.AutoMax


## Синтаксис


AutoMax: Boolean;


## Описание


Свойство AutoMax определяет,
 будет ли автоматически рассчитано и установлено максимальное значение
 на оси диаграммы.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Максимальное значение на оси диаграммы рассчитывается и устанавливается
	 автоматически;


	- False. Максимальное
	 значение на оси диаграммы задается пользователем с помощью свойства
	 [IVZChartAxis.Max](IVZChartAxis.Max.htm).


Для округления значений на оси диаграммы и автоматического расчёта интервалов
 между главными линиями сетки задайте свойству [IVZChartGrid.AutoLineCount](../IVZChartGrid/IVZChartGrid.AutoLineCount.htm)
 значение True.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего пузырьковую диаграмму.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    BC: IVZBubbleChart;

	    CA: IVZChartAxis;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковую диаграмму

	    BC := Express.BubbleChart.BubbleChart;

	    // Получим ось X пузырьковой диаграммы

	    CA := BC.AxisX;

	    // Отключим автоопределение максимального значения на оси диаграммы

	    CA.AutoMax := False;

	    // Определим максимальное значение на оси

	    CA.Max := 1000;

	    // Отключим автоопределение минимального значения на оси диаграммы

	    CA.AutoMin := False;

	    // Определим минимальное значение на оси

	    CA.Min := 100;

	    // Изменим масштаб оси

	    CA.DisplayUnit := VisualizatorUnitKind.Hundreds;

	    // Изменим текст подписи оси

	    CA.Caption.Text := "Значение показателя (в сотнях)";

	    // Отобразим подписи на оси диаграммы

	    CA.ShowLabels := True;

	    // Обновим пузырьковую диаграмму и сохраним отчет

	    Express.BubbleChart.Refresh;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера на пузырьковой диаграмме экспресс-отчёта будут
 определены максимальное и минимальное значения для оси X, задан масштаб
 оси в сотнях, изменён заголовок оси и отображены подписи оси.


См. также:


[IVZChartAxis](IVZChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
