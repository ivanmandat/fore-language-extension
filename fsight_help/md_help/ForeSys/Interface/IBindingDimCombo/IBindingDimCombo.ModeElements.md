# IBindingDimCombo.ModeElements

IBindingDimCombo.ModeElements
-


# IBindingDimCombo.ModeElements


## Синтаксис


ModeElements: Boolean;


## Описание


Свойство ModeElements
 определяет значение параметра «MODEELEMENTS»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «MODEELEMENTS» определяет
 отображение режима отметки «[Только
 по элементам](UiSelection.chm::/Selection/Selection_of_the_CalendarDimension_elements.htm#elements_only)».


При одновременном использовании с параметром «[MODELEVELS](IBindingDimCombo.ModeLevels.htm)»
 будет отображен уровень «[По
 элементам и уровням](UiSelection.chm::/Selection/Selection_of_the_CalendarDimension_elements.htm#elements_and_levels)».


## Пример


Для выполнения примера предполагается наличие календарного справочника
 с идентификатором CALENDAR.


	Function CreateDimComboBidning(Dimension: IMetabaseObjectDescriptor): String;

	Var

	    BM: IBindingManager;

	    DimComboBinding: IBindingDimCombo;

	Begin

	    BM := New BindingManager.Create;

	    DimComboBinding := BM.CreateByUi("DimCombo") As IBindingDimCombo;

	    DimComboBinding.Object := "CALENDAR";

	    DimComboBinding.ModeElementsDefined := True;

	    DimComboBinding.ModeElements := True;

	    Return DimComboBinding.AsString;

	End Function CreateDimComboBidning;


Функция генерирует строку связи для использования редактора значения
 в виде раскрывающегося списка справочника. Редактор будет отображаться
 в режиме отметки «Только по элементам».


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
