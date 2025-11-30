# IBindingValue.ReadOnly

IBindingValue.ReadOnly
-


# IBindingValue.ReadOnly


## Синтаксис


ReadOnly: Boolean;


## Описание


Свойство ReadOnly определяет
 значение параметра «READONLY»
 в [строке связи](IBindingValue.AsString.htm).


## Комментарии


Параметр «READONLY» определяет,
 доступен ли редактор только для чтения. Если параметр имеет значение True, то редактор будет доступен
 только для чтения, иначе нет.


Свойство ReadOnly доступно для
 использования, если свойству [IBindingValue.ReadOnlyDefined](IBindingValue.ReadOnlyDefined.htm)
 установлено значение True. При
 изменении свойства ReadOnly свойству
 [IBindingValue.ReadOnlyDefined](IBindingValue.ReadOnlyDefined.htm)
 автоматически устанавливается значение True.


## Пример


Пример использования приведен в описании свойства [IBindingEditBox.MultiLine](../IBindingEditBox/IBindingEditBox.MultiLine.htm).


См. также:


[IBindingValue](IBindingValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
