# IPrxTableIsland.TableIslands

IPrxTableIsland.TableIslands
-


# IPrxTableIsland.TableIslands


## Синтаксис


TableIslands : [IPrxTableIslands](../IPrxTableIslands/IPrxTableIslands.htm);


## Описание


Свойство TableIslands возвращает
 коллекцию реляционных областей данных.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Count: Integer;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    Count := TI.TableIslands.Count;

    Debug.WriteLine(Count.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено количество реляционных
 областей данных в коллекции.


См. также:


[IPrxTableIsland](IPrxTableIsland.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
