# IBindingValue

IBindingValue
-


# IBindingValue


Сборка: System;


## Описание


Интерфейс IBindingValue содержит
 свойства для определения базовых параметров редакторов значений.


## Иерархия наследования


IBindingValue


## Комментарии


Интерфейс является базовым для интерфейсов:


	- [IBindingCheckBox](../IBindingCheckBox/IBindingCheckBox.htm);


	- [IBindingDateTimePicker](../IBindingDateTimePicker/IBindingDateTimePicker.htm);


	- [IBindingDecimalEdit](../IBindingDecimalEdit/IBindingDecimalEdit.htm);


	- [IBindingDecimalSlider](../IBindingDecimalSlider/IBindingDecimalSlider.htm);


	- [IBindingDimCombo](../IBindingDimCombo/ibindingdimcombo.htm);


	- [IBindingFloatEdit](../IBindingFloatEdit/IBindingFloatEdit.htm);


	- [IBindingFloatSlider](../../../ForeSys/Interface/IBindingFloatSlider/IBindingFloatSlider.htm);


	- [IBindingIntegerEdit](../IBindingIntegerEdit/IBindingIntegerEdit.htm);


	- [IBindingIntegerSlider](../../../ForeSys/Interface/IBindingIntegerSlider/IBindingIntegerSlider.htm);


	- [IBindingSlider](../../../ForeSys/Interface/IBindingSlider/IBindingSlider.htm);


	- [IBindingString](../IBindingString/IBindingString.htm).


Редакторы значений используются для удобного ввода/выбора значений [элементов управления](UiReport.chm::/desktop/source/controls.htm)
 и [ячеек
 регламентного отчета](UiReport.chm::/Desktop/Table/Attribute/UiReport_Table_Attribute.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AsString](IBindingValue.AsString.htm)
		 Свойство AsString определяет
		 параметры редактора значений в виде строки связи.


		 ![](../../Property_Image.gif)
		 [Mandatory](IBindingValue.Mandatory.htm)
		 Свойство Mandatory
		 управляет значением параметра «ALLOWEMPTY»
		 в [строке
		 связи](IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [MandatoryDefined](IBindingValue.MandatoryDefined.htm)
		 Свойство MandatoryDefined
		 определяет признак наличия параметра «ALLOWEMPTY»
		 в [строке
		 связи](IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [ReadOnly](IBindingValue.ReadOnly.htm)
		 Свойство ReadOnly определяет
		 значение параметра «READONLY»
		 в [строке
		 связи](IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [ReadOnlyDefined](IBindingValue.ReadOnlyDefined.htm)
		 Свойство ReadOnlyDefined определяет
		 признак наличия параметра «READONLY»
		 в [строке
		 связи](IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [UI](IBindingValue.UI.htm)
		 Свойство UI возвращает
		 тип редактора значений.


См. также:


[Интерфейсы
 сборки System](../System_interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
