# IBindingIdentEdit.AllowDotDefined

IBindingIdentEdit.AllowDotDefined
-


# IBindingIdentEdit.AllowDotDefined


## Синтаксис


AllowDotDefined: Boolean;


## Описание


Свойство AllowDotDefined определяет
 признак наличия параметра «ALLOWDOT»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Если свойству AllowDotDefined
 установлено значение True, то
 в строке связи, описывающей редактор значения, будет присутствовать параметр
 «ALLOWDOT». Значение данного параметра
 определяет свойство [IBindingIdentEdit.AllowDot](IBindingIdentEdit.AllowDot.htm).


## Пример


	Sub IdentEditBindingInfo(SourceBinding: String);

	Var

	    BM: IBindingManager;

	    Binding: IBindingValue;

	    IdentEditBinding: IBindingIdentEdit;

	Begin

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByValue(SourceBinding);

	    If Binding.UI = "IdentEdit" Then

	        IdentEditBinding := Binding As IBindingIdentEdit;

	        //Проверка наличия параметра ALLOWDOT

	        If IdentEditBinding.AllowDotDefined Then

	            Debug.WriteLine("ALLOWDOT: " + IdentEditBinding.AllowDot.ToString);

	        End If;

	        //Проверка наличия параметра VALUE

	        If IdentEditBinding.ValueDefined Then

	            Debug.WriteLine("VALUE: " + IdentEditBinding.Value);

	        End If;

	    End If;

	End Sub IdentEditBindingInfo;


Данная функция осуществляет проверку строки связи, передаваемой в качестве
 входного параметра SourceBinding.
 Если строка связи соответствует редактору идентификаторов, то значения
 параметров, которые для него определены, будут выведены в консоль среды
 разработки.


См. также:


[IBindingIdentEdit](IBindingIdentEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
