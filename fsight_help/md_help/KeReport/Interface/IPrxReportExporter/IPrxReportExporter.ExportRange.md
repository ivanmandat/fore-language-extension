# IPrxReportExporter.ExportRange

IPrxReportExporter.ExportRange
-


# IPrxReportExporter.ExportRange


## Синтаксис


ExportRange: String;


## Описание


Свойство ExportRange определяет
 диапазон экспортируемых листов.


## Комментарии


Диапазон экспортируемых листов указывается в виде номеров листов и/или
 диапазонов листов, разделённых запятыми. Например: «1,
 3-6».


При экспорте регламентного отчёта в формат PNG диапазон экспортируемых
 листов указывается в формате «X:Y».
 Где:


	- X - номер печатной
	 страницы на листе отчёта (нумерация начинается с «1»);


	- Y - номер листа отчёта
	 (нумерация начинается с «0»).


То есть, если диапазон «4:0», то экспортирован будет четвертая
 печатная страница на первом листе отчёта.


Для задания одного экспортируемого листа используйте свойство [IPrxReportExporter.Sheet](IPrxReportExporter.Sheet.htm).


## Пример


Для выполнения примера предполагается наличие в навигаторе объектов
 регламентного отчёта с идентификатором «REGULAR_REPORT».


Добавьте ссылки на системные сборки Metabase, Report


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Exp: IPrxReportExporter;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    Exp := New PrxReportExporter.Create;

    Exp.Report := Report;

    Exp.ExportSheetTitles := True;

    Exp.ExportRange := "4:0";

    Exp.ExportToFile("C:\" + Report.Name + ".png", "png");

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера регламентный отчет будет экспортирован в файл
 в формате PNG. В результирующем файле будут отражены наименования листов.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
