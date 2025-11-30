# IBindingCheckBox.CaptionDefined

IBindingCheckBox.CaptionDefined
-


# IBindingCheckBox.CaptionDefined


## Синтаксис


CaptionDefined: Boolean;


## Описание


Свойство CaptionDefined определяет
 признак наличия параметра «TEXT»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Если свойству CaptionDefined
 установлено значение True, то
 в строке связи, описывающей редактор значения, будет присутствовать параметр
 «TEXT». Значение данного параметра
 определяет свойство [IBindingCheckBox.Caption](ibindingcheckbox.caption.htm).


## Пример


	Sub CheckBoxBindingInfo(SourceBinding: String);

	Var

	    BM: IBindingManager;

	    Binding: IBindingValue;

	    CheckBoxBinding: IBindingCheckBox;

	Begin

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByValue(SourceBinding);

	    If Binding.UI = "CheckBox" Then

	        CheckBoxBinding := Binding As IBindingCheckBox;

	        //Проверка наличия параметра ALIGN

	        If CheckBoxBinding.AlignDefined Then

	            Debug.WriteLine("ALIGN: " + CheckBoxBinding.Align.ToString);

	        End If;

	        //Проверка наличия параметра TEXT

	        If CheckBoxBinding.CaptionDefined Then

	            Debug.WriteLine("TEXT: " + CheckBoxBinding.Caption);

	        End If;

	        //Проверка наличия параметра VALUE

	        If CheckBoxBinding.ValueDefined Then

	            Debug.WriteLine("VALUE: " + CheckBoxBinding.Value.ToString);

	        End If;

	    End If;

	End Sub CheckBoxBindingInfo;


Данная функция осуществляет проверку строки связи, передаваемой в качестве
 входного параметра SourceBinding. Если строка связи соответствует редактору
 в виде переключателя, то значения параметров, которые для него определены,
 будут выведены в консоль среды разработки.


См. также:


[IBindingCheckBox](IBindingCheckBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
