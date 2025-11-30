# IValidationExecuteSettings.IsLoadDatesSet

IValidationExecuteSettings.IsLoadDatesSet
-


# IValidationExecuteSettings.IsLoadDatesSet


## Синтаксис


IsLoadDatesSet: Boolean;


## Описание


Свойство IsLoadDatesSet
 возвращает признак того, задан ли период загрузки данных.


## Комментарии


Допустимые значения:


	- True. Период загрузки
	 данных задан с помощью свойств [IValidationExecuteSettings.LoadStart](IValidationExecuteSettings.LoadStart.htm)
	 и [IValidationExecuteSettings.LoadEnd](IValidationExecuteSettings.LoadEnd.htm);


	- False. Период загрузки
	 данных не задан.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:
 EaxDocumentViewerBox с идентификатором
 «EaxDocumentViewerBox1» и UiErAnalayzer
 с идентификатором «UiErAnalyzer1». «UiErAnalyzer1» является источником
 данных для «EaxDocumentViewerBox1» и содержит загруженный экспресс-отчет.
 Отчет использует данные из базы данных временных рядов с идентификатором
 «TSDB», содержащей правило валидации с идентификатором «VALID_GROWTH_RATE».


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    TSDBKey: Integer;

    ValidFilter: IValidationFilter;

    ExecSett: IValidationExecuteSettings;

    Analyzer: IEaxAnalyzer;

    ExecRun: IValidationExecRun;

    DiagRep: IDiagnosticReport;

Begin

    Mb := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    TSDBKey := Mb.GetObjectKeyById("TSDB");

        // Получаем правило валидации

    ValidFilter := Mb.ItemByIdNamespace("VALID_GROWTH_RATE", TSDBKey).Bind As IValidationFilter;

    // Создаем параметры выполнения правила валидации

    ExecSett := ValidFilter.CreateExecuteSettings;

    // Задаем периоды загрузки данных

    If Not ExecSett.IsLoadDatesSet Then

        ExecSett.LoadStart := DateTime.Parse("01.01.2000");

        ExecSett.LoadEnd := DateTime.Parse("01.01.2010");

    End If;

    // Выполняем расчет правила

    Analyzer := EaxDocumentViewerBox1.Analyzer.GetAnalyzer;

    ExecSett.Laner := Analyzer.Laner;

    ExecRun := ValidFilter.Execute(ExecSett);

    DiagRep := New DiagnosticReport.Create;

    DiagRep.Run := ExecRun;

    DiagRep.EaxAnalyzer := Analyzer;

    Analyzer.RefreshAll;

End Sub UserProc;


В результате выполнения примера будет рассчитано правило валидации с
 измененными параметрами загрузки данных.


См. также:


[IValidationExecuteSettings](IValidationExecuteSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
