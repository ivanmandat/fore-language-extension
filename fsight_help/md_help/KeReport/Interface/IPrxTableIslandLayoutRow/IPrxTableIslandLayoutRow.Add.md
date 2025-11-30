# IPrxTableIslandLayoutRow.Add

IPrxTableIslandLayoutRow.Add
-


# IPrxTableIslandLayoutRow.Add


## Синтаксис


Add: [IPrxTableIslandLayoutCell](../IPrxTableIslandLayoutCell/IPrxTableIslandLayoutCell.htm);


## Описание


Метод Add добавляет ячейку в
 строку отображения.


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

    Row := Layout.Add;

    Cell := Row.Add;

    SourceFields := Report.TableSources.Item(0).Execute.Fields;

    Cell.Field.FieldName := SourceFields.Item(0).Name;

    Cell.Style.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("Green"));

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет создана структура отображения: одна строка,
 содержащая один столбец. «Report» - идентификатор регламентного отчета.


См. также:


[IPrxTableIslandLayoutRow](IPrxTableIslandLayoutRow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
