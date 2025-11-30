# IBindingMaskEdit.AutoSelect

IBindingMaskEdit.AutoSelect
-


# IBindingMaskEdit.AutoSelect


## Синтаксис


AutoSelect: Boolean;


## Описание


Свойство AutoSelect определяет
 значение параметра «AUTOSELECT»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «AUTOSELECT» определяет
 признак автоматического выделения текста при входе в редактор.


Свойство AutoSelect доступно
 для использования, если свойству [IBindingMaskEdit.AutoSelectDefined](IBindingMaskEdit.AutoSelectDefined.htm)
 установлено значение True. При
 изменении свойства AutoSelect
 свойству [IBindingMaskEdit.AutoSelectDefined](IBindingMaskEdit.AutoSelectDefined.htm)
 автоматически устанавливается значение True.


## Пример


	Function CreateMaskEditBidning: String;

	Var

	    BM: IBindingManager;

	    MaskBoxBinding: IBindingMaskEdit;

	Begin

	    BM := New BindingManager.Create;

	    MaskBoxBinding := BM.CreateByUi("MaskEdit") As IBindingMaskEdit;

	    MaskBoxBinding.AutoSelect := True;

	    MaskBoxBinding.Mask := "           dd dd ddddd";

	    MaskBoxBinding.InputTemplate := "Телефон:8-9__-__-_____";

	    MaskBoxBinding.MaxLength := 22;

	    MaskBoxBinding.Value := "Телефон:8-9";

	    MaskBoxBinding.ValidChars := "012345";

	    Return MaskBoxBinding.AsString;

	End Function CreateMaskEditBidning;


Данная функция генерирует строку связи для использования редактора значений
 по маске. В редакторе будет задана маска для ввода телефонного номера,
 номер может содержать цифры в диапазоне [0, 5].


См. также:


[IBindingMaskEdit](IBindingMaskEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
