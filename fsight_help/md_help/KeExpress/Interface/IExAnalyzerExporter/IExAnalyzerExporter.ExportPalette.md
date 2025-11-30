# IExAnalyzerExporter.ExportPalette

IExAnalyzerExporter.ExportPalette
-


# IExAnalyzerExporter.ExportPalette


## Синтаксис


ExportPalette: Boolean;


## Описание


Свойство ExportPalette определяет
 признак экспорта палитры в Excel (*.xls).


## Комментарии


Если свойству установлено значение True,
 то при экспорте палитра, используемая в Excel, заменяется на палитру,
 используемую в «Форсайт. Аналитическая платформа»;
 при значении False происходит
 пересчет палитры в Excel, в соответствии с палитрой, используемой в платформе.


По умолчанию данное свойство имеет значение True.


## Пример


В рассматриваемом примере предполагается существование объекта Analazer
 типа IEaxAnalyzer.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Analazer: IEaxAnalyzer;

	    Exp: IExAnalyzerExporter;

	Begin

	    exp := New ExAnalyzerExporter.Create;

	    exp.ExAnalyzer := Analazer;

	    exp.ExportPalette := False;

	    exp.ExportToFile("C:\Temp\Analazer.xls","XLS");

	End Sub UserProc;


При экспорте отчета будет осуществлен пересчет палитры в Excel.


См. также:


[IExAnalyzerExporter](IExAnalyzerExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
