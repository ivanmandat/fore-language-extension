# IReportFormulaBar.Report

IReportFormulaBar.Report
-


# IReportFormulaBar.Report


## Синтаксис


Report: [IUiReport](../IUiReport/IUiReport.htm);


## Описание


Свойство Report определяет компонент
 среды разработки [UiReport](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiReport.htm),
 который будет использоваться как источник данных.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонент UiReport с наименованием
 «UiReport1», компонента ReportFormulaBar с наименованием «ReportFormulaBar1»
 и каких-либо визуальных компонентов, позволяющих отображать и редактировать
 данные регламентного отчета (ReportBox, TabSheetBox или других). В репозитории
 предполагается наличие регламентного отчета с идентификатором «REGULAR_REPORT».


Добавьте ссылку на системную сборку Metabase.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    Report: IPrxReport;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Bind As IPrxReport;

    UiReport1.Report := Report;

    UiReport1.Active := True;

    ReportFormulaBar1.Report := UiReport1;

End Sub Button1OnClick;


При выполнении примера в качестве источника данных для компонента «UiReport1»
 будет установлен указанный регламентный отчет, после этого компонент будет
 активирован и использован в качестве источника данных для «ReportFormulaBar1».
 В «ReportFormulaBar1» будет возможность просматривать и редактировать
 данные или формулу выделенной в отчёте ячейки.


См. также:


[IReportFormulaBar](IReportFormulaBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
