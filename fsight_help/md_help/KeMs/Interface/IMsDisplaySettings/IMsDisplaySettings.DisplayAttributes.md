# IMsDisplaySettings.DisplayAttributes

IMsDisplaySettings.DisplayAttributes
-


# IMsDisplaySettings.DisplayAttributes


## Синтаксис


		DisplayAttributes: [IMsDisplayAttributeSettingsList](../IMsDisplayAttributeSettingsList/IMsDisplayAttributeSettingsList.htm);


## Описание


Свойство DisplayAttributes
 возвращает коллекцию настроек отображения атрибутов в строковом представлении
 элементов выражения.


## Комментарии


Строковое представление элементов выражения используется, например,
 при отображении наименований факторов и выражения для расчета детерминированного
 уравнения.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащим модель детерминированного
 уравнения с идентификатором MODEL_DISPLAY.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MSKey: Integer;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Sett: IMsDisplaySettings;

		    AttributeSett: IMsDisplayAttributeSettingsList;

		    OutVar: IMsFormulaTransformVariable;

		    SelSet: IDimSelectionSet;

		    Dim: IDimensionModel;

		    Attr: IMsDisplayAttributeSettings;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MSKey := mb.GetObjectKeyById("MS");

		    // Получаем модель

		    Model := mb.ItemByIdNamespace("MODEL_DISPLAY", MSKey).Edit As IMsModel;

		    // Получаем параметры модели

		    Transform := Model.Transform;

		    // Получаем параметры отображения модели

		    Sett := Transform.DisplaySettings;

		    // Задаем режим отображения родительского элемента для элемента выражения

		    Sett.DisplayParentAs := MsDisplayParent.Id;

		    // Получаем коллекцию настроек атрибутов, отображаемых в строковом представлении элемента выражения

		    AttributeSett := Sett.DisplayAttributes;

		    // Очищаем коллекцию

		    AttributeSett.Clear;

		    // Получаем моделируемую переменную

		    OutVar := Transform.Outputs.Item(0);

		    // Получаем отметку измерений моделируемой переменной

		    SelSet := OutVar.Slices.Item(0).Selection;

		    // Получаем первое измерение моделируемой переменной

		    Dim := SelSet.Item(0).Dimension.Dimension;

		    // Добавляем настройку, основанную на полученном измерении

		    Attr := AttributeSett.Add(Dim);

		    // Указываем, что в элементе выражения будет отображаться значение атрибута «KEY»

		    Attr.AttributeId := "KEY";

		    // Выводим наименование измерения в окно консоли

		    Debug.WriteLine((Attr.Dimension As IMetabaseObject).Name);

		    // Сохраняем изменения

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для факторов и элементов выражения в
 уравнении модели будут отображаться идентификатор родительского элемента
 и ключ первого измерения.


См. также:


[IMsDisplayAttributeSettings](../IMsDisplayAttributeSettings/IMsDisplayAttributeSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
