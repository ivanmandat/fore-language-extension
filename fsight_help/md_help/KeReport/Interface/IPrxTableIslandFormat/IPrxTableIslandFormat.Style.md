# IPrxTableIslandFormat.Style

IPrxTableIslandFormat.Style
-


# IPrxTableIslandFormat.Style


## Синтаксис


Style: [IPrxCellStyle](../IPrxCellStyle/IPrxCellStyle.htm);


## Описание


Свойство Style определяет оформление
 реляционной области данных.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Layout: IPrxTableIslandLayout;

    LayFormat: IPrxTableIslandFormat;

    Style: IPrxCellStyle;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("RR").Edit As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := TI.Edit;

    Layout := TI.Layout;

    LayFormat := Layout.Format;

    Style := LayFormat.Style;

    Style.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("Red"));

    Style.Font.Bold := TriState.OnOption;

    Style.Font.Color := GxColor.FromName("Blue");

    TI.Save;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для реляционной области данных будут настроены
 параметры оформления.


См. также:


[IPrxTableIslandFormat](IPrxTableIslandFormat.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
