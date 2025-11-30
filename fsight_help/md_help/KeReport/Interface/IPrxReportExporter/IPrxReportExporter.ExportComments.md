# IPrxReportExporter.ExportComments

IPrxReportExporter.ExportComments
-


# IPrxReportExporter.ExportComments


## Синтаксис


ExportComments: Boolean;


## Описание


Свойство ExportComments определяет,
 будут ли экспортироваться комментарии к ячейкам с данными.


## Комментарии


Допустимые значения:


	- True. Экспортировать
	 комментарии к ячейкам с данными;


	- False. Значение по умолчанию.
	 Не экспортировать комментарии к ячейкам с данными.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В качестве источника в отчёт добавлен
 стандартный куб, в котором включена возможность сохранения комментариев
 к ячейкам с данными. На базе источника создан срез и визуализатор - таблица.
 Для ячеек с данными добавлены какие-либо комментарии.


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Report: IPrxReport;

	    Exp: IPrxReportExporter;

	Begin

	    Mb := MetabaseClass.Active;

	    Report := Mb.ItemById("REPORT").Open(Null) As IPrxReport;

	    Exp := New PrxReportExporter.Create;

	    Exp.Report := Report;

	    Exp.ExportComments := True;

	    Exp.ExportToFile("D:\Report.xlsx", "XLSX");

	End Sub UserProc;


При выполнении примера регламентный отчёт будет экспортирован в файл
 Microsoft Excel. Для ячеек с данными также будут экспортированы комментарии.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
