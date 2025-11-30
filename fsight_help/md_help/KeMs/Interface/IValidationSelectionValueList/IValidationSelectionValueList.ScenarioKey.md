# IValidationSelectionValueList.ScenarioKey

IValidationSelectionValueList.ScenarioKey
-


# IValidationSelectionValueList.ScenarioKey


## Синтаксис


ScenarioKey: Integer;


## Описание


Свойство ScenarioKey определяет
 ключ сценария, по которому должна быть рассчитана валидация.


## Комментарии


По умолчанию ScenarioKey принимает
 значение «-1», то есть валидация рассчитывается по фактическим данным
 (сценарий «Факт»).


Возможность расчета на сценарных данных доступна для валидаций, оперирующих
 с данными, а не метаданными.


[![](../../opened.gif)![](../../closed.gif)Поддерживаемые
 типы валидаций](javascript:TextPopup(this))


		- [IValidationCorrelation](../IValidationCorrelation/IValidationCorrelation.htm).


		- [IValidationCrossDatabase](../IValidationCrossDatabase/IValidationCrossDatabase.htm).


		- [IValidationGrowthRate](../IValidationGrowthRate/IValidationGrowthRate.htm).


		- [IValidationLevel](../IValidationLevel/IValidationLevel.htm).


		- [IValidationMissingData](../IValidationMissingData/IValidationMissingData.htm).


		- [IValidationRatio](../IValidationRatio/IValidationRatio.htm).


		- [IValidationRevisionComparison](../IValidationRevisionComparison/IValidationRevisionComparison.htm).


		- [IValidationStatisticalOutliers](../IValidationStatisticalOutliers/IValidationStatisticalOutliers.htm).


		- [IValidationTrend](../IValidationTrend/IValidationTrend.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:
 WorkbookDocumentViewerBox с идентификатором
 «WorkbookDocumentViewerBox1» и UiErAnalayzer
 с идентификатором «UiErAnalyzer1». «UiErAnalyzer1» является источником
 данных для «WorkbookDocumentViewerBox1» и содержит рабочую книгу из базы
 данных временных рядов с идентификатором «TSDB_VALIDATION_PARAMETERS».
 В указанной базе данных временных рядов присутствует правило валидации
 с идентификатором «VALIDATION_NUMBER» типа «Сравнение
 с числом». Контейнер моделирования, расположенный внутри базы данных
 временных рядов, должен содержать несколько сценариев.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrKey: Integer;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    Level: IValidationLevel;

    ComparisonValue: IValidationComparisonValue;

    ValidExecSett: IValidationExecuteSettings;

    ValidExecRun: IValidationExecRun;

    DiagRep: IDiagnosticReport;

    SelValList: IValidationSelectionValueList;

    Rub: IRubricator;

    ms: IMsModelSpace;

    ScenElement: IMsScenarioTreeElement;

    Analyzer: IEaxAnalyzer;

Begin

    Mb := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    RubrKey := Mb.GetObjectKeyById("TSDB_VALIDATION_PARAMETERS");

    Rub := Mb.ItemById("TSDB_VALIDATION_PARAMETERS").Bind As IRubricator;

    // Получаем правило валидации

    ValidObj := Mb.ItemByIdNamespace("VALIDATION_NUMBER", RubrKey).Edit;

    // Настраиваем условия правила

    ValidFilter := ValidObj As IValidationFilter;

    Level := ValidFilter.Details As IValidationLevel;

    ComparisonValue := Level.ComparisonValue;

    ComparisonValue.ComparisonOperator := ValidationComparisonOperator.More;

    ComparisonValue.Percentage := False;

    ComparisonValue.Value1 := -0.3;

    // Задаем сценарий, по которому будет рассчитываться валидация

    SelValList := Level.SelectionTargetData;

    ms := Rub.ModelSpace.Bind As IMsModelSpace;

    ScenElement := ms.ScenarioTree.Item(0) As IMsScenarioTreeElement;

    SelValList.ScenarioKey := ScenElement.Scenario.InternalKey;

    // Сохраняем изменения

    ValidObj.Save;

    // Выполняем валидацию

    ValidExecSett := New ValidationExecuteSettings.Create;

    Analyzer := UiErAnalyzer1.ErAnalyzer;

    ValidExecSett.Laner := Analyzer.Laner;

    ValidExecRun := ValidFilter.Execute(ValidExecSett);

    DiagRep := New DiagnosticReport.Create;

    DiagRep.Run := ValidExecRun;

    DiagRep.EaxAnalyzer := Analyzer;

End Sub UserProc;


В результате выполнения примера будет настроено правило валидации «Сравнение с числом»: выявляются
 значения рядов больше «-0,3» по указанному сценарию.


См. также:


[IValidationSelectionValueList](IValidationSelectionValueList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
