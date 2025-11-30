# IMsDimIteratorLinks.AddByDimModel

IMsDimIteratorLinks.AddByDimModel
-


# IMsDimIteratorLinks.AddByDimModel


## Синтаксис


AddByDimModel(DimModel: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm)):
 [IMsDimIteratorLink](../IMsDimIteratorLink/IMsDimIteratorLink.htm);


## Параметры


DimModel. Структура добавляемого
 измерения.


## Описание


Метод AddByDimModel добавляет
 в коллекцию структуру связанного измерения.


## Комментарии


Работа со структурой измерения, а не его экземпляром, который требуется
 в методе [IMsDimIteratorLinks.Add](IMsDimIteratorLinks.Add.htm),
 позволяет уменьшить время добавления измерения коллекции так как не производится
 открытие измерения. Открытие измерений с большим количеством элементов
 может занимать длительное время.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS_P, содержащего метамодель с идентификатором
 METAMODEL_MULTIDIMITERATOR. Источником данных для данного контейнера является
 база данных временных рядов, содержащая атрибуты временных рядов с идентификаторами
 CITY и INDICATOR. Данные атрибуты должны быть типа «Ссылка на справочник».
 Справочник, на который ссылается атрибут CITY должен содержать параметр
 логического типа с идентификатором ISCAPITAL.


Также в репозитории должна быть расположена база данных временных рядов
 с идентификатором TSDB, не являющаяся источником данных для контейнера
 моделирования MS_P. Данная база данных временных рядов должна содержать
 атрибут временных рядов с идентификатором INDICATOR. Атрибут должен быть
 типа «Ссылка на справочник».


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Metabase,
 Ms, Rds, Transform.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    MsKey: Integer;

	    pMetaModel: IMsMetaModel;

	    Ms: IMsModelSpace;

	    DS, DSLinked: IRubricator;

	    Attributes: IMetaAttributes;

	    CDict, IDict: IMetabaseObjectDescriptor;

	    Chain: IMsCalculationChainEntries;

	    params: IMsModelParams;

	    CParam, IParam: IMsModelParam;

	    iterator: IMsCalculationChainMultiDimIterator;

	    IteratorOpt: IMsDimIterateByDataOptions;

	    IterStubs: IMsDimIterateByDataStubs;

	    dimInstC, dimInstI: IDimInstance;

	    dimLinked: IDimensionModel

	    IterDims: IMsDimIteratorDimensions;

	    CIterDim, IIterDim: IMsDimIteratorDimension;

	    Filter: IMsDimIteratorFilter;

	    dimSelC, dimSelI: IDimSelection;

	    IterStub: IMsDimIterateByDataStub;

	    FilterDim: IMsDimIteratorFilteredDimension;

	    IDimLink: IMsDimIteratorLink;

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

	    MsKey := mb.GetObjectKeyById("MS_P");

	    // Получаем модель

	    pMetaModel := mb.ItemByIdNamespace("METAMODEL_MULTIDIMITERATOR", MsKey).Edit As IMsMetaModel;

	    // Получаем контейнер моделирования

	    Ms := mb.Item(MsKey).Bind As IMsModelSpace;

	    // Получаем базу данных временных рядов,

	    // являющуюся источником данных для контейнера моделирования

	    DS := Ms.DefaultObject.Bind As IRubricator;

	    // Получаем атрибуты показателей

	    Attributes := DS.Facts.Attributes;

	    // Получаем справочники, на которых основаны атрибуты CITY и INDICATOR

	    CDict := Attributes.FindById("CITY").ValuesObject;

	    IDict := Attributes.FindById("INDICATOR").ValuesObject;

	    // Получаем и очищаем цепочку расчёта метамодели

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

	    CParam.ParamType := TsParamType.Selection;

	    dimInstC := CDict.OpenWithParam("TRUE") As IDimInstance;

	    dimSelC := dimInstC.CreateSelection;

	    dimSelC.SelectElement(1, False);

	    CParam.DefaultValue := dimSelC;

	    // Добавляем параметр, основанный на справочнике атрибута INDICATOR

	    IParam := params.Add;

	    IParam.DataType := DbDataType.Integer;

	    IParam.DefaultValue := 1;

	    IParam.Hidden := True;

	    IParam.Id := "INDICATOR";

	    IParam.Name := "Показатель";

	    IParam.LinkedObject := IDict;

	    IParam.ParamType := TsParamType.Selection;

	    dimInstI := IDict.Open(Null) As IDimInstance;

	    dimSelI := dimInstI.CreateSelection;

	    dimSelI.SelectElement(1, False);

	    IParam.DefaultValue := dimSelI;

	    // Добавляем многомерный итератор в цепочку расчёта метамодели

	    iterator := Chain.AddMultiDimIterator("Многомерный итератор");

	    // Получаем параметры итератора по данным

	    IteratorOpt := Iterator.IterateByData;

	    // Указываем, что он активный

	    IteratorOpt.Active := True;

	    // Задаём источник данных для итератора

	    IterStubs := IteratorOpt.Stubs;

	    IterStubs.Add(DS As IVariableStub);

	    // Получаем итерируемые измерения

	    IterDims := Iterator.Dimensions;

	    // Добавляем измерение, основанное на справочнике атрибута CITY

	    CIterDim := IterDims.Add(dimInstC);

	    // Указываем, что измерение параметрическое

	    CIterDim.Parameter := CParam;

	    // Задаём источник данных для итерируемого измерения

	    CIterDim.Stubs.Add(DS As IVariableStub);

	    // Задаём фильтр элементов

	    Filter := CIterDim.Filter;

	    dimSelC.SelectAll;

	    Filter.Selection := dimSelC;

	    // Добавляем измерение, основанное на справочнике атрибута INDICATOR

	    IIterDim := IterDims.Add(dimInstI);

	    // Указываем, что измерение параметрическое

	    IIterDim.Parameter := IParam;

	    // Задаём источник данных для итерируемого измерения

	    IIterDim.Stubs.Add(DS As IVariableStub);

	    // Задаём фильтр элементов

	    Filter := IIterDim.Filter;

	    dimSelI.SelectAll;

	    Filter.Selection := dimSelI;

	    // Получаем базу данных временных рядов TSDB

	    DSLinked := mb.ItemById("TSDB").Bind As IRubricator;

	    // Получаем справочник, на котором основан атрибут INDICATOR

	    Attributes := DSLinked.Facts.Attributes;

	    dimLinked := Attributes.FindById("INDICATOR").ValuesObject.Bind As IDimensionModel;

	    // Добавляем справочник в качестве связанного измерения

	    IDimLink := IIterDim.Links.AddByDimModel(dimLinked);

	    // Указываем атрибут-источник и атрибут-приёмник

	    IDimLink.SourceAttribute := dimSelI.Dimension.Attributes.FindById("NAME").Attribute;

	    IDimLink.DestinationAttribute := dimLinked.Attributes.FindById("NAME");

	    // Указываем источник данных связанного измерения

	    IDimLink.Dimension.Stubs.Add(DSLinked As IVariableStub);

	    // Получаем источник данных, по которому будут выполняться итерации

	    // и выводим его наименование в окно консоли

	    IterStub := IterStubs.Item(0);

	    Debug.WriteLine("Источник данных, по которому выполняется итерация: " + IterStub.Stub.Name);

	    // Добавляем фильтрацию по измерению, на котором основан атрибут CITY

	    FilterDim := IterStub.Dimension(dimInstC.InstanceModel);

	    Debug.WriteLine("  Измерение фильтрации: " + FilterDim.Dimension.Name);

	    FilterDim.Filter.Selection := dimSelC;

	    // Указываем параметр, с которым будет открыто измерение

	    FilterDim.DimOpenParam.Values := CDict.Bind.Params.CreateEmptyValues;

	    FilterDim.DimOpenParam.Values.FindById("ISCAPITAL").Value := "TRUE";

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

	    Slice.ParametrizedDimensions.Item(0).ParamAttributes.Parameter := IParam;

	    Slice.ParametrizedDimensions.Item(1).ParamAttributes.Parameter := CParam;

	    Selector := Trans.CreateSelector;

	    Selector.Slice := Slice;

	    // Настраиваем метод расчёта модели: детерминированное уравнение

	    Formula := Trans.Transform(Selector);

	    Formula.Kind := MsFormulaKind.Deterministic;

	    Determ := Formula.Method As IMsDeterministicTransform;

	    // Добавляем входную переменную, атрибуты которой заданы параметрами

	    TransVar := Trans.Inputs.Add(DS As IVariableStub);

	    Slice := TransVar.Slices.Add(Null);

	    Slice.ParametrizedDimensions.Item(0).ParamAttributes.Parameter := IParam;

	    Slice.ParametrizedDimensions.Item(1).ParamAttributes.Parameter := CParam;

	    TermInfo := Trans.CreateTermInfo;

	    TermInfo.Slice := Slice;

	    // Задаём выражение для расчёта модели

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


В результате выполнения примера в метамодели будет создан многомерный
 итератор по данным. Внутри итератора будет создана модель, рассчитывающаяся
 только по тем точкам измерений, которые содержат данные.


См. также:


[IMsDimIteratorLinks](IMsDimIteratorLinks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
