# Создание переменной моделирования: Наполнение данными с помощью формулы

Создание переменной моделирования: Наполнение данными с помощью формулы
-


# Создание переменной моделирования: Наполнение данными с помощью формулы


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором KONT_MODEL. В контейнере содержится переменная
 моделирования с идентификатором VAR_1.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase,
 Ms, Transform.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    MsVar: IMsVariable;

    Sampling: IMsVariableSampling;

    //Куб с данными переменной моделирования

    Cube: IAutoCube;

    //Для настройки агрегации по календарю

    AggrManager: MatrixAggregatorManager;

    IAggrManager: IMatrixAggregatorManager;

    AggrModel: IMatrixAggregatorModel;

    BasicAggregator: IBasicMatrixAggregator;

    LevelBasicAggregator: IBasicMatrixLevelAggregator;

    Dim: IAutoCubeDimension;

    DimModel: IDimensionModel;

    DimLvl: IDimLevels;

    //Для создания формулы

    Trans: IMsFormulaTransform;

    VarTrans: IMsFormulaTransformVariable;

    InputVar: IVariableStub;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    Determ: IMsDeterministicTransform;

    Term: IMsFormulaTerm;

    TermInfo: IMsFormulaTermInfo;

    s: string;

    //Для загрузки данных

    LoadSetting: IMsVariableLoadSettings;

    DimFix: IMsProblemDimensionFix;

    DimSS: IDimSelectionSet;

    DimS: IDimSelection;

    Period: IMsModelPeriod;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MSVARIABLE;

    CrInfo.Id := "VAR_2";

    CrInfo.Name := "Переменная №2";

    CrInfo.Parent := MB.ItemById("Kont_Model");

    MObj := MB.CreateObject(CrInfo).Edit;

    MsVar := MObj As IMsVariable;

    //Способ наполнения данными

    MsVar.DataFillType := MsVariableDataFillType.Formula;

    Sampling := MsVar.Sampling;

    //Шаг расчета для переменной: Годы и полугодия

    Sampling.Level(DimCalendarLevel.Year) := True;

    Sampling.Level(DimCalendarLevel.HalfYear) := True;

    Cube := MsVar.Cube;

    //Параметры агрегации по уровням календаря

    AggrManager := New MatrixAggregatorManager.Create;

    IAggrManager := AggrManager As IMatrixAggregatorManager;

    AggrModel := IAggrManager.CreateAggregator("BasicMatrixAggregator");

    Dim := Cube.Dimensions.Calendar;

    DimModel := Dim.Dimension;

    DimLvl := DimModel.Levels;

    //Агрегация для календарного измерения

    AggrModel.Dimension := DimModel;

    BasicAggregator := AggrModel As IBasicMatrixAggregator;

    //Уровень для которого настраивается агрегация - Годы

    LevelBasicAggregator := BasicAggregator.LevelAggregation(DimLvl.Item(0));

    //Уровень, значения которого используются при агрегации - Полугодия

    LevelBasicAggregator.Include(DimLvl.Item(1)) := True;

    //Метод агрегации - Сумма

    LevelBasicAggregator.Operation := BasicAggregatorOperation.Sum;

    Dim.Aggregator(Cube.Destinations.Item(0)) := AggrModel;

    //Настройка уравнения, по которому будут расчитываться данные переменной

    Trans := MsVar.Transform;

    InputVar := MB.ItemByIdNamespace("VAR_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

    Trans.Inputs.Add(InputVar);

    VarTrans := Trans.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Trans.CreateSelector;

    Selector.Slice := Slice;

    Formula := Trans.Transform(Selector);

    Formula.Kind := MsFormulaKind.Deterministic;

    //Шаг расчета

    Formula.Level := DimCalendarLevel.HalfYear;

    //Формула расчета

    Determ := Formula.Method As IMsDeterministicTransform;

    Slice := Trans.Inputs.Item(0).Slices.Add(Null);

    Determ.Operands.Add(Slice);

    Term := Determ.Operands.Item(0);

    TermInfo := Term.TermInfo;

    //Лаг

    TermInfo.Lag := "-1";

    //Преобразование

    TermInfo.InversionInfo.Inversion := TsInversion.DLog;

    Term.TermInfo := TermInfo;

    s := Term.TermToInnerText + "*10";

    Determ.Expression.AsString := s;

    //Загрузка данных по установленной формуле

    LoadSetting := MsVar.CreateLoadSettings;

    Period := LoadSetting.Period;

    Period.IdentificationStartDate := DateTime.ComposeDay(2000, 1, 1);

    Period.IdentificationEndDate := DateTime.ComposeDay(2010, 1, 1);

    LoadSetting.ScenarioIncluded(-1) := True;

    DimFix := LoadSetting.DimensionFix;

    DimSS := DimFix.Selection;

    For Each DimS In DimSS Do

        DimS.SelectAll;

    End For;

    MsVar.Execute(LoadSetting);

    MObj.Save;

End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана переменная
 моделирования. Способ наполнения данными - С помощью формулы. В динамике
 переменной будут присутствовать два уровня - Годы и Полугодия. Для уровня
 Годы календаря будет настроена агрегация: данные уровня Полугодия будут
 суммироваться. Для составления формулы будет добавлена одна переменная.
 Будут настроены лаг и преобразование, после чего будет составлена формула.
 За указанный период будут рассчитаны и загружены данные в переменную по
 измерению «Факт».


См. также:


[Примеры](KeMs_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
