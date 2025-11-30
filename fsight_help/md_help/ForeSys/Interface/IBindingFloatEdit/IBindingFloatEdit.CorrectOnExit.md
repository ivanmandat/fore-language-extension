# IBindingFloatEdit.CorrectOnExit

IBindingFloatEdit.CorrectOnExit
-


# IBindingFloatEdit.CorrectOnExit


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
 установленное в свойстве [IBindingFloatEdit.Value](IBindingFloatEdit.Value.htm).
 По умолчанию установлено значение False.


Свойство CorrectOnExit доступно
 для использования, если свойству [IBindingFloatEdit.CorrectOnExitDefined](IBindingFloatEdit.CorrectOnExitDefined.htm)
 установлено значение True. При
 изменении свойства CorrectOnExit
 свойству [IBindingFloatEdit.CorrectOnExitDefined](IBindingFloatEdit.CorrectOnExitDefined.htm)
 автоматически устанавливается значение True.


## Пример


Примеры использования приведены в описании свойства [IBindingFloatEdit.MaxValue](IBindingFloatEdit.MaxValue.htm).


См. также:


[IBindingFloatEdit](IBindingFloatEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
