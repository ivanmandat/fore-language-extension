# IBindingValue.Mandatory

IBindingValue.Mandatory
-


# IBindingValue.Mandatory


## Синтаксис


Mandatory: Boolean;


## Описание


Свойство Mandatory управляет
 значением параметра «ALLOWEMPTY»
 в [строке связи](IBindingValue.AsString.htm).


## Комментарии


Параметр «ALLOWEMPTY» определяет,
 может ли быть в редакторе установлено пустое значение. Если параметр имеет
 значение True, то в редакторе
 может быть установлено пустое значение, иначе нет. Свойство Mandatory
 работает следующим образом:


	- Если свойству Mandatory
	 установлено значение True,
	 то редактор является обязательным для заполнения. При этом параметру
	 «ALLOWEMPTY» будет установлено
	 значение False;


	- Если свойству Mandatory
	 установлено значение False,
	 то редактор является необязательным для заполнения. При этом параметру
	 «ALLOWEMPTY» будет установлено
	 значение True.


Свойство Mandatory доступно
 для использования, если свойству [IBindingValue.MandatoryDefined](IBindingValue.MandatoryDefined.htm)
 установлено значение True. При
 изменении свойства Mandatory свойству
 [IBindingValue.MandatoryDefined](IBindingValue.MandatoryDefined.htm)
 автоматически устанавливается значение True.


Использование параметра «ALLOWEMPTY»
 доступно для следующих редакторов:


	- [IBindingIntegerEdit](../IBindingIntegerEdit/IBindingIntegerEdit.htm).
	 Редактор целочисленных значений;


	- [IBindingFloatEdit](../IBindingFloatEdit/IBindingFloatEdit.htm).
	 Редактор вещественных значений.


## Пример


Пример использования приведен в описании свойства [IBindingIntegerEdit.MaxValue](../IBindingIntegerEdit/IBindingIntegerEdit.MaxValue.htm).


См. также:


[IBindingValue](IBindingValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
