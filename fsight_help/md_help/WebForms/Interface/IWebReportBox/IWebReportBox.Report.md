# IWebReportBox.Report

IWebReportBox.Report
-


# IWebReportBox.Report


## Синтаксис


Report: [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm);


## Описание


Свойство Report определяет регламентный
 отчёт, с которым осуществляется работа в компоненте.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. Также предполагается наличие веб-формы
 и расположенного на ней компонента ReportBox с наименованием ReportBox1.
 Указанная процедура установлена в качестве обработчика события OnShow
 для веб-формы.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


Sub TESTWebFormOnShow;

Var

    MB: IMetabase;

    Rep: IPrxReport;

Begin

    MB := MetabaseClass.Active;

    Rep := MB.ItemById("REPORT").Open(Null) As IPrxReport;

    ReportBox1.Report := Rep;

End Sub TESTWebFormOnShow;


При запуске веб-формы к компоненту ReportBox1 будет подключен указанный
 регламентный отчёт.


См. также:


[IWebReportBox](IWebReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
