# IExAnalyzerExporter.ExportChartAsImage

IExAnalyzerExporter.ExportChartAsImage
-


# IExAnalyzerExporter.ExportChartAsImage


## Синтаксис


ExportChartAsImage: Boolean;


## Описание


Свойство ExportChartAsImage
 определяет параметры экспорта диаграммы при экспорте в формат XLS (*.xls).


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Диаграмма будет экспортироваться как изображение в формате EMF, и
	 с ней можно будет работать только как с изображением средствами Microsoft
	 Excel;


	- False. Диаграмма экспортируется
	 как объект, с которым можно работать как с диаграммой средствами Microsoft
	 Excel. Если в отчете скрыта таблица, являющаяся источником данных
	 для диаграммы, а диаграмма отображена, то в файле экспорта лист с
	 таблицей данных будет скрыт.


При экспорте из рядного режима базы
 данных временных рядов диаграмма, построенная для вычисляемых рядов,
 всегда экспортируется как изображение. К данным рядам относятся:


	- ряды, рассчитанные с помощью методов моделирования (сглаживание,
	 прогноз, регрессия);


	- совмещенные ряды;


	- ряды, рассчитанные методом агрегации.


Диаграмма для всех остальных рядов экспортируется в соответствии со
 значением свойства ExportChartAsImage.


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

	    ExpExspr.ExportChartAsImage := False;

	    Expr.Grid.Refresh;

	    ExpExspr.ExportToFile("C:\Analazer.XLS", "XLS");

	End Sub UserProc;


После выполнения примера экспресс-отчет будет экспортирован в файл C:\Analazer.XLS.
 Диаграмма будет экспортирована как диаграмма, а не изображение.


См. также:


[IExAnalyzerExporter](IExAnalyzerExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
