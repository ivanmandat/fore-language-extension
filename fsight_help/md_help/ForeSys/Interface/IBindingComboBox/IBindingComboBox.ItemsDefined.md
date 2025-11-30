# IBindingComboBox.ItemsDefined

IBindingComboBox.ItemsDefined
-


# IBindingComboBox.ItemsDefined


## Синтаксис


ItemsDefined: Boolean;


## Описание


Свойство ItemsDefined определяет
 признак наличия параметра «ITEMS»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Если свойству ItemsDefined установлено
 значение True, то в строке связи,
 описывающей редактор значения, будет присутствовать параметр «ITEMS».
 Значение данного параметра определяет свойство [IBindingComboBox.Items](IBindingComboBox.Items.htm).


## Пример


	Sub ComboBoxBindingInfo(SourceBinding: String);

	Var

	    BM: IBindingManager;

	    Binding: IBindingValue;

	    ComboBoxBinding: IBindingComboBox;

	Begin

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByValue(SourceBinding);

	    If Binding.UI = "ComboBox" Then

	        ComboBoxBinding := Binding As IBindingComboBox;

	        //Проверка наличия параметра ITEMS

	        If ComboBoxBinding.ItemsDefined Then

	            Debug.WriteLine("ITEMS: " + ComboBoxBinding.Items);

	        End If;

	        //Проверка наличия параметра LISTMODE

	        If ComboBoxBinding.ListModeDefined Then

	            Debug.WriteLine("LISTMODE: " + ComboBoxBinding.ListMode.ToString);

	        End If;

	        //Проверка наличия параметра SEPARATORS

	        If ComboBoxBinding.SeparatorsDefined Then

	            Debug.WriteLine("SEPARATORS: " + ComboBoxBinding.Separators);

	        End If;

	    End If;

	End Sub ComboBoxBindingInfo;


Данная функция осуществляет проверку строки связи, передаваемой в качестве
 входного параметра SourceBinding.
 Если строка связи соответствует редактору в виде комбинированного списка,
 то значения параметров, которые для него определены, будут выведены в
 консоль среды разработки.


См. также:


[IBindingComboBox](IBindingComboBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
