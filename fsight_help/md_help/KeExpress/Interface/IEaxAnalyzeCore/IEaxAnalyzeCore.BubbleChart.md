# IEaxAnalyzeCore.BubbleChart

IEaxAnalyzeCore.BubbleChart
-


# IEaxAnalyzeCore.BubbleChart


## Синтаксис


BubbleChart: [IEaxBubbleChart](../IEaxBubbleChart/IEaxBubbleChart.htm);


## Описание


Свойство BubbleChart возвращает
 объект, содержащий пузырьковую диаграмму экспресс-отчета.


## Комментарии


Пузырьковая диаграмма позволяет просматривать динамику изменения показателей
 в виде анимированной диаграммы. Ряды диаграммы представлены в виде пузырьков,
 движение которых показывает изменение значений ряда.


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPRESS_REPORT. Измерения источника данных экспресс-отчета основаны на
 следующих справочниках:


	- справочник с идентификатором D_INDICATORS, содержащий четыре
	 элемента. Данные, хранящиеся по этим элементам, будут определять динамику
	 движения пузырьков матрицы;


	- территориальный справочник с идентификатором D_MAP;


	- календарный справочник с идентификатором CALENDAR.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Eax: IEaxAnalyzer;

	    Pivot: IPivot;

	    Selection: IDimSelectionSet;

	    IDim, ODim, TimeDim: IDimSelection;

	    Bubble: IEaxBubbleChart;

	Begin

	    MB := MetabaseClass.Active;

	    Eax := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    Pivot := Eax.Pivot;

	    Selection := Pivot.Selection;

	    //Поиск измерений

	    IDim := Selection.FindById("D_INDICATORS");

	    ODim := Selection.FindById("D_MAP");

	    TimeDim := Selection.FindById("CALENDAR");

	    //Сброс расположения измерений

	    Pivot.LeftHeader.Clear;

	    Pivot.TopHeader.Clear;

	    //Отметим первую территорию

	    ODim.SelectElement(0, False);

	    //Отметим элементы первого уровня календаря

	    TimeDim.SelectSiblings(0);

	    //Настройка параметров пузырьковой
	 диаграммы

	    //Указываем измерения

	    Bubble := Eax.BubbleChart;

	    //Активация пузырьковой
	 диаграммы

	    Bubble.Active := True;

	    //Настройка измерений

	    Bubble.IndicatorsDim := IDim.Dimension;

	    Bubble.ObjectivesDim := ODim.Dimension;

	    Bubble.TimeLineDim := TimeDim.Dimension;

	    //Определяем элементы по которым будут браться значения для измерений пузырьковой
	 диаграммы

	    Bubble.IndicatorElement(BubbleChartDimension.X) := 0;

	    Bubble.IndicatorElement(BubbleChartDimension.Y) := 1;

	    Bubble.IndicatorElement(BubbleChartDimension.Radial) := 2;

	    Bubble.IndicatorElement(BubbleChartDimension.Color) := 3;

	    //Сохранение изменений

	    (Eax As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет осуществлена настройка экспресс-отчета
 для работы пузырьковой диаграммы. В экспресс-отчете будет установлено
 необходимое расположение измерений, по измерениям будет установлена необходимая
 отметка. Для пузырьковой диаграммы будут указаны измерения и определены
 элементы, по которым будут браться значения для формирования динамики
 движения пузырьков.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
