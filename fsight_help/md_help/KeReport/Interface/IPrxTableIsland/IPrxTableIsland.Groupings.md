# IPrxTableIsland.Groupings

IPrxTableIsland.Groupings
-


# IPrxTableIsland.Groupings


## Синтаксис


Groupings : [IPrxTableIslandGroupings](../IPrxTableIslandGroupings/IPrxTableIslandGroupings.htm);


## Описание


Свойство Groupings определяет
 параметры группировки реляционной области данных.


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

    TI := TI.Edit;

    Grs := TI.Groupings;

    Gr := Grs.Add;

    Gr.Field.FieldName := "ORDERS";

    Gr.Caption.AsString := "VALUE";

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера для реляционной области данных будут настроены
 параметры группировки. «Report» - идентификатор регламентного отчета.


См. также:


[IPrxTableIsland](IPrxTableIsland.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
