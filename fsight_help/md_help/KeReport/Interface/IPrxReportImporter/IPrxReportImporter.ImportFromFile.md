# IPrxReportImporter.ImportFromFile

IPrxReportImporter.ImportFromFile
-


# IPrxReportImporter.ImportFromFile


## Синтаксис


ImportFromFile(FilePath: String): Boolean;


## Параметры


FilePath. Путь и наименование
 файла, из которого осуществляется импорт данных.


## Описание


Метод ImportFromFile осуществляет
 импорт данных и возвращает признак успешного завершения импорта.


## Комментарии


Импорт осуществляется путём создания в регламентном отчёте новых листов,
 которые соответствуют листам из файла Microsoft Excel, и переносу на них
 данных.


Для успешного импорта требуется соблюдение следующих условий:


	- Регламентный отчёт, указанный в свойстве [Report](IPrxReportImporter.Report.htm),
	 должен быть открыт на редактирование;


	- В регламентном отчёте наименования листов отличаются от наименований
	 листов в файле.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В файловой системе предполагается наличие
 файла Microsoft Excel - «D:\Work\data.xlsx».


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Report: IPrxReport;

	    Import: IPrxReportImporter;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие отчёта на редактирование

	    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

	    // Создание импортёра

	    Import := New PrxReportImporter.Create;

	    Import.Report := Report;

	    // Импорт данных

	    Import.ImportFromFile("D:\Work\book1.xlsx");

	    // Сохранение изменений

	    Report.MetabaseObject.Save;

	End Sub UserProc;


При выполнении примера будет осуществлён импорт данных из файла Microsoft
 Excel в регламентный отчёт.


См. также:


[IPrxReportImporter](IPrxReportImporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
