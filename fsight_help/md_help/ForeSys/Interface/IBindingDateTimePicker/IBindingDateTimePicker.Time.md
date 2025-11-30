# IBindingDateTimePicker.Time

IBindingDateTimePicker.Time
-


# IBindingDateTimePicker.Time


## Синтаксис


Time: Boolean;


## Описание


Свойство Time определяет значение
 параметра «SHOWTIME» в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «SHOWTIME» определяет
 признак наличия редактора времени. Данный параметр используется при настройке
 редакторов времени и даты/времени. Для редактора времени параметр должен
 иметь значение True. Для редактора
 даты/времени: при установке значения True
 в редакторе будет возможность изменить время; при установке значения False возможности изменить время
 не будет, но время будет отображаться после выхода из редактора.


Свойство Time доступно для использования,
 если свойству [IBindingDateTimePicker.TimeDefined](IBindingDateTimePicker.TimeDefined.htm)
 установлено значение True. При
 изменении свойства Time свойству
 [IBindingDateTimePicker.TimeDefined](IBindingDateTimePicker.TimeDefined.htm)
 автоматически устанавливается значение True.


## Пример


Пример использования приведен в описании свойства [IBindingDateTimePicker.CheckBox](IBindingDateTimePicker.CheckBox.htm).


См. также:


[IBindingDateTimePicker](IBindingDateTimePicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
