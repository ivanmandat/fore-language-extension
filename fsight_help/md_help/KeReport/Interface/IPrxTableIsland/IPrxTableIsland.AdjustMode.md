# IPrxTableIsland.AdjustMode

IPrxTableIsland.AdjustMode
-


# IPrxTableIsland.AdjustMode


## Синтаксис


AdjustMode: [PrxAdjustMode](../../Enums/PrxAdjustMode.htm);


## Описание


Свойство AdjustMode определяет
 способ подгонки размеров ячейки.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Range: ITabRange;

    Layout: IPrxTableIslandLayout;

    Row: IPrxTableIslandLayoutRow;

    Cell: IPrxTableIslandLayoutCell;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Add;

    TI.Source := Report.TableSources.Item(0);

    TI.Sheet := Report.Sheets.Item(0);

    TI.AdjustMode := PrxAdjustMode.Columns; // способ подгонки - только столбцы

    Range := (TI.Sheet As IPrxTable).TabSheet.Cell(1, 1);

    TI.Range := Range;

    Layout := TI.Layout;

    Row := Layout.Add;

    Row.Height := 30;

    Cell := Row.Add;

    Cell.Field.FieldName := "ID";

    Cell := Row.Add;

    Cell.Field.FieldName := "NAME";

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера на лист регламентного отчета будет добавлена
 реляционная область данных с заданными параметрами. «Report» - идентификатор
 регламентного отчета.


См. также:


[IPrxTableIsland](IPrxTableIsland.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
