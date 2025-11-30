# IDimSelection.Hierarchy

IDimSelection.Hierarchy
-


# IDimSelection.Hierarchy


## Синтаксис


Hierarchy: [IDimHierarchyInstance](../IDimHierarchyInstance/IDimHierarchyInstance.htm);


## Описание


Свойство Hierarchy определяет
 данные альтернативной иерархии элементов справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории справочников
 с идентификаторами «TB_BASE» и «TB_ALT». Справочник «TB_BASE» будет выступать
 в качестве основного, а «TB_ALT» использоваться в качестве справочника
 для альтернативной иерархии. Также предполагается наличие формы, расположенной
 на ней [кнопки](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Button.htm)
 с идентификатором «Button1», компонента [DimensionTree](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DimensionTree.htm)
 с идентификатором «DimensionTree1» и компонента [UiDimension](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiDimension.htm),
 являющегося источником данных для компонента «DimensionTree1». Источником
 данных для компонента UiDimension должен являться справочник «TB_BASE».
 Пример будет выполняться при нажатии на кнопку.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

    Mb: IMetabase;

    OriginalModelObj: IMetabaseObject;

    OriginalModel: IDimensionModel;

    AlternateModel: IDimensionModel;

    Hierarchies: IDimHierarchies;

    Alt_Hierarchy: IDimHierarchy;

    i: Integer;

    Origin_Attributes: IDimAttributes;

    Alt_Attributes: IDimAttributes;

    Origin_Attr: IDimAttribute;

    Alt_Attr: IDimAttribute;

    dimInstance: IDimInstance;

    Hs_Instance: IDimHierarchiesInstance;

    H_Inst: IDimHierarchyInstance;

    dimSel: IDimSelection;

Begin

    Mb := MetabaseClass.Active;

    OriginalModelObj := Mb.ItemById("TB_BASE").Edit;

    OriginalModel := OriginalModelObj As IDimensionModel;

    AlternateModel := Mb.ItemById("TB_ALT").Bind As IDimensionModel;

    Hierarchies := OriginalModel.Hierarchies;

    Hierarchies.Clear;

    // Определяем индекс, содержащий ключи элементов для альтернативной иерархии

    Hierarchies.OriginalIndex := OriginalModel.Indexes.PrimaryIndex;

    // Добавляем источник альтернативной иерархии

    Alt_Hierarchy := Hierarchies.Add(AlternateModel);

    // Определяем индекс, содержащий ключи для сопоставления элементов основного и альтернативного
 справочника

    Alt_Hierarchy.SourceIndex := AlternateModel.Indexes.PrimaryIndex;

    Origin_Attributes := OriginalModel.Attributes;

    Alt_Attributes := AlternateModel.Attributes;

    // Связываем атрибуты оригинального измерения с атрибутами из источника альтернативной
 иерархии

    For i := 0 To Origin_Attributes.Count - 1 Do

        Origin_Attr := Origin_Attributes.Item(i);

        Alt_Attr := Alt_Attributes.Item(i);

        Alt_Hierarchy.SourceAttribute(Origin_Attr) := Alt_Attr;

    End For;

    OriginalModelObj.Save;

    // Изменение основной иерархии на альтернативную

    dimInstance := OriginalModelObj.Open(Null) As IDimInstance;

    Hs_Instance := dimInstance.Hierarchies;

    If Hs_Instance.Count > 0 Then

        H_Inst := Hs_Instance.Item(0);

        dimSel := DimensionTree1.Selection;

        dimSel.Hierarchy := H_Inst;

    End If;

End Sub Button1OnClick;


После выполнения примера для основного справочника будет добавлена и
 установлена альтернативная иерархия.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
