# IDimSelection.AdditionalHierarchy

IDimSelection.AdditionalHierarchy
-


# IDimSelection.AdditionalHierarchy


## Синтаксис


AdditionalHierarchy: [IDimHierarchiesInstance](../IDimHierarchiesInstance/IDimHierarchiesInstance.htm);


## Описание


Свойство AdditionalHierarchy
 возвращает объект для работы с альтернативной иерархией.


## Комментарии


[Альтернативная
 иерархия](UiNavObj.chm::/reference_book/UiMd_reference_book_Hierarchy.htm) - иерархия любого другого справочника,
 связанная с иерархией основного справочника для сопоставления элементов,
 или пользовательская иерархия, созданная при [редактировании
 измерений](UiSelection.chm::/Selection/Dimension_edit.htm) или [добавлении
 нового вычисляемого элемента](UiSelection.chm::/Selection/Dimension_edit.htm#add_elem).


## Пример


Для выполнения примера в репозитории предполагается наличие табличных
 справочников с идентификаторами «DIC_RF_AH» и «FACTS_AH». Справочник «DIC_RF_AH»
 рассматривается в качестве основного, а «FACTS_AH» - в качестве справочника
 для альтернативной иерархии.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    OriginalModelObj: IMetabaseObject;

    OriginalModel, AlternateModel: IDimensionModel;

    Hierarchies: IDimHierarchies;

    Alt_Hierarchy: IDimHierarchy;

    Origin_Attributes, Alt_Attributes: IDimAttributes;

    Origin_Attr, Alt_Attr: IDimAttribute;

    dimInstance: IDimInstance;

    dimSel: IDimSelection;

    i: Integer;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем табличный справочник

    OriginalModelObj := Mb.ItemById("DIC_RF_AH").Edit;

    OriginalModel := OriginalModelObj As IDimensionModel;

    // Получаем источник альтернативной иерархии

    AlternateModel := Mb.ItemById("FACTS_AH").Bind As IDimensionModel;

    Hierarchies := OriginalModel.Hierarchies;

    // Определяем индекс, содержащий ключи элементов для альтернативной иерархии

    Hierarchies.OriginalIndex := OriginalModel.Indexes.PrimaryIndex;

    // Добавляем источник альтернативной иерархии

    Alt_Hierarchy := Hierarchies.Add(AlternateModel);

    // Определяем индекс, содержащий ключи для сопоставления элементов основного и альтернативного справочника

    Alt_Hierarchy.SourceIndex := AlternateModel.Indexes.PrimaryIndex;

    Origin_Attributes := OriginalModel.Attributes;

    Alt_Attributes := AlternateModel.Attributes;

    // Связываем атрибуты оригинального измерения с атрибутами из источника альтернативной иерархии по идентификатору

    For i := 0 To Origin_Attributes.Count - 1 Do

        Origin_Attr := Origin_Attributes.FindById("NAME");

        Alt_Attr := Alt_Attributes.FindById("NAME");

        Alt_Hierarchy.SourceAttribute(Origin_Attr) := Alt_Attr;

    End For;

    OriginalModelObj.Save;

    // Изменяем основную иерархию на альтернативную

    dimInstance := OriginalModelObj.Open(Null) As IDimInstance;

    dimSel := dimInstance.CreateSelection;

    dimSel.InitAdditionalHierarchy(Alt_Hierarchy);

    dimSel.Hierarchy := dimSel.AdditionalHierarchy;

    // Сохраняем справочник

    OriginalModelObj.Save;

End Sub UserProc;


В результате выполнения примера в основной справочник будет добавлена
 альтернативная иерархия.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
