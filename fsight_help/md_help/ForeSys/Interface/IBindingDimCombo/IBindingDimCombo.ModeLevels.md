# IBindingDimCombo.ModeLevels

IBindingDimCombo.ModeLevels
-


# IBindingDimCombo.ModeLevels


## Синтаксис


ModeLevels: Boolean;


## Описание


Свойство ModeLevels определяет
 значение параметра «MODELEVELS»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «MODELEVELS» определяет
 отображение режима отметки «[Только
 по уровням](UiSelection.chm::/Selection/Selection_of_the_CalendarDimension_elements.htm#levels_only)».


При одновременном использовании с параметром «[MODEELEMENTS](IBindingDimCombo.ModeElements.htm)»
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

	    DimComboBinding.ModeLevelsDefined := True;

	    DimComboBinding.ModeLevels := True;

	    Return DimComboBinding.AsString;

	End Function CreateDimComboBidning;


Функция генерирует строку связи для использования редактора значения
 в виде раскрывающегося списка справочника. Редактор будет отображаться
 в режиме отметки «Только по уровням».


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
