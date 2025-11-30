# IDimHierarchiesInstance.DefaultHierarchy

IDimHierarchiesInstance.DefaultHierarchy
-


# IDimHierarchiesInstance.DefaultHierarchy


## Синтаксис


DefaultHierarchy: [IDimHierarchiesInstance](IDimHierarchiesInstance.htm);


## Описание


Свойство доступно только для чтения.


Свойство DefaultHierarchy определяет
 наличие альтернативной иерархии, которая будет использоваться по умолчанию
 при открытии справочника.


## Комментарии


Чтобы задать иерархию, которая будет использоваться по умолчанию при
 открытии справочника, используйте свойство [IDimHierarchies.DefaultHierarchy](../IDimHierarchies/IDimHierarchies.DefaultHierarchy.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие табличных
 справочников с идентификаторами «DIC_RF_DH»
 и «FACTS2_DH». Справочник «DIC_RF_DH» рассматривается в качестве
 основного, в котором есть альтернативные иерархии, а «FACTS2_DH»
 - в качестве справочника для альтернативной иерархии.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    OriginalModelObj: IMetabaseObject;

    OriginalModel, AlternateModel: IDimensionModel;

    Hierarchies: IDimHierarchies;

    Hierarchy, Alt_Hierarchy: IDimHierarchy;

    Origin_Attributes, Alt_Attributes: IDimAttributes;

    Origin_Attr, Alt_Attr: IDimAttribute;

    dimInstance: IDimInstance;

    Hs_Instance: IDimHierarchiesInstance;

    H_Inst, Hs_Inst: IDimHierarchyInstance;

    dimSel: IDimSelection;

    i: Integer;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем табличный справочник

    OriginalModelObj := Mb.ItemById("DIC_RF_DH").Edit;

    OriginalModel := OriginalModelObj As IDimensionModel;

    // Получаем источник альтернатичной иерархии

    AlternateModel := Mb.ItemById("FACTS2_DH").Bind As IDimensionModel;

    Hierarchies := OriginalModel.Hierarchies;

    Hierarchy := Hierarchies.Item(0);

    // Задаём иерархию по умолчанию

    Hierarchies.DefaultHierarchy := Hierarchy;

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

    dimInstance := OriginalModelObj.Open(Null) As IDimInstance;

    Hs_Instance := dimInstance.Hierarchies;

    // Изменяем основную иерархию на альтернативную

    dimSel := dimInstance.CreateSelection;

    dimSel.InitAdditionalHierarchy(Alt_Hierarchy);

    dimSel.Hierarchy := dimSel.AdditionalHierarchy;

    // Выводим в консоль наименование иерархии, заданной по умолчанию

    Debug.WriteLine(Hs_Instance.DefaultHierarchy.Name);

    // Сохраняем справочник

    OriginalModelObj.Save;

End Sub UserProc;


В результате выполнения примера в основной справочник будет добавлена
 альтернативная иерархия, задана иерархия по умолчанию, в окно консоли
 будет выведено имя иерархии по умолчанию.


См. также:


[IDimHierarchiesInstance](IDimHierarchiesInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
