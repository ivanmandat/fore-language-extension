# IBindingDecimalSlider.MaxValueDefined

IBindingDecimalSlider.MaxValueDefined
-


# IBindingDecimalSlider.MaxValueDefined


## Синтаксис


MaxValueDefined: Boolean;


## Описание


Свойство MaxValueDefined определяет,
 присутствует ли в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm) параметр «MAXVAL».


## Комментарии


Допустимые значения:


	- True. В строке связи
	 присутствует параметр «MAXVAL».
	 Для задания значения данного параметра используйте свойство [IBindingDecimalSlider.MaxValue](IBindingDecimalSlider.MaxValue.htm);


	- False. В строке связи
	 отсутствует параметр «MAXVAL».


## Пример


Данная процедура выполняет проверку строки связи, переданной в качестве
 входного параметра SourceBinding.


	Sub DecimalSliderBindingInfo(SourceBinding: String);

	Var

	    BM: IBindingManager;

	    Binding: IBindingValue;

	    DecimalSlider: IBindingDecimalSlider;

	Begin

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByValue(SourceBinding);

	    If Binding.UI = "DecimalSlider" Then

	        DecimalSlider := Binding As IBindingDecimalSlider;

	        //Проверка наличия параметра VALUE

	        If DecimalSlider.ValueDefined Then

	            Debug.WriteLine("Значение по умолчанию (VALUE): " + DecimalSlider.Value.ToString);

	        End If;

	        //Проверка наличия параметра MINVAL

	        If DecimalSlider.MinValueDefined Then

	            Debug.WriteLine("Минимальное значение (MINVAL): " + DecimalSlider.MinValue.ToString);

	        End If;

	        //Проверка наличия параметра MAXVAL

	        If DecimalSlider.MaxValueDefined Then

	            Debug.WriteLine("Максимальное значение (MAXVAL): " + DecimalSlider.MaxValue.ToString);

	        End If;

	        //Проверка наличия параметра STEP

	        If DecimalSlider.StepDefined Then

	            Debug.WriteLine("Шаг изменения значения (STEP): " + DecimalSlider.Step_.ToString);

	        End If;

	    End If;

	End Sub DecimalSliderBindingInfo;


Если строка связи, переданная в качестве входного параметра, соответствует
 редактору значения в виде ползунка десятичных значений, то в результате
 выполнения примера в окно консоли будут выведены параметры данного ползунка.


См. также:


[IBindingDecimalSlider](IBindingDecimalSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
