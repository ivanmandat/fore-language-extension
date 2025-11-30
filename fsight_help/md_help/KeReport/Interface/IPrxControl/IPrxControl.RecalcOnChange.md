# IPrxControl.RecalcOnChange

IPrxControl.RecalcOnChange
-


# IPrxControl.RecalcOnChange


## Синтаксис


RecalcOnChange: Boolean;


## Описание


Свойство RecalcOnChange определяет,
 будет ли генерироваться событие [OnChangeControlValue](../../Class/UiReport/UiReport.OnChangeControlValue.htm)
 после каждого изменения значения в элементах управления, требующих ручного
 ввода значений, без потери фокуса элементом управления.


## Комментарии


Свойство актуально для элементов управления следующих типов:


	- [MaskEdit](ForeSys.chm::/Interface/IBindingManager/Control/UI_MaskEdit.htm)
	 - «Поле ввода строковых значений с маской»;


	- [DecimalEdit](ForeSys.chm::/Interface/IBindingManager/Control/UI_DecimalEdit.htm)
	 - «Редактор десятичных значений»;


	- [FloatEdit](ForeSys.chm::/Interface/IBindingManager/Control/UI_FloatEdit.htm) -
	 «Редактор вещественных значений»;


	- [IntegerEdit](ForeSys.chm::/Interface/IBindingManager/Control/UI_IntegerEdit.htm) -
	 «Редактор целых значений»;


	- [EditBox](ForeSys.chm::/Interface/IBindingManager/Control/UI_EditBox.htm) -
	 «Поле ввода строковых значений»;


	- [IdentEdit](ForeSys.chm::/Interface/IBindingManager/Control/ui_IdentEdit.htm) -
	 «Редактор идентификаторов».


При установке свойствам [AutoRecalc](IPrxControl.AutoRecalc.htm)
 и RecalcOnChange значения True перевычисление отчета будет
 происходить при любой смене значения в элементе управления, при этом нет
 необходимости снимать фокус с соответствующего элемента управления.


См. также:


[IPrxControl](IPrxControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
