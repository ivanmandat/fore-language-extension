# IExAnalyzerExporter.ExportCellImages

IExAnalyzerExporter.ExportCellImages
-


# IExAnalyzerExporter.ExportCellImages


## Синтаксис


ExportCellImages: Boolean;


## Описание


Свойство ExportCellImages определяет,
 будут ли экспортироваться изображения, содержащиеся в ячейках таблицы.


## Комментарии


По умолчанию свойству установлено значение True.


Если свойству установлено значение True,
 то при экспорте будут экспортироваться изображения, содержащиеся в ячейках
 таблицы (например, изображения условного форматирования). Если установлено
 значение False, то изображения
 экспортироваться не будут.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    ExpExspr: IExAnalyzerExporter;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    ExpExspr := New ExAnalyzerExporter.Create;

	    ExpExspr.ExAnalyzer := Expr;

	    ExpExspr.ExportCellImages := False;

	    ExpExspr.ExportToFile("C:\Express.pdf", "PDF");

	End Sub UserProc;


После выполнения примера экспресс-отчет будет экспортирован в файл C:\Express.pdf.
 Если в ячейках таблицы экспресс-отчета имеются какие-либо изображения,
 то они экспортированы не будут.


См. также:


[IExAnalyzerExporter](IExAnalyzerExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
