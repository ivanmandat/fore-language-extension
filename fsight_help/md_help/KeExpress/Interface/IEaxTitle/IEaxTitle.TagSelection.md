# IEaxTitle.TagSelection

IEaxTitle.TagSelection
-


# IEaxTitle.TagSelection


## Синтаксис


TagSelection(Tag: String): [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);


## Параметры


Tag. Подстановка метрики.


## Описание


Свойство TagSelection определяет
 подстановку для метрики визуализатора в заголовке экспресс-отчета.


## Комментарии


При получении значения свойство обрабатывает подстановку и возвращает
 копию отметки по измерению метрик, в которой выбраны элементы, соответствующие
 подстановке.


При установке значения свойство извлекает элементы из отметки и устанавливает
 в метрику визуализатора (среза данных для синхронизированных метрик),
 соответствующего подстановке.


Общий вид подстановок:


	- для [синхронизированных
	 метрик](UiSelection.chm::/Selection/Dimension_type.htm#sync):


		- &[Metric.Color].
		 Метрика «Цвет»;


		- &[Metric.Size].
		 Метрика «Размер»;


		- &[Metric.Value].
		 Метрика «Значение». Данная
		 подстановка аналогична &[Metric.Color];


	- для несихронизированных метрик - &[Visualizer.Metric.Indicator],
	 где:


		- Visualizer
		 - наименование визуализатора (Grid - таблица, Chart - диаграмма,
		 Map - карта, BubbleChart - пузырьковая диаграмма, TreeMap - плоское
		 дерево, BubbleTree - пузырьковое дерево);


		- Indicator
		 - наименование метрик. Наименования представлены значениями перечислений
		 визуализаторов:


			- для таблицы - [EaxGridIndicatorType](../../Enums/EaxGridIndicatorType.htm);


			- для карты - [EaxMapIndicatorType](../../Enums/EaxMapIndicatorType.htm);


			- для пузырьковой диаграммы - [EaxBubbleChartIndicators](../../Enums/EaxBubbleChartIndicators.htm);


			- для пузырькового дерева - [EaxBubbleTreeIndicators](../../Enums/EaxBubbleTreeIndicators.htm);


			- для плоского дерева - [EaxTreeMapIndicators](../../Enums/EaxTreeMapIndicators.htm).


Примечание.
 В параметр Tag записывайте подстановку
 без знаков. Например, подстановка &[Metric.Color]
 записывается как Metric.Color.


## Пример


Для выполнения примера в репозитории необходимо наличие:


	- формы, содержащей компонент UiErAnalyzer
	 с наименованием «UiErAnalyzer1»;


	- экспресс-отчета, содержащего пузырьковую диаграмму. У пузырьковой
	 диаграммы установите метрику «X»
	 и отметку. Экспресс-отчет является источником данных для «UiErAnalyzer1».


Добавьте ссылку на системную сборку Dimensions.


	Sub UserProc;

	Var

	    T: IEaxTitle;

	    Sel: IDimSelection;

	Begin

	    T := UiErAnalyzer1.ErAnalyzer.TitleBar;

	    Sel := T.TagSelection("BubbleChart.Metric.X");

	    If Sel <> Null Then

	        Debug.WriteLine("Отметка измерения метрик - " + Sel.ToString("", ",", False));

	    Else

	        Debug.WriteLine("Не найдено измерение метрик для указанной подстановки");

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведены элементы отметки
 измерения метрик.


См. также:


[IEaxTitle](IEaxTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
