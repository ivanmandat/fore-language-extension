# IPivotHighlightItems.Add

IPivotHighlightItems.Add
-


# IPivotHighlightItems.Add


## Синтаксис


Add: [IPivotHighlightItem](../IPivotHighlightItem/IPivotHighlightItem.htm);


## Описание


Метод Add создает новое условие
 подсветки данных таблицы.


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

	Begin

	    OLAP := UiErAnalyzer1.ErAnalyzer;

	    Pivot := OLAP.Pivot;

	    Table := Pivot.ObtainTable;

	    HighItems := Pivot.Highlight;

	    HighItem := HighItems.Add;

	    HighItem.ConditionType := PivotHighlightType.ALargest;

	    HighItem.ConditionValueA := 3;

	    HighItem.Area := PivotFilterArea.Table;

	    HighItem.Enabled := True;

	    OLAP.Grid.ApplyHighlight(HighItem);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет создано новое условие
 подсветки данных в таблице экспресс-отчета, загруженного в компонент "UiErAnalyzer1".
 Будут подсвечены ячейки, содержащие три наибольших значения.


См. также:


[IPivotHighlightItems](IPivotHighlightItems.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
