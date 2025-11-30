# IPrxReportRecalcContext.RecalcDataIsland

IPrxReportRecalcContext.RecalcDataIsland
-


# IPrxReportRecalcContext.RecalcDataIsland


## Синтаксис


RecalcDataIsland(DataIsland: [IPrxDataIsland](../IPrxDataIsland/IPrxDataIsland.htm)):
 [TriState](ForeSys.chm::/Enums/TriState.htm);


## Параметры


DataIsland - область данных,
 параметры вычисления которой должны быть определены.


## Описание


Свойство RecalcDataIsland определяет,
 необходимо ли вычислить указанную область данных.


## Пример


Для выполнения примера необходим регламентный отчет с идентификатором
 «PRX_REPORT».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Context: IPrxReportRecalcContext;

    DataIsland: IPrxDataIsland;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("PRX_REPORT").Edit;

    Report := MObj As IPrxReport;

    Context := Report.CreateRecalcContext;

    Context.Clear;

    DataIsland := Report.DataIslands.Item(0);

    Context.RecalcDataIsland(DataIsland) := TriState.OnOption;

    Report.RecalcC(Context);

    MObj.Save;

End Sub Button1OnClick;


После выполнения примера будет произведено вычисление указанной области
 данных отчета.


См. также:


[IPrxReportRecalcContext](IPrxReportRecalcContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
