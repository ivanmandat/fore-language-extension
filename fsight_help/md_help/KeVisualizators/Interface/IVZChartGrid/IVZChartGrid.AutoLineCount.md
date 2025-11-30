# IVZChartGrid.AutoLineCount

IVZChartGrid.AutoLineCount
-


# IVZChartGrid.AutoLineCount


## Синтаксис


AutoLineCount: Boolean;


## Описание


Свойство AutoLineCount определяет
 признак использования автоматического расчёта количества интервалов между
 главными линиями сетки.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Расчёт количества интервалов между главными линиями сетки выполняется
	 автоматически;


	- False. Количество интервалов
	 между главными линиями сетки задаётся вручную с помощью свойства [IVZChartGrid.LineCount](IVZChartGrid.LineCount.htm).


Для округления значений рассчитанных интервалов задайте свойствам [IVZChartAxis.AutoMax](../IVZChartAxis/IVZChartAxis.AutoMax.htm),
 [IVZChartAxis.AutoMin](../IVZChartAxis/IVZChartAxis.AutoMin.htm)
 значение True.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего пузырьковую диаграмму.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    BubbleChart: IVZBubbleChart;

	    Axis: IVZChartAxis;

	    PrimaryGrid: IVZChartGrid;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковую диаграмму

	    BubbleChart := Express.BubbleChart.BubbleChart;

	    // Получим ось X пузырьковой диаграммы

	    Axis := BubbleChart.AxisX;

	    // Получим главные линии сетки

	    PrimaryGrid := Axis.PrimaryGrid;

	    // Проверим отображение линий сетки на диаграмме

	    If PrimaryGrid.Visible Then

	        // Зададим количество интервалов между линиями вручную

	        PrimaryGrid.AutoLineCount := False;

	        PrimaryGrid.LineCount := 10;

	    End If;

	    // Обновим пузырьковую диаграмму

	    Express.BubbleChart.Refresh;

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения действий в экспресс-отчёте на пузырьковой диаграмме
 будут отображаться главные линии сетки с заданным интервалом между ними.


См. также:


[IVZChartGrid](IVZChartGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
