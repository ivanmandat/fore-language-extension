# IEaxAnalyzeCore.DiagnosticReport

IEaxAnalyzeCore.DiagnosticReport
-


# IEaxAnalyzeCore.DiagnosticReport


## Синтаксис


DiagnosticReport: [IDiagnosticReport](../IDiagnosticReport/IDiagnosticReport.htm);


## Описание


Свойство DiagnosticReport определяет
 диагностический отчёт, содержащий результаты выполнения правила валидации.


## Комментарии


Свойство актуально, если экспресс-отчёт основан на рабочей книге БД
 временных рядов.


## Пример


Для выполнения примера в репозитории предполагается наличие БД временных
 рядов с идентификатором TSDB, содержащим правило валидации с идентификатором
 VALID.


Предполагается наличие формы, содержащей компоненты:


	- UiErAnalyzer с идентификатором «UiErAnalyzer1». В «UiErAnalyzer1»
	 должна быть загружена рабочая книга БД временных рядов TSDB;


	- LanerBox с идентификатором «LanerBox1». Источником данных для
	 «LanerBox1» является «UiErAnalyzer1».


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RubyObj: IMetabaseObjectDescriptor;

	    ValiObj: IMetabaseObject;

	    ValidFilter: IValidationFilter;

	    ValidExecSett: IValidationExecuteSettings;

	    Analyzer: IEaxAnalyzer;

	    ValidExecRun: IValidationExecRun;

	    DiagRep: IDiagnosticReport;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получаем правило валидации

	    RubyObj := Mb.ItemById("TSDB");

	    ValiObj := Mb.ItemByIdNamespace("VALID", RubyObj.Key).Bind;

	    ValidFilter := ValiObj As IValidationFilter;

	    // Выполняем правило на листе рабочей книги

	    ValidExecSett := New ValidationExecuteSettings.Create;

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    ValidExecSett.Laner := Analyzer.Laner;

	    ValidExecRun := ValidFilter.Execute(ValidExecSett);

	    // Отображаем результаты в виде диагностического отчёта

	    DiagRep := New DiagnosticReport.Create;

	    DiagRep.Run := ValidExecRun;

	    Analyzer.DiagnosticReport := DiagRep;

	End Sub UserProc;


Результат выполнения примера: над листом рабочей книги, загруженной
 в «UiErAnalyzer1», выполнено правило валидации VALID; результаты отображены
 на запущенной форме.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
