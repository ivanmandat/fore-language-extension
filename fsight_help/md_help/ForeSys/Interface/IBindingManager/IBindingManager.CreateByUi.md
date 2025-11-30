# IBindingManager.CreateByUi

IBindingManager.CreateByUi
-


# IBindingManager.CreateByUi


## Синтаксис


CreateByUi(UI: String): [IBindingValue](../IBindingValue/IBindingValue.htm);


## Параметры


UI. Тип
 редактора значений.


## Описание


Метод CreateByUi инициализирует
 настройки редактора значений по типу редактора.


## Комментарии


В качестве редакторов значений могут использоваться различные элементы
 управления. Для получения настроек конкретного редактора укажите в качестве
 значения параметра UI одно из
 следующих значений:


		 Наименование элемента управления
		 Краткое описание


		 [BooleanCombo](Control/UI_BooleanCombo.htm)
		 Настройки для комбинированного списка для выбора логического
		 значения.


		 [CheckBox](Control/ui_checkbox.htm)
		 Настройки для [переключателя
		 (флага)](../IBindingCheckBox/IBindingCheckBox.htm).


		 [ComboBox](Control/UI_ComboBox.htm)
		 Настройки для [комбинированного
		 списка](../IBindingComboBox/IBindingComboBox.htm).


		 [DatePicker](Control/UI_DatePicker.htm)
		 Настройки для редактора [даты](../IBindingDateTimePicker/IBindingDateTimePicker.htm).


		 [DateTimePicker](Control/UI_DateTimePicker.htm)
		 Настройки для редактора [времени/даты](../IBindingDateTimePicker/IBindingDateTimePicker.htm).


		 [DecimalEdit](Control/UI_DecimalEdit.htm)
		 Настройки для редактора [вещественных
		 значений высокой точности](../IBindingDecimalEdit/IBindingDecimalEdit.htm).


		 [TimePicker](Control/UI_TimePicker.htm)
		 Настройки для редактора [времени](../IBindingDateTimePicker/IBindingDateTimePicker.htm).


		 [DimCombo](Control/UI_DimCombo.htm)
		 Настройки для [раскрывающегося
		 списка справочника](../IBindingDimCombo/ibindingdimcombo.htm).


		 [EditBox](Control/ui_editbox.htm)
		 Настройки для редактора [текста](../IBindingEditBox/IBindingEditBox.htm).


		 [FloatEdit](Control/UI_FloatEdit.htm)
		 Настройки для редактора [вещественных
		 значений](../IBindingFloatEdit/IBindingFloatEdit.htm).


		 [IdentEdit](Control/ui_IdentEdit.htm)
		 Настройки для редактора [идентификаторов](../IBindingIdentEdit/IBindingIdentEdit.htm).


		 [IntegerEdit](Control/UI_IntegerEdit.htm)
		 Настройки для редактора [целочисленных
		 значений](../IBindingIntegerEdit/IBindingIntegerEdit.htm).


		 [MaskEdit](Control/UI_MaskEdit.htm)
		 Настройки для редактора [строковых
		 значений по маске](../IBindingMaskEdit/IBindingMaskEdit.htm).


		 [TreeCombo](Control/UI_TreeCombo.htm)
		 Настройки для [комбинированного
		 дерева](../IBindingTreeCombo/IBindingTreeCombo.htm).


Для дальнейшей работы с настройками редактора, приведите результат выполнения
 метода к соответствующему интерфейсу, который отвечает за выбранный тип
 редактора.


## Пример


Параметры отображения для различных элементов управления, а также примеры
 и особенности их использования можно посмотреть при выборе ссылки на конкретный
 элемент управления в таблице выше.


См. также:


[IBindingManager](IBindingManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
