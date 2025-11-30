# IPrxTableIslandGroupings.Island

IPrxTableIslandGroupings.Island
-


# IPrxTableIslandGroupings.Island


## Синтаксис


Island : [IPrxTableIsland](../IPrxTableIsland/IPrxTableIsland.htm);


## Описание


Свойство Island возвращает реляционную
 область данных, которой принадлежит группа.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Grs: IPrxTableIslandGroupings;

    Name: String;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    Grs := TI.Groupings;

    Name := Grs.Island.Name;

    Debug.WriteLine(Name);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено наименование
 реляционной области данных, которой принадлежит группа. «Report» - идентификатор
 регламентного отчета, на листе которого расположена реляционная область
 данных.


См. также:


[IPrxTableIslandGroupings](IPrxTableIslandGroupings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
