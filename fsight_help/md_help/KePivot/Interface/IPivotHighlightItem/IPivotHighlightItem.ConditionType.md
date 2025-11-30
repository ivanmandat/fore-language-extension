# IPivotHighlightItem.ConditionType

IPivotHighlightItem.ConditionType
-


# IPivotHighlightItem.ConditionType


## Синтаксис


ConditionType: [PivotHighlightType](../../Enums/PivotHighlightType.htm);


## Описание


Свойство ConditionType определяет
 тип условия, по которому будут отбираться подсвечиваемые данные.


## Пример №1


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием UiErAnalyzer1, являющегося источником данных
 для TabSheetBox. К компоненту UiErAnalyzer1 подключен какой-либо экспресс-отчёт.


Добавьте ссылки на системные сборки: Express, Pivot.


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
 подсветки данных в таблице экспресс-отчета. Во всей таблице будут подсвечены
 ячейки, значения которых находятся в диапазоне [100,200].


## Пример №2


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента ReportBox и компонента
 UiReport с наименованием UiReport1, являющегося источником данных для
 ReportBox. К компоненту UiReport1 подключен какой-либо регламентный отчёт.


Добавьте ссылки на системные сборки: Dimension, Drawing, Express, Pivot.


Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    OLAP: IEaxAnalyzer;

    Grid: IEaxGrid;

    Pivot: IPivot;

    Table: IPivotTable;

    HighItems: IPivotHighlightItems;

    HighItem: IPivotHighlightItem;

Begin

    Grid := UiReport1.Report.DataArea.Views.Item(0) As IEaxGrid;

    Pivot := Grid.Pivot;

    Pivot.BeginUpdate;

    Table := Pivot.ObtainTable;

    HighItems := Pivot.Highlight;

    HighItem := HighItems.Add;

    HighItem.ConditionType := PivotHighlightType.SelectionSet;

    // Задаём отметку подсвечиваемых данных

    HighItem.ConditionValueA := GetDimSelectionSet(Pivot);

    // Задаём цвет

    HighItem.ConditionValueB := GxColor.FromKnownColor(GxKnownColor.Aquamarine);

    HighItem.Area := PivotFilterArea.Table;

		    HighItem.Enabled := True;

    Pivot.EndUpdateEx(False);

    Grid.ApplyHighlight(HighItem);

End Sub Button1OnClick;


Function GetDimSelectionSet(Pivot: IPivot): IDimSelectionSet;

Var

    DF: IDimSelectionSetFactory;

    DimSS, ResultSet: IDimSelectionSet;

    DimS: IDimSelection;

Begin

    DF := New DimSelectionSetFactory.Create;

    ResultSet := DF.CreateDimSelectionSet;

    DimSS := DF.CreateDimSelectionSet;

    Pivot.Selection.CopyTo(DimSS, True, True);

		    For Each DimS In DimSS Do

        DimS.DeselectAll;

        Select Case DimS.Dimension.Ident

            Case "FACTS": DimS.SelectElement(0, False);

            // Установка отметки по другим измерениям

        End Select;

		    End For;

    ResultSet.AddCompound(0, DimSS);

    Return ResultSet;

End Function GetDimSelectionSet;


После выполнения примера при нажатии на кнопку будет создано новое условие
 подсветки данных в аналитической области , которая создана в регламентном
 отчёте. Будут подсвечены данные в соответствии с заданной отметкой в источнике
 данных аналитической области.


См. также:


[IPivotHighlightItem](IPivotHighlightItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
