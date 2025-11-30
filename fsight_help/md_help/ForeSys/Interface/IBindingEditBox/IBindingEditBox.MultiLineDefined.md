# IBindingEditBox.MultiLineDefined

IBindingEditBox.MultiLineDefined
-


# IBindingEditBox.MultiLineDefined


## Синтаксис


MultiLineDefined: Boolean;


## Описание


Свойство MultiLineDefined определяет
 признак наличия параметра «MULTILINE»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Если свойству MultiLineDefined
 установлено значение True, то
 в строке связи, описывающей редактор значения, будет присутствовать параметр
 «MULTILINE». Значение данного
 параметра определяет свойство [IBindingEditBox.MultiLine](IBindingEditBox.MultiLine.htm).


## Пример


	Sub EditBoxBindingInfo(SourceBinding: String);

	Var

	    BM: IBindingManager;

	    Binding: IBindingValue;

	    EditBoxBinding: IBindingEditBox;

	Begin

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByValue(SourceBinding);

	    If Binding.UI = "EditBox" Then

	        EditBoxBinding := Binding As IBindingEditBox;

	        //Проверка наличия параметра MAXLENGTH

	        If EditBoxBinding.MaxLengthDefined Then

	            Debug.WriteLine("MAXLENGTH: " + EditBoxBinding.MaxLength.ToString);

	        End If;

	        //Проверка наличия параметра MULTILINE

	        If EditBoxBinding.MultiLineDefined Then

	            Debug.WriteLine("MULTILINE: " + EditBoxBinding.MultiLine.ToString);

	        End If;

	        //Проверка наличия параметра READONLY

	        If EditBoxBinding.ReadOnlyDefined Then

	            Debug.WriteLine("READONLY: " + EditBoxBinding.ReadOnly.ToString);

	        End If;

	        //Проверка наличия параметра VALUE

	        If EditBoxBinding.ValueDefined Then

	            Debug.WriteLine("VALUE: " + EditBoxBinding.Value);

	        End If;

	    End If;

	End Sub EditBoxBindingInfo;


Данная функция осуществляет проверку строки связи, передаваемой в качестве
 входного параметра SourceBinding.
 Если строка связи соответствует редактору строковых значений, то значения
 параметров, которые для него определены, будут выведены в консоль среды
 разработки.


См. также:


[IBindingEditBox](IBindingEditBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
