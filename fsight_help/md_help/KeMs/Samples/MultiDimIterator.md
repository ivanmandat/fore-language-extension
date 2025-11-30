# Создание многомерного итератора по данным

Создание многомерного итератора по данным
-


# Создание многомерного итератора по данным


## Описание


Рассмотрим создание многомерного итератора по данным. Характерной особенностью
 данного итератора является то, что он может настраиваться сразу на несколько
 измерений и итерации будут выполняться только по точкам, содержащим данные.
 Использование итератора по данным позволяет сократить время расчета метамодели.


## Требования


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащим метамодель с идентификатором
 METAMODEL_MULTIDIMITERATOR. Источником данных для данного контейнера является
 база данных временных рядов, содержащая атрибуты временных рядов с идентификаторами
 CITY и INDICATOR. Данные атрибуты должны быть типа «Ссылка
 на справочник».


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Metabase,
 Ms, Rds.


## Пример


	Sub UserProc;

	Var

	    mb: IMetabase;

	    MsKey: Integer;

	    pMetaModel: IMsMetaModel;

	    Ms: IMsModelSpace;

	    DS: IRubricator;

	    Attributes: IMetaAttributes;

	    CDict, IDict: IMetabaseObjectDescriptor;

	    Chain: IMsCalculationChainEntries;

	    params: IMsModelParams;

	    CParam, IParam: IMsModelParam;

	    iterator: IMsCalculationChainMultiDimIterator;

	    IteratorOpt: IMsDimIterateByDataOptions;

	    IterStubs: IMsDimIterateByDataStubs;

	    dimInstC, dimInstI: IDimInstance;

	    IterDims: IMsDimIteratorDimensions;

	    CIterDim, IIterDim: IMsDimIteratorDimension;

	    Filter: IMsDimIteratorFilter;

	    dimSelC, dimSelI: IDimSelection;

	    IterStub: IMsDimIterateByDataStub;

	    FilterDim: IMsDimIteratorFilteredDimension;

	    model: IMsModel;

	    Trans: IMsFormulaTransform;

	    TransVar: IMsFormulaTransformVariable;

	    slice: IMsFormulaTransformSlice;

	    Selector: IMsFormulaTransformSelector;

	    Formula: IMsFormula;

	    Determ: IMsDeterministicTransform;

	    TermInfo: IMsFormulaTermInfo;

	    Expr: IExpression;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем ключ контейнера моделирования

	    MsKey := mb.GetObjectKeyById("MS");

	    // Получаем модель

	    pMetaModel := mb.ItemByIdNamespace("METAMODEL_MULTIDIMITERATOR", MsKey).edit As IMsMetaModel;

	    // Получаем контейнер моделирования

	    Ms := mb.Item(MsKey).Bind As IMsModelSpace;

	    // Получаем базу данных временных рядов,

	    // являющуюся источником данных для контейнера моделирования

	    DS := Ms.Rubricator.Bind As IRubricator;

	    // Получаем атрибуты показателей

	    Attributes := DS.Facts.Attributes;

	    // Получаем справочники, на которых основаны атрибуты CITY и INDICATOR

	    CDict := Attributes.FindById("CITY").ValuesObject;

	    IDict := Attributes.FindById("INDICATOR").ValuesObject;

	    // Получаем и очищаем цепочку расчета метамодели

	    Chain := pMetaModel.CalculationChain;

	    Chain.Clear;

	    // Получаем и очищаем параметры метамодели

	    params := pMetaModel.Params;

	    params.Clear;

	    // Добавляем параметр, основанный на справочнике атрибута CITY

	    CParam := params.Add;

	    CParam.DataType := DbDataType.integer;

	    CParam.DefaultValue := 1;

	    CParam.Hidden := True;

	    CParam.Id := "CITY";

	    CParam.Name := "Город";

	    CParam.LinkedObject := CDict;

	    // Добавляем параметр, основанный на справочнике атрибута INDICATOR

	    IParam := params.Add;

	    IParam.DataType := DbDataType.Integer;

	    IParam.DefaultValue := 1;

	    IParam.Hidden := True;

	    IParam.Id := "INDICATOR";

	    IParam.Name := "Показатель";

	    IParam.LinkedObject := IDict;

	    // Добавляем многомерный итератор в цепочку расчета метамодели

	    iterator := Chain.AddMultiDimIterator("Многомерный итератор");

	    // Получаем параметры итератора по данным

	    IteratorOpt := Iterator.IterateByData;

	    // Указываем, что он активный

	    IteratorOpt.Active := True;

	    // Задаем источник данных для итератора

	    IterStubs := IteratorOpt.Stubs;

	    IterStubs.Add(DS As IVariableStub);

	    // Получаем итерируемые измерения

	    IterDims := Iterator.Dimensions;

	    // Добавляем измерение, основанное на справочнике атрибута CITY

	    dimInstC := CDict.Open(Null) As IDimInstance;

	    CIterDim := IterDims.Add(dimInstC);

	    // Указываем, что измерение параметрическое

	    CIterDim.Parameter := CParam;

	    // Задаем источник данных для итерируемого измерения

	    CIterDim.Stubs.Add(DS As IVariableStub);

	    // Задаем фильтр элементов

	    Filter := CIterDim.Filter;

	    dimSelC := dimInstC.CreateSelection;

	    dimSelC.SelectAll;

	    Filter.Selection := dimSelC;

	    // Добавляем измерение, основанное на справочнике атрибута INDICATOR

	    dimInstI := IDict.Open(Null) As IDimInstance;

	    IIterDim := IterDims.Add(dimInstI);

	    // Указываем, что измерение параметрическое

	    IIterDim.Parameter := IParam;

	    // Задаем источник данных для итерируемого измерения

	    IIterDim.Stubs.Add(DS As IVariableStub);

	    // Задаем фильтр элементов

	    Filter := IIterDim.Filter;

	    dimSelI := dimInstI.CreateSelection;

	    dimSelI.SelectAll;

	    Filter.Selection := dimSelI;

	    // Получаем источник данных, по которому которому будут выполняться итерации

	    IterStub := IterStubs.Item(0);

	    // Добавляем фильтрацию по измерению, на котором основан атрибут CITY

	    FilterDim := IterStub.Dimension(dimInstC.InstanceModel);

	    Debug.WriteLine("  Измерение фильтрации: " + FilterDim.Dimension.Name);

	    FilterDim.Filter.Selection := dimSelC;

	    // Добавляем фильтрацию по измерению, на котором основан атрибут INDICATOR

	    FilterDim := IterStub.Dimension(dimInstI.InstanceModel);

	    FilterDim.Filter.Selection := dimSelI;

	    Debug.WriteLine("  Измерение фильтрации: " + FilterDim.Dimension.Name);

	    // Создаем внутри многомерного итератора модель

	    model := Iterator.Contents.AddExclusiveModel.Model;

	    // Настраиваем модель

	    Trans := model.Transform;

	    // Добавляем моделируемую переменную, атрибуты которой заданы параметрами

	    TransVar := Trans.Outputs.Add(DS As IVariableStub);

	    Slice := TransVar.Slices.Add(Null);

	    Slice.ParametrizedDimensions.Item(0).Parameter := IParam;

	    Slice.ParametrizedDimensions.Item(1).Parameter := CParam;

	    Selector := Trans.CreateSelector;

	    Selector.Slice := Slice;

	    // Настраиваем метод расчета модели: детерминированное уравнение

	    Formula := Trans.Transform(Selector);

	    Formula.Kind := MsFormulaKind.Deterministic;

	    Determ := Formula.Method As IMsDeterministicTransform;

	    // Добавляем входную переменную, атрибуты которой заданы параметрами

	    TransVar := Trans.Inputs.Add(DS As IVariableStub);

	    Slice := TransVar.Slices.Add(Null);

	    Slice.ParametrizedDimensions.Item(0).Parameter := IParam;

	    Slice.ParametrizedDimensions.Item(1).Parameter := CParam;

	    TermInfo := Trans.CreateTermInfo;

	    TermInfo.Slice := Slice;

	    // Задаем выражение для расчета модели

	    Expr := Determ.Expression;

	    Expr.AsString := TermInfo.TermInnerText + "+1";

	    If Expr.ErrorInfo <> Null Then

	        debug.WriteLine(Expr.ErrorInfo.ErrorMessage);

	        Return;

	    End If;

	    // Сохраняем изменения в модели

	    model.MetabaseObject.Save;

	    // Сохраняем изменения в метамодели

	    (pMetaModel As IMetabaseObject).Save;

	End Sub UserProc;


См. также:


[Примеры](KeMs_Sample.htm) | [IMsCalculationChainMultiDimIterator](../Interface/IMsCalculationChainMultiDimIterator/IMsCalculationChainMultiDimIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
