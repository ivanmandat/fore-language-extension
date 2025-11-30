# IPrxTableIslandLayout.Rows

IPrxTableIslandLayout.Rows
-


# IPrxTableIslandLayout.Rows


## Синтаксис


Rows(Index: Integer): [IPrxTableIslandLayoutRow](../IPrxTableIslandLayoutRow/IPrxTableIslandLayoutRow.htm);


## Параметры


Index - индекс строки в отображении.


## Описание


Свойство Rows определяет параметры
 строки отображения.


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

    SourceFields := Report.TableSources.Item(0).Execute.Fields;

    Cell := Row.Cells(0);

    Cell.Field.FieldName := SourceFields.Item(0).Name;

    Cell.Style.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("Green"));

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера будут изменены привязка ячейки к источнику
 данных и задан цвет фона для нее. «Report» - идентификатор регламентного
 отчета.


См. также:


[IPrxTableIslandLayout](IPrxTableIslandLayout.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
