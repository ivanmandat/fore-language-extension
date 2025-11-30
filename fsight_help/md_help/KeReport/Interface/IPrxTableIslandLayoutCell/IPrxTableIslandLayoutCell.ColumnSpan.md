# IPrxTableIslandLayoutCell.ColumnSpan

IPrxTableIslandLayoutCell.ColumnSpan
-


# IPrxTableIslandLayoutCell.ColumnSpan


## Синтаксис


ColumnSpan: Integer;


## Описание


Свойство ColumnSpan объединяет
 N ячеек, распложенных в одной строке, где N - значение данного свойства.


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

    Row := Layout.Rows(0);

    Cell := Row.Cells(1);

    Cell.ColumnSpan := 3;

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет объединено заданное количество ячеек
 отображения, расположенных в одной строке. «Report» - идентификатор регламентного
 отчета, на листе которого расположена реляционная область данных.


См. также:


[IPrxTableIslandLayoutCell](IPrxTableIslandLayoutCell.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
