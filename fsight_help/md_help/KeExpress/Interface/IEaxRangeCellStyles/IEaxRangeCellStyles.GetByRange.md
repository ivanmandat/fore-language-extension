# IEaxRangeCellStyles.GetByRange

IEaxRangeCellStyles.GetByRange
-


# IEaxRangeCellStyles.GetByRange


## Синтаксис


GetByRange(Range: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm)):
 [ITabCellStyle](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.htm);


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


Добавьте ссылку на системную сборку Drawing.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Grid: IEaxGrid;

	    View: ITabView;

	    Range: ITabRange;

	    Style: IEaxTableStyle;

	    CStyles: IEaxRangeCellStyles;

	    CellStyle: ITabCellStyle;

	Begin

	    Grid := UiErAnalyzer1.ErAnalyzer.Grid;

	    View := Grid.TabSheet.View;

	    Range := View.Selection.Range;

	    Style := Grid.Style;

	    CStyles := Style.RangeCellStyles;

	    CellStyle := CStyles.GetByRange(Range);

	    If CellStyle.Font <> Null Then

	        Debug.WriteLine("   шрифт - " + CellStyle.Font.Name);

	        If CellStyle.Font.Color <> Null Then

	            Debug.WriteLine("   цвет шрифта - " + CellStyle.Font.Color.Name);

	        End If;

	    End If;

	    CStyles.RemoveByRange(Range);

	    Grid.Refresh;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведено описание стиля
 для выделенного диапазона ячеек в рабочей книге. Затем стиль будет удален.


См. также:


[IEaxRangeCellStyles](IEaxRangeCellStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
