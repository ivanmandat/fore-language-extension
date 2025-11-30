# IBindingTreeCombo.NodesDefined

IBindingTreeCombo.NodesDefined
-


# IBindingTreeCombo.NodesDefined


## Синтаксис


NodesDefined: Boolean;


## Описание


Свойство NodesDefined определяет
 признак наличия параметра «NODES»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Если свойству NodesDefined установлено
 значение True, то в строке связи,
 описывающей редактор значения, будет присутствовать параметр «NODES».
 Значение данного параметра определяет свойство [IBindingTreeCombo.Nodes](IBindingTreeCombo.Nodes.htm).


## Пример


	Sub TreeComboBindingInfo(SourceBinding: String);

	Var

	    BM: IBindingManager;

	    Binding: IBindingValue;

	    TreeComboBinding: IBindingTreeCombo;

	Begin

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByValue(SourceBinding);

	    If Binding.UI = "TreeCombo" Then

	        TreeComboBinding := Binding As IBindingTreeCombo;

	        //Проверка наличия параметра NODES

	        If TreeComboBinding.NodesDefined Then

	            Debug.WriteLine("NODES: " + TreeComboBinding.Nodes);

	        End If;

	        //Проверка наличия параметра SEPARATORS

	        If TreeComboBinding.SeparatorsDefined Then

	            Debug.WriteLine("SEPARATORS: " + TreeComboBinding.Separators);

	        End If;

	        //Проверка наличия параметра VALUE

	        If TreeComboBinding.ValueDefined Then

	            Debug.WriteLine("VALUE: " + TreeComboBinding.Value);

	        End If;

	    End If;

	End Sub TreeComboBindingInfo;


Данная функция осуществляет проверку строки связи, передаваемой в качестве
 входного параметра SourceBinding.
 Если строка связи соответствует редактору в виде комбинированного дерева,
 то значения параметров, которые для него определены, будут выведены в
 консоль среды разработки.


См. также:


[IBindingTreeCombo](IBindingTreeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
