# IPrxTableIslandLayout.Island

IPrxTableIslandLayout.Island
-


# IPrxTableIslandLayout.Island


## Синтаксис


Island : [IPrxTableIsland](../IPrxTableIsland/IPrxTableIsland.htm);


## Описание


Свойство Island возвращает реляционную
 область данных, которой принадлежит строка отображения.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Layout: IPrxTableIslandLayout;

    Id: String;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    Layout := TI.Layout;

    Id := Layout.Island.Id;

    Debug.WriteLine(Id);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено наименование
 реляционной области данных.


См. также:


[IPrxTableIslandLayout](IPrxTableIslandLayout.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
