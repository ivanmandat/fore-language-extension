# IExAnalyzerExporter.ExportObjectAsBitmap

IExAnalyzerExporter.ExportObjectAsBitmap
-


# IExAnalyzerExporter.ExportObjectAsBitmap


## Синтаксис


ExportObjectAsBitmap: Boolean;


## Описание


Свойство ExportObjectAsBitmap
 определяет признак экспорта объектов в растровом формате при экспорте
 в форматы PDF (*.pdf) и XLS (*.xls).


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Объекты отчёта экспортируются в растровом формате;


	- False. Объекты отчёта
	 экспортируются в векторном формате.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    EaxExporter: IExAnalyzerExporter;

	Begin

	    MB := MetabaseClass.Active;

	    Express := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    EaxExporter := New ExAnalyzerExporter.Create;

	    EaxExporter.ExAnalyzer := Express;

	    EaxExporter.ExportFootnotes := True;

	    EaxExporter.ExportChartAsImage := False;

	    EaxExporter.ExportToFile("C:\Report.PDF", "PDF");

	End Sub UserProc;


При выполнения примера экспресс-отчет будет экспортирован в указанный
 файл в формате PDF. Объекты отчёта будут экспортированы в векторном формате,
 также будут экспортированы сноски.


См. также:


[IExAnalyzerExporter](IExAnalyzerExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
