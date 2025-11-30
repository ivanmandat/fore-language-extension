# IDimHierarchies.Add

IDimHierarchies.Add
-


# IDimHierarchies.Add


## Синтаксис


Add(Dimension: [IDimensionModel](../IDimensionModel/IDimensionModel.htm)):
 [IDimHierarchy](../IDimHierarchy/IDimHierarchy.htm);


## Параметры


Dimension. Модель справочника,
 являющегося источником альтернативной иерархии.


## Описание


Метод Add осуществляет добавление
 альтернативной иерархии в коллекцию.


## Комментарии


Для удаления альтернативной иерархии из коллекции используйте метод
 [IDimHierarchies.Remove](IDimHierarchies.Remove.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории справочников
 с идентификаторами «TB_BASE» и «TB_ALT». Справочник «TB_BASE» рассматривается
 в качестве основного, а «TB_ALT» - в качестве справочника для альтернативной
 иерархии. Также предполагается наличие формы, содержащей компонент Button
 с идентификатором «Button1», компонент DimensionTree с идентификатором
 «DimensionTree1» и компонент UiDimension с идентификатором «UiDimension1»,
 являющимся источником данных для компонента «DimensionTree1». В качестве
 источника данных для компонента «UiDimension1» укажите справочник «TB_BASE».
 Пример является обработчиком события OnClick для компонента «Button1».


Добавьте ссылку на системную сборку Metabase.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Mb: IMetabase;

    OriginalModelObj: IMetabaseObject;

    OriginalModel, AlternateModel: IDimensionModel;

    Hierarchies: IDimHierarchies;

    Alt_Hierarchy: IDimHierarchy;

    Origin_Attributes, Alt_Attributes: IDimAttributes;

    Origin_Attr, Alt_Attr: IDimAttribute;

    dimInstance: IDimInstance;

    Hs_Instance: IDimHierarchiesInstance;

    H_Inst: IDimHierarchyInstance;

    dimSel: IDimSelection;

    i: Integer;

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

    // Определяем индекс, содержащий ключи для сопоставления элементов основного и альтернативного справочника

    Alt_Hierarchy.SourceIndex := AlternateModel.Indexes.PrimaryIndex;

    Origin_Attributes := OriginalModel.Attributes;

    Alt_Attributes := AlternateModel.Attributes;

    // Связываем атрибуты оригинального измерения с атрибутами из источника альтернативной иерархии
 по идентификатору

    For i := 0 To Origin_Attributes.Count - 1 Do

        Origin_Attr := Origin_Attributes.FindById("NAME");

        Alt_Attr := Alt_Attributes.FindById("NAME");

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


[IDimHierarchies](IDimHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
