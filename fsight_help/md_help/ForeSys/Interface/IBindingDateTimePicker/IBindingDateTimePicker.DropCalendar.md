# IBindingDateTimePicker.DropCalendar

IBindingDateTimePicker.DropCalendar
-


# IBindingDateTimePicker.DropCalendar


## Синтаксис


DropCalendar: Boolean;


## Описание


Свойство DropCalendar определяет
 значение параметра «DROPCALENDAR»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Если параметр «DROPCALENDAR»
 имеет значение True, то справа
 от редактора будет расположена кнопка для вызова раскрывающегося календаря.
 При значении False изменение даты
 будет возможно путем ввода значений вручную, либо с помощью [стрелок](IBindingDateTimePicker.Spin.htm),
 если они доступны.


Свойство DropCalendar доступно
 для использования, если свойству [IBindingDateTimePicker.DropCalendarDefined](IBindingDateTimePicker.DropCalendarDefined.htm)
 установлено значение True. При
 изменении свойства DropCalendar
 свойству [IBindingDateTimePicker.DropCalendarDefined](IBindingDateTimePicker.DropCalendarDefined.htm)
 автоматически устанавливается значение True.


## Пример


Пример использования приведен в описании свойства [IBindingDateTimePicker.CheckBox](IBindingDateTimePicker.CheckBox.htm).


См. также:


[IBindingDateTimePicker](IBindingDateTimePicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
