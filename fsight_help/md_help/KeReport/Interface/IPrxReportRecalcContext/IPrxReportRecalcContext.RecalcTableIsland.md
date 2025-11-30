# IPrxReportRecalcContext.RecalcTableIsland

IPrxReportRecalcContext.RecalcTableIsland
-


# IPrxReportRecalcContext.RecalcTableIsland


## Синтаксис


RecalcTableIsland(TableIsland: [IPrxTableIsland](../IPrxTableIsland/IPrxTableIsland.htm)):
 [TriState](ForeSys.chm::/Enums/TriState.htm);


## Параметры


TableIsland - реляционная область
 данных, параметры вычисления которой должны быть определены.


## Описание


Свойство RecalcTableIsland определяет,
 вычислять ли реляционную область данных.


## Пример


Для выполнения примера необходим регламентный отчет с идентификатором
 «PRX_REPORT».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Context: IPrxReportRecalcContext;

    TableIsland: IPrxTableIsland;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("PRX_REPORT").Edit;

    Report := MObj As IPrxReport;

    Context := Report.CreateRecalcContext;

    Context.Clear;

    TableIsland := Report.TableIslands.Item(0);

    Context.RecalcTableIsland(TableIsland) := TriState.OnOption;

    Report.RecalcC(Context);

    MObj.Save;

End Sub Button1OnClick;


После выполнения примера будет произведено вычисление указанной реляционной
 области данных отчета.


См. также:


[IPrxReportRecalcContext](IPrxReportRecalcContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
