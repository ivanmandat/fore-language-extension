# IPrxTableIslandGroupingMethod.Cell

IPrxTableIslandGroupingMethod.Cell
-


# IPrxTableIslandGroupingMethod.Cell


## Синтаксис


Cell: [IPrxTableIslandLayoutCell](../IPrxTableIslandLayoutCell/IPrxTableIslandLayoutCell.htm);


## Описание


Свойство Cell определяет параметры
 ячейки отображения, для которой настраиваются итоги.


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

    Method: IPrxTableIslandGroupingMethod;

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

    Method := GrT.Method(TI.Layout.Rows(0).Cells(0));

    Method.Method := BasicAggregatorOperation.Sum;

    Method.Cell.ColumnSpan := 2;

    Method.Field.FieldName := TI.Source.Execute.Fields.Item(2).Name;

    Method.Totals.Caption.AsString := Gr.Caption.AsString;

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера будут настроены заданные параметры итогов.
 «Report» - идентификатор регламентного отчета, на листе которого расположена
 реляционная область данных.


См. также:


[IPrxTableIslandGroupingMethod](IPrxTableIslandGroupingMethod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
