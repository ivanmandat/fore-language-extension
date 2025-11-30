# IVZChartSerie.Selected

IVZChartSerie.Selected
-


# IVZChartSerie.Selected


## Синтаксис


Selected: Boolean;


## Описание


Свойство Selected выделяет ряд
 данных.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта,
 в котором содержится пузырьковая диаграмма.


Разместите на форме компоненты [Button](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Button.htm),
 [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm),
 [EaxBubbleChartBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/EaxBubbleChartBox.htm),
 [EditBox](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/EditBox.htm)
 с наименованиями «Button1», «UiErAnalyzer1», «EaxBubbleChartBox1», «EditBox1»
 соответственно.


Задайте дополнительные свойства:


	- для компонента UiErAnalyzer
	 установите свойству Active
	 значение True и задайте экспресс-отчёт
	 свойству Object;


	- для компонента EaxBubbleChartBox
	 установите свойству Source
	 значение «UiErAnalyzer1»;


	- для компонента Button
	 установите свойству Text значение
	 «Выделить»;


Добавьте системные сборки: Express, Forms, Visualizators.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    BCSource: IEaxBubbleChartSource;

	    EaxBC: IEaxBubbleChart;

	    BubbleChart: IVZBubbleChart;

	    Serie: IVZChartSerie;

	    Series: IVZChartSeries;

	    Count, Index, i: Integer;

	Begin

	    // Получим пузырьковую диаграмму

	    BCSource := EaxBubbleChartBox1.Source;

	    EaxBC := BCSource.GetBubbleChart;

	    BubbleChart := EaxBC.BubbleChart;

	    // Получим ряды данных пузырьковой диаграммы

	    Series := BubbleChart.Series;

	    Count := Series.Count;

	    // Снимем выделение, если оно уже было установлено

	    For i := 0 To Count - 1 Do

	        Serie := Series.Item(i);

	        If Serie.Selected Then

	            Serie.Selected := False

	        End If;

	    End For;

	    // Зададим индекс ряда данных

	    Index := Integer.Parse(EditBox1.Text);

	    Serie := Series.Item(Index - 1);

	    // Выделим заданный ряд данных

	    Serie.Selected := True;

	    // Обновим пузырьковую диаграмму

	    EaxBC.Refresh;

	End Sub Button1OnClick;


После выполнения примера щелкните левой кнопкой мыши на область пузырьковой
 диаграммы, задайте индекс ряда данных в компоненте EditBox
 и нажмите кнопку «Выделить». В
 результате чего будет выделен ряд данных с указанным индексом, например:


![](IVZChartSerie_Selected.png)


См. также:


[IVZChartSerie](IVZChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
