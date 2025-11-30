# IExAnalyzerExporter.ExAnalyzer

IExAnalyzerExporter.ExAnalyzer
-


# IExAnalyzerExporter.ExAnalyzer


## Синтаксис


ExAnalyzer: [IEaxAnalyzer](../IEaxAnalyzer/IEaxAnalyzer.htm);


## Описание


Свойство ExAnalyzer определяет
 экспресс-отчет, который необходимо экспортировать.


## Пример


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

	    ExpExspr.ExportToFile("c:\"+ Expr.Name + ".XLS", "XLS");

	End Sub UserProc;


После выполнения примера экспресс-отчет будет экспортирован в формат
 XLS. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IExAnalyzerExporter](IExAnalyzerExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
