# IExAnalyzerExporter.Sheet

IExAnalyzerExporter.Sheet
-


# IExAnalyzerExporter.Sheet


## Синтаксис


Sheet: [IEaxSheet](../IEaxSheet/IEaxSheet.htm);


## Описание


Свойство Sheet экспортирует
 указанный лист экспресс-отчета.


## Комментарии


При непустом значении свойства экспортируется только указанный лист
 экспресс-отчета, иначе - все листы.


## Пример


Для выполнения примера понадобится экспресс-отчет с идентификатором
 EXPRESS_REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Eax: IEaxAnalyzer;

	    Exporter: IExAnalyzerExporter;

	Begin

	    MB := MetabaseClass.Active;

	    Eax := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    Exporter := New ExAnalyzerExporter.Create;

	    Exporter.Sheet := Eax.ActiveSheet;

	    Exporter.ExportToFile("C:\Temp\EXPRESS_REPORT.xls", "xls");

	End Sub UserProc;


После выполнения примера будет экспортирован только активный лист
 экспресс-отчета.


См. также:


[IExAnalyzerExporter](IExAnalyzerExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
