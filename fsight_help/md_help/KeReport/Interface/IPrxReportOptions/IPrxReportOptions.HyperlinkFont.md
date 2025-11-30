# IPrxReportOptions.HyperlinkFont

IPrxReportOptions.HyperlinkFont
-


# IPrxReportOptions.HyperlinkFont


## Синтаксис


HyperlinkFont: [ITabFont](TabSheet.chm::/Interface/ITabFont/ITabFont.htm);


## Описание


Свойство HyperlinkFont определяет
 единое оформление гиперссылок отчета.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Opt: IPrxReportOptions;

    style: ITabCellStyle;

    TabF: ITabFont;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    Opt := Report.Options;

    Style := New TabCellStyle.Create;

    TabF := Style.Font;

    TabF.Bold := TriState.OnOption;

    TabF.Color := New GxColor.CreateRGB(231, 315, 135);

    Opt.HyperlinkFont := TabF;

End Sub UserProc;


После выполнения примера для гиперссылок отчета будет применено единое
 оформление.


См. также:


[IPrxReportOptions](IPrxReportOptions.htm)
 | [IPrxPageSettings](../IPrxPageSettings/IPrxPageSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
