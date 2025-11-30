# IBindingComboBox.ListMode

IBindingComboBox.ListMode
-


# IBindingComboBox.ListMode


## Синтаксис


ListMode: Boolean;


## Описание


Свойство ListMode определяет
 значение параметра «LISTMODE»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «LISTMODE» определяет
 признак возможности ввода значения в редакторе с клавиатуры. Если параметр
 имеет значение True, то значение
 в редакторе можно будет выбрать только из списка [IBindingComboBox.Items](IBindingComboBox.Items.htm),
 иначе значение в редакторе можно будет ввести с клавиатуры.


Свойство ListMode доступно для
 использования, если свойству [IBindingComboBox.ListModeDefined](IBindingComboBox.ListModeDefined.htm)
 установлено значение True. При
 изменении свойства ListMode свойству
 [IBindingComboBox.ListModeDefined](IBindingComboBox.ListModeDefined.htm)
 автоматически устанавливается значение True.


## Пример


Пример использования приведен
 в описании свойства [IBindingComboBox.Items](IBindingComboBox.Items.htm).


См. также:


[IBindingComboBox](IBindingComboBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
