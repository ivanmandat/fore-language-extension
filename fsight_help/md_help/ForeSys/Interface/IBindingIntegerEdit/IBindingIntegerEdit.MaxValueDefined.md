# IBindingIntegerEdit.MaxValueDefined

IBindingIntegerEdit.MaxValueDefined
-


# IBindingIntegerEdit.MaxValueDefined


## Синтаксис


MaxValueDefined: Boolean;


## Описание


Свойство MaxValueDefined определяет
 признак наличия параметра «MAXVAL»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Если свойству MaxValueDefined
 установлено значение True, то
 в строке связи, описывающей редактор значения, будет присутствовать параметр
 «MAXVAL». Значение данного параметра
 определяет свойство [IBindingIntegerEdit.MaxValue](IBindingIntegerEdit.MaxValue.htm).


## Пример


	Sub IntegerEditBindingInfo(SourceBinding: String);

	Var

	    BM: IBindingManager;

	    Binding: IBindingValue;

	    IntegerEditBinding: IBindingIntegerEdit;

	Begin

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByValue(SourceBinding);

	    If Binding.UI = "IntegerEdit" Then

	        IntegerEditBinding := Binding As IBindingIntegerEdit;

	        //Проверка наличия параметра ALLOWEMPTY

	        If IntegerEditBinding.MandatoryDefined Then

	            Debug.WriteLine("ALLOWEMPTY: " + IntegerEditBinding.Mandatory.ToString);

	        End If;

	        //Проверка наличия параметра CORRECTONEXIT

	        If IntegerEditBinding.CorrectOnExitDefined Then

	            Debug.WriteLine("CORRECTONEXIT: " + IntegerEditBinding.CorrectOnExit.ToString);

	        End If;

	        //Проверка наличия параметра MINVAL

	        If IntegerEditBinding.MinValueDefined Then

	            Debug.WriteLine("MINVAL: " + IntegerEditBinding.MinValue.ToString);

	        End If;

	        //Проверка наличия параметра MAXVAL

	        If IntegerEditBinding.MaxValueDefined Then

	            Debug.WriteLine("MAXVAL: " + IntegerEditBinding.MaxValue.ToString);

	        End If;

	        //Проверка наличия параметра VALUE

	        If IntegerEditBinding.ValueDefined Then

	            Debug.WriteLine("VALUE: " + IntegerEditBinding.Value.ToString);

	        End If;

	    End If;

	End Sub IntegerEditBindingInfo;


Данная функция осуществляет проверку строки связи, передаваемой в качестве
 входного параметра SourceBinding.
 Если строка связи соответствует редактору целочисленных значений, то значения
 параметров, которые для него определены, будут выведены в консоль среды
 разработки.


См. также:


[IBindingIntegerEdit](IBindingIntegerEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
