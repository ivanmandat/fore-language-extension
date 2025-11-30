# IEaxRangeFormatConditions.GetByRange

IEaxRangeFormatConditions.GetByRange
-


# IEaxRangeFormatConditions.GetByRange


## Синтаксис


GetByRange(Range: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm)):
 [ITabFormatConditions](TabSheet.chm::/Interface/ITabFormatConditions/ITabFormatConditions.htm);


## Параметры


Range. Диапазон ячеек.


## Описание


Метод GetByRange возвращает
 стиль выделенного диапазона ячеек.


## Комментарии


Если параметр Range имеет
 значение Null, то GetByRange
 вернет пустой стиль.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox
 и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для LanerBox.
 В «UiErAnalyzer1» должна быть загружена рабочая книга базы
 данных временных рядов.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Grid: IEaxGrid;

	    View: ITabView;

	    Range: ITabRange;

	    Style: IEaxTableStyle;

	    RangeFCond: IEaxRangeFormatConditions;

	    FConditions: ITabFormatConditions;

	    FormatCond: ITabFormatCondition;

	    Count, i: Integer;

	    a: String;

	    CondType: TabConditionType;

	Begin

	    Grid := UiErAnalyzer1.ErAnalyzer.Grid;

	    View := Grid.TabSheet.View;

	    Range := View.Selection.Range;

	    Style := Grid.Style;

	    RangeFCond := Style.RangeFormatConditions;

	    FConditions := RangeFCond.GetByRange(Range);

	    Count := FConditions.Count;

	    If Count > 0 Then

	        For i := 0 To Count - 1 Do

	            FormatCond := FConditions.Item(i);

	            Debug.WriteLine("Стиль №" + i.ToString);

	            CondType := FormatCond.Type;

	            Select Case CondType

	                Case TabConditionType.Average: a := "форматировать ячейки со значениями выше/ниже среднего";

	                Case TabConditionType.CellContent: a := "форматирование ячейки с определенными значениями";

	                Case TabConditionType.Duplicate: a := "форматировать ячейки с уникальными/дублирующимися значениями";

	                Case TabConditionType.Formula: a := "форматировать ячейки, удовлетворяющие формуле";

	                Case TabConditionType.MinMax: a := "форматировать ячейки с наибольшими/наименьшими значениями";

	                Case TabConditionType.Values: a := "форматирование ячеек на основе их значений";

	            End Select;

	            Debug.WriteLine("    тип: " + a);

	        End For;

	    End If;

	    RangeFCond.RemoveByRange(Range);

	    Grid.Refresh;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведено описание стилей
 условного форматирования для выделенного диапазона ячеек в рабочей книге.
 Затем стили будут удалены.


См. также:


[IEaxRangeFormatConditions](IEaxRangeFormatConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
