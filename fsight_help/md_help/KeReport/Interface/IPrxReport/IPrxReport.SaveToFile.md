# IPrxReport.SaveToFile

IPrxReport.SaveToFile
-


# IPrxReport.SaveToFile


## Синтаксис


SaveToFile(FileName: String; Mode: [PrxReportSaveMode](../../Enums/PrxReportSaveMode.htm));


## Параметры


FileName - путь и наименование
 файла;


Mode - режим сохранения.


## Описание


Метод SaveToFile сохраняет регламентный
 отчет в файл.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Bind As IPrxReport;

	    Report.SaveToFile("c:\Report.ppreport", PrxReportSaveMode.Full);

	End Sub UserProc;


После выполнения примера регламентный отчет с идентификатором «Report» будут сохранен в файл «Report.ppreport».


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
