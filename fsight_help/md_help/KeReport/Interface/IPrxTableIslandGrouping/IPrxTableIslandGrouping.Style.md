# IPrxTableIslandGrouping.Style

IPrxTableIslandGrouping.Style
-


# IPrxTableIslandGrouping.Style


## Синтаксис


Style : [IPrxCellStyle](../IPrxCellStyle/IPrxCellStyle.htm);


## Описание


Свойство Style определяет параметры
 оформления для группы.


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

    Style := Gr.Style;

    Style.BackgroundColor := New GxColor.CreateRGB(250, 0, 0);

    Style.Font.Bold := TriState.OnOption;

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера для группы будут заданы параметры оформления.
 «Report» - идентификатор регламентного отчета, на листе которого расположена
 реляционная область данных, для которой создана группа.


См. также:


[IPrxTableIslandGrouping](IPrxTableIslandGrouping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
