# IValidationLegendBox.Analyzer

IValidationLegendBox.Analyzer
-


# IValidationLegendBox.Analyzer


## Синтаксис


Analyzer: [IEaxAnalyzerSource](../IEaxAnalyzerSource/IEaxAnalyzerSource.htm);


## Описание


Свойство Analyzer определяет
 источник данных для компонента.


## Комментарии


В качестве значения свойства необходимо указать компонент [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm),
 приведенный к интерфейсу [IEaxAnalyzerSource](../IEaxAnalyzerSource/IEaxAnalyzerSource.htm).


Компонент [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm)
 должен быть связан с рабочей книгой, для которой применены нужные правила
 валидации и составлен диагностический отчет.


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней компонентов WorkbookDocumentViewerBox и ValidationLegendBox, и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», который является для них
 источником данных. «UiErAnalyzer1» подключен к рабочей книге репозитория.
 В репозитории предполагается наличие правила валидации с идентификатором
 VAL_RULES1, которое хранится в базе данных временных рядов с идентификатором
 TS_DB. Указанная процедура является обработчиком события OnCreate формы.


	Sub SAMPLEFormOnCreate(Sender: Object; Args: IEventArgs);

	Var

	    MB: IMetabase;

	    ValidFilter: IValidationFilter;

	    ValidExecSett: IValidationExecuteSettings;

	    ValidExecRun: IValidationExecRun;

	    DiagRep: IDiagnosticReport;

	    Analyzer: IEaxAnalyzer;

	Begin

	    MB := MetabaseClass.Active;

	    //Правило

	    ValidFilter := MB.ItemByIdNamespace("VAL_RULES1", MB.GetObjectKeyById("TS_DB")).Bind As IValidationFilter;

	    //Параметры, необходимые для применения правила валидации

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    ValidExecSett := New ValidationExecuteSettings.Create;

	    ValidExecSett.Laner := Analyzer.Laner;

	    //Применение правила валидации

	    ValidExecRun := ValidFilter.Execute(ValidExecSett);

	    //Составление диагностического отчета

	    DiagRep := New DiagnosticReport.Create;

	    DiagRep.Run := ValidExecRun;

	    Analyzer.DiagnosticReport := DiagRep;

	    //Указание источника для компонента

	    ValidationLegendBox1.Analyzer := UiErAnalyzer1 As IEaxAnalyzerSource;

	End Sub SAMPLEFormOnCreate;


При запуске формы будут получены параметры указанного правила валидации.
 Данное правило будет применено к рабочей книге, которая подключена к компоненту
 «UiErAnalyzer1». После применения будет составлен диагностический отчет.
 Информация о используемом правиле валидации будет доступна в компоненте
 «ValidationLegendBox1».


См. также:


[IValidationLegendBox](IValidationLegendBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
