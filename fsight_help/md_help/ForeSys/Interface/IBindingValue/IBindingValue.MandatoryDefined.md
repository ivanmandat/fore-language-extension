# IBindingValue.MandatoryDefined

IBindingValue.MandatoryDefined
-


# IBindingValue.MandatoryDefined


## Синтаксис


MandatoryDefined: Boolean;


## Описание


Свойство MandatoryDefined определяет
 признак наличия параметра «ALLOWEMPTY»
 в [строке связи](IBindingValue.AsString.htm).


## Комментарии


Если свойству MandatoryDefined
 установлено значение True, то
 в [строке связи](IBindingValue.AsString.htm), описывающей редактор
 значения, будет присутствовать параметр «ALLOWEMPTY».
 Значение данного параметра определяет свойство [IBindingValue.Mandatory](IBindingValue.Mandatory.htm).


Использование параметра «ALLOWEMPTY»
 доступно для следующих редакторов:


	- [IBindingIntegerEdit](../IBindingIntegerEdit/IBindingIntegerEdit.htm).
	 Редактор целочисленных значений;


	- [IBindingFloatEdit](../IBindingFloatEdit/IBindingFloatEdit.htm).
	 Редактор вещественных значений.


## Пример


Пример использования приведен в описании свойства [IBindingIntegerEdit.MaxValueDefined](../IBindingIntegerEdit/IBindingIntegerEdit.MaxValueDefined.htm).


См. также:


[IBindingValue](IBindingValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
