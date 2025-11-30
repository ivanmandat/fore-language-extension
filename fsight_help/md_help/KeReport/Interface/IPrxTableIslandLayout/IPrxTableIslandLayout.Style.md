# IPrxTableIslandLayout.Style

IPrxTableIslandLayout.Style
-


# IPrxTableIslandLayout.Style


## Синтаксис


Style : [IPrxCellStyle](../IPrxCellStyle/IPrxCellStyle.htm);


## Описание


Свойство Style определяет стиль
 оформления отображения.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Layout: IPrxTableIslandLayout;

    Style: IPrxCellStyle;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := TI.Edit;

    Layout := TI.Layout;

    Style := Layout.Style;

    Style.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("Green"));

    Style.Font.Color := New GxColor.CreateRGB(250, 0, 0);

    Style.Font.Italic := TriState.OnOption;

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера для отображения будет применено заданное оформление.
 «Report» - идентификатор регламентного отчета.


См. также:


[IPrxTableIslandLayout](IPrxTableIslandLayout.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
