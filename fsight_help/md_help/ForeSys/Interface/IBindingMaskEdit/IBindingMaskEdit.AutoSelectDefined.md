# IBindingMaskEdit.AutoSelectDefined

IBindingMaskEdit.AutoSelectDefined
-


# IBindingMaskEdit.AutoSelectDefined


## Синтаксис


AutoSelectDefined: Boolean;


## Описание


Свойство AutoSelectDefined определяет
 признак наличия параметра «AUTOSELECT»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Если свойству AutoSelectDefined
 установлено значение True, то
 в строке связи, описывающей редактор значения, будет присутствовать параметр
 «AUTOSELECT». Значение данного
 параметра определяет свойство [IBindingMaskEdit.AutoSelect](IBindingMaskEdit.AutoSelect.htm).


## Пример


	Sub MaskEditBindingInfo(SourceBinding: String);

	Var

	    BM: IBindingManager;

	    Binding: IBindingValue;

	    MaskBoxBinding: IBindingMaskEdit;

	Begin

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByValue(SourceBinding);

	    If Binding.UI = "MaskEdit" Then

	        MaskBoxBinding := Binding As IBindingMaskEdit;

	        //Проверка наличия параметра AUTOSELECT

	        If MaskBoxBinding.AutoSelectDefined Then

	            Debug.WriteLine("AUTOSELECT: " + MaskBoxBinding.AutoSelect.ToString);

	        End If;

	        //Проверка наличия параметра INPUTTEMPLATE

	        If MaskBoxBinding.InputTemplateDefined Then

	            Debug.WriteLine("INPUTTEMPLATE: " + MaskBoxBinding.InputTemplate);

	        End If;

	        //Проверка наличия параметра MASK

	        If MaskBoxBinding.MaskDefined Then

	            Debug.WriteLine("MASK: " + MaskBoxBinding.Mask);

	        End If;

	        //Проверка наличия параметра MAXLENGTH

	        If MaskBoxBinding.MaxLengthDefined Then

	            Debug.WriteLine("MAXLENGTH: " + MaskBoxBinding.MaxLength.ToString);

	        End If;

	        //Проверка наличия параметра VALIDCHARS

	        If MaskBoxBinding.ValidCharsDefined Then

	            Debug.WriteLine("VALIDCHARS: " + MaskBoxBinding.ValidChars);

	        End If;

	    End If;

	End Sub MaskEditBindingInfo;


Данная функция осуществляет проверку строки связи, передаваемой в качестве
 входного параметра SourceBinding.
 Если строка связи соответствует редактору значений по маске, то значения
 параметров, которые для него определены, будут выведены в консоль среды
 разработки.


См. также:


[IBindingMaskEdit](IBindingMaskEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
