# IPrxTableIslandLayoutRow.Cells

IPrxTableIslandLayoutRow.Cells
-


# IPrxTableIslandLayoutRow.Cells


## Синтаксис


Cells(Index: Integer): [IPrxTableIslandLayoutCell](../IPrxTableIslandLayoutCell/IPrxTableIslandLayoutCell.htm);


## Параметры


Index - индекс ячейки строки
 отображения.


## Описание


Свойство Cells определяет параметры
 ячейки строки отображения.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Layout: IPrxTableIslandLayout;

    Row: IPrxTableIslandLayoutRow;

    Cell: IPrxTableIslandLayoutCell;

    SourceFields: IDalCursorFields;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := TI.Edit;

    Layout := TI.Layout;

    Row := Layout.Rows(0);

    Cell := Row.Cells(1);

    SourceFields := Report.TableSources.Item(0).Execute.Fields;

    Cell.Field.FieldName := SourceFields.Item(0).Name;

    Cell.Style.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("Green"));

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера у заданной ячейки строки отображения будут
 изменены параметры оформления и привязки к источнику данных. «Report»
 - идентификатор регламентного отчета, на листе которого расположена реляционная
 область данных.


См. также:


[IPrxTableIslandLayoutRow](IPrxTableIslandLayoutRow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
