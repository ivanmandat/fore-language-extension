# IEaxChart.SingleCellRangeMode

IEaxChart.SingleCellRangeMode
-


# IEaxChart.SingleCellRangeMode


## Синтаксис


SingleCellRangeMode: [EaxChartSingleCellRangeMode](../../Enums/EaxChartSingleCellRangeMode.htm);


## Описание


Свойство SingleCellRangeMode
 определяет режим построения диаграммы при одной выделенной ячейке.


## Комментарии


Данное свойство учитывается, если значение свойства [IEaxDataAreaSliceProperties.UseGridSelection](../IEaxDataAreaSliceProperties/IEaxDataAreaSliceProperties.UseGridSelection.htm)
 - True.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm) с наименованием
 «UiErAnalyzer1», являющегося источником данных для компонентов [ChartBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ChartBox.htm) и [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm).


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    m_Eax: IEaxAnalyzer;

	    Chart: IEaxChart;

	Begin

	    m_Eax := UiErAnalyzer1.ErAnalyzer;

	    m_Eax.UseGridSelection := True;

	    Chart := m_Eax.Chart;

	    Chart.SingleCellRangeMode := EaxChartSingleCellRangeMode.SingleRow;

	End Sub Button1OnClick;


После выполнения примера при одной выделенной ячейке диаграмма будет
 строиться по строке, содержащей данную ячейку.


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
