# IPrxTableIslandLayoutCell.GroupingMethod

IPrxTableIslandLayoutCell.GroupingMethod
-


# IPrxTableIslandLayoutCell.GroupingMethod


## Синтаксис


GroupingMethod(Grouping: [IPrxTableIslandGrouping](../IPrxTableIslandGrouping/IPrxTableIslandGrouping.htm)):
 [IPrxTableIslandGroupingMethod](../IPrxTableIslandGroupingMethod/IPrxTableIslandGroupingMethod.htm);


## Параметры


Grouping - группа реляционной
 области данных.


## Описание


Свойство GroupingMethod определяет
 параметры метода группировки данных.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Cell: IPrxTableIslandLayoutCell;

    Method: IPrxTableIslandGroupingMethod;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := Ti.Edit;

    Cell := TI.Layout.Rows(0).Cells(0);

    Method := Cell.GroupingMethod(TI.Groupings.Item(0));

    Method.Method := BasicAggregatorOperation.Sum;

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера будут настроены параметры группировки данных
 для заданной ячейки размещения (отображения). «Report» - идентификатор
 регламентного отчета, на листе которого расположена реляционная область
 данных.


См. также:


[IPrxTableIslandLayoutCell](IPrxTableIslandLayoutCell.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
