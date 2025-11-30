# IPrxTableIslandLayoutRow.Layout

IPrxTableIslandLayoutRow.Layout
-


# IPrxTableIslandLayoutRow.Layout


## Синтаксис


Layout : [IPrxTableIslandLayout](../IPrxTableIslandLayout/IPrxTableIslandLayout.htm);


## Описание


Свойство Layout возвращает структуру
 отображения, которой принадлежит строка.


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

    Count: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Bind;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    Layout := TI.Layout;

    Row := Layout.Rows(0);

    Count := Row.Layout.Count;

    Debug.WriteLine(Count);

End Sub UserProc


После выполнения примера в окно консоли будет выведено количество строк
 в отображении. «Report» - идентификатор регламентного отчета.


См. также:


[IPrxTableIslandLayoutRow](IPrxTableIslandLayoutRow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
