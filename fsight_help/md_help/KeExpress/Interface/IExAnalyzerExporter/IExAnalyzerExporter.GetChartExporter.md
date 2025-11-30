# IExAnalyzerExporter.GetChartExporter

IExAnalyzerExporter.GetChartExporter
-


# IExAnalyzerExporter.GetChartExporter


## Синтаксис


GetChartExporter: [IChartExporter](Chart.chm::/Interface/IChartExporter/IChartExporter.htm);


## Описание


Метод GetChartExporter создает
 объект для экспорта диаграммы экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    Exp: IExAnalyzerExporter;

	    ChartExp: IChartExporter;

	Begin

	    MB := MetabaseClass.Active;

	    Analyzer := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Exp := New ExAnalyzerExporter.Create;

	    Exp.ExAnalyzer := Analyzer;

	    Analyzer.Grid.Refresh;

	    ChartExp := Exp.GetChartExporter;

	    ChartExp.Chart := Analyzer.Chart.Chart;

	    ChartExp.ExportToFile("c:\chart.jpg", "JPG");

	End Sub UserProc;


После выполнения примера диаграмма экспресс-отчета будет экспортирована
 в формат JPG. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IExAnalyzerExporter](IExAnalyzerExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
