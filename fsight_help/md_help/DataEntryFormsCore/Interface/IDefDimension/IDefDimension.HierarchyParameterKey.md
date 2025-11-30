# IDefDimension.HierarchyParameterKey

IDefDimension.HierarchyParameterKey
-


# IDefDimension.HierarchyParameterKey


## Синтаксис


HierarchyParameterKey: Integer;


## Описание


Свойство HierarchyParameterKey
 определяет ключ параметра, который будет использоваться для выбора альтернативной
 иерархии.


## Комментарии


Актуально, если свойству [HierarchyTypeSource](IDefDimension.HierarchyTypeSource.htm)
 установлено значение [AltHierarchySourceEnum.FromParam](../../Enums/AltHierarchySourceEnum.htm).
 В качестве значения укажите ключ параметра, созданного в форме ввода.
 Параметр должен быть построен на справочнике, в структуре которого имеется
 специальный атрибут. В качестве значений этого атрибута должны храниться
 ключи справочников, на базе которых построены альтернативные иерархии
 для справочника, лежащего в основе текущего измерения.


## Пример


Для выполнения примера в репозитории предполагается наличие формы ввода
 с идентификатором DEF_FORM. В форме ввода добавлена табличная область.
 В табличной области добавлено измерение на базе справочника DICT_FIRMS.
 Для справочника созданы альтернативные иерархии. Также в форме ввода должен
 быть создан параметр, основанный на каком-либо справочнике, имеющем в
 своей структуре атрибут ALT_KEY. В качестве значения этого атрибута должны
 хранится ключи справочников, являющихся альтернативными иерархиями для
 DICT_FIRMS.


Добавьте ссылки на системные сборки: Dimensions, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    DEF: IDataEntryForm;

	    TArea: IDefTableArea;

	    AltParam: IDefParameter;

	    Dim: IDefDimension;

	Begin

	    Mb := MetabaseClass.Active;

	    // Форма ввода/вывода

	    DEF := New DataEntryForm.CreateByDataEntryForm(Mb.ItemById("DEF_FORM"), True);

	    // Параметр для выбора альтернативной иерархии

	    AltParam := DEF.Parameters.Item(0);

	    // Получение измерения

	    TArea := DEF.InputAreas.Item(0) As IDefTableArea;

	    Dim := TArea.DefDimensions.ItemByKey(Mb.GetObjectKeyById("DICT_FIRMS"));

	    // Альтернативная иерархия для измерения

	    Dim.HierarchyTypeSource := AltHierarchySourceEnum.FromParam;

	    Dim.HierarchyParameterKey := AltParam.Key;

	    Dim.HierarchyParameterAttributeKey := AltParam.DimensionInstance.Dimension.Attributes.FindById("ALT_KEY").Key;

	    // Применение изменений

	    DEF.InputAreas.ApplyAreaToReport(TArea.Id);

	    // Сохранение изменений

	    DEF.Save;

	    DEF._Dispose;

	End Sub UserProc;


При выполнении примера будут изменены настройки указанного измерения
 табличной области. Выбор альтернативной иерархии, которая будет отображаться
 в качестве значений элементов измерения, будет осуществляться с помощью
 уже имеющегося в форме ввода параметра.


См. также:


[IDefDimension](IDefDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
