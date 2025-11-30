# IEaxChart.GetSerieTabRange

IEaxChart.GetSerieTabRange
-


# IEaxChart.GetSerieTabRange


## Синтаксис


GetSerieTabRange(SerieIndex: Integer): [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);


## Параметры


SerieIndex. Индекс ряда данных.


## Описание


Свойство GetSerieTabRange возвращает
 диапазон ячеек, на основании которого построен указанный ряд.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонентов [ChartBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ChartBox.htm), [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm) и
 компонента [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm)
 с наименованием «UiErAnalyzer1», являющегося источником данных.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    An: IEaxAnalyzer;

	    Chart: IEaxChart;

	    TabraG: ITabRange;

	Begin

	    An := UiErAnalyzer1.ErAnalyzer;

	    Chart := An.Chart;

	    TabraG := Chart.GetSerieTabRange(0);

	    An.Grid.TabSheet.View.Selection.Range := TabraG;

	End Sub Button1OnClick;


После выполнения примера, в таблице данных будет выделен диапазон ячеек,
 на основании которого построен первый ряд диаграммы.


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
