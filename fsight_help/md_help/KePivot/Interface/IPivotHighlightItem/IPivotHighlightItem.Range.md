# IPivotHighlightItem.Range

IPivotHighlightItem.Range
-


# IPivotHighlightItem.Range


## Синтаксис


Range: [IPivotFilterRange](../IPivotFilterRange/IPivotFilterRange.htm);


## Описание


Свойство Range возвращает диапазон,
 в котором будет осуществляться подсветка данных. Актуально, если свойству
 [Area](IPivotHighlightItem.Area.htm) установлено значение PivotFilterArea.Range.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента TabSheetBox
 и компонента UiErAnalyzer с наименованием
 "UiErAnalyzer1", являющегося источником данных для TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    OLAP: IEaxAnalyzer;

	    Pivot: IPivot;

	    Table: IPivotTable;

	    HighItems: IPivotHighlightItems;

	    HighItem: IPivotHighlightItem;

	    Range: IPivotFilterRange;

	Begin

	    OLAP := UiErAnalyzer1.ErAnalyzer;

	    Pivot := OLAP.Pivot;

	    Table := Pivot.ObtainTable;

	    HighItems := Pivot.Highlight;

	    HighItem := HighItems.Add;

	    HighItem.ConditionType := PivotHighlightType.ALargest;

	    HighItem.ConditionValueA := 1;

	    HighItem.Area := PivotFilterArea.Range;

	    Range := HighItem.Range;

	    Range.Left := 0;

	    Range.Right := Table.ColumnCount;

	    Range.Top := 0;

	    Range.Bottom := 0;

	    HighItem.Enabled := True;

	    OLAP.Grid.ApplyHighlight(HighItem);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет создано новое условие
 подсветки данных в таблице экспресс-отчета, загруженного в компонент "UiErAnalyzer1".
 В первой строке будет подсвечена ячейка, содержащая наибольшее значение.


См. также:


[IPivotHighlightItem](IPivotHighlightItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
