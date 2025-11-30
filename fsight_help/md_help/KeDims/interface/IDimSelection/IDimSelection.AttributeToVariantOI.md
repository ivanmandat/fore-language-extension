# IDimSelection.AttributeToVariantOI

IDimSelection.AttributeToVariantOI
-


# IDimSelection.AttributeToVariantOI


## Синтаксис


AttributeToVariantOI(Attribute: [IDimAttribute](../IDimAttribute/IDimAttribute.htm)):
 Variant;


## Параметры


Attribute. Атрибут справочника,
 по значениям которого формируется отметка. По данному атрибуту в справочнике
 должен быть создан уникальный индекс.


## Описание


Метод AttributeToVariantOI формирует
 значение отметки по значениям указанного атрибута элементов, в случае
 если связь пользовательской иерархии и исходного справочника установлена.


## Комментарии


Если связь пользовательской иерархии и исходного справочника не установлена,
 значения отметки будут браться из исходного справочника.


[Пользовательская
 иерархия](UiSelection.chm::/Selection/Dimension_edit.htm#save_hierarchy) - это альтернативная иерархия, которая
 создается в отчете при добавлении в измерение элемента.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором «DS_PA», содержащего пользовательскую иерархию.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


			Sub UserProc;

Var

    Mb: IMetabase;

    Express: IEaxAnalyzer;

    Selection: IDimSelection;

    H_Inst: IDimHierarchyInstance;

    Attrs: IDimAttributesInstance;

    Attr, A_Attr: IDimAttributeInstance;

    Origin_Attr, Alt_Attr: IDimAttribute;

    PreSchema: IPredefinedSelectionSchema;

    v: Variant;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получим экспресс-отчет

    Express := MB.ItemById("DS_PA").Edit As IEaxAnalyzer;

    // Получим отметку измерения «Территориальные образования»

    Selection := Express.Pivot.Selection.Item(3);

    H_Inst := Selection.Hierarchy;

    Attrs := H_Inst.Source.Attributes;

    Attr := Attrs.FindById("KEY_");

    Origin_Attr := Attr.Attribute;

    v := selection.AttributeToVariantOI(Origin_Attr);

    Debug.WriteLine("Отметка пользовательской иерархии:" + Selection.ToString);

    // Изменим схему отметки измерения

    PreSchema := Selection.PredefinedSchema;

    // Отметим все элементы

    If (PreSchema <> Null) Then

        If (PreSchema.Count = 0) Then

            PreSchema.Add(SelectionPrimitiveType.All);

        End If;

        // Будем использовать предопределенную схему отметки измерения

        PreSchema.Active := True;

    End If;

    // Сохраним отчет

    Debug.WriteLine("Отметка после изменения:" + Selection.ToString);

    (Express As IMetabaseObject).Save;

    // Получим экспресс-отчет

    Express := MB.ItemById("DS_PA").Edit As IEaxAnalyzer;

    // Получим отметку измерения «Территориальные образования»

    Selection := Express.Pivot.Selection.Item(3);

    // Восстановим отметку

    H_Inst := Selection.Hierarchy;

    Attrs := H_Inst.Source.Attributes;

    A_Attr := Attrs.FindById("KEY_");

    Alt_Attr := Attr.Attribute;

    Selection.ParseAttributeOI(v, Alt_Attr);

    Debug.WriteLine("Отметка после восстановления:" + Selection.ToString);

    // Сохраним отчет

    (Express As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в экспресс-отчете будет браться отметка
 пользовательской иерархии, затем изменятся, а затем восстанавливаться.
 В окно консоли будут выведены элементы отметки пользовательской иерархии,
 отмеченные элементы после изменения отметки и элементы после восстановления
 отметки. Преобразования осуществляются по атрибуту с идентификатором «KEY_».


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
