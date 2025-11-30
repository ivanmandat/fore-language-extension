# IPrxReport.BeginRecalc

IPrxReport.BeginRecalc
-


# IPrxReport.BeginRecalc


## Синтаксис


BeginRecalc: [IPrxReportRecalcContext](../IPrxReportRecalcContext/IPrxReportRecalcContext.htm);


## Описание


Метод BeginRecalc создает контекст для вычисления, ссылка на который сохраняется внутри отчета при последующем вызове.


## Комментарии


Контекст для вычисления создается при первом вызове метода.


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


После выполнения примера будет создан контекст для вычисления регламентного отчета методом BeginRecalc, в нем задана область данных, которая будет вычислена.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
