# IPrxTableIslandGroupingTotals.Grouping

IPrxTableIslandGroupingTotals.Grouping
-


# IPrxTableIslandGroupingTotals.Grouping


## Синтаксис


Grouping : [IPrxTableIslandGrouping](../IPrxTableIslandGrouping/IPrxTableIslandGrouping.htm);


## Описание


Свойство Grouping возвращает
 группу, которой принадлежат итоги.


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

    GrT.Caption.AsString := GrT.Grouping.Caption.AsString;

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера заголовок итогов будет таким же как и заголовок
 группы. «Report» - идентификатор регламентного отчета, на листе которого
 расположена реляционная область данных.


См. также:


[IPrxTableIslandGroupingTotals](IPrxTableIslandGroupingTotals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
