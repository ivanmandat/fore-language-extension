# IMsParametrizedDimension.Aggregation

IMsParametrizedDimension.Aggregation
-


# IMsParametrizedDimension.Aggregation


## Синтаксис


Aggregation: [IMsParametrizedDimensionAggregation](../IMsParametrizedDimensionAggregation/IMsParametrizedDimensionAggregation.htm);


## Описание


Свойство Aggregation возвращает
 настройки агрегации параметризированного измерения.


## Комментарии


По умолчанию агрегация параметризированного измерения не выполняется.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего метамодель с идентификатором
 «METAMODEL_PARAMAGGREGATION». Данная метамодель должна рассчитывать уравнение
 с идентификатором «MODEL_PARAMAGGREGATION», содержащее один или более
 факторов. Источник данных контейнера моделирования должен содержать атрибут
 с идентификатором «CITY», являющийся ссылкой на справочник, содержащий
 атрибут логического типа с идентификатором «ISCAPITAL».


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Matrix,
 Metabase, Ms, Rds, Transform.


			Sub UserProc;

Var

    mb: IMetabase;

    MsKey: Integer;

    TSDB: IRubricator;

    MS: IMsModelSpace;

    Attributes: IMetaAttributes;

    Dict: IMetabaseObjectDescriptor;

    MetaModel: IMsMetaModel;

    MParams: IMsModelParams;

    CParam: IMsModelParam;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    Inputs: IMsFormulaTransformVariable;

    Slice: IMsFormulaTransformSlice;

    dimInstC: IDimInstance;

    dimSelC: IDimSelection;

    paramDim: IMsParametrizedDimensions;

    paramD: IMsParametrizedDimension;

    Aggregation: IMsParametrizedDimensionAggregation;

    CAdvFilter: IMsDimIteratorAdvancedFilter;

    i: Integer;

    CAdvFilterCond: IMsDimIteratorAdvancedFilterCondition;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования

    MsKey := mb.GetObjectKeyById("MS");

    // Получаем контейнер моделирования

    MS := mb.Item(MsKey).Bind As IMsModelSpace;

    // Получаем базу данных временных рядов,

    // являющуюся источником данных для контейнера моделирования

    TSDB := MS.DefaultObject.Bind As IRubricator;

    // Получаем атрибуты рядов

    Attributes := TSDB.Facts.Attributes;

    // Получаем справочник, на котом основан атрибут CITY

    Dict := Attributes.FindById("CITY").ValuesObject;

    // Получаем метамодель

    MetaModel := mb.ItemByIdNamespace("METAMODEL_PARAMAGGREGATION", MsKey).Edit As IMsMetaModel;

    // Получаем и очищаем параметры метамодели

    MParams := MetaModel.Params;

    MParams.Clear;

    // Добавляем параметр, основанный на справочнике атрибута CITY

    CParam := MParams.Add;

    CParam.DataType := DbDataType.Integer;

    CParam.Hidden := True;

    CParam.Id := "CITY";

    CParam.Name := "Город";

    CParam.LinkedObject := Dict;

    CParam.ParamType := TsParamType.Selection;

    dimInstC := Dict.Open(Null) As IDimInstance;

    dimSelC := dimInstC.CreateSelection;

    dimSelC.SelectElement(1, False);

    CParam.DefaultValue := dimSelC;

    // Сохраняем метамодель

    (MetaModel As IMetabaseObject).Save;

    // Получаем модель

    Model := mb.ItemByIdNamespace("MODEL_PARAMAGGREGATION", MsKey).Edit As IMsModel;

    // Получаем параметры расчета модели

    Transform := Model.Transform;

    // Получаем фактор модели

    Inputs := Transform.Inputs.Item(0);

    // Указываем, что значение атрибута, основанного на справочнике атрибута CITY

    // определяется параметром метамодели

    Slice := Inputs.Slices.Item(0);

    paramDim := Slice.ParametrizedDimensions;

    paramD := paramDim.FindById(dimInstC.Ident);

    paramD.ParamAttributes.Parameter := CParam;

    // Получаем параметры агрегации

    Aggregation := paramD.Aggregation;

    // Указываем, что агрегация выполняется по иерархии

    Aggregation.ByHierarchy := True;

    // Задаем тип агрегации

    Aggregation.Type := BasicAggregatorOperation.Sum;

    // Получаем расширенный фильтр и очищаем все условия

    CAdvFilter := Aggregation.AdvancedFilter;

    CAdvFilter.Clear;

    // Добавляем условие расширенной фильтрации

    CAdvFilterCond := CAdvFilter.Add;

    // Задаем фильтруемый атрибут

    CAdvFilterCond.Attribute := dimInstC.Attributes.FindById("ISCAPITAL").Attribute;

    // Задаем оператор сравнения

    CAdvFilterCond.Operator_ := MsAdvancedFilterConditionOperator.Equal;

    // Задаем требуемое значение атрибута

    CAdvFilterCond.Value := True;

    // Сохраняем модель

    (Model As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера для первого фактора модели будет задано
 параметризированное измерение, в котором настроена агрегация.


См. также:


[IMsParametrizedDimension](IMsParametrizedDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
