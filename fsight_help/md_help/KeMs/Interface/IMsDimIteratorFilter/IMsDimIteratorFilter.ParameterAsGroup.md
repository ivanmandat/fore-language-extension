# IMsDimIteratorFilter.ParameterAsGroup

IMsDimIteratorFilter.ParameterAsGroup
-


# IMsDimIteratorFilter.ParameterAsGroup


## Синтаксис


		ParameterAsGroup: [IMsModelParam](../IMsModelParam/IMsModelParam.htm);


## Описание


Свойство ParameterAsGroup определяет
 параметр для передачи группы с итерируемыми элементами.


## Комментарии


Для передачи отметки напрямую, а не в виде параметра, используйте свойство
 [IMsDimIteratorFilter.Selection](IMsDimIteratorFilter.Selection.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS_STAT, содержащего метамодель с идентификатором
 METAMODEL_MULTIDIMITERATOR. Источником данных для данного контейнера является
 база данных временных рядов, содержащая атрибуты временных рядов с идентификаторами
 CITY и INDICATOR. Данные атрибуты должны быть типа «Ссылка на справочник».


Также в репозитории должна быть расположена база данных временных рядов
 с идентификатором TSDB, не являющаяся источником данных для контейнера
 моделирования MS_STAT. Данная база данных временных рядов должна содержать
 атрибут временных рядов с идентификатором INDICATOR. Атрибут должен быть
 типа «Ссылка на справочник».


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Metabase, Ms, Rds, Transform.


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

		    dimInstC, dimInstI, dimLinked: IDimInstance;

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

		    SelectionFact: IDimSelectionSetFactory;

		    SelSet: IDimSelectionSet;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    Determ: IMsDeterministicTransform;

		    TermInfo: IMsFormulaTermInfo;

		    Expr: IExpression;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS_STAT");

		    // Получаем модель

		    pMetaModel := mb.ItemByIdNamespace("METAMODEL_MULTIDIMITERATOR", MsKey).edit As IMsMetaModel;

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

		    // Получаем и очищаем цепочку расчета метамодели

		    Chain := pMetaModel.CalculationChain;

		    Chain.Clear;

		    // Получаем и очищаем параметры метамодели

		    params := pMetaModel.Params;

		    params.Clear;

		    // Добавляем параметр, основанный на справочнике атрибута CITY

		    CParam := params.Add;

		    CParam.DataType := DbDataType.integer;

		    CParam.Hidden := True;

		    CParam.Id := "CITY";

		    CParam.Name := "Город";

		    CParam.LinkedObject := CDict;

		    CParam.ParamType := tsparamtype.Selection;

		    dimInstC := CDict.Open(Null) As IDimInstance;

		    dimSelC := dimInstC.CreateSelection;

		    dimSelC.SelectElement(1, False);

		    dimSelC.SelectElement(2, False);

		    dimSelC.SelectElement(3, False);

		    CParam.DefaultValue := dimSelC;

		    // Добавляем параметр, основанный на справочнике атрибута INDICATOR

		    IParam := params.Add;

		    IParam.DataType := DbDataType.Integer;

		    IParam.Hidden := True;

		    IParam.Id := "INDICATOR";

		    IParam.Name := "Показатель";

		    IParam.LinkedObject := IDict;

		    IParam.ParamType := tsparamtype.Selection;

		    dimInstI := IDict.Open(Null) As IDimInstance;

		    dimSelI := dimInstI.CreateSelection;

		    dimSelI.SelectElement(1, False);

		    dimSelI.SelectElement(2, False);

		    dimSelI.SelectElement(3, False);

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

		    CIterDim := IterDims.Add(dimInstC);

		    // Задаем источник данных для итерируемого измерения

		    CIterDim.Stubs.Add(DS As IVariableStub);

		    // Задаем параметрический фильтр элементов

		    Filter := CIterDim.Filter;

		    Filter.ParameterAsGroup := CParam;

		    // Добавляем измерение, основанное на справочнике атрибута INDICATOR

		    IIterDim := IterDims.Add(dimInstI);

		    // Задаем источник данных для итерируемого измерения

		    IIterDim.Stubs.Add(DS As IVariableStub);

		    // Задаем параметрический фильтр элементов

		    Filter := IIterDim.Filter;

		    Filter.ParameterAsGroup := IParam;

		    // Получаем базу данных временных рядов TSDB

		    DSLinked := mb.ItemById("TSDB").Bind As IRubricator;

		    // Получаем справочник, на котором основан атрибут INDICATOR

		    Attributes := DSLinked.Facts.Attributes;

		    dimLinked := Attributes.FindById("INDICATOR").ValuesObject.Open(Null) As IDimInstance;

		    // Добавляем справочник в качестве связанного измерения

		    IDimLink := IIterDim.Links.Add(dimLinked);

		    // Указываем атрибут-источник и атрибут-приёмник

		    IDimLink.SourceAttribute := dimSelI.Dimension.Attributes.FindById("NAME").Attribute;

		    IDimLink.DestinationAttribute := dimLinked.Attributes.FindById("NAME").Attribute;

		    // Указываем источник данных связанного измерения

		    IDimLink.Dimension.Stubs.Add(DSLinked As IVariableStub);

		    // Получаем источник данных, по которому которому будут выполняться итерации

		    // и выводим его наименование в окно консоли

		    IterStub := IterStubs.Item(0);

		    Debug.WriteLine("Источник данных, по которому выполняется итерация: " + IterStub.Stub.Name);

		    // Добавляем фильтрацию по измерению, на котором основан атрибут CITY

		    FilterDim := IterStub.Dimension(dimInstC.InstanceModel);

		    Debug.WriteLine("  Измерение фильтрации: " + FilterDim.Dimension.Name);

		    FilterDim.Filter.ParameterAsGroup := CParam;

		    // Добавляем фильтрацию по измерению, на котором основан атрибут INDICATOR

		    FilterDim := IterStub.Dimension(dimInstI.InstanceModel);

		    FilterDim.Filter.ParameterAsGroup := IParam;

		    Debug.WriteLine("  Измерение фильтрации: " + FilterDim.Dimension.Name);

		    // Создаем внутри многомерного итератора модель

		    model := Iterator.Contents.AddExclusiveModel.Model;

		    // Настраиваем модель

		    Trans := model.Transform;

		    // Добавляем моделируемую переменную

		    TransVar := Trans.Outputs.Add(DS As IVariableStub);

		    Slice := TransVar.Slices.Add(Null);

		    SelectionFact := New DimSelectionSetFactory.Create;

		    SelSet := SelectionFact.CreateDimSelectionSet;

		    SelSet.Add(dimInstC);

		    SelSet.Add(dimInstI);

		    SelSet.Item(0).SelectElement(1, False);

		    SelSet.Item(1).SelectElement(1, False);

		    Slice.Selection := SelSet;

		    Selector := Trans.CreateSelector;

		    Selector.Slice := Slice;

		    // Настраиваем метод расчета модели: детерминированное уравнение

		    Formula := Trans.Transform(Selector);

		    Formula.Kind := MsFormulaKind.Deterministic;

		    Determ := Formula.Method As IMsDeterministicTransform;

		    // Добавляем входную переменную

		    TransVar := Trans.Inputs.Add(DS As IVariableStub);

		    Slice := TransVar.Slices.Add(Null);

		    Slice.Selection := SelSet;

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


В результате выполнения примера в метамодели будет создан многомерный
 итератор по данным. Внутри итератора будет создана модель, рассчитывающаяся
 только по тем точкам измерений, которые содержат данные.


См. также:


[IMsDimIteratorFilter](IMsDimIteratorFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
