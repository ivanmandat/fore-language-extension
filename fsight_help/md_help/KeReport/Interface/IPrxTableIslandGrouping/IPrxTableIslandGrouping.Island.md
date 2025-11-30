# IPrxTableIslandGrouping.Island

IPrxTableIslandGrouping.Island
-


# IPrxTableIslandGrouping.Island


## Синтаксис


Island : [IPrxTableIsland](../IPrxTableIsland/IPrxTableIsland.htm);


## Описание


Свойство Island возвращает реляционную
 область данных, которой принадлежит группа.


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

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := Ti.Edit;

    Grs := TI.Groupings;

    Gr := Grs.Item(0);

    Gr.Indent := 2;

    Gr.Island.AdjustMode := PrxAdjustMode.ColumnsThenRows;

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера будут определены заданные параметры для группы
 и реляционной области. «Report» - идентификатор регламентного отчета,
 на листе которого расположена реляционная область данных.


См. также:


[IPrxTableIslandGrouping](IPrxTableIslandGrouping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
