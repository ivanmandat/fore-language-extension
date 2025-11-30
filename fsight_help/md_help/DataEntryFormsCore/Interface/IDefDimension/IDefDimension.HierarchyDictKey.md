# IDefDimension.HierarchyDictKey

IDefDimension.HierarchyDictKey
-


# IDefDimension.HierarchyDictKey


## Синтаксис


HierarchyDictKey: Integer;


## Описание


Свойство HierarchyDictKey определяет
 ключ справочника, который будет использоваться в качестве альтернативной
 иерархии.


## Комментарии


Актуально, если свойству [HierarchyTypeSource](IDefDimension.HierarchyTypeSource.htm)
 установлено значение [AltHierarchySourceEnum.FromDictionary](../../Enums/AltHierarchySourceEnum.htm).
 В качестве значения свойства укажите ключ справочника, на базе которого
 создана альтернативная иерархия у справочника, лежащего в основе текущего
 измерения.


## Пример


Для выполнения примера в репозитории предполагается наличие формы ввода
 с идентификатором DEF_FORM. В форме ввода добавлена табличная область.
 В табличной области добавлено измерение на базе справочника DICT_FIRMS.
 Для данного справочника создана альтернативная иерархия на базе справочника
 ALT_DICT_FIRMS.


Добавьте ссылки на системные сборки: Dimensions, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    DEF: IDataEntryForm;

	    TArea: IDefTableArea;

	    Dim: IDefDimension;

	Begin

	    Mb := MetabaseClass.Active;

	    // Форма ввода/вывода

	    DEF := New DataEntryForm.CreateByDataEntryForm(Mb.ItemById("DEF_FORM"), True);

	    // Получение измерения

	    TArea := DEF.InputAreas.Item(0) As IDefTableArea;

	    Dim := TArea.DefDimensions.ItemByKey(Mb.GetObjectKeyById("DICT_FIRMS"));

	    // Альтернативная иерархия для измерения

	    Dim.HierarchyTypeSource := AltHierarchySourceEnum.FromDictionary;

	    Dim.HierarchyDictKey := Mb.GetObjectKeyById("ALT_DICT_FIRMS");

	    // Применение изменений

	    DEF.InputAreas.ApplyAreaToReport(TArea.Id);

	    // Сохранение изменений

	    DEF.Save;

	    DEF._Dispose;

	End Sub UserProc;


При выполнении примера будут изменены настройки указанного измерения
 табличной области. Для измерения будет установлена фиксированная альтернативная
 иерархия.


См. также:


[IDefDimension](IDefDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
