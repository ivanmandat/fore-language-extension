# IMsMetaAttributeValueList.ScenarioKey

IMsMetaAttributeValueList.ScenarioKey
-


# IMsMetaAttributeValueList.ScenarioKey


## Синтаксис


ScenarioKey: Integer;


## Описание


Свойство ScenarioKey определяет
 ключ сценария, по которому должна быть рассчитана валидация.


## Комментарии


По умолчанию ScenarioKey принимает
 значение «-1», т.е. валидация рассчитывается по фактическим данным
 (сценарий «Факт»).


Возможность расчета на сценарных данных доступна для валидаций, оперирующих
 данными, а не метаданными.


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


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox
 и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для LanerBox.
 В «UiErAnalyzer1» должна быть загружена рабочая область базы данных временных
 рядов «OBJ_FC». В базе данных временных рядов предполагается наличие фильтра
 валидации типа «Сравнение с числом» с идентификатором «OBJ_VALID_FILTER».


Добавьте ссылки на системные сборки «Metabase», «Ms», «Cubes», «Rds».
 Приведенный пример является обработчиком события «OnClick» для компонента
 «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);;

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

    MetaAttrValList: IMsMetaAttributeValueList;

    Rub: IRubricator;

    Analyzer: IEaxAnalyzer;

Begin

    Mb := MetabaseClass.Active;

    RubrKey := Mb.GetObjectKeyById("OBJ_FC");

    ValidObj := Mb.ItemByIdNamespace("OBJ_VALID_FILTER", RubrKey).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    ValidFilter.Kind := ValidationDetailsKind.Level;

    Level := ValidFilter.Details As IValidationLevel;

    ComparisonValue := Level.ComparisonValue;

    ComparisonValue.ComparisonOperator := ValidationComparisonOperator.More;

    ComparisonValue.Percentage := False;

    ComparisonValue.Value1 := -0.3;

    Rub := Mb.ItemById("OBJ_FC").Bind As IRubricator;

    MetaAttrValList := Level.TargetData;

    MetaAttrValList.ScenarioKey := 1;

    ValidObj.Save;

    ValidExecSett := New ValidationExecuteSettings.Create;

    Analyzer := UiErAnalyzer1.ErAnalyzer;

    ValidExecSett.Laner := Analyzer.Laner;

    ValidExecRun := ValidFilter.Execute(ValidExecSett);

    DiagRep := New DiagnosticReport.Create;

    DiagRep.Run := ValidExecRun;

    DiagRep.EaxAnalyzer := Analyzer;

End Sub Button1OnClick;


После выполнения примера будет настроен фильтр валидации «Сравнение
 с числом»: фильтруются сценарные данные ряда больше «-0,3» (ключ сценария
 «1»). Данный фильтр будет выполнен для загруженной рабочей области.


См. также:


[IMsMetaAttributeValueList](IMsMetaAttributeValueList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
