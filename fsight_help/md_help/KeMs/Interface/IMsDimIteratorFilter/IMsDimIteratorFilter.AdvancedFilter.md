# IMsDimIteratorFilter.AdvancedFilter

IMsDimIteratorFilter.AdvancedFilter
-


# IMsDimIteratorFilter.AdvancedFilter


## Синтаксис


		AdvancedFilter: [IMsDimIteratorAdvancedFilter](../IMsDimIteratorAdvancedFilter/IMsDimIteratorAdvancedFilter.htm);


## Описание


Свойство AdvancedFilter
 возвращает параметры расширенного фильтра.


## Комментарии


Расширенный фильтр позволяет выбрать элементы, соответствующие заданному
 условию.


Если в фильтре уже заданы элементы в одном из свойств [IMsDimIteratorFilter.ElementGroup](IMsDimIteratorFilter.ElementGroup.htm),
 [IMsDimIteratorFilter.ParameterAsGroup](IMsDimIteratorFilter.ParameterAsGroup.htm),
 [IMsDimIteratorFilter.ParameterAsSelection](IMsDimIteratorFilter.ParameterAsSelection.htm)
 или [IMsDimIteratorFilter.Selection](IMsDimIteratorFilter.Selection.htm),
 то именно они проверяются на соответствие заданному условию. Если элементы
 не заданы, то на соответствие условию проверяются все элементы справочника.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS_STAT, содержащего метамодель с идентификатором
 METAMODEL_MULTIDIMITERATOR. Источником данных для данного контейнера является
 база данных временных рядов, содержащая атрибуты временных рядов с идентификаторами
 CITY и INDICATOR. Данные атрибуты должны быть типа «Ссылка на справочник».
 Справочник, на который ссылается атрибут CITY должен содержать параметр
 логического типа с идентификатором ISCAPITAL.


Также в контейнере должна содержаться задача моделирования с идентификатором
 PROBLEM_MULTIDIMITERATOR, рассчитывающая метамодель METAMODEL_MULTIDIMITERATOR,
 и модель с идентификатором MODEL_MULTIDIMITERATOR.


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Metabase,
 Ms, Rds, Transform.


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

		    mParams: IMsModelParams;

		    CParam, IParam: IMsModelParam;

		    iterator: IMsCalculationChainMultiDimIterator;

		    dimInstC, dimInstI: IDimInstance;

		    IterDims: IMsDimIteratorDimensions;

		    CIterDim, IIterDim: IMsDimIteratorDimension;

		    Filter: IMsDimIteratorFilter;

		    dimSelC, dimSelI: IDimSelection;

		    CAdvFilter: IMsDimIteratorAdvancedFilter;

		    CAdvFilterCond: IMsDimIteratorAdvancedFilterCondition;

		    model: IMsModel;

		    Problem: IMsProblem;

		    Calc: IMsProblemCalculation;

		    i: Integer;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS_STAT");

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

		    // Получаем и очищаем параметры метамодели

		    mParams := pMetaModel.Params;

		    mParams.Clear;

		    // Добавляем параметр, основанный на справочнике атрибута CITY

		    CParam := mParams.Add;

		    CParam.DataType := DbDataType.integer;

		    CParam.Hidden := True;

		    CParam.Id := "CITY";

		    CParam.Name := "Город";

		    CParam.LinkedObject := CDict;

		    CParam.ParamType := TsParamType.Selection;

		    dimInstC := CDict.Open(Null) As IDimInstance;

		    dimSelC := dimInstC.CreateSelection;

		    dimSelC.SelectAll;

		    CParam.DefaultValue := dimSelC;

		    // Добавляем параметр, основанный на справочнике атрибута INDICATOR

		    IParam := mParams.Add;

		    IParam.DataType := DbDataType.Integer;

		    IParam.Hidden := True;

		    IParam.Id := "INDICATOR";

		    IParam.Name := "Показатель";

		    IParam.LinkedObject := IDict;

		    IParam.ParamType := TsParamType.Selection;

		    dimInstI := IDict.Open(Null) As IDimInstance;

		    dimSelI := dimInstI.CreateSelection;

		    dimSelI.SelectAll;

		    // Получаем и очищаем цепочку расчета метамодели

		    Chain := pMetaModel.CalculationChain;

		    Chain.Clear;

		    // Добавляем многомерный итератор в цепочку расчета метамодели

		    Iterator := Chain.AddMultiDimIterator("Многомерный итератор");

		    // Получаем итерируемые измерения

		    IterDims := Iterator.Dimensions;

		    // Добавляем измерение, основанное на справочнике атрибута CITY

		    CIterDim := IterDims.Add(dimInstC);

		    // Задаем параметр измерения

		    CIterDim.Parameter := CParam;

		    // Задаем фильтр элементов

		    Filter := CIterDim.Filter;

		    Filter.Selection := dimSelC;

		    // Получаем расширенный фильтр

		    CAdvFilter := Filter.AdvancedFilter;

		    // Выводим наименование фильтруемого измерения

		    Debug.WriteLine("Измерение, содержащее
		 расширенный фильтр: " + (CAdvFilter.Owner As IMsDimIteratorFilter).Owner.Name);

		    // Добавляем условие расширенной фильтрации

		    CAdvFilterCond := CAdvFilter.Add;

		    // Задаем фильтруемый атрибут

		    CAdvFilterCond.Attribute := dimInstC.Attributes.FindById("ISCAPITAL").Attribute;

		    // Задаем оператор сравнения

		    CAdvFilterCond.Operator_ := MsAdvancedFilterConditionOperator.Equal;

		    // Задаем требуемое значение атрибута

		    CAdvFilterCond.Value := True;

		    // Добавляем измерение, основанное на справочнике атрибута INDICATOR

		    IIterDim := IterDims.Add(dimInstI);

		    // Задаем параметр измерения

		    IIterDim.Parameter := IParam;

		    // Задаем фильтр элементов

		    Filter := IIterDim.Filter;

		    Filter.Selection := dimSelI;

		    // Добавляем модель в многомерный итератор

		    model := mb.ItemByIdNamespace("MODEL_MULTIDIMITERATOR", MsKey).Bind As IMsModel;

		    Iterator.Contents.AddModel(model);

		    // Сохраняем изменения в метамодели

		    (pMetaModel As IMetabaseObject).Save;

		    // Выполняем проверку расширенного фильтра. Выводим в окно консоли элементы справочника,

		    // соответствующие фильтру

		    Problem := mb.ItemByIdNamespace("PROBLEM_MULTIDIMITERATOR", MsKey).Bind As IMsProblem;

		    Calc := Problem.Calculate(Problem.CreateCalculationSettings);

		    Debug.WriteLine("Элементы справочника, соответствующие фильтру: ");

		    Debug.Indent;

		    For i := 0 To dimSelC.SelectedCount - 1 Do

		        If CAdvFilter.Test(dimSelC.Element(i), Calc) Then

		            Debug.WriteLine(dimSelC.Dimension.Elements.Name(dimSelC.Element(i)));

		        End If;

		    End For;

		End Sub UserProc;


В результате выполнения примера в метамодели будет создан многомерный
 итератор. Вовнутрь итератора будет добавлена модель. Для измерения, основанного
 на справочнике атрибута CITY будет добавлен расширенный фильтр: в итератор
 попадут только те элементы, у которых значение атрибута ISCAPITAL равняется
 True. В окно консоли будут выведены
 данные элементы.


См. также:


[IMsDimIteratorFilter](IMsDimIteratorFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
