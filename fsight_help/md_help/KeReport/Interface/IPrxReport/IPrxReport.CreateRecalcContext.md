# IPrxReport.CreateRecalcContext

IPrxReport.CreateRecalcContext
-


# IPrxReport.CreateRecalcContext


## Синтаксис


CreateRecalcContext: [IPrxReportRecalcContext](../IPrxReportRecalcContext/IPrxReportRecalcContext.htm);


## Описание


Метод CreateRecalcContext создает новый контекст для вычисления, не привязанный к отчету, т.е. ссылка на него в отчете не хранится.


## Комментарии


Под контекстом понимается объект, в котором задаются параметры вычисления.


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

        Context := Report.CreateRecalcContext;

        Context.RecalcDataIsland(Report.DataIslands.Item(0)) := TriState.OnOption;

        Report.RecalcC(Context);

    End Sub Button1OnClick;


После выполнения примера будет создан контекст для вычисления регламентного отчета методом CreateRecalcContext, в нем задана область данных, которая будет вычислена.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
