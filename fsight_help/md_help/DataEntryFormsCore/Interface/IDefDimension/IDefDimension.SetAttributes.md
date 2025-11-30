# IDefDimension.SetAttributes

IDefDimension.SetAttributes
-


# IDefDimension.SetAttributes


## Синтаксис


SetAttributes(attrKeys: [IArrayList](ModCollections.chm::/Interface/IArrayList/IArrayList.htm));


## Параметры


attrKeys. Коллекция ключей
 атрибутов.


## Описание


Метод SetAttributes задаёт список
 атрибутов, отображаемых для элементов измерения.


## Пример


Для выполнения примера предполагается наличие в репозитории формы ввода,
 для которой указанный макрос назначен в качестве исполняемого метода для
 пользовательской кнопки. В форме ввода создана табличная область. Источник
 данных табличной области в своей структуре имеет измерения с идентификаторами
 «CALENDAR» и «DICT_INDICATORS». Измерение «DICT_INDICATORS» также добавлено
 в показатель табличной области.


Добавьте ссылки на системные сборки: Collections, Dimensions, Metabase,
 Report. Также добавьте ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


			Public Sub SetAttributes(Report: IPrxReport);

Var

    Mb: IMetabase;

    DEForm: IDataEntryForm;

    TArea: IDefTableArea;

    Dim1, Dim2: IDimensionModel;

    Attrs: IDimAttributes;

    attrKeys: IArrayList;

Begin

    Mb := MetabaseClass.Active;

    // Экземпляр текущей формы ввода

    DEForm := New DataEntryForm.CreateByReport(report);

    // Получение табличной области

    TArea := DEForm.inpuTAreas.Item(0) As IDefTableArea;

    // Настройка измерения

    attrKeys := New ArrayList.Create;

    Dim1 := Mb.ItemById("CALENDAR").Bind As IDimensionModel;

    Attrs := Dim1.Attributes;

    attrKeys.Add(Attrs.FindById("NAME").Key);

    attrKeys.Add(Attrs.FindById("ID").Key);

    TArea.DefDimensions.ItemByKey(Mb.GetObjectKeyById("CALENDAR")).SetAttributes(attrKeys);

    // Настройка показателя

    Dim2 := Mb.ItemById("DICT_INDICATORS").Bind As IDimensionModel;

    Attrs := Dim2.Attributes;

    attrKeys.Clear;

    attrKeys.Add(Attrs.FindById("NAME").Key);

    attrKeys.Add(Attrs.FindById("KEY").Key);

    TArea.DefIndicators.Item(0).SetAttributes(attrKeys);

    // Применить изменения к форме ввода

    DEForm.inpuTAreas.ApplyAreaToReport(TArea.id);

    DEForm._Dispose;

End Sub SetAttributes;


При выполнении макроса для измерения и показателя табличной области
 будут настроены атрибуты, отображаемые для элементов.


См. также:


[IDefDimension](IDefDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
