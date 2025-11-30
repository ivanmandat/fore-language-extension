# IBindingDateTimePicker.CheckBoxDefined

IBindingDateTimePicker.CheckBoxDefined
-


# IBindingDateTimePicker.CheckBoxDefined


## Синтаксис


CheckBoxDefined: Boolean;


## Описание


Свойство CheckBoxDefined определяет
 признак наличия параметра «CHECKBOX»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Если свойству CheckBoxDefined
 установлено значение True, то
 в строке связи, описывающей редактор значения, будет присутствовать параметр
 «CHECKBOX». Значение данного параметра
 определяет свойство [IBindingDateTimePicker.CheckBox](IBindingDateTimePicker.CheckBox.htm).


## Пример


	Sub DateTimePickerBindingInfo(SourceBinding: String);

	Var

	    BM: IBindingManager;

	    Binding: IBindingValue;

	    DTBinding: IBindingDateTimePicker;

	Begin

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByValue(SourceBinding);

	    If (Binding.UI = "DateTimePicker") Or (Binding.UI = "DatePicker") Or (Binding.UI = "TimePicker") Then

	        DTBinding := Binding As IBindingDateTimePicker;

	        //Проверка наличия параметра CHECKBOX

	        If DTBinding.CheckBoxDefined Then

	            Debug.WriteLine("CHECKBOX: " + DTBinding.CheckBox.ToString);

	        End If;

	        //Проверка наличия параметра SET_FOCUS_ON_CHECK_BOX

	        If DTBinding.CheckBoxFocusDefined Then

	            Debug.WriteLine("SET_FOCUS_ON_CHECK_BOX: " + DTBinding.CheckBoxFocus.ToString);

	        End If;

	        //Проверка наличия параметра DROPCALENDAR

	        If DTBinding.DropCalendarDefined Then

	            Debug.WriteLine("DROPCALENDAR: " + DTBinding.DropCalendar.ToString);

	        End If;

	        //Проверка наличия параметра MINVAL

	        If DTBinding.MinValueDefined Then

	            Debug.WriteLine("MINVAL: " + DTBinding.MinValue.ToString);

	        End If;

	        //Проверка наличия параметра MAXVAL

	        If DTBinding.MaxValueDefined Then

	            Debug.WriteLine("MAXVAL: " + DTBinding.MaxValue.ToString);

	        End If;

	        //Проверка наличия параметра SPIN

	        If DTBinding.SpinDefined Then

	            Debug.WriteLine("SPIN: " + DTBinding.Spin.ToString);

	        End If;

	        //Проверка наличия параметра SHOWTIME

	        If DTBinding.TimeDefined Then

	            Debug.WriteLine("SHOWTIME: " + DTBinding.Time.ToString);

	        End If;

	        //Проверка наличия параметра VALUE

	        If DTBinding.ValueDefined Then

	            Debug.WriteLine("VALUE: " + DTBinding.Value.ToString);

	        End If;

	    End If;

	End Sub DateTimePickerBindingInfo;


Данная функция осуществляет проверку строки связи, передаваемой в качестве
 входного параметра SourceBinding.
 Если строка связи соответствует редактору даты/времени, то значения параметров,
 которые для него определены, будут выведены в консоль среды разработки.


См. также:


[IBindingDateTimePicker](IBindingDateTimePicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
