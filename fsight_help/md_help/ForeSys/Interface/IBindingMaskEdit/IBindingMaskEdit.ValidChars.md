# IBindingMaskEdit.ValidChars

IBindingMaskEdit.ValidChars
-


# IBindingMaskEdit.ValidChars


## Синтаксис


ValidChars: String;


## Описание


Свойство ValidChars определяет
 значение параметра «VALIDCHARS»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «VALIDCHARS» определяет
 символы, которые можно будет вводить в редакторе. Допустимые символы указываются
 в виде сплошной строки. Символы должны соответствовать установленной [маске](IBindingMaskEdit.Mask.htm) ввода.


Свойство ValidChars доступно
 для использования, если свойству [IBindingMaskEdit.ValidCharsDefined](IBindingMaskEdit.ValidCharsDefined.htm)
 установлено значение True. При
 изменении свойства ValidChars
 свойству [IBindingMaskEdit.ValidCharsDefined](IBindingMaskEdit.ValidCharsDefined.htm)
 автоматически устанавливается значение True.


## Пример


Пример использования приведен в описании свойства [IBindingMaskEdit.AutoSelect](IBindingMaskEdit.AutoSelect.htm).


См. также:


[IBindingMaskEdit](IBindingMaskEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
