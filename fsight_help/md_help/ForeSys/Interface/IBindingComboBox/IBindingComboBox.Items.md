# IBindingComboBox.Items

IBindingComboBox.Items
-


# IBindingComboBox.Items


## Синтаксис


Items: String;


## Описание


Свойство Items определяет значение
 параметра «ITEMS» в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «ITEMS» определяет
 коллекцию элементов комбинированного списка. Элементы указываются в виде
 символьной строки и разделяются символом, который задан в свойстве [IBindingComboBox.Separators](IBindingComboBox.Separators.htm).


Свойство Items доступно для
 использования, если свойству [IBindingComboBox.ItemsDefined](IBindingComboBox.ItemsDefined.htm)
 установлено значение True. При
 изменении свойства Items свойству
 [IBindingComboBox.ItemsDefined](IBindingComboBox.ItemsDefined.htm)
 автоматически устанавливается значение True.


## Пример


	Function CreateComboBoxBidning(Paramarray Items: Array Of String): String;

	Var

	    BM: IBindingManager;

	    ComboBoxBinding: IBindingComboBox;

	    s, LineItems: String;

	Begin

	    BM := New BindingManager.Create;

	    ComboBoxBinding := BM.CreateByUi("ComboBox") As IBindingComboBox;

	    //Формирование строки из элементов, разделенных символом ";"

	    For Each s In Items Do

	        LineItems := String.Concat(LineItems, s + ";");

	    End For;

	    //Убираем последний символ разделителя

	    LineItems := LineItems.SubString(0, LineItems.Length - 1);

	    //Элементы

	    ComboBoxBinding.Items := LineItems;

	    //Возможность редактирования

	    ComboBoxBinding.ListMode := False;

	    //Разделитель для элементов

	    ComboBoxBinding.Separators := ";";

	    //Значение по умолчанию

	    ComboBoxBinding.Value := Items[0];

	    Return ComboBoxBinding.AsString;

	End Function CreateComboBoxBidning;


Данная функция генерирует строку связи для использования редактора значения
 в виде комбинированного списка. Элементы списка передаются в виде массива
 входных параметров строкового типа, для разделения элементов будет использоваться
 символ «;». В комбинированном списке будет возможность ручного ввода значения.


См. также:


[IBindingComboBox](IBindingComboBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
