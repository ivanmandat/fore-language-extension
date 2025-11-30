# IBindingDateTimePicker

IBindingDateTimePicker
-


# IBindingDateTimePicker


Сборка: System;


## Описание


Интерфейс IBindingDateTimePicker
 содержит свойства для определения параметров редактора значения - Редактор
 даты/времени.


## Иерархия наследования


           [IBindingValue](../IBindingValue/IBindingValue.htm)


           IBindingDateTimePicker


## Комментарии


Данный интерфейс позволяет настроить параметры трех редакторов:


	- Редактор даты и времени (DateTimePicker);


	- Редактор даты (DatePicker);


	- Редактор времени (TimePicker);


Для редактора даты свойства [Time](IBindingDateTimePicker.Time.htm)
 и [TimeDefined](IBindingDateTimePicker.TimeDefined.htm) должны
 иметь значение False, а для редактора
 времени наоборот - True. Остальные
 свойства поддерживаются всеми редакторами.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CheckBox](IBindingDateTimePicker.CheckBox.htm)
		 Свойство CheckBox определяет
		 значение параметра «CHECKBOX»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [CheckBoxDefined](IBindingDateTimePicker.CheckBoxDefined.htm)
		 Свойство CheckBoxDefined
		 определяет признак наличия параметра «CHECKBOX»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [CheckBoxFocus](IBindingDateTimePicker.CheckBoxFocus.htm)
		 Свойство CheckBoxFocus
		 определяет значение параметра «SET_FOCUS_ON_CHECK_BOX»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [CheckBoxFocusDefined](IBindingDateTimePicker.CheckBoxFocusDefined.htm)
		 Свойство CheckBoxFocusDefined
		 определяет признак наличия параметра «SET_FOCUS_ON_CHECK_BOX»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [DropCalendar](IBindingDateTimePicker.DropCalendar.htm)
		 Свойство DropCalendar
		 определяет значение параметра «DROPCALENDAR»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [DropCalendarDefined](IBindingDateTimePicker.DropCalendarDefined.htm)
		 Свойство DropCalendarDefined
		 определяет признак наличия параметра «DROPCALENDAR»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [MaxValue](IBindingDateTimePicker.MaxValue.htm)
		 Свойство MaxValue определяет
		 значение параметра «MAXVAL»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [MaxValueDefined](IBindingDateTimePicker.MaxValueDefined.htm)
		 Свойство MaxValueDefined
		 определяет признак наличия параметра «MAXVAL»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [MinValue](IBindingDateTimePicker.MinValue.htm)
		 Свойство MinValue определяет
		 значение параметра «MINVAL»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [MinValueDefined](IBindingDateTimePicker.MinValueDefined.htm)
		 Свойство MinValueDefined
		 определяет признак наличия параметра «MINVAL»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [Spin](IBindingDateTimePicker.Spin.htm)
		 Свойство Spin определяет
		 значение параметра «SPIN»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [SpinDefined](IBindingDateTimePicker.SpinDefined.htm)
		 Свойство SpinDefined
		 определяет признак наличия параметра «SPIN»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [Time](IBindingDateTimePicker.Time.htm)
		 Свойство Time определяет
		 значение параметра «SHOWTIME»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [TimeDefined](IBindingDateTimePicker.TimeDefined.htm)
		 Свойство TimeDefined
		 определяет признак наличия параметра «SHOWTIME»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [Value](IBindingDateTimePicker.Value.htm)
		 Свойство Value определяет
		 значение параметра «VALUE»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [ValueDefined](IBindingDateTimePicker.ValueDefined.htm)
		 Свойство ValueDefined
		 определяет признак наличия параметра «VALUE»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


## Свойства, унаследованные от [IBindingValue](../IBindingValue/IBindingValue.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [MaxLength](../IBindingString/IBindingString.MaxLength.htm)


		 Свойство MaxLength
		 определяет значение параметра «MAXLENGTH»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [MaxLengthDefined](../IBindingString/IBindingString.MaxLengthDefined.htm)


		 Свойство MaxLengthDefined
		 определяет признак наличия параметра «MAXLENGTH»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [Value](../IBindingString/IBindingString.Value.htm)


		 Свойство Value определяет значение параметра «VALUE»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


		 ![](../../Property_Image.gif)
		 [ValueDefined](../IBindingString/IBindingString.ValueDefined.htm)


		 Свойство ValueDefined определяет
		 признак наличия параметра «VALUE»
		 в [строке
		 связи](../IBindingValue/IBindingValue.AsString.htm).


См. также:


[Интерфейсы
 сборки System](../System_interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
