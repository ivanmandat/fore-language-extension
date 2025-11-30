# IBindingFloatEdit.MaxValueDefined

IBindingFloatEdit.MaxValueDefined
-


# IBindingFloatEdit.MaxValueDefined


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
 определяет свойство [IBindingFloatEdit.MaxValue](IBindingFloatEdit.MaxValue.htm).


## Пример


	Sub FloatEditBindingInfo(SourceBinding: String);

	Var

	    BM: IBindingManager;

	    Binding: IBindingValue;

	    FloatEditBinding: IBindingFloatEdit;

	Begin

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByValue(SourceBinding);

	    If Binding.UI = "FloatEdit" Then

	        FloatEditBinding := Binding As IBindingFloatEdit;

	        //Проверка наличия параметра CORRECTONEXIT

	         If FloatEditBinding.CorrectOnExitDefined Then

	            Debug.WriteLine("CORRECTONEXIT: " + FloatEditBinding.CorrectOnExit.ToString);

	         End If;

	         //Проверка наличия параметра MINVAL

	         If FloatEditBinding.MinValueDefined Then

	            Debug.WriteLine("MINVAL: " + FloatEditBinding.MinValue.ToString);

	         End If;

	        //Проверка наличия параметра MAXVAL

	        If FloatEditBinding.MaxValueDefined Then

	            Debug.WriteLine("MAXVAL: " + FloatEditBinding.MaxValue.ToString);

	        End If;

	        //Проверка наличия параметра PRECISION

	        If FloatEditBinding.PrecisionDefined Then

	            Debug.WriteLine("PRECISION: " + FloatEditBinding.Precision.ToString);

	        End If;

	        //Проверка наличия параметра STEP

	        If FloatEditBinding.StepDefined Then

	            Debug.WriteLine("STEP: " + FloatEditBinding.Step_.ToString);

	        End If;

	        //Проверка наличия параметра VALUE

	        If FloatEditBinding.ValueDefined Then

	            Debug.WriteLine("VALUE: " + FloatEditBinding.Value.ToString);

	        End If;

	    End If;

	End Sub FloatEditBindingInfo;


Данная функция осуществляет проверку строки связи, передаваемой в качестве
 входного параметра SourceBinding.
 Если строка связи соответствует редактору вещественных значений, то значения
 параметров, которые для него определены, будут выведены в консоль среды
 разработки.


См. также:


[IBindingFloatEdit](IBindingFloatEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
