# IBindingDimCombo.Group

IBindingDimCombo.Group
-


# IBindingDimCombo.Group


## Синтаксис


Group: String;


## Описание


Свойство Group определяет значение
 параметра «GROUP» в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «GROUP» определяет
 идентификатор группы элементов, которая ограничит элементы, доступные
 в редакторе.


Свойство Group доступно для
 использования, если свойству [IBindingDimCombo.GroupDefined](ibindingdimcombo.groupdefined.htm)
 установлено значение True. При
 изменении свойства Group свойству
 [IBindingDimCombo.GroupDefined](ibindingdimcombo.groupdefined.htm)
 автоматически устанавливается значение True.


## Пример


	Function CreateDimComboBinding(Dimension: IMetabaseObjectDescriptor): String;

	Var

	    BM: IBindingManager;

	    DimChildren: IMetabaseObjectDescriptors;

	    DimModel: IDimensionModel;

	    DimInst: IDimInstance;

	    Selection: IDimSelection;

	    Group: IDimElementGroup;

	    Schema: IDimSelectionSchema;

	    LvlKey, AttrKey: Integer;

	    DimComboBinding: IBindingDimCombo;

	Begin

	    BM := New BindingManager.Create;

	    DimModel := Dimension.Bind As IDimensionModel;

	    DimChildren := Dimension.Children;

	    // Настройка параметров

	    DimComboBinding := BM.CreateByUi("DimCombo") As IBindingDimCombo;

	    // Проверка наличия группы элементов и схемы отметки

	    // Предполагается, что первый дочерний объект - группа элементов,

	    // второй - схема отметки

	    If DimChildren.Count >= 2 Then

	        Group := DimChildren.Item(0).Bind As IDimElementGroup;

	        Schema := DimChildren.Item(1).Bind As IDimSelectionSchema;

	        DimComboBinding.Group := (Group As IMetabaseObject).Id;

	        DimComboBinding.Schema := (Schema As IMetabaseObject).Id;

	        // Формирование значений из наименований

	        DimInst := Dimension.Open(Null) As IDimInstance;

	        Selection := DimInst.CreateSelection;

	        Schema.ProcessInplace(Selection, Group);

	        DimComboBinding.ValueAttribute := "NAME";

	        DimComboBinding.ValueDefined := True;

	        DimComboBinding.Value := Selection.ToString;

	    End If;

	    // Идентификаторы в качестве наименования элементов уровня, если уровень существует

	    If DimModel.Levels.Count >= 1 Then

	        LvlKey := DimModel.Levels.Item(0).Key;

	        AttrKey := DimModel.Attributes.Id.Key;

	        DimComboBinding.LevelAttribute := "0{" + LvlKey.ToString + "*" + AttrKey.ToString + "}";

	    End If;

	    DimComboBinding.Object := Dimension.Id;

	    // Множественная отметка

	    DimComboBinding.SelectionMode := SelectionModeEnum.MultiSelect;

	    // Сортировка

	    DimComboBinding.SortDirection := DimComboSortDirection.Descending;

	    // Шаблон для формирования наименования при множественной отметке

	    DimComboBinding.CustomMultiselectText := "Диапазон: %First-%Last";

	    Return DimComboBinding.AsString;

	End Function CreateDimComboBinding;


Данная функция генерирует строку связи для использования редактора значения
 в виде раскрывающегося списка справочника. В качестве входного параметра
 Dimension передаётся описание справочника. В зависимости от структуры
 справочника в настройках редактора будут заданы: группа элементов и схема
 отметки, формат наименований элементов первого уровня. Значение в ячейке
 будет формироваться с помощью наименований элементов.


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
