# IPrxTableIslandGrouping.Totals

IPrxTableIslandGrouping.Totals
-


# IPrxTableIslandGrouping.Totals


## Синтаксис


Totals : [IPrxTableIslandGroupingTotals](../IPrxTableIslandGroupingTotals/IPrxTableIslandGroupingTotals.htm);


## Описание


Свойство Totals определяет параметры
 итогов для группы.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Grs: IPrxTableIslandGroupings;

    Gr: IPrxTableIslandGrouping;

    GrT: IPrxTableIslandGroupingTotals;

    Style: IPrxCellStyle;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := Ti.Edit;

    Grs := TI.Groupings;

    Gr := Grs.Item(0);

    GrT := Gr.Totals;

    GrT.Caption.AsString := "VALUE";

    Style := GrT.Style;

    Style.BackgroundColor := New GxColor.CreateRGB(250, 0, 0);

    Style.Font.Bold := TriState.OnOption;

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера будут заданы параметры итогов для группы. «Report»
 - идентификатор регламентного отчета, на листе которого расположена реляционная
 область данных, для которой создана группа.


См. также:


[IPrxTableIslandGrouping](IPrxTableIslandGrouping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
