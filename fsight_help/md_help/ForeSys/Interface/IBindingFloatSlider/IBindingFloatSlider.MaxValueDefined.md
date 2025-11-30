# IBindingFloatSlider.MaxValueDefined

IBindingFloatSlider.MaxValueDefined
-


# IBindingFloatSlider.MaxValueDefined


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
	 Для задания значения данного параметра используйте свойство [IBindingFloatSlider.MaxValue](IBindingFloatSlider.MaxValue.htm);


	- False. В строке связи
	 отсутствует параметр «MAXVAL».


## Пример


Данная процедура выполняет проверку строки связи, переданной в качестве
 входного параметра SourceBinding.


	Sub FloatSliderBindingInfo(SourceBinding: String);

	Var

	    BM: IBindingManager;

	    Binding: IBindingValue;

	    Slider: IBindingFloatSlider;

	Begin

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByValue(SourceBinding);

	    If Binding.UI = "FloatSlider" Then

	        Slider := Binding As IBindingFloatSlider;

	        //Проверка наличия параметра VALUE

	        If Slider.ValueDefined Then

	            Debug.WriteLine("Значение по умолчанию (VALUE): " + Slider.Value.ToString);

	        End If;

	        //Проверка наличия параметра MINVAL

	        If Slider.MinValueDefined Then

	            Debug.WriteLine("Минимальное значение (MINVAL): " + Slider.MinValue.ToString);

	        End If;

	        //Проверка наличия параметра MAXVAL

	        If Slider.MaxValueDefined Then

	            Debug.WriteLine("Максимальное значение (MAXVAL): " + Slider.MaxValue.ToString);

	        End If;

	        //Проверка наличия параметра STEP

	        If Slider.StepDefined Then

	            Debug.WriteLine("Шаг изменения значения (STEP): " + Slider.Step_.ToString);

	        End If;

	    End If;

	End Sub FloatSliderBindingInfo;


Если строка связи, переданная в качестве входного параметра, соответствует
 редактору значения в виде ползунка вещественных значений, то в результате
 выполнения примера в окно консоли будут выведены параметры данного ползунка.


См. также:


[IBindingFloatSlider](IBindingFloatSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
