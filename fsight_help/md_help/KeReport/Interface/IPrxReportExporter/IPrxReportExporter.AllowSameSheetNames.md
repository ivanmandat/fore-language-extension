# IPrxReportExporter.AllowSameSheetNames

IPrxReportExporter.AllowSameSheetNames
-


# IPrxReportExporter.AllowSameSheetNames


## Синтаксис


AllowSameSheetNames: Boolean;


## Описание


Свойство AllowSameSheetNames
 определяет признак доступности экспорта нескольких регламентных отчётов,
 содержащих листы с одинаковыми наименованиями, в файл формата XLSX.


## Комментарии


Допустимые значения:


	- True.
	 Экспорт регламентных отчётов доступен вне зависимости от наименования
	 листов. Если наименования листов одного регламентного отчёта совпадают
	 с наименованиями листов другого, то в результирующем файле они будут
	 проиндексированы, например: «Лист 1», «Лист 1_0»;


	- False.
	 По умолчанию. Экспорт регламентных отчётов доступен, если наименования
	 листов одного регламентного отчёта совпадают с наименованиями листов
	 другого.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентных
 отчётов с идентификаторами REPORT_1 и REPORT_2. В регламентных отчётах
 должен содержаться лист с наименованием «Лист 1».


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report1, Report2: IPrxReport;

	    Exp: IPrxReportExporter;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентные отчёты

	    Report1 := MB.ItemById("REPORT_1").Bind As IPrxReport;

	    Report2 := MB.ItemById("REPORT_2").Bind As IPrxReport;

	    // Создадим объект
	 для экспорта регламентных отчётов

	    Exp := New PrxReportExporter.Create;

	    // Разрешим экспортировать
	 регламентные отчёты, содержащих листы с одинаковыми наименованиями

	    Exp.AllowSameSheetNames := True;

	    // Экспортируем регламентные отчёты в файл
	 формата XLSX

	    Exp.StartBatchCommand("C:\Report.xlsx", "xlsx");

	    Exp.Report := Report1;

	    Exp.ExportToFile("C:\Report.xlsx", "xlsx");

	    Exp.Report := Report2;

	    Exp.ExportToFile("C:\Report.xlsx", "xlsx");

	    Exp.FinishBatchCommand;

	End Sub UserProc;


После выполнения примера регламентные отчёты будут экспортированы в
 файл C:\Report.xlsx. В файле будут содержаться листы «Лист 1», «Лист 1_0».


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
