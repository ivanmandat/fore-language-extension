# IBindingDecimalEdit.MaxValueDefined

IBindingDecimalEdit.MaxValueDefined
-


# IBindingDecimalEdit.MaxValueDefined


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
 определяет свойство [IBindingDecimalEdit.MaxValue](IBindingDecimalEdit.MaxValue.htm).


## Пример


	Sub DecimalEditBindingInfo(SourceBinding: String);

	Var

	    BM: IBindingManager;

	    Binding: IBindingValue;

	    DecimalEditBinding: IBindingDecimalEdit;

	Begin

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByValue(SourceBinding);

	    If Binding.UI = "DecimalEdit" Then

	        DecimalEditBinding := Binding As IBindingDecimalEdit;

	        //Проверка наличия параметра CORRECTONEXIT

	        If DecimalEditBinding.CorrectOnExitDefined Then

	            Debug.WriteLine("CORRECTONEXIT: " + DecimalEditBinding.CorrectOnExit.ToString);

	        End If;

	        //Проверка наличия параметра MINVAL

	        If DecimalEditBinding.MinValueDefined Then

	            Debug.WriteLine("MINVAL: " + DecimalEditBinding.MinValue.ToString);

	        End If;

	        //Проверка наличия параметра MAXVAL

	        If DecimalEditBinding.MaxValueDefined Then

	            Debug.WriteLine("MAXVAL: " + DecimalEditBinding.MaxValue.ToString);

	        End If;

	        //Проверка наличия параметра PRECISION

	        If DecimalEditBinding.PrecisionDefined Then

	            Debug.WriteLine("PRECISION: " + DecimalEditBinding.Precision.ToString);

	        End If;

	        //Проверка наличия параметра STEP

	        If DecimalEditBinding.StepDefined Then

	            Debug.WriteLine("STEP: " + DecimalEditBinding.Step_.ToString);

	        End If;

	        //Проверка наличия параметра VALUE

	        If DecimalEditBinding.ValueDefined Then

	            Debug.WriteLine("VALUE: " + DecimalEditBinding.Value.ToString);

	        End If;

	    End If;

	End Sub DecimalEditBindingInfo;


Данная функция осуществляет проверку строки связи, передаваемой в качестве
 входного параметра SourceBinding.
 Если строка связи соответствует редактору вещественных значений высокой
 точности, то значения параметров, которые для него определены, будут выведены
 в консоль среды разработки.


См. также:


[IBindingDecimalEdit](IBindingDecimalEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
