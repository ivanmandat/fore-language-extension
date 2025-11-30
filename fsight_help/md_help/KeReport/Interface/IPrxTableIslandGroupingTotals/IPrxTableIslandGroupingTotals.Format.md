# IPrxTableIslandGroupingTotals.Format

IPrxTableIslandGroupingTotals.Format
-


# IPrxTableIslandGroupingTotals.Format


## Синтаксис


Format : [IPrxTableIslandFormat](../IPrxTableIslandFormat/IPrxTableIslandFormat.htm);


## Описание


Свойство Format определяет параметры
 оформления итогов.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Grs: IPrxTableIslandGroupings;

    Gr: IPrxTableIslandGrouping;

    GrT: IPrxTableIslandGroupingTotals;

    Format: IPrxTableIslandFormat;

    Style: IPrxCellStyle;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Edit As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := TI.Edit;

    Grs := TI.Groupings;

    Gr := Grs.Item(0);

    GrT := Gr.Totals;

    Format := GrT.Format;

    Style := Format.Style;

    Style.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("Red"));

    Style.Font.Bold := TriState.OnOption;

    Style.Font.Color := GxColor.FromName("Blue");

    TI.Save;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для итогов реляционной области будет настроено
 оформление.


См. также:


[IPrxTableIslandGroupingTotals](IPrxTableIslandGroupingTotals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
