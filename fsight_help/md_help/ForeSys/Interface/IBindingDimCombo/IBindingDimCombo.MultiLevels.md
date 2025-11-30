# IBindingDimCombo.MultiLevels

IBindingDimCombo.MultiLevels
-


# IBindingDimCombo.MultiLevels


## Синтаксис


MultiLevels: Boolean;


## Описание


Свойство MultiLevels определяет
 значение параметра «MULTILEVELS»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «MULTILEVELS» определяет
 доступность множественной отметки в режиме отображения «[Только
 по уровням](UiSelection.chm::/Selection/Selection_of_the_CalendarDimension_elements.htm#levels_only)».


## Пример


Для выполнения примера предполагается наличие календарного справочника
 с идентификатором CALENDAR.


	Function CreateDimComboBidning: String;

	Var

	    BM: IBindingManager;

	    DimComboBinding: IBindingDimCombo;

	Begin

	    BM := New BindingManager.Create;

	    DimComboBinding := BM.CreateByUi("DimCombo") As IBindingDimCombo;

	    DimComboBinding.Object := "CALENDAR";

	    DimComboBinding.MultiLevelsDefined := True;

	    DimComboBinding.MultiLevels := True;

	    Return DimComboBinding.AsString;

	End Function CreateDimComboBidning;


Функция генерирует строку связи для использования редактора значения
 в виде раскрывающегося списка справочника. В редакторе будет включена
 возможность множественной отметки в режиме отображения «Только
 по уровням».


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
