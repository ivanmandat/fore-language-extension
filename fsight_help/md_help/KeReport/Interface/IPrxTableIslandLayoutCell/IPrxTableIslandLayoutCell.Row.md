# IPrxTableIslandLayoutCell.Row

IPrxTableIslandLayoutCell.Row
-


# IPrxTableIslandLayoutCell.Row


## Синтаксис


Row : [IPrxTableIslandLayoutRow](../IPrxTableIslandLayoutRow/IPrxTableIslandLayoutRow.htm);


## Описание


Свойство Row возвращает строку
 отображения, которой принадлежит ячейка.


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

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := TI.Edit;

    Layout := TI.Layout;

    Cell := Layout.Rows(0).Cells(1);

    Cell.RowSpan := 2;

    Row := Cell.Row;

    Row.HasHeight := True;

    Row.Height := 15;

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет изменена высота строки отображения и
 объединено заданное количество ячеек отображения, расположенных в одном
 столбце. «Report» - идентификатор регламентного отчета, на листе которого
 расположена реляционная область данных.


См. также:


[IPrxTableIslandLayoutCell](IPrxTableIslandLayoutCell.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
