# IDiagnosticReport.Run

IDiagnosticReport.Run
-


# IDiagnosticReport.Run


## Синтаксис


Run: [IValidationExecRun](KeCubes.chm::/Interface/IValidationExecRun/IValidationExecRun.htm);


## Описание


Свойство Run определяет данные
 выполнения валидации, отображаемые в отчете.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента Memo с наименованием
 «Memo1», компонента TabSheetBox и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для TabSheetBox. В «UiErAnalyzer1»
 должна быть загружена рабочая область базы данных временных рядов с идентификатором
 OBJ_FC. В данной базе должен присутствовать фильтр валидации с идентификатором
 VALIDATION_F.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    RurkKey: Integer;

	    ValidFilterObj: IMetabaseObject;

	    ValidFilter: IValidationFilter;

	    ValidExecSett: IValidationExecuteSettings;

	    Analyzer: IEaxAnalyzer;

	    Res: IValidationExecRun;

	    DiagnRep: IDiagnosticReport;

	    ValidationRules: IValidationRules;

	    i: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    RurkKey := Mb.GetObjectKeyById("OBJ_FC");

	    ValidFilterObj := Mb.ItemByIdNamespace("VALIDATION_F", RurkKey).Bind;

	    ValidFilter := ValidFilterObj As IValidationFilter;

	    ValidExecSett := New ValidationExecuteSettings.Create;

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    ValidExecSett.Laner := Analyzer.Laner;

	    Res := ValidFilter.Execute(ValidExecSett);

	    DiagnRep := New DiagnosticReport.Create;

	    DiagnRep.Run := Res;

	    DiagnRep.EaxAnalyzer := Analyzer;

	    DiagnRep.ShowExplainedExceptions := False;

	    ValidationRules := DiagnRep.Exceptions(1, 1);

	    If ValidationRules.Count > 0 Then

	        Memo1.Lines.Add("Объяснение: " + DiagnRep.Explanation(1, 1));

	        For i := 0 To ValidationRules.Count - 1 Do

	            Memo1.Lines.Add("Правило №" + i.ToString);

	            Memo1.Lines.Add("  Наименование = " + (ValidationRules.Item(i) As IMetabaseObject).Name);

	        End For;

	        Else

	            Memo1.Lines.Add("Для данной ячейки ни одно правило не выполняется");

	    End If;

	End Sub Button1OnClick;


После выполнения примера в компоненте TabSheetBox будет отображены данные
 диагностического отчета. В компонент Memo будут выведено объяснение и
 данные о правилах, выполняющихся для указанной ячейки рабочей области.


См. также:


[IDiagnosticReport](IDiagnosticReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
