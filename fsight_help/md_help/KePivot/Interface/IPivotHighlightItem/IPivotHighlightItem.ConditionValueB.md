# IPivotHighlightItem.ConditionValueB

IPivotHighlightItem.ConditionValueB
-


# IPivotHighlightItem.ConditionValueB


## Синтаксис


ConditionValueB: Variant;


## Описание


Свойство ConditionValueB определяет
 второе значение, используемое при определении подсвечиваемых данных.


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

	    HighItem.ConditionType := PivotHighlightType.NLAandNGB;

	    HighItem.ConditionValueA := 100;

	    HighItem.ConditionValueB := 200;

	    HighItem.Enabled := True;

	    HighItem.Area := PivotFilterArea.Table;

	    OLAP.Grid.ApplyHighlight(HighItem);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет создано новое условие
 подсветки данных в таблице экспресс-отчета, загруженного в компонент "UiErAnalyzer1".
 Во всей таблице будут подсвечены ячейки, значения которых находятся в
 диапазоне [100,200].


См. также:


[IPivotHighlightItem](IPivotHighlightItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
