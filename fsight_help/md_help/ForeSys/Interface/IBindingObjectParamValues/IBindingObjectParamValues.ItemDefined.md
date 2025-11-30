# IBindingObjectParamValues.ItemDefined

IBindingObjectParamValues.ItemDefined
-


# IBindingObjectParamValues.ItemDefined


## Синтаксис


ItemDefined(Index: Integer): Boolean;


## Параметры


Index. Номер параметра.


## Описание


Свойство ItemDefined определяет
 признак наличия параметра с указанными номером в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Если свойству ItemDefined установлено
 значение True, то в строке связи,
 описывающей редактор значения, будет присутствовать параметр с указанным
 номером. Значение данного параметра определяет свойство [IBindingObjectParamValues.Item](IBindingObjectParamValues.Item.htm).


## Пример


	Sub DimComboParamInfo(SourceBinding: String);

	Var

	    BM: IBindingManager;

	    Binding: IBindingValue;

	    DimComboBinding: IBindingDimCombo;

	    Params: IBindingObjectParamValues;

	    i: Integer;

	Begin

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByValue(SourceBinding);

	    If Binding.UI = "DimCombo" Then

	        DimComboBinding := Binding As IBindingDimCombo;

	        Params := DimComboBinding.ParamValues;

	        If Params.Count > 0 Then

	            //Проверка наличия параметра YEAR_START, который создается в календарном справочнике

	            If Params.ValueDefined("PARAMID_YEAR_START") Then

	                Debug.WriteLine("YEAR_START: " + Params.Value("PARAMID_YEAR_START"));

	            End If;

	            //Проверка наличия параметра YEAR_FINISH, который создается в календарном справочнике

	            If Params.ValueDefined("PARAMID_YEAR_FINISH") Then

	                Debug.WriteLine("YEAR_FINISH: " + Params.Value("PARAMID_YEAR_FINISH"));

	            End If;

	            //Проверка параметров по номерам

	            For i := 1 To Params.Count Do

	                If Params.ItemDefined(i) Then

	                    Debug.WriteLine("Параметр №" + i.ToString + ". Значение: " + Params.Item(i));

	                End If;

	            End For;

	        End If;

	    End If;

	End Sub DimComboParamInfo;


Данная функция осуществляет проверку строки связи, передаваемой в качестве
 входного параметра SourceBinding.
 Если строка связи соответствует редактору в виде раскрывающегося списка
 справочника и имеет в тексте значения параметров, передаваемые для открытия
 справочника, то эти значения будут выведены в консоль среды разработки.


См. также:


[IBindingObjectParamValues](ibindingobjectparamvalues.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
