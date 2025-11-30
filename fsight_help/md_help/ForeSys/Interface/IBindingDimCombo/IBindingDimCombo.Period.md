# IBindingDimCombo.Period

IBindingDimCombo.Period
-


# IBindingDimCombo.Period


## Синтаксис


Period: Boolean;


## Описание


Свойство Period определяет значение
 параметра «PERIOD» в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «PERIOD» определяет
 отображение меню «Диапазон» для
 задания границ периода в режиме отметки «[Только
 по уровням](UiSelection.chm::/Selection/Selection_of_the_CalendarDimension_elements.htm#levels_only)».


## Пример


Для выполнения примера предполагается наличие календарного справочника
 с идентификатором CALENDAR.


	Function CreateDimComboBinding: String;

	Var

	    BM: IBindingManager;

	    DimComboBinding: IBindingDimCombo;

	Begin

	    BM := New BindingManager.Create;

	    DimComboBinding := BM.CreateByUi("DimCombo") As IBindingDimCombo;

	    DimComboBinding.Object := "CALENDAR";

	    DimComboBinding.PeriodDefined := True;

	    DimComboBinding.Period := True;

	    Return DimComboBinding.AsString;

	End Function CreateDimComboBinding;


Функция генерирует строку связи для использования редактора значения
 в виде раскрывающегося списка справочника. В редакторе будет отображено
 меню «Диапазон» для задания границ
 периода в режиме отметки «Только по уровням».


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
