# IBindingManager

IBindingManager
-


# IBindingManager


Сборка: System;


## Описание


Интерфейс IBindingManager содержит
 методы для инициализации настроек редакторов значений.


## Иерархия наследования


IBindingManager


## Комментарии


Для настройки нового редактора значений:


	- Используя метод [CreateByUi](IBindingManager.CreateByUi.htm),
	 инициализируйте новый объект.


	- В соответствии с указанными типом редактора приведите объект
	 к соответствующему интерфейсу (список интерфейсов указан ниже).


	- Используя свойства, доступные в соответствующем интерфейсе,
	 укажите настройки редактора.


	- Используя свойство [AsString](../IBindingValue/IBindingValue.AsString.htm),
	 получите строку связи, описывающую редактор значений.


Для изменения настроек существующего редактора
 значений:


	- Имея строку связи редактора и используя метод [CreateByValue](IBindingManager.CreateByValue.htm),
	 инициализируйте объект, который будет содержать настройки редактора.


	- В соответствии с типом редактора приведите полученный объект
	 к соответствующему интерфейсу (список интерфейсов указан ниже).


	- Используя свойства интерфейса, измените настройки редактора.


	- Используя свойство [AsString](../IBindingValue/IBindingValue.AsString.htm),
	 получите новую строку связи, описывающую редактор значений.


Список интерфейсов, описывающих различные редакторы значений:


	- [IBindingCheckBox](../IBindingCheckBox/IBindingCheckBox.htm);


	- [IBindingComboBox](../IBindingComboBox/IBindingComboBox.htm);


	- [IBindingDateTimePicker](../IBindingDateTimePicker/IBindingDateTimePicker.htm);


	- [IBindingDimCombo](../IBindingDimCombo/ibindingdimcombo.htm);


	- [IBindingEditBox](../IBindingEditBox/IBindingEditBox.htm);


	- [IBindingFloatEdit](../IBindingFloatEdit/IBindingFloatEdit.htm);


	- [IBindingIdentEdit](../IBindingIdentEdit/IBindingIdentEdit.htm);


	- [IBindingIntegerEdit](../IBindingIntegerEdit/IBindingIntegerEdit.htm);


	- [IBindingMaskEdit](../IBindingMaskEdit/IBindingMaskEdit.htm);


	- [IBindingTreeCombo](../IBindingTreeCombo/IBindingTreeCombo.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateByUi](IBindingManager.CreateByUi.htm)


		 Метод CreateByUi инициализирует
		 настройки редактора значений по типу редактора.


		 ![](../../Sub_Image.gif)
		 [CreateByValue](IBindingManager.CreateByValue.htm)


		 Метод CreateByValue
		 инициализирует настройки редактора значений по строке связи.


См. также:


[Интерфейсы
 сборки System](../System_interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
