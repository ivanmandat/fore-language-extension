# Альтернативные иерархии

Альтернативные иерархии
-


# Альтернативные иерархии


Альтернативные иерархии позволяют для одного справочника настроить различные варианты отображения данных. Для работы с коллекций альтернативных иерархий предназначен интерфейс [IDimHierarchies](../../interface/IDimHierarchies/IDimHierarchies.htm). Получить коллекцию альтернативных иерархий справочника можно используя свойство [Hierarchies](../../interface/IDimensionModel/IDimensionModel.Hierarchies.htm).


В качестве альтернативных иерархий выступают другие справочники репозитория. Для связи со справочниками в исходном справочнике должен быть создан индекс. Данный индекс необходимо указать в свойстве [IDimHierarchies.OriginalIndex](../../interface/IDimHierarchies/IDimHierarchies.OriginalIndex.htm). Для создания новой альтернативной иерархии необходимо в метод [IDimHierarchies.Add](../../interface/IDimHierarchies/IDimHierarchies.Add.htm) передать структуру справочника. Справочник, используемый в качестве альтернативной иерархии, также должен иметь индекс. Этот индекс, после создания альтернативной иерархии, необходимо указать в свойстве [IDimHierarchy.SourceIndex](../../interface/IDimHierarchy/IDimHierarchy.SourceIndex.htm). Используя свойство [IDimHierarchy.SourceAttribute](../../interface/IDimHierarchy/IDimHierarchy.SourceAttribute.htm) необходимо сопоставить все атрибуты исходного справочника и справочника, используемого как альтернативная иерархия.


			Var

    MB: IMetabase;

    OriginDim, AlternDim: IDimensionModel;

    OriginAttrs, AlternAttrs: IDimAttributes;

    Attr: IDimAttribute;

    Hierarchies: IDimHierarchies;

    Hierarchy: IDimHierarchy;

Begin

    MB := MetabaseClass.Active;

    //Получение структуры основного справочника
    OriginDim := MB.ItemById("Dim_1").Edit As IDimensionModel;

    //Получение структуры справочника, который будет использоваться как альтернативная иерархия
    AlternDim := MB.ItemById("Alternative_Dim").Bind As IDimensionModel;

    Hierarchies := OriginDim.Hierarchies;

    //Указание индекса для связи с альтернативными иерархиями
    Hierarchies.OriginalIndex := OriginDim.Indexes.PrimaryIndex;

    //Создание новой альтернативной иерархии
    Hierarchy := Hierarchies.Add(AlternDim);

    //Указание индекса
    Hierarchy.SourceIndex := AlternDim.Indexes.PrimaryIndex;

    //Получение атрибутов исходного и альтернативного справочников для сопоставления
    //Предполагается, что количество и идентификаторы атрибутов в справочниках совпадают
    OriginAttrs := OriginDim.Attributes;

    AlternAttrs := AlternDim.Attributes;

    For Each Attr In OriginAttrs Do

        Hierarchy.SourceAttribute(Attr) := AlternAttrs.FindById(Attr.Id);

    End For;

    //Сохранение исходного справочника
    (OriginDim As IMetabaseObject).Save;


В свойстве IDimHierarchies.DefaultHierarchy можно указать какая альтернативная иерархия будет применяться при открытии справочника.


См. также:


[Дополнительные объекты справочников](KeDims_AdditionalObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
