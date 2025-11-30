# IPrxReportOptions.CorrectChartRanges

IPrxReportOptions.CorrectChartRanges
-


# IPrxReportOptions.CorrectChartRanges


## Синтаксис


CorrectChartRanges: Boolean;


## Описание


Свойство CorrectChartRanges
 определяет, будет ли корректироваться диапазон диаграммы после изменения
 отметки боковика/шапки области данных.


## Комментарии


Корректировка диапазона диаграммы происходит только в том случае, если
 в качестве [источника
 данных диаграммы](UiReport.chm::/desktop/Diagrams/UiDiagrams_Report_create_source.htm#from_datasheet) целиком используется диапазон области
 данных.


Допустимые значения:


	- True. Диапазон диаграммы
	 после изменения отметки боковика/шапки области данных будет корректироваться;


	- False. Значение по умолчанию.
	 Диапазон диаграммы после изменения отметки боковика/шапки области
	 данных не будет корректироваться.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором REPORT.


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MOBj: IMetabaseObject;

	    Report: IPrxReport;

	    Options: IPrxReportOptions;

	Begin

	    MB := MetabaseClass.Active;

	    MOBj := MB.ItemById("REPORT").Edit;

	    Report := MOBj As IPrxReport;

	    Options := Report.Options;

	    Options.CorrectChartRanges := True;

	    MOBj.Save;

	End Sub UserProc;


После выполнения примера при снятии отметки с боковика/шапки области
 данных и последующем добавлении отметки диапазон диаграммы корректно восстановится.


См. также:


[IPrxReportOptions](IPrxReportOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
