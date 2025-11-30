# IBindingValue.ReadOnlyDefined

IBindingValue.ReadOnlyDefined
-


# IBindingValue.ReadOnlyDefined


## Синтаксис


ReadOnlyDefined: Boolean;


## Описание


Свойство ReadOnlyDefined определяет
 признак наличия параметра «READONLY»
 в [строке связи](IBindingValue.AsString.htm).


## Комментарии


Если свойству ReadOnlyDefined
 установлено значение True, то
 в [строке связи](IBindingValue.AsString.htm), описывающей редактор
 значения, будет присутствовать параметр «READONLY».
 Значение данного параметра определяет свойство [IBindingValue.ReadOnly](IBindingValue.ReadOnly.htm).


Использование параметра «READONLY»
 доступно для следующих редакторов:


	- [IBindingEditBox](../IBindingEditBox/IBindingEditBox.htm).
	 Редактор строковых значений;


	- [IBindingMaskEdit](../IBindingMaskEdit/IBindingMaskEdit.htm).
	 Редактор строковых значений по маске.


## Пример


Пример использования приведен в описании свойства [IBindingEditBox.MultiLineDefined](../IBindingEditBox/IBindingEditBox.MultiLineDefined.htm).


См. также:


[IBindingValue](IBindingValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
