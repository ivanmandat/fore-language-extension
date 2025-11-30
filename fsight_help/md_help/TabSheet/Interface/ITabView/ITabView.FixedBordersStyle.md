# ITabView.FixedBordersStyle

ITabView.FixedBordersStyle
-


# ITabView.FixedBordersStyle


## Синтаксис


FixedBordersStyle: [ITabCellStyle](../ITabCellStyle/ITabCellStyle.htm);


## Описание


Свойство FixedBordersStyle возвращает
 стиль отображения линий фиксированной области.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «REP_TABSHEET».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    SheetT: IPrxTable;

	    Tab: ITabSheet;

	    View: ITabView;

	    pStyle: ITabCellStyle;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REP_TABSHEET").Edit As IPrxReport;

	    SheetT := Report.Sheets.Item(0) As IPrxTable;

	    Tab := SheetT.TabSheet;

	    View := Tab.View;

	    View.FixedColumnsCount := 1;

	    pStyle := View.FixedBordersStyle;

	    pStyle.BorderStyle(TabBorder.EdgeTop) := TabBorderStyle.LineStyleNone;

	    pStyle.BorderStyle(TabBorder.EdgeLeft) := TabBorderStyle.Dash;

	    pStyle.BorderColor(TabBorder.EdgeLeft) := New GxColor.CreateRGB(255, 0, 0);

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в регламентном отчете для линии фиксированной
 области будет определен новый стиль.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
