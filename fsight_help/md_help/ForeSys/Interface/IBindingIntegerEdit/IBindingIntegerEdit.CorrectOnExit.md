# IBindingIntegerEdit.CorrectOnExit

IBindingIntegerEdit.CorrectOnExit
-


# IBindingIntegerEdit.CorrectOnExit


## Синтаксис


CorrectOnExit: Boolean;


## Описание


Свойство CorrectOnExit определяет
 значение параметра «CORRECTONEXIT»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «CORRECTONEXIT» определяет,
 будет ли производиться автоматическая коррекция значения при потере компонентом
 фокуса. Если параметр имеет значение True,
 то при потере редактором фокуса недопустимое значение будет заменено на
 ближайшее допустимое. Если параметру установлено значение False,
 то при потере фокуса недопустимое значение будет заменено на значение,
 установленное в свойстве [IBindingIntegerEdit.Value](IBindingIntegerEdit.Value.htm).
 По умолчанию установлено значение False.


Свойство CorrectOnExit доступно
 для использования, если свойству [IBindingIntegerEdit.CorrectOnExitDefined](IBindingIntegerEdit.CorrectOnExitDefined.htm)
 установлено значение True. При
 изменении свойства CorrectOnExit
 свойству [IBindingIntegerEdit.CorrectOnExitDefined](IBindingIntegerEdit.CorrectOnExitDefined.htm)
 автоматически устанавливается значение True.


## Пример


Пример использования приведен в описании свойства [IBindingIntegerEdit.MaxValue](IBindingIntegerEdit.MaxValue.htm).


См. также:


[IBindingIntegerEdit](IBindingIntegerEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
