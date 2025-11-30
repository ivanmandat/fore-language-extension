# IPrxReportRecalcContext.RecalcSheet

IPrxReportRecalcContext.RecalcSheet
-


# IPrxReportRecalcContext.RecalcSheet


## Синтаксис


RecalcSheet(Sheet: [IPrxSheet](../IPrxSheet/IPrxSheet.htm)):
 [TriState](ForeSys.chm::/Enums/TriState.htm);


## Параметры


Sheet - лист отчета, параметры
 вычисления которого должны быть определены.


## Описание


Свойство RecalcSheet определяет,
 вычислять ли указанный лист отчета.


## Пример


Для выполнения примера необходим регламентный отчет с идентификатором
 «PRX_REPORT».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Context: IPrxReportRecalcContext;

    Sheet: IPrxSheet;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("PRX_REPORT").Edit;

    Report := MObj As IPrxReport;

    Context := Report.CreateRecalcContext;

    Context.Clear;

    Sheet := Report.Sheets.Item(0);

    Context.RecalcSheet(Sheet) := TriState.OnOption;

    Report.RecalcC(Context);

    MObj.Save;

End Sub Button1OnClick;


После выполнения примера будет произведено вычисление первого листа
 отчета.


См. также:


[IPrxReportRecalcContext](IPrxReportRecalcContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
