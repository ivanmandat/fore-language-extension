# IMsDimIteratorAdvancedFilterCondition.ParamAttributes

IMsDimIteratorAdvancedFilterCondition.ParamAttributes
-


# IMsDimIteratorAdvancedFilterCondition.ParamAttributes


## Синтаксис


		ParamAttributes: [IMsModelParamAttributes](../IMsModelParamAttributes/IMsModelParamAttributes.htm);


## Описание


Свойство ParamAttributes возвращает
 параметр и цепочку атрибутов.


## Комментарии


Для задания сравниваемого атрибута используйте свойство [IMsDimIteratorAdvancedFilterCondition.Attribute](IMsDimIteratorAdvancedFilterCondition.Attribute.htm).


Для задания оператора сравнения используйте свойство [IMsDimIteratorAdvancedFilterCondition.Operator_](IMsDimIteratorAdvancedFilterCondition.Operator_.htm).
 Учитывайте особенности работы со следующими операторами:


	- [MsAdvancedFilterConditionOperator.Between](../../Enums/MsAdvancedFilterConditionOperator.htm).
	 В качестве значения параметра должен быть указан массив из двух элементов;


	- [MsAdvancedFilterConditionOperator.In](../../Enums/MsAdvancedFilterConditionOperator.htm).
	 В качестве значения параметра должен быть указан массив элементов.


Для задания сравниваемого значения напрямую используйте свойство [IMsDimIteratorAdvancedFilterCondition.Value](IMsDimIteratorAdvancedFilterCondition.Value.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS_STAT, содержащего метамодель с идентификатором
 METAMODEL_MULTIDIMITERATOR. Источником данных для данного контейнера является
 база данных временных рядов, содержащая атрибуты временных рядов с идентификаторами
 CITY и INDICATOR. Данные атрибуты должны быть типа «Ссылка на справочник».
 Справочник, на который ссылается атрибут CITY, должен содержать параметр
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

		    CParam, IParam, FParam: IMsModelParam;

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

		    CalcSett: IMsProblemCalculationSettings;

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

		    // Добавляем атрибут для использования в расширенном фильтре

		    FParam := mParams.Add;

		    FParam.Hidden := True;

		    FParam.DataType := DbDataType.Boolean;

		    FParam.Id := "CAPITAL";

		    FParam.Name := "Столица";

		    FParam.ParamType := TsParamType.Simple;

		    FParam.DefaultValue := True;

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

		    // Добавляем условие расширенной фильтрации

		    CAdvFilterCond := CAdvFilter.Add;

		    // Задаем фильтруемый атрибут

		    CAdvFilterCond.Attribute := dimInstC.Attributes.FindById("ISCAPITAL").Attribute;

		    // Задаем оператор сравнения

		    CAdvFilterCond.Operator_ := MsAdvancedFilterConditionOperator.Equal;

		    // Задаем требуемое значение атрибута в виде параметра

		    CAdvFilterCond.ParamAttributes.Parameter := FParam;

		    // Указываем, что это обратное условие

		    CAdvFilterCond.Inversed := True;

		    // Не учитываем пустые значения атрибута измерения

		    CAdvFilterCond.IgnoreEmptyAttributes := True;

		    // Не
		 учитываем пустые значения параметра

		    CAdvFilterCond.IgnoreEmptyValues := True;

		    // Выводим наименование фильтруемого измерения

		    Debug.WriteLine("Измерение, содержащее расширенный фильтр: " + (CAdvFilterCond.Owner As IMsDimIteratorFilter).Owner.Name);

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

		    Problem := mb.ItemByIdNamespace("PROBLEM_MULTIDIMITERATOR", MsKey).Edit As IMsProblem;

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
 итератор и логический параметр CAPITAL. Во внутрь итератора будет добавлена
 модель. Для измерения, основанного на справочнике атрибута CITY будет
 добавлен расширенный фильтр: в итератор попадут только те элементы, у
 которых значение атрибута ISCAPITAL обратно значению параметра CAPITAL,
 добавленного в метамодель. В окно консоли будут выведены данные элементы.


См. также:


[IMsDimIteratorAdvancedFilterCondition](IMsDimIteratorAdvancedFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
