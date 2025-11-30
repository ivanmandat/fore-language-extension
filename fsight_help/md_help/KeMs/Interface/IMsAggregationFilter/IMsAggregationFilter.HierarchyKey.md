# IMsAggregationFilter.HierarchyKey

IMsAggregationFilter.HierarchyKey
-


# IMsAggregationFilter.HierarchyKey


## Синтаксис


HierarchyKey: Integer;


## Описание


Свойство HierarchyKey определяет
 ключ агрегации по уровням [альтернативной
 иерархии](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_7.htm#alt_agr) в коллекции альтернативных иерархий измерения.


## Комментарии


Коллекция альтернативных иерархий содержится в папке «[Альтернативные
 иерархии](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_7.htm#alt_agr)» с доступными для измерения уровнями альтернативной
 иерархии и используется для работы с фильтром агрегации.


## Пример


Для выполнения примера в репозитории предполагается наличие табличного
 справочника НСИ с идентификатором RDS_DICT, контейнера моделирования с
 идентификатором CONT_MODEL, содержащего задачу моделирования с идентификатором
 PROBLEM. В задаче моделирования должна содержаться метамодель с идентификатором
 METAMODEL, в [цепочке
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) которой содержится [модель
 матричной агрегации](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/MatrixAggregation/MatrixAggregation.htm) с идентификатором MODEL.


Для табличного справочника НСИ настройте [альтернативную
 иерархию на основе справочников](UiNavObj.chm::/reference_book/look-and-feel_Reference_book/Use_AlterHier_ForRefBook.htm) и добавьте целочисленный
 [атрибут](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Attributes/Attribute.htm)
 с идентификатором HKEY для использования альтернативной иерархии.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms, Transform.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrDescr, Descr: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Formula: IMsFormula;

    MA: IMsMatrixAggregationTransform;

    Filter: IMsAggregationFilter;

    MetaModel: IMsMetaModel;

    Param: IMsModelParam;

    Params: IMsModelParams;

    Dim: IDimInstance;

    Hierarchy: IDimHierarchy;

    Structure: IDimensionModel;

    Hierarchies: IDimHierarchies;

    HieKey: Integer;

    Transform: IMsFormulaTransform;

    ParamAttr: IMsModelParamAttributes;

    Attr: IDimAttributeInstance;

    Attributes: IDimAttributesInstance;

    DimAttr: IDimAttribute;

Begin

    MB := MetabaseClass.Active;

    // Получим табличный справочник НСИ, в котором используется альтернативная иерархия

    Dim := MB.ItemById("RDS_DICT").Open(Null) As IDimInstance;

    // Получим структуру справочника

    Structure := Dim.Dimension;

    // Получим коллекцию альтернативных иерархий справочника

    Hierarchies := Structure.Hierarchies;

    // Получим ключ первого уровня альтернативной иерархии

    Hierarchy := Hierarchies.Item(0);

    HieKey := Hierarchy.Key;

    // Получим атрибут справочника, используемый для альтернативной иерархии

    Attributes := Dim.Attributes;

    Attr := Attributes.FindById("HKEY");

    DimAttr := Attr.Attribute;

    // Получим контейнер моделирования

    RubrDescr := MB.ItemById("CONT_MODEL");

    Descr := RubrDescr.EditDescriptor;

    // Получим метамодель

    MetaModel := MB.ItemByIdNamespace("METAMODEL", Descr.Key).Edit As IMsMetaModel;

    // Создадим параметр метамодели

    Params := MetaModel.Params;

    Param := Params.Add;

    Param.Id := "HIE";

    Param.Name := "Иерархия";

    Param.ParamType := TsParamType.Hierarchy;

    // Привяжем параметр к справочнику НСИ

    Param.LinkedObject := Structure As IMetabaseObjectDescriptor;

    // Сохраним внесенные изменения

    (MetaModel As IMetabaseObject).Save;

    // Получим модель матричной агрегации

    Model := MB.ItemByIdNamespace("MODEL", Descr.Key).Edit As IMsModel;

    // Получим параметры расчета модели

    Transform := Model.Transform;

    Formula := Transform.FormulaItem(0);

    MA := Formula.Method As IMsMatrixAggregationTransform;

    // Добавим и настроим фильтр агрегации

    Filter := MA.Filter.Add(Structure);

    Filter.HierarchyKey := HieKey;

    ParamAttr := Filter.HierarchyParamAttributes;

    ParamAttr.Parameter := Param;

    ParamAttr.Attributes.Add(DimAttr);

    // Сохраним внесенные изменения

    (Model As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будет настроен фильтр агрегации для
 [параметра
 модели](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/MatrixAggregation/MatrixAggregationParams.htm):


	- в метамодели будет создан параметр типа «Альтернативная
	 иерархия» с идентификатором HIE и связан с табличным справочником
	 НСИ;


	- в модели будет использоваться первый уровень альтернативной
	 иерархии справочника, созданный параметр с идентификатором HIE и атрибут
	 справочника с идентификатором HKEY.


См. также:


[IMsAggregationFilter](IMsAggregationFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
