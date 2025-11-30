# IEaxGrid.ApplyHighlight

IEaxGrid.ApplyHighlight
-


# IEaxGrid.ApplyHighlight


## Синтаксис


ApplyHighlight([Value: [IPivotHighlightItem](KePivot.chm::/Interface/IPivotHighlightItem/IPivotHighlightItem.htm)
 = Null]);


## Параметры


Value. Условие
 для подсветки ячеек.


## Описание


Метод ApplyHighlight осуществляет
 подсветку данных. Условие для подсветки передается посредством параметра
 Value.


## Комментарии


По умолчанию параметр Value
 не указан, при этом будут применены все условия подсветки, для которых
 свойство [Enabled](KePivot.chm::/Interface/IPivotHighlightItem/IPivotHighlightItem.Enabled.htm)
 имеет значение True.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Condition: IPivotHighlightItem;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr:=MObj As IEaxAnalyzer;

	    Grid:=Expr.Grid;

	    Condition:=Expr.Pivot.Highlight.Add;

	    Condition.ConditionType:=PivotHighlightType.GA;

	    Condition.ConditionValueA:=10000;

	    Condition.Area:=PivotFilterArea.Table;

	    Grid.ApplyHighlight(Condition);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в таблице экспресс-отчета будут подсвечены
 ячейки, значение которых больше «10000». Идентификатор экспресс-отчета
 - EXPRESS_REPORT.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
