# IBindingValue.AsString

IBindingValue.AsString
-


# IBindingValue.AsString


## Синтаксис


AsString: String;


## Описание


Свойство AsString определяет
 параметры редактора значений в виде строки связи.


## Комментарии


Строка связи предназначена для
 указания редактора, который будет использоваться для задания значений.
 Она состоит из определений параметров отображения редакторов. Определения
 представляют собой пару из наименования параметра и его значения в строковом
 виде, разделенные символом «=».
 Определения должны разделяться символом пробела.


Первым параметром в строке связи является параметр «UI»,
 который определяет вид элемента управления, используемого для задания
 значения. Значение данного параметра можно определить в свойстве [UI](IBindingValue.UI.htm).


При получении значения свойства AsString
 будет сформирована строка связи на основании значений свойств, которые
 определяют настройки соответствующего редактора.


При установке значения свойства AsString
 будет осуществлен разбор указанной строки и установка соответствующих
 свойств, отвечающих за настройки редактора значений.


Также для инициализации и настройки редактора значений могут использоваться
 методы [IBindingManager.CreateByUi](../IBindingManager/IBindingManager.CreateByUi.htm),
 [IBindingManager.CreateByValue](../IBindingManager/IBindingManager.CreateByValue.htm).


## Пример


Примеры получения строки связи для различных редакторов приведены в
 описании следующих свойств:


	- [IBindingCheckBox.Caption](../IBindingCheckBox/ibindingcheckbox.caption.htm);


	- [IBindingComboBox.Items](../IBindingComboBox/IBindingComboBox.Items.htm);


	- [IBindingDateTimePicker.CheckBox](../IBindingDateTimePicker/IBindingDateTimePicker.CheckBox.htm);


	- [IBindingDecimalEdit.MaxValue](../IBindingDecimalEdit/IBindingDecimalEdit.MaxValue.htm);


	- [IBindingDecimalSlider.MaxValue](../../../ForeSys/Interface/IBindingDecimalSlider/IBindingDecimalSlider.MaxValue.htm);


	- [IBindingDimCombo.Group](../../../ForeSys/Interface/IBindingDimCombo/ibindingdimcombo.group.htm);


	- [IBindingEditBox.MultiLine](../IBindingEditBox/IBindingEditBox.MultiLine.htm);


	- [IBindingFloatEdit.MaxValue](../IBindingFloatEdit/IBindingFloatEdit.MaxValue.htm);


	- [IBindingFloatSlider.MaxValue](../../../ForeSys/Interface/IBindingFloatSlider/IBindingFloatSlider.MaxValue.htm);


	- [IBindingIdentEdit.AllowDot](../IBindingIdentEdit/IBindingIdentEdit.AllowDot.htm);


	- [IBindingIntegerEdit.MaxValue](../IBindingIntegerEdit/IBindingIntegerEdit.MaxValue.htm);


	- [IBindingIntegerSlider.MaxValue](../../../ForeSys/Interface/IBindingIntegerSlider/IBindingIntegerSlider.MaxValue.htm);


	- [IBindingMaskEdit.AutoSelect](../IBindingMaskEdit/IBindingMaskEdit.AutoSelect.htm);


	- [IBindingTreeCombo.Nodes](../IBindingTreeCombo/IBindingTreeCombo.Nodes.htm).


См. также:


[IBindingValue](IBindingValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
