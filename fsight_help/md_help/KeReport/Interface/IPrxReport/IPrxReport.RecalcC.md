# IPrxReport.RecalcC

IPrxReport.RecalcC
-


# IPrxReport.RecalcC


## Синтаксис


RecalcC: ([Context:[IPrxReportRecalcContext](../IPrxReportRecalcContext/IPrxReportRecalcContext.htm)=Null]);


## Параметры


Context. Объект, в котором задаются настройки вычисления отчета.


## Описание


Метод RecalcC вычисляет отчет в соответствии с заданными параметрами.


## Пример


Для выполнения примера необходим регламентный отчет с идентификатором «PRX_REPORT».


			    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        MB: IMetabase;

        MObj: IMetabaseObject;

        Report: IPrxReport;

        Context: IPrxReportRecalcContext;

    Begin

        MB := MetabaseClass.Active;

        MObj := MB.ItemById("PRX_REPORT").Edit;

        Report := MObj As IPrxReport;

        UiReport1.Instance := report;

        Context := Report.BeginRecalc;

        Context.RecalcDataIsland(Report.DataIslands.Item(1)) := TriState.OnOption;

        Report.RecalcC(Context);

    End Sub Button1OnClick;


После выполнения примера будет вычислен отчет с указанными настройками.


См. также:


[PrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
