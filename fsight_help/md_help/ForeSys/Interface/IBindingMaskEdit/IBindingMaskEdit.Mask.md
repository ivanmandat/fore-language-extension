# IBindingMaskEdit.Mask

IBindingMaskEdit.Mask
-


# IBindingMaskEdit.Mask


## Синтаксис


Mask: String;


## Описание


Свойство Mask определяет значение
 параметра «MASK» в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «MASK» определяет маску
 ввода. В маске используйте пробелы и следующие символы: а/А - возможен
 ввод букв и цифр; d/D - возможен ввод только цифр; c/C - возможен ввод
 только букв. Символы должны быть указаны в тех позициях, в которых в [шаблоне](IBindingMaskEdit.InputTemplate.htm) указан символ
 «_».


Свойство Mask доступно для использования,
 если свойству [IBindingMaskEdit.MaskDefined](IBindingMaskEdit.MaskDefined.htm)
 установлено значение True. При
 изменении свойства Mask свойству
 [IBindingMaskEdit.MaskDefined](IBindingMaskEdit.MaskDefined.htm)
 автоматически устанавливается значение True.


## Пример


Пример использования приведен в описании свойства [IBindingMaskEdit.AutoSelect](IBindingMaskEdit.AutoSelect.htm).


См. также:


[IBindingMaskEdit](IBindingMaskEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
